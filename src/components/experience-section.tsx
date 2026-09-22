"use client";

import React from "react";
import { experience } from "@/data/experience";
import { Briefcase, ArrowRight, ArrowDown, Sparkles, Star } from "lucide-react";

interface ExperienceSectionProps {
  onOpenContact: () => void;
}

export function ExperienceSection({ onOpenContact }: ExperienceSectionProps) {
  return (
    <section id="experience" className="pb-12">
      <div className="page-container">
        
        {/* Main Experience Card */}
        <div className="neo-card bg-white p-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Pink Accent Vertical Panel (2 cols on desktop) */}
            <div className="lg:col-span-2 bg-[#FF499E] border-b-3 lg:border-b-0 lg:border-r-3 border-black p-6 flex flex-col justify-between items-start min-h-[160px]">
              <div>
                <h3 className="font-black text-2xl md:text-3xl text-black uppercase tracking-tight font-mono mb-2">
                  EXPERIENCE
                </h3>
                <span className="font-mono text-xs font-bold text-black uppercase tracking-wider block">
                  [ TIMELINE ]
                </span>
              </div>

              <div className="hidden lg:block pt-8">
                <ArrowDown className="w-6 h-6 text-black stroke-[3]" />
              </div>
            </div>

            {/* Middle Experience Items Column (6 cols on desktop) */}
            <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-black space-y-6">
              <div className="space-y-6">
                {experience.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-black space-y-1">
                    {/* Bullet node */}
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-black border border-white rounded-full"></span>

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-mono text-xs md:text-sm font-black text-black uppercase tracking-tight">
                        {item.role} @ {item.company}
                      </h4>
                      <span className="font-mono text-[10px] font-bold text-black bg-gray-100 border border-black px-1.5 py-0.5">
                        {item.dates}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-gray-700 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* View Full Resume Button */}
              <div className="pt-4 border-t-2 border-black">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn py-2.5 px-5 text-xs inline-flex"
                >
                  <span>VIEW FULL RESUME</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Purple Collaboration Banner (4 cols on desktop) */}
            <div className="lg:col-span-4 bg-[#6366F1] p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-white border-2 border-black px-2.5 py-1 text-[10px] font-mono font-bold text-black uppercase shadow-neo-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#6366F1] stroke-[2.5]" />
                  OPEN FOR COLLABORATION
                </div>

                <h3 className="font-black text-2xl md:text-3xl text-white uppercase tracking-tight leading-none font-mono">
                  LET'S BUILD SOMETHING AMAZING TOGETHER.
                </h3>

                <p className="font-mono text-xs text-purple-100 leading-relaxed">
                  Have a product idea, technical problem, or AI system to build? Let's talk about turning space into reality.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="neo-btn neo-btn-green w-full py-3 text-xs justify-center font-black"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

              {/* Decorative star bottom right */}
              <Star className="absolute bottom-3 right-3 w-8 h-8 text-white/20 stroke-[1.5]" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
