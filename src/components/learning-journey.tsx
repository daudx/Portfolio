"use client";

import React, { useState } from "react";
import { journeyMilestones, JourneyMilestone } from "@/data/journey";
import { TrendingUp, ArrowRight } from "lucide-react";

interface LearningJourneyProps {
  onOpenContact?: () => void;
}

export function LearningJourney({ onOpenContact: _onOpenContact }: LearningJourneyProps) {
  // Default to latest 2026 milestone
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(
    journeyMilestones[journeyMilestones.length - 1]
  );

  return (
    <section id="journey" aria-labelledby="journey-heading" className="pb-16">
      <div className="page-container">
        
        {/* Main Card */}
        <div className="neo-card bg-white dark:bg-[#121212] rounded-2xl p-0 overflow-hidden border border-[#D8D4C9] dark:border-[#2A2A28] transition-colors">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#121212] border-b border-[#2A2A28] p-4 text-[#F6F4EF]">
            <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-wide uppercase">
              <TrendingUp className="w-5 h-5 text-[#D96C3A] stroke-[2.5]" aria-hidden="true" />
              <h2 id="journey-heading" className="text-xs font-bold text-white">MY LEARNING JOURNEY • PROOF OF GROWTH</h2>
            </div>
            <span className="bg-[#D96C3A] text-white font-mono text-xs font-semibold px-3 py-0.5 rounded-md">
              2021 — 2026
            </span>
          </div>

          {/* Interactive Chart Container */}
          <div className="p-6 md:p-10 bg-white dark:bg-[#121212]">
            
            {/* SVG Growth Plot */}
            <div className="relative w-full h-48 md:h-56 mb-8 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] p-4 rounded-xl shadow-xs overflow-hidden">
              
              {/* Grid lines background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* Chart SVG Canvas */}
              <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 600 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="terracottaGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6B6B60" />
                    <stop offset="50%" stopColor="#D96C3A" />
                    <stop offset="100%" stopColor="#D96C3A" />
                  </linearGradient>
                  <linearGradient id="areaTerracotta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(217, 108, 58, 0.25)" />
                    <stop offset="100%" stopColor="rgba(217, 108, 58, 0.0)" />
                  </linearGradient>
                </defs>

                {/* Area under curve */}
                <path
                  d="M 50 110 L 50 95 L 150 82 L 250 68 L 350 50 L 450 35 L 550 15 L 550 110 Z"
                  fill="url(#areaTerracotta)"
                />

                {/* Main Smooth Line */}
                <path
                  d="M 50 95 L 150 82 L 250 68 L 350 50 L 450 35 L 550 15"
                  fill="none"
                  stroke="url(#terracottaGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Node Circles */}
                {journeyMilestones.map((ms, idx) => {
                  const cx = 50 + idx * 100;
                  const cy = 110 - (ms.yValue / 100) * 95;
                  const isSelected = selectedMilestone?.year === ms.year;

                  return (
                    <g key={ms.year} className="cursor-pointer" onClick={() => setSelectedMilestone(ms)}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "9" : "5"}
                        fill={isSelected ? "#D96C3A" : "#ffffff"}
                        stroke="#121212"
                        strokeWidth="2"
                        className="transition-all hover:scale-125"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill="#121212"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Timeline Year Cards (Responsive Grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {journeyMilestones.map((ms) => {
                const isSelected = selectedMilestone?.year === ms.year;

                return (
                  <button
                    key={ms.year}
                    onClick={() => setSelectedMilestone(ms)}
                    className={`p-3 border rounded-xl font-mono text-left transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#D96C3A] ${
                      isSelected
                        ? "bg-[#D96C3A] text-white border-[#D96C3A]"
                        : "bg-white dark:bg-[#1A1A18] text-[#121212] dark:text-[#F6F4EF] border-[#D8D4C9] dark:border-[#2A2A28] hover:bg-[#EFECE6] dark:hover:bg-[#2A2A28]"
                    }`}
                  >
                    <div className={`font-bold text-sm mb-1 ${isSelected ? "text-white" : "text-[#121212] dark:text-white"}`}>{ms.year}</div>
                    <div className={`font-semibold text-[11px] uppercase tracking-tight line-clamp-1 ${isSelected ? "text-white" : "text-[#121212] dark:text-white"}`}>
                      {ms.title}
                    </div>
                    <div className={`text-[10px] line-clamp-1 ${isSelected ? "text-white/80" : "text-[#6B6B60] dark:text-[#9A968E]"}`}>{ms.subtitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Detail Box */}
            {selectedMilestone && (
              <div className="mt-6 border border-[#D8D4C9] dark:border-[#2A2A28] bg-[#F6F4EF] dark:bg-[#1A1A18] p-4.5 rounded-xl font-mono space-y-2 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-xs text-[#121212] dark:text-white uppercase bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-0.5 rounded">
                    [ MILESTONE: {selectedMilestone.year} ]
                  </span>
                  <span className="text-[11px] font-semibold text-[#6B6B60] dark:text-[#9A968E]">
                    {selectedMilestone.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
                  {selectedMilestone.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedMilestone.highlightTech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] px-2 py-0.5 rounded text-[#121212] dark:text-[#F6F4EF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Terracotta Callout Banner */}
          <div className="bg-[#D96C3A] text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#121212] bg-white border border-white px-2 py-0.5 rounded inline-block">
                CONTINUOUS IMPROVEMENT
              </span>
              <h3 className="font-serif-headline text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                ALWAYS LEARNING. ALWAYS BUILDING.
              </h3>
              <p className="text-xs text-white/90 max-w-xl">
                Evaluating modern AI retrieval architectures, streaming web protocols, and high-performance databases to ship dependable systems.
              </p>
            </div>

            <a
              href="#projects"
              className="neo-btn bg-[#121212] text-white font-semibold py-3 px-6 text-xs flex-shrink-0 rounded-lg hover:bg-[#2A2A28] inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>SEE WHAT I&apos;M BUILDING</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
