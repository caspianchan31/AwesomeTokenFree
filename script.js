const providers = [
  {
    name: "Qwen OAuth",
    category: "oauth",
    mode: "OAuth 免费",
    summary:
      "OpenClaw 官方文档明确写了 Qwen 的免费层 OAuth 流程，适合不想先绑卡的人。",
    tag: "最直接的白嫖入口",
    facts: [
      "OpenClaw 官方写明：Qwen Coder / Vision 提供免费层 OAuth。",
      "OpenClaw 官方文档给出的额度是每天 2,000 次请求，实际仍受 Qwen 速率限制。",
      "不是传统 API Key，而是设备码登录后由 OpenClaw 管理令牌。"
    ],
    command:
      "openclaw plugins enable qwen-portal-auth\nopenclaw models auth login --provider qwen-portal --set-default",
    links: [
      ["OpenClaw Qwen 文档", "https://docs.openclaw.ai/providers/qwen"],
      ["OpenClaw 模型提供商总览", "https://docs.openclaw.ai/concepts/model-providers"]
    ]
  },
  {
    name: "Google Gemini API",
    category: "direct",
    mode: "直接支持",
    summary:
      "Gemini 是目前最稳妥的免费 API 之一，OpenClaw 内建 `google/*` 提供商，拿到 `GEMINI_API_KEY` 就能上。",
    tag: "免费层稳定",
    facts: [
      "OpenClaw 官方文档列出内建 `google` 提供商，认证字段是 `GEMINI_API_KEY`。",
      "Google 官方价格页显示多个 Gemini 模型存在 Free Tier。",
      "Google 官方限额页公开了免费层 RPM / TPM / RPD。"
    ],
    command:
      "openclaw onboard --auth-choice gemini-api-key\n# 然后选择 google/gemini-* 模型",
    links: [
      ["OpenClaw 模型提供商", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Gemini Pricing", "https://ai.google.dev/pricing"],
      ["Gemini Rate Limits", "https://ai.google.dev/gemini-api/docs/quota"]
    ]
  },
  {
    name: "Groq",
    category: "direct",
    mode: "直接支持",
    summary:
      "Groq 在 OpenClaw 的提供商总览里是内建 provider，官方免费计划公开了可观的请求和 token 限额。",
    tag: "速度很快",
    facts: [
      "OpenClaw 官方文档列出内建 `groq` 提供商，使用 `GROQ_API_KEY`。",
      "Groq 官方限额页提供 Free Plan Limits，可直接看到各模型的每日请求和 token 限制。",
      "Groq 官方文档说明其 OpenAI 兼容 base URL 是 `https://api.groq.com/openai/v1`。"
    ],
    command:
      "export GROQ_API_KEY=\"<your-groq-key>\"\n# 然后在 OpenClaw 里使用 groq/* 模型",
    links: [
      ["OpenClaw 模型提供商", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Groq Rate Limits", "https://console.groq.com/docs/rate-limits"],
      ["Groq OpenAI Compatibility", "https://console.groq.com/docs/openai"]
    ]
  },
  {
    name: "Hugging Face Inference",
    category: "direct",
    mode: "直接支持",
    summary:
      "如果你想一把 token 试很多家模型，HF 是不错的统一入口。OpenClaw 官方专门有 Hugging Face 提供商文档。",
    tag: "统一路由",
    facts: [
      "OpenClaw 官方说明 Hugging Face Inference Providers 可直接接 OpenClaw，使用 `HF_TOKEN` 或 `HUGGINGFACE_HUB_TOKEN`。",
      "HF 官方价格页写明免费用户每月有 `$0.10` credits，且规则注明 `subject to change`。",
      "额度用完后仍可继续使用，但需要额外购买 credits。"
    ],
    command:
      "openclaw onboard --auth-choice huggingface-api-key",
    links: [
      ["OpenClaw Hugging Face 文档", "https://docs.openclaw.ai/providers/huggingface"],
      ["HF Inference Pricing", "https://huggingface.co/docs/api-inference/en/pricing"],
      ["HF Public AI Blog", "https://huggingface.co/blog/inference-providers-publicai"]
    ]
  },
  {
    name: "OpenRouter Free Models",
    category: "direct",
    mode: "直接支持",
    summary:
      "OpenRouter 的价值在于一个 key 覆盖很多模型，并且官方保留 free models 路由，适合轻量试玩 OpenClaw。",
    tag: "低门槛试水",
    facts: [
      "OpenClaw 官方有独立的 OpenRouter 接入页。",
      "OpenRouter 官方 FAQ 说明存在很多免费模型，但免费模型速率较低。",
      "OpenRouter 官方定价页公开了免费用户的每日请求和每分钟限制。"
    ],
    command:
      'openclaw onboard --auth-choice apiKey --token-provider openrouter --token "$OPENROUTER_API_KEY"',
    links: [
      ["OpenClaw OpenRouter 文档", "https://docs.openclaw.ai/providers/openrouter"],
      ["OpenRouter FAQ", "https://openrouter.ai/docs/faq"],
      ["OpenRouter Pricing", "https://openrouter.ai/pricing"]
    ]
  },
  {
    name: "Vercel AI Gateway",
    category: "gateway",
    mode: "统一网关",
    summary:
      "Vercel AI Gateway 不是永久无限免费，但官方提供每月 $5 的免费 credits，而且 OpenClaw 直接支持。",
    tag: "新号体验很强",
    facts: [
      "OpenClaw 官方有 `vercel-ai-gateway` provider 文档，认证字段是 `AI_GATEWAY_API_KEY`。",
      "Vercel 官方价格页写明团队账户有每月 $5 的 AI Gateway 免费额度。",
      "Vercel 官方写明兼容 OpenAI / Anthropic 风格接口，适合做统一出口。"
    ],
    command:
      "openclaw onboard --auth-choice ai-gateway-api-key",
    links: [
      ["OpenClaw Vercel AI Gateway 文档", "https://docs.openclaw.ai/providers/vercel-ai-gateway"],
      ["Vercel AI Gateway Pricing", "https://vercel.com/docs/ai-gateway/pricing"],
      ["Vercel OpenAI-Compatible API", "https://vercel.com/docs/ai-gateway/openai-compat"]
    ]
  },
  {
    name: "Kilo Gateway",
    category: "gateway",
    mode: "统一网关",
    summary:
      "Kilo Gateway 现在对 OpenClaw 也有官方接入文档，而且官方站点提供免费起步 credit 与免费模型。",
    tag: "免费模型比较多",
    facts: [
      "OpenClaw 官方有 `kilocode` provider 文档。",
      "OpenClaw 模型提供商文档写到 Kilo 内建目录里包含多种 `Free` 模型。",
      "Kilo 官方网关页标明 Free / Trial 方案包含 $5 初始 credit；认证页还写明 free models 支持匿名访问。"
    ],
    command:
      "openclaw onboard --kilocode-api-key <your-kilo-key>",
    links: [
      ["OpenClaw Kilo 文档", "https://docs.openclaw.ai/providers/kilocode"],
      ["OpenClaw 模型提供商", "https://docs.openclaw.ai/concepts/model-providers"],
      ["Kilo Gateway", "https://kilo.ai/gateway"],
      ["Kilo Authentication", "https://kilo.ai/docs/gateway/authentication"]
    ]
  }
];

const grid = document.getElementById("providers-grid");
const template = document.getElementById("provider-card-template");
const filterBar = document.getElementById("filters");

function renderProviders(activeFilter = "all") {
  grid.innerHTML = "";

  providers.forEach((provider) => {
    const shouldShow = activeFilter === "all" || provider.category === activeFilter;
    if (!shouldShow) return;

    const node = template.content.cloneNode(true);
    node.querySelector(".provider-card__tag").textContent = provider.tag;
    node.querySelector(".provider-card__name").textContent = provider.name;
    node.querySelector(".provider-card__mode").textContent = provider.mode;
    node.querySelector(".provider-card__summary").textContent = provider.summary;
    node.querySelector(".provider-card__snippet code").textContent = provider.command;

    const factsList = node.querySelector(".provider-card__facts");
    provider.facts.forEach((fact) => {
      const item = document.createElement("li");
      item.textContent = fact;
      factsList.appendChild(item);
    });

    const linkWrap = node.querySelector(".provider-card__links");
    provider.links.forEach(([label, href]) => {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = label;
      linkWrap.appendChild(link);
    });

    grid.appendChild(node);
  });
}

function bindFilters() {
  filterBar.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) return;

    filterBar.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("is-active"));
    target.classList.add("is-active");
    renderProviders(target.dataset.filter);
  });
}

function setStats() {
  document.getElementById("provider-count").textContent = String(providers.length);
  document.getElementById("direct-count").textContent = String(
    providers.filter((item) => item.category === "direct").length
  );
}

setStats();
bindFilters();
renderProviders();
