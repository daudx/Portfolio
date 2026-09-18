export interface Experience {
  role: string;
  company: string;
  dates: string;
  description: string;
  type: "full-time" | "part-time" | "freelance" | "internship" | "academic";
}

export const experience: Experience[] = [
  {
    role: "AI Developer",
    company: "DEVNOZ",
    dates: "2025 — Present",
    description: "Building AI-powered products, RAG systems, and full-stack applications for clients.",
    type: "full-time"
  },
  {
    role: "Software Developer",
    company: "Good Advice",
    dates: "2024 — 2025",
    description: "Developed backend systems and REST APIs for digital advisory products.",
    type: "part-time"
  },
  {
    role: "IT Intern",
    company: "Cyber Reconnaissance & Combat Center",
    dates: "2023 — 2024",
    description: "Worked on network monitoring tools, internal dashboards, and security utilities.",
    type: "internship"
  },
  {
    role: "IT Student",
    company: "Bahria University",
    dates: "2022 — Present",
    description: "Studying Information Technology with focus on software engineering, databases, and AI.",
    type: "academic"
  }
];
