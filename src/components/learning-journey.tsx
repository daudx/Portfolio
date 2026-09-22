"use client";

import React, { useState } from "react";
import { journeyMilestones, JourneyMilestone } from "@/data/journey";
import { TrendingUp, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface LearningJourneyProps {
  onOpenContact?: () => void;
}

export function LearningJourney({ onOpenContact }: LearningJourneyProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(
    journeyMilestones[3] // default select 2024
  );

  return (
    <section id="journey" className="pb-16">
      <div className="page-container">
        
        {/* Main Card */}
        <div className="neo-card bg-white p-0 overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#6366F1] border-b-3 border-black p-4 text-white">
            <div className="flex items-center gap-3 font-mono text-sm font-black tracking-wide uppercase">
              <TrendingUp className="w-5 h-5 stroke-[2.5]" />
              <span>MY LEARNING JOURNEY • PROOF OF GROWTH</span>
            </div>
            <span className="bg-white border-2 border-black text-black font-mono text-xs font-bold px-2.5 py-0.5 shadow-neo-sm">
              2021 — 2025+
            </span>
          </div>

          {/* Interactive Chart Container */}
          <div className="p-6 md:p-10 bg-white">
            
            {/* SVG Growth Plot */}
            <div className="relative w-full h-48 md:h-56 mb-8 bg-[#F5F5EE] border-2 border-black p-4 shadow-neo">
              
              {/* Grid lines background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              {/* Chart SVG Canvas */}
              <svg className="w-full h-full overflow-visible relative z-10" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF499E" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A6FA3C" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.25)" />
                    <stop offset="100%" stopColor="rgba(166, 250, 60, 0.0)" />
                  </linearGradient>
                </defs>

                {/* Area under curve */}
                <path
                  d="M 50 100 L 50 90 L 150 75 L 250 60 L 350 40 L 450 15 L 450 100 Z"
                  fill="url(#areaGradient)"
                />

                {/* Main Smooth Line */}
                <path
                  d="M 50 90 Q 100 82.5 150 75 T 250 60 T 350 40 T 450 15"
                  fill="none"
                  stroke="url(#curveGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Node Circles */}
                {journeyMilestones.map((ms, idx) => {
                  const cx = 50 + idx * 100;
                  const cy = 100 - ms.yValue * 0.85;
                  const isSelected = selectedMilestone?.year === ms.year;

                  return (
                    <g key={ms.year} className="cursor-pointer" onClick={() => setSelectedMilestone(ms)}>
                      {/* Pulse outer ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "10" : "6"}
                        fill={isSelected ? "#A6FA3C" : "#ffffff"}
                        stroke="#000000"
                        strokeWidth="2.5"
                        className="transition-all hover:scale-125"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="3"
                        fill="#000000"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Timeline Year Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {journeyMilestones.map((ms) => {
                const isSelected = selectedMilestone?.year === ms.year;

                return (
                  <button
                    key={ms.year}
                    onClick={() => setSelectedMilestone(ms)}
                    className={`p-3 border-2 border-black font-mono text-left transition-all shadow-neo-sm ${
                      isSelected
                        ? "bg-[#A6FA3C] translate-x-[-1px] translate-y-[-1px] shadow-neo"
                        : "bg-white hover:bg-[#F5F5EE]"
                    }`}
                  >
                    <div className="font-black text-sm text-black mb-1">{ms.year}</div>
                    <div className="font-bold text-[11px] text-black uppercase tracking-tight line-clamp-1">
                      {ms.title}
                    </div>
                    <div className="text-[10px] text-gray-700">{ms.subtitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Detail Box */}
            {selectedMilestone && (
              <div className="mt-6 border-2 border-black bg-[#F5F5EE] p-4 shadow-neo font-mono space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-black text-xs text-black uppercase bg-white border border-black px-2 py-0.5">
                    [ MILESTONE: {selectedMilestone.year} ]
                  </span>
                  <span className="text-[11px] font-bold text-gray-600">
                    {selectedMilestone.subtitle}
                  </span>
                </div>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {selectedMilestone.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedMilestone.highlightTech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold bg-white border border-black px-2 py-0.5 text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Neon Green Callout Banner */}
          <div className="bg-[#A6FA3C] border-t-3 border-black p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-black bg-white border border-black px-2 py-0.5 inline-block">
                CONTINUOUS IMPROVEMENT
              </span>
              <h4 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                ALWAYS LEARNING. ALWAYS BUILDING.
              </h4>
              <p className="text-xs text-gray-900 max-w-xl">
                I'm constantly evaluating new tools, vector architectures, and frameworks to build resilient solutions.
              </p>
            </div>

            <button
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="neo-btn bg-white text-black font-black py-3 px-6 text-xs flex-shrink-0"
            >
              <span>SEE WHAT I'M BUILDING</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
