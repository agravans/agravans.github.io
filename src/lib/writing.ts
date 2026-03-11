export const WRITING = [
  {
    slug: "building-lifeos",
    title: "Building LifeOS from personal chaos",
    excerpt: "What I learned turning a messy productivity system into an AI-native personal operating system.",
    category: "Build Logs",
    date: "2024",
    readTime: "8 min",
    featured: true,
    series: null,
  },
  {
    slug: "what-productivity-means-with-ai",
    title: "The 50 Questions That Make AI Personal (Part 1)",
    excerpt: "A framework for giving AI enough structured context to become a personalized operating layer instead of a generic assistant.",
    category: "Building the ultimate Productivity AI tool",
    date: "2026",
    readTime: "5 min",
    featured: false,
    series: { name: "Building the ultimate Productivity AI tool", part: 1 },
  },
  {
    slug: "turning-gpt-into-productivity-agent",
    title: "Turning GPT into a Personalized Productivity Agent (Part 2)",
    excerpt: "The Prompt + Memory Pack framework — upgrade any AI assistant into a productivity system that understands who you are.",
    category: "Building the ultimate Productivity AI tool",
    date: "2026",
    readTime: "12 min",
    featured: false,
    series: { name: "Building the ultimate Productivity AI tool", part: 2 },
  },
];

export const WRITING_CATEGORIES = [
  "All",
  "Build Logs",
  "Building the ultimate Productivity AI tool",
];

export function getWriting(slug: string) {
  return WRITING.find((w) => w.slug === slug);
}
