import { cv } from "../data/cv";

export default function Coursework() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-heading text-xl font-bold text-navy-800">
        Relevant Coursework
      </h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-4">
        {Object.entries(cv.coursework).map(([category, courses]) => (
          <div key={category}>
            <h3 className="font-heading text-base font-bold text-navy-700">
              {category}
            </h3>
            <p className="mt-1 text-navy-600">{courses.join(" \u00B7 ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
