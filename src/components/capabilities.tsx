import React from "react";
import { Layout, Server, Sparkles, Database, Wrench } from "lucide-react";
import { siteConfig } from "@/data/site";
import { TechChip } from "@/components/ui/tech-chip";

const ICONS = [
  <Layout key={0} size={15} />,
  <Server key={1} size={15} />,
  <Sparkles key={2} size={15} className="text-[#0066FF]" />,
  <Database key={3} size={15} />,
  <Wrench key={4} size={15} />
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 border-t border-[#E0E0E0]">
      <div className="page-container">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow-pill mb-4">Competencies</span>
          <h2 className="text-mobbin-h1 text-[#141414] tracking-tight mb-4">
            What I work with.
          </h2>
          <p className="text-mobbin-body-lg text-[#555555] max-w-2xl">
            Technologies, frameworks, and tools I use to build reliable full-stack and AI applications.
          </p>
        </div>

        {/* Clean 5-Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.capabilities.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-[20px] bg-[#FFFFFF] border border-[#E0E0E0] flex flex-col justify-between hover:border-[#C4C4C4] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F3F3] flex items-center justify-center border border-[#E0E0E0] text-[#141414]">
                    {ICONS[idx % ICONS.length]}
                  </div>
                  <h3 className="text-base font-bold text-[#141414] tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map(skill => (
                    <TechChip key={skill} label={skill} size="sm" />
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0F0] mono text-[10px] text-[#ADADAD] uppercase tracking-wider">
                Production Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
