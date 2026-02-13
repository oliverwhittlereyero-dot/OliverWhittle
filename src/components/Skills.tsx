import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <motion.section
      className="relative mx-auto max-w-3xl overflow-hidden px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <MathDecoration
        formula="O(n \\log n)"
        className="right-0 top-2"
        fontSize="3rem"
      />
      <motion.h2
        className="relative z-10 font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Skills
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-4">
        {Object.entries(cv.skills).map(([category, items]) => (
          <motion.div key={category} variants={item}>
            <h3 className="font-heading text-base font-bold text-navy-700">
              {category}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-navy-300 px-3 py-0.5 text-sm text-navy-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
