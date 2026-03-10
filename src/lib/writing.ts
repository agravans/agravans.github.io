export const WRITING = [
  {
    slug: "building-lifeos",
    title: "Building LifeOS from personal chaos",
    excerpt: "What I learned turning a messy productivity system into an AI-native personal operating system.",
    category: "Build Logs",
    date: "2024",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "useful-ai-beyond-demos",
    title: "What makes AI systems useful beyond demos",
    excerpt: "Latency, cost, fallbacks, observability—what it takes for AI to earn its place in production.",
    category: "AI Systems",
    date: "2024",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "rag-agents-product",
    title: "RAG, agents, and the difference between prototypes and products",
    excerpt: "How I think about connecting retrieval, orchestration, and reasoning to actual user value.",
    category: "Product Thinking",
    date: "2024",
    readTime: "7 min",
    featured: true,
  },
  {
    slug: "what-productivity-means-with-ai",
    title: "What Productivity Means with AI?",
    excerpt: "A framework for giving AI enough structured context to become a personalized operating layer instead of a generic assistant.",
    category: "AI Systems",
    date: "2026",
    readTime: "5 min",
  },
];

export const WRITING_CATEGORIES = [
  "All",
  "Build Logs",
  "AI Systems",
  "Product Thinking",
  "Career",
];

export function getWriting(slug: string) {
  return WRITING.find((w) => w.slug === slug);
}
