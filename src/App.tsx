import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";
import { Experience } from "./pages/Experience";
import { Writing } from "./pages/Writing";
import { WritingDetail } from "./pages/WritingDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Now } from "./pages/Now";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </Layout>
  );
}

export default App;
