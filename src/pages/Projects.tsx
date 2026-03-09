import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { GlowCard } from "../components/ui/GlowCard";
import { Tag } from "../components/ui/Tag";
import { LinkArrow } from "../components/ui/LinkArrow";
import { FLAGSHIP_PROJECTS, SUPPORTING_PROJECTS, PROJECT_FILTERS } from "../lib/projects";

function matchesFilter(project: { category: string }, filter: string) {
  if (filter === "All") return true;
  return project.category === filter;
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const flagship = FLAGSHIP_PROJECTS.filter((p) => matchesFilter(p, filter));
  const supporting = SUPPORTING_PROJECTS.filter((p) => matchesFilter(p, filter));

  return (
    <>
      <Section>
        <PageHeader
          title="Projects"
          description="A curated selection of AI systems, workflows, and products I've built across LLMs, RAG, agents, and multimodal applications."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        <div className="mb-10 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "bg-[var(--accent)] text-black"
                  : "border border-white/10 bg-white/[0.03] text-[var(--text-muted)] hover:border-white/20 hover:text-[var(--text)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {(flagship.length > 0 || supporting.length > 0) && (
          <>
            {flagship.length > 0 && (
              <div className="mb-16">
                <h2 className="mb-8 text-lg font-semibold text-[var(--accent)]">Featured</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {flagship.map((p, i) => (
                    <motion.div key={p.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link to={`/projects/${p.slug}`}>
                        <GlowCard className="group h-full p-6">
                          <h3 className="mb-2 text-xl font-semibold group-hover:text-[var(--accent)]">{p.title}</h3>
                          <p className="mb-4 text-sm text-[var(--text-muted)] leading-relaxed">{p.tagline}</p>
                          <div className="mb-4 flex flex-wrap gap-2">
                            {p.stack.slice(0, 4).map((s) => (
                              <Tag key={s}>{s}</Tag>
                            ))}
                          </div>
                          <p className="mb-4 text-sm text-[var(--text-dim)]">{p.outcome || p.whyMatters}</p>
                          <LinkArrow to={`/projects/${p.slug}`}>Read case study</LinkArrow>
                        </GlowCard>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {supporting.length > 0 && (
              <div>
                <h2 className="mb-8 text-lg font-semibold text-[var(--text-muted)]">More projects</h2>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {supporting.map((p) => (
                    <GlowCard key={p.slug} className="p-5">
                      <h3 className="mb-2 font-semibold">{p.title}</h3>
                      <p className="mb-3 text-sm text-[var(--text-muted)]">{p.desc}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                      {"tagline" in p ? (
                        <Link to={`/projects/${p.slug}`}>
                          <span className="text-sm text-[var(--accent)] hover:underline">Read case study</span>
                        </Link>
                      ) : (
                        <span className="text-sm text-[var(--text-dim)]">{p.category}</span>
                      )}
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {flagship.length === 0 && supporting.length === 0 && (
          <p className="text-[var(--text-muted)]">No projects match this filter.</p>
        )}

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-sm text-[var(--text-muted)]">
          I care most about projects that move beyond demos and become structured, usable systems.
        </div>
      </Section>
    </>
  );
}
