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
    "First-year Applied Mathematics student at TU Eindhoven with a strong foundation in analysis, algebra, and numerical methods. Achieved an average grade of 8.5 in the first year, including a 9 in Calculus, Linear Algebra and Discrete Mathematics. Graduated from the IB Diploma Programme with 44/45 points. Passionate about mathematical modelling, computational methods, and their real-world applications.",

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
      details: "First-year student. Scored a 9 in Calculus, Linear Algebra and Discrete Mathematics.",
      stats: [
        { value: 8.5, decimals: 1, suffix: "/10", label: "Average Grade" },
      ],
    },
    {
      degree: "International Baccalaureate Diploma",
      institution: "High School",
      location: "",
      startDate: "2023",
      endDate: "2025",
      details:
        "Higher Level subjects: Mathematics Analysis & Approaches (AA HL), Biology HL, English HL.",
      stats: [{ value: 44, decimals: 0, suffix: "/45", label: "IB Score" }],
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
      { name: "MATLAB", level: 85 },
      { name: "Mathematica", level: 70 },
      { name: "GeoGebra", level: 75 },
    ],
    Programming: [
      { name: "Python", level: 90 },
      { name: "LaTeX", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React", level: 65 },
    ],
    Libraries: [
      { name: "NumPy", level: 85 },
      { name: "SciPy", level: 75 },
      { name: "matplotlib", level: 80 },
      { name: "pandas", level: 75 },
    ],
    Tools: [
      { name: "Git", level: 80 },
      { name: "Jupyter", level: 85 },
      { name: "VS Code", level: 90 },
    ],
    Languages: [
      { name: "English", level: 95 },
      { name: "Spanish", level: 95 },
    ],
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
