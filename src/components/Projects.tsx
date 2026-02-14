import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const heading = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const bar = {
  hidden: { width: 0 },
  show: { width: 40, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const tag = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.section
      className="mb-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <motion.h2
        className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading"
        variants={heading}
      >
        Projects
      </motion.h2>
      <motion.div className="mt-1 mb-4 h-0.5 bg-accent" variants={bar} />
      <div className="space-y-5">
        {cv.projects.map((project, i) => (
          <motion.div
            key={i}
            className="cursor-pointer rounded-lg border border-main-border/50 bg-card-bg p-4 transition-shadow hover:shadow-md"
            variants={card}
            layout
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-base font-bold text-main-heading">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.name} &rarr;
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <motion.span
                className="mt-1 shrink-0 text-xs text-main-muted"
                animate={{ rotate: expanded === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.span>
            </div>
            <AnimatePresence initial={false}>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-sm leading-relaxed text-main-text">
                    {project.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="mt-2 flex flex-wrap gap-1.5"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
            >
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  className="rounded bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-text"
                  variants={tag}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
