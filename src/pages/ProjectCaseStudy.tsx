import { useParams, Link } from "react-router-dom";
import { getProject, FLAGSHIP_PROJECTS } from "../lib/projects";
import { ArrowLeft } from "lucide-react";

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : null;

  if (!project || !("tagline" in project)) {
    return (
      <div className="py-24 px-6 text-center">
        <p className="text-[var(--text-muted)]">Project not found</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-[var(--accent)]">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  const p = project as (typeof FLAGSHIP_PROJECTS)[0];

  return (
    <article className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] mb-12"
        >
          <ArrowLeft size={16} /> Projects
        </Link>

        <header className="mb-16">
          <h1 className="text-3xl font-bold mb-2">{p.title}</h1>
          <p className="text-lg text-[var(--text-muted)] mb-6">{p.tagline}</p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <dt className="text-[var(--text-dim)]">Timeline</dt>
              <dd>{p.timeline}</dd>
            </div>
            <div>
              <dt className="text-[var(--text-dim)]">Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-[var(--text-dim)]">Stack</dt>
              <dd className="font-mono text-xs">{p.stack.join(", ")}</dd>
            </div>
          </dl>
          {(p.links.github || p.links.live) && (
            <div className="mt-4 flex gap-4">
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  GitHub
                </a>
              )}
              {p.links.live && (
                <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  Live
                </a>
              )}
            </div>
          )}
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">Problem</h2>
            <p className="text-[var(--text-muted)]">{p.problem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">Why it mattered</h2>
            <p className="text-[var(--text-muted)]">{p.whyMatters}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">What I built</h2>
            <p className="text-[var(--text-muted)]">
              A production-ready system: ingestion, retrieval, orchestration, model layer, and interface.
              Key decisions included stack selection (LangGraph for agents, FastAPI for APIs), cost control via batching,
              and observability with Langfuse. Challenges around retrieval quality and prompt fragility were addressed
              through iterative refinement and structured outputs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">Outcome</h2>
            <p className="text-[var(--text-muted)]">
              Shipped to production. Improved accuracy, reduced cost, and established reusable patterns for future AI systems.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
