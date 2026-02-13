import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Experience() {
  return (
    <motion.section
      className="mx-auto max-w-3xl px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Experience
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-8">
        {cv.experience.map((job, i) => (
          <motion.div key={i} variants={item}>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-800">
                  {job.role}
                </h3>
                <p className="text-navy-600">
                  {job.company} &middot; {job.location}
                </p>
              </div>
              <p className="mt-1 text-sm text-navy-500 sm:mt-0">
                {job.startDate} &ndash; {job.endDate}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-navy-700">
              {job.bullets.map((bullet, j) => (
                <motion.li key={j} variants={item}>
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
