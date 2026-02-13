import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

const categoryFormulas: Record<string, string> = {
  "Analysis & Calculus": "\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^n = e",
  "Algebra & Discrete": "\\det(AB) = \\det(A)\\det(B)",
  "Computational Methods": "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Coursework() {
  return (
    <motion.section
      className="relative mx-auto max-w-3xl overflow-hidden px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="relative z-10 font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Relevant Coursework
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-4">
        {Object.entries(cv.coursework).map(([category, courses]) => (
          <motion.div key={category} className="relative" variants={item}>
            {categoryFormulas[category] && (
              <MathDecoration
                formula={categoryFormulas[category]}
                className="right-0 top-0"
                fontSize="1.6rem"
              />
            )}
            <h3 className="relative z-10 font-heading text-base font-bold text-navy-700">
              {category}
            </h3>
            <p className="relative z-10 mt-1 text-navy-600">
              {courses.join(" \u00B7 ")}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
