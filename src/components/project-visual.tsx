"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers, Terminal } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  const [imageError, setImageError] = useState(false);

  const isDesktopApp = project.category === "Desktop";
  const frameDomain = `${project.id}.local`;

  return (
    <div
      className={`group relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-[#F3F3F3] border border-[#E0E0E0] flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#B5B5B5] ${className || ""}`}
    >
      {/* Frame Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F3F3F3] border-b border-[#E0E0E0] select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D4D4] group-hover:bg-[#FF5F56] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D4D4] group-hover:bg-[#FFBD2E] transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4D4D4] group-hover:bg-[#27C93F] transition-colors" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#E0E0E0] text-[11px] mono text-[#707070]">
          <span>{isDesktopApp ? `${project.title} — v1.0` : frameDomain}</span>
        </div>

        <div className="mono text-[10px] text-[#ADADAD] uppercase tracking-wider">
          {project.category}
        </div>
      </div>

      {/* Frame Canvas */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#FAFAFA] flex items-center justify-center">
        {!imageError && project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} interface showcase`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain p-2 sm:p-3 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              onError={() => setImageError(true)}
              priority={project.featured}
              unoptimized
            />

            {/* Subtle Hover Action Badge */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#141414]/90 text-white text-xs font-medium backdrop-blur-sm shadow-md">
                <span>View project</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        ) : (
          /* Tasteful Editorial Placeholder */
          <div className="w-full h-full p-8 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] uppercase tracking-widest text-[#707070]">
                {project.categoryTag}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F0F0F0] text-[10px] mono text-[#707070]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {project.status}
              </span>
            </div>

            <div className="my-auto text-center py-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-[#E0E0E0] text-[#141414] mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                {isDesktopApp ? <Layers size={20} /> : <Terminal size={20} />}
              </div>
              <h4 className="text-base font-semibold text-[#141414] tracking-tight">
                {project.title}
              </h4>
              <p className="text-xs text-[#ADADAD] mt-1">
                Project visual coming soon.
              </p>
            </div>

            <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between text-[10px] mono text-[#ADADAD]">
              <span>Architecture verified</span>
              <span>{project.year}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
