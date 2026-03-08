import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Audio Intelligence Studio",
    desc: "16-stage ML pipeline: VAD, faster-whisper ASR, pyannote diarization, BERTopic, FAISS RAG chat. FastAPI + async workers + Next.js 15. GPU auto-detect, per-stage cost ledger, SSE timeline.",
    tags: ["FastAPI", "Next.js", "Ollama", "FAISS", "BERTopic"],
    span: "large",
  },
  {
    title: "LifeOS",
    desc: "Personal productivity OS — missions, goals, projects, tasks, daily blocks, habits, analytics. Next.js 16 Server Actions, Prisma, DailyAggregate for 15–25 joins → 1–3 reads.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "JWT", "Zod"],
    span: "large",
  },
  {
    title: "Research Gap Finder",
    desc: "LangGraph agent ingesting Semantic Scholar, arXiv, OpenAlex. 9-node agent for topic analysis, literature synthesis, gap identification. FastAPI + SSE + React.",
    tags: ["LangGraph", "FastAPI", "React"],
    link: "https://github.com/agravans/researchGapAgent",
    span: "normal",
  },
  {
    title: "skive.ai",
    desc: "Multi-agent workflow with Anthropic Claude to extract and structure 7,000 KYC documents; cut verification by 10 hours.",
    tags: ["Claude", "Multi-agent"],
    span: "normal",
  },
  {
    title: "Video Game Recommendation",
    desc: "Cosine similarity vectors from 30k Steam/Stadia reviews; text feature engineering for improved vectorization.",
    tags: ["NLP", "Recommendation"],
    span: "normal",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--text-dim)] hover:bg-[var(--surface-hover)] transition-all duration-300 group ${
        project.span === "large" ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--accent-dim)] text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)] transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-2"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] mb-12"
        >
          Full-stack ML pipelines and agentic systems
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
