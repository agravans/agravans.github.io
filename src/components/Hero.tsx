import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent)] font-mono text-sm tracking-wider uppercase mb-4"
        >
          AI Engineer · 3+ years
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Subandhu Agravanshi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10"
        >
          Building production-grade GenAI and ML systems. RAG, agentic workflows,
          LLMs, multimodal AI. Research-to-production mindset. Optimizing cost,
          accuracy, and delivery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://linkedin.com/in/subandwho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/agravans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="mailto:subandwho@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Get in touch
          </a>
        </motion.div>
        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex mt-16 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
