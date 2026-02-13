import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <motion.section
      className="relative mx-auto max-w-3xl overflow-hidden px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <MathDecoration
        formula="\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}"
        className="right-0 top-2"
        fontSize="3rem"
      />
      <motion.h2
        className="relative z-10 font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Education
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-6">
        {cv.education.map((edu, i) => (
          <motion.div key={i} variants={item}>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-800">
                  {edu.degree}
                </h3>
                <p className="text-navy-600">
                  {edu.institution} &middot; {edu.location}
                </p>
              </div>
              <p className="mt-1 text-sm text-navy-500 sm:mt-0">
                {edu.startDate} &ndash; {edu.endDate}
              </p>
            </div>
            {edu.details && (
              <p className="mt-2 text-navy-700">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
