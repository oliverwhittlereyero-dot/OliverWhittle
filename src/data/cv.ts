export const cv = {
  name: "Oliver Whittle",
  title: "Mathematics Student",
  contact: {
    email: "oliver@example.com",
    github: "https://github.com/OliverWhittleReyero-dot",
    linkedin: "https://linkedin.com/in/oliverwhittle",
    location: "London, UK",
  },
  about:
    "Undergraduate mathematics student with broad interests spanning pure and applied mathematics. Particularly drawn to algebraic structures, topology, and the interplay between continuous and discrete mathematics. Seeking opportunities in mathematical research and quantitative roles.",

  researchInterests: [
    "Algebraic topology and homological algebra",
    "Number theory and arithmetic geometry",
    "Stochastic processes and mathematical modelling",
    "Numerical methods for partial differential equations",
  ],

  coursework: {
    "Pure Mathematics": [
      "Abstract Algebra",
      "Real Analysis",
      "Complex Analysis",
      "Topology",
      "Number Theory",
      "Measure Theory",
    ],
    "Applied Mathematics": [
      "Ordinary Differential Equations",
      "Partial Differential Equations",
      "Mathematical Modelling",
      "Fluid Dynamics",
      "Numerical Analysis",
    ],
    "Statistics & Probability": [
      "Probability Theory",
      "Statistical Inference",
      "Stochastic Processes",
      "Bayesian Statistics",
    ],
  },

  education: [
    {
      degree: "BSc Mathematics",
      institution: "University of London",
      location: "London, UK",
      startDate: "2022",
      endDate: "2025 (expected)",
      details:
        "First-class trajectory. Dissertation on applications of homological algebra to topological data analysis.",
    },
  ],

  experience: [
    {
      role: "Undergraduate Teaching Assistant",
      company: "University of London, Department of Mathematics",
      location: "London, UK",
      startDate: "Sep 2024",
      endDate: "Present",
      bullets: [
        "Lead weekly problem classes for first-year Linear Algebra and Calculus modules",
        "Mark coursework and provide written feedback to approximately 40 students",
        "Hold office hours to support students with problem sets and exam preparation",
      ],
    },
    {
      role: "Summer Research Intern",
      company: "University of London, Applied Mathematics Group",
      location: "London, UK",
      startDate: "Jun 2024",
      endDate: "Aug 2024",
      bullets: [
        "Implemented numerical solvers for systems of nonlinear PDEs in Python and MATLAB",
        "Investigated convergence properties of finite element methods on irregular meshes",
        "Presented findings at the departmental summer research symposium",
      ],
    },
  ],

  skills: {
    "Mathematical Software": [
      "MATLAB",
      "Mathematica",
      "SageMath",
      "GeoGebra",
    ],
    Programming: ["Python", "R", "LaTeX", "C++", "Julia"],
    Libraries: ["NumPy", "SciPy", "SymPy", "matplotlib"],
    Tools: ["Git", "Jupyter", "VS Code", "Linux"],
  },

  projects: [
    {
      name: "Topological Data Analysis Toolkit",
      description:
        "Python library implementing persistent homology algorithms for analysing point-cloud data sets. Applied to synthetic and real-world data from sensor networks.",
      tech: ["Python", "NumPy", "SciPy", "matplotlib"],
      link: "https://github.com/OliverWhittleReyero-dot/tda-toolkit",
    },
    {
      name: "Numerical PDE Solver",
      description:
        "Finite element and finite difference solvers for the heat equation, wave equation, and Laplace's equation on 2D domains with various boundary conditions.",
      tech: ["Python", "MATLAB", "LaTeX"],
    },
    {
      name: "Prime Distribution Visualiser",
      description:
        "Interactive visualisation of the distribution of primes, Ulam spirals, and the Riemann zeta function along the critical strip.",
      tech: ["Python", "matplotlib", "Streamlit"],
    },
  ],
};
