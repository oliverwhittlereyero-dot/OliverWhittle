import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ResearchInterests() {
  return (
    <motion.section
      className="mb-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading"
        variants={item}
      >
        Research Interests
      </motion.h2>
      <div className="mt-1 mb-3 h-0.5 w-10 bg-accent" />
      <div className="flex flex-wrap gap-2">
        {cv.researchInterests.map((interest, i) => (
          <motion.span
            key={i}
            className="rounded bg-tag-bg px-3 py-1 text-sm text-tag-text"
            variants={item}
          >
            {interest}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
