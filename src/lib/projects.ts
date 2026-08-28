export type ProjectLink = { github?: string; demo?: string };

export type CaseStudy = {
  users: string;
  constraints: string;
  architecture: string;
  data: string;
  modelAgent: string;
  backend: string;
  evaluation: string;
  deployment: string;
  latencyCost: string;
  failureModes: string;
  next: string;
};

export const FLAGSHIP_PROJECTS = [
  {
    slug: "enterprise-knowledge-agent",
    title: "Enterprise Knowledge & Analytics Agent",
    tagline: "Anonymized architecture for org-scale knowledge search, Text-to-SQL and analytics agents.",
    summary: "Generalized pattern from production enterprise agent work: query understanding, routing, RAG, SQL tools, reranking, model gateway, warehouse, tracing.",
    overview: "User questions flow through query understanding, then routing to RAG, SQL or specialized skills. A reranker and model gateway (Bedrock/LiteLLM-style) sit in front of the warehouse. Outputs are evidence, analytics and dashboards, with tracing and evaluation. This page describes a generalized architecture, not confidential implementation details.",
    category: "Agents",
    problem: "Enterprise teams cannot reliably ask organization-level questions across knowledge bases and warehouse tables, then get grounded analysis without a data team in the loop.",
    whyMatters: "This is the FDE-shaped problem: ambiguous workflow, heterogeneous data, retrieval plus SQL, evaluation, cost and adoption.",
    outcome: "Pattern used in production org-scale agents: +30% retrieval accuracy, $1.30 to $0.60 per query, +50% SQL generation precision, concurrent users at scale.",
    stack: ["Python", "Databricks", "SQL", "RAG", "Reranking", "LiteLLM", "OpenWebUI"],
    role: "Generative AI Engineer",
    timeline: "2026",
    links: { github: null, demo: null },
    caseStudy: {
      users: "Internal business, data and operations teams asking organization-level questions.",
      constraints: "Cannot publish customer data, table schemas or proprietary prompts. Architecture is generalized.",
      architecture: "User -> query understanding -> routing -> RAG / SQL / specialized skills -> reranker -> model gateway -> data warehouse -> evidence / analytics -> tracing and evaluation.",
      data: "Enterprise knowledge bases plus structured warehouse tables. Schema/table metadata used for routing and Text-to-SQL context.",
      modelAgent: "Specialized agents and skills. Cross-encoder retrieval with Cohere Rerank-class reranking. Claude Opus-family models via a Bedrock/LiteLLM gateway.",
      backend: "Python orchestration, OpenWebUI front door, Databricks SQL execution, dashboard/insight generation.",
      evaluation: "Retrieval accuracy, SQL generation precision, cost per query, latency, groundedness of analytical answers.",
      deployment: "Organization-wide internal deployment serving concurrent users at scale. Not claimed as an external customer engagement.",
      latencyCost: "Retrieval cost $1.30 to $0.60 per query (54%). Routing and metadata-aware context to keep tokens down.",
      failureModes: "Wrong table selection, incomplete schema context, retrieval of stale docs, over-long context, tool-call loops. Mitigated with routing, metadata, reranking and evals.",
      next: "Permissions/ACL-aware retrieval, richer eval harness, incident playbooks, and a public FDE-style demo on an open dataset.",
    },
  },
  {
    slug: "lifeos",
    title: "LifeOS",
    tagline: "AI-native personal operating system designed to reduce planning overhead and turn intent into action.",
    summary: "Personal productivity OS with AI assistant, goals, projects, and orchestration.",
    overview: "Full-stack Next.js 16 app with Server Actions (no REST layer), Prisma 7 + PostgreSQL, JWT auth, and Zod validation. Modules span missions, goals, projects, tasks, daily blocks, habits, analytics, career hub, and AI assistant. Engineered write-through DailyAggregate and WeeklyAggregate tables to reduce Home/Analytics queries from 15–25 live joins to 1–3 reads. Cascading progress recalculation propagates task completion through project → goal → mission. React.cache and unstable_cache (30s–5min TTL) with tag-based invalidation. Priority-based dual-linking (Goal + Project) with auto-suggestion across entry points.",
    category: "Product Systems",
    problem: "Productivity tools are either too rigid or too shallow—they don't understand context, energy, or long-term goals.",
    whyMatters: "Founders and operators need a system that reduces prompt burden and builds structure around their life instead of forcing manual planning.",
    outcome: "Production-grade personal OS with missions, goals, projects, tasks, daily blocks, habits, analytics. Write-through aggregates reduce queries from 15–25 joins to 1–3 reads.",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "Server Actions", "AI SDK", "JWT"],
    role: "Founder & Engineer",
    timeline: "2024 – Present",
    links: { github: "https://github.com/agravans/lifeOS", demo: null },
    caseStudy: {
      users: "Ambitious builders who need one system for missions, goals, tasks and an assistant that can propose and apply changes.",
      constraints: "No separate backend service. Next.js is the backend. Must stay fast on Home/Analytics.",
      architecture: "App Router + Server Actions + Prisma/PostgreSQL. Gateway runtime routes to specialist agents. Propose/apply/undo with an audit ledger.",
      data: "Missions, goals, projects, tasks, blocks, habits. Write-through DailyAggregate and WeeklyAggregate tables.",
      modelAgent: "Gateway-routed assistant with capability packs, skill summaries and HITL apply.",
      backend: "JWT auth, React.cache / unstable_cache, cascading progress recalculation, tag-based invalidation.",
      evaluation: "Query-load reduction on Home/Analytics (15-25 live joins to 1-3 reads). Manual review of propose/apply plans.",
      deployment: "Vercel. Production-style personal OS, not a toy chatbot wrapper.",
      latencyCost: "Aggregates and caching keep dashboard reads small. Assistant calls are gated by propose/apply.",
      failureModes: "Stale aggregates, double-apply, over-broad tool access. Mitigated with planId idempotency, undo, scoped capability packs.",
      next: "Docker/Kubernetes, OpenTelemetry, queues, rate limits and load tests once those are implemented for real.",
    },
  },
  {
    slug: "video-translation-platform",
    title: "AI L&D Video Translation (Regional Dubbing)",
    tagline:
      "End-to-end pipeline: transcribe, translate, QA, TTS dub, and subtitle—enterprise L&D video in 11+ Indian languages with a human review gate.",
    summary:
      "FastAPI + Celery eight-stage pipeline (FFmpeg, Whisper, Sarvam Mayura/Bulbul, Claude QA); Next.js 15 portal; BFSI glossary; Docker.",
    overview:
      "Full-stack platform for BFSI compliance training and L&D video localized to regional languages. Backend: FastAPI REST (upload, job status, review, download), Celery + Redis for async jobs, eight-stage pipeline—ingest/audio extract (FFmpeg), STT (faster-whisper), translation (Sarvam Mayura), QA and glossary enforcement (Claude + 150+ BFSI terms in Hindi/Tamil), TTS dubbing (Sarvam Bulbul v3), audio sync, SRT burn-in, delivery. Frontend: Next.js 15 app—dashboard, job upload, per-job detail/downloads, per-language human review UI for compliance-critical copy. Ops: docker-compose for API, worker, Redis, and frontend. Economics: ~₹18–30/min/language COGS vs. traditional agency dubbing—designed for scaled L&D programs.",
    category: "Applied AI",
    problem:
      "Enterprise L&D and compliance video in one language excludes most of India; manual dubbing and agency workflows are slow, expensive, and hard to audit for regulated terms.",
    whyMatters:
      "BFSI and regulated teams need repeatable, reviewable localization—not one-off dubbing—with glossary-aware QA before audio ships.",
    outcome:
      "Shipped 8-stage async pipeline with human-in-the-loop review, BFSI glossary module, and Next.js operator portal; open repo with CLI and Docker paths for reproducible runs.",
    stack: [
      "FastAPI",
      "Celery",
      "Redis",
      "Next.js 15",
      "Whisper",
      "Sarvam AI",
      "Claude",
      "FFmpeg",
      "Docker",
    ],
    role: "Founder & Engineer",
    timeline: "2025 – Present",
    links: { github: "https://github.com/agravans/videoTranslation", demo: null },
  },
  {
    slug: "multimodal-film-stack",
    title: "Fiction.ai",
    tagline: "Multi-agent filmmaking — screenplay to shots with character and environment consistency.",
    summary: "Director, Writer, Casting, Art, Cinematography and Editing agents; fal.ai / Runway / Kling / Seedance / Veo; ImageKit.io CDN; ElevenLabs dialogue.",
    overview: "LangGraph orchestration with Director, Writer, Casting, Art, Cinematography and Editing agents. Generation through fal.ai, Runway, Kling, Seedance and Veo. Character and environment assets stored on ImageKit.io for visual consistency. ElevenLabs for character voice and dialogue. Director critique loop for shot approval. Enables long-form, director-controlled output—not single-scene clips.",
    category: "Multimodal",
    problem: "Generative video tools produce clips, not coherent narratives. No orchestration for long-form, director-controlled output.",
    whyMatters: "Creators and studios need AI that understands story structure, shot planning, and cinematic coherence—not just single-scene generation.",
    outcome: "Multi-agent film stack with reusable characters, scenes and worlds; fal.ai + ImageKit.io consistency layer; ElevenLabs dialogue; director critique loop.",
    stack: ["LangGraph", "fal.ai", "ImageKit.io", "ElevenLabs", "Runway", "Kling", "FastAPI"],
    role: "Builder",
    timeline: "2024 – Present",
    links: { github: null, demo: null },
    caseStudy: {
      users: "Creators who need coherent long-form visual stories, not one-off clips.",
      constraints: "Hosted generation APIs, not self-trained video models. Consistency must come from orchestration and asset management.",
      architecture: "LangGraph agents for Director, Writer, Casting, Art, Cinematography and Editing. Director critique loop for shot approval.",
      data: "Character and environment assets on ImageKit.io. Screenplay state passed between agents.",
      modelAgent: "fal.ai, Runway, Kling, Seedance, Veo for visuals. ElevenLabs for dialogue. No claim of training DiT/FSDP stacks.",
      backend: "Python orchestration, asset CDN, generation job sequencing.",
      evaluation: "Director-agent critique against shot requirements and reference frames. Qualitative consistency review.",
      deployment: "Builder project / studio workflow, not a public SaaS claim.",
      latencyCost: "Generation cost dominated by video/image APIs. Asset reuse via ImageKit.io reduces regen.",
      failureModes: "Character drift, environment mismatch, weak shot composition. Mitigated with references, CDN identity, critique loop.",
      next: "A genuine LoRA fine-tune on an open image/video model with dataset cards, VRAM/latency profiles and failure analysis.",
    },
  },
  {
    slug: "research-gap-finder",
    title: "Research Gap Finder",
    tagline: "LangGraph agent for literature synthesis and gap identification across Semantic Scholar, arXiv, OpenAlex.",
    summary: "9-node agent for topic analysis, literature synthesis, gap identification (7–15+ gaps across 8 categories).",
    overview: "LangGraph agentic system ingesting Semantic Scholar, arXiv, and OpenAlex. FastAPI backend with SSE streaming, React/TypeScript frontend. Multi-format export (BibTeX, RIS, DOCX). The 9-node graph: topic analysis → literature search → synthesis → gap identification across 8 categories. Helps researchers position work within existing knowledge and accelerate discovery.",
    category: "RAG",
    problem: "Researchers waste hours manually scanning papers to identify open problems and gaps in the literature.",
    whyMatters: "Accelerates discovery and helps researchers position their work within existing knowledge.",
    outcome: "FastAPI backend with SSE streaming, React frontend, multi-format export (BibTeX, RIS, DOCX).",
    stack: ["LangGraph", "FastAPI", "React", "SSE", "Semantic Scholar", "arXiv", "OpenAlex"],
    role: "Builder",
    timeline: "2024",
    links: { github: "https://github.com/agravans/researchGapAgent", demo: null },
  },
  {
    slug: "enterprise-rag-sentiment",
    title: "Production RAG & Sentiment Intelligence",
    tagline: "Hybrid RAG, taxonomy generation, multimodal sentiment analysis at scale. Cost $8→$0.30/input.",
    summary: "Enterprise-grade retrieval and sentiment pipeline. 20k+ multimodal reviews → 60+ categories.",
    overview: "Hybrid RAG with taxonomy generation and multimodal sentiment analysis at scale. Ingest pipeline for millions of documents. Deployed as MCP server. Cost optimization: $8→$0.30 per input. Classification accuracy improved from 33% to 88% in 3 refinement iterations. Batch processing, observability, and production hardening. Proves deployability for enterprise AI systems.",
    category: "RAG",
    problem: "Enterprises need AI systems that ingest millions of documents and surface structured insights at controlled cost.",
    whyMatters: "Proves deployability—batch processing, cost optimization, observability, and production hardening.",
    outcome: "Deployed as MCP server. 33%→88% classification accuracy in 3 refinement iterations.",
    stack: ["LangGraph", "OpenAI", "Gemini", "LanceDB", "Redis", "MCP"],
    role: "AI Engineer",
    timeline: "2024 – Present",
    links: { github: null, demo: null },
  },
];

export const SUPPORTING_PROJECTS = [
  { slug: "audio-intelligence", title: "Audio Intelligence Studio", desc: "16-stage ML pipeline: VAD, faster-whisper, pyannote, BERTopic, FAISS RAG.", stack: ["FastAPI", "Next.js", "Ollama"], category: "Agents" },
  { slug: "skive-ai", title: "skive.ai", desc: "Multi-agent Claude workflow to structure 7,000 KYC docs; 10hr verification cut.", stack: ["Claude", "Multi-agent"], category: "Workflow AI" },
  { slug: "video-game-rec", title: "Video Game Recommendation", desc: "Cosine similarity from 30k Steam/Stadia reviews; text feature engineering.", stack: ["NLP", "Recommendation"], category: "Research" },
];

export const PROJECT_FILTERS = [
  "All",
  "Applied AI",
  "RAG",
  "Agents",
  "Multimodal",
  "Workflow AI",
  "Research",
  "Product Systems",
];

export function getProject(slug: string) {
  return FLAGSHIP_PROJECTS.find((p) => p.slug === slug) ?? SUPPORTING_PROJECTS.find((p) => p.slug === slug);
}
