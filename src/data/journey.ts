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
    title: "HTML, CSS, JS",
    subtitle: "First Web Apps",
    description: "Built foundational web applications, static pages, and interactive scripts. Mastered core JavaScript and DOM manipulation.",
    highlightTech: ["HTML5", "CSS3", "JavaScript", "DOM"],
    yValue: 20
  },
  {
    year: "2022",
    title: "REACT & NODE",
    subtitle: "Full-Stack MERN",
    description: "Expanded into single page applications, state management, REST APIs, Express servers, and database integration.",
    highlightTech: ["React", "Node.js", "Express", "MongoDB"],
    yValue: 35
  },
  {
    year: "2023",
    title: "FASTAPI & DOCKER",
    subtitle: "Systems Architecture",
    description: "Architected high-throughput Python backends, microservices, relational PostgreSQL schemas, and containerized deployments.",
    highlightTech: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    yValue: 50
  },
  {
    year: "2024",
    title: "WEB AI & RAG",
    subtitle: "Vector DBs & Agents",
    description: "Engineered legal retrieval pipelines, document intelligence platforms, dense embeddings, vector search, and custom AI agents.",
    highlightTech: ["LangChain", "Vector DBs", "RAG", "Embeddings"],
    yValue: 72
  },
  {
    year: "2025+",
    title: "AUTONOMOUS AGENTS",
    subtitle: "More to come ->",
    description: "Focusing on multi-agent orchestration systems, sub-second inference pipelines, and scalable enterprise AI products.",
    highlightTech: ["Agents", "LLM Evaluation", "Real-Time AI", "Edge Computing"],
    yValue: 95
  }
];
