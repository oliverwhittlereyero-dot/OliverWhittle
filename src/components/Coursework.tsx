import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Coursework() {
  return (
    <motion.section
      className="mb-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading"
        variants={item}
      >
        Relevant Coursework
      </motion.h2>
      <div className="mt-1 mb-4 h-0.5 w-10 bg-accent" />
      <div className="space-y-3">
        {Object.entries(cv.coursework).map(([category, courses]) => (
          <motion.div key={category} variants={item}>
            <h3 className="text-sm font-bold text-main-heading">{category}</h3>
            <p className="mt-0.5 text-sm text-main-text">
              {courses.join(" \u00B7 ")}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
