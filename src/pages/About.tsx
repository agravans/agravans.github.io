import { Link } from "react-router-dom";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { GlowCard } from "../components/ui/GlowCard";
import { Button } from "../components/ui/Button";

const VALUES = [
  "Useful AI systems",
  "Product-shaped engineering",
  "Ambitious builds",
  "Thoughtful execution",
  "Multimodal experiences",
  "Building in public",
];

const WORKING_STYLE = [
  { label: "Fast iteration", desc: "Ship, learn, refine." },
  { label: "Systems thinking", desc: "Architecture before code." },
  { label: "Practical clarity", desc: "Clear over clever." },
  { label: "Direct feedback", desc: "Honest and constructive." },
];

export function About() {
  return (
    <>
      <Section>
        <PageHeader
          title="About"
          description="Engineer, builder, and someone interested in making AI systems genuinely useful."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        <div className="max-w-3xl space-y-6 text-[var(--text-muted)] leading-relaxed">
          <p>
            I care about turning AI ideas into systems that are clear, reliable, and useful in practice—not just impressive in demos.
          </p>
          <p>
            I build across LLMs, RAG, agentic workflows, and multimodal AI. Product-first, systems-minded, prototype-to-production.
            Focused on grounded AI over flashy demos.
          </p>
          <p>
            Plaksha University (Applied AI & Product) · KIIT (B.Tech CSE) · 3+ years in production AI. Based in India.
            Interested in AI products, storytelling, systems, and building in public.
          </p>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-8 text-xl font-semibold">What I Care About</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <GlowCard key={v} className="p-5">
              <p className="font-medium">{v}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-8 text-xl font-semibold">My Working Style</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {WORKING_STYLE.map((w) => (
            <GlowCard key={w.label} className="p-5">
              <h3 className="font-semibold text-[var(--accent)]">{w.label}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{w.desc}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-6 text-xl font-semibold">Outside Work</h2>
        <p className="max-w-2xl text-[var(--text-muted)] leading-relaxed">
          Films, games, AI/product exploration, writing, and storytelling. Interested in creative systems and how
          humans and machines collaborate.
        </p>
      </Section>

      <Section className="border-t border-white/10">
        <div className="flex flex-wrap gap-4">
          <Link to="/projects"><Button>Read Projects</Button></Link>
          <Link to="/writing"><Button variant="secondary">Read Writing</Button></Link>
          <Link to="/contact"><Button variant="secondary">Let's Connect</Button></Link>
        </div>
      </Section>
    </>
  );
}
