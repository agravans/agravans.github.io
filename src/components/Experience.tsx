import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EXPERIENCE = [
  {
    company: "Gameopedia",
    role: "Generative AI Engineer, Research & Engineering",
    period: "Dec 2024 – Present",
    bullets: [
      "Built video-understanding agentic pipelines with Gemini 2.5 Flash; 3,000+ videos, 50+ highlights each, +1.2% watch-time",
      "Generalized pipeline for sports, trailers, vlogs, 10+ hr streams",
      "Deployed Game Marketing Sentiment Intelligence — 20k+ multimodal reviews → 60+ sentiment categories; cost $8→$0.30/input via batching",
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
      "Code Translator: 350 Perl→Python functions with Vicuna13b, 75% accuracy; evaluated 15 LLMs",
      "Tax Character Prediction: 98% accuracy on 250+ docs",
      "LLM-based test generation: 32%→80% coverage, 24k test cases",
      "Domain-aware coding assistant with depth-7 knowledge graphs",
      "LLM ops: AWS KnowledgeBases, Langfuse for 10k+ flows; Guardrails saved $3/10 gens",
    ],
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[var(--accent)]" />
      <div className="absolute left-[5px] top-6 bottom-0 w-px bg-[var(--border)]" />
      <div className="mb-2">
        <h3 className="font-semibold text-lg">{item.company}</h3>
        <p className="text-[var(--text-muted)] text-sm">{item.role}</p>
        <p className="text-[var(--text-dim)] text-xs font-mono mt-1">
          {item.period}
        </p>
      </div>
      <ul className="space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-sm text-[var(--text-muted)] leading-relaxed flex gap-2">
            <span className="text-[var(--accent)] mt-1.5">•</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-2"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] mb-12"
        >
          Production AI systems across fintech, gaming, and enterprise
        </motion.p>
        <div>
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
