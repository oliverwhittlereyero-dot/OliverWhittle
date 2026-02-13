import { cv } from "../data/cv";

export default function Skills() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-heading text-xl font-bold text-navy-800">Skills</h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-4">
        {Object.entries(cv.skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-heading text-base font-bold text-navy-700">
              {category}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-navy-300 px-3 py-0.5 text-sm text-navy-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
