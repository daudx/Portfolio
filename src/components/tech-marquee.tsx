import React from "react";

const MARQUEE_ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "SQLite",
  "AI/ML",
  "RAG Systems",
  "Vector Search",
  "Docker",
  "GitHub",
  "Node.js",
  "REST APIs"
];

export function TechMarquee() {
  return (
    <div className="w-full border-y border-[#E0E0E0] bg-[#FAFAFA] py-5 overflow-hidden select-none">
      <div className="marquee-container">
        <div className="marquee-content items-center">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8 text-xs font-semibold text-[#555555] uppercase tracking-widest whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0D0D0]" />
            </div>
          ))}
        </div>
        <div className="marquee-content items-center" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8 text-xs font-semibold text-[#555555] uppercase tracking-widest whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D0D0D0]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
