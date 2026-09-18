export interface CapabilityCategory {
  title: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  heroStatus: string;
  availability: string;
  eyebrow: string;
  headline: string;
  bio: string;
  about: {
    pullQuote: string;
    paragraphs: string[];
    highlightChips: string[];
  };
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    url: string;
  };
  capabilities: CapabilityCategory[];
  currentlyBuilding: {
    badge: string;
    headline: string;
    description: string;
    items: {
      title: string;
      category: string;
      description: string;
      status: "In active development" | "Refining & scaling" | "Research & prototype";
    }[];
  };
  seo: {
    siteUrl: string;
    title: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Dawood Sajid",
  title: "Dawood Sajid — AI Developer & Full-Stack Engineer",
  role: "AI Developer @ DEVNOZ",
  // ── Toggle this value to change the hero status chip ──────────────
  heroStatus: "OPEN TO OPPORTUNITIES",
  // ── Displayed in footer contact section ───────────────────────────
  availability: "Available for freelance, internships & full-time roles.",
  eyebrow: "AI DEVELOPER · FULL-STACK",
  headline: "Code. Create. Innovate.",
  bio: "IT student and developer focused on full-stack applications, AI-powered systems, APIs, databases and practical software products.",
  about: {
    pullQuote: "I believe software is inside craft. The exact spot where rigorous systems & editorial typography & code that computes reliably ships on time, and lets deliberate ideas hit the mainstream.",
    paragraphs: [
      "I'm an IT student and developer interested in building software that solves practical problems. My work spans full-stack development, AI/ML, RAG systems, APIs, databases and desktop applications.",
      "I value clarity, maintainability, and shipping software that works reliably in real scenarios. I use GitHub to experiment, iterate in public, and continuously deepen my understanding of distributed systems and modern machine learning pipelines."
    ],
    highlightChips: [
      "Next.js", "React", "TypeScript", "Python",
      "FastAPI", "Node.js", "PostgreSQL", "SQL",
      "AI/ML", "RAG", "Git", "Docker"
    ]
  },
  email: "daudx619@gmail.com",
  github: {
    username: "daudx",
    url: "https://github.com/daudx"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/dawood-sajid-58ab7a2b4/"
  },
  capabilities: [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "HTML5", "CSS3 / Modern CSS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "REST APIs", "API Architecture", "Authentication"]
    },
    {
      title: "AI / Data",
      skills: ["AI/ML", "RAG Systems", "Vector Embeddings", "Vector Search", "Web Scraping", "Data Pipelines"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "SQLite", "Oracle Database", "Relational Modeling", "Query Optimization"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Electron", "Postman", "Linux Basics"]
    }
  ],
  currentlyBuilding: {
    badge: "Current Focus",
    headline: "What I'm currently designing and building.",
    description: "Active engineering efforts focused on healthcare accessibility, AI knowledge retrieval, and full-stack utilities.",
    items: [
      {
        title: "DawaCheck",
        category: "Full-Stack Web / Healthcare",
        description: "A pharmaceutical verification platform providing medicine authentication, dosage guidance, and verified details.",
        status: "In active development"
      },
      {
        title: "Jeremy AI Legal RAG Backend",
        category: "AI / RAG Architecture",
        description: "High-accuracy retrieval-augmented generation engine querying legal corpora using vector embeddings and semantic search.",
        status: "Refining & scaling"
      },
      {
        title: "DOCUMIND",
        category: "Document Intelligence",
        description: "Intelligent document question-answering and summarization system with structured citations.",
        status: "Research & prototype"
      }
    ]
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dawoodsajid.dev",
    title: "Dawood Sajid — AI Developer & Full-Stack Engineer",
    description: "Portfolio of Dawood Sajid — AI Developer at DEVNOZ building full-stack applications, AI-powered RAG systems, and practical software products."
  }
};
