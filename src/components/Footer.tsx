import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-[var(--max-width)] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-[var(--text)]">Subandhu Agravanshi</p>
            <p className="text-sm text-[var(--text-dim)] mt-0.5">AI Engineer · GenAI · RAG · Agents</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/agravans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/subandwho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <Link to="/contact" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-xs text-[var(--text-dim)] mt-8">
          © {new Date().getFullYear()} Subandhu Agravanshi
        </p>
      </div>
    </footer>
  );
}
