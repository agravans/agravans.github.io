import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

const EXPERIENCE = [
  {
    company: "Pocket FM",
    role: "Generative AI Engineer",
    period: "Jun 2026 – Present",
    bullets: [
      "Architected an organization-level knowledge search and analysis platform. Built a ReAct orchestrator as the core agent, with Text-to-SQL and analytics sub-agents, 20+ tools and 12+ skills on intelligent routing, served through Claude Opus via AWS Bedrock and LiteLLM (Python/OpenWebUI, Databricks SQL). Used by 250+ concurrent users across domains at scale.",
      "Architected the organizational agentic routing ontology: clustered 120k chats with DBSCAN into 5 domains and 30 categories. Retrieval used cross-encoders and Gemini embeddings via Qdrant for knowledge, intelligent expansion and KB routing, 2-pass filtering with Cohere reranker and aggregated scoring. Improved retrieval recall and accuracy by 40%. Cost reduction 54% ($1.30 to $0.60/query).",
      "Sub-agents used few-shot cards and taxonomy-driven metadata for warehouse analysis on Databricks. SQL generation precision +50%. Cut analysis context from 145k to 10k tokens.",
    ],
    stack: ["Python", "OpenWebUI", "Qdrant", "Databricks", "AWS Bedrock", "LiteLLM", "Claude"],
  },
  {
    company: "Gameopedia",
    role: "Generative AI Engineer, Research & Engineering",
    period: "Dec 2024 – Jun 2026",
    bullets: [
      "Productionized video-understanding agentic pipelines over 3,000+ long-form videos; 50+ highlights/video, +1.2% watch-time.",
      "Built Game Marketing Sentiment Intelligence over 20,000+ Steam/Reddit reviews; MCP + Batch API; cost $8→$0.30/input (96%).",
      "Fine-tuned a 360M Small-LM with LoRA; 78% semantic similarity, 100+ new insights. RLHF-inspired loop: 33%→88% accuracy in three cycles.",
    ],
    stack: ["LangGraph", "Gemini", "OpenAI Agents", "MCP", "LoRA"],
  },
  {
    company: "Stealth Startup (Fintech)",
    role: "Machine Learning Engineer & AI Researcher",
    period: "Aug 2024 – Nov 2024",
    bullets: [
      "Audited 1M+ financial prospectuses; hybrid Graph + LanceDB RAG with retrieval benchmarking.",
      "Equity Research Agent on AWS Bedrock/Groq/LangGraph: 7+ analyst workflows with Human-in-the-Loop.",
    ],
    stack: ["LangGraph", "AWS Bedrock", "LanceDB", "Groq"],
  },
  {
    company: "Arcesium (D. E. Shaw Group)",
    role: "Forward Deployed Software Engineer, Machine Learning Practice",
    period: "Mar 2023 – Aug 2024",
    bullets: [
      "Tax-character prediction pipeline: OCR, CNNs and ensembles; 98% accuracy across 250+ document types.",
      "LLM test-generation and eval harness: BLEU, ROUGE, semantic similarity; coverage 32%→80%, 24,000 test cases.",
      "Perl-to-Python translation eval across 15+ LLMs; 350 functions, Vicuna-13B at 75% functional accuracy. Langfuse over 10,000+ flows.",
    ],
    stack: ["Python", "AWS Knowledge Bases", "LanceDB", "Langfuse"],
  },
];

const EDUCATION = [
  {
    degree: "Post Graduate Masters, Applied AI & Product",
    institution: "UC Berkeley — Plaksha University",
    detail: "CGPA: 8.5 · 2022 – 2023",
  },
  {
    degree: "BTech, Computer Science & Engineering",
    institution: "KIIT",
    detail: "CGPA: 8.01 · 2018 – 2022",
  },
];

const SKILL_CLUSTERS = [
  { label: "Agentic AI & LLMs", items: ["LangGraph", "RAG", "Rerankers", "Cross-Encoders", "MCP", "LiteLLM", "Tool Calling"] },
  { label: "AI Evaluation & Reliability", items: ["Retrieval and Agent Evaluation", "Langfuse", "Structured Outputs", "Model Routing", "Cost/Latency"] },
  { label: "ML & Deep Learning", items: ["PyTorch", "LoRA/PEFT", "ViTs", "Recommendations", "Ranking", "Fine-Tuning"] },
  { label: "Engineering & Data", items: ["Python", "FastAPI", "SQL", "Databricks", "PostgreSQL", "AWS Bedrock", "Next.js"] },
  { label: "Multimodal / Media", items: ["fal.ai", "ImageKit.io", "ElevenLabs", "ASR", "Diarization"] },
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
        <div className="space-y-3 text-[var(--text-muted)]">
          {EDUCATION.map((ed) => (
            <p key={ed.institution}>
              <strong>{ed.institution}</strong> · {ed.degree}
              <br />
              <span className="text-sm text-[var(--text-dim)]">{ed.detail}</span>
            </p>
          ))}
        </div>
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
