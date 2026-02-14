import { motion } from "framer-motion";
import { cv } from "../data/cv";

export default function Profile() {
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
          <div>
            <h1 className="font-heading text-2xl font-bold text-main-heading">
              {cv.name}
            </h1>
            <p className="text-sm text-accent">{cv.title}</p>
            <p className="mt-1 text-xs text-main-muted">{cv.contact.location}</p>
          </div>
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
