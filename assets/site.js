(function () {
  var STRIPE_PUBLISHABLE_KEY = "pk_live_51ScfvWGVh9caREe4RH298i9XHnbAhiDEgJ8fTYLZHAl0TkG7Yx9P7AvhWWTCmCugh8GuLUGq2dLX2RvVnZ3gyga500weVzgiWq";

  var PRODUCT_CONFIG = [
    { id: "o1", image: "assets/interface/images/o1.png", buyButtonId: "buy_btn_1ScgbSGVh9caREe4JMPWN5fI", cardIndex: 0 },
    { id: "m1", image: "assets/interface/images/m1-clean.png", buyButtonId: "buy_btn_1StkxHGVh9caREe4Ogo8qDRv", cardIndex: 2 },
    { id: "m1pro", image: "assets/interface/images/m1pro.jpg", buyButtonId: "buy_btn_1Stn3UGVh9caREe4bpaBu69w", cardIndex: 3 },
    { id: "display", image: "assets/interface/images/display.png", buyButtonId: "buy_btn_1StlgAGVh9caREe49NkKzDRF", cardIndex: 1 }
  ];

  var SCENE_IMAGES = [
    "assets/interface/images/scene-fitness.png",
    "assets/interface/images/scene-learning.png",
    "assets/interface/images/scene-meeting.png",
    "assets/interface/images/scene-fashion.png"
  ];

  var UI_LABELS = {
    "en": { features: "Features", about: "About", preorder: "Pre-Order", legal: "Legal", cookie: "Cookie Policy" },
    "zh-Hans": { features: "功能", about: "关于", preorder: "预订", legal: "法律", cookie: "Cookie 政策" },
    "zh-Hant": { features: "功能", about: "關於", preorder: "預訂", legal: "法律", cookie: "Cookie 政策" },
    "ja": { features: "機能", about: "会社情報", preorder: "予約注文", legal: "法務", cookie: "Cookie ポリシー" },
    "ko": { features: "기능", about: "소개", preorder: "사전 주문", legal: "법률", cookie: "쿠키 정책" },
    "vi": { features: "Tính năng", about: "Giới thiệu", preorder: "Đặt trước", legal: "Pháp lý", cookie: "Chính sách Cookie" },
    "ar": { features: "الميزات", about: "حول", preorder: "اطلب مسبقاً", legal: "قانوني", cookie: "سياسة ملفات تعريف الارتباط" },
    "fr": { features: "Fonctionnalités", about: "À propos", preorder: "Précommande", legal: "Légal", cookie: "Politique relative aux cookies" },
    "es": { features: "Funciones", about: "Acerca de", preorder: "Preorden", legal: "Legal", cookie: "Política de cookies" }
  };

  var TRANSLATIONS = {
    "en": {
      metaTitle: "LightMind - Always-On AI Wearable Memory System",
      metaDescription: "LightMind combines low-power optical sensing and edge AI to turn daily experiences into searchable memory cues.",
      nav: { products: "Products", useCases: "Use Cases", technology: "Technology", proof: "Proof", contact: "Contact", buy: "Shop Now" },
      hero: {
        eyebrow: "Wearable AI Memory System",
        title: "Always-on AI wearable for memory, recall, and better decisions.",
        subtitle: "LightMind combines low-power optical sensing and edge AI to turn first-person moments into searchable memory cues.",
        ctaPrimary: "Explore Devices",
        ctaSecondary: "See the system",
        point1: "Designed for always-on memory support",
        point2: "On-device sensing plus app and cloud workflows",
        point3: "Hardware options with direct purchase flow",
        float1Title: "Glanceable cues",
        float1Copy: "Names, reminders, translation and next actions.",
        float2Title: "Structured recall",
        float2Copy: "Search what mattered instead of replaying raw timelines."
      },
      products: {
        eyebrow: "Product Lineup",
        title: "Get Your LightMind Device",
        subtitle: "Choose a LightMind wearable and keep the existing direct Stripe checkout flow.",
        promo: "Early-access batches are open while pilot inventory lasts.",
        counterLabel: "Early access spots claimed",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "Everyday Memory Wearable", price: "HK$1,998", description: "A low-power pendant or clip wearable built for all-day first-person context capture and semantic memory assistance.", badges: ["Low-power capture", "All-day comfort", "Searchable recall"] },
        { name: "LightMind Display", tagline: "Glanceable AI Companion", price: "HK$5,998", description: "A lightweight display layer that surfaces names, translation cues, reminders, and next actions in real time.", badges: ["Translation cues", "Name recall", "Live reminders"] },
        { name: "LightMind M1", tagline: "Smart Glasses for Recall", price: "HK$1,998", description: "A smart-glasses form factor powered by LightMind optical modules for always-ready capture and contextual recall.", badges: ["Smart-glasses form", "Hands-free workflows", "Contextual recall"] },
        { name: "LightMind M1 Pro", tagline: "Extended Performance", price: "HK$2,698", description: "An enhanced sensing and compute pipeline for richer memory cues, faster retrieval, and longer intensive daily usage.", badges: ["Higher-demand usage", "Faster retrieval", "Pilot-ready"] }
      ],
      useCases: { eyebrow: "Use Cases", title: "Think ahead. Remember more.", subtitle: "LightMind turns everyday context into cues for action, recall, and follow-through." },
      scenes: [
        { tab: "Fitness", title: "Fitness companion, real time", subtitle: "Track routines, surface reminders, and keep health context available while you stay in motion." },
        { tab: "Learning", title: "Smart learning co-pilot", subtitle: "Capture lectures and study sessions into cues you can recap quickly without rewinding long recordings." },
        { tab: "Meetings", title: "Effortless meeting intelligence", subtitle: "Recover names, commitments, and next steps faster across conversations, summaries, and follow-through." },
        { tab: "Lifestyle", title: "Personal context that stays useful", subtitle: "Bring translation, suggestions, and memory support into travel, daily errands, and fast-changing situations." }
      ],
      technology: {
        eyebrow: "Core Technology",
        title: "A memory system that moves with you",
        subtitle: "Low-power optical sensing, structured cues, and real-time actions work together across device, app, and cloud.",
        items: [
          { number: "01", title: "Low-power optical sensing", description: "LightMind modules encode useful context at the edge, reducing downstream compute, latency, and battery burden." },
          { number: "02", title: "Structured memory cues", description: "The system organizes semantic cues into a searchable memory graph for recap, recall, and reminders." },
          { number: "03", title: "Real-time actions", description: "Names, translation cues, reminders, and next actions surface in real time when you need them." }
        ]
      },
      proof: {
        eyebrow: "Proof and Readiness",
        title: "Built on research, prototypes, and pilot momentum",
        subtitle: "The company story, technical milestones, and commercialization path remain aligned with the existing site.",
        cards: [
          { value: "2025", label: "LightMind Tech Limited was incorporated in Hong Kong on September 19, 2025." },
          { value: "2024", label: "Core optical sensing research was published in Nature and highlighted by Nature Photonics." },
          { value: "2", label: "A principle optical module prototype and an early wearable prototype have been built and tested." },
          { value: "Pilot", label: "Current focus is controlled partner pilots, reliability refinement, and early paid deployments." }
        ]
      },
      contact: {
        eyebrow: "Contact",
        title: "Start the conversation.",
        subtitle: "Ask about devices, pilots, integration, or product questions. The form submits through the configured third-party service.",
        emailLabel: "Email",
        privacyLabel: "Privacy Policy",
        privacyValue: "View current legal notice",
        termsLabel: "Terms of Service",
        termsValue: "Kept aligned with the existing legal page",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send message",
        submitting: "Sending...",
        success: "Message sent successfully. Please watch for a confirmation email if the form service requires activation.",
        error: "We could not send the message right now. Please email lightmind@lightmind.art instead."
      },
      footer: {
        tagline: "Always-on AI memory systems for people and products.",
        products: "Products",
        technology: "Technology",
        support: "Support",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved."
      }
    },
    "zh-Hans": {
      metaTitle: "LightMind - 常开式 AI 可穿戴记忆系统",
      metaDescription: "LightMind 将低功耗光学感知与边缘 AI 结合，把日常经历转化为可搜索的记忆线索。",
      nav: { products: "产品", useCases: "使用场景", technology: "技术", proof: "进展", contact: "联系", buy: "立即选购" },
      hero: {
        eyebrow: "可穿戴 AI 记忆系统",
        title: "面向记忆、回忆与更好决策的常开式 AI 可穿戴设备。",
        subtitle: "LightMind 将低功耗光学感知与边缘 AI 结合，把第一人称时刻转化为可搜索的记忆线索。",
        ctaPrimary: "查看设备",
        ctaSecondary: "了解系统",
        point1: "为全天候记忆支持而设计",
        point2: "设备端感知，配合 App 与云端流程",
        point3: "四种硬件方案，保留现有购买链路",
        float1Title: "抬眼可见的提示",
        float1Copy: "姓名、提醒、翻译与下一步动作实时出现。",
        float2Title: "结构化回忆",
        float2Copy: "直接搜索关键片段，而不是回放冗长原始时间线。"
      },
      products: {
        eyebrow: "产品矩阵",
        title: "选择你的 LightMind 设备",
        subtitle: "选择合适的 LightMind 设备，并继续使用现有 Stripe 直接支付链路。",
        promo: "早期体验批次仍在开放，售完为止。",
        counterLabel: "已认领早期名额",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "日常记忆穿戴设备", price: "HK$1,998", description: "低功耗吊坠或夹式设备，面向全天第一人称上下文采集与语义记忆辅助。", badges: ["低功耗采集", "全天佩戴", "可搜索回忆"] },
        { name: "LightMind Display", tagline: "可一眼获取信息的 AI 伴侣", price: "HK$5,998", description: "轻量显示层，实时呈现姓名、翻译提示、提醒与下一步动作。", badges: ["翻译提示", "人物回忆", "实时提醒"] },
        { name: "LightMind M1", tagline: "面向回忆的智能眼镜", price: "HK$1,998", description: "由 LightMind 光学模块驱动的智能眼镜形态，支持随时可用的采集与上下文回忆。", badges: ["眼镜形态", "免手操作", "上下文回忆"] },
        { name: "LightMind M1 Pro", tagline: "增强性能", price: "HK$2,698", description: "增强感知与计算链路，带来更丰富的记忆线索、更快检索与更长时间的高强度使用。", badges: ["高负载场景", "更快检索", "适合试点"] }
      ],
      useCases: { eyebrow: "使用场景", title: "提前思考，记住更多。", subtitle: "LightMind 将日常上下文转化为可行动、可回忆、可跟进的线索。" },
      scenes: [
        { tab: "健身", title: "实时健身伙伴", subtitle: "在保持运动节奏的同时，记录训练上下文、提醒与健康相关信息。" },
        { tab: "学习", title: "智能学习副驾", subtitle: "把课堂与学习过程整理成可快速回顾的线索，而不是重新翻看冗长录音。 " },
        { tab: "会议", title: "更轻松的会议信息整理", subtitle: "更快找回姓名、承诺事项与下一步行动，提升会后跟进效率。" },
        { tab: "生活", title: "始终有用的个人上下文", subtitle: "将翻译、建议与记忆辅助带入出行、日常事务与快速变化的场景。" }
      ],
      technology: {
        eyebrow: "核心技术",
        title: "与你一起移动的记忆系统",
        subtitle: "低功耗光学感知、结构化线索与实时动作，在设备、App 与云端之间协同工作。",
        items: [
          { number: "01", title: "低功耗光学感知", description: "LightMind 模块在边缘侧完成有用上下文编码，降低下游计算、延迟与电池负担。" },
          { number: "02", title: "结构化记忆线索", description: "系统将语义线索组织为可搜索的记忆图谱，用于回顾、回忆与提醒。" },
          { number: "03", title: "实时动作支持", description: "当你需要时，姓名、翻译提示、提醒与下一步动作会实时出现。" }
        ]
      },
      proof: {
        eyebrow: "进展与成熟度",
        title: "以研究、原型与试点推进为基础",
        subtitle: "公司进展、技术里程碑与商业化路径与原有站点保持一致。",
        cards: [
          { value: "2025", label: "LightMind Tech Limited 于 2025 年 9 月 19 日在香港注册成立。" },
          { value: "2024", label: "核心光学感知研究发表于 Nature，并获 Nature Photonics 关注。" },
          { value: "2", label: "已完成原理型光学模块原型与早期可穿戴原型的搭建和测试。" },
          { value: "Pilot", label: "当前重点是受控合作试点、可靠性优化以及早期付费部署。" }
        ]
      },
      contact: {
        eyebrow: "联系",
        title: "开启对话。",
        subtitle: "欢迎咨询设备、试点、集成或产品问题。表单将通过配置的第三方服务提交。",
        emailLabel: "邮箱",
        privacyLabel: "隐私政策",
        privacyValue: "查看当前法律说明",
        termsLabel: "服务条款",
        termsValue: "与现有法律页面保持一致",
        name: "姓名",
        email: "邮箱",
        subject: "主题",
        message: "留言",
        submit: "发送消息",
        submitting: "发送中...",
        success: "消息已发送成功。如表单服务需要激活，请留意确认邮件。",
        error: "暂时无法发送消息，请直接邮件联系 lightmind@lightmind.art。"
      },
      footer: {
        tagline: "面向个人与产品的常开式 AI 记忆系统。",
        products: "产品",
        technology: "技术",
        support: "支持",
        privacy: "隐私政策",
        terms: "服务条款",
        rights: "保留所有权利。"
      }
    },
    "zh-Hant": {
      metaTitle: "LightMind - 常開式 AI 穿戴記憶系統",
      metaDescription: "LightMind 結合低功耗光學感知與邊緣 AI，將日常經歷轉化為可搜尋的記憶線索。",
      nav: { products: "產品", useCases: "使用場景", technology: "技術", proof: "進展", contact: "聯絡", buy: "立即選購" },
      hero: {
        eyebrow: "穿戴式 AI 記憶系統",
        title: "面向記憶、回想與更好決策的常開式 AI 穿戴設備。",
        subtitle: "LightMind 結合低功耗光學感知與邊緣 AI，將第一人稱時刻轉化為可搜尋的記憶線索。",
        ctaPrimary: "查看設備",
        ctaSecondary: "了解系統",
        point1: "為全天候記憶支援而設計",
        point2: "裝置端感知，配合 App 與雲端流程",
        point3: "四種硬體方案，保留現有購買流程",
        float1Title: "抬眼可見的提示",
        float1Copy: "姓名、提醒、翻譯與下一步動作即時出現。",
        float2Title: "結構化回想",
        float2Copy: "直接搜尋關鍵片段，而不是回放冗長原始時間線。"
      },
      products: {
        eyebrow: "產品矩陣",
        title: "選擇你的 LightMind 設備",
        subtitle: "選擇合適的 LightMind 設備，並繼續使用現有 Stripe 直接支付流程。",
        promo: "早期體驗批次仍開放中，售完即止。",
        counterLabel: "已認領早期名額",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "日常記憶穿戴設備", price: "HK$1,998", description: "低功耗吊墜或夾式設備，面向全天第一人稱情境採集與語義記憶輔助。", badges: ["低功耗採集", "全天佩戴", "可搜尋回想"] },
        { name: "LightMind Display", tagline: "一眼取得資訊的 AI 夥伴", price: "HK$5,998", description: "輕量顯示層，即時呈現姓名、翻譯提示、提醒與下一步動作。", badges: ["翻譯提示", "人物回想", "即時提醒"] },
        { name: "LightMind M1", tagline: "面向回想的智慧眼鏡", price: "HK$1,998", description: "由 LightMind 光學模組驅動的智慧眼鏡形態，支援隨時可用的採集與情境回想。", badges: ["眼鏡形態", "免手操作", "情境回想"] },
        { name: "LightMind M1 Pro", tagline: "增強性能", price: "HK$2,698", description: "增強感知與計算鏈路，帶來更豐富的記憶線索、更快檢索與更長時間的高強度使用。", badges: ["高負載場景", "更快檢索", "適合試點"] }
      ],
      useCases: { eyebrow: "使用場景", title: "提前思考，記住更多。", subtitle: "LightMind 將日常情境轉化為可行動、可回想、可跟進的線索。" },
      scenes: [
        { tab: "健身", title: "即時健身夥伴", subtitle: "在保持運動節奏的同時，保留訓練情境、提醒與健康相關資訊。" },
        { tab: "學習", title: "智慧學習副駕", subtitle: "把課堂與學習過程整理成可快速回顧的線索，而不是重新翻查冗長錄音。" },
        { tab: "會議", title: "更輕鬆的會議情報整理", subtitle: "更快找回姓名、承諾事項與下一步行動，提升會後跟進效率。" },
        { tab: "生活", title: "始終有用的個人情境", subtitle: "將翻譯、建議與記憶輔助帶入出行、日常事務與快速變化的場景。" }
      ],
      technology: {
        eyebrow: "核心技術",
        title: "與你一起移動的記憶系統",
        subtitle: "低功耗光學感知、結構化線索與即時動作，在裝置、App 與雲端之間協同工作。",
        items: [
          { number: "01", title: "低功耗光學感知", description: "LightMind 模組在邊緣端完成有用情境編碼，降低下游計算、延遲與電池負擔。" },
          { number: "02", title: "結構化記憶線索", description: "系統將語義線索組織為可搜尋的記憶圖譜，用於回顧、回想與提醒。" },
          { number: "03", title: "即時動作支援", description: "當你需要時，姓名、翻譯提示、提醒與下一步動作會即時出現。" }
        ]
      },
      proof: {
        eyebrow: "進展與成熟度",
        title: "以研究、原型與試點推進為基礎",
        subtitle: "公司進展、技術里程碑與商業化路徑與原有網站保持一致。",
        cards: [
          { value: "2025", label: "LightMind Tech Limited 於 2025 年 9 月 19 日在香港註冊成立。" },
          { value: "2024", label: "核心光學感知研究發表於 Nature，並獲 Nature Photonics 關注。" },
          { value: "2", label: "已完成原理型光學模組原型與早期穿戴原型的搭建和測試。" },
          { value: "Pilot", label: "目前重點是受控合作試點、可靠性優化與早期付費部署。" }
        ]
      },
      contact: {
        eyebrow: "聯絡",
        title: "開始對話。",
        subtitle: "歡迎詢問設備、試點、整合或產品相關問題。表單將透過設定的第三方服務送出。",
        emailLabel: "電郵",
        privacyLabel: "隱私政策",
        privacyValue: "查看目前法律說明",
        termsLabel: "服務條款",
        termsValue: "與現有法律頁面保持一致",
        name: "姓名",
        email: "電郵",
        subject: "主題",
        message: "留言",
        submit: "傳送訊息",
        submitting: "傳送中...",
        success: "訊息已成功送出。如表單服務需要啟用，請留意確認電郵。",
        error: "目前無法送出訊息，請直接電郵至 lightmind@lightmind.art。"
      },
      footer: {
        tagline: "面向個人與產品的常開式 AI 記憶系統。",
        products: "產品",
        technology: "技術",
        support: "支援",
        privacy: "隱私政策",
        terms: "服務條款",
        rights: "保留所有權利。"
      }
    },
    "ja": {
      metaTitle: "LightMind - 常時稼働 AI ウェアラブル記憶システム",
      metaDescription: "LightMind は低消費電力の光学センシングとエッジ AI を組み合わせ、日常体験を検索可能な記憶キューに変えます。",
      nav: { products: "製品", useCases: "ユースケース", technology: "技術", proof: "実績", contact: "お問い合わせ", buy: "購入する" },
      hero: {
        eyebrow: "ウェアラブル AI 記憶システム",
        title: "記憶、想起、そしてより良い意思決定のための常時稼働 AI ウェアラブル。",
        subtitle: "LightMind は低消費電力の光学センシングとエッジ AI を組み合わせ、一人称の瞬間を検索可能な記憶キューに変えます。",
        ctaPrimary: "製品を見る",
        ctaSecondary: "仕組みを見る",
        point1: "常時オンの記憶支援向けに設計",
        point2: "デバイス上のセンシングとアプリ・クラウド連携",
        point3: "4 つのハードウェア構成と既存の購入導線",
        float1Title: "視線で得るキュー",
        float1Copy: "名前、リマインダー、翻訳、次の行動をその場で表示。",
        float2Title: "構造化された想起",
        float2Copy: "長いタイムラインを見返す代わりに、必要な瞬間を検索。"
      },
      products: {
        eyebrow: "製品ラインアップ",
        title: "あなたの LightMind デバイスを選ぶ",
        subtitle: "LightMind ウェアラブルを選び、既存の Stripe 直接購入フローをそのまま利用できます。",
        promo: "パイロット在庫がある間、先行アクセス枠を公開中です。",
        counterLabel: "先行アクセス枠の申込数",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "日常向け記憶ウェアラブル", price: "HK$1,998", description: "低消費電力のペンダントまたはクリップ型デバイス。終日の一人称コンテキスト取得と意味記憶支援に対応します。", badges: ["低消費電力取得", "終日装着", "検索可能な想起"] },
        { name: "LightMind Display", tagline: "一目で使える AI コンパニオン", price: "HK$5,998", description: "名前、翻訳キュー、リマインダー、次のアクションをリアルタイムに表示する軽量ディスプレイレイヤーです。", badges: ["翻訳キュー", "名前想起", "ライブリマインダー"] },
        { name: "LightMind M1", tagline: "想起のためのスマートグラス", price: "HK$1,998", description: "LightMind の光学モジュールを搭載したスマートグラス形状で、即時の取得とコンテキスト想起を支えます。", badges: ["スマートグラス形状", "ハンズフリー", "コンテキスト想起"] },
        { name: "LightMind M1 Pro", tagline: "拡張パフォーマンス", price: "HK$2,698", description: "より豊かな記憶キュー、より速い検索、より長い高負荷利用を実現する強化版センシングと計算パイプラインです。", badges: ["高負荷シナリオ", "高速検索", "パイロット対応"] }
      ],
      useCases: { eyebrow: "ユースケース", title: "先を考え、より多くを覚える。", subtitle: "LightMind は日常のコンテキストを、行動・想起・フォローアップのためのキューに変えます。" },
      scenes: [
        { tab: "フィットネス", title: "リアルタイムのフィットネス伴走", subtitle: "動きを止めることなく、ルーティン、リマインダー、健康コンテキストを手元に保ちます。" },
        { tab: "学習", title: "学習のスマート副操縦士", subtitle: "講義や学習時間を、長い録音を巻き戻さずに見返せるキューへ整理します。" },
        { tab: "会議", title: "会議インテリジェンスをより自然に", subtitle: "名前、約束事項、次の一手をより速く呼び戻し、会話後のフォローを支えます。" },
        { tab: "日常", title: "日常で役立つ個人コンテキスト", subtitle: "翻訳、提案、記憶支援を、移動や日々の用事、変化の速い場面に持ち込みます。" }
      ],
      technology: {
        eyebrow: "コア技術",
        title: "あなたと共に動く記憶システム",
        subtitle: "低消費電力の光学センシング、構造化キュー、リアルタイムアクションがデバイス・アプリ・クラウドを横断して連携します。",
        items: [
          { number: "01", title: "低消費電力の光学センシング", description: "LightMind モジュールは有用なコンテキストをエッジで符号化し、下流の計算量、遅延、電力負荷を下げます。" },
          { number: "02", title: "構造化された記憶キュー", description: "システムは意味キューを検索可能なメモリーグラフへ整理し、振り返り、想起、リマインダーに活用します。" },
          { number: "03", title: "リアルタイムアクション", description: "必要な瞬間に、名前、翻訳キュー、リマインダー、次のアクションがその場で現れます。" }
        ]
      },
      proof: {
        eyebrow: "実績と準備状況",
        title: "研究、試作、パイロット推進に基づく進展",
        subtitle: "会社の進捗、技術マイルストーン、商用化の流れは既存サイトと整合しています。",
        cards: [
          { value: "2025", label: "LightMind Tech Limited は 2025 年 9 月 19 日に香港で設立されました。" },
          { value: "2024", label: "中核となる光学センシング研究は Nature に掲載され、Nature Photonics でも紹介されました。" },
          { value: "2", label: "原理実証用の光学モジュール試作機と初期ウェアラブル試作機を構築・検証しました。" },
          { value: "Pilot", label: "現在は限定パートナーパイロット、信頼性改善、初期有償導入に注力しています。" }
        ]
      },
      contact: {
        eyebrow: "お問い合わせ",
        title: "会話を始めましょう。",
        subtitle: "デバイス、パイロット、統合、製品に関するご相談を歓迎します。フォームは設定済みの外部サービス経由で送信されます。",
        emailLabel: "メール",
        privacyLabel: "プライバシーポリシー",
        privacyValue: "現在の法的通知を見る",
        termsLabel: "利用規約",
        termsValue: "既存の法的ページと整合",
        name: "お名前",
        email: "メールアドレス",
        subject: "件名",
        message: "メッセージ",
        submit: "送信する",
        submitting: "送信中...",
        success: "送信が完了しました。フォームサービスで有効化が必要な場合は確認メールをご確認ください。",
        error: "現在メッセージを送信できません。lightmind@lightmind.art まで直接メールしてください。"
      },
      footer: {
        tagline: "人と製品のための常時稼働 AI 記憶システム。",
        products: "製品",
        technology: "技術",
        support: "サポート",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        rights: "All rights reserved."
      }
    },
    "ko": {
      metaTitle: "LightMind - 상시 구동 AI 웨어러블 메모리 시스템",
      metaDescription: "LightMind는 저전력 광학 센싱과 엣지 AI를 결합해 일상 경험을 검색 가능한 기억 단서로 바꿉니다.",
      nav: { products: "제품", useCases: "활용 장면", technology: "기술", proof: "진행 상황", contact: "문의", buy: "지금 구매" },
      hero: {
        eyebrow: "웨어러블 AI 메모리 시스템",
        title: "기억, 회상, 더 나은 결정을 위한 상시 구동 AI 웨어러블.",
        subtitle: "LightMind는 저전력 광학 센싱과 엣지 AI를 결합해 1인칭 순간을 검색 가능한 기억 단서로 바꿉니다.",
        ctaPrimary: "기기 보기",
        ctaSecondary: "시스템 보기",
        point1: "상시 메모리 지원을 위해 설계",
        point2: "온디바이스 센싱과 앱·클라우드 워크플로",
        point3: "4가지 하드웨어 옵션과 기존 구매 흐름",
        float1Title: "한눈에 보는 단서",
        float1Copy: "이름, 알림, 번역, 다음 행동을 바로 표시합니다.",
        float2Title: "구조화된 회상",
        float2Copy: "긴 타임라인을 되감지 않고 필요한 순간을 검색합니다."
      },
      products: {
        eyebrow: "제품 라인업",
        title: "나에게 맞는 LightMind 기기 선택",
        subtitle: "LightMind 웨어러블을 고르고 기존 Stripe 직접 결제 흐름을 그대로 이용하세요.",
        promo: "파일럿 재고가 남아 있는 동안 얼리 액세스 배치를 운영합니다.",
        counterLabel: "얼리 액세스 신청 수",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "일상용 메모리 웨어러블", price: "HK$1,998", description: "하루 종일 1인칭 컨텍스트를 수집하고 의미 기반 메모리 지원을 제공하는 저전력 펜던트 또는 클립형 기기입니다.", badges: ["저전력 수집", "하루 종일 착용", "검색 가능한 회상"] },
        { name: "LightMind Display", tagline: "한눈에 보는 AI 동반자", price: "HK$5,998", description: "이름, 번역 힌트, 알림, 다음 행동을 실시간으로 보여주는 경량 디스플레이 레이어입니다.", badges: ["번역 힌트", "이름 회상", "실시간 알림"] },
        { name: "LightMind M1", tagline: "회상을 위한 스마트 글라스", price: "HK$1,998", description: "LightMind 광학 모듈을 탑재한 스마트 글라스 형태로, 즉시 사용 가능한 캡처와 맥락 회상을 지원합니다.", badges: ["스마트 글라스", "핸즈프리", "맥락 회상"] },
        { name: "LightMind M1 Pro", tagline: "확장 성능", price: "HK$2,698", description: "더 풍부한 기억 단서, 더 빠른 검색, 더 긴 고부하 사용을 위한 향상된 센싱 및 컴퓨트 파이프라인입니다.", badges: ["고부하 시나리오", "빠른 검색", "파일럿 대응"] }
      ],
      useCases: { eyebrow: "활용 장면", title: "앞서 생각하고 더 많이 기억하세요.", subtitle: "LightMind는 일상 컨텍스트를 행동, 회상, 후속 조치를 위한 단서로 바꿉니다." },
      scenes: [
        { tab: "피트니스", title: "실시간 피트니스 동반자", subtitle: "움직임을 유지하면서 루틴, 리마인더, 건강 맥락을 함께 가져갑니다." },
        { tab: "학습", title: "스마트 학습 코파일럿", subtitle: "강의와 학습 시간을 긴 녹음을 다시 돌리지 않고 빠르게 복기할 수 있는 단서로 정리합니다." },
        { tab: "회의", title: "더 자연스러운 회의 인텔리전스", subtitle: "이름, 약속, 다음 단계를 더 빠르게 되살려 회의 후 후속 조치를 돕습니다." },
        { tab: "일상", title: "일상에서 계속 쓰이는 개인 컨텍스트", subtitle: "번역, 제안, 메모리 지원을 이동, 일상 업무, 빠르게 바뀌는 상황 속으로 가져옵니다." }
      ],
      technology: {
        eyebrow: "핵심 기술",
        title: "당신과 함께 움직이는 메모리 시스템",
        subtitle: "저전력 광학 센싱, 구조화된 단서, 실시간 액션이 디바이스, 앱, 클라우드 전반에서 함께 작동합니다.",
        items: [
          { number: "01", title: "저전력 광학 센싱", description: "LightMind 모듈은 유용한 컨텍스트를 엣지에서 인코딩하여 다운스트림 연산, 지연, 배터리 부담을 줄입니다." },
          { number: "02", title: "구조화된 메모리 단서", description: "시스템은 의미 단서를 검색 가능한 메모리 그래프로 구성해 복기, 회상, 리마인더에 활용합니다." },
          { number: "03", title: "실시간 액션", description: "필요한 순간에 이름, 번역 힌트, 리마인더, 다음 행동이 실시간으로 나타납니다." }
        ]
      },
      proof: {
        eyebrow: "진행 상황과 준비도",
        title: "연구, 프로토타입, 파일럿 모멘텀 위에 구축",
        subtitle: "회사 스토리, 기술 마일스톤, 사업화 경로는 기존 사이트와 동일한 맥락을 유지합니다.",
        cards: [
          { value: "2025", label: "LightMind Tech Limited는 2025년 9월 19일 홍콩에서 설립되었습니다." },
          { value: "2024", label: "핵심 광학 센싱 연구는 Nature에 게재되었고 Nature Photonics에서도 소개되었습니다." },
          { value: "2", label: "원리 광학 모듈 프로토타입과 초기 웨어러블 프로토타입을 구축하고 검증했습니다." },
          { value: "Pilot", label: "현재는 제한된 파트너 파일럿, 신뢰성 개선, 초기 유료 배포에 집중하고 있습니다." }
        ]
      },
      contact: {
        eyebrow: "문의",
        title: "대화를 시작하세요.",
        subtitle: "기기, 파일럿, 통합, 제품 관련 문의를 남겨 주세요. 폼은 구성된 외부 서비스로 제출됩니다.",
        emailLabel: "이메일",
        privacyLabel: "개인정보 처리방침",
        privacyValue: "현재 법률 안내 보기",
        termsLabel: "이용약관",
        termsValue: "기존 법률 페이지와 동일하게 유지",
        name: "이름",
        email: "이메일",
        subject: "제목",
        message: "메시지",
        submit: "메시지 보내기",
        submitting: "전송 중...",
        success: "메시지가 전송되었습니다. 폼 서비스 활성화가 필요한 경우 확인 이메일을 확인해 주세요.",
        error: "지금은 메시지를 전송할 수 없습니다. lightmind@lightmind.art 로 직접 이메일을 보내 주세요."
      },
      footer: {
        tagline: "사람과 제품을 위한 상시 구동 AI 메모리 시스템.",
        products: "제품",
        technology: "기술",
        support: "지원",
        privacy: "개인정보 처리방침",
        terms: "이용약관",
        rights: "All rights reserved."
      }
    },
    "vi": {
      metaTitle: "LightMind - Hệ thống ghi nhớ AI đeo được luôn bật",
      metaDescription: "LightMind kết hợp cảm biến quang học công suất thấp và AI biên để biến trải nghiệm hằng ngày thành các gợi ý trí nhớ có thể tìm kiếm.",
      nav: { products: "Sản phẩm", useCases: "Tình huống", technology: "Công nghệ", proof: "Tiến triển", contact: "Liên hệ", buy: "Mua ngay" },
      hero: {
        eyebrow: "Hệ thống ghi nhớ AI đeo được",
        title: "Thiết bị đeo AI luôn bật cho ghi nhớ, hồi tưởng và quyết định tốt hơn.",
        subtitle: "LightMind kết hợp cảm biến quang học công suất thấp và AI biên để biến các khoảnh khắc góc nhìn thứ nhất thành gợi ý trí nhớ có thể tìm kiếm.",
        ctaPrimary: "Xem thiết bị",
        ctaSecondary: "Xem hệ thống",
        point1: "Thiết kế cho hỗ trợ trí nhớ luôn bật",
        point2: "Cảm biến trên thiết bị cùng quy trình app và cloud",
        point3: "4 lựa chọn phần cứng với luồng mua hiện có",
        float1Title: "Gợi ý nhìn là thấy",
        float1Copy: "Tên, nhắc việc, dịch thuật và bước tiếp theo xuất hiện đúng lúc.",
        float2Title: "Hồi tưởng có cấu trúc",
        float2Copy: "Tìm đúng khoảnh khắc quan trọng thay vì tua lại các timeline dài."
      },
      products: {
        eyebrow: "Danh mục sản phẩm",
        title: "Chọn thiết bị LightMind của bạn",
        subtitle: "Chọn một thiết bị đeo LightMind và tiếp tục dùng luồng thanh toán Stripe trực tiếp hiện có.",
        promo: "Các lô truy cập sớm vẫn đang mở trong khi còn hàng pilot.",
        counterLabel: "Suất truy cập sớm đã được nhận",
        counterMax: "/ 1.000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "Thiết bị đeo trí nhớ hằng ngày", price: "HK$1,998", description: "Thiết bị đeo dạng dây hoặc kẹp công suất thấp cho ghi nhận bối cảnh góc nhìn thứ nhất cả ngày và hỗ trợ trí nhớ ngữ nghĩa.", badges: ["Ghi nhận công suất thấp", "Đeo cả ngày", "Hồi tưởng có thể tìm kiếm"] },
        { name: "LightMind Display", tagline: "Bạn đồng hành AI xem nhanh", price: "HK$5,998", description: "Lớp hiển thị nhẹ giúp đưa tên, gợi ý dịch, lời nhắc và hành động tiếp theo lên theo thời gian thực.", badges: ["Gợi ý dịch", "Nhớ tên", "Nhắc việc thời gian thực"] },
        { name: "LightMind M1", tagline: "Kính thông minh cho hồi tưởng", price: "HK$1,998", description: "Dạng kính thông minh dùng các mô-đun quang học LightMind để luôn sẵn sàng ghi nhận và hỗ trợ hồi tưởng theo bối cảnh.", badges: ["Dạng kính thông minh", "Rảnh tay", "Hồi tưởng theo bối cảnh"] },
        { name: "LightMind M1 Pro", tagline: "Hiệu năng mở rộng", price: "HK$2,698", description: "Chuỗi cảm biến và tính toán nâng cao cho gợi ý trí nhớ phong phú hơn, truy xuất nhanh hơn và thời gian sử dụng cường độ cao dài hơn.", badges: ["Tình huống cường độ cao", "Truy xuất nhanh hơn", "Sẵn sàng cho pilot"] }
      ],
      useCases: { eyebrow: "Tình huống", title: "Suy nghĩ trước. Nhớ được nhiều hơn.", subtitle: "LightMind biến bối cảnh hằng ngày thành gợi ý cho hành động, hồi tưởng và theo sát công việc." },
      scenes: [
        { tab: "Thể thao", title: "Bạn đồng hành thể thao theo thời gian thực", subtitle: "Theo dõi thói quen, hiện lời nhắc và giữ bối cảnh sức khỏe trong khi bạn vẫn tiếp tục vận động." },
        { tab: "Học tập", title: "Phi công phụ học tập thông minh", subtitle: "Biến bài giảng và buổi học thành các gợi ý có thể ôn lại nhanh mà không cần tua lại bản ghi dài." },
        { tab: "Họp hành", title: "Thông tin cuộc họp gọn gàng hơn", subtitle: "Lấy lại tên, cam kết và bước tiếp theo nhanh hơn qua hội thoại, tóm tắt và theo dõi công việc." },
        { tab: "Hằng ngày", title: "Bối cảnh cá nhân luôn hữu ích", subtitle: "Đưa dịch thuật, gợi ý và hỗ trợ trí nhớ vào di chuyển, việc vặt hằng ngày và các tình huống thay đổi nhanh." }
      ],
      technology: {
        eyebrow: "Công nghệ cốt lõi",
        title: "Một hệ thống trí nhớ di chuyển cùng bạn",
        subtitle: "Cảm biến quang học công suất thấp, gợi ý có cấu trúc và hành động thời gian thực phối hợp qua thiết bị, app và cloud.",
        items: [
          { number: "01", title: "Cảm biến quang học công suất thấp", description: "Các mô-đun LightMind mã hóa bối cảnh hữu ích tại edge, giảm tính toán phía sau, độ trễ và gánh nặng pin." },
          { number: "02", title: "Gợi ý trí nhớ có cấu trúc", description: "Hệ thống sắp xếp các gợi ý ngữ nghĩa thành một memory graph có thể tìm kiếm để phục vụ ôn lại, hồi tưởng và nhắc việc." },
          { number: "03", title: "Hành động thời gian thực", description: "Tên, gợi ý dịch, lời nhắc và bước tiếp theo xuất hiện đúng lúc khi bạn cần." }
        ]
      },
      proof: {
        eyebrow: "Bằng chứng và mức sẵn sàng",
        title: "Xây trên nghiên cứu, nguyên mẫu và đà pilot",
        subtitle: "Câu chuyện công ty, các mốc kỹ thuật và lộ trình thương mại hóa vẫn thống nhất với website hiện có.",
        cards: [
          { value: "2025", label: "LightMind Tech Limited được thành lập tại Hong Kong vào ngày 19 tháng 9 năm 2025." },
          { value: "2024", label: "Nghiên cứu cảm biến quang học cốt lõi được công bố trên Nature và được Nature Photonics nhắc đến." },
          { value: "2", label: "Đã xây dựng và thử nghiệm một nguyên mẫu mô-đun quang học nguyên lý và một nguyên mẫu thiết bị đeo ban đầu." },
          { value: "Pilot", label: "Trọng tâm hiện tại là pilot đối tác có kiểm soát, tinh chỉnh độ tin cậy và triển khai trả phí giai đoạn sớm." }
        ]
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Bắt đầu cuộc trao đổi.",
        subtitle: "Hỏi về thiết bị, pilot, tích hợp hoặc sản phẩm. Biểu mẫu sẽ gửi qua dịch vụ bên thứ ba đã cấu hình.",
        emailLabel: "Email",
        privacyLabel: "Chính sách quyền riêng tư",
        privacyValue: "Xem thông báo pháp lý hiện tại",
        termsLabel: "Điều khoản dịch vụ",
        termsValue: "Giữ đồng nhất với trang pháp lý hiện có",
        name: "Tên",
        email: "Email",
        subject: "Chủ đề",
        message: "Tin nhắn",
        submit: "Gửi tin nhắn",
        submitting: "Đang gửi...",
        success: "Tin nhắn đã được gửi. Hãy chú ý email xác nhận nếu dịch vụ biểu mẫu yêu cầu kích hoạt.",
        error: "Chúng tôi chưa thể gửi tin nhắn lúc này. Vui lòng email trực tiếp tới lightmind@lightmind.art."
      },
      footer: {
        tagline: "Hệ thống ghi nhớ AI luôn bật cho con người và sản phẩm.",
        products: "Sản phẩm",
        technology: "Công nghệ",
        support: "Hỗ trợ",
        privacy: "Chính sách quyền riêng tư",
        terms: "Điều khoản dịch vụ",
        rights: "All rights reserved."
      }
    },
    "ar": {
      metaTitle: "LightMind - نظام ذاكرة ذكي قابل للارتداء يعمل دائماً",
      metaDescription: "يجمع LightMind بين الاستشعار البصري منخفض الطاقة والذكاء الاصطناعي الطرفي لتحويل التجارب اليومية إلى إشارات ذاكرة قابلة للبحث.",
      nav: { products: "المنتجات", useCases: "حالات الاستخدام", technology: "التقنية", proof: "التقدم", contact: "تواصل", buy: "اشتر الآن" },
      hero: {
        eyebrow: "نظام ذاكرة ذكي قابل للارتداء",
        title: "جهاز ذكاء اصطناعي قابل للارتداء يعمل دائماً من أجل التذكر والاسترجاع واتخاذ قرارات أفضل.",
        subtitle: "يجمع LightMind بين الاستشعار البصري منخفض الطاقة والذكاء الاصطناعي الطرفي لتحويل لحظاتك من منظور الشخص الأول إلى إشارات ذاكرة قابلة للبحث.",
        ctaPrimary: "استكشاف الأجهزة",
        ctaSecondary: "اكتشف النظام",
        point1: "مصمم لدعم الذاكرة طوال الوقت",
        point2: "استشعار على الجهاز مع مسارات عمل في التطبيق والسحابة",
        point3: "أربعة خيارات عتادية مع مسار الشراء الحالي",
        float1Title: "إشارات سريعة",
        float1Copy: "الأسماء والتذكيرات والترجمة والخطوات التالية تظهر في اللحظة المناسبة.",
        float2Title: "استرجاع منظم",
        float2Copy: "ابحث عما يهم بدلاً من إعادة مشاهدة خطوط زمنية طويلة."
      },
      products: {
        eyebrow: "مجموعة المنتجات",
        title: "اختر جهاز LightMind المناسب لك",
        subtitle: "اختر جهاز LightMind القابل للارتداء مع الحفاظ على تدفق الدفع المباشر الحالي عبر Stripe.",
        promo: "دفعات الوصول المبكر متاحة ما دام مخزون التجارب الأولية قائماً.",
        counterLabel: "عدد الأماكن المبكرة المحجوزة",
        counterMax: "/ 1,000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "جهاز ذاكرة يومي قابل للارتداء", price: "HK$1,998", description: "جهاز منخفض الطاقة على شكل قلادة أو مشبك لالتقاط السياق من منظور الشخص الأول طوال اليوم ودعم الذاكرة الدلالية.", badges: ["التقاط منخفض الطاقة", "راحة طوال اليوم", "استرجاع قابل للبحث"] },
        { name: "LightMind Display", tagline: "رفيق ذكاء اصطناعي سريع النظرة", price: "HK$5,998", description: "طبقة عرض خفيفة تُظهر الأسماء وإشارات الترجمة والتذكيرات والخطوات التالية في الوقت الحقيقي.", badges: ["إشارات ترجمة", "تذكر الأسماء", "تذكيرات مباشرة"] },
        { name: "LightMind M1", tagline: "نظارات ذكية للاسترجاع", price: "HK$1,998", description: "هيئة نظارات ذكية مدعومة بوحدات LightMind البصرية لالتقاط جاهز دائماً واسترجاع سياقي.", badges: ["هيئة نظارات ذكية", "عمل بدون استخدام اليدين", "استرجاع سياقي"] },
        { name: "LightMind M1 Pro", tagline: "أداء موسع", price: "HK$2,698", description: "مسار استشعار وحوسبة معزز لإشارات ذاكرة أغنى واسترجاع أسرع واستخدام مكثف لفترات أطول.", badges: ["سيناريوهات مكثفة", "استرجاع أسرع", "جاهز للتجارب"] }
      ],
      useCases: { eyebrow: "حالات الاستخدام", title: "فكر مسبقاً. وتذكر أكثر.", subtitle: "يحّول LightMind السياق اليومي إلى إشارات للفعل والاسترجاع والمتابعة." },
      scenes: [
        { tab: "الرياضة", title: "رفيق لياقة في الوقت الحقيقي", subtitle: "تابع الروتين والتذكيرات والسياق الصحي بينما تبقى في حالة حركة." },
        { tab: "التعلم", title: "مساعد تعلم ذكي", subtitle: "حوّل المحاضرات وجلسات الدراسة إلى إشارات يمكن مراجعتها بسرعة دون الرجوع إلى تسجيلات طويلة." },
        { tab: "الاجتماعات", title: "ذكاء اجتماعات أكثر سلاسة", subtitle: "استعد الأسماء والالتزامات والخطوات التالية بسرعة أكبر عبر المحادثات والملخصات والمتابعة." },
        { tab: "اليوميات", title: "سياق شخصي يبقى مفيداً", subtitle: "اجلب الترجمة والاقتراحات ودعم الذاكرة إلى السفر والمهام اليومية والمواقف السريعة التغير." }
      ],
      technology: {
        eyebrow: "التقنية الأساسية",
        title: "نظام ذاكرة يتحرك معك",
        subtitle: "الاستشعار البصري منخفض الطاقة والإشارات المنظمة والإجراءات الفورية تعمل معاً عبر الجهاز والتطبيق والسحابة.",
        items: [
          { number: "01", title: "استشعار بصري منخفض الطاقة", description: "تقوم وحدات LightMind بترميز السياق المفيد على الحافة لتقليل الحوسبة اللاحقة وزمن الاستجابة واستهلاك البطارية." },
          { number: "02", title: "إشارات ذاكرة منظمة", description: "ينظم النظام الإشارات الدلالية في مخطط ذاكرة قابل للبحث من أجل المراجعة والاسترجاع والتذكير." },
          { number: "03", title: "إجراءات في الوقت الحقيقي", description: "تظهر الأسماء وإشارات الترجمة والتذكيرات والخطوات التالية في اللحظة التي تحتاجها." }
        ]
      },
      proof: {
        eyebrow: "الإثبات والجاهزية",
        title: "مبني على البحث والنماذج الأولية وزخم التجارب",
        subtitle: "تبقى قصة الشركة والمعالم التقنية ومسار التفعيل التجاري متسقة مع الموقع الحالي.",
        cards: [
          { value: "2025", label: "تم تأسيس LightMind Tech Limited في هونغ كونغ بتاريخ 19 سبتمبر 2025." },
          { value: "2024", label: "نُشر البحث الأساسي في الاستشعار البصري في Nature وتم تسليط الضوء عليه من Nature Photonics." },
          { value: "2", label: "تم بناء واختبار نموذج أولي لموديول بصري قائم على المبدأ ونموذج أولي مبكر لجهاز قابل للارتداء." },
          { value: "Pilot", label: "يركز العمل حالياً على تجارب شركاء مضبوطة وتحسين الاعتمادية وعمليات نشر مدفوعة مبكرة." }
        ]
      },
      contact: {
        eyebrow: "تواصل",
        title: "ابدأ المحادثة.",
        subtitle: "اسأل عن الأجهزة أو التجارب أو التكامل أو أسئلة المنتج. يتم إرسال النموذج عبر الخدمة الخارجية المُعدّة.",
        emailLabel: "البريد الإلكتروني",
        privacyLabel: "سياسة الخصوصية",
        privacyValue: "عرض الإشعار القانوني الحالي",
        termsLabel: "شروط الخدمة",
        termsValue: "متوافقة مع الصفحة القانونية الحالية",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        submitting: "جارٍ الإرسال...",
        success: "تم إرسال الرسالة بنجاح. يرجى متابعة رسالة التأكيد إذا كانت خدمة النموذج تتطلب التفعيل.",
        error: "تعذر إرسال الرسالة الآن. يرجى المراسلة مباشرة على lightmind@lightmind.art."
      },
      footer: {
        tagline: "أنظمة ذاكرة ذكية تعمل دائماً للأفراد والمنتجات.",
        products: "المنتجات",
        technology: "التقنية",
        support: "الدعم",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        rights: "جميع الحقوق محفوظة."
      }
    },
    "fr": {
      metaTitle: "LightMind - Système mémoire IA toujours actif",
      metaDescription: "LightMind combine détection optique basse consommation et IA en périphérie pour transformer les expériences quotidiennes en repères mémoire consultables.",
      nav: { products: "Produits", useCases: "Usages", technology: "Technologie", proof: "Preuves", contact: "Contact", buy: "Acheter" },
      hero: {
        eyebrow: "Système mémoire IA portable",
        title: "Un wearable IA toujours actif pour mémoriser, retrouver et mieux décider.",
        subtitle: "LightMind combine détection optique basse consommation et IA en périphérie pour transformer les moments en première personne en repères mémoire consultables.",
        ctaPrimary: "Voir les appareils",
        ctaSecondary: "Voir le système",
        point1: "Conçu pour un soutien mémoire en continu",
        point2: "Détection sur l'appareil avec workflows app et cloud",
        point3: "Quatre options matérielles avec achat direct conservé",
        float1Title: "Repères visibles d'un coup d'oeil",
        float1Copy: "Noms, rappels, traduction et prochaine action au bon moment.",
        float2Title: "Rappel structuré",
        float2Copy: "Retrouvez l'essentiel sans rejouer de longues timelines brutes."
      },
      products: {
        eyebrow: "Gamme produits",
        title: "Choisissez votre appareil LightMind",
        subtitle: "Sélectionnez un wearable LightMind tout en conservant le flux de paiement direct Stripe existant.",
        promo: "Les lots d'accès anticipé restent ouverts tant que le stock pilote est disponible.",
        counterLabel: "Places d'accès anticipé réservées",
        counterMax: "/ 1 000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "Wearable mémoire du quotidien", price: "HK$1,998", description: "Un pendentif ou clip basse consommation pour capturer le contexte en première personne toute la journée et soutenir la mémoire sémantique.", badges: ["Capture basse consommation", "Confort toute la journée", "Rappel consultable"] },
        { name: "LightMind Display", tagline: "Compagnon IA en un regard", price: "HK$5,998", description: "Une couche d'affichage légère qui fait remonter noms, indices de traduction, rappels et prochaines actions en temps réel.", badges: ["Indices de traduction", "Rappel des noms", "Rappels en direct"] },
        { name: "LightMind M1", tagline: "Lunettes connectées pour le rappel", price: "HK$1,998", description: "Un format lunettes intelligentes alimenté par les modules optiques LightMind pour une capture prête à l'emploi et un rappel contextuel.", badges: ["Format lunettes", "Mains libres", "Rappel contextuel"] },
        { name: "LightMind M1 Pro", tagline: "Performance étendue", price: "HK$2,698", description: "Une chaîne de détection et de calcul renforcée pour des repères mémoire plus riches, une récupération plus rapide et un usage intensif plus long.", badges: ["Scénarios intensifs", "Récupération plus rapide", "Prêt pour les pilotes"] }
      ],
      useCases: { eyebrow: "Usages", title: "Anticipez. Retenez davantage.", subtitle: "LightMind transforme le contexte quotidien en repères pour agir, se souvenir et assurer le suivi." },
      scenes: [
        { tab: "Sport", title: "Compagnon fitness en temps réel", subtitle: "Gardez routines, rappels et contexte santé à portée sans interrompre vos mouvements." },
        { tab: "Apprentissage", title: "Copilote d'apprentissage intelligent", subtitle: "Transformez cours et sessions d'étude en repères faciles à relire sans revenir sur de longs enregistrements." },
        { tab: "Réunions", title: "Une intelligence de réunion plus fluide", subtitle: "Retrouvez plus vite noms, engagements et prochaines étapes dans les conversations et les suivis." },
        { tab: "Quotidien", title: "Un contexte personnel vraiment utile", subtitle: "Apportez traduction, suggestions et soutien mémoire dans les déplacements et les situations qui changent vite." }
      ],
      technology: {
        eyebrow: "Technologie clé",
        title: "Un système mémoire qui vous accompagne",
        subtitle: "Détection optique basse consommation, repères structurés et actions en temps réel fonctionnent ensemble entre appareil, app et cloud.",
        items: [
          { number: "01", title: "Détection optique basse consommation", description: "Les modules LightMind encodent le contexte utile en périphérie pour réduire calcul, latence et charge batterie en aval." },
          { number: "02", title: "Repères mémoire structurés", description: "Le système organise les repères sémantiques en graphe mémoire consultable pour le récapitulatif, le rappel et les rappels." },
          { number: "03", title: "Actions en temps réel", description: "Noms, indices de traduction, rappels et prochaines actions apparaissent au moment utile." }
        ]
      },
      proof: {
        eyebrow: "Preuves et maturité",
        title: "Fondé sur la recherche, les prototypes et l'élan pilote",
        subtitle: "L'histoire de l'entreprise, les étapes techniques et la trajectoire commerciale restent alignées avec le site existant.",
        cards: [
          { value: "2025", label: "LightMind Tech Limited a été incorporée à Hong Kong le 19 septembre 2025." },
          { value: "2024", label: "La recherche centrale en détection optique a été publiée dans Nature et mise en avant par Nature Photonics." },
          { value: "2", label: "Un prototype de module optique de principe et un premier prototype wearable ont été construits et testés." },
          { value: "Pilot", label: "L'accent actuel porte sur des pilotes partenaires contrôlés, l'amélioration de la fiabilité et les premiers déploiements payants." }
        ]
      },
      contact: {
        eyebrow: "Contact",
        title: "Lançons la conversation.",
        subtitle: "Posez vos questions sur les appareils, les pilotes, l'intégration ou le produit. Le formulaire passe par le service tiers configuré.",
        emailLabel: "Email",
        privacyLabel: "Politique de confidentialité",
        privacyValue: "Voir l'avis juridique actuel",
        termsLabel: "Conditions d'utilisation",
        termsValue: "Alignées sur la page juridique existante",
        name: "Nom",
        email: "Email",
        subject: "Objet",
        message: "Message",
        submit: "Envoyer le message",
        submitting: "Envoi...",
        success: "Message envoyé avec succès. Vérifiez votre email de confirmation si le service de formulaire demande une activation.",
        error: "Impossible d'envoyer le message pour le moment. Veuillez écrire directement à lightmind@lightmind.art."
      },
      footer: {
        tagline: "Des systèmes mémoire IA toujours actifs pour les personnes et les produits.",
        products: "Produits",
        technology: "Technologie",
        support: "Support",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        rights: "Tous droits réservés."
      }
    },
    "es": {
      metaTitle: "LightMind - Sistema de memoria IA siempre activo",
      metaDescription: "LightMind combina detección óptica de bajo consumo e IA en el borde para convertir experiencias diarias en pistas de memoria buscables.",
      nav: { products: "Productos", useCases: "Casos de uso", technology: "Tecnología", proof: "Pruebas", contact: "Contacto", buy: "Comprar" },
      hero: {
        eyebrow: "Sistema de memoria IA wearable",
        title: "Un wearable de IA siempre activo para recordar, recuperar y decidir mejor.",
        subtitle: "LightMind combina detección óptica de bajo consumo e IA en el borde para convertir momentos en primera persona en pistas de memoria buscables.",
        ctaPrimary: "Ver dispositivos",
        ctaSecondary: "Ver el sistema",
        point1: "Diseñado para apoyo de memoria siempre activo",
        point2: "Detección en el dispositivo con flujos en app y nube",
        point3: "Cuatro opciones de hardware con compra directa vigente",
        float1Title: "Pistas de un vistazo",
        float1Copy: "Nombres, recordatorios, traducción y próximos pasos cuando los necesitas.",
        float2Title: "Recuperación estructurada",
        float2Copy: "Encuentra lo importante sin repasar líneas de tiempo largas y ruidosas."
      },
      products: {
        eyebrow: "Línea de productos",
        title: "Elige tu dispositivo LightMind",
        subtitle: "Selecciona un wearable LightMind y conserva el flujo de pago directo por Stripe que ya existe.",
        promo: "Los lotes de acceso anticipado siguen abiertos mientras dure el inventario piloto.",
        counterLabel: "Cupos de acceso anticipado reservados",
        counterMax: "/ 1.000"
      },
      productCards: [
        { name: "LightMind O1", tagline: "Wearable de memoria diario", price: "HK$1,998", description: "Un colgante o clip de bajo consumo diseñado para capturar contexto en primera persona durante todo el día y apoyar la memoria semántica.", badges: ["Captura de bajo consumo", "Comodidad todo el día", "Recuerdo buscable"] },
        { name: "LightMind Display", tagline: "Compañero IA de mirada rápida", price: "HK$5,998", description: "Una capa de visualización ligera que muestra nombres, pistas de traducción, recordatorios y próximos pasos en tiempo real.", badges: ["Pistas de traducción", "Recuerdo de nombres", "Recordatorios en vivo"] },
        { name: "LightMind M1", tagline: "Gafas inteligentes para recordar", price: "HK$1,998", description: "Un formato de gafas inteligentes impulsado por módulos ópticos de LightMind para captura siempre lista y recuerdo contextual.", badges: ["Formato de gafas", "Manos libres", "Recuerdo contextual"] },
        { name: "LightMind M1 Pro", tagline: "Rendimiento ampliado", price: "HK$2,698", description: "Una cadena mejorada de detección y cómputo para pistas de memoria más ricas, recuperación más rápida y uso intensivo durante más tiempo.", badges: ["Escenarios exigentes", "Recuperación más rápida", "Listo para pilotos"] }
      ],
      useCases: { eyebrow: "Casos de uso", title: "Piensa antes. Recuerda más.", subtitle: "LightMind convierte el contexto diario en pistas para actuar, recordar y dar seguimiento." },
      scenes: [
        { tab: "Fitness", title: "Compañero fitness en tiempo real", subtitle: "Mantén rutinas, recordatorios y contexto de salud disponibles mientras sigues en movimiento." },
        { tab: "Aprendizaje", title: "Copiloto de aprendizaje inteligente", subtitle: "Convierte clases y sesiones de estudio en pistas fáciles de repasar sin rebobinar grabaciones largas." },
        { tab: "Reuniones", title: "Inteligencia de reuniones sin fricción", subtitle: "Recupera nombres, compromisos y próximos pasos más rápido entre conversaciones, resúmenes y seguimiento." },
        { tab: "Vida diaria", title: "Contexto personal que sigue siendo útil", subtitle: "Lleva traducción, sugerencias y apoyo de memoria a viajes, recados y situaciones que cambian rápido." }
      ],
      technology: {
        eyebrow: "Tecnología central",
        title: "Un sistema de memoria que se mueve contigo",
        subtitle: "Detección óptica de bajo consumo, pistas estructuradas y acciones en tiempo real trabajan juntas entre dispositivo, app y nube.",
        items: [
          { number: "01", title: "Detección óptica de bajo consumo", description: "Los módulos LightMind codifican contexto útil en el borde para reducir cómputo posterior, latencia y carga de batería." },
          { number: "02", title: "Pistas de memoria estructuradas", description: "El sistema organiza pistas semánticas en un grafo de memoria buscable para recapitulación, recuerdo y recordatorios." },
          { number: "03", title: "Acciones en tiempo real", description: "Nombres, pistas de traducción, recordatorios y próximos pasos aparecen cuando hacen falta." }
        ]
      },
      proof: {
        eyebrow: "Pruebas y preparación",
        title: "Basado en investigación, prototipos e impulso piloto",
        subtitle: "La historia de la empresa, los hitos técnicos y la trayectoria comercial siguen alineados con el sitio existente.",
        cards: [
          { value: "2025", label: "LightMind Tech Limited se incorporó en Hong Kong el 19 de septiembre de 2025." },
          { value: "2024", label: "La investigación central de detección óptica se publicó en Nature y fue destacada por Nature Photonics." },
          { value: "2", label: "Se construyeron y probaron un prototipo de módulo óptico de principio y un prototipo wearable inicial." },
          { value: "Pilot", label: "El foco actual está en pilotos controlados con socios, refinamiento de fiabilidad y primeras implantaciones de pago." }
        ]
      },
      contact: {
        eyebrow: "Contacto",
        title: "Empecemos la conversación.",
        subtitle: "Pregunta por dispositivos, pilotos, integración o producto. El formulario se envía a través del servicio de terceros configurado.",
        emailLabel: "Correo",
        privacyLabel: "Política de privacidad",
        privacyValue: "Ver aviso legal actual",
        termsLabel: "Términos del servicio",
        termsValue: "Mantiene coherencia con la página legal existente",
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar mensaje",
        submitting: "Enviando...",
        success: "Mensaje enviado correctamente. Revisa el correo de confirmación si el servicio del formulario requiere activación.",
        error: "No pudimos enviar el mensaje ahora mismo. Escribe directamente a lightmind@lightmind.art."
      },
      footer: {
        tagline: "Sistemas de memoria con IA siempre activa para personas y productos.",
        products: "Productos",
        technology: "Tecnología",
        support: "Soporte",
        privacy: "Política de privacidad",
        terms: "Términos del servicio",
        rights: "Todos los derechos reservados."
      }
    }
  };

  var currentLanguage = "en";
  var currentSceneIndex = 0;
  var currentProductIndex = 0;

  function getCopy(lang) {
    return TRANSLATIONS[lang] || TRANSLATIONS.en;
  }

  function getUiLabels(lang) {
    return UI_LABELS[lang] || UI_LABELS.en;
  }

  function setDocumentDirection(lang) {
    var isRtl = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }

  function setText(path, value) {
    var node = document.querySelector("[data-i18n=\"" + path + "\"]");
    if (node) {
      node.textContent = value;
    }
  }

  function applyStaticCopy(copy) {
    var labels = getUiLabels(currentLanguage);
    var mappings = [
      ["nav.products", copy.nav.products],
      ["nav.useCases", labels.features],
      ["nav.technology", copy.nav.technology],
      ["nav.proof", labels.about],
      ["nav.contact", copy.nav.contact],
      ["nav.buy", labels.preorder],
      ["hero.eyebrow", copy.hero.eyebrow],
      ["hero.title", copy.hero.title],
      ["hero.subtitle", copy.hero.subtitle],
      ["hero.ctaPrimary", copy.hero.ctaPrimary],
      ["hero.ctaSecondary", copy.hero.ctaSecondary],
      ["hero.point1", copy.hero.point1],
      ["hero.point2", copy.hero.point2],
      ["hero.point3", copy.hero.point3],
      ["hero.float1Title", copy.hero.float1Title],
      ["hero.float1Copy", copy.hero.float1Copy],
      ["hero.float2Title", copy.hero.float2Title],
      ["hero.float2Copy", copy.hero.float2Copy],
      ["products.eyebrow", copy.products.eyebrow],
      ["products.title", copy.products.title],
      ["products.subtitle", copy.products.subtitle],
      ["products.promo", copy.products.promo],
      ["products.counterLabel", copy.products.counterLabel],
      ["products.counterMax", copy.products.counterMax],
      ["useCases.eyebrow", copy.useCases.eyebrow],
      ["useCases.title", copy.useCases.title],
      ["useCases.subtitle", copy.useCases.subtitle],
      ["technology.eyebrow", copy.technology.eyebrow],
      ["technology.title", copy.technology.title],
      ["technology.subtitle", copy.technology.subtitle],
      ["proof.eyebrow", copy.proof.eyebrow],
      ["proof.title", copy.proof.title],
      ["proof.subtitle", copy.proof.subtitle],
      ["contact.eyebrow", copy.contact.eyebrow],
      ["contact.title", copy.contact.title],
      ["contact.subtitle", copy.contact.subtitle],
      ["contact.emailLabel", copy.contact.emailLabel],
      ["contact.privacyLabel", copy.contact.privacyLabel],
      ["contact.privacyValue", copy.contact.privacyValue],
      ["contact.termsLabel", copy.contact.termsLabel],
      ["contact.termsValue", copy.contact.termsValue],
      ["contact.name", copy.contact.name],
      ["contact.email", copy.contact.email],
      ["contact.subject", copy.contact.subject],
      ["contact.message", copy.contact.message],
      ["contact.submit", copy.contact.submit],
      ["footer.tagline", copy.footer.tagline],
      ["footer.privacy", copy.footer.privacy],
      ["footer.terms", copy.footer.terms],
      ["footer.rights", copy.footer.rights]
    ];

    mappings.forEach(function (entry) {
      setText(entry[0], entry[1]);
    });

    document.title = copy.metaTitle;
    var metaDescription = document.querySelector("meta[name=\"description\"]");
    if (metaDescription) metaDescription.setAttribute("content", copy.metaDescription);
    var ogTitle = document.querySelector("meta[property=\"og:title\"]");
    if (ogTitle) ogTitle.setAttribute("content", copy.metaTitle);
    var ogDescription = document.querySelector("meta[property=\"og:description\"]");
    if (ogDescription) ogDescription.setAttribute("content", copy.metaDescription);
  }

  function renderProducts(copy) {
    var product = PRODUCT_CONFIG[currentProductIndex];
    var card = copy.productCards[product.cardIndex];
    var image = document.getElementById("product-image");
    var tagline = document.getElementById("product-tagline");
    var name = document.getElementById("product-name");
    var price = document.getElementById("product-price");
    var description = document.getElementById("product-description");
    var badgesEl = document.getElementById("product-badges");
    var buySlot = document.getElementById("product-buy-slot");
    var selectorGrid = document.getElementById("product-selector-grid");
    var dots = document.getElementById("product-dots");

    if (image) {
      image.src = product.image;
      image.alt = card.name;
    }
    if (tagline) tagline.textContent = card.tagline;
    if (name) name.textContent = card.name;
    if (price) price.textContent = card.price;
    if (description) description.textContent = card.description;

    if (badgesEl) {
      badgesEl.innerHTML = card.badges.map(function (badge) {
        return "<span>" + badge + "</span>";
      }).join("");
    }

    if (buySlot) {
      buySlot.innerHTML = "<stripe-buy-button buy-button-id=\"" + product.buyButtonId + "\" publishable-key=\"" + STRIPE_PUBLISHABLE_KEY + "\"></stripe-buy-button>";
    }

    if (selectorGrid) {
      selectorGrid.innerHTML = PRODUCT_CONFIG.map(function (entry, index) {
        var selectorCard = copy.productCards[entry.cardIndex];
        var activeClass = index === currentProductIndex ? "product-selector-card is-active" : "product-selector-card";
        return [
          "<button type=\"button\" class=\"" + activeClass + "\" data-product-index=\"" + index + "\">",
          "<img src=\"" + entry.image + "\" alt=\"" + selectorCard.name + "\">",
          "<span class=\"product-selector-name\">" + selectorCard.name + "</span>",
          "<span class=\"product-selector-tagline\">" + selectorCard.tagline + "</span>",
          "<span class=\"product-selector-price\">" + selectorCard.price + "</span>",
          "</button>"
        ].join("");
      }).join("");

      selectorGrid.querySelectorAll("[data-product-index]").forEach(function (button) {
        button.addEventListener("mouseenter", function () {
          currentProductIndex = Number(button.getAttribute("data-product-index"));
          renderProducts(getCopy(currentLanguage));
        });
        button.addEventListener("click", function () {
          currentProductIndex = Number(button.getAttribute("data-product-index"));
          renderProducts(getCopy(currentLanguage));
        });
      });
    }

    if (dots) {
      dots.innerHTML = PRODUCT_CONFIG.map(function (_, index) {
        var activeClass = index === currentProductIndex ? "product-dot is-active" : "product-dot";
        return "<button type=\"button\" class=\"" + activeClass + "\" data-product-dot=\"" + index + "\" aria-label=\"Go to product " + (index + 1) + "\"></button>";
      }).join("");

      dots.querySelectorAll("[data-product-dot]").forEach(function (button) {
        button.addEventListener("click", function () {
          currentProductIndex = Number(button.getAttribute("data-product-dot"));
          renderProducts(getCopy(currentLanguage));
        });
      });
    }
  }

  function renderFooter(copy) {
    var labels = getUiLabels(currentLanguage);
    setText("footer.productsHeading", copy.footer.products || "Products");
    setText("footer.companyHeading", labels.about);
    setText("footer.legalHeading", labels.legal);
    setText("footer.product1", copy.productCards[PRODUCT_CONFIG[0].cardIndex].name);
    setText("footer.product2", copy.productCards[PRODUCT_CONFIG[1].cardIndex].name);
    setText("footer.product3", copy.productCards[PRODUCT_CONFIG[2].cardIndex].name);
    setText("footer.product4", copy.productCards[PRODUCT_CONFIG[3].cardIndex].name);
    setText("footer.company1", labels.about);
    setText("footer.company2", copy.nav.technology);
    setText("footer.company3", labels.features);
    setText("footer.company4", copy.nav.contact);
    setText("footer.cookie", labels.cookie);
  }

  function renderTechnology(copy) {
    var list = document.getElementById("technology-list");
    if (!list) return;

    list.innerHTML = copy.technology.items.map(function (item) {
      return [
        "<article class=\"technology-item\">",
        "<div class=\"technology-item-top\">",
        "<span class=\"technology-item-number\">" + item.number + "</span>",
        "<h3>" + item.title + "</h3>",
        "</div>",
        "<p>" + item.description + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderProof(copy) {
    var grid = document.getElementById("proof-grid");
    if (!grid) return;

    grid.innerHTML = copy.proof.cards.map(function (card, index) {
      var side = index % 2 === 0 ? "left" : "right";
      var emptyCard = "<div class=\"proof-spacer\"></div>";
      var cardHtml = [
        "<article class=\"proof-milestone-card " + side + "\">",
        "<span class=\"proof-value\">" + card.value + "</span>",
        "<p class=\"proof-copy\">" + card.label + "</p>",
        "</article>"
      ].join("");

      return [
        "<article class=\"proof-milestone\">",
        side === "left" ? cardHtml : emptyCard,
        "<div class=\"proof-timeline-center\"><span class=\"proof-dot\"></span></div>",
        side === "right" ? cardHtml : emptyCard,
        "</article>"
      ].join("");
    }).join("");
  }

  function renderScene(copy) {
    var scene = copy.scenes[currentSceneIndex];
    var image = document.getElementById("scene-image");
    var title = document.getElementById("scene-title");
    var subtitle = document.getElementById("scene-subtitle");
    var index = document.getElementById("scene-index");

    if (image) image.src = SCENE_IMAGES[currentSceneIndex];
    if (image) image.alt = scene.title;
    if (title) title.textContent = scene.title;
    if (subtitle) subtitle.textContent = scene.subtitle;
    if (index) index.textContent = "0" + (currentSceneIndex + 1) + " / 0" + copy.scenes.length;

    var tabs = document.getElementById("scene-tabs");
    if (!tabs) return;

    tabs.innerHTML = copy.scenes.map(function (entry, idx) {
      var activeClass = idx === currentSceneIndex ? "scene-tab is-active" : "scene-tab";
      return "<button type=\"button\" class=\"" + activeClass + "\" data-scene-index=\"" + idx + "\">" + entry.tab + "</button>";
    }).join("");

    tabs.querySelectorAll("[data-scene-index]").forEach(function (button) {
      button.addEventListener("click", function () {
        currentSceneIndex = Number(button.getAttribute("data-scene-index"));
        renderScene(getCopy(currentLanguage));
      });
    });
  }

  function animateCounter() {
    var counter = document.getElementById("counter-value");
    if (!counter) return;

    var target = Number(counter.getAttribute("data-counter-target") || "0");
    var start = 0;
    var startTime = null;
    var duration = 1400;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.round(start + (target - start) * progress);
      counter.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function setupScenes() {
    var prev = document.getElementById("scene-prev");
    var next = document.getElementById("scene-next");

    if (prev) {
      prev.addEventListener("click", function () {
        currentSceneIndex = (currentSceneIndex - 1 + SCENE_IMAGES.length) % SCENE_IMAGES.length;
        renderScene(getCopy(currentLanguage));
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        currentSceneIndex = (currentSceneIndex + 1) % SCENE_IMAGES.length;
        renderScene(getCopy(currentLanguage));
      });
    }
  }

  function setupProducts() {
    var prev = document.getElementById("product-prev");
    var next = document.getElementById("product-next");

    if (prev) {
      prev.addEventListener("click", function () {
        currentProductIndex = (currentProductIndex - 1 + PRODUCT_CONFIG.length) % PRODUCT_CONFIG.length;
        renderProducts(getCopy(currentLanguage));
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        currentProductIndex = (currentProductIndex + 1) % PRODUCT_CONFIG.length;
        renderProducts(getCopy(currentLanguage));
      });
    }
  }

  function setupMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var panel = document.getElementById("site-nav");

    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    document.querySelectorAll(".reveal").forEach(function (node) {
      observer.observe(node);
    });
  }

  function setupParticles() {
    var canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var animationId = 0;
    var particles = [];
    var circles = [];
    var mouse = { x: 0, y: 0 };

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function buildParticles(width, height) {
      var count = Math.min(54, Math.floor((width * height) / 26000));
      particles = Array.from({ length: count }).map(function () {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: random(-0.26, 0.26),
          vy: random(-0.26, 0.26),
          size: random(0.7, 1.6),
          opacity: random(0.18, 0.42)
        };
      });

      circles = Array.from({ length: 5 }).map(function () {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: random(-0.12, 0.12),
          vy: random(-0.12, 0.12),
          size: random(60, 150),
          opacity: random(0.02, 0.07)
        };
      });
    }

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles(window.innerWidth, window.innerHeight);
    }

    function onMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function animate() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      circles.forEach(function (circle) {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x < -circle.size) circle.x = width + circle.size;
        if (circle.x > width + circle.size) circle.x = -circle.size;
        if (circle.y < -circle.size) circle.y = height + circle.size;
        if (circle.y > height + circle.size) circle.y = -circle.size;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(180, 180, 190," + circle.opacity + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      particles.forEach(function (particle, index) {
        var dx = mouse.x - particle.x;
        var dy = mouse.y - particle.y;
        var distance = Math.sqrt(dx * dx + dy * dy) || 1;
        if (distance < 84) {
          var force = (84 - distance) / 84;
          particle.vx -= (dx / distance) * force * 0.008;
          particle.vy -= (dy / distance) * force * 0.008;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(166, 166, 176," + particle.opacity + ")";
        ctx.fill();

        particles.slice(index + 1).forEach(function (other) {
          var lx = particle.x - other.x;
          var ly = particle.y - other.y;
          var lineDistance = Math.sqrt(lx * lx + ly * ly);
          if (lineDistance < 104) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = "rgba(188, 188, 198," + ((1 - lineDistance / 104) * 0.11) + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = window.requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    animate();

    window.addEventListener("beforeunload", function () {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    });
  }

  function setFormStatus(message, kind) {
    var status = document.getElementById("form-status");
    if (!status) return;
    status.textContent = message || "";
    status.classList.remove("is-success", "is-error");
    if (kind) status.classList.add(kind);
  }

  function setupContactForm() {
    var form = document.getElementById("contact-form");
    var submit = document.getElementById("contact-submit");
    if (!form || !submit) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var copy = getCopy(currentLanguage);
      setFormStatus("", "");

      if (!form.reportValidity()) return;

      var config = window.LIGHTMIND_CONFIG && window.LIGHTMIND_CONFIG.contactForm;
      if (!config || !config.endpoint) {
        setFormStatus(copy.contact.error, "is-error");
        return;
      }

      submit.disabled = true;
      submit.textContent = copy.contact.submitting;

      var formData = new FormData(form);
      Object.keys(config.extraFields || {}).forEach(function (key) {
        formData.append(key, config.extraFields[key]);
      });

      fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      }).then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        return response.json().catch(function () {
          return {};
        });
      }).then(function () {
        form.reset();
        setFormStatus(copy.contact.success, "is-success");
      }).catch(function () {
        setFormStatus(copy.contact.error, "is-error");
      }).finally(function () {
        submit.disabled = false;
        submit.textContent = copy.contact.submit;
      });
    });
  }

  function applyLanguage(lang) {
    currentLanguage = TRANSLATIONS[lang] ? lang : "en";
    var copy = getCopy(currentLanguage);
    localStorage.setItem("lightmind-language", currentLanguage);
    setDocumentDirection(currentLanguage);
    applyStaticCopy(copy);
    renderProducts(copy);
    renderFooter(copy);
    renderTechnology(copy);
    renderProof(copy);
    renderScene(copy);
    setFormStatus("", "");

    var submit = document.getElementById("contact-submit");
    if (submit && !submit.disabled) {
      submit.textContent = copy.contact.submit;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = String(new Date().getFullYear());

    setupParticles();
    setupMobileNav();
    setupProducts();
    setupScenes();
    setupContactForm();
    setupReveal();
    animateCounter();

    var storedLanguage = localStorage.getItem("lightmind-language") || "en";
    var switcher = document.getElementById("language-switcher");
    if (switcher) {
      switcher.value = storedLanguage;
      switcher.addEventListener("change", function () {
        applyLanguage(switcher.value);
      });
    }

    applyLanguage(storedLanguage);
  });
})();
