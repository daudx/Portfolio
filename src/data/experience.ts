export interface Experience {
  role: string;
  company: string;
  location?: string;
  dates: string;
  description: string;
  achievements: string[];
  type: "full-time" | "part-time" | "freelance" | "internship" | "academic" | "community";
  technologies: string[];
}

export const experience: Experience[] = [
  {
    role: "AI Developer",
    company: "DEVNOZ",
    location: "Islamabad, Pakistan",
    dates: "2025 — Present", // TODO: Confirm exact start month and year
    description: "Architecting enterprise AI systems, high-accuracy RAG backends, and full-stack client applications.",
    achievements: [
      "Engineered high-accuracy legal and document RAG pipelines with hierarchical chunking and dense vector retrieval.",
      "Built resilient FastAPI microservices and asynchronous streaming APIs serving production web clients.",
      "Integrated PostgreSQL databases with optimized vector index querying and relational data persistence."
    ],
    type: "full-time",
    technologies: ["Python", "FastAPI", "RAG", "PostgreSQL", "Next.js", "Docker"]
  },
  {
    role: "Web Developer",
    company: "Good Advice",
    location: "Remote / Islamabad",
    dates: "2024 — 2025", // TODO: Confirm exact start and end dates
    description: "Engineered responsive client-facing web portals, advisory web applications, and interactive user interfaces.",
    achievements: [
      "Developed modular web frontends using modern JavaScript, React, and CSS component systems.",
      "Integrated client web applications with backend advisory services, state stores, and dynamic form workflows.",
      "Optimized cross-browser performance, responsiveness, and web interface accessibility."
    ],
    type: "part-time",
    technologies: ["React", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "REST APIs"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Cyber Reconnaissance and Combat Center",
    location: "Islamabad, Pakistan",
    dates: "2023 — 2024", // TODO: Confirm exact internship dates
    description: "Designed and built frontend monitoring dashboards, threat visualization interfaces, and operator tools.",
    achievements: [
      "Built responsive telemetry UI components and interactive situational awareness dashboards.",
      "Collaborated with security teams to translate raw event streams into intuitive visual status widgets.",
      "Refactored legacy UI components to improve rendering speed and adherence to frontend design standards."
    ],
    type: "internship",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Data Visualization", "REST APIs"]
  },
  {
    role: "Open Source Community Builder",
    company: "NinjasCode",
    location: "Community",
    dates: "2024 — Present", // TODO: Confirm exact start date
    description: "Leading technical community initiatives, hosting developer workshops, and mentoring students in open-source engineering.",
    achievements: [
      "Organized student developer sessions covering Git workflows, web development foundations, and modern AI stacks.",
      "Mentored aspiring developers on contributing to open-source repositories and building public project portfolios.",
      "Fostered collaborative engineering practices across academic and developer networks."
    ],
    type: "community",
    technologies: ["Open Source", "Community Leadership", "Developer Advocacy", "Git / GitHub"]
  },
  {
    role: "BS Information Technology (BSIT)",
    company: "Bahria University Islamabad",
    location: "Islamabad, Pakistan",
    dates: "2023 — Present", // Confirmed: Currently in 6th semester (TODO: Confirm exact completion year)
    description: "Pursuing Bachelor of Science in Information Technology with coursework in Algorithms, DBMS, Systems, and AI.",
    achievements: [
      "Maintaining strong academic standing across Core Computing, Data Structures, Database Systems, and Networks.",
      "Active participant in technical symposiums, hackathons, and software engineering competitions.",
      "Currently in 6th semester developing AI-driven final year capstone system."
    ],
    type: "academic",
    technologies: ["Data Structures", "PostgreSQL", "Operating Systems", "Computer Networks", "AI / ML"]
  }
];
