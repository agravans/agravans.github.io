import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_GROUPS = [
  {
    label: "GenAI & NLP",
    items: [
      "LLMs",
      "Transformers",
      "LoRA/PEFT",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Guardrails",
      "Langfuse",
      "LiteLLM",
      "Gemini",
      "Ollama",
      "Video AI",
    ],
  },
  {
    label: "Data Science & ML",
    items: [
      "Supervised/Unsupervised Learning",
      "Statistical Modeling",
      "Feature Engineering",
      "Deep Learning",
      "Transfer Learning",
      "Model Evaluation (ROC-AUC, F1, BLEU, ROUGE)",
    ],
  },
  {
    label: "Engineering",
    items: [
      "Python (Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch, HuggingFace)",
      "SQL",
      "FastAPI",
      "Flask",
      "Django",
      "Redis",
      "GraphDB",
      "React",
      "Next.js",
      "Prisma",
      "AWS Bedrock",
      "Google Vertex AI",
      "MLOps",
      "Linux",
      "Git",
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-bold mb-2"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[var(--text-muted)] mb-12"
        >
          Production tooling for AI systems
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="font-semibold text-sm text-[var(--accent)] mb-4 uppercase tracking-wider">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
