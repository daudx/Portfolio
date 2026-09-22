"use client";

import React from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, ShieldCheck, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white border-4 border-black shadow-neo-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-[#A6FA3C] border-b-3 border-black p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black uppercase text-black bg-white border-2 border-black px-2 py-0.5 shadow-neo-sm">
              [ {project.categoryTag} ]
            </span>
            <span className="font-mono text-xs font-bold text-black hidden sm:inline">
              STATUS: {project.status.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white border-2 border-black text-black hover:bg-[#FF499E] hover:text-black transition-all shadow-neo-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono">
          {/* Title & Overview */}
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                {project.title}
              </h3>
              <span className="text-xs font-bold text-gray-600 bg-gray-100 border border-black px-2 py-1">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed font-mono">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Wireframe Mockup Visual */}
          <div className="border-3 border-black bg-[#1A1A1A] p-4 text-[#A6FA3C] shadow-neo">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5 font-bold text-[#A6FA3C]">
                <Terminal className="w-3.5 h-3.5" />
                SYSTEM_LIVE_PREVIEW // {project.id.toUpperCase()}
              </span>
              <span className="text-xs bg-[#A6FA3C] text-black font-bold px-1.5 py-0.5 border border-black">
                {project.status}
              </span>
            </div>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="p-2.5 bg-black/60 border border-gray-800 rounded font-mono">
                <span className="text-[#FF499E] font-bold">&gt; Target Architecture:</span> {project.visualType.toUpperCase()}
              </div>
              <div className="text-[11px] text-gray-400">
                Fuzzy search indexing, validated parameters, structured response streams active.
              </div>
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="bg-[#F5F5EE] border-2 border-black p-4 shadow-neo-sm">
              <h4 className="text-xs font-black uppercase tracking-wider text-black mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6366F1] stroke-[2.5]" />
                ARCHITECTURE & TECHNICAL HIGHLIGHTS
              </h4>
              <ul className="space-y-2 text-xs text-gray-800">
                {project.architectureHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white border-2 border-black px-2.5 py-1 text-xs font-bold text-black shadow-neo-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-[#F5F5EE] border-t-3 border-black flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-green py-2 px-4 text-xs"
              >
                <GithubIcon size={16} />
                <span>GITHUB CODE</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn neo-btn-purple py-2 px-4 text-xs"
              >
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            className="neo-btn neo-btn-pink py-2 px-4 text-xs"
          >
            <span>INQUIRE ABOUT PROJECT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
