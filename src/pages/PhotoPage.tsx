import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PhotoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-outer-bg p-8 transition-colors duration-300">
      <motion.img
        src="Oliver_photo.jpeg"
        alt="Oliver Whittle"
        className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block text-sm text-accent transition-colors hover:text-accent-light"
        >
          &larr; Back to CV
        </Link>
      </motion.div>
    </div>
  );
}
