import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heading = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const bar = {
  hidden: { width: 0 },
  show: { width: 40, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const bullet = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <motion.section
      className="mb-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      <motion.h2
        className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading"
        variants={heading}
      >
        Experience
      </motion.h2>
      <motion.div className="mt-1 mb-4 h-0.5 bg-accent" variants={bar} />
      <div className="space-y-5">
        {cv.experience.map((job, i) => (
          <motion.div key={i} variants={item}>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <h3 className="font-heading text-base font-bold text-main-heading">
                {job.role}
              </h3>
              <span className="text-sm text-main-muted">
                {job.startDate} &ndash; {job.endDate}
              </span>
            </div>
            <p className="text-sm text-accent">
              {job.company} &middot; {job.location}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-main-text">
              {job.bullets.map((b, j) => (
                <motion.li key={j} variants={bullet}>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
