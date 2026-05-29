/* ==========================================================================
   Retail Sales Pro - Unified Orchestration Script (No Imports/Exports)
   Runs seamlessly in local file:// browser contexts
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Translations Database
// --------------------------------------------------------------------------
const translations = {
  en: {
    welcomeTitle: "Welcome to Retail Sales Pro",
    welcomeSub: "Optimize your store performance with data-driven insights. Select your portal to begin.",
    guestAccess: "Guest Access",
    guestDesc: "Store staff entryway for the Sales Coach and Visual Auditor tools.",
    adminPortal: "Admin Portal",
    adminDesc: "Management interface for Knowledge Base and RAG data configuration.",
    tagSalesCoach: "SALES COACH",
    tagVisualAuditor: "VISUAL AUDITOR",
    tagKnowledgeBase: "KNOWLEDGE BASE",
    tagRagConfig: "RAG CONFIG",
    copyright: "© 2026 Retail Sales Pro. Built for high-performance teams.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    helpCenter: "Help Center",
    support: "Support",
    legal: "Legal",

    appName: "Retail Sales Pro",
    guestBadge: "GUEST ACCESS",
    adminBadge: "ADMIN PORTAL",
    switchLanguage: "العربية",
    langCode: "ar",
    logout: "Exit Portal",

    coachTab: "Sales Coach",
    textCoachTab: "Go to Text coaching",
    auditorTab: "Visual Auditor",
    dashboardTab: "Dashboard",
    reportsTab: "Reports",
    voiceTextTitle: "VOICE & TEXT COACH",
    welcomeCoachGreeting: "Hello, I am your coach. How can I guide you today?",
    tipOfDay: "TIP OF THE DAY",
    tipContent: '"Always acknowledge customers within 30 seconds of entry to boost conversion by 15%."',
    faqHeader: "FREQUENTLY ASKED QUESTIONS",
    faqTabCustomer: "Customer Qs",
    faqTabPolicy: "Store Policy",
    faqDefaultQ: "How do I handle a return without a receipt?",
    faqDefaultA: "Direct the customer to the manager for a possible store credit verification.",
    
    personalityEnergetic: "Energetic (Puck)",
    personalityAuthoritative: "Authoritative (Charon)",
    personalityProfessional: "Professional (Kore)",
    personalityStrong: "Strong (Fenrir)",
    personalityCalm: "Calm (Zephyr)",

    micTapToTalk: "Tap microphone to speak to your coach...",
    micListening: "Listening... Speak now",
    micProcessing: "Analyzing response...",
    speakObjection: "Speak your customer's objection or ask a product query:",

    textPlaceholder: "Type customer query or objection here...",
    send: "Send",
    failSafeHeader: "Chat Fail-Safe (Quick Objections)",
    objectionTooExpensive: "Too expensive",
    objectionNoSize: "Out of size",
    objectionJustLooking: "Just looking",
    objectionCompareBrand: "Compare with brand X",
    objectionWarranty: "Is there a warranty?",
    typingIndicator: "Coach is typing...",

    auditorBadge: "VISUAL AUDITOR",
    floorScanActive: "Floor Scan Active",
    readyCompliance: "Ready for visual compliance check",
    takePhoto: "Take Photo",
    uploadImage: "Upload Image",
    scanRef: "SCAN_REF_7742.JPG",
    processedBadge: "PROCESSED",
    scanningText: "Scanning shelf layout and stock compliance...",
    
    contextData: "Contextual Data",
    storeLocation: "Store Location",
    locationValue: "Flagship - Downtown",
    department: "Department",
    deptValue: "Men's Premium Apparel",
    auditFreq: "Audit Frequency",
    freqValue: "Bi-Weekly",

    immediateAction: "IMMEDIATE ACTION REQUIRED",
    actionTitle: "RESTOCK FRONT-OF-HOUSE DENIM DISPLAY",
    actionDesc: "Stock levels for hero items have fallen below 15%. This shelf is currently underperforming relative to peak-hour footfall expectations.",
    
    kpiCompliance: "COMPLIANCE",
    valCompliance: "75% Adherence",
    descCompliance: "Missing seasonal promotional signage on the secondary island display.",

    kpiGap: "INVENTORY GAP",
    valGap: "Critical Outage",
    descGap: "Size 32 Slim Fit Denim completely exhausted from floor view.",

    kpiConversion: "CONVERSION",
    valConversion: "Cross-Sell Opt.",
    descConversion: "Placement of Leather Belts currently lacks visibility. Recommend central grouping.",

    auditorDeepDive: "VISUAL AUDITOR DEEP-DIVE",
    exportPdf: "Export PDF",
    deepDiveText: '"The current floor plan exhibits high traffic velocity but lacks sufficient \'stopping power\' in the mid-section. Our analysis suggests that the color blocking on the denim wall is visually dense, creating cognitive friction for the shopper rather than a clear navigation path."',
    
    actionableRec: "ACTIONABLE RECOMMENDATION",
    rec1: "Implement 'Light-to-Dark' color gradient from aisle entry.",
    rec2: "Add 'Lifestyle Imagery' at eye level on Pillar 4.",
    estRevenueLift: "EST. REVENUE LIFT",
    revenueLiftVal: "+12%",

    kbHeader: "Internal Knowledge Base",
    kbSub: "Manage the proprietary data used for RAG coaching insights.",
    addDocument: "+ Add Document",
    totalRecords: "TOTAL RECORDS",
    indexHealth: "INDEX HEALTH",
    avgLatency: "AVG. LATENCY",
    filterPlaceholder: "Filter documents...",
    colDocName: "DOCUMENT NAME",
    colStatus: "STATUS",
    colUpdated: "LAST UPDATED",
    colLanguage: "LANGUAGE",
    colActions: "ACTIONS",
    showingEntries: "Showing 1 to 4 of 48 entries",
    btnPrev: "Prev",
    btnNext: "Next",

    systemInsightTitle: "System Insight",
    systemInsightDesc: "Your Arabic language training set is currently 30% smaller than the English set. Adding more Arabic retail scripts would significantly improve RAG accuracy for your Middle Eastern regional teams.",
    
    menuOverview: "Overview",
    menuDocuments: "Documents",
    menuTrainingData: "Training Data",
    menuAnalytics: "Analytics",
    menuSettings: "Settings",
    managementGroup: "MANAGEMENT",
    uploadDocumentLabel: "Select Document File",
    adminLoginHeader: "Admin Portal Login",

    coachResponses: {
      "Too expensive": {
        "Professional (Kore)": "Acknowledge the concern, then emphasize value: 'I understand price is important. This item uses double-reinforced premium organic cotton, which lasts twice as long. Would you like to feel the weight of the fabric?'",
        "Energetic (Puck)": "Spin it with enthusiasm! 'It is an investment, but trust me, the fit and durability are absolutely worth it! Let's try it on to see why it's a top seller!'",
        "Authoritative (Charon)": "Assert quality: 'Our price reflects the superior construction and 2-year warranty. Cheap alternatives will wear out in months. This is the smart long-term choice.'",
        "Strong (Fenrir)": "Be bold: 'Quality isn't cheap. If you want the best performance and fit on the market today, this is the one. Let's look at the stitching detail.'",
        "Calm (Zephyr)": "Soft reassurance: 'Take your time. It is a premium product, and we want you to feel completely comfortable with your choice. Let's talk about the lifetime cost savings.'"
      },
      "Out of size": {
        "Professional (Kore)": "Offer immediate alternatives: 'Although the 32 is out of stock here, I can check our flagship store or order it for free home delivery. Alternatively, this straight-cut denim in 32 has a very similar fit.'",
        "Energetic (Puck)": "Stay positive! 'No worries at all! I can have this exact size sent straight to your doorstep by tomorrow, or we can check out this new arrivals shelf which has an amazing fit in your size!'",
        "Authoritative (Charon)": "Solve it directly: 'I will check the inventory system immediately. If it's in the back warehouse, I'll fetch it. If not, we will place an express order for you right now.'",
        "Strong (Fenrir)": "Don't settle for the wrong size. Let's order it to your home immediately. It takes 24 hours. In the meantime, let's grab the belt to match it.",
        "Calm (Zephyr)": "Peaceful assistance: 'That is unfortunate, but we can easily resolve this. Let's check our online stock together, or if you prefer, I can hold a pair at our Mall store.'"
      },
      "Just looking": {
        "Professional (Kore)": "Give space with an open door: 'Please feel free to browse. I'm Kore, your coach today. Just so you know, our premium denim display is 20% off today. Let me know if you need anything.'",
        "Energetic (Puck)": "Warm and breezy: 'Awesome! We have some incredible new styles that just dropped. Have fun looking, and I'm right here if you want to test out any fits!'",
        "Authoritative (Charon)": "Guide their path: 'Welcome. Start with the central aisle for our core collection, and the promotional racks are in the rear. Let me know when you're ready to try them.'",
        "Strong (Fenrir)": "Take your time. Check out the denim wall—it's what we're famous for. Let me know if you want to feel the materials.",
        "Calm (Zephyr)": "Relaxed environment: 'No pressure at all. Enjoy your walk through the store. I'm here if you have any questions about the fabrics or sizes.'"
      },
      "Compare with brand X": {
        "Professional (Kore)": "Highlight material differences: 'Brand X uses synthetic polyester blends, whereas our denim is 100% long-staple cotton with 2% elastane for shape retention. It breathes better and holds its fit over time.'",
        "Energetic (Puck)": "Focus on the feeling: 'Brand X is okay, but wait until you feel our stretch tech! It's lightweight, holds everything together, and looks twice as sharp!'",
        "Authoritative (Charon)": "State facts: 'Independent tests show our fabrics have 40% higher tensile strength than Brand X. Our manufacturing is ethical and certified. The choice is clear.'",
        "Strong (Fenrir)": "Exude confidence: 'They focus on mass production; we focus on precision. Look at these rivets and double-stitched pockets. You won't find this quality in Brand X.'",
        "Calm (Zephyr)": "Balanced contrast: 'Both brands have their merits. If you prefer lightweight, everyday comfort that holds its shape through fifty washes, ours is generally preferred.'"
      },
      "default": "Always start by validating the customer's objection: 'I completely understand your point...' then redirect to value, highlight unique selling propositions (USPs), or suggest practical alternatives.",
      INDEXED: "INDEXED",
      Strategy: "Strategy",
      Manual: "Manual",
      Scripts: "Scripts",
      Product: "Product",
      ENGLISH: "ENGLISH",
      ARABIC: "ARABIC",
      voiceCoachCalm: "Voice Coach: Calm Tone",
      genderMale: "Male Voice",
      genderFemale: "Female Voice",
      calmCoachMale: "Calm Coach (Male)",
      calmCoachFemale: "Calm Coach (Female)"
    }
  },
  ar: {
    welcomeTitle: "مرحباً بكم في ريتيل سيلز برو",
    welcomeSub: "حسّن أداء متجرك برؤى مدعومة بالبيانات. اختر البوابة للبدء.",
    guestAccess: "دخول الضيوف",
    guestDesc: "مدخل موظفي المتجر لأدوات مدرب المبيعات والمراقب البصري.",
    adminPortal: "بوابة المسؤول",
    adminDesc: "واجهة الإدارة لقاعدة المعرفة وإعدادات بيانات RAG.",
    tagSalesCoach: "مدرب المبيعات",
    tagVisualAuditor: "المراقب البصري",
    tagKnowledgeBase: "قاعدة المعرفة",
    tagRagConfig: "إعدادات RAG",
    copyright: "© 2026 ريتيل سيلز برو. تم التطوير للفرق عالية الأداء.",
    allRightsReserved: "جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    helpCenter: "مركز المساعدة",
    support: "الدعم الفني",
    legal: "القانونية",

    appName: "ريتيل سيلز برو",
    guestBadge: "دخول الضيوف",
    adminBadge: "بوابة المسؤول",
    switchLanguage: "English",
    langCode: "en",
    logout: "خروج من البوابة",

    coachTab: "مدرب المبيعات",
    textCoachTab: "الانتقال إلى التدريب النصي",
    auditorTab: "المراقب البصري",
    dashboardTab: "لوحة التحكم",
    reportsTab: "التقارير",
    voiceTextTitle: "مدرب الصوت والنص",
    welcomeCoachGreeting: "مرحباً، أنا مدربك الخاص. كيف يمكنني إرشادك اليوم؟",
    tipOfDay: "نصيحة اليوم",
    tipContent: '"احرص دائماً على الترحيب بالعملاء خلال 30 ثانية من دخولهم لزيادة المبيعات بنسبة 15%."',
    faqHeader: "الأسئلة الأكثر شيوعاً",
    faqTabCustomer: "أسئلة العملاء",
    faqTabPolicy: "سياسة المتجر",
    faqDefaultQ: "كيف أتعامل مع إرجاع المنتج بدون إيصال؟",
    faqDefaultA: "وجّه العميل إلى المدير للتحقق من إمكانية الحصول على رصيد متجر.",
    
    personalityEnergetic: "حماسي (باك)",
    personalityAuthoritative: "حازم (شارون)",
    personalityProfessional: "مهني (كوري)",
    personalityStrong: "قوي (فينرير)",
    personalityCalm: "هادئ (زفير)",

    micTapToTalk: "اضغط على الميكروفون للتحدث إلى مدربك...",
    micListening: "جاري الاستماع... تحدث الآن",
    micProcessing: "جاري تحليل الإجابة...",
    speakObjection: "تحدث باعتراض العميل أو استفسر عن منتج:",

    textPlaceholder: "اكتب استفسار العميل أو اعتراضه هنا...",
    send: "إرسال",
    failSafeHeader: "أزرار الاعتراضات السريعة (مساعد الطوارئ)",
    objectionTooExpensive: "السعر مرتفع جداً",
    objectionNoSize: "المقاس غير متوفر",
    objectionJustLooking: "أنا فقط أتفرج",
    objectionCompareBrand: "مقارنة مع العلامة X",
    objectionWarranty: "هل يوجد ضمان؟",
    typingIndicator: "المدرب يكتب الآن...",

    auditorBadge: "المراقب البصري",
    floorScanActive: "المسح الميداني نشط",
    readyCompliance: "جاهز لفحص الامتثال البصري",
    takePhoto: "التقاط صورة",
    uploadImage: "تحميل صورة",
    scanRef: "SCAN_REF_7742.JPG",
    processedBadge: "تمت المعالجة",
    scanningText: "جاري مسح تخطيط الرفوف وامتثال المخزون...",
    
    contextData: "البيانات السياقية",
    storeLocation: "موقع المتجر",
    locationValue: "الفرع الرئيسي - وسط المدينة",
    department: "القسم",
    deptValue: "ملابس الرجال الفاخرة",
    auditFreq: "تكرار التدقيق",
    freqValue: "كل أسبوعين",

    immediateAction: "إجراء فوري مطلوب",
    actionTitle: "إعادة تعبئة منصة عرض الجينز الواجهة",
    actionDesc: "انخفضت مستويات المخزون للسلع الرئيسية عن 15%. هذا الرف يعاني حالياً من ضعف الأداء مقارنة بتوقعات تدفق الزوار في أوقات الذروة.",
    
    kpiCompliance: "الامتثال",
    valCompliance: "التزام بنسبة 75%",
    descCompliance: "غياب اللوحات الترويجية الموسمية على منصة العرض الفرعية.",

    kpiGap: "فجوة المخزون",
    valGap: "نقص حرج",
    descGap: "نفاد جينز المقاس 32 سليم فيت بالكامل من صالة العرض.",

    kpiConversion: "زيادة المبيعات",
    valConversion: "فرصة بيع متقاطع",
    descConversion: "وضع الأحزمة الجلدية يفتقر حالياً للوضوح. يوصى بتجميعها بشكل مركزي.",

    auditorDeepDive: "تحليل عميق للمراقب البصري",
    exportPdf: "تصدير PDF",
    deepDiveText: '"تظهر خطة الطابق الحالية سرعة حركة مرور عالية ولكنها تفتقر إلى قوة الجذب الكافية في القسم الأوسط. يشير تحليلنا إلى أن تكتل الألوان على جدار الجينز كثيف بصرياً، مما يخلق تشتتاً للمتسوق بدلاً من توفير مسار تصفح واضح."',
    
    actionableRec: "توصية قابلة للتنفيذ",
    rec1: "تطبيق تدرج الألوان من 'الفاتح إلى الداكن' من بداية الممر.",
    rec2: "إضافة 'صور نمط الحياة' بمستوى العين على العمود 4.",
    estRevenueLift: "زيادة الإيرادات المتوقعة",
    revenueLiftVal: "+12%",

    kbHeader: "قاعدة المعرفة الداخلية",
    kbSub: "إدارة البيانات الخاصة المستخدمة لرؤى التدريب بنظام RAG.",
    addDocument: "+ إضافة مستند",
    totalRecords: "إجمالي السجلات",
    indexHealth: "سلامة الفهرس",
    avgLatency: "متوسط زمن الاستجابة",
    filterPlaceholder: "تصفية المستندات...",
    colDocName: "اسم المستند",
    colStatus: "الحالة",
    colUpdated: "آخر تحديث",
    colLanguage: "اللغة",
    colActions: "الإجراءات",
    showingEntries: "عرض من 1 إلى 4 من أصل 48 مدخلاً",
    btnPrev: "السابق",
    btnNext: "التالي",

    systemInsightTitle: "رؤى النظام",
    systemInsightDesc: "مجموعة التدريب باللغة العربية حالياً أصغر بنسبة 30% من المجموعة الإنجليزية. إضافة المزيد من النصوص العربية سيحسن دقة نظام RAG بشكل كبير للفرق الإقليمية في الشرق الأوسط.",
    
    menuOverview: "نظرة عامة",
    menuDocuments: "المستندات",
    menuTrainingData: "بيانات التدريب",
    menuAnalytics: "التحليلات",
    menuSettings: "الإعدادات",
    managementGroup: "الإدارة",
    uploadDocumentLabel: "اختر ملف المستند",
    adminLoginHeader: "تسجيل الدخول لبوابة المسؤول",

    coachResponses: {
      "Too expensive": {
        "Professional (Kore)": "تفهم قلق العميل، ثم ركز على القيمة: 'أفهم تماماً أن السعر مهم. هذا المنتج مصنوع من القطن العضوي الفاخر المقوى، الذي يدوم لفترة أطول بمرتين. هل ترغب في معاينة متانة القماش بنفسك؟'",
        "Energetic (Puck)": "اطرحها بحماس! 'إنه استثمار رائع، ولكن صدقني، المظهر والجودة يستحقان كل ريال! دعنا نجربه لتكتشف بنفسك لماذا هو الأكثر مبيعاً لدينا!'",
        "Authoritative (Charon)": "أكد على الجودة: 'يعكس سعرنا جودة التصنيع والضمان لمدة عامين. البدائل الرخيصة ستهترئ في غضون أشهر. هذا هو الخيار الذكي على المدى الطويل.'",
        "Strong (Fenrir)": "كن واثقاً: 'الجودة العالية لها قيمتها. إذا كنت تبحث عن أفضل أداء ومظهر في السوق اليوم، فهذا هو المنتج المناسب. دعنا نلقي نظرة على تفاصيل الخياطة.'",
        "Calm (Zephyr)": "طمأنة هادئة: 'خذ وقتك الكامل. إنه منتج فاخر، ونريدك أن تشعر بالراحة التامة مع اختيارك. دعنا نحسب التوفير على المدى الطويل.'"
      },
      "Out of size": {
        "Professional (Kore)": "اطرح البدائل فوراً: 'على الرغم من نفاد المقاس 32 هنا، يمكنني التحقق من فرعنا الرئيسي أو طلبه لتوصيله مجاناً إلى منزلك. أو يمكنك تجربة هذا الجينز ذو القصّة المستقيمة، فله مقاس مشابه جداً.'",
        "Energetic (Puck)": "ابقَ إيجابياً! 'لا تقلق أبداً! يمكنني شحن هذا المقاس المحدد مباشرة إلى باب منزلك بحلول الغد، أو يمكننا استعراض منصة المنتجات الجديدة التي تتوفر بها مقاسات رائعة تناسبك!'",
        "Authoritative (Charon)": "حل المشكلة مباشرة: 'سأتحقق من نظام المخازن فوراً. إذا كان متوفراً في المستودع الخلفي سأحضره لك. وإذا لم يكن كذلك، فسنقوم بعمل طلب سريع لك الآن.'",
        "Strong (Fenrir)": "ادفع باتجاه الطلب: 'لا تقبل بالمقاس الخاطئ. دعنا نطلبه لمنزلك الآن، وسيصلك خلال 24 ساعة. في غضون ذلك، ما رأيك بمعاينة الحزام المناسب له؟'",
        "Calm (Zephyr)": "مساعدة ودية: 'هذا مؤسف، ولكن يمكننا حل الأمر بسهولة. دعنا نتحقق من مخزوننا الإلكتروني معاً، أو إذا كنت تفضل، يمكنني حجز قطعة لك في فرع المول.'"
      },
      "Just looking": {
        "Professional (Kore)": "منحهم مساحة مع إبقاء الباب مفتوحاً: 'تفضل بالتصفح بكل أريحية. أنا كوري، مدربك اليوم. لمعلوماتك فقط، لدينا خصم 20% على منصة الجينز الفاخرة اليوم. أعلمني إذا احتجت لأي شيء.'",
        "Energetic (Puck)": "ترحيب حار ومريح: 'رائع جداً! لقد وصلت لدينا تشكيلة جديدة مذهلة. استمتع بالتصفح، وأنا متواجد هنا لمساعدتك إذا رغبت في تجربة أي مقاس!'",
        "Authoritative (Charon)": "وجه مسارهم: 'أهلاً بك. ابدأ بالممر الأوسط لمجموعتنا الأساسية، ورفوف العروض الترويجية موجودة في الخلف. أعلمني عندما تكون مستعداً لتجربتها.'",
        "Strong (Fenrir)": "ترحيب سريع: 'خذ وقتك. ألقِ نظرة على جدار الجينز—هذا ما نتميز به. أخبرني إذا كنت ترغب في ملامسة الخامات.'",
        "Calm (Zephyr)": "بيئة مريحة: 'لا توجد أي ضغوط. استمتع بجولتك في المتجر. أنا هنا للإجابة على أي استفسار بخصوص الأقمشة أو المقاسات.'"
      },
      "Compare with brand X": {
        "Professional (Kore)": "وضح الفروق في الخامات: 'تستخدم العلامة X ألياف البوليستر الاصطناعية، بينما جينزنا مصنوع بنسبة 100% من القطن طويل التيلة مع 2% إيلاستين للحفاظ على الشكل. إنه يتنفس بشكل أفضل ويدوم لفترة أطول.'",
        "Energetic (Puck)": "ركز على الشعور والراحة: 'العلامة X جيدة، ولكن انتظر حتى تجرب تقنية التمدد لدينا! إنها خفيفة الوزن، تحافظ على القوام، وتبدو أكثر أناقة بكثير!'",
        "Authoritative (Charon)": "اذكر الحقائق: 'تظهر الاختبارات المستقلة أن أقمشتنا تتمتع بقوة تحمل أعلى بنسبة 40% من العلامة X. تصنيعنا أخلاقي ومعتمد. الخيار واضح.'",
        "Strong (Fenrir)": "ثقة مطلقة: 'هم يركزون على الإنتاج الضخم؛ نحن نركز على الدقة. انظر إلى هذه الكباسات والجيوب مزدوجة الخياطة. لن تجد هذه الجودة لدى العلامة X.'",
        "Calm (Zephyr)": "مقارنة متوازنة: 'لكلا العلامتين مزاياها. ولكن إذا كنت تفضل الراحة اليومية الخفيفة التي تحافظ على شكلها حتى بعد خمسين غسلة، فإن منتجنا هو المفضل عادة.'"
      },
      "default": "ابدأ دائماً بتأكيد تفهمك لاعتراض العميل: 'أفهم وجهة نظرك تماماً...' ثم وجّه الاهتمام إلى القيمة المضافة، أو الميزات الفريدة للمنتج، أو اقترح بدائل عملية.",
      INDEXED: "مفهرس",
      Strategy: "استراتيجية",
      Manual: "دليل إرشادي",
      Scripts: "سيناريوهات",
      Product: "منتجات",
      ENGLISH: "الإنجليزية",
      ARABIC: "العربية",
      voiceCoachCalm: "مدرب الصوت: نبرة هادئة",
      genderMale: "صوت ذكر",
      genderFemale: "صوت أنثى",
      calmCoachMale: "مدرب هادئ (ذكر)",
      calmCoachFemale: "مدربة هادئة (أنثى)"
    }
  }
};

// --------------------------------------------------------------------------
// 2. Sales Coach Voice Config (Calm Tone Calibration)
// --------------------------------------------------------------------------
const genderVoices = {
  male: { pitch: 0.9, rate: 0.85 }, // Calm, steady male cadence
  female: { pitch: 1.0, rate: 0.85 } // Calm, soothing female cadence
};

let selectedGender = 'female';

let recognition = null;
let currentLanguage = 'en';
const synth = window.speechSynthesis;

// Asynchronous Voice Caching for SpeechSynthesis robust fallback
let loadedVoices = [];
function cacheVoices() {
  if (synth) {
    loadedVoices = synth.getVoices();
  }
}
cacheVoices();
if (synth && synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = cacheVoices;
}

let activeUtterance = null; // Global reference to prevent Chrome Web Speech API garbage-collection bug!

function transliterateArabicToPhoneticEnglish(text) {
  const charMap = {
    'ا': 'a', 'أ': 'a', 'إ': 'a', 'آ': 'aa', 'ء': 'a', 'ؤ': 'o', 'ئ': 'e',
    'ب': 'b',
    'ت': 't', 'ة': 'h',
    'ث': 'th',
    'ج': 'j',
    'ح': 'h',
    'خ': 'kh',
    'د': 'd',
    'ذ': 'th',
    'ر': 'r',
    'ز': 'z',
    'س': 's',
    'ش': 'sh',
    'ص': 's',
    'ض': 'd',
    'ط': 't',
    'ظ': 'z',
    'ع': 'a',
    'غ': 'gh',
    'ف': 'f',
    'ق': 'q',
    'ك': 'k',
    'ل': 'l',
    'م': 'm',
    'ن': 'n',
    'ه': 'h',
    'و': 'w',
    'ي': 'y', 'ى': 'a',
    // Vowels and diacritics
    'َ': 'a',
    'ُ': 'u',
    'ِ': 'i',
    'ً': 'an',
    'ٌ': 'un',
    'ٍ': 'in',
    'ْ': '',
    'ّ': ''
  };

  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === 'ّ' && result.length > 0) {
      const prevChar = result[result.length - 1];
      if (/[a-zA-Z]/.test(prevChar)) {
        result += prevChar;
      }
      continue;
    }
    
    if (charMap[char] !== undefined) {
      let mapped = charMap[char];
      
      // Smart vowel injection: if we have consecutive heavy consonants, inject a soft helper vowel 'a'
      if (result.length > 0 && charMap[char] !== '') {
        const lastChar = result[result.length - 1];
        const isConsonant = (c) => c && !['a','e','i','o','u','w','y',' '].includes(c.toLowerCase());
        if (isConsonant(lastChar) && isConsonant(mapped[0])) {
          result += 'a'; // Inject helper 'a'
        }
      }
      
      result += mapped;
    } else {
      result += char;
    }
  }

  // Refine common word pronunciations to sound pristine on English synthesizers!
  return result
    .replace(/\bmdrbk\b/g, 'mudarribuka')
    .replace(/\bkyf\b/g, 'kayfa')
    .replace(/\bymknny\b/g, 'yumkinuni')
    .replace(/\balxas\b/g, 'al-khaas')
    .replace(/\balsar\b/g, 'as-si\'r')
    .replace(/\balamly\b/g, 'al-ameel')
    .replace(/\balywm\b/g, 'al-yawm')
    .replace(/\bmarhban\b/g, 'marhaban')
    .replace(/\banas\b/g, 'ana')
    .replace(/\btahadath\b/g, 'tahaddath')
    .replace(/\bwijhata\b/g, 'wijhata')
    .replace(/\bnadharika\b/g, 'nadharika')
    .replace(/\btamaman\b/g, 'tamaman');
}

let currentLocalAudio = null;

function playNativeSynthesis(text, gender, config, onStart, onEnd) {
  if (!synth) return;
  synth.cancel();

  // Freshly re-cache in case browser loaded engines asynchronously late
  cacheVoices();

  const voices = loadedVoices.length ? loadedVoices : (synth.getVoices().length ? synth.getVoices() : []);
  let matchedVoice = null;
  
  if (currentLanguage === 'ar') {
    const arVoices = voices.filter(v => v.lang.toLowerCase().startsWith('ar'));
    
    // IF WE HAVE NO NATIVE ARABIC VOICES ON THE SYSTEM, USE PHONETIC ENGLISH FALLBACK!
    if (arVoices.length === 0) {
      console.warn("No native Arabic speech engines found. Falling back to high-fidelity phonetic English transliteration.");
      
      const phoneticText = transliterateArabicToPhoneticEnglish(text);
      const enVoices = voices.filter(v => v.lang.startsWith('en'));
      
      if (gender === 'female') {
        matchedVoice = enVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('hazel'));
      } else {
        matchedVoice = enVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('mark'));
      }
      if (!matchedVoice && enVoices.length > 0) {
        matchedVoice = enVoices[0];
      }
      
      activeUtterance = new SpeechSynthesisUtterance(phoneticText);
      activeUtterance.pitch = config.pitch;
      activeUtterance.rate = config.rate * 0.92; // Slightly slower pacing for clearer phonetic output!
      
      if (matchedVoice) {
        activeUtterance.voice = matchedVoice;
        activeUtterance.lang = matchedVoice.lang;
      } else {
        activeUtterance.lang = 'en-US';
      }
      
      activeUtterance.onstart = onStart;
      activeUtterance.onend = onEnd;
      activeUtterance.onerror = (e) => {
        console.error("Speech Synthesis Fallback Error:", e);
        if (onEnd) onEnd();
      };
      
      synth.speak(activeUtterance);
      return;
    }

    if (gender === 'male') {
      matchedVoice = arVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('naayf') || v.name.includes('نايف'));
    } else {
      matchedVoice = arVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('hoda') || v.name.includes('هدى'));
    }
    if (!matchedVoice && arVoices.length > 0) {
      matchedVoice = arVoices[0];
    }
    
    activeUtterance = new SpeechSynthesisUtterance(text);
    activeUtterance.pitch = config.pitch;
    activeUtterance.rate = config.rate;
    
    if (matchedVoice) {
      activeUtterance.voice = matchedVoice;
      activeUtterance.lang = matchedVoice.lang; // Use exact matched locale!
    } else {
      activeUtterance.lang = 'ar-SA'; // Reliable fallback
    }
  } else {
    activeUtterance = new SpeechSynthesisUtterance(text);
    activeUtterance.pitch = config.pitch;
    activeUtterance.rate = config.rate;
    activeUtterance.lang = 'en-US';
    
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    if (gender === 'female') {
      matchedVoice = enVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('hazel'));
    } else {
      matchedVoice = enVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('mark'));
    }
    if (!matchedVoice && enVoices.length > 0) {
      matchedVoice = enVoices[0];
    }
    if (matchedVoice) {
      activeUtterance.voice = matchedVoice;
    }
  }

  activeUtterance.onstart = onStart;
  activeUtterance.onend = onEnd;
  activeUtterance.onerror = (e) => {
    console.error("Speech Synthesis Error:", e);
    if (onEnd) onEnd();
  };

  synth.speak(activeUtterance);
}

function speakText(text, genderName, onStart, onEnd) {
  stopSpeaking();

  const gender = genderName || selectedGender;
  const config = genderVoices[gender] || genderVoices.female;

  // First try the local high-fidelity SSML TTS server
  if (currentLanguage === 'ar' || currentLanguage === 'en') {
    const audioUrl = `http://localhost:5002/api/tts?text=${encodeURIComponent(text)}&gender=${gender}&lang=${currentLanguage}&rate=${config.rate}&pitch=${config.pitch}`;
    
    const audio = new Audio();
    currentLocalAudio = audio;
    
    let fallbackTriggered = false;
    const triggerFallback = () => {
      if (fallbackTriggered) return;
      fallbackTriggered = true;
      console.warn("Local TTS server unreachable. Falling back to native browser speech synthesis.");
      playNativeSynthesis(text, gender, config, onStart, onEnd);
    };

    // 1.5 second loading timeout
    const loadTimeout = setTimeout(() => {
      if (audio.readyState < 2) { // HAVE_CURRENT_DATA
        audio.pause();
        triggerFallback();
      }
    }, 1500);

    audio.onplay = () => {
      clearTimeout(loadTimeout);
      if (onStart) onStart();
    };

    audio.onended = () => {
      clearTimeout(loadTimeout);
      if (onEnd) onEnd();
      if (currentLocalAudio === audio) {
        currentLocalAudio = null;
      }
    };

    audio.onerror = () => {
      clearTimeout(loadTimeout);
      triggerFallback();
    };

    audio.src = audioUrl;
    audio.play().catch(err => {
      console.warn("Audio element play failed, falling back:", err);
      triggerFallback();
    });
    return;
  }

  // Fallback default
  playNativeSynthesis(text, gender, config, onStart, onEnd);
}

function stopSpeaking() {
  if (synth) synth.cancel();
  if (currentLocalAudio) {
    try {
      currentLocalAudio.pause();
    } catch (e) {}
    currentLocalAudio = null;
  }
}

// Global Voice Navigation Commands & Toast Notifications
function checkVoiceNavigation(text) {
  const norm = text.toLowerCase().trim();
  let dest = null;
  let labelEn = "";
  let labelAr = "";
  
  // English Commands
  if (norm.includes("open home") || norm.includes("go to home") || norm.includes("go home") || norm.includes("welcome portal")) {
    dest = () => switchPortal('welcome');
    labelEn = "Welcome Portal";
    labelAr = "البوابة الرئيسية";
  } else if (norm.includes("open sales coach") || norm.includes("go to sales coach") || norm.includes("sales coach")) {
    dest = () => { switchPortal('guest'); switchGuestView('voice-coach'); };
    labelEn = "Sales Coach View";
    labelAr = "بوابة مدرب المبيعات";
  } else if (norm.includes("open text coach") || norm.includes("go to text coach") || norm.includes("text coach")) {
    dest = () => { switchPortal('guest'); switchGuestView('text-coach'); };
    labelEn = "Text Coaching Chat";
    labelAr = "التدريب النصي";
  } else if (norm.includes("open visual auditor") || norm.includes("go to visual auditor") || norm.includes("visual auditor")) {
    dest = () => { switchPortal('guest'); switchGuestView('auditor'); };
    labelEn = "Visual Auditor";
    labelAr = "المراقب البصري";
  } else if (norm.includes("open admin") || norm.includes("go to admin") || norm.includes("admin portal")) {
    dest = () => openAdminLogin('documents', 'documents');
    labelEn = "Admin Portal";
    labelAr = "بوابة المسؤول";
  } else if (norm.includes("logout") || norm.includes("exit portal") || norm.includes("exit")) {
    dest = () => switchPortal('welcome');
    labelEn = "Logging out...";
    labelAr = "تسجيل الخروج...";
  }
  
  // Arabic Commands
  if (!dest) {
    if (norm.includes("الرئيسية") || norm.includes("البوابة الرئيسية") || norm.includes("الصفحة الرئيسية")) {
      dest = () => switchPortal('welcome');
      labelEn = "Welcome Portal";
      labelAr = "البوابة الرئيسية";
    } else if (norm.includes("مدرب المبيعات") || norm.includes("بوابة المدرب")) {
      dest = () => { switchPortal('guest'); switchGuestView('voice-coach'); };
      labelEn = "Sales Coach View";
      labelAr = "بوابة مدرب المبيعات";
    } else if (norm.includes("التدريب النصي") || norm.includes("المدرب النصي") || norm.includes("التدريب بالدردشة")) {
      dest = () => { switchPortal('guest'); switchGuestView('text-coach'); };
      labelEn = "Text Coaching Chat";
      labelAr = "التدريب النصي";
    } else if (norm.includes("المراقب البصري") || norm.includes("المراقب الفني") || norm.includes("تدقيق الرفوف")) {
      dest = () => { switchPortal('guest'); switchGuestView('auditor'); };
      labelEn = "Visual Auditor";
      labelAr = "المراقب البصري";
    } else if (norm.includes("المسؤول") || norm.includes("بوابة المسؤول") || norm.includes("لوحة المسؤول") || norm.includes("لوحة التحكم")) {
      dest = () => openAdminLogin('documents', 'documents');
      labelEn = "Admin Portal";
      labelAr = "بوابة المسؤول";
    } else if (norm.includes("خروج") || norm.includes("تسجيل خروج") || norm.includes("الخروج")) {
      dest = () => switchPortal('welcome');
      labelEn = "Logging out...";
      labelAr = "تسجيل الخروج...";
    }
  }

  if (dest) {
    showVoiceToast(currentLanguage === 'ar' ? labelAr : labelEn);
    setTimeout(() => {
      dest();
    }, 1500);
    return true; // Command intercepted
  }
  return false;
}

function showVoiceToast(destinationLabel) {
  const toastContainer = document.getElementById('voice-toast');
  if (!toastContainer) return;
  
  const isAr = currentLanguage === 'ar';
  toastContainer.innerHTML = `
    <div class="voice-toast-card">
      <div class="voice-toast-icon">
        <i class="fas fa-microphone pulse-toast-mic"></i>
      </div>
      <div class="voice-toast-body">
        <h4>${isAr ? "تم تمييز أمر صوتي" : "Voice Command Detected"}</h4>
        <p style="margin: 0; font-size: 12px; color: var(--slate-500);">${isAr ? `جاري الانتقال إلى ${destinationLabel}...` : `Navigating to ${destinationLabel}...`}</p>
      </div>
      <div class="voice-toast-loader">
        <div class="voice-toast-bar"></div>
      </div>
    </div>
  `;
  
  toastContainer.classList.add('visible');
  
  setTimeout(() => {
    toastContainer.classList.remove('visible');
  }, 2800);
}

// Speech recognition click handler in Panel A (Voice Coach)
function handleMicClick() {
  stopSpeaking();
  
  const onResult = (resultText) => {
    els.voiceObjectionPrompt.textContent = `"${resultText}"`;
    
    // First, intercept voice navigation commands!
    if (checkVoiceNavigation(resultText)) {
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
      return;
    }

    els.voiceStatus.textContent = translations[currentLanguage].micProcessing;
    
    setTimeout(() => {
      const answer = getCoachResponse(resultText, selectedPersonality);
      triggerVoiceCoachSpeech(resultText, answer);
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
    }, 1000);
  };
  
  const onStateChange = (active) => {
    isListening = active;
    if (active) {
      els.micOuter.classList.add('listening');
      els.voiceStatus.textContent = translations[currentLanguage].micListening;
    } else {
      els.micOuter.classList.remove('listening');
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
    }
  };
  
  const onError = (errMsg) => {
    alert(errMsg);
    els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
  };
  
  toggleSpeechRecognition(onResult, onStateChange, onError);
}

function toggleSpeechRecognition(onResult, onStateChange, onError) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onError(currentLanguage === 'ar' ? "التعرف على الصوت غير مدعوم في هذا المتصفح. الرجاء الكتابة يدوياً." : "Speech Recognition is not supported in this browser. Please type your objection.");
    return false;
  }

  if (recognition) {
    recognition.stop();
    recognition = null;
    onStateChange(false);
    return false;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = currentLanguage === 'ar' ? 'ar-AE' : 'en-US';

  recognition.onstart = () => onStateChange(true);
  
  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    onResult(speechResult);
  };

  recognition.onerror = (event) => {
    console.error(event.error);
    onError(event.error);
    recognition = null;
    onStateChange(false);
  };

  recognition.onend = () => {
    recognition = null;
    onStateChange(false);
  };

  recognition.start();
  return true;
}

const mckinseyResponses = {
  en: {
    "Too expensive": {
      actions: [
        "Acknowledge and validate: Speak with empathy, 'I completely understand that price is an important factor.'",
        "Pivot to durability: Emphasize the double-reinforced organic cotton and double-stitched pockets.",
        "Trigger tactile proof: Hand the garment over, 'Would you like to feel the weight of the fabric?'"
      ],
      rootCause: "The customer is focused on transaction cost rather than cost-per-wear value. There is cognitive friction due to a failure in perceiving quality differentiation.",
      additional: "Our independent tests confirm 40% higher tensile strength than mass-produced retail brands. Highlight our 2-year quality warranty to offset purchase anxiety."
    },
    "Out of size": {
      actions: [
        "Offer direct logistics: Check other store branches instantly and offer express 24h home delivery.",
        "Provide style substitutes: Guide them to the Men's Premium apparel shelf showing similar fits.",
        "Suggest coordinate add-ons: Introduce matching accessories like leather belts while resolving the size."
      ],
      rootCause: "Stockout friction is highly emotional and leads to store exit. The customer requires immediate resolution to avoid disappointment and lock in purchasing intent.",
      additional: "Always offer free shipping as a gesture of store goodwill to secure customer relationship and close the sales slip today."
    },
    "Just looking": {
      actions: [
        "Provide structural space: Validate with a warm smile, 'Please browse our central collection racks.'",
        "Deliver passive context: Briefly mention: 'Our premium denim display is at a 20% promotional discount today.'",
        "Position availability: Ensure they know you are here to help if they need size checks or fittings."
      ],
      rootCause: "The customer is in a high-velocity exploration phase. They object to sales friction, requiring passive support and low-pressure psychological reassurance.",
      additional: "Maintain a supportive, relaxed presence. Step back 3 meters after opening, keeping passive visual contact in case they touch a product."
    },
    "Compare with brand X": {
      actions: [
        "Highlight material differences: Detail that Brand X uses synthetic blends, while we use 100% long-staple cotton.",
        "Compare construction quality: Invite them to look at the double stitching and heavy-duty steel rivets.",
        "Emphasize shape retention: Point out our 2% elastane blend which maintains fitting through 50+ washes."
      ],
      rootCause: "The customer is conducting a technical value comparison. They lack concrete product differentiators to justify our premium pricing tier over competitor X.",
      additional: "Maintain brand integrity—never disparage the competitor. Focus entirely on our structural specifications and ethical production certifications."
    },
    "default": {
      actions: [
        "Validate objection first: Always confirm you understand their point before presenting any solutions.",
        "Present value multipliers: Highlight the unique selling points (USPs) and material specifications.",
        "Suggest direct actions: Provide a clear next step such as trying on the garment or placing an order."
      ],
      rootCause: "The customer has encountered a purchase obstacle. They are looking for clear product differentiation and reassurance before committing to the sale.",
      additional: "Observe body language, maintain professional eye contact, and present premium alternatives if they remain hesitant."
    }
  },
  ar: {
    "Too expensive": {
      actions: [
        "أظهر التفهم فوراً: تحدث بتعاطف، 'أفهم وجهة نظرك تماماً، السعر عامل أساسي في اتخاذ القرار.'",
        "وجه التركيز إلى الجودة: أكد على خامة القطن العضوي الفاخر المقوى، الذي يدوم لفترة أطول بمرتين.",
        "ادع العميل للملامسة: سلّمه القطعة بيدك قائلًا: 'هل ترغب بمعاينة متانة وجودة الخياطة بنفسك؟'"
      ],
      rootCause: "العميل يركز على التكلفة اللحظية للشراء بدلافية في الشرق الأوسط. غياب الإدراك الحسي للفرق بين منتجنا والمنتجات التجارية يخلق هذا الاعتراض.",
      additional: "أكد على الضمان الذهبي لمدة عامين. أظهر للعميل متانة الخيوط المزدوجة التي تمنع الاهتراء مقارنة بالبدائل الرخيصة."
    },
    "Out of size": {
      actions: [
        "اطرح البدائل اللوجستية: اعرض التحقق الفوري في الفروع الأخرى وتأمين توصيل مجاني سريع للمنزل.",
        "اقترح بدائل مشابهة: وجّه العميل إلى رفوف التصاميم الجديدة التي تتوفر بها مقاسات مشابهة تماماً.",
        "اعرض تصفح المكملات: اقترح معاينة الأحزمة الجلدية الفاخرة ريثما نؤكد حجز مقاسه عبر النظام."
      ],
      rootCause: "عدم توفر المقاس يسبب خيبة أمل سريعة ويدفع لمغادرة المتجر. يحتاج العميل إلى حل عملي مباشر لتعويض النقص اللحظي والحفاظ على رغبته الشرائية.",
      additional: "الشحن المجاني في حالة نفاد المقاس يعتبر لفتة اهتمام ترفع من ولاء العميل للمتجر وتضمن حسم عملية البيع."
    },
    "Just looking": {
      actions: [
        "منح العميل مساحته الكاملة: رحب به بابتسامة، 'تفضل بالتصفح بكل أريحية في ممرات تشكيلتنا الجديدة.'",
        "اطرح عرضاً سياقياً هادئاً: أشر باختصار: 'منصّة الجينز الفاخرة تشملها خصومات 20% سارية اليوم فقط.'",
        "أكد على تواجدك للمساعدة: دع العميل يعرف أنك متواجد في صالة العرض لأي استفسار أو مقاس."
      ],
      rootCause: "العميل في مرحلة استكشافية غير ملتزمة. لديه حاجز نفسي ضد الإلحاح البيعي، ويتطلب التواجد الهادئ الداعم دون أي ضغوط إضافية.",
      additional: "تراجع خطوتين للخلف بعد الترحيب بالعميل. راقب تفاعله البصري مع الرفوف لتتدخل فور لمسه لأي قطعة."
    },
    "Compare with brand X": {
      actions: [
        "وضح الفروق الجوهرية للخامات: بيّن أن العلامة X تستخدم البوليستر، بينما نستخدم قطناً طويل التيلة 100%.",
        "قارن تفاصيل الخياطة: ادع العميل لمعاينة الكباسات والدرزات المزدوجة المتينة.",
        "أبرز متانة الهيكل: وضح مرونة القماش الفائق الذي يحتفظ برونقه الفاخر حتى بعد 50 غسلة متكررة."
      ],
      rootCause: "العميل يجري مقارنة عقلانية واضحة. يفتقر إلى معرفة المواصفات الفنية الدقيقة التي تبرر فارق السعر بيننا وبين المنافس X.",
      additional: "تجنب تماماً التقليل من المنافس X. ركز بالكامل على إبراز شهادات الجودة وحرفية التصنيع الخاصة بنا."
    },
    "default": {
      actions: [
        "أكد تفهمك أولاً: احرص دائماً على إبداء التفهم لاعتراض العميل قبل طرح أي حلول بيعية.",
        "اطرح القيمة المضافة: أبرز مزايا المنتج الفريدة من نوعها ومواصفات خاماته الفاخرة.",
        "اقترح خطوات عملية فورية: وجّه العميل لتجربة المقاس أو القيام بحجز القطعة لتأمينها."
      ],
      rootCause: "واجه العميل عقبة شرائية معينة. إنه يبحث عن أدلة قاطعة ومقنعة تبرر الاستثمار وتزيل القلق من اتخاذ القرار.",
      additional: "حافظ على لغة جسد إيجابية وتواصل بصري مهني مريح، واقترح بدائل عملية متوفرة في صالة العرض."
    }
  }
};

function getMckinseyResponse(input) {
  const dict = mckinseyResponses[currentLanguage];
  const normalized = input.toLowerCase().trim();

  let matchedKey = "default";
  if (normalized.includes("expensive") || normalized.includes("price") || normalized.includes("cost") || normalized.includes("غالي") || normalized.includes("سعر") || normalized.includes("تكلفة")) {
    matchedKey = "Too expensive";
  } else if (normalized.includes("size") || normalized.includes("fit") || normalized.includes("stock") || normalized.includes("مقاس") || normalized.includes("قياس") || normalized.includes("متوفر")) {
    matchedKey = "Out of size";
  } else if (normalized.includes("look") || normalized.includes("browse") || normalized.includes("تصفح") || normalized.includes("أتفرج") || normalized.includes("أنظر")) {
    matchedKey = "Just looking";
  } else if (normalized.includes("brand x") || normalized.includes("compare") || normalized.includes("competitor") || normalized.includes("منافس") || normalized.includes("مقارنة") || normalized.includes("ماركة")) {
    matchedKey = "Compare with brand X";
  }

  if (matchedKey === "default") {
    const isAr = currentLanguage === 'ar';
    const cleanInput = input.replace(/["'<>]/g, "");
    
    return {
      actions: isAr ? [
        `تحليل الاستفسار: أظهر الاهتمام والترحيب بسؤال العميل عن "${cleanInput}".`,
        `طرح الحل المناسب: قدّم المواصفات الفنية لمنتجاتنا كإجابة حاسمة ومقنعة.`,
        `تحفيز الخطوة التالية: ادعُ العميل لمعاينة تفاصيل الخامات أو تجربة المقاس فوراً.`
      ] : [
        `Acknowledge and validate: Respond with professional expertise to their query regarding "${cleanInput}".`,
        `Deliver value differentiator: Address their concern directly using our certified product specifications.`,
        `Guide secondary action: Direct the customer to experience the fit or touch the premium materials.`
      ],
      rootCause: isAr ? 
        `العميل يبحث عن تأكيد أو تفاصيل حول "${cleanInput}". يحتاج إلى دعم فني لتبديد الشكوك وبناء الثقة في قرار الشراء.` : 
        `The customer is seeking active reassurance or technical parameters about "${cleanInput}". They require objective validation to reduce cognitive risk.`,
      additional: isAr ? 
        `حافظ على نبرة صوت هادئة وواثقة. أبرز الضمان الذهبي المتوفر لدينا لجميع ملابس Apparel premium.` : 
        `Maintain a calm and authoritative posture. Leverage our 2-year premium warranty and ethical production standards to reinforce trust.`
    };
  }

  return dict[matchedKey];
}

function getCoachResponse(input) {
  const mck = getMckinseyResponse(input);
  const isAr = currentLanguage === 'ar';
  return isAr ? 
    `${mck.actions[0]} ${mck.actions[1]} ${mck.actions[2]} والأسباب هي: ${mck.rootCause}` :
    `${mck.actions[0]} ${mck.actions[1]} ${mck.actions[2]} The root cause is: ${mck.rootCause}`;
}

// --------------------------------------------------------------------------
// 3. Visual Shelf Auditor Config
// --------------------------------------------------------------------------
const defaultAuditData = {
  scanRef: "SCAN_REF_7742.JPG",
  storeLocation: "Flagship - Downtown",
  department: "Men's Premium Apparel",
  auditFrequency: "Bi-Weekly",
  complianceScore: "75%",
  revenueLift: "+12%",
  
  boundingBoxes: [
    { x: 10, y: 15, w: 22, h: 40, label: "Compliant Stack", type: "compliant" },
    { x: 35, y: 15, w: 20, h: 40, label: "Empty Space (Size 32)", type: "gap" },
    { x: 58, y: 15, w: 20, h: 40, label: "Compliant Stack", type: "compliant" },
    { x: 80, y: 30, w: 15, h: 25, label: "Misplaced Belt", type: "conversion" },
    { x: 15, y: 65, w: 50, h: 20, label: "Missing Promos Sign", type: "compliance_alert" }
  ]
};

function drawScanBoxes(canvas, imageElement) {
  if (!canvas || !imageElement) return;
  const ctx = canvas.getContext('2d');
  
  const rect = imageElement.getBoundingClientRect();
  canvas.width = imageElement.naturalWidth || rect.width || 400;
  canvas.height = imageElement.naturalHeight || rect.height || 300;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const widthRatio = canvas.width / 100;
  const heightRatio = canvas.height / 100;

  defaultAuditData.boundingBoxes.forEach(box => {
    const rx = box.x * widthRatio;
    const ry = box.y * heightRatio;
    const rw = box.w * widthRatio;
    const rh = box.h * heightRatio;

    let strokeColor = "#10b981";
    let labelText = box.label;
    
    if (box.type === "gap") {
      strokeColor = "#ef4444";
      labelText = currentLanguage === 'ar' ? "فجوة مخزون (مقاس 32)" : "Inventory Gap (Size 32)";
    } else if (box.type === "conversion") {
      strokeColor = "#3b82f6";
      labelText = currentLanguage === 'ar' ? "فرصة بيع (حزام)" : "Cross-Sell (Belt)";
    } else if (box.type === "compliance_alert") {
      strokeColor = "#f59e0b";
      labelText = currentLanguage === 'ar' ? "لوحة ترويجية غائبة" : "Missing Signage";
    } else {
      labelText = currentLanguage === 'ar' ? "رف ممتثل" : "Compliant Shelf";
    }

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = Math.max(2, Math.floor(canvas.width / 200));
    ctx.strokeRect(rx, ry, rw, rh);

    ctx.fillStyle = strokeColor + "cc";
    const fontSize = Math.max(10, Math.floor(canvas.width / 40));
    ctx.font = `bold ${fontSize}px sans-serif`;
    
    const padding = 6;
    const textWidth = ctx.measureText(labelText).width;
    const labelHeight = fontSize + padding * 2;
    
    let labelY = ry - labelHeight;
    if (labelY < 0) labelY = ry;
    
    ctx.fillRect(rx, labelY, textWidth + padding * 2, labelHeight);

    ctx.fillStyle = "#ffffff";
    ctx.fillText(labelText, rx + padding, labelY + fontSize + padding / 2);
  });
}

function exportAuditReportPDF(auditData) {
  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) {
    alert(currentLanguage === 'ar' ? "خطأ: لم يتم تحميل مكتبة PDF." : "Error: jsPDF library not loaded.");
    return;
  }

  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  
  doc.setTextColor(4, 120, 87);
  doc.text("Retail Sales Pro - Visual Audit Report", 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text(`Reference ID: ${auditData.scanRef} | Generated: ${new Date().toLocaleString()}`, 20, 32);
  
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(20, 36, 190, 36);

  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.text("STORE AUDIT DETAILS", 20, 46);
  doc.setFont("helvetica", "normal");
  doc.text(`Store Location: ${auditData.storeLocation}`, 20, 53);
  doc.text(`Department: ${auditData.department}`, 20, 60);
  doc.text(`Audit Frequency: ${auditData.auditFrequency}`, 20, 67);

  doc.setFillColor(248, 250, 252);
  doc.rect(20, 75, 170, 35, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(4, 120, 87);
  doc.text(`Compliance Score: ${auditData.complianceScore}`, 25, 84);
  doc.setTextColor(239, 68, 68);
  doc.text("Status: Action Required", 25, 92);
  doc.setTextColor(16, 185, 129);
  doc.text(`Est. Revenue Lift: ${auditData.revenueLift}`, 25, 100);

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("AUDIT RECOMMENDATIONS", 20, 123);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("- RESTOCK FRONT-OF-HOUSE DENIM DISPLAY (Hero levels low)", 20, 131);
  doc.text("- Implement 'Light-to-Dark' color gradient from aisle entry.", 20, 138);
  doc.text("- Add 'Lifestyle Imagery' at eye level on Pillar 4.", 20, 145);
  doc.text("- Place Leather Belts next to premium jeans for cross-sell opportunity.", 20, 152);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("EXECUTIVE ANALYSIS DEEP-DIVE", 20, 167);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  doc.setTextColor(71, 85, 105);
  
  const analysisText = "The current floor plan exhibits high traffic velocity but lacks sufficient 'stopping power' in the mid-section. Our analysis suggests that the color blocking on the denim wall is visually dense, creating cognitive friction for the shopper rather than a clear navigation path.";
  const splitText = doc.splitTextToSize(analysisText, 170);
  doc.text(splitText, 20, 175);

  doc.setDrawColor(226, 232, 240);
  doc.line(20, 260, 190, 260);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184);
  doc.text("Retail Sales Pro Audit System. Confidential & Proprietary.", 20, 267);

  doc.save(`retail_sales_audit_${auditData.scanRef.split('.')[0]}.pdf`);
}

// --------------------------------------------------------------------------
// 4. Admin Portal Logic
// --------------------------------------------------------------------------
const defaultDocuments = [
  { id: 1, name: "Q3_Retail_Strategy_v2.pdf", size: "4.2 MB", type: "Strategy", status: "INDEXED", updated: "24 Oct 2025, 14:30", language: "ENGLISH" },
  { id: 2, name: "دليل_المبيعات_الداخلي.pdf", size: "1.8 MB", type: "Manual", status: "INDEXED", updated: "Today, 09:12", language: "ARABIC" },
  { id: 3, name: "Client_Objection_Handling.txt", size: "42 KB", type: "Scripts", status: "INDEXED", updated: "21 Oct 2025, 11:05", language: "ENGLISH" },
  { id: 4, name: "Product_Catalog_Updates_v4.pdf", size: "12.5 MB", type: "Product", status: "INDEXED", updated: "19 Oct 2025, 16:45", language: "ENGLISH" }
];

let documentList = [];
try {
  const storedDocs = localStorage.getItem('retail_sales_pro_kb_docs');
  if (storedDocs) {
    documentList = JSON.parse(storedDocs);
  } else {
    documentList = [...defaultDocuments];
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  }
} catch (e) {
  console.warn("localStorage is not available, falling back to in-memory storage:", e);
  documentList = [...defaultDocuments];
}

let queryVolumeChart = null;
let objectionBreakdownChart = null;
let personalityUsageChart = null;

function addDocument(name, size, type, language) {
  const now = new Date();
  const formatTime = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-AE' : 'en-US', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  
  const newDoc = {
    id: Date.now(),
    name: name,
    size: size || "1.2 MB",
    type: type || "Manual",
    status: "INDEXED",
    updated: formatTime,
    language: language || (currentLanguage === 'ar' ? "ARABIC" : "ENGLISH")
  };
  
  documentList.unshift(newDoc);
  try {
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  } catch (e) {
    console.error("Failed to save document to localStorage:", e);
  }
  return newDoc;
}

function deleteDocument(id) {
  documentList = documentList.filter(doc => doc.id !== id);
  try {
    localStorage.setItem('retail_sales_pro_kb_docs', JSON.stringify(documentList));
  } catch (e) {
    console.error("Failed to delete document from localStorage:", e);
  }
}

function renderAnalyticsCharts(canvasVolume, canvasObjections, canvasPersonalities) {
  if (queryVolumeChart) queryVolumeChart.destroy();
  if (objectionBreakdownChart) objectionBreakdownChart.destroy();
  if (personalityUsageChart) personalityUsageChart.destroy();

  const isArabic = currentLanguage === 'ar';
  
  const primaryColor = "#047857";
  const accentColor = "#10b981";
  const slateDark = "#0f172a";
  const gridColor = "#f1f5f9";

  if (canvasVolume && window.Chart) {
    const labels = isArabic ? 
      ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"] : 
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    queryVolumeChart = new Chart(canvasVolume, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: isArabic ? "حجم الاستفسارات" : "Query Volume",
          data: [120, 150, 180, 220, 290, 140, 95],
          borderColor: primaryColor,
          backgroundColor: "rgba(4, 120, 87, 0.08)",
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: primaryColor
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: "#64748b" } },
          x: { grid: { display: false }, ticks: { color: "#64748b" } }
        }
      }
    });
  }

  if (canvasObjections && window.Chart) {
    const labels = isArabic ? 
      ["السعر غالي", "المقاس غير متوفر", "أتصفح فقط", "مقارنة الماركة", "الضمان"] : 
      ["Price Too High", "Out of Size", "Just Browsing", "Brand Compare", "Warranty Query"];

    objectionBreakdownChart = new Chart(canvasObjections, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: isArabic ? "التكرار" : "Frequency",
          data: [45, 32, 28, 19, 12],
          backgroundColor: [primaryColor, accentColor, "#34d399", "#6ee7b7", "#a7f3d0"],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: "#64748b" } },
          x: { grid: { display: false }, ticks: { color: "#64748b" } }
        }
      }
    });
  }

  if (canvasPersonalities && window.Chart) {
    const labels = isArabic ? 
      ["حماسي (باك)", "حازم (شارون)", "مهني (كوري)", "قوي (فينرير)", "هادئ (زفير)"] : 
      ["Energetic (Puck)", "Authoritative (Charon)", "Professional (Kore)", "Strong (Fenrir)", "Calm (Zephyr)"];

    personalityUsageChart = new Chart(canvasPersonalities, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: [25, 15, 35, 13, 12],
          backgroundColor: [primaryColor, "#0f172a", "#10b981", "#3b82f6", "#f59e0b"],
          borderWidth: 2,
          borderColor: "#ffffff"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: { boxWidth: 15, color: "#475569", padding: 12 }
          }
        },
        cutout: '70%'
      }
    });
  }
}

// --------------------------------------------------------------------------
// 5. Global App Coordinator & Routing
// --------------------------------------------------------------------------
let currentPortal = 'welcome';
let activeGuestView = 'voice-coach';
let activeAdminView = 'documents';
let isListening = false;
let auditProcessed = false;
let uploadedImageSrc = null;
let tempUploadedFile = null;
let adminRedirectView = 'documents';
let adminRedirectPane = 'documents';

let chatHistory = {
  en: [{ sender: 'coach', text: "Hello, I am your coach. How can I guide you today?" }],
  ar: [{ sender: 'coach', text: "مرحباً، أنا مدربك الخاص. كيف يمكنني إرشادك اليوم؟" }]
};

const els = {};

function initDOMElements() {
  els.html = document.documentElement;
  els.body = document.body;
  
  els.langBtn = document.getElementById('lang-switch-btn');
  els.langText = document.getElementById('lang-switch-text');
  els.logoutBtn = document.getElementById('logout-btn');
  els.portalBadge = document.getElementById('portal-badge');
  els.userNavGroup = document.getElementById('user-nav-group');
  
  els.welcomePortal = document.getElementById('welcome-portal');
  els.guestPortal = document.getElementById('guest-portal');
  els.adminPortal = document.getElementById('admin-portal');
  
  els.btnGuestAccess = document.getElementById('btn-guest-access');
  els.btnAdminPortal = document.getElementById('btn-admin-portal');
  els.btnQuickSalesCoach = document.getElementById('btn-quick-sales-coach');
  els.btnQuickVisualAuditor = document.getElementById('btn-quick-visual-auditor');
  els.btnQuickKb = document.getElementById('btn-quick-kb');
  els.btnQuickRagConfig = document.getElementById('btn-quick-rag-config');

  els.tabVoiceCoach = document.getElementById('tab-voice-coach');
  els.tabTextCoach = document.getElementById('tab-text-coach');
  els.tabVisualAuditor = document.getElementById('tab-visual-auditor');
  
  els.panelVoiceCoach = document.getElementById('panel-voice-coach');
  els.panelTextCoach = document.getElementById('panel-text-coach');
  els.panelVisualAuditor = document.getElementById('panel-visual-auditor');
  
  els.personalitiesRow = document.getElementById('personalities-row');
  els.micOuter = document.getElementById('mic-outer');
  els.micInner = document.getElementById('mic-inner');
  els.voiceGreeting = document.getElementById('voice-greeting');
  els.voiceStatus = document.getElementById('voice-status');
  els.faqTabCustomer = document.getElementById('faq-tab-customer');
  els.faqTabPolicy = document.getElementById('faq-tab-policy');
  els.faqContentList = document.getElementById('faq-content-list');
  els.voiceObjectionPrompt = document.getElementById('voice-objection-prompt');
  
  els.chatBody = document.getElementById('chat-body');
  els.chatInput = document.getElementById('chat-input');
  els.chatSendBtn = document.getElementById('chat-send-btn');
  els.failSafeButtons = document.getElementById('fail-safe-buttons');
  els.textCoachName = document.getElementById('text-coach-name');
  
  els.canvasAudit = document.getElementById('canvas-audit');
  els.imgAudit = document.getElementById('img-audit');
  els.previewBox = document.getElementById('preview-box');
  els.btnTakePhoto = document.getElementById('btn-take-photo');
  els.btnUploadImage = document.getElementById('btn-upload-image');
  els.fileInput = document.getElementById('file-input');
  els.scanLaser = document.getElementById('scan-laser');
  els.scanRefLabel = document.getElementById('scan-ref-label');
  els.processedTag = document.getElementById('processed-tag');
  els.scanStatusText = document.getElementById('scan-status-text');
  els.actionRequiredBanner = document.getElementById('action-required-banner');
  els.auditorKPIsRow = document.getElementById('auditor-kpis-row');
  els.auditorDeepDiveSection = document.getElementById('auditor-deep-dive-section');
  els.btnExportPdf = document.getElementById('btn-export-pdf');
  els.previewDottedPattern = document.getElementById('preview-dotted-pattern');
  els.previewDottedDesc = document.getElementById('preview-dotted-desc');
  els.chatMicBtn = document.getElementById('chat-mic-btn');
  els.chatRecordingIndicator = document.getElementById('chat-recording-indicator');
  els.recordingTimer = document.getElementById('recording-timer');
  
  els.adminNavOverview = document.getElementById('admin-nav-overview');
  els.adminNavDocuments = document.getElementById('admin-nav-documents');
  els.adminNavTraining = document.getElementById('admin-nav-training');
  els.adminNavAnalytics = document.getElementById('admin-nav-analytics');
  els.adminNavSettings = document.getElementById('admin-nav-settings');
  
  els.adminPaneOverview = document.getElementById('admin-pane-overview');
  els.adminPaneDocuments = document.getElementById('admin-pane-documents');
  els.adminPaneTraining = document.getElementById('admin-pane-training');
  els.adminPaneAnalytics = document.getElementById('admin-pane-analytics');
  els.adminPaneSettings = document.getElementById('admin-pane-settings');
  
  els.tableSearch = document.getElementById('table-search');
  els.btnAddDoc = document.getElementById('btn-add-doc');
  els.docTableBody = document.getElementById('doc-table-body');
  els.systemInsightBox = document.getElementById('system-insight-box');
  
  els.modalBackdrop = document.getElementById('modal-backdrop');
  els.modalClose = document.getElementById('modal-close');
  els.docForm = document.getElementById('doc-form');
  els.btnSaveDoc = document.getElementById('btn-save-doc');
  els.modalUploadZone = document.getElementById('modal-upload-zone');
  els.modalUploadText = document.getElementById('modal-upload-text');
  els.modalDocFileInput = document.getElementById('modal-doc-file-input');
  els.modalSelectedFileInfo = document.getElementById('modal-selected-file-info');

  els.loginModalBackdrop = document.getElementById('login-modal-backdrop');
  els.loginModalClose = document.getElementById('login-modal-close');
  els.loginForm = document.getElementById('login-form');
  els.loginUsername = document.getElementById('login-username');
  els.loginPassword = document.getElementById('login-password');
  els.loginErrorMsg = document.getElementById('login-error-msg');
  
  els.chartVolume = document.getElementById('chart-volume');
  els.chartObjections = document.getElementById('chart-objections');
  els.chartPersonalities = document.getElementById('chart-personalities');
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  currentLang = currentLanguage;
  els.html.setAttribute('lang', currentLanguage);
  els.html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
  
  applyTranslations();
  renderGenderSelector();
  renderFAQs('customer');
  renderChatHistory();
  renderDocumentsTable();
  
  if (auditProcessed && uploadedImageSrc) {
    drawScanBoxes(els.canvasAudit, els.imgAudit);
  }

  if (currentPortal === 'admin') {
    renderAnalyticsCharts(els.chartVolume, els.chartObjections, els.chartPersonalities);
  }
}

function applyTranslations() {
  const dict = translations[currentLanguage];
  
  document.querySelectorAll('[data-trn]').forEach(el => {
    const key = el.getAttribute('data-trn');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-trn-placeholder]').forEach(el => {
    const key = el.getAttribute('data-trn-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  if (currentPortal === 'guest') {
    els.portalBadge.textContent = dict.guestBadge;
    els.logoutBtn.style.display = 'block';
    els.userNavGroup.style.display = 'flex';
  } else if (currentPortal === 'admin') {
    els.portalBadge.textContent = dict.adminBadge;
    els.logoutBtn.style.display = 'block';
    els.userNavGroup.style.display = 'flex';
  } else {
    els.portalBadge.textContent = "";
    els.logoutBtn.style.display = 'none';
    els.userNavGroup.style.display = 'none';
  }

  els.langText.textContent = dict.switchLanguage;
  
  const activeCoachLabel = selectedGender === 'male' ? 
    dict.calmCoachMale : 
    dict.calmCoachFemale;
  els.textCoachName.textContent = activeCoachLabel;

  if (els.systemInsightBox) {
    const insightHeader = els.systemInsightBox.querySelector('h4');
    const insightBody = els.systemInsightBox.querySelector('p');
    insightHeader.textContent = dict.systemInsightTitle;
    insightBody.textContent = dict.systemInsightDesc;
  }
}

function switchPortal(portalName) {
  currentPortal = portalName;
  stopSpeaking();
  stopActiveVoiceNotePlayback();
  
  els.welcomePortal.style.display = 'none';
  els.guestPortal.style.display = 'none';
  els.adminPortal.style.display = 'none';
  
  if (portalName === 'welcome') {
    els.welcomePortal.style.display = 'block';
  } else if (portalName === 'guest') {
    els.guestPortal.style.display = 'block';
    switchGuestView(activeGuestView);
  } else if (portalName === 'admin') {
    els.adminPortal.style.display = 'flex';
    switchAdminView(activeAdminView);
    setTimeout(() => {
      renderAnalyticsCharts(els.chartVolume, els.chartObjections, els.chartPersonalities);
    }, 100);
  }
  
  applyTranslations();
}

function switchGuestView(viewName) {
  activeGuestView = viewName;
  stopSpeaking();
  stopActiveVoiceNotePlayback();
  
  els.tabVoiceCoach.classList.remove('active');
  els.tabTextCoach.classList.remove('active');
  els.tabVisualAuditor.classList.remove('active');
  
  els.panelVoiceCoach.style.display = 'none';
  els.panelTextCoach.style.display = 'none';
  els.panelVisualAuditor.style.display = 'none';
  
  if (viewName === 'voice-coach') {
    els.tabVoiceCoach.classList.add('active');
    els.panelVoiceCoach.style.display = 'flex';
    renderGenderSelector();
    renderFAQs('customer');
  } else if (viewName === 'text-coach') {
    els.tabTextCoach.classList.add('active');
    els.panelTextCoach.style.display = 'flex';
    renderChatHistory();
  } else if (viewName === 'auditor') {
    els.tabVisualAuditor.classList.add('active');
    els.panelVisualAuditor.style.display = 'grid';
    if (uploadedImageSrc) {
      els.imgAudit.src = uploadedImageSrc;
      els.imgAudit.style.display = 'block';
      els.previewDottedPattern.style.display = 'none';
      els.previewDottedDesc.style.display = 'none';
      if (auditProcessed) {
        els.canvasAudit.style.display = 'block';
        setTimeout(() => drawScanBoxes(els.canvasAudit, els.imgAudit), 50);
      }
    }
  }
}

function switchAdminView(viewName) {
  activeAdminView = viewName;
  
  els.adminNavOverview.classList.remove('active');
  els.adminNavDocuments.classList.remove('active');
  els.adminNavTraining.classList.remove('active');
  els.adminNavAnalytics.classList.remove('active');
  els.adminNavSettings.classList.remove('active');
  
  els.adminPaneOverview.style.display = 'none';
  els.adminPaneDocuments.style.display = 'none';
  els.adminPaneTraining.style.display = 'none';
  els.adminPaneAnalytics.style.display = 'none';
  els.adminPaneSettings.style.display = 'none';
  
  if (viewName === 'overview') {
    els.adminNavOverview.classList.add('active');
    els.adminPaneOverview.style.display = 'block';
  } else if (viewName === 'documents') {
    els.adminNavDocuments.classList.add('active');
    els.adminPaneDocuments.style.display = 'block';
    renderDocumentsTable();
  } else if (viewName === 'training') {
    els.adminNavTraining.classList.add('active');
    els.adminPaneTraining.style.display = 'block';
  } else if (viewName === 'analytics') {
    els.adminNavAnalytics.classList.add('active');
    els.adminPaneAnalytics.style.display = 'block';
    setTimeout(() => {
      renderAnalyticsCharts(els.chartVolume, els.chartObjections, els.chartPersonalities);
    }, 100);
  } else if (viewName === 'settings') {
    els.adminNavSettings.classList.add('active');
    els.adminPaneSettings.style.display = 'block';
  }
}

function renderGenderSelector() {
  els.personalitiesRow.innerHTML = "";
  els.personalitiesRow.className = "personalities-row calm-coach-controls-row";
  
  const isAr = currentLanguage === 'ar';
  
  // Create a nice descriptor tag
  const labelSpan = document.createElement('div');
  labelSpan.className = "calm-coach-label";
  labelSpan.innerHTML = `
    <i class="fas fa-volume-up"></i>
    <span>${translations[currentLanguage].voiceCoachCalm}</span>
  `;
  els.personalitiesRow.appendChild(labelSpan);
  
  // Create toggle container
  const toggleGroup = document.createElement('div');
  toggleGroup.className = "gender-toggle-group";
  
  // Male button
  const maleBtn = document.createElement('button');
  maleBtn.className = `gender-btn ${selectedGender === 'male' ? 'active' : ''}`;
  maleBtn.innerHTML = `
    <i class="fas fa-mars"></i>
    <span>${translations[currentLanguage].genderMale}</span>
  `;
  maleBtn.addEventListener('click', () => {
    selectedGender = 'male';
    renderGenderSelector();
    updateCoachIntroSpeech();
  });
  
  // Female button
  const femaleBtn = document.createElement('button');
  femaleBtn.className = `gender-btn ${selectedGender === 'female' ? 'active' : ''}`;
  femaleBtn.innerHTML = `
    <i class="fas fa-venus"></i>
    <span>${translations[currentLanguage].genderFemale}</span>
  `;
  femaleBtn.addEventListener('click', () => {
    selectedGender = 'female';
    renderGenderSelector();
    updateCoachIntroSpeech();
  });
  
  toggleGroup.appendChild(maleBtn);
  toggleGroup.appendChild(femaleBtn);
  els.personalitiesRow.appendChild(toggleGroup);
  
  // Update Text Coach Header
  const activeCoachLabel = selectedGender === 'male' ? 
    translations[currentLanguage].calmCoachMale : 
    translations[currentLanguage].calmCoachFemale;
  els.textCoachName.textContent = activeCoachLabel;
}

function updateCoachIntroSpeech() {
  const isAr = currentLanguage === 'ar';
  const introText = isAr ? 
    "مرحباً، أنا مدربك الخاص. كيف يمكنني إرشادك اليوم؟" :
    "Hello, I am your coach. How can I guide you today?";
  
  els.voiceGreeting.className = "coach-headline";
  els.voiceGreeting.style.fontSize = "";
  els.voiceGreeting.style.fontWeight = "";
  els.voiceGreeting.style.textAlign = "";
  els.voiceGreeting.style.margin = "";
  els.voiceGreeting.style.maxWidth = "";
  els.voiceGreeting.textContent = introText;
  
  speakText(introText, selectedGender, 
    () => els.micOuter.classList.add('speaking'), 
    () => els.micOuter.classList.remove('speaking')
  );
}

function renderFAQs(tabName) {
  els.faqContentList.innerHTML = "";
  const dict = translations[currentLanguage];
  
  if (tabName === 'customer') {
    els.faqTabCustomer.classList.add('active');
    els.faqTabPolicy.classList.remove('active');
    
    const customerFAQs = [
      { q: dict.objectionTooExpensive, key: "Too expensive" },
      { q: dict.objectionNoSize, key: "Out of size" },
      { q: dict.objectionJustLooking, key: "Just looking" }
    ];
    
    customerFAQs.forEach(item => {
      const div = document.createElement('div');
      div.className = 'faq-question-item';
      const answer = getCoachResponse(item.key);
      div.innerHTML = `
        <h4>${item.q}</h4>
        <p>${answer}</p>
      `;
      div.addEventListener('click', () => {
        triggerVoiceCoachSpeech(item.q, answer);
      });
      els.faqContentList.appendChild(div);
    });
    
  } else {
    els.faqTabPolicy.classList.add('active');
    els.faqTabCustomer.classList.remove('active');
    
    const policyFAQs = [
      { q: dict.faqDefaultQ, a: dict.faqDefaultA },
      { 
        q: currentLanguage === 'ar' ? "ما هي سياسة الإرجاع والتبديل؟" : "What is the return and exchange policy?", 
        a: currentLanguage === 'ar' ? "يمكن إرجاع السلع غير المستخدمة خلال 14 يوماً من الشراء مع إحضار الفاتورة الأصلية." : "Unused items can be returned within 14 days of purchase with the original receipt."
      },
      {
        q: currentLanguage === 'ar' ? "هل يمكن حجز سلعة للعميل؟" : "Can we hold items for customers?",
        a: currentLanguage === 'ar' ? "نعم، يمكن حجز السلعة في صالة العرض حتى نهاية اليوم الحالي فقط." : "Yes, we can hold items on the floor until the end of the business day."
      }
    ];
    
    policyFAQs.forEach(item => {
      const div = document.createElement('div');
      div.className = 'faq-question-item';
      div.innerHTML = `
        <h4>${item.q}</h4>
        <p>${item.a}</p>
      `;
      div.addEventListener('click', () => {
        triggerVoiceCoachSpeech(item.q, item.a);
      });
      els.faqContentList.appendChild(div);
    });
  }
}

function triggerVoiceCoachSpeech(heading, text) {
  const isAr = currentLanguage === 'ar';
  const mck = getMckinseyResponse(heading);
  
  els.voiceObjectionPrompt.textContent = heading;
  
  els.voiceGreeting.className = "chat-bubble coach mck-deck-bubble";
  els.voiceGreeting.style.fontSize = "14px";
  els.voiceGreeting.style.fontWeight = "normal";
  els.voiceGreeting.style.textAlign = isAr ? "right" : "left";
  els.voiceGreeting.style.margin = "0 auto 24px auto";
  els.voiceGreeting.style.maxWidth = "860px";
  
  els.voiceGreeting.innerHTML = `
    <div class="mck-deck-title">
      <i class="fas fa-layer-group"></i>
      <span>${isAr ? "تحليل المبيعات - منهجية ماكينزي" : "Sales Insight - McKinsey Framework"}</span>
    </div>
    
    <div class="mck-grid">
      <div class="mck-card mck-actions">
        <div class="mck-card-header">
          <i class="fas fa-bolt"></i>
          <h4>${isAr ? "إجراء فوري / مدخلات مباشرة" : "Immediate Actions / Direct Inputs"}</h4>
        </div>
        <ul class="mck-action-list">
          <li><span class="num-badge">1</span> ${mck.actions[0]}</li>
          <li><span class="num-badge">2</span> ${mck.actions[1]}</li>
          <li><span class="num-badge">3</span> ${mck.actions[2]}</li>
        </ul>
      </div>
      
      <div class="mck-card mck-root-cause">
        <div class="mck-card-header">
          <i class="fas fa-search-plus"></i>
          <h4>${isAr ? "تحليل الأسباب الجذرية للمشكلة" : "Root Cause Analysis"}</h4>
        </div>
        <div class="mck-root-cause-content">
          <p>${mck.rootCause}</p>
        </div>
      </div>
    </div>
    
    <div class="mck-banner-card">
      <div class="mck-banner-header">
        <i class="far fa-lightbulb"></i>
        <h4>${isAr ? "مدخلات استراتيجية إضافية" : "Strategic Additional Inputs"}</h4>
      </div>
      <p>${mck.additional}</p>
    </div>
  `;
  
  speakText(text, selectedGender, 
    () => els.micOuter.classList.add('speaking'), 
    () => els.micOuter.classList.remove('speaking')
  );
}

function handleMicClick() {
  stopSpeaking();
  
  const onResult = (resultText) => {
    els.voiceObjectionPrompt.textContent = `"${resultText}"`;
    
    // First, intercept voice navigation commands!
    if (checkVoiceNavigation(resultText)) {
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
      return;
    }

    els.voiceStatus.textContent = translations[currentLanguage].micProcessing;
    
    setTimeout(() => {
      const answer = getCoachResponse(resultText);
      triggerVoiceCoachSpeech(resultText, answer);
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
    }, 1000);
  };
  
  const onStateChange = (active) => {
    isListening = active;
    if (active) {
      els.micOuter.classList.add('listening');
      els.voiceStatus.textContent = translations[currentLanguage].micListening;
    } else {
      els.micOuter.classList.remove('listening');
      els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
    }
  };
  
  const onError = (errMsg) => {
    alert(errMsg);
    els.voiceStatus.textContent = translations[currentLanguage].micTapToTalk;
  };
  
  toggleSpeechRecognition(onResult, onStateChange, onError);
}

let chatMediaRecorder = null;
let chatAudioChunks = [];
let chatRecordingTimerInterval = null;
let chatRecordingStartTime = 0;
let isChatRecording = false;
let chatActiveAudioPlayback = null;
let elapsedSecondsForAudioBlob = 0;
let chatSpeechTranscript = "";
let chatSpeechRec = null;

function renderChatHistory() {
  els.chatBody.innerHTML = "";
  const history = chatHistory[currentLanguage];
  
  history.forEach(msg => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${msg.sender === 'user' ? 'user' : 'coach'} ${msg.type === 'voicenote' ? 'voicenote-bubble' : ''}`;
    
    if (msg.type === 'voicenote') {
      const vnId = msg.vnId;
      const isUser = msg.sender === 'user';
      const playIcon = `play-icon-${vnId}`;
      const speedBtn = `speed-btn-${vnId}`;
      const progressFill = `progress-${vnId}`;
      
      bubble.innerHTML = `
        <div class="voicenote-container">
          <button class="vn-play-btn" id="${playIcon}" data-vnid="${vnId}">
            <i class="fas fa-play"></i>
          </button>
          
          <div class="vn-waveform-wrapper">
            <div class="vn-waveform" data-vnid="${vnId}">
              <div class="wave-bar" style="height: 12px;"></div>
              <div class="wave-bar" style="height: 18px;"></div>
              <div class="wave-bar" style="height: 8px;"></div>
              <div class="wave-bar" style="height: 22px;"></div>
              <div class="wave-bar" style="height: 14px;"></div>
              <div class="wave-bar" style="height: 26px;"></div>
              <div class="wave-bar" style="height: 10px;"></div>
              <div class="wave-bar" style="height: 16px;"></div>
              <div class="wave-bar" style="height: 24px;"></div>
              <div class="wave-bar" style="height: 12px;"></div>
              <div class="wave-bar" style="height: 20px;"></div>
              <div class="wave-bar" style="height: 6px;"></div>
            </div>
            <div class="vn-progress-line" id="${progressFill}"></div>
          </div>
          
          <div class="vn-meta">
            <span class="vn-duration">${msg.durationText}</span>
            <button class="vn-speed-btn" id="${speedBtn}" data-speed="1">1x</button>
          </div>
        </div>
        <div class="vn-transcript-box">
          <span class="vn-transcript-label">${currentLanguage === 'ar' ? 'نص الصوت:' : 'Transcript:'}</span>
          <p class="vn-transcript-text">"${msg.text}"</p>
        </div>
      `;
      
      setTimeout(() => {
        const btn = document.getElementById(playIcon);
        const sBtn = document.getElementById(speedBtn);
        
        if (btn) {
          btn.addEventListener('click', () => {
            toggleVoiceNotePlayback(vnId, msg.text, msg.audioUrl, isUser);
          });
        }
        
        if (sBtn) {
          sBtn.addEventListener('click', () => {
            let speed = parseFloat(sBtn.getAttribute('data-speed'));
            if (speed === 1) speed = 1.5;
            else if (speed === 1.5) speed = 2;
            else speed = 1;
            
            sBtn.setAttribute('data-speed', speed);
            sBtn.textContent = `${speed}x`;
            
            if (chatActiveAudioPlayback && chatActiveAudioPlayback.vnId === vnId) {
              if (chatActiveAudioPlayback.type === 'audio') {
                chatActiveAudioPlayback.element.playbackRate = speed;
              } else if (chatActiveAudioPlayback.type === 'synth') {
                chatActiveAudioPlayback.utterance.rate = speed;
              }
            }
          });
        }
      }, 50);
      
    } else {
      if (msg.sender === 'coach' && msg.mckinsey) {
        const mck = msg.mckinsey;
        const isAr = currentLanguage === 'ar';
        bubble.className = `chat-bubble coach mck-deck-bubble`;
        bubble.innerHTML = `
          <div class="mck-deck-title">
            <i class="fas fa-layer-group"></i>
            <span>${isAr ? "تحليل المبيعات - منهجية ماكينزي" : "Sales Insight - McKinsey Framework"}</span>
          </div>
          
          <div class="mck-grid">
            <div class="mck-card mck-actions">
              <div class="mck-card-header">
                <i class="fas fa-bolt"></i>
                <h4>${isAr ? "إجراء فوري / مدخلات مباشرة" : "Immediate Actions / Direct Inputs"}</h4>
              </div>
              <ul class="mck-action-list">
                <li><span class="num-badge">1</span> ${mck.actions[0]}</li>
                <li><span class="num-badge">2</span> ${mck.actions[1]}</li>
                <li><span class="num-badge">3</span> ${mck.actions[2]}</li>
              </ul>
            </div>
            
            <div class="mck-card mck-root-cause">
              <div class="mck-card-header">
                <i class="fas fa-search-plus"></i>
                <h4>${isAr ? "تحليل الأسباب الجذرية للمشكلة" : "Root Cause Analysis"}</h4>
              </div>
              <div class="mck-root-cause-content">
                <p>${mck.rootCause}</p>
              </div>
            </div>
          </div>
          
          <div class="mck-banner-card">
            <div class="mck-banner-header">
              <i class="far fa-lightbulb"></i>
              <h4>${isAr ? "مدخلات استراتيجية إضافية" : "Strategic Additional Inputs"}</h4>
            </div>
            <p>${mck.additional}</p>
          </div>
        `;
      } else {
        bubble.textContent = msg.text;
      }
    }
    
    els.chatBody.appendChild(bubble);
  });
  
  els.chatBody.scrollTop = els.chatBody.scrollHeight;
  
  els.failSafeButtons.innerHTML = "";
  const dict = translations[currentLanguage];
  const objections = [
    { label: dict.objectionTooExpensive, key: "Too expensive" },
    { label: dict.objectionNoSize, key: "Out of size" },
    { label: dict.objectionJustLooking, key: "Just looking" },
    { label: dict.objectionCompareBrand, key: "Compare with brand X" }
  ];
  
  objections.forEach(obj => {
    const btn = document.createElement('button');
    btn.className = 'fail-safe-btn';
    btn.textContent = obj.label;
    btn.addEventListener('click', () => {
      handleUserTextMessage(obj.label);
    });
    els.failSafeButtons.appendChild(btn);
  });
}

function handleUserTextMessage(userText) {
  if (!userText.trim()) return;
  
  if (checkVoiceNavigation(userText)) {
    els.chatInput.value = "";
    return;
  }
  
  chatHistory[currentLanguage].push({ sender: 'user', text: userText });
  renderChatHistory();
  els.chatInput.value = "";
  
  const typing = document.createElement('div');
  typing.className = 'chat-bubble coach chat-typing';
  typing.id = 'chat-typing-indicator';
  typing.innerHTML = `
    <span>${translations[currentLanguage].typingIndicator}</span>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  els.chatBody.appendChild(typing);
  els.chatBody.scrollTop = els.chatBody.scrollHeight;
  
  setTimeout(() => {
    const typingIndicator = document.getElementById('chat-typing-indicator');
    if (typingIndicator) typingIndicator.remove();
    
    const replyText = getCoachResponse(userText);
    const mck = getMckinseyResponse(userText);
    chatHistory[currentLanguage].push({ sender: 'coach', text: replyText, mckinsey: mck });
    renderChatHistory();
  }, 1000);
}

function startChatRecording() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert(currentLanguage === 'ar' ? "التعرف على الصوت غير مدعوم في هذا المتصفح." : "Speech recognition is not supported in this browser.");
    return;
  }
  
  stopActiveVoiceNotePlayback();
  
  chatAudioChunks = [];
  isChatRecording = true;
  
  const micBtn = document.getElementById('chat-mic-btn');
  const indicator = document.getElementById('chat-recording-indicator');
  const timer = document.getElementById('recording-timer');
  
  micBtn.classList.add('recording');
  micBtn.innerHTML = '<i class="fas fa-stop"></i>';
  indicator.style.display = 'flex';
  els.chatInput.style.display = 'none';
  els.chatInput.value = "";
  
  chatRecordingStartTime = Date.now();
  timer.textContent = "0:00";
  
  chatRecordingTimerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - chatRecordingStartTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    timer.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
  }, 1000);

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        chatMediaRecorder = new MediaRecorder(stream);
        chatMediaRecorder.ondataavailable = e => {
          chatAudioChunks.push(e.data);
        };
        chatMediaRecorder.onstop = () => {
          const audioBlob = new Blob(chatAudioChunks, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          finalizeChatVoiceNote(audioUrl, elapsedSecondsForAudioBlob);
        };
        chatMediaRecorder.start();
      })
      .catch(err => {
        console.warn("Hardware audio record failed or blocked:", err);
        chatMediaRecorder = null;
      });
  } else {
    chatMediaRecorder = null;
  }
  
  chatSpeechRec = new SpeechRecognition();
  chatSpeechRec.continuous = false;
  chatSpeechRec.interimResults = false;
  chatSpeechRec.lang = currentLanguage === 'ar' ? 'ar-AE' : 'en-US';
  
  let transcriptResult = "";
  chatSpeechRec.onresult = (event) => {
    transcriptResult = event.results[0][0].transcript;
  };
  
  chatSpeechRec.onerror = (e) => {
    console.warn("Speech recognition error in text chat:", e.error);
  };
  
  chatSpeechRec.onend = () => {
    if (!isChatRecording) return;
    chatSpeechTranscript = transcriptResult;
  };
  
  chatSpeechTranscript = "";
  chatSpeechRec.start();
}

function stopChatRecording() {
  if (!isChatRecording) return;
  isChatRecording = false;
  
  clearInterval(chatRecordingTimerInterval);
  
  const micBtn = document.getElementById('chat-mic-btn');
  const indicator = document.getElementById('chat-recording-indicator');
  
  micBtn.classList.remove('recording');
  micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
  indicator.style.display = 'none';
  els.chatInput.style.display = 'block';
  
  const elapsed = Math.floor((Date.now() - chatRecordingStartTime) / 1000);
  elapsedSecondsForAudioBlob = elapsed;
  
  if (chatMediaRecorder && chatMediaRecorder.state !== 'inactive') {
    chatMediaRecorder.stop();
    chatMediaRecorder.stream.getTracks().forEach(track => track.stop());
  }
  
  if (chatSpeechRec) {
    chatSpeechRec.stop();
  }
  
  setTimeout(() => {
    if (!chatMediaRecorder) {
      finalizeChatVoiceNote(null, elapsed);
    }
  }, 400);
}

function finalizeChatVoiceNote(audioUrl, elapsedSeconds) {
  const text = chatSpeechTranscript || (currentLanguage === 'ar' ? "رسالة صوتية مسجلة" : "Recorded voice note");
  
  if (checkVoiceNavigation(text)) {
    return;
  }
  
  const durationText = elapsedSeconds > 0 ? 
    `${Math.floor(elapsedSeconds / 60)}:${elapsedSeconds % 60 < 10 ? '0' : ''}${elapsedSeconds % 60}` : 
    "0:04";
  
  const vnId = Date.now();
  chatHistory[currentLanguage].push({
    sender: 'user',
    type: 'voicenote',
    text: text,
    audioUrl: audioUrl,
    durationText: durationText,
    vnId: vnId
  });
  
  renderChatHistory();
  
  const typing = document.createElement('div');
  typing.className = 'chat-bubble coach chat-typing';
  typing.id = 'chat-typing-indicator';
  typing.innerHTML = `
    <span>${translations[currentLanguage].typingIndicator}</span>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  els.chatBody.appendChild(typing);
  els.chatBody.scrollTop = els.chatBody.scrollHeight;
  
  setTimeout(() => {
    const typingIndicator = document.getElementById('chat-typing-indicator');
    if (typingIndicator) typingIndicator.remove();
    
    const replyText = getCoachResponse(text);
    const mck = getMckinseyResponse(text);
    
    const replyVnId = Date.now() + 1;
    chatHistory[currentLanguage].push({
      sender: 'coach',
      type: 'voicenote',
      text: replyText,
      mckinsey: mck,
      audioUrl: null,
      durationText: "0:08",
      vnId: replyVnId
    });
    
    renderChatHistory();
  }, 1200);
}

function toggleVoiceNotePlayback(vnId, text, audioUrl, isUser) {
  if (chatActiveAudioPlayback) {
    const prevId = chatActiveAudioPlayback.vnId;
    stopActiveVoiceNotePlayback();
    if (prevId === vnId) return;
  }
  
  const playBtn = document.getElementById(`play-icon-${vnId}`);
  const speedBtn = document.getElementById(`speed-btn-${vnId}`);
  const waveform = document.querySelector(`.vn-waveform[data-vnid="${vnId}"]`);
  const progress = document.getElementById(`progress-${vnId}`);
  
  const currentSpeed = parseFloat(speedBtn ? speedBtn.getAttribute('data-speed') : "1");
  
  if (waveform) waveform.classList.add('playing');
  if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  
  let animationInterval = null;
  let startTime = Date.now();
  let durationMs = 4000;
  
  if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.playbackRate = currentSpeed;
    
    chatActiveAudioPlayback = {
      vnId: vnId,
      type: 'audio',
      element: audio,
      playBtn: playBtn,
      waveform: waveform,
      progress: progress,
      animationInterval: null
    };
    
    audio.onloadedmetadata = () => {
      durationMs = audio.duration * 1000;
    };
    
    audio.onplay = () => {
      const dur = audio.duration ? audio.duration * 1000 : durationMs;
      const step = 50;
      let elapsed = 0;
      animationInterval = setInterval(() => {
        elapsed += step * currentSpeed;
        const percent = Math.min(100, (elapsed / dur) * 100);
        if (progress) progress.style.width = `${percent}%`;
      }, step);
      chatActiveAudioPlayback.animationInterval = animationInterval;
    };
    
    audio.onended = () => {
      stopActiveVoiceNotePlayback();
    };
    
    audio.onerror = () => {
      stopActiveVoiceNotePlayback();
    };
    
    audio.play();
    
  } else {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices().length ? synth.getVoices() : loadedVoices;
    
    let matchedVoice = null;
    if (currentLanguage === 'ar') {
      matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith('ar'));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang;
      } else {
        utterance.lang = 'ar-SA';
      }
      utterance.rate = currentSpeed * 0.95;
    } else {
      utterance.lang = 'en-US';
      const personality = personalities[selectedPersonality] || personalities["Professional (Kore)"];
      if (isUser) {
        matchedVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('male'));
        utterance.rate = currentSpeed;
      } else {
        if (selectedPersonality.includes("Puck") || selectedPersonality.includes("Zephyr")) {
          matchedVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
        } else {
          matchedVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('male'));
        }
        utterance.rate = personality.rate * currentSpeed;
        utterance.pitch = personality.pitch;
      }
      if (!matchedVoice) {
        matchedVoice = voices.find(v => v.lang.startsWith('en'));
      }
      if (matchedVoice) utterance.voice = matchedVoice;
    }
    
    chatActiveAudioPlayback = {
      vnId: vnId,
      type: 'synth',
      utterance: utterance,
      playBtn: playBtn,
      waveform: waveform,
      progress: progress,
      animationInterval: null
    };
    
    const charCount = text.length;
    const estDuration = (charCount * 70) / currentSpeed;
    
    utterance.onstart = () => {
      const step = 50;
      let elapsed = 0;
      animationInterval = setInterval(() => {
        elapsed += step;
        const percent = Math.min(99, (elapsed / estDuration) * 100);
        if (progress) progress.style.width = `${percent}%`;
      }, step);
      chatActiveAudioPlayback.animationInterval = animationInterval;
    };
    
    utterance.onend = () => {
      if (progress) progress.style.width = "100%";
      setTimeout(() => {
        stopActiveVoiceNotePlayback();
      }, 200);
    };
    
    utterance.onerror = () => {
      stopActiveVoiceNotePlayback();
    };
    
    synth.speak(utterance);
  }
}

function stopActiveVoiceNotePlayback() {
  if (!chatActiveAudioPlayback) return;
  
  const cap = chatActiveAudioPlayback;
  chatActiveAudioPlayback = null;
  
  if (cap.animationInterval) {
    clearInterval(cap.animationInterval);
  }
  
  if (cap.type === 'audio') {
    cap.element.pause();
    cap.element.src = "";
  } else if (cap.type === 'synth') {
    synth.cancel();
  }
  
  if (cap.playBtn) cap.playBtn.innerHTML = '<i class="fas fa-play"></i>';
  if (cap.waveform) cap.waveform.classList.remove('playing');
  if (cap.progress) cap.progress.style.width = "0%";
}

function triggerShelfScan() {
  if (!uploadedImageSrc) {
    alert(currentLanguage === 'ar' ? "الرجاء رفع صورة الرف أولاً لتشغيل المسح!" : "Please upload a shelf image first to run scan!");
    return;
  }
  
  auditProcessed = false;
  els.processedTag.style.display = 'none';
  els.canvasAudit.style.display = 'none';
  els.actionRequiredBanner.style.display = 'none';
  els.auditorKPIsRow.style.display = 'none';
  els.auditorDeepDiveSection.style.display = 'none';
  els.scanStatusText.textContent = translations[currentLanguage].scanningText;
  
  els.previewBox.classList.add('scanning');
  
  setTimeout(() => {
    els.previewBox.classList.remove('scanning');
    auditProcessed = true;
    
    els.processedTag.style.display = 'inline-block';
    els.canvasAudit.style.display = 'block';
    els.actionRequiredBanner.style.display = 'flex';
    els.auditorKPIsRow.style.display = 'grid';
    els.auditorDeepDiveSection.style.display = 'block';
    els.scanStatusText.textContent = translations[currentLanguage].processedBadge;
    
    drawScanBoxes(els.canvasAudit, els.imgAudit);
  }, 1500);
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImageSrc = e.target.result;
    els.imgAudit.src = uploadedImageSrc;
    els.imgAudit.style.display = 'block';
    els.previewDottedPattern.style.display = 'none';
    els.previewDottedDesc.style.display = 'none';
    els.scanRefLabel.textContent = file.name;
    
    triggerShelfScan();
  };
  reader.readAsDataURL(file);
}

function loadSampleShelf() {
  // If the sample_shelf.png is not found, we use visual elements on a canvas as a fail-safe
  uploadedImageSrc = "sample_shelf.png";
  els.imgAudit.src = uploadedImageSrc;
  els.imgAudit.style.display = 'block';
  els.previewDottedPattern.style.display = 'none';
  els.previewDottedDesc.style.display = 'none';
  els.scanRefLabel.textContent = "sample_shelf.png";
  
  // Also hook error handler to draw dynamic elements if image fails to load
  els.imgAudit.onerror = () => {
    const mockupCanvas = document.createElement('canvas');
    mockupCanvas.width = 640;
    mockupCanvas.height = 480;
    const c = mockupCanvas.getContext('2d');
    c.fillStyle = "#cbd5e1";
    c.fillRect(0,0,640,480);
    c.fillStyle = "#854d0e";
    c.fillRect(10, 150, 620, 15);
    c.fillRect(10, 300, 620, 15);
    c.fillRect(10, 440, 620, 15);
    c.fillStyle = "#1e3a8a";
    for(let i=0; i<4; i++) c.fillRect(40, 100 - i*12, 100, 10);
    c.fillStyle = "#3b82f6";
    for(let i=0; i<1; i++) c.fillRect(260, 140 - i*12, 100, 10);
    c.fillStyle = "#1d4ed8";
    for(let i=0; i<5; i++) c.fillRect(480, 90 - i*12, 100, 10);
    c.fillStyle = "#78350f";
    c.fillRect(510, 260, 60, 40);
    
    uploadedImageSrc = mockupCanvas.toDataURL('image/jpeg');
    els.imgAudit.src = uploadedImageSrc;
  };
  
  triggerShelfScan();
}

function renderDocumentsTable() {
  els.docTableBody.innerHTML = "";
  const docs = documentList;
  const dict = translations[currentLanguage];
  
  docs.forEach(doc => {
    const tr = document.createElement('tr');
    tr.id = `doc-row-${doc.id}`;
    
    const isArabicDoc = doc.language === "ARABIC";
    const iconClass = doc.name.endsWith('.pdf') ? 'fa-file-pdf doc-icon-red' : 'fa-file-alt doc-icon-blue';
    const langBadgeClass = isArabicDoc ? 'ar' : 'en';
    
    const translatedType = dict[doc.type] || doc.type;
    const translatedLang = dict[doc.language] || doc.language;
    const translatedStatus = dict.INDEXED || "INDEXED";
    
    tr.innerHTML = `
      <td>
        <div class="doc-row-name-cell">
          <i class="far ${iconClass}"></i>
          <div>
            <span class="doc-name-main">${doc.name}</span>
            <span class="doc-name-sub">${doc.size} • ${translatedType}</span>
          </div>
        </div>
      </td>
      <td>
        <span class="status-badge green">${translatedStatus}</span>
      </td>
      <td>${doc.updated}</td>
      <td>
        <span class="lang-badge ${langBadgeClass}">${translatedLang}</span>
      </td>
      <td>
        <button class="user-profile-btn btn-delete-doc" data-id="${doc.id}">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    `;
    els.docTableBody.appendChild(tr);
  });
  
  document.querySelectorAll('.btn-delete-doc').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'));
      deleteDocument(id);
      renderDocumentsTable();
    });
  });
}

function handleAddDocSubmit(e) {
  e.preventDefault();
  if (!tempUploadedFile) {
    alert(currentLanguage === 'ar' ? "الرجاء اختيار ملف أولاً!" : "Please select a file first!");
    return;
  }
  
  const name = tempUploadedFile.name;
  let size = "";
  if (tempUploadedFile.size > 1024 * 1024) {
    size = (tempUploadedFile.size / (1024 * 1024)).toFixed(1) + " MB";
  } else {
    size = (tempUploadedFile.size / 1024).toFixed(0) + " KB";
  }
  
  const lowerName = name.toLowerCase();
  let type = "Manual";
  if (lowerName.includes("strategy") || lowerName.includes("plan")) {
    type = "Strategy";
  } else if (lowerName.includes("objection") || lowerName.includes("script") || lowerName.includes("coach")) {
    type = "Scripts";
  } else if (lowerName.includes("catalog") || lowerName.includes("product") || lowerName.includes("price")) {
    type = "Product";
  }
  
  const lang = currentLanguage === 'ar' ? "ARABIC" : "ENGLISH";
  
  addDocument(name, size, type, lang);
  renderDocumentsTable();
  
  tempUploadedFile = null;
  els.modalDocFileInput.value = "";
  els.modalSelectedFileInfo.style.display = 'none';
  els.modalSelectedFileInfo.textContent = "";
  els.modalUploadText.textContent = currentLanguage === 'ar' ? "اضغط لرفع ملف PDF أو مستند Word" : "Click to upload PDF or Word document";
  els.modalBackdrop.style.display = 'none';
  els.docForm.reset();
}

function openAdminLogin(redirectView, redirectPane) {
  adminRedirectView = redirectView || 'documents';
  adminRedirectPane = redirectPane || 'documents';
  els.loginUsername.value = "";
  els.loginPassword.value = "";
  els.loginErrorMsg.style.display = 'none';
  els.loginModalBackdrop.style.display = 'flex';
}

function setupEventHandlers() {
  els.langBtn.addEventListener('click', toggleLanguage);
  els.logoutBtn.addEventListener('click', () => switchPortal('welcome'));
  
  els.btnGuestAccess.addEventListener('click', () => switchPortal('guest'));
  els.btnAdminPortal.addEventListener('click', () => openAdminLogin('documents', 'documents'));
  
  els.btnQuickSalesCoach.addEventListener('click', () => {
    switchPortal('guest');
    switchGuestView('voice-coach');
  });
  els.btnQuickVisualAuditor.addEventListener('click', () => {
    switchPortal('guest');
    switchGuestView('auditor');
  });
  els.btnQuickKb.addEventListener('click', () => {
    openAdminLogin('documents', 'documents');
  });
  els.btnQuickRagConfig.addEventListener('click', () => {
    openAdminLogin('settings', 'settings');
  });

  els.tabVoiceCoach.addEventListener('click', () => switchGuestView('voice-coach'));
  els.tabTextCoach.addEventListener('click', () => switchGuestView('text-coach'));
  els.tabVisualAuditor.addEventListener('click', () => switchGuestView('auditor'));

  els.micInner.addEventListener('click', handleMicClick);
  
  els.chatMicBtn.addEventListener('click', () => {
    if (isChatRecording) {
      stopChatRecording();
    } else {
      startChatRecording();
    }
  });
  
  els.faqTabCustomer.addEventListener('click', () => renderFAQs('customer'));
  els.faqTabPolicy.addEventListener('click', () => renderFAQs('policy'));
  
  els.chatSendBtn.addEventListener('click', () => {
    const txt = els.chatInput.value;
    handleUserTextMessage(txt);
  });
  els.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const txt = els.chatInput.value;
      handleUserTextMessage(txt);
    }
  });

  els.btnTakePhoto.addEventListener('click', loadSampleShelf);
  els.btnUploadImage.addEventListener('click', () => els.fileInput.click());
  els.fileInput.addEventListener('change', handleImageUpload);
  
  els.btnExportPdf.addEventListener('click', () => {
    exportAuditReportPDF(defaultAuditData);
  });

  els.adminNavOverview.addEventListener('click', () => switchAdminView('overview'));
  els.adminNavDocuments.addEventListener('click', () => switchAdminView('documents'));
  els.adminNavTraining.addEventListener('click', () => switchAdminView('training'));
  els.adminNavAnalytics.addEventListener('click', () => switchAdminView('analytics'));
  els.adminNavSettings.addEventListener('click', () => switchAdminView('settings'));

  els.btnAddDoc.addEventListener('click', () => {
    tempUploadedFile = null;
    els.modalDocFileInput.value = "";
    els.modalSelectedFileInfo.style.display = 'none';
    els.modalSelectedFileInfo.textContent = "";
    els.modalUploadText.textContent = currentLanguage === 'ar' ? "اضغط لرفع ملف PDF أو مستند Word" : "Click to upload PDF or Word document";
    els.modalBackdrop.style.display = 'flex';
  });
  els.modalClose.addEventListener('click', () => {
    els.modalBackdrop.style.display = 'none';
  });
  els.modalBackdrop.addEventListener('click', (e) => {
    if (e.target === els.modalBackdrop) {
      els.modalBackdrop.style.display = 'none';
    }
  });
  els.docForm.addEventListener('submit', handleAddDocSubmit);

  // Admin login elements event listeners
  els.loginModalClose.addEventListener('click', () => {
    els.loginModalBackdrop.style.display = 'none';
  });
  els.loginModalBackdrop.addEventListener('click', (e) => {
    if (e.target === els.loginModalBackdrop) {
      els.loginModalBackdrop.style.display = 'none';
    }
  });
  els.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = els.loginUsername.value.trim();
    const pwd = els.loginPassword.value.trim();
    if (user === 'admin' && pwd === 'admin@123') {
      els.loginModalBackdrop.style.display = 'none';
      switchPortal('admin');
      switchAdminView(adminRedirectView);
    } else {
      els.loginErrorMsg.style.display = 'block';
    }
  });

  // Modal upload zone listeners
  els.modalUploadZone.addEventListener('click', () => {
    els.modalDocFileInput.click();
  });

  els.modalDocFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      tempUploadedFile = file;
      let sizeStr = "";
      if (file.size > 1024 * 1024) {
        sizeStr = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      } else {
        sizeStr = (file.size / 1024).toFixed(0) + " KB";
      }
      els.modalSelectedFileInfo.textContent = `${file.name} (${sizeStr})`;
      els.modalSelectedFileInfo.style.display = 'block';
      els.modalUploadText.textContent = file.name;
    }
  });
  
  els.tableSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const rows = els.docTableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(q)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

// Global window layout integrations
window.addEventListener('DOMContentLoaded', () => {
  initDOMElements();
  setupEventHandlers();
  switchPortal('welcome');
});
