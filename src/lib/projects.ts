export type ProjectLink = { github?: string; demo?: string };

export type Lane =
  | "Agentic AI"
  | "Generative Media"
  | "Applied Research"
  | "Product Systems";

export const LANE_ORDER: Lane[] = [
  "Agentic AI",
  "Generative Media",
  "Applied Research",
  "Product Systems",
];

export const LANE_META: Record<
  Lane,
  { label: string; hint: string; tone: "cyan" | "amber" | "rose" | "zinc" }
> = {
  "Agentic AI": {
    label: "Agentic AI & RAG",
    hint: "Orchestrators, retrieval, ranking, Text-to-SQL, evaluation.",
    tone: "cyan",
  },
  "Generative Media": {
    label: "Generative Media",
    hint: "Film, voice, dubbing, and audio generation pipelines.",
    tone: "amber",
  },
  "Applied Research": {
    label: "Research & Insights",
    hint: "Demand signals, sentiment, clustering, and evidence-backed analysis.",
    tone: "rose",
  },
  "Product Systems": {
    label: "Product Systems",
    hint: "AI-native products with assistants that can act.",
    tone: "zinc",
  },
};

export const HOME_FEATURED_SLUGS = [
  "fanpulse",
  "productivity-os",
  "lifeos",
  "enterprise-knowledge-agent",
];

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
    lane: "Agentic AI" as Lane,
    problem: "Enterprise teams cannot reliably ask organization-level questions across knowledge bases and warehouse tables, then get grounded analysis without a data team in the loop.",
    whyMatters: "This is the FDE-shaped problem: ambiguous workflow, heterogeneous data, retrieval plus SQL, evaluation, cost and adoption.",
    outcome: "Pattern used in production org-scale agents: +40% retrieval recall and accuracy, cost reduction 54% ($1.30 to $0.60 per query), +50% SQL generation precision, 250+ concurrent users across domains.",
    stack: ["Python", "Databricks", "SQL", "RAG", "Reranking", "LiteLLM", "OpenWebUI"],
    role: "Generative AI Engineer",
    timeline: "2026",
    links: { github: null, demo: null },
    caseStudy: {
      users: "Internal business, data and operations teams asking organization-level questions.",
      constraints: "Cannot publish customer data, table schemas or proprietary prompts. Architecture is generalized.",
      architecture: "User -> ReAct orchestrator -> routing to RAG, Text-to-SQL or analytics sub-agents (20+ tools, 12+ skills) -> reranker -> model gateway -> data warehouse -> evidence / analytics -> tracing and evaluation.",
      data: "Enterprise knowledge bases plus structured warehouse tables. Schema/table metadata used for routing and Text-to-SQL context.",
      modelAgent: "ReAct orchestrator with Text-to-SQL and analytics sub-agents. Cross-encoders and Gemini embeddings via Qdrant, KB routing, 2-pass filtering with Cohere reranker and aggregated scoring. Claude Opus-family models via a Bedrock/LiteLLM gateway.",
      backend: "Python orchestration, OpenWebUI front door, Databricks SQL execution, dashboard/insight generation.",
      evaluation: "Retrieval recall and accuracy, SQL generation precision, cost per query, latency, groundedness of analytical answers.",
      deployment: "Organization-wide internal deployment serving 250+ concurrent users across domains. Not claimed as an external customer engagement.",
      latencyCost: "Cost reduction 54% ($1.30 to $0.60 per query). Routing and metadata-aware context to keep tokens down.",
      failureModes: "Wrong table selection, incomplete schema context, retrieval of stale docs, over-long context, tool-call loops. Mitigated with routing, metadata, reranking and evals.",
      next: "Permissions/ACL-aware retrieval, richer eval harness, incident playbooks, and a public FDE-style demo on an open dataset.",
    },
  },
  {
    slug: "lifeos",
    title: "LifeOS",
    tagline: "AI-native personal OS: missions, goals, execution and a gateway assistant that can propose and apply changes.",
    summary: "Personal operating system with skill packs and a propose/apply/undo assistant.",
    overview: "Full-stack Next.js 16 app with Server Actions (no REST layer), Prisma 7 + PostgreSQL, JWT auth, and Zod validation. Home is the product: capture, 90-day mission progress, today blocks, and an overlay assistant (Current) rather than a generic chatbot page. Modules span missions, goals, projects, tasks, daily blocks, habits, ideas, knowledge, finance, career, review and proof-of-work. Gateway runtime routes to specialist capability packs and skill summaries, then returns a plan the user can apply or undo against an audit ledger. Cascading progress recalculation propagates task completion through project → goal → mission. React.cache and unstable_cache (30s–5min TTL) with tag-based invalidation. Dual-linking (Goal + Project) with auto-suggestion across entry points.",
    category: "Product Systems",
    lane: "Product Systems" as Lane,
    problem: "Productivity tools are either too rigid or too shallow—they don't understand context, energy, or long-term goals.",
    whyMatters: "Founders and operators need a system that reduces prompt burden and builds structure around their life instead of forcing manual planning.",
    outcome: "Shipped a production-style personal OS with a HITL gateway assistant, skill packs, and cascading mission → goal → project progress.",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "Server Actions", "AI SDK", "JWT"],
    role: "Founder & Engineer",
    timeline: "2024 – Present",
    links: { github: "https://github.com/agravans/lifeOS", demo: null },
    caseStudy: {
      users: "Ambitious builders who need one system for missions, goals, tasks and an assistant that can propose and apply changes.",
      constraints: "No separate backend service. Next.js is the backend.",
      architecture: "App Router + Server Actions + Prisma/PostgreSQL. Gateway runtime routes to specialist agents. Propose/apply/undo with an audit ledger.",
      data: "Missions, goals, projects, tasks, blocks, habits, ideas, career and proof-of-work, all linkable to a 90-day mission.",
      modelAgent: "Gateway-routed assistant with capability packs, skill summaries and HITL apply.",
      backend: "JWT auth, React.cache / unstable_cache, cascading progress recalculation, tag-based invalidation.",
      evaluation: "Manual review of propose/apply plans. Idempotent apply via planId. Undo against the audit ledger.",
      deployment: "Vercel. Production-style personal OS, not a toy chatbot wrapper.",
      latencyCost: "Caching and scoped tool access keep assistant calls gated by propose/apply.",
      failureModes: "Double-apply, over-broad tool access. Mitigated with planId idempotency, undo, scoped capability packs.",
      next: "Docker/Kubernetes, OpenTelemetry, queues, rate limits and load tests once those are implemented for real.",
    },
  },
  {
    slug: "fanpulse",
    title: "fanPulse",
    tagline: "Local creative intelligence studio: evidence rooms, citation-gated research briefs, and versioned story drafts.",
    summary: "FastAPI + SQLite Product Studio app. Provenance-preserving evidence, bounded research jobs, optional Ollama and Reddit OAuth search.",
    overview: "fanPulse is the Product Studio implementation of a local entertainment workspace: Discover, Evidence room, Story studio, and Research history. Operators attach real excerpts with source URLs, run decision-focused research questions against project evidence, and keep script/canon versions with diffs. Briefs must cite evidence IDs and quotes that actually appear in the cited text — unknown IDs and absent quotes are rejected. Optional Ollama generation and read-only Reddit OAuth search; watches enqueue research while the local server runs. This repository is a single-user loopback product, not a hosted SaaS and not the OWUI agent-platform experiment.",
    category: "Research",
    lane: "Applied Research" as Lane,
    problem: "Creative teams mix hunches, screenshots and chat dumps. They need a workspace that keeps provenance, refuses ungrounded briefs, and versions story changes.",
    whyMatters: "Greenlights and story development need cited evidence and inspectable drafts, not a vibe check from a handful of threads.",
    outcome: "Shipped a local FastAPI studio with citation gates, evidence deduplication, watchable research jobs, script diffs, and pytest coverage for the product invariants. GitHub: agravans/fanPulse.",
    stack: ["FastAPI", "SQLite", "Ollama", "Reddit OAuth", "Python", "vanilla JS"],
    role: "Founder & Engineer",
    timeline: "2026",
    links: { github: "https://github.com/agravans/fanPulse", demo: null },
    caseStudy: {
      users: "A single creative/operator building entertainment projects who needs evidence, briefs and drafts in one local workspace.",
      constraints: "Loopback only. Reddit is optional OAuth, read-only. No HTML scraping. Model generation is optional. Do not expose the server publicly.",
      architecture: "Browser -> FastAPI :8210 -> one worker -> SQLite. Optional Ollama for briefs/revisions. Optional Reddit search adapter. Watches enqueue bounded jobs at 1–168 hour intervals.",
      data: "Projects, source excerpts with provenance, deduplicated evidence versions, brief history (new evidence IDs), saved script/canon versions. SQLite file local to the operator.",
      modelAgent: "Optional local Ollama. Structured observations with exact quotes, evidence IDs, uncertainty, counterevidence, missing data and experiments. Semantic interpretation is not auto-verified beyond quote/ID checks.",
      backend: "Python FastAPI, Uvicorn, SQLite, static web UI. Interrupted-job marking, export, unsafe URL rejection, local-origin protection.",
      evaluation: "pytest: evidence scope/dedup, quote/citation rejection, empty-evidence refusal, version preservation, cross-project rejection, watch dedup, origin/URL safety. Model returns mocked in tests.",
      deployment: "Local-first Product Studio. Private GitHub repository on master. Not a public SaaS with paying customers.",
      latencyCost: "CRUD works without a model. Generation cost is local Ollama if configured; no hosted LLM required.",
      failureModes: "Ungrounded quotes, cross-project leakage, watch bursts, non-local exposure. Mitigated with citation gates, project scope, queue caps, loopback bind.",
      next: "Public demo pack, stronger source adapters, and quality evals on live model briefs — without mixing OWUI harvest metrics into this app.",
    },
  },
  {
    slug: "productivity-os",
    title: "Productivity OS",
    tagline: "Notes-first Today companion: original notes, confirmable memory, and explainable deterministic planning.",
    summary: "Local FastAPI Product Studio app. Capture persists immediately; optional Ollama organizes notes; the planner is fully inspectable.",
    overview: "Productivity OS is a calm Today dashboard plus notes, What matters context, and a planner that uses explicit estimates, energy, due dates and busy windows. Original notes are never silently overwritten. Suggested memory is distinct from user-confirmed memory. Extraction is atomic and will not re-process the same note. This is a local web foundation for an eventual iOS product — not LifeOS (Next.js personal OS) and not the OWUI LifeOS agent.",
    category: "Product Systems",
    lane: "Product Systems" as Lane,
    problem: "Chat-based planning invents structure and hides why a block was scheduled. Notes, tasks and context live in different tools.",
    whyMatters: "A useful productivity agent has to preserve source notes, let the operator correct memory, and explain the plan — before it tries to be autonomous.",
    outcome: "Shipped a loopback FastAPI app with Today planning, original-note preservation, confirmable memory, pytest for capacity/energy/progress invariants. GitHub: agravans/productivityOS.",
    stack: ["FastAPI", "SQLite", "Ollama", "Python", "vanilla JS"],
    role: "Founder & Engineer",
    timeline: "2026",
    links: { github: "https://github.com/agravans/productivityOS", demo: null },
    caseStudy: {
      users: "A single operator who wants capture + today planning locally, with the option to add a model later.",
      constraints: "Loopback only. No calendar/Notion/WhatsApp sync. Quiet hours are stored preferences, not a notification service. Cloud model adapters are not implemented.",
      architecture: "Browser -> FastAPI :8220 -> SQLite. Optional Ollama organizes notes in the background using profile, recent items and confirmed memories.",
      data: "Original notes, tasks/goals/projects/ideas, suggested vs confirmed memory, profile timezone and preferences, audit records, export.",
      modelAgent: "Optional local Ollama for structured extraction (bounded context). Planner is deterministic — not a learned energy model.",
      backend: "Python FastAPI, Uvicorn, SQLite, static web UI. Rejects invalid and cross-origin input.",
      evaluation: "pytest: busy-window/capacity, low-energy deferral, done-task exclusion, partial progress, note preservation without a model, atomic extraction, memory confirm/delete, uncertainty and origin checks.",
      deployment: "Local Product Studio. Private GitHub on master. Native iOS / WidgetKit remain future work.",
      latencyCost: "Notes and planning work with zero model calls. Extraction cost is local Ollama when OLLAMA_MODEL is set.",
      failureModes: "Misclassified notes, double extraction, high-focus work on low-energy days, capacity overflow. Mitigated with atomic processing, clarification questions, energy holds, pending overflow.",
      next: "Calendar OAuth, iOS capture, and honest eval of extraction quality on live models.",
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
    lane: "Generative Media" as Lane,
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
    lane: "Generative Media" as Lane,
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
    lane: "Agentic AI" as Lane,
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
    lane: "Applied Research" as Lane,
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
  { slug: "audio-intelligence", title: "Audio Intelligence Studio", desc: "16-stage ML pipeline: VAD, faster-whisper, pyannote, BERTopic, FAISS RAG.", stack: ["FastAPI", "Next.js", "Ollama"], category: "Agents", lane: "Generative Media" as Lane },
  { slug: "skive-ai", title: "skive.ai", desc: "Multi-agent Claude workflow to structure 7,000 KYC docs; 10hr verification cut.", stack: ["Claude", "Multi-agent"], category: "Workflow AI", lane: "Agentic AI" as Lane },
  { slug: "video-game-rec", title: "Video Game Recommendation", desc: "Cosine similarity from 30k Steam/Stadia reviews; text feature engineering.", stack: ["NLP", "Recommendation"], category: "Research", lane: "Applied Research" as Lane },
];

export const PROJECT_FILTERS = ["All", ...LANE_ORDER] as const;

export function getProject(slug: string) {
  return FLAGSHIP_PROJECTS.find((p) => p.slug === slug) ?? SUPPORTING_PROJECTS.find((p) => p.slug === slug);
}

export function getLane(project: { lane?: Lane }): Lane {
  return project.lane ?? "Agentic AI";
}
