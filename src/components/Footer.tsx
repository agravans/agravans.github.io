import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Subandhu Agravanshi</p>
            <p className="mt-0.5 text-sm text-[var(--text-dim)]">AI Engineer building production-grade AI systems.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/projects" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Projects</Link>
            <Link to="/writing" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Writing</Link>
            <Link to="/about" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">About</Link>
            <Link to="/contact" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Contact</Link>
            <Link to="/now" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Now</Link>
            <a href="/resume.pdf" download="Subandhu-Agravanshi-Resume.pdf" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">Resume</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/agravans" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">GitHub</a>
            <a href="https://linkedin.com/in/subandwho" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]">LinkedIn</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-[var(--text-dim)]">© {new Date().getFullYear()} Subandhu Agravanshi</p>
      </div>
    </footer>
  );
}
