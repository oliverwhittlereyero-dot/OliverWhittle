import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
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
        Projects
      </motion.h2>
      <div className="mt-1 mb-4 h-0.5 w-10 bg-accent" />
      <div className="space-y-5">
        {cv.projects.map((project, i) => (
          <motion.div key={i} variants={item}>
            <h3 className="font-heading text-base font-bold text-main-heading">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {project.name} &rarr;
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-main-text">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-text"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
