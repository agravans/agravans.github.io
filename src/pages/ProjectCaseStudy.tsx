import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject, FLAGSHIP_PROJECTS } from "../lib/projects";
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
  const related = FLAGSHIP_PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  const decisions = [
    { title: "Architecture", why: "Chosen for scalability and clear separation of concerns.", tradeoff: "Added complexity vs flexibility." },
    { title: "Orchestration", why: "LangGraph for agents; explicit state and routing.", tradeoff: "Learning curve vs control." },
    { title: "Storage", why: "Write-through aggregates reduce query load.", tradeoff: "Eventual consistency vs read performance." },
  ];

  const challenges = [
    "Retrieval precision and relevance tuning",
    "Hallucination risk and structured outputs",
    "Prompt fragility and versioning",
    "Cost and latency optimization",
  ];

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
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h1>
              <p className="mb-6 text-lg text-[var(--text-muted)]">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
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
              <GlowCard className="p-6">
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
                    <dt className="text-[var(--text-dim)]">Category</dt>
                    <dd>{p.category}</dd>
                  </div>
                </dl>
              </GlowCard>
            </div>
          </motion.header>

          <div className="max-w-3xl space-y-16">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Overview</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.summary}</p>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">{p.whyMatters}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">The Problem</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.problem}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What I Built</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {"overview" in p && p.overview ? p.overview : p.summary + " " + p.outcome}
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-xl font-semibold text-[var(--accent)]">Key Decisions</h2>
              <div className="space-y-4">
                {decisions.map((d) => (
                  <GlowCard key={d.title} className="p-5">
                    <h3 className="mb-2 font-semibold">{d.title}</h3>
                    <p className="mb-2 text-sm text-[var(--text-muted)]"><strong>Why:</strong> {d.why}</p>
                    <p className="text-sm text-[var(--text-dim)]"><strong>Tradeoff:</strong> {d.tradeoff}</p>
                  </GlowCard>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">Challenges</h2>
              <ul className="space-y-2 text-[var(--text-muted)]">
                {challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="text-[var(--text-dim)]">•</span> {c}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What Changed</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">{p.outcome}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[var(--accent)]">What I'd Build in V2</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Deeper multimodal integration, offline-first support, and more adaptive orchestration based on user context.
              </p>
            </section>
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
                  <GlowCard className="h-full p-5">
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
