import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import ResearchInterests from "./components/ResearchInterests";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="resume-container mx-auto max-w-5xl overflow-hidden rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-main-bg p-8 sm:p-10">
          <Profile />
          <Education />
          <Experience />
          <Projects />
          <Coursework />
          <ResearchInterests />
        </main>
      </motion.div>
    </div>
  );
}
