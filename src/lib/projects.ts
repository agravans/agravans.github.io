export type ProjectLink = { github?: string; demo?: string };

export const FLAGSHIP_PROJECTS = [
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
  },
  {
    slug: "multimodal-film-stack",
    title: "AI Film / Multimodal Video Stack",
    tagline: "Agentic film generation platform—screenplay to shots with character and environment consistency.",
    summary: "Agentic workflows for execution and planning.",
    overview: "Orchestration layer with script, character, environment, and director agents. Reusable characters, scenes, and worlds. LangGraph-based multi-agent workflow: screenplay parsing, character and environment state, shot planning, and consistent generation. Enables long-form, director-controlled output—not single-scene clips.",
    category: "Multimodal",
    problem: "Generative video tools produce clips, not coherent narratives. No orchestration for long-form, director-controlled output.",
    whyMatters: "Creators and studios need AI that understands story structure, shot planning, and cinematic coherence—not just single-scene generation.",
    outcome: "Orchestration layer with script, character, environment, and director agents. Reusable characters, scenes, worlds.",
    stack: ["LangGraph", "OpenAI", "Anthropic", "Python", "FastAPI"],
    role: "Builder",
    timeline: "2024 – Present",
    links: { github: null, demo: null },
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

export const PROJECT_FILTERS = ["All", "RAG", "Agents", "Multimodal", "Workflow AI", "Research", "Product Systems"];

export function getProject(slug: string) {
  return FLAGSHIP_PROJECTS.find((p) => p.slug === slug) ?? SUPPORTING_PROJECTS.find((p) => p.slug === slug);
}
