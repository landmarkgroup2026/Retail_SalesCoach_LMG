import os
import re
import math
import pdfplumber
import docx

KB_DIR = r"d:\Projects\voice bot\KB"

# English and Arabic Stopwords
STOPWORDS_EN = {
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "with", 
    "by", "about", "against", "between", "into", "through", "during", "before", 
    "after", "above", "below", "of", "to", "from", "up", "down", "in", "out", 
    "on", "off", "over", "under", "again", "further", "then", "once", "here", 
    "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", 
    "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", 
    "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", 
    "should", "now", "i", "you", "he", "she", "it", "we", "they", "my", "your", 
    "his", "her", "its", "our", "their", "me", "him", "them", "us"
}

STOPWORDS_AR = {
    "من", "في", "على", "إلى", "عن", "مع", "حتى", "إذا", "أن", "إن", "هو", "هي", 
    "هم", "هن", "هذا", "هذه", "ذلك", "التي", "الذي", "الذين", "كل", "بعض", "ما", 
    "من", "لا", "ماذا", "كيف", "هل", "ثم", "أو", "لكن", "بل", "قد", "لقد", "كان", 
    "كانت", "يكون", "تكون", "تم", "تمت", "يا", "لقد", "هؤلاء", "أولئك", "أين", 
    "متى", "كم", "لماذا", "التي", "اللواتي", "الذين", "بعد", "قبل", "عند", "بين"
}

ALL_STOPWORDS = STOPWORDS_EN.union(STOPWORDS_AR)

class DocumentChunk:
    def __init__(self, text, doc_name, page=1, paragraph=1, language="ENGLISH"):
        self.text = text.strip()
        self.doc_name = doc_name
        self.page = page
        self.paragraph = paragraph
        self.language = language
        self.tokens = self._tokenize(self.text)

    @staticmethod
    def _tokenize(text):
        # Normalize and find all words (Arabic script and English alphabetic)
        words = re.findall(r'[\u0600-\u06FFa-zA-Z0-9]+', text.lower())
        # Filter out stopwords
        return [w for w in words if w not in ALL_STOPWORDS and len(w) > 1]

