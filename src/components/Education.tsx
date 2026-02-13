import { cv } from "../data/cv";

export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="font-heading text-xl font-bold text-navy-800">
        Education
      </h2>
      <hr className="mt-2 border-navy-200" />
      <div className="mt-6 space-y-6">
        {cv.education.map((edu, i) => (
          <div key={i}>
            <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-800">
                  {edu.degree}
                </h3>
                <p className="text-navy-600">
                  {edu.institution} &middot; {edu.location}
                </p>
              </div>
              <p className="mt-1 text-sm text-navy-500 sm:mt-0">
                {edu.startDate} &ndash; {edu.endDate}
              </p>
            </div>
            {edu.details && (
              <p className="mt-2 text-navy-700">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
