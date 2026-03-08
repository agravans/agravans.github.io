export const FLAGSHIP_PROJECTS = [
  {
    slug: "lifeos",
    title: "LifeOS",
    tagline: "Personal productivity OS with AI assistant, goals, projects, and orchestration",
    problem: "Productivity tools are either too rigid or too shallow—they don't understand context, energy, or long-term goals.",
    whyMatters: "Founders and operators need a system that reduces prompt burden and builds structure around their life instead of forcing manual planning.",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "Server Actions", "AI SDK", "JWT"],
    role: "Founder & Engineer",
    timeline: "2024 – Present",
    links: { github: "https://github.com/agravans/lifeOS", live: null },
  },
  {
    slug: "multimodal-film-stack",
    title: "AI Film / Multimodal Video Stack",
    tagline: "Agentic film generation platform—screenplay to shots with character and environment consistency",
    problem: "Generative video tools produce clips, not coherent narratives. No orchestration for long-form, director-controlled output.",
    whyMatters: "Creators and studios need AI that understands story structure, shot planning, and cinematic coherence—not just single-scene generation.",
    stack: ["LangGraph", "OpenAI", "Anthropic", "Python", "FastAPI"],
    role: "Builder",
    timeline: "2024 – Present",
    links: { github: null, live: null },
  },
  {
    slug: "research-gap-finder",
    title: "Research Gap Finder",
    tagline: "LangGraph agent for literature synthesis and gap identification",
    problem: "Researchers waste hours manually scanning papers to identify open problems and gaps in the literature.",
    whyMatters: "Accelerates discovery and helps researchers position their work within existing knowledge.",
    stack: ["LangGraph", "FastAPI", "React", "SSE", "Semantic Scholar", "arXiv", "OpenAlex"],
    role: "Builder",
    timeline: "2024",
    links: { github: "https://github.com/agravans/researchGapAgent", live: null },
  },
  {
    slug: "enterprise-rag-sentiment",
    title: "Production RAG & Sentiment Intelligence",
    tagline: "Hybrid RAG, taxonomy generation, and multimodal sentiment analysis at scale",
    problem: "Enterprises need AI systems that ingest millions of documents and surface structured insights at controlled cost.",
    whyMatters: "Proves deployability—batch processing, cost optimization, observability, and production hardening.",
    stack: ["LangGraph", "OpenAI", "Gemini", "LanceDB", "Redis", "MCP"],
    role: "AI Engineer",
    timeline: "2024 – Present",
    links: { github: null, live: null },
  },
];

export const SUPPORTING_PROJECTS = [
  {
    slug: "audio-intelligence",
    title: "Audio Intelligence Studio",
    desc: "16-stage ML pipeline: VAD, faster-whisper ASR, pyannote diarization, BERTopic, FAISS RAG. FastAPI + async + Next.js. GPU auto-detect.",
    stack: ["FastAPI", "Next.js", "Ollama", "FAISS", "BERTopic"],
  },
  {
    slug: "skive-ai",
    title: "skive.ai",
    desc: "Multi-agent workflow with Anthropic Claude to extract and structure 7,000 KYC documents; cut verification by 10 hours.",
    stack: ["Claude", "Multi-agent"],
  },
  {
    slug: "video-game-rec",
    title: "Video Game Recommendation System",
    desc: "Cosine similarity vectors from 30k Steam/Stadia reviews; text feature engineering for improved vectorization.",
    stack: ["NLP", "Recommendation"],
  },
];

export function getProject(slug: string) {
  return FLAGSHIP_PROJECTS.find((p) => p.slug === slug) ?? SUPPORTING_PROJECTS.find((p) => p.slug === slug);
}
