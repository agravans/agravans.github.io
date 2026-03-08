import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FLAGSHIP_PROJECTS, SUPPORTING_PROJECTS } from "../lib/projects";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-[var(--max-width)] mx-auto">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-[var(--text-muted)] mb-16">
          Production AI systems and research-to-product work
        </p>

        <section className="mb-20">
          <h2 className="text-lg font-semibold text-[var(--accent)] mb-8">Flagship</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FLAGSHIP_PROJECTS.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--text-dim)] transition-colors group"
                >
                  <h3 className="font-semibold text-lg group-hover:text-[var(--accent)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 text-xs font-mono rounded bg-[var(--accent-dim)] text-[var(--accent)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-[var(--accent)]">
                    Read case study <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[var(--text-muted)] mb-8">Supporting</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPORTING_PROJECTS.map((p) => (
              <article
                key={p.slug}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 text-xs rounded bg-[var(--bg-elevated)] text-[var(--text-dim)]">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
