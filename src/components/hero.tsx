"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, ArrowDownRight, Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" aria-label="Hero Introduction" className="pt-6 pb-12">
      <div className="page-container">
        {/* Main Hero Card Container */}
        <div className="neo-card p-6 md:p-10 bg-white dark:bg-[#121212] transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2.5 bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wider text-[#121212] dark:text-[#F6F4EF] rounded-md mb-6 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D96C3A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D96C3A]"></span>
                  </span>
                  <span>{siteConfig.heroStatus}</span>
                  <span className="text-[#6B6B60] dark:text-[#9A968E] hidden sm:inline">|</span>
                  <span className="text-[#6B6B60] dark:text-[#9A968E] text-[11px] hidden sm:inline">DEVNOZ</span>
                </div>

                {/* Main Headline - Semantic H1 */}
                <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#121212] dark:text-white leading-[1.08] mb-5">
                  ENGINEERING PRACTICAL AI & FULL-STACK SYSTEMS.
                </h1>

                {/* Specific Tagline */}
                <p className="font-mono text-xs sm:text-sm text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed max-w-xl mb-8">
                  {siteConfig.tagline}
                </p>
              </div>

              {/* Action Buttons & Social Row */}
              <div className="space-y-6 pt-2">
                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="neo-btn neo-btn-green py-3 px-6 text-xs rounded-lg inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                  >
                    <span>VIEW MY WORK</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </a>

                  <button
                    onClick={handleContactClick}
                    className="neo-btn py-3 px-6 text-xs rounded-lg inline-flex items-center gap-2 bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                  >
                    <span>CONTACT</span>
                    <ArrowDownRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  </button>
                </div>

                {/* Connect With Me Social Row (No duplicate GitHub link) */}
                <div>
                  <span className="block font-mono text-[10px] font-semibold text-[#6B6B60] dark:text-[#9A968E] uppercase tracking-widest mb-3">
                    CONNECT WITH ME
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={siteConfig.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                      aria-label="GitHub Profile (daudx)"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="p-2.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                      aria-label={`Send email to ${siteConfig.email}`}
                    >
                      <Mail className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                    </a>
                    <a
                      href={siteConfig.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                      aria-label="LinkedIn Profile (Dawood Sajid)"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Charcoal Photo Box with Code Overlay (5 cols on desktop) */}
            <div className="lg:col-span-5 flex">
              <div className="w-full bg-[#121212] text-[#F6F4EF] border border-[#2A2A28] rounded-xl p-6 flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden shadow-lg">
                
                {/* Decorative header dots */}
                <div className="w-full flex items-center justify-between mb-4 border-b border-[#2A2A28] pb-3">
                  <span className="font-mono text-xs font-semibold text-[#B4B0A6] uppercase tracking-wider">
                    [ DEV_PROFILE // DAWOOD_SAJID ]
                  </span>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D96C3A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6B6B60]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F6F4EF]"></span>
                  </div>
                </div>

                {/* Profile Picture with Local Next/Image and Terracotta Border Ring */}
                <div className="relative my-3">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-[#D96C3A] p-1 bg-[#D96C3A]/20 shadow-md">
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-[#2A2A28] bg-[#121212]">
                      <Image
                        src="/avatar.png"
                        alt="Dawood Sajid — AI Developer & Full-Stack Engineer"
                        width={160}
                        height={160}
                        priority
                        className="object-cover w-full h-full grayscale contrast-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Terminal Config Snippet Box Overlay */}
                <div className="w-full bg-[#1A1A18] border border-[#2A2A28] rounded-lg p-3.5 text-[#F6F4EF] font-mono text-xs mt-2">
                  <div className="flex items-center justify-between text-[#9A968E] pb-2 mb-2 border-b border-[#2A2A28] text-[10px]">
                    <span className="flex items-center gap-1 text-[#D96C3A] font-bold">
                      <Terminal className="w-3 h-3" aria-hidden="true" />
                      DEVELOPER.CONFIG
                    </span>
                    <div className="flex gap-1" aria-hidden="true">
                      <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-[11px] leading-tight text-[#EFECE6]">
                    <div>
                      <span className="text-[#D96C3A]">&gt; const</span> <span className="text-[#F6F4EF]">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      name: <span className="text-[#D96C3A]">&apos;{siteConfig.developerConfig.name}&apos;</span>,
                    </div>
                    <div className="pl-4">
                      role: <span className="text-[#D96C3A]">&apos;{siteConfig.role} @ {siteConfig.company}&apos;</span>,
                    </div>
                    <div className="pl-4">
                      stack: [<span className="text-[#D96C3A]">&apos;Next.js&apos;</span>, <span className="text-[#D96C3A]">&apos;FastAPI&apos;</span>, <span className="text-[#D96C3A]">&apos;PostgreSQL&apos;</span>],
                    </div>
                    <div className="pl-4">
                      motto: <span className="text-[#D96C3A]">&apos;{siteConfig.developerConfig.motto}&apos;</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
