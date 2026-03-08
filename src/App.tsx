import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";
import { Experience } from "./pages/Experience";
import { Writing } from "./pages/Writing";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
