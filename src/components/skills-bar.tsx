"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { 
  Sparkles,
  Layers,
  Server,
  BrainCircuit,
  Smartphone,
  Check
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Frontend: Layers,
  Backend: Server,
  "AI/ML": BrainCircuit,
  "Mobile/Other": Smartphone
};

export function SkillsBar() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const displayedGroups = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="pb-12">
      <div className="page-container">
        
        {/* Main Card */}
        <div className="neo-card p-6 md:p-8 bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl shadow-xs transition-colors">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D8D4C9] dark:border-[#2A2A28]">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#121212] text-white border border-[#2A2A28] px-3 py-1 rounded-lg font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#D96C3A]" aria-hidden="true" />
                <h2 id="skills-heading" className="text-xs uppercase tracking-wider text-white">TECHNICAL SKILLS</h2>
              </div>
              <span className="font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] hidden sm:inline">
                [ PRODUCTION CAPABILITIES ]
              </span>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Skills Category Filter">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 font-mono text-xs font-semibold tracking-wider rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A] ${
                      isSelected
                        ? "bg-[#D96C3A] text-white shadow-xs"
                        : "bg-[#F6F4EF] dark:bg-[#1A1A18] text-[#6B6B60] dark:text-[#9A968E] hover:text-[#121212] dark:hover:text-white border border-[#D8D4C9] dark:border-[#2A2A28]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grouped Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {displayedGroups.map((group) => {
              const Icon = CATEGORY_ICONS[group.category] || Layers;

              return (
                <div 
                  key={group.category}
                  className="bg-[#F6F4EF]/70 dark:bg-[#1A1A18]/60 border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl p-4 flex flex-col justify-between space-y-4"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-2 pb-2.5 border-b border-[#D8D4C9]/70 dark:border-[#2A2A28]">
                      <Icon className="w-4 h-4 text-[#D96C3A]" aria-hidden="true" />
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white">
                        {group.category}
                      </h3>
                    </div>

                    <p className="font-mono text-[11px] text-[#6B6B60] dark:text-[#9A968E] pt-2 mb-3">
                      {group.description}
                    </p>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative inline-flex items-center gap-1 bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] hover:border-[#D96C3A] dark:hover:border-[#D96C3A] px-2.5 py-1 rounded-md text-[11px] font-mono text-[#121212] dark:text-[#F6F4EF] transition-all"
                        >
                          <Check className="w-3 h-3 text-[#D96C3A] opacity-70 group-hover:opacity-100" aria-hidden="true" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#D8D4C9]/60 dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#6B6B60] dark:text-[#9A968E]">
                    <span>{group.skills.length} TECHNOLOGIES</span>
                    <span className="text-[#D96C3A] font-semibold">VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
