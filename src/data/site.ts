export interface CapabilityCategory {
  title: string;
  skills: string[];
}

export interface DeveloperConfigCard {
  name: string;
  focus: string[];
  stack: string[];
  motto: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  company: string;
  // Hero availability badge
  heroStatus: string;
  availability: string;
  eyebrow: string;
  headline: string;
  tagline: string;
  bio: string;
  resumeUrl: string; // TODO: Replace placeholder in /public/resume.pdf with real PDF
  developerConfig: DeveloperConfigCard;
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
    // TODO: Confirm final production domain (vercel.app vs custom domain)
    siteUrl: string;
    title: string;
    description: string;
  };
  contact: {
    // TODO: Set RESEND_API_KEY in .env.local or Vercel dashboard to enable direct email dispatch
    resendApiKeyConfigured: boolean;
    recipientEmail: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Dawood Sajid",
  title: "Dawood Sajid — AI Developer & Full-Stack Engineer",
  role: "AI Developer",
  company: "DEVNOZ",
  // ── Hero status badge (no emoji-only, clean indicator) ───────────
  heroStatus: "AVAILABLE FOR ROLES & FREELANCE",
  // ── Displayed in contact section ─────────────────────────────────
  availability: "Available for full-time engineering roles, high-impact contracts & technical collaborations.",
  eyebrow: "AI DEVELOPER · FULL-STACK ENGINEER",
  headline: "ENGINEERING SYSTEMS THAT COMPUTE & SCALE.",
  tagline: "AI Developer building RAG systems and full-stack products with Next.js, FastAPI and PostgreSQL.",
  bio: "AI Developer at DEVNOZ and 6th-semester BSIT student at Bahria University Islamabad, architecting RAG pipelines, enterprise web apps, and low-latency APIs.",
  resumeUrl: "/resume.pdf",
  developerConfig: {
    name: "Dawood Sajid",
    focus: ["Full-Stack", "AI / RAG"],
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    motto: "Building resilient AI systems and production web products."
  },
  about: {
    pullQuote: "I build software at the intersection of rigorous systems engineering and clean typography — high-precision RAG pipelines, resilient APIs, and accessible web applications that perform under real loads.",
    paragraphs: [
      "I am an AI Developer at DEVNOZ and an Information Technology undergraduate (6th semester) at Bahria University Islamabad. My work centers on building reliable production systems — specifically Retrieval-Augmented Generation (RAG) architectures, FastAPI microservices, and full-stack Next.js applications.",
      "From sub-50ms vector searches to local-first desktop POS systems and call-center platforms, I prioritize operational reliability, clean relational schemas with PostgreSQL, and well-structured codebases."
    ],
    highlightChips: [
      "Next.js", "TypeScript", "FastAPI", "Python",
      "PostgreSQL", "RAG Systems", "LangChain", "Vector DBs",
      "Docker", "Node.js", "MERN", "Flutter"
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
      skills: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "MERN Stack", "HTML5 / Modern CSS"]
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "REST APIs", "Docker", "8086 Assembly"]
    },
    {
      title: "AI / ML",
      skills: ["RAG Systems", "LangChain", "Vector DBs", "Dense Embeddings", "Semantic Search", "LLM Evaluation"]
    },
    {
      title: "Mobile & Other",
      skills: ["Flutter", "Firebase", "SQLite", "Electron (Desktop)", "Git / GitHub", "Linux"]
    }
  ],
  currentlyBuilding: {
    badge: "Current Focus · Late 2026",
    headline: "Active production engineering & research systems.",
    description: "Focusing on enterprise RAG accuracy, healthcare verification, and real-time operational tooling.",
    items: [
      {
        title: "Jeremy AI Legal RAG Backend",
        category: "AI / Legal RAG Architecture",
        description: "Retrieval-augmented generation engine querying legal corpora with hierarchical chunking and citation synthesis.",
        status: "Refining & scaling"
      },
      {
        title: "DawaCheck",
        category: "Full-Stack Web / Healthcare",
        description: "Pharmaceutical verification platform providing drug batch authentication and active ingredient validation.",
        status: "In active development"
      },
      {
        title: "Nucleus Dispatch",
        category: "Real-time Telephony / Web",
        description: "Call-center dialer and agent dashboard built for high-concurrency telephony workflows.",
        status: "In active development"
      }
    ]
  },
  seo: {
    // TODO: Confirm final production domain (currently vercel.app)
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dawoodsajiddev.vercel.app",
    title: "Dawood Sajid — AI Developer & Full-Stack Engineer",
    description: "AI Developer building RAG systems and full-stack products with Next.js, FastAPI, and PostgreSQL. View projects, architecture notes, and experience."
  },
  contact: {
    resendApiKeyConfigured: Boolean(process.env.RESEND_API_KEY),
    recipientEmail: "daudx619@gmail.com"
  }
};
