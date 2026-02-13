import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

export default function Header() {
  return (
    <header className="relative mx-auto max-w-3xl overflow-hidden px-6 pt-16 pb-10">
      <MathDecoration
        formula="e^{i\\pi} + 1 = 0"
        className="right-0 top-8"
        fontSize="5rem"
      />
      <motion.h1
        className="relative z-10 font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {cv.name}
      </motion.h1>
      <motion.p
        className="relative z-10 mt-1 text-lg text-navy-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {cv.title}
      </motion.p>
      <motion.div
        className="relative z-10 mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {cv.contact.location && <span>{cv.contact.location}</span>}
        <a
          href={`mailto:${cv.contact.email}`}
          className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
        >
          {cv.contact.email}
        </a>
        <a
          href={cv.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
        >
          GitHub
        </a>
        <a
          href={cv.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
        >
          LinkedIn
        </a>
      </motion.div>
      <motion.p
        className="relative z-10 mt-6 leading-relaxed text-navy-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        {cv.about}
      </motion.p>
    </header>
  );
}
