import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Publications } from "./components/Publications";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-[var(--border)]">
        <p className="text-center text-sm text-[var(--text-dim)]">
          © {new Date().getFullYear()} Subandhu Agravanshi · Built with React,
          Tailwind, Framer Motion
        </p>
      </footer>
    </>
  );
}

export default App;
