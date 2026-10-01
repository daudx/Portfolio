"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { CertificationsCard } from "./certifications-card";
import { Certification } from "@/data/certifications";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Terminal,
  ExternalLink,
  Code2
} from "lucide-react";

interface FeaturedProjectsProps {
  onSelectProject?: (project: Project) => void;
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
    <section id="projects" aria-labelledby="featured-projects-heading" className="pb-12">
      <div className="page-container">
        
        {/* Main Grid: Projects (left 8 cols) + Certifications (right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Projects Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Header with TRUE count and real /projects link */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] p-4 rounded-xl shadow-xs transition-colors">
              <div className="flex items-center gap-3">
                <h2 id="featured-projects-heading" className="font-serif-headline text-lg font-bold text-[#121212] dark:text-white uppercase tracking-wide">
                  FEATURED PROJECTS
                </h2>
                <Link
                  href="/projects"
                  className="bg-[#D96C3A] hover:bg-[#c85b29] text-white font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs inline-flex items-center gap-1 transition-colors"
                >
                  <span>ALL PROJECTS ({projects.length})</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                </Link>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2" aria-label="Project slider navigation">
                <button
                  onClick={handlePrev}
                  className="p-1.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-lg text-[#121212] dark:text-[#F6F4EF] hover:bg-white dark:hover:bg-[#2A2A28] hover:border-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                  aria-label="Previous Featured Project"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </button>
                <span className="font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] px-1">
                  {activeFeaturedIndex + 1} / {featuredList.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-lg text-[#121212] dark:text-[#F6F4EF] hover:bg-white dark:hover:bg-[#2A2A28] hover:border-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                  aria-label="Next Featured Project"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Showcase Main Featured Project Card */}
            <div className="neo-card p-6 bg-white dark:bg-[#121212] rounded-2xl space-y-5 transition-colors border border-[#D8D4C9] dark:border-[#2A2A28]">
              
              {/* Technical Architecture Preview Frame (No fake metrics, clean terminal styling) */}
              <div className="border border-[#2A2A28] bg-[#121212] text-[#F6F4EF] p-5 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[190px] shadow-sm">
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between border-b border-[#2A2A28] pb-3 mb-4">
                  <div className="flex items-center gap-2 bg-[#1A1A18] border border-[#2A2A28] px-2.5 py-1 text-[11px] font-mono font-semibold text-[#F6F4EF] rounded">
                    <Terminal className="w-3.5 h-3.5 text-[#D96C3A]" aria-hidden="true" />
                    <span>SYSTEM_NODE // {currentFeatured.id.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#9A968E] uppercase tracking-wider">
                      STATUS: {currentFeatured.status}
                    </span>
                  </div>
                </div>

                {/* Center Content Preview */}
                <div className="my-2">
                  <div className="bg-[#1A1A18] border border-[#2A2A28] p-3.5 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#D96C3A] font-bold uppercase flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                        PRIMARY ARCHITECTURE
                      </span>
                      {currentFeatured.statusBadge && (
                        <span className="text-[10px] bg-[#2A2A28] text-[#B4B0A6] px-2 py-0.5 rounded font-mono">
                          {currentFeatured.statusBadge}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-[#B4B0A6] leading-relaxed line-clamp-2">
                      {currentFeatured.architectureHighlights[0] || currentFeatured.description}
                    </p>
                  </div>
                </div>

                {/* Visual Bottom Indicators (Only verified values) */}
                <div className="flex items-center justify-between border-t border-[#2A2A28] pt-3 mt-3 text-[11px] font-mono">
                  <span className="bg-[#1A1A18] border border-[#2A2A28] px-2.5 py-0.5 text-[#B4B0A6] rounded">
                    STACK: {currentFeatured.technologies.slice(0, 3).join(" · ")}
                  </span>
                  <span className="bg-[#1A1A18] border border-[#2A2A28] px-2.5 py-0.5 text-[#D96C3A] rounded font-semibold">
                    YEAR: {currentFeatured.year}
                  </span>
                </div>
              </div>

              {/* Featured Project Text Info */}
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#121212] dark:text-white uppercase tracking-tight font-serif-headline">
                    {currentFeatured.title}
                  </h3>
                  <span className="bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#D96C3A] uppercase rounded-md">
                    [ {currentFeatured.categoryTag} ]
                  </span>
                </div>

                <p className="font-mono text-xs sm:text-sm text-[#6B6B60] dark:text-[#B4B0A6] leading-relaxed">
                  {currentFeatured.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {currentFeatured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#121212] dark:text-[#EFECE6] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Trigger & Dots */}
                <div className="flex items-center justify-between pt-3 border-t border-[#D8D4C9] dark:border-[#2A2A28]">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/projects/${currentFeatured.id}`}
                      className="neo-btn neo-btn-green py-2 px-4 text-xs rounded-lg inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    </Link>

                    {onSelectProject && (
                      <button
                        onClick={() => onSelectProject(currentFeatured)}
                        className="font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] hover:text-[#D96C3A] underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-[#D96C3A] rounded px-1"
                      >
                        Quick Overview
                      </button>
                    )}
                  </div>

                  {/* Pagination dots */}
                  <div className="flex items-center gap-1.5" aria-label="Slide indicators">
                    {featuredList.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFeaturedIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === activeFeaturedIndex ? "bg-[#D96C3A] scale-110" : "bg-[#D8D4C9] dark:bg-[#3A3A38]"
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
                  className="neo-card p-4.5 bg-white dark:bg-[#121212] rounded-xl border border-[#D8D4C9] dark:border-[#2A2A28] hover:border-[#D96C3A] dark:hover:border-[#D96C3A] flex flex-col justify-between space-y-3 group shadow-xs hover:shadow-md transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-semibold text-[#D96C3A] uppercase bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2 py-0.5 rounded">
                        [ {proj.categoryTag} ]
                      </span>
                      <Link
                        href={`/projects/${proj.id}`}
                        aria-label={`View ${proj.title} details`}
                        className="text-[#6B6B60] dark:text-[#9A968E] group-hover:text-[#D96C3A] transition-colors p-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <h3 className="font-serif-headline text-base font-bold text-[#121212] dark:text-white uppercase tracking-tight group-hover:text-[#D96C3A] transition-colors mb-1.5">
                      <Link href={`/projects/${proj.id}`}>
                        {proj.title}
                      </Link>
                    </h3>

                    <p className="font-mono text-[11px] text-[#6B6B60] dark:text-[#B4B0A6] line-clamp-2 leading-relaxed mb-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#D8D4C9]/60 dark:border-[#2A2A28]">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] font-semibold bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-1.5 py-0.5 rounded text-[#121212] dark:text-[#EFECE6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${proj.id}`}
                      className="font-mono text-[10px] font-semibold text-[#D96C3A] hover:underline"
                    >
                      SPEC &gt;
                    </Link>
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
