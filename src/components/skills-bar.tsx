"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Layers, 
  Zap, 
  Globe, 
  Cpu, 
  Container, 
  BrainCircuit, 
  Database, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export interface SkillItem {
  id: string;
  name: string;
  icon: React.ElementType;
  category: "frontend" | "backend" | "ai" | "tools" | "database";
}

const SKILL_ITEMS: SkillItem[] = [
  { id: "react", name: "REACT", icon: Code2, category: "frontend" },
  { id: "typescript", name: "TYPESCRIPT", icon: Layers, category: "frontend" },
  { id: "fastapi", name: "FASTAPI", icon: Zap, category: "backend" },
  { id: "nextjs", name: "NEXT.JS", icon: Globe, category: "frontend" },
  { id: "pytorch", name: "PYTORCH", icon: Cpu, category: "ai" },
  { id: "docker", name: "DOCKER", icon: Container, category: "tools" },
  { id: "ai-rag", name: "AI / RAG", icon: BrainCircuit, category: "ai" },
  { id: "postgres", name: "POSTGRES", icon: Database, category: "database" }
];

interface SkillsBarProps {
  onSelectCategory?: (category: string) => void;
}

export function SkillsBar({ onSelectCategory }: SkillsBarProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="pb-12">
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-stretch gap-3 overflow-x-auto no-scrollbar pb-2">
          
          {/* Main Purple SKILLS Button */}
          <div className="flex-shrink-0 flex items-center justify-between gap-3 bg-[#6366F1] border-3 border-black px-6 py-3.5 text-white shadow-neo font-mono text-sm font-black tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              SKILLS
            </span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </div>

          {/* Skill items list */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full">
            {SKILL_ITEMS.map((skill) => {
              const Icon = skill.icon;
              const isSelected = activeSkill === skill.id;

              return (
                <button
                  key={skill.id}
                  onClick={() => {
                    const newActive = isSelected ? null : skill.id;
                    setActiveSkill(newActive);
                    if (onSelectCategory) {
                      onSelectCategory(newActive ? skill.category : "all");
                    }
                  }}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-3.5 border-3 border-black font-mono text-xs font-bold tracking-wider uppercase shadow-neo transition-all ${
                    isSelected
                      ? "bg-[#A6FA3C] text-black translate-y-[1px] translate-x-[1px] shadow-neo-sm"
                      : "bg-white text-black hover:bg-[#F5F5EE] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  }`}
                >
                  <Icon className={`w-4 h-4 stroke-[2.5] ${isSelected ? "text-black" : "text-gray-700"}`} />
                  <span>{skill.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
