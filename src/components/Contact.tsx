import { cv } from "../data/cv";

export default function Contact() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10">
      <hr className="border-navy-200" />
      <div className="mt-6 flex flex-col items-center gap-2 text-sm text-navy-600">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a
            href={`mailto:${cv.contact.email}`}
            className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
          >
            {cv.contact.email}
          </a>
          <a
            href={cv.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
          >
            GitHub
          </a>
          <a
            href={cv.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-navy-300 underline-offset-2 hover:text-navy-500"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-navy-400">
          &copy; {new Date().getFullYear()} {cv.name}
        </p>
      </div>
    </footer>
  );
}
