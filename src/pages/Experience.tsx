import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

const EXPERIENCE = [
  {
    company: "Gameopedia",
    role: "Generative AI Engineer",
    period: "Dec 2024 – Present",
    bullets: [
      "Built video-understanding agentic pipelines; 3k+ videos, +1.2% watch-time",
      "Deployed sentiment intelligence: 20k+ reviews, cost $8→$0.30/input",
      "Taxonomy agent, prompt optimization: 33%→88% accuracy in 3 iterations",
    ],
    stack: ["LangGraph", "Gemini", "FastAPI", "Langfuse", "MCP"],
  },
  {
    company: "Stealth Startup (Fintech)",
    role: "ML Engineer & AI Researcher",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Hybrid RAG (Graph+LanceDB) for 1M prospectuses",
      "Equity Research Agent: 7 functionalities with Human-in-the-Loop",
    ],
    stack: ["LangGraph", "AWS Bedrock", "LanceDB", "Groq"],
  },
  {
    company: "Arcesium (DE Shaw Group)",
    role: "Machine Learning Engineer",
    period: "Mar 2023 – Aug 2024",
    bullets: [
      "350 Perl→Python with Vicuna13b, 98% tax classifier",
      "32%→80% test coverage, 24k test cases",
    ],
    stack: ["Python", "Vicuna", "Langfuse", "AWS KnowledgeBases"],
  },
];

const EDUCATION = {
  degree: "B.Tech CSE",
  institution: "KIIT",
  focus: "Applied AI & Product (Plaksha University)",
};

const SKILL_CLUSTERS = [
  { label: "Languages", items: ["Python", "TypeScript", "SQL"] },
  { label: "AI/ML", items: ["LangGraph", "RAG", "LLMs", "Embeddings", "Vector DBs"] },
  { label: "Frameworks", items: ["FastAPI", "Next.js", "React"] },
  { label: "Backend / Infra", items: ["Redis", "PostgreSQL", "MongoDB", "AWS", "Docker"] },
  { label: "Product / Workflow", items: ["Langfuse", "MCP", "Agent orchestration"] },
];

export function Experience() {
  return (
    <>
      <Section>
        <PageHeader
          title="Experience"
          description="A snapshot of roles, systems, and areas I've worked across."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        <div className="space-y-0">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative border-b border-white/10 pb-12 pt-8 first:pt-0 last:border-0"
            >
              <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="w-48 shrink-0">
                  <h2 className="font-semibold">{e.company}</h2>
                  <p className="text-sm text-[var(--text-dim)]">{e.period}</p>
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-[var(--accent)]">{e.role}</p>
                  <ul className="mb-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-sm text-[var(--text-muted)] leading-relaxed">
                        • {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <p className="text-[var(--text-muted)]">
          <strong>{EDUCATION.degree}</strong> · {EDUCATION.institution}<br />
          <span className="text-sm text-[var(--text-dim)]">{EDUCATION.focus}</span>
        </p>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-8 text-xl font-semibold">Skills / Capabilities</h2>
        <div className="flex flex-wrap gap-6">
          {SKILL_CLUSTERS.map((c) => (
            <div key={c.label}>
              <p className="mb-2 text-sm font-medium text-[var(--text-dim)]">{c.label}</p>
              <div className="flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="flex flex-wrap gap-4">
          <a href="/resume.pdf" download="Subandhu-Agravanshi-Resume.pdf"><Button>Download Resume</Button></a>
          <Link to="/contact"><Button variant="secondary">Contact</Button></Link>
        </div>
      </Section>
    </>
  );
}
