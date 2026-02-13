import { motion } from "framer-motion";
import Header from "./components/Header";
import Education from "./components/Education";
import ResearchInterests from "./components/ResearchInterests";
import Coursework from "./components/Coursework";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <motion.div
      className="math-bg min-h-screen bg-navy-50 text-navy-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <Education />
      <ResearchInterests />
      <Coursework />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
}