class RAGEngine:
    def __init__(self, kb_dir=KB_DIR):
        self.kb_dir = kb_dir
        self.chunks = []
        self.vocab = set()
        self.df = {}  # Document frequencies of terms
        self.idf = {} # IDF values for term vocabulary
        self.chunk_vectors = [] # List of term weight dictionaries for each chunk
        self.initialized = False
        
    def rebuild_index(self):
        """Extracts text from all files in KB_DIR and builds TF-IDF index."""
        print("[RAG] Indexing starting...")
        self.chunks = []
        self.vocab = set()
        self.df = {}
        self.idf = {}
        self.chunk_vectors = []
        
        if not os.path.exists(self.kb_dir):
            print(f"[RAG] Warning: KB directory '{self.kb_dir}' does not exist.")
            self.initialized = True
            return
            
        for filename in os.listdir(self.kb_dir):
            file_path = os.path.join(self.kb_dir, filename)
            if not os.path.isfile(file_path):
                continue
                
            # Skip empty files
            if os.path.getsize(file_path) == 0:
                print(f"[RAG] Skipping empty file: {filename}")
                continue
                
            ext = os.path.splitext(filename)[1].lower()
            lang = "ARABIC" if any(c in filename for c in ["أ", "ب", "ت", "ج", "د", "ر", "س", "ش", "ع", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "دليل", "مبيعات"]) else "ENGLISH"
            
            try:
                if ext == ".pdf":
                    self._parse_pdf(file_path, filename, lang)
                elif ext in (".docx", ".doc"):
                    self._parse_docx(file_path, filename, lang)
                elif ext == ".txt":
                    self._parse_txt(file_path, filename, lang)
                else:
                    print(f"[RAG] Skipping unsupported file type: {filename}")
            except Exception as e:
                print(f"[RAG] Error parsing {filename}: {e}")
                
        # Build TF-IDF weights
        N = len(self.chunks)
        print(f"[RAG] Extracted {N} semantic text chunks from documents.")
        
        if N == 0:
            self.initialized = True
            return
            
        # 1. Compute DF (Document Frequency)
        for chunk in self.chunks:
            unique_terms = set(chunk.tokens)
            for term in unique_terms:
                self.vocab.add(term)
                self.df[term] = self.df.get(term, 0) + 1
                
        # 2. Compute IDF
        for term, freq in self.df.items():
            self.idf[term] = math.log((1 + N) / (1 + freq)) + 1 # Smoothing applied
            
        # 3. Compute TF-IDF vector for each chunk
        for chunk in self.chunks:
            vector = {}
            term_counts = {}
            for t in chunk.tokens:
                term_counts[t] = term_counts.get(t, 0) + 1
                
            max_tf = max(term_counts.values()) if term_counts else 1
            
            for term, count in term_counts.items():
                tf = count / max_tf # Normalized TF
                vector[term] = tf * self.idf[term]
                
            # Compute Vector L2 norm
            sq_sum = sum(val ** 2 for val in vector.values())
            l2_norm = math.sqrt(sq_sum) if sq_sum > 0 else 1.0
            
            # Normalize vector to unit length
            norm_vector = {term: val / l2_norm for term, val in vector.items()}
            self.chunk_vectors.append(norm_vector)
            
        self.initialized = True
        print(f"[RAG] Index completed. Vocabulary size: {len(self.vocab)} terms.")

    def _parse_pdf(self, path, filename, default_lang):
        with pdfplumber.open(path) as pdf:
            for page_idx, page in enumerate(pdf.pages):
                text = page.extract_text()
                if not text:
                    continue
                
                # Detect language page level
                arabic_chars = len(re.findall(r'[\u0600-\u06FF]', text))
                english_chars = len(re.findall(r'[a-zA-Z]', text))
                lang = "ARABIC" if arabic_chars > english_chars else default_lang
                
                # Chunk page into paragraphs or overlapping windows
                paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
                for para_idx, para in enumerate(paragraphs):
                    if len(para) < 30: # Ignore tiny lines/headers
                        continue
                    self.chunks.append(DocumentChunk(
                        text=para,
                        doc_name=filename,
                        page=page_idx + 1,
                        paragraph=para_idx + 1,
                        language=lang
                    ))

    def _parse_docx(self, path, filename, lang):
        doc = docx.Document(path)
        chunk_text = ""
        para_idx = 1
        
        for p in doc.paragraphs:
            text = p.text.strip()
            if not text:
                continue
                
            # If paragraph is large enough, treat as chunk
            if len(text) > 200:
                self.chunks.append(DocumentChunk(
                    text=text,
                    doc_name=filename,
                    page=1,
                    paragraph=para_idx,
                    language=lang
                ))
                para_idx += 1
            else:
                # Accumulate short paragraphs
                chunk_text += text + "\n"
                if len(chunk_text) > 600:
                    self.chunks.append(DocumentChunk(
                        text=chunk_text,
                        doc_name=filename,
                        page=1,
                        paragraph=para_idx,
                        language=lang
                    ))
                    chunk_text = ""
                    para_idx += 1
                    
        if chunk_text.strip():
            self.chunks.append(DocumentChunk(
                text=chunk_text,
                doc_name=filename,
                page=1,
                paragraph=para_idx,
                language=lang
            ))

    def _parse_txt(self, path, filename, lang):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            
        paragraphs = [p.strip() for p in content.split("\n\n") if p.strip()]
        for idx, p in enumerate(paragraphs):
            if len(p) > 20:
                self.chunks.append(DocumentChunk(
                    text=p,
                    doc_name=filename,
                    page=1,
                    paragraph=idx + 1,
                    language=lang
                ))

    def query(self, query_text, top_k=3, lang_filter=None):
        """Queries the TF-IDF index for the top_k matching chunks."""
        if not self.initialized:
            self.rebuild_index()
            
        if not self.chunks:
            return []
            
        # Tokenize query
        words = re.findall(r'[\u0600-\u06FFa-zA-Z0-9]+', query_text.lower())
        query_tokens = [w for w in words if w not in ALL_STOPWORDS]
        
        if not query_tokens:
            # Fallback to simple query terms if all are stopwords
            query_tokens = [w for w in words if len(w) > 1]
            if not query_tokens:
                return []
                
        # Compute query vector (TF * IDF)
        q_vector = {}
        for t in query_tokens:
            if t in self.vocab:
                q_vector[t] = q_vector.get(t, 0) + 1
                
        max_q_tf = max(q_vector.values()) if q_vector else 1
        for term in q_vector:
            q_vector[term] = (q_vector[term] / max_q_tf) * self.idf[term]
            
        # L2 Normalize query vector
        q_sq_sum = sum(v ** 2 for v in q_vector.values())
        q_norm = math.sqrt(q_sq_sum) if q_sq_sum > 0 else 1.0
        q_vector = {term: val / q_norm for term, val in q_vector.items()}
        
        # Calculate cosine similarity with all chunk vectors
        scored_chunks = []
        for idx, chunk in enumerate(self.chunks):
            # Optional language filter
            if lang_filter and chunk.language != lang_filter:
                continue
                
            chunk_vec = self.chunk_vectors[idx]
            
            # Cosine similarity (dot product of normalized vectors)
            dot_product = 0.0
            for term, q_val in q_vector.items():
                if term in chunk_vec:
                    dot_product += q_val * chunk_vec[term]
                    
            if dot_product > 0.0:
                scored_chunks.append((dot_product, chunk))
                
        # Sort by score descending
        scored_chunks.sort(key=lambda x: x[0], reverse=True)
        return scored_chunks[:top_k]

    def generate_response(self, query_text, personality, lang="en"):
        """Generates a dynamic senior consultant coaching response based on RAG retrieval."""
        lang_filter = "ARABIC" if lang == "ar" else "ENGLISH"
        results = self.query(query_text, top_k=2, lang_filter=lang_filter)
        
        if not results:
            results = self.query(query_text, top_k=2)
            
        is_ar = (lang == "ar")
        
        if not results:
            return None # Fallback to offline consultant database
            
        top_score, best_chunk = results[0]
        retrieved_text = best_chunk.text
        doc_ref = f"{best_chunk.doc_name}, Page {best_chunk.page}" if ext_is_pdf(best_chunk.doc_name) else f"{best_chunk.doc_name}, Section {best_chunk.paragraph}"
        
        clean_context = clean_retrieved_text(retrieved_text, is_ar)
        
        if is_ar:
            # 1. Executive Insight
            executive_insight = f"بصفتي مستشاراً أولاً لتحول التجزئة بـ 20 عاماً من الخبرة، يتطلب هذا الموقف في مجموعة لاند مارك تدخلاً فورياً لبناء قدرات الخطوط الأمامية. يجب أن نتبنى أفضل الممارسات العالمية في إنتاجية الفروع وتجربة العملاء المتميزة لتأمين المبيعات والسرعة."
            
            # 2. Root Cause Analysis
            root_cause = f"السبب السطحي هو مجرد استفسار عادي بخصوص {query_text}، لكن السبب الجذري الفعلي هو ضعف انضباط التنفيذ في صالة العرض وغياب التمكين الفئوي للموظفين، مما يخلق عائقاً شرائياً خلال ساعات الذروة في دول الخليج."
            
            # 3. Recommended Intervention
            recommended_intervention = f"تطبيق بروتوكول المبيعات المساعدة الفوري في صالة العرض لاند مارك. إعادة تنظيم تجربة الفئة وتدريب الموظفين بناءً على معاييرنا المعتمدة: '{clean_context[:220]}...'"
            
            # 4. Execution Roadmap
            roadmap_day1 = "توجيه صباحي لمدير الفرع والمشرفين، وتحديد ثغرات صالة العرض فوراً."
            roadmap_week1 = "تطبيق برنامج تدريب مصغر للخطوط الأمامية وتعديل تنسيق العرض وامتثال الرفوف."
            roadmap_longterm = "مراقبة وتحليل أثر التدخل على مؤشر متوسط المعاملات (ATV) ونسبة التحويل خلال 30-60-90 يوماً."
            
            # 5. Tools & Frameworks
            tools_frameworks = f"دليل المبيعات المساعدة لمجموعة لاند مارك، قائمة تدقيق SOP لعرض الفئات المستوحاة من المعايير الرائدة، سيناريو معالجة الاعتراضات للخطوط الأمامية."
            
            # 6. Success Metrics
            success_metrics = "زيادة نسبة التحويل بمقدار +15%، وتحسين مؤشر ATV بنسبة +12%، وامتثال كامل لصالة العرض بنسبة 100%."
            
            # Spoken Text
            spoken_text = "إليك توصيتي الاستشارية الفورية لمجموعة لاند مارك. السبب الجذري هو ضعف التمكين في صالة العرض. يجب تفعيل بروتوكول المبيعات المساعدة فوراً لرفع الإنتاجية بنسبة اثني عشر بالمئة."
        else:
            # 1. Executive Insight
            executive_insight = f"As a Senior Retail Transformation Consultant with 20+ years of experience, I diagnose that this situation at Landmark Group demands an immediate frontline capability intervention. We must benchmark against best-in-class store productivity and customer experience standards to secure rapid conversion."
            
            # 2. Root Cause Analysis
            root_cause = f"The surface issue is a standard frontline query regarding '{query_text}'. The real root cause is a lack of frontline execution rigor and inadequate category enablement, creating high friction during GCC peak traffic hours."
            
            # 3. Recommended Intervention
            recommended_intervention = f"Deploy an active assisted-selling floor intervention tailored specifically for Landmark. Re-align category experience mapping and frontline training using our core database protocols: '{clean_context[:220]}...'"
            
            # 4. Execution Roadmap
            roadmap_day1 = "Align store managers during the morning huddle and deploy active floor visual observations."
            roadmap_week1 = "Conduct daily micro-coaching sessions on category guidelines and verify visual display compliance."
            roadmap_longterm = "Conduct L&D capability audits and measure rolling ATV and conversion impacts in a 30-60-90 day performance review."
            
            # 5. Tools & Frameworks
            tools_frameworks = "Landmark Assisted-Selling SOP Flowchart, SOP Category Audit Checklist benchmarking leading industry standards, Frontline Capability Evaluation Matrix."
            
            # 6. Success Metrics
            success_metrics = "+15% Conversion Rate, +12% Average Transaction Value (ATV) lift, 100% visual merchandising compliance."
            
            # Spoken Text
            spoken_text = "Here is my strategic intervention. The root cause is a breakdown in frontline category experience. We must deploy active assisted-selling immediately to lift Landmark's store productivity by twelve percent."

        # Apply retail consultant personality calibration
        executive_insight, spoken_text = apply_personality_tuning(executive_insight, spoken_text, personality, is_ar)
        
        return {
            "executiveInsight": executive_insight,
            "rootCause": root_cause,
            "recommendedIntervention": recommended_intervention,
            "roadmap": {
                "day1": roadmap_day1,
                "week1": roadmap_week1,
                "longTerm": roadmap_longterm
            },
            "toolsFrameworks": tools_frameworks,
            "successMetrics": success_metrics,
            "source": doc_ref,
            "spokenText": spoken_text,
            "score": round(top_score, 3)
        }

