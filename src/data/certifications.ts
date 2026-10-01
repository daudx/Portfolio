export interface Certification {
  id: string;
  provider: string;
  providerShort: string;
  year: string;
  title: string;
  description: string;
  // TODO: Dawood to supply real credential URLs for each certification
  credentialUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "meta-frontend",
    provider: "META",
    providerShort: "META",
    year: "2023",
    title: "META FRONT-END DEVELOPER",
    description: "Advanced React architectures, responsive design principles, UI test design, state management, and performance optimization.",
    // TODO: Supply real Meta Front-End Developer certificate URL (leave undefined or supply valid link)
    credentialUrl: undefined,
    skills: ["React", "JavaScript", "CSS3", "UI/UX", "Testing"]
  },
  {
    id: "google-data-analytics",
    provider: "GOOGLE",
    providerShort: "GOOGLE",
    year: "2024",
    title: "GOOGLE ADVANCED DATA ANALYTICS",
    description: "Regression modeling, predictive machine learning pipelines, exploratory data analysis, and advanced SQL data extraction.",
    // TODO: Supply real Google Advanced Data Analytics certificate URL
    credentialUrl: undefined,
    skills: ["Python", "Predictive Modeling", "SQL", "Statistics", "Machine Learning"]
  },
  {
    id: "deeplearning-rag",
    provider: "DEEPLEARNING.AI",
    providerShort: "DEEPLEARNING.AI",
    year: "2024",
    title: "LANGCHAIN & RAG SYSTEMS",
    description: "Vector stores, dense document embeddings, hybrid lexical/vector search, agentic routing, and multi-doc QA pipelines.",
    // TODO: Supply real DeepLearning.AI RAG certificate URL
    credentialUrl: undefined,
    skills: ["LangChain", "Vector DBs", "RAG", "LLMs", "FastAPI"]
  }
];
