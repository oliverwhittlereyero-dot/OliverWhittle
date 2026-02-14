import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import ResearchInterests from "./components/ResearchInterests";
import SectionNav from "./components/SectionNav";
import BackToTop from "./components/BackToTop";
import PhotoPage from "./pages/PhotoPage";

function CVPage({ theme, toggle }: { theme: "light" | "dark"; toggle: () => void }) {
  return (
    <div className="min-h-screen bg-outer-bg py-8 px-4 transition-colors duration-300 sm:px-6 lg:px-8">
      <motion.div
        className="resume-container mx-auto max-w-5xl overflow-hidden rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}
      >
        {/* Sidebar */}
        <Sidebar theme={theme} toggleTheme={toggle} />

        {/* Main Content */}
        <main className="flex-1 bg-main-bg p-8 transition-colors duration-300 sm:p-10">
          <div id="profile">
            <Profile theme={theme} toggleTheme={toggle} />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="coursework">
            <Coursework />
          </div>
          <div id="research">
            <ResearchInterests />
          </div>
        </main>
      </motion.div>

      {/* Floating UI */}
      <SectionNav />
      <BackToTop />
    </div>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <Routes>
      <Route path="/" element={<CVPage theme={theme} toggle={toggle} />} />
      <Route path="/photo" element={<PhotoPage />} />
    </Routes>
  );
}
