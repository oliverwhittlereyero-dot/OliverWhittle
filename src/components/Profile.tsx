import { motion } from "framer-motion";
import { cv } from "../data/cv";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Profile({ theme, toggleTheme }: Props) {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Mobile-only header with photo and contact */}
      <motion.div
        className="mb-6 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-5">
          <motion.img
            src="Oliver_photo.jpeg"
            alt={cv.name}
            className="h-20 w-20 rounded-full border-2 border-main-border object-cover object-top"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <div className="flex-1">
            <h1 className="font-heading text-2xl font-bold text-main-heading">
              {cv.name}
            </h1>
            <p className="text-sm text-accent">{cv.title}</p>
            <p className="mt-1 text-xs text-main-muted">{cv.contact.location}</p>
          </div>
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-main-muted transition-colors hover:bg-main-border hover:text-accent"
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
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-main-muted">
          <a href={`mailto:${cv.contact.email}`} className="hover:text-accent transition-colors">
            {cv.contact.email}
          </a>
          <a href={cv.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.h2
        className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Profile
      </motion.h2>
      <motion.div
        className="mt-1 mb-3 h-0.5 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: 40 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.p
        className="leading-relaxed text-main-text"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {cv.about}
      </motion.p>
    </motion.section>
  );
}
