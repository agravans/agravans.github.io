import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/projects", label: "Projects" },
  { to: "/writing", label: "Writing" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/now", label: "Now" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-white/10 bg-black/50 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-semibold tracking-tight">
          SA
        </Link>
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:items-center md:gap-4">
          <a href="/resume.pdf" download="Subandhu-Agravanshi-Resume.pdf" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)]">
            Resume
          </a>
          <a href="https://github.com/agravans" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text)]">
            GitHub
          </a>
          <a href="https://linkedin.com/in/subandwho" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text)]">
            LinkedIn
          </a>
        </div>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV.map(({ to, label }) => (
                <Link key={to} to={to} className="py-3 text-lg" onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              ))}
              <a href="/resume.pdf" download="Subandhu-Agravanshi-Resume.pdf" className="py-3 text-lg">Resume</a>
              <a href="https://github.com/agravans" target="_blank" rel="noopener noreferrer" className="py-3 text-lg">GitHub</a>
              <a href="https://linkedin.com/in/subandwho" target="_blank" rel="noopener noreferrer" className="py-3 text-lg">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
