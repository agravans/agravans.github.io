import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject, FLAGSHIP_PROJECTS, LANE_META } from "../lib/projects";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/layout/Container";
import { GlowCard } from "../components/ui/GlowCard";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

type FlagshipProject = (typeof FLAGSHIP_PROJECTS)[0];

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : null;

  if (!project || !("tagline" in project)) {
    return (
      <div className="py-24 text-center">
        <p className="text-[var(--text-muted)]">Project not found</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] hover:underline">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  const p = project as FlagshipProject;
  const lane = LANE_META[p.lane];
  const related = FLAGSHIP_PROJECTS
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.lane === p.lane) - Number(a.lane === p.lane))
    .slice(0, 3);

  return (
    <>
      <article className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container size="wide">
          <Link to="/projects" className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">
            <ArrowLeft size={16} /> Projects
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 grid gap-8 lg:grid-cols-12"
          >
            <div className="lg:col-span-8">
              <Tag tone={lane.tone}>{lane.label}</Tag>
              <h1 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h1>
              <p className="mb-6 text-lg text-[var(--text-muted)]">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s} tone={lane.tone}>{s}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                    GitHub
                  </a>
                )}
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline">
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="lg:col-span-4">
              <GlowCard className="p-6" tone={lane.tone}>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-[var(--text-dim)]">Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-dim)]">Timeline</dt>
                    <dd>{p.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-dim)]">Stack</dt>
                    <dd className="font-mono text-xs">{p.stack.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-dim)]">Lane</dt>
                    <dd>{lane.label}</dd>
                  </div>
                </dl>
              </GlowCard>
            </div>
          </motion.header>

          <div className="max-w-3xl space-y-16">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Problem</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.problem}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Why it mattered</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.whyMatters}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What I built</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {"overview" in p && p.overview ? p.overview : p.summary + " " + p.outcome}
              </p>
            </section>

            {"caseStudy" in p && p.caseStudy && (
              <>
                {(
                  [
                    ["Users / ICP", p.caseStudy.users],
                    ["Constraints", p.caseStudy.constraints],
                    ["Architecture", p.caseStudy.architecture],
                    ["Data", p.caseStudy.data],
                    ["Model / agent design", p.caseStudy.modelAgent],
                    ["Backend", p.caseStudy.backend],
                    ["Evaluation", p.caseStudy.evaluation],
                    ["Deployment", p.caseStudy.deployment],
                    ["Latency / cost", p.caseStudy.latencyCost],
                    ["Failure modes", p.caseStudy.failureModes],
                  ] as const
                ).map(([title, body]) => (
                  <section key={title}>
                    <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">{title}</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap">{body}</p>
                  </section>
                ))}
              </>
            )}

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Impact</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.outcome}</p>
            </section>

            {"caseStudy" in p && p.caseStudy ? (
              <section>
                <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What I would improve next</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">{p.caseStudy.next}</p>
              </section>
            ) : (
              <section>
                <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What I would improve next</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Deeper evaluation, clearer deployment story, and more adaptive orchestration based on user context.
                </p>
              </section>
            )}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/10 py-16 sm:py-20">
          <Container>
            <h2 className="mb-8 text-xl font-bold">Related projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/projects/${r.slug}`}>
                  <GlowCard className="h-full p-5" tone={LANE_META[r.lane].tone}>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{r.tagline}</p>
                    <span className="mt-4 inline-flex items-center text-sm text-[var(--accent)]">Read case study →</span>
                  </GlowCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-white/10 py-12">
        <Container>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects"><Button variant="secondary">View More Projects</Button></Link>
            <Link to="/writing"><Button variant="secondary">Read Writing</Button></Link>
            <Link to="/contact"><Button>Contact</Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
