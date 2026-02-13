import { cv } from "../data/cv";

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
      <h1 className="font-heading text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
        {cv.name}
      </h1>
      <p className="mt-1 text-lg text-navy-600">{cv.title}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-navy-700">
        {cv.contact.location && <span>{cv.contact.location}</span>}
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
      <p className="mt-6 leading-relaxed text-navy-700">{cv.about}</p>
    </header>
  );
}
