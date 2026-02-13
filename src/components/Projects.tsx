import { cv } from "../data/cv";

export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-heading text-xl font-bold text-navy-800">
        Projects
      </h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-6">
        {cv.projects.map((project, i) => (
          <div key={i}>
            <h3 className="font-heading text-lg font-bold text-navy-800">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-navy-300 underline-offset-2 hover:text-navy-600"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-1 leading-relaxed text-navy-700">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-navy-300 px-3 py-0.5 text-xs text-navy-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
