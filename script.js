const providers = [
  {
    name: "Qwen OAuth",
    category: "oauth",
    mode: "OAuth Free Access",
    summary:
      "OpenClaw documents Qwen as an official free-tier OAuth flow, which makes it one of the easiest no-card options.",
    tag: "Best no-card path",
    bestFor: "Fast onboarding without billing setup",
    freeModel: "Durable daily request allowance via OAuth",
    region: "Strong fit for global users, especially China-linked workflows",
    setup: "Very low",
    tags: ["beginner", "china"],
    facts: [
      "OpenClaw documents Qwen Coder and Vision as supporting a free-tier OAuth flow.",
      "The OpenClaw docs note up to 2,000 requests per day, still subject to Qwen-side rate limits.",
      "This is not a standard API key flow. OpenClaw handles the token after device-code login.",
      "Best for users who want to get started immediately and accept platform-managed auth."
    ],
    command:
      "openclaw plugins enable qwen-portal-auth\nopenclaw models auth login --provider qwen-portal --set-default",
    links: [
      ["OpenClaw Qwen Docs", "https://docs.openclaw.ai/providers/qwen"],
      ["OpenClaw Provider Overview", "https://docs.openclaw.ai/concepts/model-providers"]
    ]
  },
  {
    name: "Google Gemini API",
    category: "direct",
    mode: "Direct Support",
    summary:
      "Gemini is one of the more stable free API options right now. OpenClaw includes built-in `google/*` provider support.",
    tag: "Stable free tier",
    bestFor: "Balanced official free API access",
    freeModel: "Published free tier with model-specific quotas",
    region: "Best in officially supported countries and regions",
    setup: "Low",
    tags: ["beginner", "direct"],
    facts: [
      "OpenClaw lists `google` as a built-in provider and uses `GEMINI_API_KEY` for auth.",
      "Google's official pricing page shows Free Tier availability for multiple Gemini models.",
      "Google also publishes free-tier RPM, TPM, and RPD quota details.",
      "Best default if you want official API access instead of an OAuth-only workflow."
    ],
    command:
      "openclaw onboard --auth-choice gemini-api-key\n# then choose a google/gemini-* model",
    links: [
      ["OpenClaw Provider Overview", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Gemini Pricing", "https://ai.google.dev/pricing"],
      ["Gemini Rate Limits", "https://ai.google.dev/gemini-api/docs/quota"]
    ]
  },
  {
    name: "Groq",
    category: "direct",
    mode: "Direct Support",
    summary:
      "Groq is a built-in OpenClaw provider and publishes generous free-plan request and token limits.",
    tag: "Very fast inference",
    bestFor: "Low-latency interactive work",
    freeModel: "Free plan with documented request and token ceilings",
    region: "Best for users prioritizing speed over region-specific routing",
    setup: "Low",
    tags: ["direct"],
    facts: [
      "OpenClaw lists `groq` as a built-in provider using `GROQ_API_KEY`.",
      "Groq publishes Free Plan Limits with per-model request and token ceilings.",
      "Groq also documents its OpenAI-compatible base URL as `https://api.groq.com/openai/v1`.",
      "Best fit for low-latency interactive use where speed matters more than provider breadth."
    ],
    command:
      "export GROQ_API_KEY=\"<your-groq-key>\"\n# then use groq/* models inside OpenClaw",
    links: [
      ["OpenClaw Provider Overview", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Groq Rate Limits", "https://console.groq.com/docs/rate-limits"],
      ["Groq OpenAI Compatibility", "https://console.groq.com/docs/openai"]
    ]
  },
  {
    name: "Hugging Face Inference",
    category: "direct",
    mode: "Direct Support",
    summary:
      "If you want one token that can reach many models, Hugging Face is a practical routing layer and has dedicated OpenClaw docs.",
    tag: "Unified routing",
    bestFor: "Exploring many model backends from one ecosystem",
    freeModel: "Small monthly credits, then pay-as-you-go",
    region: "Global, best for experimentation rather than heavy free volume",
    setup: "Low",
    tags: ["direct", "variety"],
    facts: [
      "OpenClaw documents Hugging Face Inference Providers with `HF_TOKEN` or `HUGGINGFACE_HUB_TOKEN`.",
      "Hugging Face pricing currently lists `$0.10` in monthly credits for free users, marked as subject to change.",
      "After credits are exhausted, continued usage generally requires purchased credits.",
      "Useful when you want access to multiple model backends behind one ecosystem."
    ],
    command: "openclaw onboard --auth-choice huggingface-api-key",
    links: [
      ["OpenClaw Hugging Face Docs", "https://docs.openclaw.ai/providers/huggingface"],
      ["HF Inference Pricing", "https://huggingface.co/docs/api-inference/en/pricing"],
      ["HF Public AI Blog", "https://huggingface.co/blog/inference-providers-publicai"]
    ]
  },
  {
    name: "OpenRouter Free Models",
    category: "direct",
    mode: "Direct Support",
    summary:
      "OpenRouter is useful when you want one key across many models, and it still exposes free-model routes for lightweight testing.",
    tag: "Low-friction testing",
    bestFor: "Sampling many models quickly",
    freeModel: "Free model routes with lower rate limits",
    region: "Global, best for testing rather than dependable free throughput",
    setup: "Low",
    tags: ["direct", "variety"],
    facts: [
      "OpenClaw has a dedicated OpenRouter provider page.",
      "OpenRouter's FAQ states that many free models are available, with lower rate limits.",
      "OpenRouter pricing also publishes daily and per-minute limits for free usage.",
      "Best for browsing many models quickly, but less reliable if you need strong free throughput."
    ],
    command:
      'openclaw onboard --auth-choice apiKey --token-provider openrouter --token "$OPENROUTER_API_KEY"',
    links: [
      ["OpenClaw OpenRouter Docs", "https://docs.openclaw.ai/providers/openrouter"],
      ["OpenRouter FAQ", "https://openrouter.ai/docs/faq"],
      ["OpenRouter Pricing", "https://openrouter.ai/pricing"]
    ]
  },
  {
    name: "Vercel AI Gateway",
    category: "gateway",
    mode: "Gateway",
    summary:
      "Vercel AI Gateway is not unlimited free usage, but it does offer monthly free credits and has direct OpenClaw support.",
    tag: "Strong starter credit",
    bestFor: "Onboarding with modern gateway tooling",
    freeModel: "Monthly starter credits, not a true permanent free tier",
    region: "Global, best when you already work in the Vercel ecosystem",
    setup: "Low",
    tags: ["gateway", "beginner"],
    facts: [
      "OpenClaw documents `vercel-ai-gateway` with `AI_GATEWAY_API_KEY`.",
      "Vercel pricing currently advertises `$5` in monthly AI Gateway credits on eligible plans.",
      "Vercel also documents OpenAI- and Anthropic-compatible gateway behavior.",
      "More of a gateway starter option than a long-term 'free forever' source."
    ],
    command: "openclaw onboard --auth-choice ai-gateway-api-key",
    links: [
      ["OpenClaw Vercel AI Gateway Docs", "https://docs.openclaw.ai/providers/vercel-ai-gateway"],
      ["Vercel AI Gateway Pricing", "https://vercel.com/docs/ai-gateway/pricing"],
      ["Vercel OpenAI-Compatible API", "https://vercel.com/docs/ai-gateway/openai-compat"]
    ]
  },
  {
    name: "Mistral API",
    category: "direct",
    mode: "Direct Support",
    summary:
      "Mistral has an official free Experiment plan for API testing, and OpenClaw supports it as a first-class provider.",
    tag: "Official free experiment tier",
    bestFor: "Evaluation and prototyping with a direct provider",
    freeModel: "Free experiment tier intended for testing",
    region: "Global, but not the strongest choice for maximizing free throughput",
    setup: "Low",
    tags: ["direct"],
    facts: [
      "OpenClaw provides a dedicated `mistral` provider with `MISTRAL_API_KEY`.",
      "Mistral's help center documents a free Experiment plan that requires a verified phone number and no credit card.",
      "Mistral documents a conservative free API tier intended for evaluation and prototyping."
    ],
    command: "openclaw onboard --auth-choice mistral-api-key",
    links: [
      ["OpenClaw Mistral Docs", "https://docs.openclaw.ai/providers/mistral"],
      ["Mistral Experiment Plan", "https://help.mistral.ai/en/articles/450104-how-can-i-try-the-api-for-free-with-the-experiment-plan"],
      ["Mistral Rate Limits", "https://help.mistral.ai/en/articles/392924-how-do-api-rate-limits-work-and-how-can-i-increase-them"]
    ]
  },
  {
    name: "Kilo Gateway",
    category: "gateway",
    mode: "Gateway",
    summary:
      "Kilo Gateway now has official OpenClaw integration docs and currently offers starter credits plus free-model access.",
    tag: "More free-model options",
    bestFor: "Gateway users who want both credits and labeled free models",
    freeModel: "Starter credit plus some free-model access",
    region: "Global, useful when you want gateway flexibility",
    setup: "Medium",
    tags: ["gateway"],
    facts: [
      "OpenClaw provides dedicated `kilocode` provider documentation.",
      "The OpenClaw provider catalog notes multiple Kilo models marked as `Free`.",
      "Kilo's gateway docs currently describe `$5` in starter credit and mention anonymous access for some free models.",
      "Worth checking if you want a gateway that mixes starter credit with labeled free models."
    ],
    command: "openclaw onboard --kilocode-api-key <your-kilo-key>",
    links: [
      ["OpenClaw Kilo Docs", "https://docs.openclaw.ai/providers/kilocode"],
      ["OpenClaw Provider Overview", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Kilo Gateway", "https://kilo.ai/gateway"],
      ["Kilo Authentication", "https://kilo.ai/docs/gateway/authentication"]
    ]
  },
  {
    name: "SiliconFlow",
    category: "gateway",
    mode: "OpenAI-Compatible",
    summary:
      "SiliconFlow is one of the strongest China-friendly options because it clearly labels free models and keeps fixed free-model rate limits.",
    tag: "Best China-friendly gateway",
    bestFor: "Mainland China access to many open models",
    freeModel: "Labeled free models with fixed free-model rate limits",
    region: "Excellent fit for mainland China",
    setup: "Medium",
    tags: ["gateway", "china"],
    facts: [
      "SiliconFlow documents that free models exist and that free-model calls cost 0 in billing.",
      "Its docs state rate limits for free models are fixed and separate from paid-model limits.",
      "This is a good choice when you want lower latency in mainland China and access to many open models through one endpoint."
    ],
    command:
      "base_url=https://api.siliconflow.cn/v1\n# use with OpenClaw custom OpenAI-compatible provider",
    links: [
      ["SiliconFlow Rate Limits", "https://docs.siliconflow.cn/en/userguide/rate-limits/rate-limit-and-upgradation"],
      ["SiliconFlow Free Model Example", "https://docs.siliconflow.cn/en/usercases/use-siliconcloud-in-bob"],
      ["SiliconFlow Console", "https://siliconflow.cn"]
    ]
  },
  {
    name: "Alibaba Cloud DashScope",
    category: "gateway",
    mode: "OpenAI-Compatible",
    summary:
      "DashScope is useful if you want a broad China-based catalog with OpenAI-compatible access and lots of per-model trial quotas.",
    tag: "Large trial catalog",
    bestFor: "Trying many China-based models from one platform",
    freeModel: "Per-model trial quotas, often time-limited",
    region: "Excellent fit for mainland China",
    setup: "Medium",
    tags: ["gateway", "china"],
    facts: [
      "DashScope documents an OpenAI-compatible base URL at `https://dashscope.aliyuncs.com/compatible-mode/v1`.",
      "Many DashScope model docs publish per-model free token quotas, typically valid for 90 days after activation.",
      "This is one of the easiest ways to try Qwen-family and partner models from a single mainland platform."
    ],
    command:
      "base_url=https://dashscope.aliyuncs.com/compatible-mode/v1\n# use DASHSCOPE_API_KEY with OpenClaw custom OpenAI-compatible provider",
    links: [
      ["DashScope OpenAI-Compatible Example", "https://help.aliyun.com/zh/model-studio/math-language-model"],
      ["DashScope Model Docs", "https://help.aliyun.com/zh/model-studio/"],
      ["DashScope Console", "https://dashscope.aliyun.com"]
    ]
  },
  {
    name: "Z.AI (GLM)",
    category: "direct",
    mode: "Direct Support",
    summary:
      "Z.AI is OpenClaw's built-in path for GLM models, and its official docs still surface free GLM-4-Flash usage plus token promotions.",
    tag: "Best GLM path",
    bestFor: "Using GLM models with direct OpenClaw support",
    freeModel: "Free batch usage plus promo-style token packages",
    region: "Strong fit for China-based users",
    setup: "Low",
    tags: ["direct", "china"],
    facts: [
      "OpenClaw supports GLM through the built-in `zai` provider and `ZAI_API_KEY`.",
      "Zhipu's Batch API docs state that `GLM-4-Flash` is free in Batch mode.",
      "Zhipu's current promotion page advertises new-user and referral token packages, so bonus quotas still exist but are promo-based."
    ],
    command: "openclaw onboard --auth-choice zai-api-key",
    links: [
      ["OpenClaw Z.AI Docs", "https://docs.openclaw.ai/providers/zai"],
      ["Zhipu Batch Docs", "https://docs.bigmodel.cn/cn/guide/tools/batch"],
      ["Zhipu Promotions", "https://docs.bigmodel.cn/cn/update/promotion"]
    ]
  },
  {
    name: "Volcengine Ark (Doubao)",
    category: "gateway",
    mode: "OpenAI-Compatible",
    summary:
      "Volcengine Ark is worth checking if you want Doubao access with China-based routing and model-level free token quotas.",
    tag: "Daily-use China option",
    bestFor: "Stable China-based daily workloads",
    freeModel: "Model-level free token quotas",
    region: "Excellent fit for mainland China",
    setup: "Medium",
    tags: ["gateway", "china"],
    facts: [
      "Volcengine's public product pages state that each Doubao language model provides 500,000 free tokens.",
      "Enterprise collaboration plans can raise that free allocation on eligible accounts.",
      "Best for China-based everyday workloads where network stability matters more than global model breadth."
    ],
    command:
      "base_url=https://ark.cn-beijing.volces.com/api/v3\n# use with OpenClaw custom OpenAI-compatible provider",
    links: [
      ["Volcengine Ark Free Quota", "https://www.volcengine.com/sem"],
      ["Volcengine Free Trial Example", "https://www.volcengine.com/docs/6281/1392584"],
      ["Volcengine Ark", "https://www.volcengine.com/product/ark"]
    ]
  },
  {
    name: "Ollama",
    category: "local",
    mode: "Local / Self-hosted",
    summary:
      "Ollama is the real zero-recurring-cost path: you run models locally and OpenClaw can use them natively with tool calling.",
    tag: "Real token freedom",
    bestFor: "High-volume local work and privacy-sensitive tasks",
    freeModel: "No token spend after local setup",
    region: "Universal if your hardware can carry the load",
    setup: "Medium",
    tags: ["local"],
    facts: [
      "OpenClaw has native Ollama support and recommends using the native Ollama API instead of `/v1` for tool calling.",
      "OpenClaw auto-discovers compatible local models and sets their costs to 0.",
      "Best for routine tasks, privacy-sensitive work, and users who want to eliminate recurring token spend."
    ],
    command:
      "ollama pull llama3.3\nexport OLLAMA_API_KEY=\"ollama-local\"\n# then use ollama/* models in OpenClaw",
    links: [
      ["OpenClaw Ollama Docs", "https://docs.openclaw.ai/providers/ollama"],
      ["OpenClaw Provider Overview", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Ollama", "https://ollama.com"]
    ]
  }
];

const ui = {
  en: {
    lang: "en",
    title: "OpenClaw Free Token Directory | Free API & OpenAI-Compatible Providers",
    description:
      "OpenClaw free token directory for OpenAI-compatible providers, free API tiers, and OAuth access options, with official sources, quick-start commands, and provider comparisons.",
    ogDescription:
      "Find free tokens, free API tiers, and OpenAI-compatible providers for OpenClaw, with official sources, quick-start commands, and tradeoff notes.",
    twitterDescription:
      "Find free tokens, free API tiers, and OpenAI-compatible providers for OpenClaw, with official sources and quick-start commands.",
    keywords:
      "OpenClaw, free token, free API, OpenAI-compatible providers, OAuth, Gemini API, Groq, OpenRouter, Hugging Face, Mistral, SiliconFlow, DashScope, Z.AI, Volcengine Ark, Ollama",
    brandSubtitle: "OpenClaw Provider Decision Desk",
    navComparison: "Decision Desk",
    navProviders: "Browse Providers",
    heroEyebrow: "OpenClaw Free Token Guide",
    heroTitle: "Choose the right free token path before you waste setup time.",
    heroLead:
      "This is a decision-first directory for OpenClaw users. Instead of a flat list of providers, it helps you decide by onboarding friction, free-tier durability, region fit, and whether you want direct support, OAuth, a gateway, or a fully local setup.",
    heroCtaPrimary: "Start with your goal",
    heroCtaSecondary: "Compare all providers",
    trustLabel1: "Verified against official docs",
    trustLabel2: "What this page optimizes for",
    trustValue2: "Fast selection, low guesswork",
    heroCardKicker: "Fastest good defaults",
    heroCardList: [
      "<strong>Qwen OAuth</strong> for zero-card onboarding",
      "<strong>Gemini API</strong> for balanced official free API access",
      "<strong>Ollama</strong> for long-term zero recurring spend"
    ],
    metric1: "Verified providers",
    metric2: "Direct OpenClaw support",
    metric3: "China-friendly options",
    comparisonKicker: "Comparison Table",
    comparisonTitle: "Compare providers before you commit to one",
    comparisonLead: "Use the table first for fast selection. The cards below are for deeper detail after you shortlist.",
    searchLabel: "Search providers, limits, regions, or use cases",
    searchPlaceholder: "Try Gemini, China-friendly, local, starter credit...",
    chipLabels: {
      all: "All",
      beginner: "Beginner-friendly",
      direct: "Direct support",
      oauth: "OAuth",
      gateway: "Gateway",
      china: "China-friendly",
      local: "Local-first"
    },
    reset: "Reset filters",
    tableHeaders: ["Provider", "Free Type", "China Fit", "No Card", "Native Support", "Best For", "Setup"],
    logicKicker: "Selection Logic",
    logicTitle: "How to choose without overthinking it",
    logic1Title: "Decide how you want to authenticate",
    logic1Body:
      "If you want the least friction, choose OAuth. If you want a reusable API key, stay with direct providers. If you want wider model access, use a gateway.",
    logic2Title: "Match the free tier to your real workload",
    logic2Body:
      "Some options are durable free tiers, some are starter credits, and some are promo or evaluation plans. Treat them differently.",
    logic3Title: "Keep expensive cloud usage for the tasks that earn it",
    logic3Body:
      "For daily high-volume work, moving routine tasks to Ollama usually produces the biggest long-term savings.",
    detailsKicker: "Provider Details",
    detailsTitle: "Read the details after you shortlist",
    detailsLead:
      "Every card includes what it is best for, how the free access actually works, and the fastest OpenClaw setup command.",
    emptyTitle: "No providers match this filter",
    emptyBody: "Try a broader keyword or reset the filter state.",
    picksKicker: "Best Picks",
    picksTitle: "Recommended paths for common goals",
    picks: [
      ["Zero-card onboarding", "Choose Qwen OAuth when your priority is starting immediately with the least setup friction."],
      ["Most balanced official free API", "Gemini is the cleanest default when you want direct support, clear docs, and durable free-tier access."],
      ["Lowest latency", "Groq is the best fit when interaction speed matters more than broad catalog coverage."],
      ["Mainland China practicality", "SiliconFlow, DashScope, Z.AI, and Volcengine Ark are the strongest options when routing and regional access matter."],
      ["Zero recurring spend", "Ollama is the real answer if you want to stop depending on paid token usage for routine work."],
      ["One credential, many models", "OpenRouter and Hugging Face are better when model variety matters more than maximizing free throughput."]
    ],
    notesKicker: "Critical Notes",
    notesTitle: "What free-token pages usually hide",
    notes: [
      ["Free policies move fast", "The details here reflect official pages checked on March 14, 2026. Recheck before treating any quota as stable."],
      ["Starter credits are not durable free tiers", "Vercel, Kilo, and some gateway ecosystems are better treated as onboarding credits than infinite free usage."],
      ["Region fit changes the real experience", "A provider can look good on paper and still be a poor choice if latency, payment support, or access policies do not match your region."],
      ["Direct support and best value are different questions", "Built-in OpenClaw support reduces setup work, but the most practical free option may still be a compatible gateway or local model."]
    ],
    cardTerms: ["Best for", "Free access", "Region fit", "Setup effort", "OpenClaw Quick Start", "Copy", "Copied", "Copy failed"],
    results: {
      all: "all providers",
      beginner: "beginner-friendly providers",
      direct: "direct-support providers",
      oauth: "OAuth providers",
      gateway: "gateway providers",
      china: "China-friendly providers",
      local: "local-first providers"
    }
  },
  zh: {
    lang: "zh-CN",
    title: "OpenClaw 免费 Token 导航 | 免费 API 与 OpenAI 兼容渠道",
    description:
      "面向 OpenClaw 的免费 Token 导航站，收录 OpenAI 兼容渠道、免费 API 层与 OAuth 方案，并附官方来源、快速接入命令与对比信息。",
    ogDescription:
      "查找适用于 OpenClaw 的免费 Token、免费 API 层和 OpenAI 兼容供应商，包含官方来源、快速接入命令和取舍说明。",
    twitterDescription:
      "查找适用于 OpenClaw 的免费 Token、免费 API 层和 OpenAI 兼容供应商，附官方来源和快速接入命令。",
    keywords:
      "OpenClaw,免费 token,免费 API,OpenAI 兼容渠道,OAuth,Gemini API,Groq,OpenRouter,Hugging Face,Mistral,SiliconFlow,DashScope,Z.AI,Volcengine Ark,Ollama",
    brandSubtitle: "OpenClaw 渠道决策台",
    navComparison: "决策台",
    navProviders: "查看渠道",
    heroEyebrow: "OpenClaw 免费 Token 指南",
    heroTitle: "先选对免费渠道，再投入配置时间。",
    heroLead:
      "这是一个面向 OpenClaw 的决策型目录站。它不是简单罗列 provider，而是按上手摩擦、免费层持续性、地区适配度，以及直连、OAuth、网关、本地部署等路径帮你做选择。",
    heroCtaPrimary: "先按目标选择",
    heroCtaSecondary: "查看全部渠道",
    trustLabel1: "基于官方文档核验",
    trustLabel2: "页面优化目标",
    trustValue2: "更快决策，减少试错",
    heroCardKicker: "最快可用默认解",
    heroCardList: [
      "<strong>Qwen OAuth</strong> 适合零绑卡上手",
      "<strong>Gemini API</strong> 适合均衡型官方免费 API",
      "<strong>Ollama</strong> 适合长期零持续成本"
    ],
    metric1: "已核实渠道",
    metric2: "OpenClaw 原生支持",
    metric3: "中国区友好渠道",
    comparisonKicker: "对比表",
    comparisonTitle: "先对比，再决定接哪家",
    comparisonLead: "先用表格做第一轮筛选。下面的卡片只负责补充细节，不负责首轮决策。",
    searchLabel: "搜索渠道、限额、地区或使用场景",
    searchPlaceholder: "试试 Gemini、中国区、本地、体验额度……",
    chipLabels: {
      all: "全部",
      beginner: "新手友好",
      direct: "原生直连",
      oauth: "OAuth",
      gateway: "网关",
      china: "中国区友好",
      local: "本地优先"
    },
    reset: "重置筛选",
    tableHeaders: ["渠道", "免费类型", "中国区适配", "免绑卡", "原生支持", "适合什么", "配置难度"],
    logicKicker: "选择逻辑",
    logicTitle: "别想太多，按这三步选",
    logic1Title: "先决定认证方式",
    logic1Body: "想最省事就选 OAuth；想拿可复用 API Key 就选原生直连；想覆盖更多模型就走网关。",
    logic2Title: "让免费方式匹配你的实际用量",
    logic2Body: "有的是长期免费层，有的是起步体验金，有的是活动赠送或评估计划，不能混为一谈。",
    logic3Title: "贵的云端调用只留给值得的任务",
    logic3Body: "如果你每天都在高频消耗 token，把日常任务迁到 Ollama，通常是长期最省钱的方案。",
    detailsKicker: "渠道详情",
    detailsTitle: "短名单确定后再看细节",
    detailsLead: "每张卡片都会写清楚适用场景、免费方式，以及最快的 OpenClaw 接入命令。",
    emptyTitle: "没有匹配当前筛选的渠道",
    emptyBody: "换个关键词，或者重置筛选试试。",
    picksKicker: "推荐选择",
    picksTitle: "常见目标下的推荐路径",
    picks: [
      ["零绑卡上手", "如果你只想最快开始，优先选 Qwen OAuth。"],
      ["最均衡的官方免费 API", "如果你想要原生支持、文档清晰、免费层稳定，Gemini 通常是默认首选。"],
      ["最低延迟", "如果你更在意速度而不是目录广度，Groq 是更合适的选择。"],
      ["中国大陆实用性", "如果你关心路由、延迟和区域可用性，SiliconFlow、DashScope、Z.AI、Volcengine Ark 更实用。"],
      ["零持续 token 成本", "如果你想把日常 token 支出降到几乎没有，Ollama 才是真正的长期方案。"],
      ["一个凭据覆盖更多模型", "如果你更看重模型种类，而不是最大免费吞吐，OpenRouter 和 Hugging Face 更合适。"]
    ],
    notesKicker: "关键提醒",
    notesTitle: "免费 Token 页面常故意弱化的事",
    notes: [
      ["免费规则变化很快", "这里的信息基于 2026 年 3 月 14 日核对到的官方页面。把任何额度当长期结论前都应重新确认。"],
      ["体验金不等于长期免费层", "Vercel、Kilo 以及部分网关生态更适合看作起步额度，而不是永久无限免费。"],
      ["地区适配会改变真实体验", "纸面上看起来不错的渠道，如果和你的地区在延迟、支付支持、访问策略上不匹配，实际体验仍然会很差。"],
      ["原生支持不等于性价比最高", "OpenClaw 原生支持能减少配置工作量，但最实用的免费方案仍可能是兼容网关或本地模型。"]
    ],
    cardTerms: ["适合什么", "免费方式", "地区适配", "配置难度", "OpenClaw 快速命令", "复制", "已复制", "复制失败"],
    results: {
      all: "全部渠道",
      beginner: "新手友好渠道",
      direct: "原生直连渠道",
      oauth: "OAuth 渠道",
      gateway: "网关渠道",
      china: "中国区友好渠道",
      local: "本地优先渠道"
    }
  }
};

const providerZh = {
  "Qwen OAuth": {
    mode: "OAuth 免费接入",
    summary: "OpenClaw 官方将 Qwen 列为免费层 OAuth 方案，是最容易上手且无需先绑卡的路径之一。",
    tag: "最佳免绑卡路径",
    bestFor: "不想先处理账单配置，想马上开始",
    freeModel: "通过 OAuth 获得稳定的日请求额度",
    region: "全球可用，对中文和中国区工作流尤其友好",
    facts: [
      "OpenClaw 官方文档明确写明 Qwen Coder 和 Vision 支持免费层 OAuth。",
      "OpenClaw 文档给出的参考额度是每天最多 2000 次请求，仍受 Qwen 端速率限制。",
      "这不是传统 API Key 流程，而是通过设备码登录后由 OpenClaw 托管令牌。",
      "最适合想快速起步，并接受平台托管认证的用户。"
    ]
  },
  "Google Gemini API": {
    mode: "原生直连",
    summary: "Gemini 仍是当前相对稳定的免费 API 之一，OpenClaw 内建 `google/*` provider 支持。",
    tag: "稳定免费层",
    bestFor: "均衡型官方免费 API 方案",
    freeModel: "按模型公布的官方免费层额度",
    region: "更适合官方支持国家和地区",
    facts: [
      "OpenClaw 将 `google` 列为内建 provider，认证字段是 `GEMINI_API_KEY`。",
      "Google 官方价格页显示多个 Gemini 模型仍有 Free Tier。",
      "Google 还公开了免费层 RPM、TPM 与 RPD 配额。",
      "如果你想要官方 API，而不是纯 OAuth 路线，这是更稳妥的默认选项。"
    ]
  },
  "Groq": {
    mode: "原生直连",
    summary: "Groq 是 OpenClaw 原生 provider，并公开了较清晰的免费请求和 token 限额。",
    tag: "极快推理速度",
    bestFor: "低延迟交互型任务",
    freeModel: "带明确请求和 token 上限的免费计划",
    region: "适合优先追求速度，而不是地区路由的人",
    facts: [
      "OpenClaw 将 `groq` 列为内建 provider，使用 `GROQ_API_KEY`。",
      "Groq 官方限额页公开了免费计划下不同模型的请求和 token 上限。",
      "Groq 也明确说明其 OpenAI 兼容 base URL 是 `https://api.groq.com/openai/v1`。",
      "如果你更在意响应速度而不是渠道广度，这是很强的选择。"
    ]
  },
  "Hugging Face Inference": {
    mode: "原生直连",
    summary: "如果你想用一个 token 接更多模型，Hugging Face 是很实用的统一入口，OpenClaw 也有专门接入文档。",
    tag: "统一路由",
    bestFor: "在一个生态下探索更多模型后端",
    freeModel: "每月小额免费 credits，用完后按量计费",
    region: "全球可用，更适合实验和探索，不适合大吞吐白嫖",
    facts: [
      "OpenClaw 文档说明 Hugging Face Inference Providers 可用 `HF_TOKEN` 或 `HUGGINGFACE_HUB_TOKEN` 接入。",
      "Hugging Face 当前价格页仍写明免费用户每月约有 `$0.10` credits，并注明可能调整。",
      "额度用完后，如继续使用通常需要购买 credits。",
      "更适合需要一套凭据探索多个模型后端的人。"
    ]
  },
  "OpenRouter Free Models": {
    mode: "原生直连",
    summary: "OpenRouter 的价值在于一把 key 覆盖很多模型，同时仍保留免费模型路由，适合轻量试水。",
    tag: "低门槛试模型",
    bestFor: "快速试很多模型",
    freeModel: "免费模型路由，但速率限制更低",
    region: "全球可用，更适合探索，不适合追求稳定免费吞吐",
    facts: [
      "OpenClaw 有单独的 OpenRouter provider 页面。",
      "OpenRouter FAQ 明确说明存在很多免费模型，但免费模型速率会更低。",
      "OpenRouter 定价页也公开了免费使用下的每日和每分钟限制。",
      "适合快速浏览很多模型，但不适合依赖强免费吞吐。"
    ]
  },
  "Vercel AI Gateway": {
    mode: "网关",
    summary: "Vercel AI Gateway 不是永久无限免费，但提供月度免费 credits，且 OpenClaw 直接支持。",
    tag: "起步体验金强",
    bestFor: "用现代网关工具快速上手",
    freeModel: "月度起步 credits，不是永久免费层",
    region: "全球可用，更适合已在 Vercel 生态中的用户",
    facts: [
      "OpenClaw 文档给出了 `vercel-ai-gateway` provider，使用 `AI_GATEWAY_API_KEY`。",
      "Vercel 当前价格页仍展示 AI Gateway 月度 `$5` credits。",
      "Vercel 也公开了 OpenAI / Anthropic 兼容网关行为。",
      "更适合做网关起步方案，不适合当成长期免费来源。"
    ]
  },
  "Mistral API": {
    mode: "原生直连",
    summary: "Mistral 有官方的免费 Experiment 计划用于 API 测试，OpenClaw 也将它作为一等 provider 支持。",
    tag: "官方评估免费层",
    bestFor: "评估和原型验证",
    freeModel: "面向测试用途的免费 experiment 计划",
    region: "全球可用，但不算是最大免费吞吐路线",
    facts: [
      "OpenClaw 有独立的 `mistral` provider，使用 `MISTRAL_API_KEY`。",
      "Mistral 帮助中心写明 free Experiment plan 只需手机验证，不要求信用卡。",
      "Mistral 也说明这类免费 API 更偏评估和原型用途。",
      "适合想用官方直连渠道做评估的人。"
    ]
  },
  "Kilo Gateway": {
    mode: "网关",
    summary: "Kilo Gateway 已有 OpenClaw 官方接入文档，目前提供起步 credits 和部分 free models。",
    tag: "免费模型较多",
    bestFor: "想同时要 credits 和标记免费模型的网关用户",
    freeModel: "起步 credit + 部分免费模型",
    region: "全球可用，适合追求网关灵活性的人",
    facts: [
      "OpenClaw 有专门的 `kilocode` provider 文档。",
      "OpenClaw 的 provider 目录里标了多个 Kilo `Free` 模型。",
      "Kilo 官方网关文档当前写明有 `$5` 起步 credit，并提到部分 free models 可匿名访问。",
      "适合想在一个网关里同时拿到起步额度和免费模型的人。"
    ]
  },
  "SiliconFlow": {
    mode: "OpenAI 兼容",
    summary: "SiliconFlow 是目前很强的中国区友好方案之一，因为它明确标注了 free models，并且给出了固定的免费模型速率限制。",
    tag: "最佳中国区网关",
    bestFor: "在中国大陆访问大量开源模型",
    freeModel: "标注免费模型，并有固定免费模型限流",
    region: "非常适合中国大陆",
    facts: [
      "SiliconFlow 文档明确写明有 free models，且免费模型调用在计费上为 0。",
      "文档同时说明免费模型速率限制固定，且与付费模型分开。",
      "如果你想要中国大陆低延迟、又想一站式接很多开源模型，这是很强的方案。"
    ]
  },
  "Alibaba Cloud DashScope": {
    mode: "OpenAI 兼容",
    summary: "DashScope 适合想在中国大陆平台上一站式试更多模型的人，且提供 OpenAI 兼容接入和大量按模型发放的试用额度。",
    tag: "试用目录大",
    bestFor: "在一个平台上试很多国内模型",
    freeModel: "按模型发放试用额度，通常有时效",
    region: "非常适合中国大陆",
    facts: [
      "DashScope 文档明确给出 OpenAI 兼容 base URL：`https://dashscope.aliyuncs.com/compatible-mode/v1`。",
      "很多 DashScope 模型文档都公开了按模型发放的免费 token 额度，常见为激活后 90 天有效。",
      "如果你想在大陆平台一站式体验 Qwen 和合作模型，这是最容易的路径之一。"
    ]
  },
  "Z.AI (GLM)": {
    mode: "原生直连",
    summary: "Z.AI 是 OpenClaw 接 GLM 的内建路径，官方文档目前仍能看到免费 GLM-4-Flash 用法和活动 token。",
    tag: "最佳 GLM 路线",
    bestFor: "以原生支持方式使用 GLM 模型",
    freeModel: "批处理免费 + 活动 token 赠送",
    region: "很适合中国区用户",
    facts: [
      "OpenClaw 通过内建 `zai` provider 支持 GLM，使用 `ZAI_API_KEY`。",
      "智谱 Batch API 文档写明 `GLM-4-Flash` 在 Batch 模式下免费。",
      "智谱当前 promotion 页面仍有新用户和邀请类 token 活动，因此赠送额度依然存在，但属于促销型。",
      "如果你本来就想用 GLM，这是最顺手的接法。"
    ]
  },
  "Volcengine Ark (Doubao)": {
    mode: "OpenAI 兼容",
    summary: "如果你想通过中国区路由使用 Doubao，并拿到模型级免费 token 额度，Volcengine Ark 值得重点看。",
    tag: "日常型中国区方案",
    bestFor: "中国区稳定日常工作负载",
    freeModel: "按模型发放免费 token 额度",
    region: "非常适合中国大陆",
    facts: [
      "Volcengine 对外产品页写明豆包语言模型可提供 50 万免费 tokens。",
      "企业协作类方案在符合条件时还能提升免费额度。",
      "如果你更在意中国区稳定性，而不是全球模型广度，这类方案更实用。"
    ]
  },
  "Ollama": {
    mode: "本地 / 自托管",
    summary: "Ollama 才是真正意义上的零持续 token 成本方案：模型跑在本地，OpenClaw 也能原生使用并支持工具调用。",
    tag: "真正的 token 自由",
    bestFor: "高频本地任务和隐私敏感任务",
    freeModel: "本地部署完成后不再按 token 计费",
    region: "只要硬件带得动，任何地区都适用",
    facts: [
      "OpenClaw 原生支持 Ollama，并建议优先使用原生 Ollama API，而不是 `/v1` 兼容层做工具调用。",
      "OpenClaw 会自动发现兼容本地模型，并把成本标为 0。",
      "如果你的目标是把日常 token 支出降到最低，同时保留隐私，这才是长期最有效的路径。"
    ]
  }
};

const elements = {
  grid: document.getElementById("providers-grid"),
  template: document.getElementById("provider-card-template"),
  comparisonTemplate: document.getElementById("comparison-row-template"),
  comparisonBody: document.getElementById("comparison-body"),
  filterBar: document.getElementById("filters"),
  search: document.getElementById("provider-search"),
  resultsSummary: document.getElementById("results-summary"),
  clearFilters: document.getElementById("clear-filters"),
  emptyState: document.getElementById("empty-state"),
  providerCount: document.getElementById("provider-count"),
  directCount: document.getElementById("direct-count"),
  chinaCount: document.getElementById("china-count"),
  langEn: document.getElementById("lang-en"),
  langZh: document.getElementById("lang-zh")
};

const state = {
  activeFilter: "all",
  query: "",
  lang: navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"
};

function normalize(value) {
  return value.toLowerCase().trim();
}

function localizedProvider(provider) {
  if (state.lang === "en") return provider;
  const override = providerZh[provider.name];
  if (!override) return provider;
  return { ...provider, ...override };
}

function getFilterLabel(filter) {
  const labels = ui[state.lang].results;
  return labels[filter] ?? (state.lang === "zh" ? "渠道" : "providers");
}

function matchesFilter(provider, activeFilter) {
  if (activeFilter === "all") return true;
  if (provider.category === activeFilter) return true;
  return provider.tags.includes(activeFilter);
}

function matchesQuery(provider, query) {
  if (!query) return true;

  const haystack = [
    provider.name,
    provider.summary,
    provider.tag,
    provider.bestFor,
    provider.freeModel,
    provider.region,
    provider.setup,
    provider.mode,
    ...provider.tags,
    ...provider.facts
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function getVisibleProviders() {
  return providers.filter(
    (provider) =>
      matchesFilter(provider, state.activeFilter) && matchesQuery(provider, state.query)
  );
}

function updateResultsSummary(count) {
  const filterLabel = getFilterLabel(state.activeFilter);
  const queryLabel = state.query ? ` matching "${state.query}"` : "";
  elements.resultsSummary.textContent = `${count} ${filterLabel}${queryLabel}.`;
}

function getChinaFit(provider) {
  if (provider.tags.includes("china") || provider.category === "local") return "High";
  return "Medium";
}

function getNoCard(provider) {
  if (provider.category === "local" || provider.category === "oauth") return "Yes";
  if (provider.name === "Alibaba Cloud DashScope" || provider.name === "Volcengine Ark (Doubao)") {
    return "No";
  }
  return "Yes";
}

function getNativeSupport(provider) {
  if (provider.category === "gateway" && !provider.links[0][0].includes("OpenClaw")) return "No";
  return "Yes";
}

function renderComparisonTable(visibleProviders) {
  elements.comparisonBody.innerHTML = "";

  visibleProviders.forEach((provider) => {
    const content = localizedProvider(provider);
    const node = elements.comparisonTemplate.content.cloneNode(true);
    node.querySelector(".comparison-table__provider").textContent = content.name;
    node.querySelector(".comparison-table__free-type").textContent = content.freeModel;
    node.querySelector(".comparison-table__china-fit").textContent = getChinaFit(provider);
    node.querySelector(".comparison-table__no-card").textContent = getNoCard(provider);
    node.querySelector(".comparison-table__native").textContent = getNativeSupport(provider);
    node.querySelector(".comparison-table__best-for").textContent = content.bestFor;
    node.querySelector(".comparison-table__setup").textContent = content.setup;
    elements.comparisonBody.appendChild(node);
  });
}

function renderProviders() {
  const visibleProviders = getVisibleProviders();
  elements.grid.innerHTML = "";

  visibleProviders.forEach((provider, index) => {
    const content = localizedProvider(provider);
    const node = elements.template.content.cloneNode(true);
    node.querySelector(".provider-card__tag").textContent = content.tag;
    node.querySelector(".provider-card__name").textContent = content.name;
    node.querySelector(".provider-card__mode").textContent = content.mode;
    node.querySelector(".provider-card__summary").textContent = content.summary;
    node.querySelector(".provider-card__best-for").textContent = content.bestFor;
    node.querySelector(".provider-card__free-model").textContent = content.freeModel;
    node.querySelector(".provider-card__region").textContent = content.region;
    node.querySelector(".provider-card__setup").textContent = content.setup;

    const snippet = node.querySelector(".provider-card__snippet code");
    snippet.textContent = provider.command;

    const card = node.querySelector(".provider-card");
    card.style.animationDelay = `${index * 35}ms`;

    const factsList = node.querySelector(".provider-card__facts");

    const copyButton = node.querySelector(".copy-button");
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(provider.command);
        copyButton.textContent = ui[state.lang].cardTerms[6];
        copyButton.classList.add("is-copied");
        window.setTimeout(() => {
          copyButton.textContent = ui[state.lang].cardTerms[5];
          copyButton.classList.remove("is-copied");
        }, 1200);
      } catch {
        copyButton.textContent = ui[state.lang].cardTerms[7];
        window.setTimeout(() => {
          copyButton.textContent = ui[state.lang].cardTerms[5];
        }, 1200);
      }
    });
    copyButton.textContent = ui[state.lang].cardTerms[5];

    const linkWrap = node.querySelector(".provider-card__links");
    content.links.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = label;
      linkWrap.appendChild(link);
    });

    content.facts.forEach((fact) => {
      const item = document.createElement("li");
      item.textContent = fact;
      factsList.appendChild(item);
    });

    elements.grid.appendChild(node);
  });

  renderComparisonTable(visibleProviders);
  elements.emptyState.hidden = visibleProviders.length !== 0;
  updateResultsSummary(visibleProviders.length);
}

function syncActiveChip() {
  elements.filterBar.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === state.activeFilter);
  });
}

