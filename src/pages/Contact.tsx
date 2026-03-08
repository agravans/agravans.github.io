import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-[var(--text-muted)] mb-12">
          Hiring for an AI engineering role or building an AI product? Let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:subandwho@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            subandwho@gmail.com
          </a>
          <a
            href="tel:+918171687666"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            <Phone size={18} />
            +91 81716 87666
          </a>
          <a
            href="https://linkedin.com/in/subandwho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/agravans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
