"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/projects";
import { CertificationsCard } from "./certifications-card";
import { Certification } from "@/data/certifications";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  ExternalLink,
  Layers,
  Sparkles
} from "lucide-react";

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onSelectCert?: (cert: Certification) => void;
}

export function FeaturedProjects({ onSelectProject, onSelectCert }: FeaturedProjectsProps) {
  const featuredList = projects.filter((p) => p.featured);
  const secondaryList = projects.filter((p) => !p.featured || p.id !== "dawacheck").slice(0, 4);

  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const currentFeatured = featuredList[activeFeaturedIndex] || featuredList[0];

  const handleNext = () => {
    setActiveFeaturedIndex((prev) => (prev + 1) % featuredList.length);
  };

  const handlePrev = () => {
    setActiveFeaturedIndex((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  return (
    <section id="projects" className="pb-12">
      <div className="page-container">
        
        {/* Main Grid: Projects (left 8 cols) + Certifications (right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Projects Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-3 border-black p-3.5 shadow-neo">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-black text-black uppercase tracking-wide">
                  FEATURED PROJECTS
                </span>
                <span className="bg-[#A6FA3C] border-2 border-black font-mono text-[11px] font-bold px-2 py-0.5 shadow-neo-sm">
                  VIEW ALL (14+)
                </span>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 bg-white border-2 border-black text-black hover:bg-[#A6FA3C] shadow-neo-sm transition-all"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[3]" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 bg-white border-2 border-black text-black hover:bg-[#A6FA3C] shadow-neo-sm transition-all"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Showcase Main Featured Project Card */}
            <div className="neo-card p-6 bg-white space-y-5">
              
              {/* Wireframe Visual Preview Frame */}
              <div className="border-3 border-black bg-[#A6FA3C] p-6 shadow-neo relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6">
                  <div className="flex items-center gap-2 bg-white border-2 border-black px-2.5 py-1 text-[11px] font-mono font-bold text-black shadow-neo-sm">
                    <span>LIVE SYSTEM — DRAFT VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-black stroke-[2.5]" />
                  </div>
                </div>

                {/* Center Wireframe Graphic */}
                <div className="my-4 text-center">
                  <div className="inline-flex flex-col items-center justify-center bg-white border-3 border-black p-4 shadow-neo max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-red-600 font-mono text-xs font-black uppercase mb-1">
                      <Sparkles className="w-4 h-4 stroke-[2.5]" />
                      ANTI-COUNTERFEIT AI
                    </div>
                    <span className="font-mono text-[11px] text-black font-bold uppercase tracking-wider">
                      GEN AI SEARCH • 99.8% RECALL ACCURACY
                    </span>
                  </div>
                </div>

                {/* Visual Bottom Indicators */}
                <div className="flex items-center justify-between border-t-2 border-black pt-3 mt-4 text-[11px] font-mono font-bold">
                  <span className="bg-white border border-black px-2 py-0.5 text-black">
                    STATUS: PRODUCTION
                  </span>
                  <span className="bg-white border border-black px-2 py-0.5 text-black">
                    BUILD v2.4
                  </span>
                </div>
              </div>

              {/* Featured Project Text Info */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl font-black text-black uppercase tracking-tight font-mono">
                    {currentFeatured.title}
                  </h3>
                  <span className="bg-gray-100 border-2 border-black px-2.5 py-0.5 font-mono text-[11px] font-bold text-black uppercase shadow-neo-sm">
                    [ {currentFeatured.categoryTag} ]
                  </span>
                </div>

                <p className="font-mono text-xs text-gray-800 leading-relaxed">
                  {currentFeatured.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {currentFeatured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white border border-black px-2 py-0.5 font-mono text-[10px] font-bold text-black shadow-neo-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Trigger & Dots */}
                <div className="flex items-center justify-between pt-3 border-t-2 border-black">
                  <button
                    onClick={() => onSelectProject(currentFeatured)}
                    className="neo-btn neo-btn-green py-2 px-4 text-xs"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>

                  {/* Pagination dots */}
                  <div className="flex items-center gap-1.5">
                    {featuredList.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFeaturedIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full border border-black transition-all ${
                          i === activeFeaturedIndex ? "bg-black scale-110" : "bg-white"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Secondary 2x2 Grid Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secondaryList.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className="neo-card p-4 bg-white hover:bg-[#F5F5EE] cursor-pointer flex flex-col justify-between space-y-3 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold text-black uppercase bg-[#F5F5EE] border border-black px-1.5 py-0.5">
                        [ {proj.categoryTag} ]
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-black group-hover:translate-x-[1px] transition-transform" />
                    </div>

                    <h4 className="font-mono text-sm font-black text-black uppercase tracking-tight group-hover:text-[#6366F1] transition-colors mb-1.5">
                      {proj.title}
                    </h4>

                    <p className="font-mono text-[11px] text-gray-700 line-clamp-2 leading-relaxed mb-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-200">
                    {proj.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] font-bold bg-white border border-black px-1.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Certifications Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 flex">
            <div className="w-full">
              <CertificationsCard onSelectCert={onSelectCert} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
