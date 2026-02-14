import { useState, useEffect } from "react";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "coursework", label: "Coursework" },
  { id: "research", label: "Research" },
];

export default function SectionNav() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${label}`}
        >
          <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              active === id
                ? "scale-125 bg-accent"
                : "bg-main-muted/40 hover:bg-main-muted"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
