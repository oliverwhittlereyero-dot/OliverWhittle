import { cv } from "../data/cv";

export default function ResearchInterests() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-heading text-xl font-bold text-navy-800">
        Research Interests
      </h2>
      <hr className="mt-2 border-navy-200" />
      <ul className="mt-6 list-disc space-y-1 pl-5 text-navy-700">
        {cv.researchInterests.map((interest, i) => (
          <li key={i}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}
