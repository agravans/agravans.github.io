import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-2"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] mb-12"
        >
          Open to roles in AI engineering, GenAI systems, and agentic workflows
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:subandwho@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            subandwho@gmail.com
          </a>
          <a
            href="tel:+918171687666"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
          >
            <Phone size={18} />
            +91 81716 87666
          </a>
          <a
            href="https://linkedin.com/in/subandwho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/agravans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-sm text-[var(--text-dim)]"
        >
          Plaksha University · KIIT · Gameopedia · Arcesium (DE Shaw)
        </motion.p>
      </div>
    </section>
  );
}
