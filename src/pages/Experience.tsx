import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    company: "Gameopedia",
    role: "Generative AI Engineer, Research & Engineering",
    period: "Dec 2024 – Present",
    bullets: [
      "Built video-understanding agentic pipelines with Gemini 2.5 Flash; 3,000+ videos, 50+ highlights each, +1.2% watch-time",
      "Generalized pipeline for sports, trailers, vlogs, 10+ hr streams",
      "Deployed Game Marketing Sentiment Intelligence—20k+ multimodal reviews → 60+ categories; cost $8→$0.30/input",
      "Taxonomy agent: LoRA on Small-LM, DeepSeek-R1, LangGraph; 78% semantic similarity, 100+ insights",
      "Auto-evolving prompt optimization: 33%→88% accuracy in 3 iterations (60+ experiments)",
    ],
  },
  {
    company: "Stealth Startup (Fintech)",
    role: "ML Engineer & AI Researcher",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Designed agentic workflows; hybrid RAG (Graph+LanceDB) for 1M financial prospectuses",
      "Financial analysis agent on AWS Bedrock, Groq, LangGraph",
      "POCs: HYDE RAG, CRAG, Reflexion Agents",
      "Equity Research Agent: 7 functionalities for investment analysts with Human-in-the-Loop",
    ],
  },
  {
    company: "Arcesium (DE Shaw Group)",
    role: "Machine Learning Engineer",
    period: "Mar 2023 – Aug 2024",
    bullets: [
      "Code Translator: 350 Perl→Python with Vicuna13b, 75% accuracy; evaluated 15 LLMs",
      "Tax Character Prediction: 98% accuracy on 250+ docs",
      "LLM-based test generation: 32%→80% coverage, 24k test cases",
      "Domain-aware coding assistant with depth-7 knowledge graphs",
      "LLM ops: AWS KnowledgeBases, Langfuse for 10k+ flows; Guardrails saved $3/10 gens",
    ],
  },
];

export function Experience() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Experience</h1>
        <p className="text-[var(--text-muted)] mb-16">
          Production AI across fintech, gaming, and enterprise
        </p>

        <div className="space-y-0">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 pb-16 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
              <div className="absolute left-[4px] top-5 bottom-0 w-px bg-[var(--border)]" />
              <div className="mb-3">
                <h2 className="font-semibold text-lg">{e.company}</h2>
                <p className="text-[var(--text-muted)] text-sm">{e.role}</p>
                <p className="text-xs text-[var(--text-dim)] font-mono mt-1">{e.period}</p>
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="text-sm text-[var(--text-muted)] leading-relaxed flex gap-2">
                    <span className="text-[var(--accent)] shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