def ext_is_pdf(filename):
    return filename.lower().endswith(".pdf")

def clean_retrieved_text(text, is_ar):
    text = re.sub(r'["\'[\]{}]', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def apply_personality_tuning(insight, spoken, personality, is_ar):
    """Calibrates consultant tone and spoken speech output based on selected coach personality."""
    if is_ar:
        if "حماسي" in personality or "Puck" in personality:
            insight = "مرحباً بك! " + insight
            spoken = "بصفتي مدربك الاستشاري الحماسي، ثق تماماً أننا سنحدث تحولاً رائعاً في صالة العرض! " + spoken
        elif "حازم" in personality or "Charon" in personality:
            insight = "توجيه استشاري رسمي: " + insight
            spoken = "توجيه رسمي من مستشارك القيادي. التزام الموظفين بالبروتوكول الصارم هو السبيل الوحيد للنجاح. " + spoken
        elif "هادئ" in personality or "Zephyr" in personality:
            insight = "رؤية استشارية متوازنة: " + insight
            spoken = "لا داعي للاستعجال، دعنا ننظر بهدوء ومنهجية إلى ثغرات صالة العرض ونحلها خطوة بخطوة. " + spoken
        elif "قوي" in personality or "Fenrir" in personality:
            insight = "تدخل استشاري حاسم: " + insight
            spoken = "نحن لا نساوم على إنتاجية المتجر. خذ هذه الاستراتيجية الجريئة وطبقها فوراً لتكتسح المنافسين. " + spoken
    else:
        if "Energetic" in personality or "Puck" in personality:
            insight = "Welcome! " + insight
            spoken = "As your energetic transformation consultant, I am thrilled to drive this high-impact store operation! " + spoken
        elif "Authoritative" in personality or "Charon" in personality:
            insight = "Formal Executive Advisory: " + insight
            spoken = "Advisory directive from your senior operations consultant. Strict operational rigor is our absolute key to success. " + spoken
        elif "Calm" in personality or "Zephyr" in personality:
            insight = "Balanced Advisory Perspective: " + insight
            spoken = "Take a deep breath. Let's methodically evaluate floor performance and build frontline capabilities step-by-step. " + spoken
        elif "Strong" in personality or "Fenrir" in personality:
            insight = "Decisive Operational Intervention: " + insight
            spoken = "We do not compromise on store execution. Deploy this bold strategy immediately to dominate our sales metrics. " + spoken
            
    return insight, spoken

# Singleton engine instance
rag_engine = RAGEngine()
