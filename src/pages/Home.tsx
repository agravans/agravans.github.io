import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CTA } from "../components/CTA";
import { FLAGSHIP_PROJECTS } from "../lib/projects";
import { WRITING } from "../lib/writing";
import { ArrowRight, FileText } from "lucide-react";

const EXPERIENCE_SNAPSHOT = [
  {
    company: "Gameopedia",
    role: "Generative AI Engineer",
    period: "Dec 2024 – Present",
    bullets: ["Video-understanding agents; 3k+ videos, +1.2% watch-time", "Cost $8→$0.30/input; 33%→88% classification accuracy"],
  },
  {
    company: "Stealth Fintech",
    role: "ML Engineer & AI Researcher",
    period: "Aug – Nov 2024",
    bullets: ["Hybrid RAG (Graph+LanceDB) for 1M prospectuses", "Equity Research Agent with 7 functionalities"],
  },
  {
    company: "Arcesium (DE Shaw)",
    role: "ML Engineer",
    period: "Mar 2023 – Aug 2024",
    bullets: ["350 Perl→Python with Vicuna; 98% tax classifier", "32%→80% test coverage via LLM-generated cases"],
  },
];

const CAPABILITIES = [
  {
    title: "LLM & RAG Systems",
    desc: "Retrieval-augmented pipelines, embedding strategies, hybrid search. Production deployments with cost control and observability.",
  },
  {
    title: "Agentic Workflows",
    desc: "LangGraph, ReAct, tool use, memory. Orchestration that turns prompts into reliable multi-step systems.",
  },
  {
    title: "Multimodal / Video AI",
    desc: "Video understanding, highlights extraction, sentiment from text+image. Gemini, custom pipelines, batch processing.",
  },
  {
    title: "Production AI Infrastructure",
    desc: "FastAPI, Redis, MongoDB, vector stores. Evaluation, Langfuse, guardrails, and scaling from prototype to deployable.",
  },
];

const SIGNAL_BAND = "3+ years · AI Engineer · GenAI / RAG / Agents / Multimodal · Startup + enterprise · Open to AI Engineer / Founding AI Engineer roles";

export function Home() {
  return (
    <>
      <section className="pt-16 pb-20 px-6">
        <div className="max-w-[var(--max-width)] mx-auto">
          <div className="grid md:grid-cols-[1fr,320px] gap-12 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[var(--accent)] font-mono text-xs uppercase tracking-wider mb-3"
              >
                AI Engineer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                Subandhu Agravanshi
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[var(--text-muted)] leading-relaxed mb-2"
              >
                AI Engineer building production-grade LLM, RAG, agentic, and multimodal systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-[var(--text-muted)] leading-relaxed mb-8"
              >
                I design and ship AI products across retrieval, orchestration, workflow automation, research systems, and video intelligence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CTA />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">Currently building</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[var(--text-dim)]">Project</dt>
                  <dd className="text-[var(--text)]">LifeOS</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-dim)]">Focus</dt>
                  <dd className="text-[var(--text)]">Agents, RAG, Multimodal AI</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-dim)]">Stack</dt>
                  <dd className="text-[var(--text)] font-mono text-xs">Python, FastAPI, LangGraph, Redis, MongoDB, Next.js</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-dim)]">Open to</dt>
                  <dd className="text-[var(--text)]">AI Engineer / Founding AI Engineer</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto">
          <p className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider mb-2">
            Recruiter signal
          </p>
          <p className="text-sm text-[var(--text-muted)]">{SIGNAL_BAND}</p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h2 className="text-xl font-bold mb-2">Selected Work</h2>
          <p className="text-[var(--text-muted)] mb-12">Four flagship projects</p>
          <div className="grid md:grid-cols-2 gap-6">
            {FLAGSHIP_PROJECTS.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--text-dim)] hover:bg-[var(--surface-hover)] transition-colors group"
                >
                  <h3 className="font-semibold text-lg group-hover:text-[var(--accent)] transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 text-xs font-mono rounded bg-[var(--accent-dim)] text-[var(--accent)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-[var(--accent)]">
                    Case study <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h2 className="text-xl font-bold mb-2">What I Build</h2>
          <p className="text-[var(--text-muted)] mb-12">Four capability buckets</p>
          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-semibold text-[var(--accent)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h2 className="text-xl font-bold mb-2">Experience Snapshot</h2>
          <p className="text-[var(--text-muted)] mb-12">Recent roles and outcomes</p>
          <div className="space-y-6">
            {EXPERIENCE_SNAPSHOT.map((e) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-32 shrink-0">
                  <p className="font-medium">{e.company}</p>
                  <p className="text-xs text-[var(--text-dim)]">{e.period}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">{e.role}</p>
                  <ul className="text-sm text-[var(--text-muted)] space-y-1">
                    {e.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/experience" className="inline-flex items-center gap-2 mt-8 text-[var(--accent)] hover:underline">
            Full experience <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h2 className="text-xl font-bold mb-2">Writing</h2>
          <p className="text-[var(--text-muted)] mb-12">Notes and thinking</p>
          <div className="grid md:grid-cols-3 gap-6">
            {WRITING.map((w) => (
              <article
                key={w.slug}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <FileText className="text-[var(--accent)] mb-3" size={24} />
                <h3 className="font-semibold mb-2">{w.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{w.excerpt}</p>
              </article>
            ))}
          </div>
          <Link to="/writing" className="inline-flex items-center gap-2 mt-8 text-[var(--accent)] hover:underline">
            All writing <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-[var(--border)]">
        <div className="max-w-[var(--max-width)] mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            Hiring for an AI engineering role or building an AI product? Let's talk.
          </p>
          <CTA />
        </div>
      </section>
    </>
  );
}
