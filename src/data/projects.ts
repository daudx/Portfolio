export type ProjectCategory = "All" | "Web" | "AI" | "Backend" | "Desktop";

export interface Project {
  id: string;
  title: string;
  categoryTag: string;
  category: "Web" | "AI" | "Backend" | "Desktop";
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
  year: string;
  status: "Completed" | "In Development" | "Prototype";
  architectureHighlights: string[];
  visualType: "browser" | "dashboard" | "rag-pipeline" | "pos-system" | "network" | "code";
}

export const projects: Project[] = [
  {
    id: "dawacheck",
    title: "DawaCheck",
    categoryTag: "FULL-STACK WEB · HEALTHCARE",
    category: "Web",
    description: "Medicine verification and pharmaceutical intelligence platform for consumers and pharmacies.",
    longDescription: "A comprehensive healthcare verification web application that enables consumers and pharmacists to authenticate medicine batches, review verified active ingredients, verify regulatory approval, and counter counterfeit pharmaceutical distribution.",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/daudx/dawacheck",
    image: "/projects/dawacheck.png",
    featured: true,
    year: "2026",
    status: "In Development",
    architectureHighlights: [
      "FastAPI backend with normalized PostgreSQL schema for drug registry and batch validation",
      "Sub-50ms fuzzy lookup indexing for active pharmaceutical ingredients and manufacturers",
      "Clean verification dashboard with instant batch authenticity indicators"
    ],
    visualType: "dashboard"
  },
  {
    id: "jeremy-ai-rag",
    title: "Jeremy AI Legal RAG Backend",
    categoryTag: "AI · RAG · BACKEND",
    category: "AI",
    description: "Retrieval-Augmented Generation system designed for complex legal queries and semantic search.",
    longDescription: "An enterprise-grade RAG backend built for precision legal research. Features structural chunking preserving legal article boundaries, dense vector embeddings, vector search reranking, and citation synthesis with strict provenance tracking.",
    technologies: ["Python", "FastAPI", "Vector Search", "Embeddings", "RAG", "PostgreSQL"],
    github: "https://github.com/daudx/jeremy-ai-legal-rag",
    image: "/projects/jeremy-rag.png",
    featured: true,
    year: "2026",
    status: "In Development",
    architectureHighlights: [
      "Hierarchical chunking preserving legal article structure, precedent, and subsections",
      "Dense vector retrieval with cross-encoder re-ranking to maximize citation precision",
      "Asynchronous streaming response pipeline built with FastAPI and PostgreSQL"
    ],
    visualType: "rag-pipeline"
  },
  {
    id: "documind",
    title: "DOCUMIND",
    categoryTag: "AI · DOCUMENT INTELLIGENCE",
    category: "AI",
    description: "AI document analysis engine with semantic Q&A and cross-document reasoning.",
    longDescription: "An intelligent document intelligence workspace enabling users to upload technical PDFs and research papers, execute multi-document comparative queries, and extract structured tabular data with source citations.",
    technologies: ["Python", "React", "FastAPI", "Vector DB", "LangChain", "Tailwind CSS"],
    github: "https://github.com/daudx/documind",
    image: "/projects/documind.png",
    featured: true,
    year: "2025",
    status: "Prototype",
    architectureHighlights: [
      "Multi-modal document parser extracting tables, footnotes, and diagrams without text loss",
      "Context-aware grounded generation minimizing hallucinations and enforcing citations"
    ],
    visualType: "code"
  },
  {
    id: "firecrust-pos",
    title: "FireCrust POS",
    categoryTag: "DESKTOP · RESTAURANT TECH",
    category: "Desktop",
    description: "High-throughput restaurant point-of-sale system with kitchen display and real-time inventory.",
    longDescription: "A robust Point-of-Sale solution engineered for demanding restaurant environments. Features interactive table mapping, split billing, offline resilience, automated kitchen order ticket (KOT) routing, and inventory reconciliation.",
    technologies: ["Node.js", "Electron", "React", "SQLite", "Tailwind CSS"],
    github: "https://github.com/daudx/firecrust-pos",
    image: "/projects/firecrust-pos.png",
    featured: true,
    year: "2025",
    status: "Completed",
    architectureHighlights: [
      "Local-first SQLite architecture ensuring uninterrupted order processing during network drops",
      "Low-latency thermal printer integration and kitchen display socket sync"
    ],
    visualType: "pos-system"
  },
  {
    id: "bahriatech-forum",
    title: "BahriaTech Forum",
    categoryTag: "FULL-STACK WEB · COMMUNITY",
    category: "Web",
    description: "Community and discussion platform for engineering students and tech collaboration.",
    longDescription: "A university technology forum facilitating knowledge exchange, open-source peer reviews, course resources, and event coordination across engineering disciplines.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    github: "https://github.com/daudx/bahriatech-forum",
    image: "/projects/bahriatech-forum.png",
    featured: false,
    year: "2025",
    status: "Completed",
    architectureHighlights: [
      "Threaded comment tree with optimized recursive SQL queries for fast rendering",
      "Role-based moderation, tags filtering, and markdown formatting engine"
    ],
    visualType: "browser"
  },
  {
    id: "vpn-secure-tunnel",
    title: "VPN Secure Tunnel",
    categoryTag: "SYSTEMS · NETWORKING · CRYPTO",
    category: "Backend",
    description: "Encrypted network tunnel implementation with custom protocol handshake and packet routing.",
    longDescription: "A systems-level networking project implementing secure packet encapsulation, cryptographic handshake validation, and lightweight TUN/TAP interface routing.",
    technologies: ["Python", "Sockets", "Cryptography", "Linux Networking"],
    github: "https://github.com/daudx/vpn-project",
    image: "/projects/vpn-project.png",
    featured: false,
    year: "2024",
    status: "Completed",
    architectureHighlights: [
      "Custom symmetric encryption session negotiation using AES-256-GCM",
      "Packet encapsulation pipeline handling MTU fragmentation without packet drop"
    ],
    visualType: "network"
  }
];

export const projectCategories: ProjectCategory[] = ["All", "Web", "AI", "Backend", "Desktop"];

