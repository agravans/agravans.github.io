import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { GlowCard } from "../components/ui/GlowCard";
import { Badge } from "../components/ui/Badge";
import { WRITING, WRITING_CATEGORIES } from "../lib/writing";

export function Writing() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? WRITING : WRITING.filter((w) => w.category === category);
  const featured = category === "All" ? (WRITING.find((w) => w.featured) ?? WRITING[0]) : null;

  return (
    <>
      <Section>
        <PageHeader
          title="Writing"
          description="Notes on AI systems, product thinking, useful tools, and what I'm learning while building."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        {featured && (
          <div className="mb-16">
            <p className="mb-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)]">Featured</p>
            <Link to={`/writing/${featured.slug}`}>
              <GlowCard className="group p-6 sm:p-8">
                <div className="mb-4"><Badge>{featured.category}</Badge></div>
                <h2 className="mb-3 text-xl font-semibold group-hover:text-[var(--accent)] sm:text-2xl">{featured.title}</h2>
                <p className="mb-4 text-[var(--text-muted)]">{featured.excerpt}</p>
                <p className="text-sm text-[var(--text-dim)]">{featured.date} · {featured.readTime} read</p>
                <span className="mt-4 inline-flex items-center text-sm text-[var(--accent)]">Read article →</span>
              </GlowCard>
            </Link>
          </div>
        )}

        <div className="mb-10 flex flex-wrap gap-2">
          {WRITING_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                category === c
                  ? "bg-[var(--accent)] text-black"
                  : "border border-white/10 bg-white/[0.03] text-[var(--text-muted)] hover:border-white/20 hover:text-[var(--text)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered
            .filter((w) => !featured || w.slug !== featured.slug)
            .map((w, i) => (
              <motion.div key={w.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/writing/${w.slug}`}>
                  <GlowCard className="h-full p-5">
                    <div className="mb-2"><Badge>{w.category}</Badge></div>
                    <h3 className="mb-2 font-semibold">{w.title}</h3>
                    <p className="mb-4 text-sm text-[var(--text-muted)]">{w.excerpt}</p>
                    <p className="text-xs text-[var(--text-dim)]">{w.date} · {w.readTime}</p>
                    <span className="mt-4 inline-flex items-center text-sm text-[var(--accent)]">Read more →</span>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-sm text-[var(--text-muted)]">
          I write to think better, build better, and make ideas more usable.
        </div>
      </Section>
    </>
  );
}
