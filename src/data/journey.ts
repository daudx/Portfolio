export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlightTech: string[];
  yValue: number; // percentage level for line plot (0-100)
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2021",
    title: "FOUNDATIONS & WEB BASICS",
    subtitle: "First Code & Algorithms",
    description: "Built foundational web projects and discovered a deep passion for programming. Mastered vanilla JavaScript, DOM manipulation, semantic HTML, and core algorithms.",
    highlightTech: ["HTML5", "CSS3", "JavaScript", "Algorithms"],
    yValue: 20
  },
  {
    year: "2022",
    title: "FULL-STACK & DATABASE ENGINEERING",
    subtitle: "MERN & University Journey",
    description: "Expanded into single page applications, React state patterns, Node.js servers, and relational modeling at Bahria University.",
    highlightTech: ["React", "Node.js", "Express", "PostgreSQL", "Git"],
    yValue: 38
  },
  {
    year: "2023",
    title: "SYSTEMS, FASTAPI & CONTAINERIZATION",
    subtitle: "Backend Specialization",
    description: "Architected high-throughput Python backends with FastAPI, containerized workflows with Docker, and explored low-level systems programming in 8086 Assembly.",
    highlightTech: ["Python", "FastAPI", "Docker", "PostgreSQL", "8086 Assembly"],
    yValue: 56
  },
  {
    year: "2024",
    title: "PRODUCTION RAG & AI RETRIEVAL",
    subtitle: "Vector Search & Legal AI",
    description: "Engineered specialized retrieval systems, vector database pipelines, and grounded document intelligence applications with LangChain.",
    highlightTech: ["LangChain", "Vector DBs", "RAG", "Embeddings", "TypeScript"],
    yValue: 74
  },
  {
    year: "2025",
    title: "ENTERPRISE PRODUCTS & DESKTOP POS",
    subtitle: "Full-Stack Deployment",
    description: "Shipped FireCrust offline desktop POS with SQLite, built DawaCheck healthcare verification, and led technical workshops at NinjasCode.",
    highlightTech: ["Next.js", "Electron", "SQLite", "Tailwind CSS", "FastAPI"],
    yValue: 88
  },
  {
    year: "2026",
    title: "PRODUCTION AI & SCALED PLATFORMS",
    subtitle: "Current Focus · DEVNOZ",
    description: "Leading AI development at DEVNOZ, building production-grade RAG architectures with strict provenance, real-time call center telephony, and final year capstone.",
    highlightTech: ["Production RAG", "Next.js App Router", "FastAPI", "pgvector", "PostgreSQL"],
    yValue: 100
  }
];
