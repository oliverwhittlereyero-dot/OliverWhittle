import { motion } from "framer-motion";
import { cv } from "../data/cv";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Sidebar() {
  return (
    <motion.aside
      className="w-72 shrink-0 bg-sidebar p-8 text-sidebar-text max-md:hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Photo */}
      <motion.div className="mb-6 flex justify-center" variants={item}>
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

      {/* Skills */}
      {Object.entries(cv.skills).map(([category, items]) => (
        <motion.div key={category} className="mb-5" variants={item}>
          <h2 className="mb-2 border-b border-sidebar-light pb-1 text-xs font-bold tracking-widest uppercase text-sidebar-heading">
            {category}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {items.map((skill) => (
              <span
                key={skill}
                className="rounded bg-sidebar-light px-2 py-0.5 text-xs text-sidebar-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.aside>
  );
}
