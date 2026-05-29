export const translations = {
  en: {
    // Portal / Login View
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

    // Global Header & Nav
    appName: "Retail Sales Pro",
    guestBadge: "GUEST ACCESS",
    adminBadge: "ADMIN PORTAL",
    switchLanguage: "العربية",
    langCode: "ar",
    logout: "Exit Portal",

    // Sales Coach (General)
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
    
    // Coach Personalities
    personalityEnergetic: "Energetic (Puck)",
    personalityAuthoritative: "Authoritative (Charon)",
    personalityProfessional: "Professional (Kore)",
    personalityStrong: "Strong (Fenrir)",
    personalityCalm: "Calm (Zephyr)",

    // Voice Coach Specifics
    micTapToTalk: "Tap microphone to speak to your coach...",
    micListening: "Listening... Speak now",
    micProcessing: "Analyzing response...",
    speakObjection: "Speak your customer's objection or ask a product query:",

    // Text Coach Specifics
    textPlaceholder: "Type customer query or objection here...",
    send: "Send",
    failSafeHeader: "Chat Fail-Safe (Quick Objections)",
    objectionTooExpensive: "Too expensive",
    objectionNoSize: "Out of size",
    objectionJustLooking: "Just looking",
    objectionCompareBrand: "Compare with brand X",
    objectionWarranty: "Is there a warranty?",
    typingIndicator: "Coach is typing...",

    // Visual Auditor View
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

    // Admin View
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

    // Coach dialogue simulation database
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
        "Strong (Fenrir)": "Push for the order: 'Don't settle for the wrong size. Let's order it to your home immediately. It takes 24 hours. In the meantime, let's grab the belt to match it.'",
        "Calm (Zephyr)": "Peaceful assistance: 'That is unfortunate, but we can easily resolve this. Let's check our online stock together, or if you prefer, I can hold a pair at our Mall store.'"
      },
      "Just looking": {
        "Professional (Kore)": "Give space with an open door: 'Please feel free to browse. I'm Kore, your coach today. Just so you know, our premium denim display is 20% off today. Let me know if you need anything.'",
        "Energetic (Puck)": "Warm and breezy: 'Awesome! We have some incredible new styles that just dropped. Have fun looking, and I'm right here if you want to test out any fits!'",
        "Authoritative (Charon)": "Guide their path: 'Welcome. Start with the central aisle for our core collection, and the promotional racks are in the rear. Let me know when you're ready to try them.'",
        "Strong (Fenrir)": "Brief greeting: 'Take your time. Check out the denim wall—it's what we're famous for. Let me know if you want to feel the materials.'",
        "Calm (Zephyr)": "Relaxed environment: 'No pressure at all. Enjoy your walk through the store. I'm here if you have any questions about the fabrics or sizes.'"
      },
      "Compare with brand X": {
        "Professional (Kore)": "Highlight material differences: 'Brand X uses synthetic polyester blends, whereas our denim is 100% long-staple cotton with 2% elastane for shape retention. It breathes better and holds its fit over time.'",
        "Energetic (Puck)": "Focus on the feeling: 'Brand X is okay, but wait until you feel our stretch tech! It's lightweight, holds everything together, and looks twice as sharp!'",
        "Authoritative (Charon)": "State facts: 'Independent tests show our fabrics have 40% higher tensile strength than Brand X. Our manufacturing is ethical and certified. The choice is clear.'",
        "Strong (Fenrir)": "Exude confidence: 'They focus on mass production; we focus on precision. Look at these rivets and double-stitched pockets. You won't find this quality in Brand X.'",
        "Calm (Zephyr)": "Balanced contrast: 'Both brands have their merits. If you prefer lightweight, everyday comfort that holds its shape through fifty washes, ours is generally preferred.'"
      },
      "default": "Always start by validating the customer's objection: 'I completely understand your point...' then redirect to value, highlight unique selling propositions (USPs), or suggest practical alternatives. Remember to maintain eye contact and positive body language.",
      INDEXED: "INDEXED",
      Strategy: "Strategy",
      Manual: "Manual",
      Scripts: "Scripts",
      Product: "Product",
      ENGLISH: "ENGLISH",
      ARABIC: "ARABIC"
    }
  },
  ar: {
    // Portal / Login View
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

    // Global Header & Nav
    appName: "ريتيل سيلز برو",
    guestBadge: "دخول الضيوف",
    adminBadge: "بوابة المسؤول",
    switchLanguage: "English",
    langCode: "en",
    logout: "خروج من البوابة",

    // Sales Coach (General)
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
    
    // Coach Personalities
    personalityEnergetic: "حماسي (باك)",
    personalityAuthoritative: "حازم (شارون)",
    personalityProfessional: "مهني (كوري)",
    personalityStrong: "قوي (فينرير)",
    personalityCalm: "هادئ (زفير)",

    // Voice Coach Specifics
    micTapToTalk: "اضغط على الميكروفون للتحدث إلى مدربك...",
    micListening: "جاري الاستماع... تحدث الآن",
    micProcessing: "جاري تحليل الإجابة...",
    speakObjection: "تحدث باعتراض العميل أو استفسر عن منتج:",

    // Text Coach Specifics
    textPlaceholder: "اكتب استفسار العميل أو اعتراضه هنا...",
    send: "إرسال",
    failSafeHeader: "أزرار الاعتراضات السريعة (مساعد الطوارئ)",
    objectionTooExpensive: "السعر مرتفع جداً",
    objectionNoSize: "المقاس غير متوفر",
    objectionJustLooking: "أنا فقط أتفرج",
    objectionCompareBrand: "مقارنة مع العلامة X",
    objectionWarranty: "هل يوجد ضمان؟",
    typingIndicator: "المدرب يكتب الآن...",

    // Visual Auditor View
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

    // Admin View
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

    // Coach dialogue simulation database (Arabic)
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
        "Professional (Kore)": "امنحهم مساحة مع إبقاء الباب مفتوحاً: 'تفضل بالتصفح بكل أريحية. أنا كوري، مدربك اليوم. لمعلوماتك فقط، لدينا خصم 20% على منصة الجينز الفاخرة اليوم. أعلمني إذا احتجت لأي شيء.'",
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
      "default": "ابدأ دائماً بتأكيد تفهمك لاعتراض العميل: 'أفهم وجهة نظرك تماماً...' ثم وجّه الاهتمام إلى القيمة المضافة، أو الميزات الفريدة للمنتج، أو اقترح بدائل عملية. تذكر الحفاظ على التواصل البصري ولغة الجسد الإيجابية.",
      INDEXED: "مفهرس",
      Strategy: "استراتيجية",
      Manual: "دليل إرشادي",
      Scripts: "سيناريوهات",
      Product: "منتجات",
      ENGLISH: "الإنجليزية",
      ARABIC: "العربية"
    }
  }
};
