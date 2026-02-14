export const cv = {
  name: "Oliver Whittle",
  title: "Applied Mathematics Student",
  contact: {
    email: "oliver@example.com",
    github: "https://github.com/OliverWhittleReyero-dot",
    linkedin: "https://linkedin.com/in/oliverwhittle",
    location: "Eindhoven, Netherlands",
  },
  about:
    "First-year Applied Mathematics student at TU Eindhoven with a strong foundation in analysis, algebra, and numerical methods. Achieved an average grade of 8.6 in the first year and graduated from the IB Diploma Programme with 44/45 points. Passionate about mathematical modelling, computational methods, and their real-world applications.",

  researchInterests: [
    "Numerical methods and computational mathematics",
    "Mathematical modelling and simulation",
    "Data analysis and machine learning",
    "Optimisation and operations research",
  ],

  coursework: {
    "Analysis & Calculus": [
      "Analysis (Real)",
      "Calculus",
      "Differential Equations",
    ],
    "Algebra & Discrete": [
      "Linear Algebra",
      "Discrete Mathematics",
      "Set Theory & Logic",
    ],
    "Computational Methods": [
      "Numerical Methods",
      "Programming",
      "Data Processing",
    ],
  },

  education: [
    {
      degree: "BSc Applied Mathematics",
      institution: "Eindhoven University of Technology (TU/e)",
      location: "Eindhoven, Netherlands",
      startDate: "2025",
      endDate: "2028 (expected)",
      details:
        "First-year student. Current average grade: 8.6/10.",
    },
    {
      degree: "International Baccalaureate Diploma",
      institution: "High School",
      location: "",
      startDate: "2023",
      endDate: "2025",
      details:
        "Scored 44/45 points. Higher Level subjects: Mathematics Analysis & Approaches (AA HL), Biology HL, English HL.",
    },
  ],

  experience: [
    {
      role: "Mathematics Tutor",
      company: "Private Tutoring",
      location: "Eindhoven, Netherlands",
      startDate: "Sep 2025",
      endDate: "Present",
      bullets: [
        "Tutor high school students in IB Mathematics and university-level calculus",
        "Develop tailored problem sets and study plans based on individual needs",
        "Help students build mathematical intuition and problem-solving strategies",
      ],
    },
  ],

  skills: {
    "Mathematical Software": [
      "MATLAB",
      "Mathematica",
      "GeoGebra",
    ],
    Programming: ["Python", "LaTeX", "TypeScript", "React"],
    Libraries: ["NumPy", "SciPy", "matplotlib", "pandas"],
    Tools: ["Git", "Jupyter", "VS Code"],
    Languages: ["English", "Spanish"],
  },

  projects: [
    {
      name: "Lotka-Volterra ODE Parameter Optimisation",
      description:
        "Optimised parameters of the Lotka-Volterra predator-prey ODE system to fit historical Canadian lynx-hare pelt trading data. Implemented and compared numerical methods including Euler, Runge-Kutta, and least-squares optimisation to achieve best-fit solutions.",
      tech: ["Python", "NumPy", "SciPy", "matplotlib"],
    },
    {
      name: "Elo Rating Model for Dutch Football",
      description:
        "Built a simulation of the Elo rating system applied to the Dutch Eredivisie, modelling match outcomes and ranking dynamics over multiple seasons. Extended the base model with home-advantage corrections and predictive analysis.",
      tech: ["Python", "pandas", "matplotlib"],
    },
    {
      name: "Graph Theory Modelling",
      description:
        "Applied graph theory to two distinct problems: optimising the path of an Automated Guided Vehicle (AGV) through a warehouse network, and solving a murder mystery puzzle using graph colouring and traversal algorithms.",
      tech: ["Python", "NetworkX", "matplotlib"],
    },
    {
      name: "Personal CV Website",
      description:
        "Designed and built this responsive personal website to showcase academic background and projects, using React, TypeScript, and Vite.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      link: "https://github.com/OliverWhittleReyero-dot/OliverWhittle",
    },
  ],
};
