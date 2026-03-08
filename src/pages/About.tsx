import { CTA } from "../components/CTA";

export function About() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About</h1>

        <p className="text-[var(--text-muted)] leading-relaxed mb-8">
          I care about turning AI ideas into systems that are clear, reliable, and useful in practice—not just impressive in demos.
        </p>

        <p className="text-[var(--text-muted)] leading-relaxed mb-8">
          I build across LLMs, RAG, agentic workflows, and multimodal AI. Product-first, systems-minded, prototype-to-production. 
          Focused on grounded AI over flashy demos.
        </p>

        <p className="text-[var(--text-muted)] leading-relaxed mb-12">
          Plaksha University (Applied AI & Product) · KIIT (B.Tech CSE) · 3+ years in production AI.
        </p>

        <h2 className="text-lg font-semibold mb-4">What I'm best at</h2>
        <ul className="text-[var(--text-muted)] space-y-2 mb-12">
          <li>• Turning vague AI ideas into architectures</li>
          <li>• Building RAG and agent workflows</li>
          <li>• Connecting AI capability to product value</li>
          <li>• Moving from prototype to usable system</li>
        </ul>

        <CTA />
      </div>
    </div>
  );
}
