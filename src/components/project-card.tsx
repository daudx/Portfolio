import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/data/projects";
import { TechChip } from "@/components/ui/tech-chip";
import { PillButton } from "@/components/ui/pill-button";
import { ProjectVisual } from "@/components/project-visual";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article className="w-full py-8 sm:py-12 border-b border-[#E0E0E0] last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Details Column (5 columns on desktop) */}
        <div
          className={cn(
            "lg:col-span-5 flex flex-col justify-center",
            reverse ? "lg:order-2" : "lg:order-1"
          )}
        >
          {/* Eyebrow / Category Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="mono text-[11px] font-bold text-[#0066FF] tracking-wider">
              {project.categoryTag}
            </span>
            <span className="text-[#D0D0D0]">·</span>
            <span className="mono text-[11px] text-[#ADADAD]">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-mobbin-h2 text-[#141414] tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[15px] text-[#555555] leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <ul className="mb-6 space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#333333]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.technologies.map(tech => (
              <TechChip key={tech} label={tech} size="sm" />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.github && (
              <PillButton variant="secondary" size="md" href={project.github} external>
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="text-[#ADADAD]" />
              </PillButton>
            )}
            {project.live && (
              <PillButton variant="primary" size="md" href={project.live} external>
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </PillButton>
            )}
          </div>
        </div>

        {/* Visual Container (6 columns on desktop, 1 col spacing handled by 12-col grid) */}
        <div
          className={cn(
            "lg:col-span-7 w-full",
            reverse ? "lg:order-1" : "lg:order-2"
          )}
        >
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              aria-label={`View source code for ${project.title}`}
            >
              <ProjectVisual project={project} />
            </a>
          ) : (
            <ProjectVisual project={project} />
          )}
        </div>
      </div>
    </article>
  );
}
