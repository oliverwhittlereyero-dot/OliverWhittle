import { motion } from "framer-motion";
import { cv } from "../data/cv";

export default function Profile() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Mobile-only header with photo and contact */}
      <div className="mb-6 md:hidden">
        <div className="flex items-center gap-5">
          <img
            src="Oliver_photo.jpeg"
            alt={cv.name}
            className="h-20 w-20 rounded-full border-2 border-main-border object-cover object-top"
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
          <a href={`mailto:${cv.contact.email}`} className="hover:text-accent">
            {cv.contact.email}
          </a>
          <a href={cv.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
        </div>
      </div>

      <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-main-heading">
        Profile
      </h2>
      <div className="mt-1 mb-3 h-0.5 w-10 bg-accent" />
      <p className="leading-relaxed text-main-text">{cv.about}</p>
    </motion.section>
  );
}
