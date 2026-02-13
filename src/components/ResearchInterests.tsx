import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ResearchInterests() {
  return (
    <motion.section
      className="relative mx-auto max-w-3xl overflow-hidden px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <MathDecoration
        formula="\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u"
        className="right-0 top-2"
        fontSize="3rem"
      />
      <motion.h2
        className="relative z-10 font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Research Interests
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <ul className="mt-6 list-disc space-y-1 pl-5 text-navy-700">
        {cv.researchInterests.map((interest, i) => (
          <motion.li key={i} variants={item}>
            {interest}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
