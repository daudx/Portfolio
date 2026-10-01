export type ProjectCategory = "All" | "Web" | "AI" | "Backend" | "Desktop" | "Mobile";

export interface Project {
  id: string; // URL slug
  title: string;
  categoryTag: string;
  category: "Web" | "AI" | "Backend" | "Desktop" | "Mobile";
  description: string;
  longDescription: string;
  problem?: string;
  myRole?: string;
  technologies: string[];
  github?: string; // TODO: Provide GitHub repository URL if public
  live?: string; // TODO: Provide live deployment URL if available
  image: string;
  featured: boolean;
  year: string;
  status: "Completed" | "In Development" | "Prototype" | "Research";
  // Optional verified metrics & build info (only rendered when backed by verified facts)
  metric?: string;
  statusBadge?: string;
  buildVersion?: string;
  architectureHighlights: string[];
  visualType: "browser" | "dashboard" | "rag-pipeline" | "pos-system" | "network" | "code" | "mobile";
}

export const projects: Project[] = [
  {
    id: "dawacheck",
    title: "DawaCheck",
    categoryTag: "FULL-STACK WEB · HEALTHCARE",
    category: "Web",
    description: "Medicine verification and pharmaceutical intelligence platform for consumers and pharmacies.",
    longDescription: "A comprehensive healthcare verification web application engineered to enable patients, consumers, and pharmacists to authenticate medicine batches, review verified active ingredients, inspect regulatory status, and counter counterfeit drug circulation.",
    problem: "Counterfeit medicines pose severe health risks, and patients often lack an accessible, trustworthy system to verify batch validity, manufacturer credentials, and dosage safety in real time.",
    myRole: "Lead Full-Stack Developer: Designed the relational PostgreSQL schema, built the FastAPI verification endpoints with indexed lookups, and implemented the responsive Next.js client interface.",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/daudx/dawacheck",
    // TODO: Provide live URL if deployed publicly
    live: undefined,
    image: "/projects/dawacheck.png",
    featured: true,
    year: "2026",
    status: "In Development",
    // Only verified, verifiable badges (no unbacked recall percentages or contradictory draft labels)
    statusBadge: "IN DEVELOPMENT",
    architectureHighlights: [
      "FastAPI backend with normalized PostgreSQL schema for drug registry and batch validation",
      "Optimized query indexing for rapid lookups of active pharmaceutical ingredients and manufacturers",
      "Clean verification dashboard with clear batch authenticity states and regulatory inspection details"
    ],
    visualType: "dashboard"
  },
  {
    id: "jeremy-ai-rag",
    title: "Jeremy AI Legal RAG Backend",
    categoryTag: "AI · RAG · BACKEND",
    category: "AI",
    description: "Retrieval-Augmented Generation system designed for complex legal queries and semantic search.",
    longDescription: "An enterprise RAG backend built for precision legal research. Features structural chunking preserving statutory article boundaries, dense vector embeddings, vector search reranking, and citation synthesis with strict provenance tracking to eliminate hallucination.",
    problem: "Legal statutes and case law contain complex nested structures. Traditional keyword search misses semantic nuances, while naive chunking splits vital legal precedents across arbitrary token boundaries.",
    myRole: "AI & Backend Engineer: Built the document ingestion pipeline, hierarchical legal document chunker, dense vector retrieval layer, and streaming FastAPI response API.",
    technologies: ["Python", "FastAPI", "Vector Search", "Embeddings", "RAG", "PostgreSQL", "LangChain"],
    github: "https://github.com/daudx/jeremy-ai-legal-rag",
    // TODO: Provide live demo URL if available
    live: undefined,
    image: "/projects/jeremy-rag.png",
    featured: true,
    year: "2026",
    status: "In Development",
    statusBadge: "ACTIVE PIPELINE",
    architectureHighlights: [
      "Hierarchical chunking preserving legal article structure, precedent citations, and statutory subsections",
      "Dense vector retrieval paired with re-ranking to prioritize verified authoritative case precedents",
      "Asynchronous streaming response pipeline built with FastAPI and PostgreSQL persistence"
    ],
    visualType: "rag-pipeline"
  },
  {
    id: "nucleus-dispatch",
    title: "Nucleus Dispatch",
    categoryTag: "FULL-STACK WEB · TELEPHONY",
    category: "Web",
    description: "Call-center dialer platform and real-time dispatcher dashboard for high-volume support operations.",
    longDescription: "A specialized call-center dialer and agent dispatch platform engineered for high-concurrency communications. Features real-time call queue management, automated dialer routing, agent state tracking, customer interaction logs, and CRM integration.",
    problem: "Traditional call-center software is bloated, high-latency, and difficult to customize for agile support teams needing real-time call telemetry and rapid queue dispatching.",
    myRole: "Full-Stack Engineer: Architected the agent management dashboard, call-routing state machine, and real-time event updates.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    // TODO: Provide GitHub repository URL
    github: "https://github.com/daudx/nucleus-dispatch", // TODO: Confirm public repository link
    live: undefined, // TODO: Provide live staging or production URL
    image: "/projects/bahriatech-forum.png", // TODO: Replace with dedicated Nucleus Dispatch screenshot
    featured: true,
    year: "2026",
    status: "In Development",
    statusBadge: "ACTIVE BUILD",
    architectureHighlights: [
      "Real-time agent queue dispatching with low-latency WebSocket connection state updates",
      "Normalized PostgreSQL schema for campaign records, call durations, and customer history",
      "Modular dashboard UI with keyboard shortcuts for rapid call disposition logging"
    ],
    visualType: "dashboard"
  },
  {
    id: "khilari-league",
    title: "Khilari League '26",
    categoryTag: "FULL-STACK WEB · SPORTS TECH",
    category: "Web",
    description: "Tournament registration, team verification, and live match dashboard for sports competitions.",
    longDescription: "A tournament management and player verification portal for competitive gaming and sports events. Manages player registration workflows, document verification, dynamic tournament brackets, team rosters, and real-time match results.",
    problem: "Organizing tournaments involves chaotic manual verification of players, identity validation, roster lockouts, and error-prone bracket generation.",
    myRole: "Web Developer: Built the player registration funnel, admin verification workflow, and responsive tournament leaderboard.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
    // TODO: Provide GitHub repository URL
    github: "https://github.com/daudx/khilari-league-26", // TODO: Confirm public repository link
    live: undefined, // TODO: Provide live URL if hosted
    image: "/projects/bahriatech-forum.png", // TODO: Replace with dedicated Khilari League screenshot
    featured: true,
    year: "2026",
    status: "Completed",
    statusBadge: "DEPLOYED",
    architectureHighlights: [
      "Multi-step player registration flow with file validation and automated identity checks",
      "Role-based administrative portal for league officials to approve teams and seed brackets",
      "Optimized static and dynamic caching for high-traffic tournament schedule pages"
    ],
    visualType: "browser"
  },
  {
    id: "firecrust-pos",
    title: "FireCrust POS",
    categoryTag: "DESKTOP · OFFLINE WINDOWS POS",
    category: "Desktop",
    description: "Offline Windows desktop point-of-sale system with kitchen display and local SQLite data store.",
    longDescription: "A high-reliability, offline-first Windows desktop Point-of-Sale (POS) application engineered specifically for restaurant environments. Functions entirely without internet connectivity, managing table layouts, thermal kitchen order tickets (KOT), split checks, inventory deduction, and shift reconciliation.",
    problem: "Cloud-only POS systems crash or stall during network outages, leading to lost orders, kitchen bottlenecks, and revenue disruption during peak restaurant hours.",
    myRole: "Desktop Application Developer: Developed the Electron desktop wrapper, local SQLite embedded database queries, table mapping interface, and ESC/POS thermal printer driver integration.",
    technologies: ["Electron", "Node.js", "React", "SQLite", "Tailwind CSS", "Windows API"],
    github: "https://github.com/daudx/firecrust-pos",
    live: undefined, // Desktop offline application
    image: "/projects/firecrust-pos.png",
    featured: true,
    year: "2025",
    status: "Completed",
    statusBadge: "STABLE OFFLINE",
    architectureHighlights: [
      "Offline-first local SQLite architecture guaranteeing uninterrupted ordering during network drops",
      "Direct hardware ESC/POS thermal printing integration with custom receipt formatting",
      "Real-time kitchen order ticket routing and dynamic table layout state machine"
    ],
    visualType: "pos-system"
  },
  {
    id: "documind",
    title: "DOCUMIND",
    categoryTag: "AI · DOCUMENT INTELLIGENCE",
    category: "AI",
    description: "AI document analysis engine with semantic Q&A and cross-document reasoning.",
    longDescription: "An intelligent document intelligence workspace enabling users to upload technical PDFs and research papers, execute multi-document comparative queries, and extract structured tabular data with source citations.",
    problem: "Extracting insights from dense multi-page PDFs requires tedious manual skimming and frequently loses context between distinct tables and footnotes.",
    myRole: "AI Engineer: Implemented PDF parsing pipeline, LangChain document loaders, vector storage, and grounded prompt synthesis.",
    technologies: ["Python", "FastAPI", "React", "Vector DB", "LangChain", "Tailwind CSS"],
    github: "https://github.com/daudx/documind",
    live: undefined,
    image: "/projects/documind.png",
    featured: false,
    year: "2025",
    status: "Prototype",
    architectureHighlights: [
      "Multi-modal document parser extracting tables, footnotes, and diagrams without text loss",
      "Context-aware grounded generation minimizing hallucinations and enforcing citations"
    ],
    visualType: "code"
  },
  {
    id: "fyp-system",
    title: "Final Year Project (FYP)",
    categoryTag: "AI · ACADEMIC CAPSTONE",
    category: "AI",
    description: "AI-driven intelligent system capstone project at Bahria University (title & architecture finalizing).",
    longDescription: "Undergraduate capstone project in the 6th/7th semester of BSIT at Bahria University Islamabad. Focusing on applied artificial intelligence, automated reasoning, and production-ready system architecture.",
    problem: "Addressing real-world automation and decision-support challenges using modern AI techniques and scalable backend design.",
    myRole: "Lead System Architect & Core Developer: Designing core ML models, API endpoints, and end-user interface.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "PyTorch / ML"],
    github: "https://github.com/daudx", // TODO: Update repository once finalized
    live: undefined,
    image: "/projects/jeremy-rag.png", // TODO: Update screenshot once project UI is locked
    featured: false,
    year: "2026",
    status: "In Development",
    statusBadge: "CAPSTONE WIP",
    architectureHighlights: [
      "Modular microservices architecture separating model inference from application logic",
      "PostgreSQL database with strict referential integrity and audit logging",
      "Modern Next.js web portal with accessible dashboards and reporting"
    ],
    visualType: "code"
  },
  {
    id: "bahriatech-forum",
    title: "BahriaTech Forum",
    categoryTag: "FULL-STACK WEB · COMMUNITY",
    category: "Web",
    description: "Community and discussion platform for engineering students and tech collaboration.",
    longDescription: "A university technology forum facilitating knowledge exchange, open-source peer reviews, course resources, and event coordination across engineering disciplines.",
    problem: "Engineering students lacked a unified, searchable hub for academic notes, technical Q&A, and project collaboration.",
    myRole: "Full-Stack Developer: Built the forum backend with recursive SQL comments, user authentication, and markdown rendering.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    github: "https://github.com/daudx/bahriatech-forum",
    live: undefined,
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
    problem: "Understanding network security and packet serialization requires building bare-metal socket tunnels rather than relying on black-box wrappers.",
    myRole: "Systems Developer: Implemented packet serialization, AES encryption wrapper, and virtual interface routing in Python.",
    technologies: ["Python", "Sockets", "Cryptography", "Linux Networking"],
    github: "https://github.com/daudx/vpn-project",
    live: undefined,
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

export const projectCategories: ProjectCategory[] = ["All", "Web", "AI", "Backend", "Desktop", "Mobile"];
