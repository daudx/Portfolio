import React from "react";

const CURRENT_ITEMS = [
  {
    category: "HEALTHCARE INTELLIGENCE",
    title: "DawaCheck",
    description: "Medicine verification platform counteracting counterfeit pharmaceuticals through serial and batch lookup.",
    status: "Active development"
  },
  {
    category: "LEGAL AI & RAG",
    title: "Jeremy AI Legal RAG",
    description: "Hierarchical statutory chunking, dense vector retrieval, and provenance-anchored legal synthesis.",
    status: "Active development"
  },
  {
    category: "DOCUMENT INTELLIGENCE",
    title: "DOCUMIND",
    description: "Multi-document comparative reasoning engine extracting structured technical data from complex PDFs.",
    status: "Active development"
  }
];

export function CurrentFocus() {
  return (
    <section className="py-24 sm:py-32 border-t border-[#E0E0E0]">
      <div className="page-container">
        {/* Section Heading with Generous Whitespace */}
        <div className="mb-14 sm:mb-20">
          <span className="eyebrow-pill mb-4">Now</span>
          <h2 className="text-mobbin-h1 text-[#141414] tracking-tight mb-4">
            Currently building.
          </h2>
          <p className="text-mobbin-body-lg text-[#555555] max-w-2xl">
            Focused engineering domains currently receiving active attention, research, and development.
          </p>
        </div>

        {/* 3 Compact Focus Cards with Refined Padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CURRENT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-[24px] bg-[#FFFFFF] border border-[#E0E0E0] flex flex-col justify-between hover:border-[#C4C4C4] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[11px] font-bold text-[#0066FF] tracking-wider uppercase">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F3F3F3] border border-[#E0E0E0] text-[10px] mono text-[#141414]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141414] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F0F0F0] mono text-[10px] text-[#ADADAD] uppercase tracking-wider">
                In Active Engineering Sprint
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
