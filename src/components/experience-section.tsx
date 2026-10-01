"use client";

import React from "react";
import { experience } from "@/data/experience";
import { ArrowRight, ArrowDown, Sparkles, Star, CheckCircle2 } from "lucide-react";

interface ExperienceSectionProps {
  onOpenContact?: () => void;
}

export function ExperienceSection({ onOpenContact }: ExperienceSectionProps) {
  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experience" aria-labelledby="experience-heading" className="pb-12">
      <div className="page-container">
        
        {/* Main Experience Card */}
        <div className="neo-card bg-white dark:bg-[#121212] rounded-2xl p-0 overflow-hidden border border-[#D8D4C9] dark:border-[#2A2A28] transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Terracotta Accent Vertical Panel (2 cols on desktop) */}
            <div className="lg:col-span-2 bg-[#D96C3A] text-white border-b lg:border-b-0 lg:border-r border-[#D8D4C9] dark:border-[#2A2A28] p-6 flex flex-col justify-between items-start min-h-[160px]">
              <div>
                <h2 id="experience-heading" className="font-serif-headline font-bold text-2xl md:text-3xl uppercase tracking-tight mb-2 text-white">
                  EXPERIENCE
                </h2>
                <span className="font-mono text-xs font-semibold text-white/90 uppercase tracking-wider block">
                  [ TIMELINE ]
                </span>
              </div>

              <div className="hidden lg:block pt-8" aria-hidden="true">
                <ArrowDown className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
            </div>

            {/* Middle Experience Items Column (6 cols on desktop) */}
            <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D8D4C9] dark:border-[#2A2A28] space-y-6">
              <div className="space-y-6">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#D8D4C9] dark:border-[#2A2A28] space-y-2">
                    {/* Bullet node */}
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#D96C3A] border-2 border-white dark:border-[#121212] rounded-full"></span>

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-xs md:text-sm font-bold text-[#121212] dark:text-white uppercase tracking-tight">
                        {item.role} <span className="text-[#D96C3A]">@</span> {item.company}
                      </h3>
                      <span className="font-mono text-[10px] font-semibold text-[#6B6B60] dark:text-[#9A968E] bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2 py-0.5 rounded">
                        {item.dates}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {item.achievements.map((ach, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2 font-mono text-[11px] text-[#6B6B60] dark:text-[#9A968E]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D96C3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-1.5 py-0.5 rounded text-[#121212] dark:text-[#EFECE6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Resume Button */}
              <div className="pt-4 border-t border-[#D8D4C9] dark:border-[#2A2A28]">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn py-2.5 px-5 text-xs inline-flex items-center gap-2 rounded-lg bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                >
                  <span>VIEW FULL RESUME (PDF)</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Dark Charcoal Collaboration Banner (4 cols on desktop) */}
            <div className="lg:col-span-4 bg-[#121212] p-6 md:p-8 text-[#F6F4EF] flex flex-col justify-between relative overflow-hidden space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#1A1A18] border border-[#2A2A28] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#D96C3A] uppercase rounded-md">
                  <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  OPEN FOR COLLABORATION
                </div>

                <h3 className="font-serif-headline font-bold text-2xl md:text-3xl text-white uppercase tracking-tight leading-snug">
                  LET&apos;S BUILD SOMETHING RELIABLE TOGETHER.
                </h3>

                <p className="font-mono text-xs text-[#B4B0A6] leading-relaxed">
                  Have a product idea, technical problem, or AI system to build? Let&apos;s talk about turning ideas into reality.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleContactClick}
                  className="neo-btn neo-btn-green w-full py-3 text-xs justify-center font-semibold rounded-lg inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </button>
              </div>

              {/* Decorative star bottom right */}
              <Star className="absolute bottom-3 right-3 w-8 h-8 text-white/10 stroke-[1.5]" aria-hidden="true" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
