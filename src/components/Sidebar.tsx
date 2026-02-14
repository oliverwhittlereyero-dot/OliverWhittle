import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const photo = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Sidebar({ theme, toggleTheme }: Props) {
  return (
    <motion.aside
      className="w-72 shrink-0 bg-sidebar p-8 text-sidebar-text max-md:hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Theme Toggle */}
      <motion.div className="mb-4 flex justify-end" variants={item}>
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 text-sidebar-text transition-colors hover:bg-sidebar-light hover:text-accent-light"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Photo */}
      <motion.div className="mb-6 flex justify-center" variants={photo}>
        <img
          src="Oliver_photo.jpeg"
          alt={cv.name}
          className="h-44 w-44 rounded-full border-4 border-sidebar-light object-cover object-top shadow-lg"
        />
      </motion.div>

      {/* Name & Title */}
      <motion.div className="mb-6 text-center" variants={item}>
        <h1 className="font-heading text-xl font-bold text-sidebar-heading">
          {cv.name}
        </h1>
        <p className="mt-1 text-sm text-accent-light">{cv.title}</p>
      </motion.div>

      {/* Contact */}
      <motion.div className="mb-6" variants={item}>
        <h2 className="mb-3 border-b border-sidebar-light pb-1 text-xs font-bold tracking-widest uppercase text-sidebar-heading">
          Contact
        </h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent">&#9993;</span>
            <a
              href={`mailto:${cv.contact.email}`}
              className="break-all hover:text-accent-light transition-colors"
            >
              {cv.contact.email}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent">&#9872;</span>
            <span>{cv.contact.location}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent">&#128279;</span>
            <a
              href={cv.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent">&#128279;</span>
            <a
              href={cv.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Skills with Progress Bars */}
      {Object.entries(cv.skills).map(([category, skills]) => (
        <motion.div key={category} className="mb-5" variants={item}>
          <h2 className="mb-2 border-b border-sidebar-light pb-1 text-xs font-bold tracking-widest uppercase text-sidebar-heading">
            {category}
          </h2>
          <motion.div
            className="space-y-2.5"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                }}
              >
                <div className="mb-1 text-xs text-sidebar-text">
                  {skill.name}
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-sidebar-light transition-[height] duration-200 group-hover:h-2">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-shadow duration-200 group-hover:shadow-[0_0_8px_var(--color-accent)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.aside>
  );
}
