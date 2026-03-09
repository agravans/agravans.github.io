import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/layout/SectionHeading";
import { GlowCard } from "../components/ui/GlowCard";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";
import { LinkArrow } from "../components/ui/LinkArrow";
import { FLAGSHIP_PROJECTS } from "../lib/projects";
import { WRITING } from "../lib/writing";

const EXPERIENCE_SNAPSHOT = [
  { role: "Generative AI Engineer", company: "Gameopedia", period: "Dec 2024 – Present", bullets: ["Video agents; 3k+ videos, +1.2% watch-time", "Cost $8→$0.30/input; 33%→88% accuracy"] },
  { role: "ML Engineer", company: "Stealth Fintech", period: "Aug – Nov 2024", bullets: ["Hybrid RAG for 1M prospectuses", "Equity Research Agent, 7 functionalities"] },
  { role: "ML Engineer", company: "Arcesium (DE Shaw)", period: "Mar 2023 – Aug 2024", bullets: ["350 Perl→Python; 98% tax classifier", "32%→80% test coverage, 24k cases"] },
];

const CAPABILITIES = [
  { title: "LLM & RAG Systems", desc: "Grounded retrieval, reasoning pipelines, knowledge workflows, and search-heavy AI applications." },
  { title: "Agentic Workflows", desc: "Multi-step systems, orchestration layers, tool use, memory, and execution flows." },
  { title: "Multimodal AI", desc: "Video understanding, visual workflows, multimodal reasoning, and creative AI systems." },
  { title: "AI Product Infrastructure", desc: "FastAPI backends, stateful workflows, evaluations, observability, and production-minded architecture." },
];

const PHILOSOPHY = [
  "Useful > flashy",
  "Product-shaped engineering",
  "Prototype to production",
  "Architecture for iteration",
  "AI that earns its place",
];

const PROOF = [
  "3+ years in AI/ML systems",
  "GenAI / RAG / Agents / Multimodal",
  "Startup + enterprise exposure",
  "Product-minded builder",
];

export function Home() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-5 lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-dim)]">
                AI Engineer · Builder · Writer
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Subandhu Agravanshi</h1>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Building production-grade LLM, RAG, agentic, and multimodal systems.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                I design and ship AI products across retrieval, orchestration, workflow automation, research systems, and video intelligence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/projects"><Button>View Projects</Button></Link>
                <Link to="/writing"><Button variant="secondary">Read Writing</Button></Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/resume.pdf" download="Subandhu-Agravanshi-Resume.pdf" className="text-[var(--text-muted)] hover:text-[var(--accent)]">Resume</a>
                <a href="https://topmate.io/subandwho/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)]">Topmate</a>
                <a href="https://github.com/agravans" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)]">GitHub</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <GlowCard className="rounded-3xl border-cyan-400/20 bg-gradient-to-br from-white/[0.08] to-white/[0.03]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">Currently Building</h3>
                <ul className="space-y-3 text-sm">
                  <li>• LifeOS — AI-native personal operating system</li>
                  <li>• Agentic workflows for execution and planning</li>
                  <li>• Multimodal storytelling / video AI systems</li>
                  <li>• Writing on useful AI systems beyond demos</li>
                </ul>
                <div className="mt-6 border-t border-white/10 pt-4 text-sm text-[var(--text-dim)]">
                  <p>Based in India</p>
                  <p>Open to AI Engineer / Founding AI Engineer roles</p>
                </div>
              </GlowCard>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-white/10 py-8">
        <Container size="wide">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF.map((p) => (
              <div key={p} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-[var(--text-muted)]">
                {p}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="work">
        <SectionHeading
          title="Selected Work"
          description="A few systems and products I've built across AI, workflows, and multimodal experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {FLAGSHIP_PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/projects/${p.slug}`}>
                <GlowCard className="group h-full">
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-[var(--accent)]">{p.title}</h3>
                  <p className="mb-3 text-sm text-[var(--text-muted)]">{p.tagline}</p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-[var(--text-dim)]">{p.outcome || p.whyMatters}</p>
                  <LinkArrow to={`/projects/${p.slug}`}>Read Case Study</LinkArrow>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeading title="What I Build" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <GlowCard>
                <h3 className="mb-2 font-semibold text-[var(--accent)]">{c.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{c.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeading title="How I Think" description="A philosophy layer, not a slogan wall." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((p) => (
            <div key={p} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[var(--text-muted)]">
              {p}
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeading title="Writing" />
        <div className="grid gap-6 lg:grid-cols-3">
          {WRITING.slice(0, 3).map((w) => (
            <Link key={w.slug} to={`/writing/${w.slug}`}>
              <GlowCard className="h-full">
                <p className="mb-1 text-xs text-[var(--text-dim)]">{w.category} · {w.date}</p>
                <h3 className="mb-2 font-semibold">{w.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{w.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm text-[var(--accent)]">Read article →</span>
              </GlowCard>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <LinkArrow to="/writing">All writing</LinkArrow>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeading title="Experience" />
        <div className="space-y-6">
          {EXPERIENCE_SNAPSHOT.map((e) => (
            <div key={e.company} className="flex gap-6">
              <div className="w-36 shrink-0">
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
            </div>
          ))}
        </div>
        <div className="mt-8">
          <LinkArrow to="/experience">Full experience</LinkArrow>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <SectionHeading
          title="Now"
          description="Right now I'm focused on AI-native productivity systems, agentic execution flows, multimodal experiences, and writing more about useful AI product design."
        />
        <Link to="/now">
          <Button variant="secondary">View Now Page</Button>
        </Link>
      </Section>

      <Section className="border-t border-white/10">
        <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.05] p-8 text-center sm:p-12">
          <h2 className="mb-4 text-2xl font-bold">
            Building an AI product, exploring a role, or just want to talk ideas?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[var(--text-muted)]">
            I'm always open to conversations around AI systems, product direction, ambitious builds, and thoughtful execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:subandwho@gmail.com"><Button>Email Me</Button></a>
            <a href="https://linkedin.com/in/subandwho" target="_blank" rel="noopener noreferrer"><Button variant="secondary">LinkedIn</Button></a>
            <a href="https://topmate.io/subandwho/" target="_blank" rel="noopener noreferrer"><Button variant="secondary">Topmate</Button></a>
          </div>
        </div>
      </Section>
    </>
  );
}
