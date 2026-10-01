export interface Skill {
  name: string;
  proficiency: 1 | 2 | 3;
  level?: "Advanced" | "Proficient" | "Familiar";
  description?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: Skill[];
}

export type SkillGroup = SkillCategory;

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Modern, performant web architectures and interactive user interfaces.",
    skills: [
      { name: "Next.js", proficiency: 3, level: "Advanced", description: "App Router, SSR, Server Components" },
      { name: "React", proficiency: 3, level: "Advanced", description: "Hooks, state management, architecture" },
      { name: "TypeScript", proficiency: 3, level: "Advanced", description: "Strict typing, generics, interfaces" },
      { name: "Tailwind CSS", proficiency: 3, level: "Advanced", description: "Design systems, responsive tokens" },
      { name: "MERN", proficiency: 2, level: "Proficient", description: "Mongo, Express, React, Node full-stack" },
      { name: "JavaScript (ES6+)", proficiency: 3, level: "Advanced", description: "Async/await, DOM, event loops" },
      { name: "HTML5 / CSS3", proficiency: 3, level: "Advanced", description: "Semantic markup, CSS grid & flex" }
    ]
  },
  {
    category: "Backend",
    description: "High-throughput APIs, relational persistence, and system utilities.",
    skills: [
      { name: "Python", proficiency: 3, level: "Advanced", description: "Asynchronous backend development & scripting" },
      { name: "FastAPI", proficiency: 3, level: "Advanced", description: "High-performance REST APIs & OpenAPI" },
      { name: "PostgreSQL", proficiency: 3, level: "Advanced", description: "Complex queries, indexing & relational schemas" },
      { name: "Node.js", proficiency: 2, level: "Proficient", description: "Event-driven runtime & microservices" },
      { name: "Docker", proficiency: 2, level: "Proficient", description: "Containerization & multi-stage builds" },
      { name: "8086 Assembly", proficiency: 2, level: "Proficient", description: "Low-level registers, memory & hardware logic" },
      { name: "REST APIs", proficiency: 3, level: "Advanced", description: "RESTful architecture & authentication" }
    ]
  },
  {
    category: "AI/ML",
    description: "Retrieval-augmented systems, semantic search, and LLM engineering.",
    skills: [
      { name: "LangChain", proficiency: 2, level: "Proficient", description: "Chains, retrieval agents & document loaders" },
      { name: "RAG Systems", proficiency: 3, level: "Advanced", description: "Hierarchical chunking, re-ranking & citations" },
      { name: "Vector DBs", proficiency: 2, level: "Proficient", description: "Chroma, Pinecone & pgvector indexation" },
      { name: "Dense Embeddings", proficiency: 2, level: "Proficient", description: "Semantic similarity & nearest neighbor search" },
      { name: "LLM Orchestration", proficiency: 2, level: "Proficient", description: "Prompt engineering & hallucination guardrails" }
    ]
  },
  {
    category: "Mobile/Other",
    description: "Mobile applications, embedded databases, and developer tooling.",
    skills: [
      { name: "Flutter", proficiency: 2, level: "Proficient", description: "Cross-platform mobile UI development" },
      { name: "Firebase", proficiency: 2, level: "Proficient", description: "Auth, Firestore, Cloud Functions" },
      { name: "Git / GitHub", proficiency: 3, level: "Advanced", description: "Branching workflows, CI/CD, collaboration" },
      { name: "SQLite", proficiency: 3, level: "Advanced", description: "Local-first embedded database persistence" },
      { name: "Linux / Bash", proficiency: 2, level: "Proficient", description: "CLI navigation, scripting & server config" }
    ]
  }
];

// Compatibility export
export const skills: SkillCategory[] = skillsData;

// Flat export for compatibility
export const allSkillsList: string[] = skillsData.flatMap((group) => group.skills.map((s) => s.name));
