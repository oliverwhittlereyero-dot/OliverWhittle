import { motion } from "framer-motion";
import { cv } from "../data/cv";
import MathDecoration from "./MathDecoration";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <motion.section
      className="relative mx-auto max-w-3xl overflow-hidden px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <MathDecoration
        formula="\\nabla f"
        className="right-0 top-2"
        fontSize="3.5rem"
      />
      <motion.h2
        className="relative z-10 font-heading text-xl font-bold text-navy-800"
        variants={item}
      >
        Projects
      </motion.h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-6">
        {cv.projects.map((project, i) => (
          <motion.div key={i} variants={item}>
            <h3 className="font-heading text-lg font-bold text-navy-800">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-navy-300 underline-offset-2 hover:text-navy-600"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-1 leading-relaxed text-navy-700">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  className="rounded-full border border-navy-300 px-3 py-0.5 text-xs text-navy-600"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
