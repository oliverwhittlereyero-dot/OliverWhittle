import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const heading = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const bar = {
  hidden: { width: 0 },
  show: { width: 40, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const chip = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
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
        variants={heading}
      >
        Research Interests
      </motion.h2>
      <motion.div className="mt-1 mb-3 h-0.5 bg-accent" variants={bar} />
      <div className="flex flex-wrap gap-2">
        {cv.researchInterests.map((interest, i) => (
          <motion.span
            key={i}
            className="rounded bg-tag-bg px-3 py-1 text-sm text-tag-text transition-shadow hover:shadow-sm"
            variants={chip}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {interest}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