function bindFilters() {
  elements.filterBar.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) return;

    state.activeFilter = target.dataset.filter;
    syncActiveChip();
    renderProviders();
  });
}

function bindSearch() {
  elements.search.addEventListener("input", (event) => {
    state.query = normalize(event.target.value);
    renderProviders();
  });
}

function bindLanguageSwitch() {
  elements.langEn.addEventListener("click", () => setLanguage("en"));
  elements.langZh.addEventListener("click", () => setLanguage("zh"));
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = ui[lang].lang;
  document.title = ui[lang].title;
  document.querySelector('meta[name="description"]').setAttribute("content", ui[lang].description);
  document.querySelector('meta[name="keywords"]').setAttribute("content", ui[lang].keywords);
  document.querySelector('meta[property="og:title"]').setAttribute("content", ui[lang].title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", ui[lang].ogDescription);
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", ui[lang].title);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", ui[lang].twitterDescription);

  elements.langEn.classList.toggle("is-active", lang === "en");
  elements.langZh.classList.toggle("is-active", lang === "zh");

  const t = ui[lang];
  setText("brand-subtitle", t.brandSubtitle);
  setText("nav-comparison", t.navComparison);
  setText("nav-providers", t.navProviders);
  setText("hero-eyebrow", t.heroEyebrow);
  setText("hero-title", t.heroTitle);
  setText("hero-lead", t.heroLead);
  setText("hero-cta-primary", t.heroCtaPrimary);
  setText("hero-cta-secondary", t.heroCtaSecondary);
  setText("trust-label-1", t.trustLabel1);
  setText("trust-label-2", t.trustLabel2);
  setText("trust-value-2", t.trustValue2);
  setText("hero-card-kicker", t.heroCardKicker);
  document.getElementById("hero-card-list").innerHTML = t.heroCardList.map((item) => `<li>${item}</li>`).join("");
  setText("metric-label-1", t.metric1);
  setText("metric-label-2", t.metric2);
  setText("metric-label-3", t.metric3);
  setText("comparison-kicker", t.comparisonKicker);
  setText("comparison-title", t.comparisonTitle);
  setText("comparison-lead", t.comparisonLead);
  setText("search-label", t.searchLabel);
  elements.search.placeholder = t.searchPlaceholder;
  Array.from(elements.filterBar.querySelectorAll(".chip")).forEach((chip) => {
    chip.textContent = t.chipLabels[chip.dataset.filter];
  });
  elements.clearFilters.textContent = t.reset;
  ["provider", "free-type", "china-fit", "no-card", "native", "best-for", "setup"].forEach((key, index) => {
    setText(`th-${key}`, t.tableHeaders[index]);
  });
  setText("logic-kicker", t.logicKicker);
  setText("logic-title", t.logicTitle);
  setText("logic-1-title", t.logic1Title);
  setText("logic-1-body", t.logic1Body);
  setText("logic-2-title", t.logic2Title);
  setText("logic-2-body", t.logic2Body);
  setText("logic-3-title", t.logic3Title);
  setText("logic-3-body", t.logic3Body);
  setText("details-kicker", t.detailsKicker);
  setText("details-title", t.detailsTitle);
  setText("details-lead", t.detailsLead);
  setText("empty-title", t.emptyTitle);
  setText("empty-body", t.emptyBody);
  setText("picks-kicker", t.picksKicker);
  setText("picks-title", t.picksTitle);
  t.picks.forEach((pick, index) => {
    setText(`pick-${index + 1}-title`, pick[0]);
    setText(`pick-${index + 1}-body`, pick[1]);
  });
  setText("notes-kicker", t.notesKicker);
  setText("notes-title", t.notesTitle);
  t.notes.forEach((note, index) => {
    setText(`note-${index + 1}-title`, note[0]);
    setText(`note-${index + 1}-body`, note[1]);
  });
  setText("card-dt-best-for", t.cardTerms[0]);
  setText("card-dt-free-access", t.cardTerms[1]);
  setText("card-dt-region-fit", t.cardTerms[2]);
  setText("card-dt-setup-effort", t.cardTerms[3]);
  setText("snippet-title", t.cardTerms[4]);
  renderProviders();
}

function bindReset() {
  elements.clearFilters.addEventListener("click", () => {
    state.activeFilter = "all";
    state.query = "";
    elements.search.value = "";
    syncActiveChip();
    renderProviders();
  });
}

function setStats() {
  elements.providerCount.textContent = String(providers.length);
  elements.directCount.textContent = String(
    providers.filter((provider) => provider.category === "direct").length
  );
  elements.chinaCount.textContent = String(
    providers.filter((provider) => provider.tags.includes("china")).length
  );
}

setStats();
bindFilters();
bindSearch();
bindReset();
bindLanguageSwitch();
setLanguage(state.lang);
