import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { GlowCard } from "../components/ui/GlowCard";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const FOCUS = {
  building: [
    "LifeOS (personal OS + AI assistant + write-through analytics)",
    "VideoTranslation — regional L&D dubbing pipeline (STT → translate → QA → TTS → sync)",
    "Agentic execution systems",
  ],
  thinking: ["Useful AI products", "Memory and orchestration", "Better human-AI interfaces"],
  writing: ["Building LifeOS from personal chaos", "The 50 Questions That Make AI Personal", "Turning GPT into a Personalized Productivity Agent"],
  learning: ["LangGraph patterns", "Multimodal UX", "Cost-efficient inference"],
};

const STACK = ["Python", "FastAPI", "LangGraph", "Next.js", "Redis", "MongoDB", "Local/OSS tooling"];

const QUESTIONS = [
  "What makes agent systems truly useful?",
  "How should AI shape personal operating systems?",
  "Where does multimodal UX actually become valuable?",
];

export function Now() {
  return (
    <>
      <Section>
        <PageHeader
          title="Now"
          description="What I'm focused on right now."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <GlowCard>
              <h3 className="mb-4 font-semibold text-[var(--accent)]">Building</h3>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {FOCUS.building.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
            <GlowCard>
              <h3 className="mb-4 font-semibold text-[var(--accent)]">Thinking about</h3>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                {FOCUS.thinking.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h3 className="mb-4 text-lg font-semibold">Current stack</h3>
        <div className="flex flex-wrap gap-2">
          {STACK.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h3 className="mb-4 text-lg font-semibold">Current questions</h3>
        <ul className="space-y-3 text-[var(--text-muted)]">
          {QUESTIONS.map((q, i) => (
            <li key={i} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              {q}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-white/10">
        <div className="flex flex-wrap gap-4">
          <Link to="/projects"><Button>View Projects</Button></Link>
          <Link to="/writing"><Button variant="secondary">Read Writing</Button></Link>
          <Link to="/contact"><Button variant="secondary">Contact</Button></Link>
        </div>
      </Section>
    </>
  );
}
