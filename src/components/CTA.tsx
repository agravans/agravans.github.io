import { Link } from "react-router-dom";

const BUTTON =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors";

export function CTA() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/projects"
        className={`${BUTTON} bg-[var(--accent)] text-[var(--bg)] hover:opacity-90`}
      >
        View Projects
      </Link>
      <a
        href="/resume.pdf"
        className={`${BUTTON} border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)]`}
      >
        Resume
      </a>
      <a
        href="https://github.com/agravans"
        target="_blank"
        rel="noopener noreferrer"
        className={`${BUTTON} border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]`}
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/subandwho"
        target="_blank"
        rel="noopener noreferrer"
        className={`${BUTTON} border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]`}
      >
        LinkedIn
      </a>
      <Link
        to="/contact"
        className={`${BUTTON} text-[var(--accent)] hover:bg-[var(--accent-dim)]`}
      >
        Contact
      </Link>
    </div>
  );
}
