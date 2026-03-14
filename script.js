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

const scenarios = [
  {
    eyebrow: "Fastest start",
    title: "I just need a working free path now",
    description: "Use the lowest-friction options first: OAuth or built-in direct providers with clean onboarding.",
    filter: "beginner",
    button: "Show easy starts"
  },
  {
    eyebrow: "Direct setup",
    title: "I want official OpenClaw support",
    description: "Prioritize providers with first-class integration and fewer compatibility variables.",
    filter: "direct",
    button: "Show direct providers"
  },
  {
    eyebrow: "Region fit",
    title: "I need options that work well in China",
    description: "Filter toward providers and gateways that are more practical for mainland routing and access.",
    filter: "china",
    button: "Show China-friendly"
  },
  {
    eyebrow: "Zero recurring spend",
    title: "I want to stop paying per token",
    description: "Move routine work local when your usage is heavy enough to justify self-hosting.",
    filter: "local",
    button: "Show local-first"
  }
];

const elements = {
  grid: document.getElementById("providers-grid"),
  template: document.getElementById("provider-card-template"),
  filterBar: document.getElementById("filters"),
  search: document.getElementById("provider-search"),
  resultsSummary: document.getElementById("results-summary"),
  clearFilters: document.getElementById("clear-filters"),
  emptyState: document.getElementById("empty-state"),
  scenarioGrid: document.getElementById("scenario-grid"),
  scenarioTemplate: document.getElementById("scenario-template"),
  providerCount: document.getElementById("provider-count"),
  directCount: document.getElementById("direct-count"),
  chinaCount: document.getElementById("china-count")
};

const state = {
  activeFilter: "all",
  query: ""
};

function normalize(value) {
  return value.toLowerCase().trim();
}

function getFilterLabel(filter) {
  const labels = {
    all: "all providers",
    beginner: "beginner-friendly providers",
    direct: "direct-support providers",
    oauth: "OAuth providers",
    gateway: "gateway providers",
    china: "China-friendly providers",
    local: "local-first providers"
  };

  return labels[filter] ?? "providers";
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

function renderProviders() {
  const visibleProviders = getVisibleProviders();
  elements.grid.innerHTML = "";

  visibleProviders.forEach((provider, index) => {
    const node = elements.template.content.cloneNode(true);
    node.querySelector(".provider-card__tag").textContent = provider.tag;
    node.querySelector(".provider-card__name").textContent = provider.name;
    node.querySelector(".provider-card__mode").textContent = provider.mode;
    node.querySelector(".provider-card__summary").textContent = provider.summary;
    node.querySelector(".provider-card__best-for").textContent = provider.bestFor;
    node.querySelector(".provider-card__free-model").textContent = provider.freeModel;
    node.querySelector(".provider-card__region").textContent = provider.region;
    node.querySelector(".provider-card__setup").textContent = provider.setup;

    const snippet = node.querySelector(".provider-card__snippet code");
    snippet.textContent = provider.command;

    const card = node.querySelector(".provider-card");
    card.style.animationDelay = `${index * 35}ms`;

    const factsList = node.querySelector(".provider-card__facts");
    provider.facts.forEach((fact) => {
      const item = document.createElement("li");
      item.textContent = fact;
      factsList.appendChild(item);
    });

    const copyButton = node.querySelector(".copy-button");
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(provider.command);
        copyButton.textContent = "Copied";
        copyButton.classList.add("is-copied");
        window.setTimeout(() => {
          copyButton.textContent = "Copy";
          copyButton.classList.remove("is-copied");
        }, 1200);
      } catch {
        copyButton.textContent = "Copy failed";
        window.setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 1200);
      }
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

    elements.grid.appendChild(node);
  });

  elements.emptyState.hidden = visibleProviders.length !== 0;
  updateResultsSummary(visibleProviders.length);
}

function renderScenarios() {
  elements.scenarioGrid.innerHTML = "";

  scenarios.forEach((scenario) => {
    const node = elements.scenarioTemplate.content.cloneNode(true);
    node.querySelector(".scenario-card__eyebrow").textContent = scenario.eyebrow;
    node.querySelector(".scenario-card__title").textContent = scenario.title;
    node.querySelector(".scenario-card__description").textContent = scenario.description;

    const button = node.querySelector(".scenario-card__button");
    button.textContent = scenario.button;
    button.addEventListener("click", () => {
      state.activeFilter = scenario.filter;
      syncActiveChip();
      renderProviders();
      document.getElementById("providers").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    elements.scenarioGrid.appendChild(node);
  });
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
renderScenarios();
bindFilters();
bindSearch();
bindReset();
renderProviders();
