"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Code2, Mail, ArrowUpRight, ArrowDownRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section id="hero" className="pt-6 pb-12">
      <div className="page-container">
        {/* Main Hero Card Container */}
        <div className="neo-card p-6 md:p-10 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (8 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Greeting Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FF499E] border-2 border-black px-3 py-1 text-xs font-mono font-bold tracking-wider text-black shadow-neo-sm mb-6">
                  <span>HEY, I'M DAWOOD 👋</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.05] uppercase mb-6">
                  BUILDING PRACTICAL SOFTWARE.
                </h1>

                {/* Subtitle / Bio */}
                <p className="font-mono text-sm md:text-base text-gray-800 leading-relaxed max-w-xl mb-8">
                  I build practical web applications and AI-powered systems that turn ideas into useful products with clean, resilient code.
                </p>
              </div>

              {/* Action Buttons & Social Row */}
              <div className="space-y-6 pt-2">
                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#projects" className="neo-btn neo-btn-green py-3 px-6 text-sm">
                    <span>VIEW MY WORK</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenContact) {
                        onOpenContact();
                      } else {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="neo-btn py-3 px-6 text-sm"
                  >
                    <span>CONTACT ME</span>
                    <ArrowDownRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>

                {/* Connect With Me Social Row */}
                <div>
                  <span className="block font-mono text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-3">
                    CONNECT WITH ME
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white border-2 border-black text-black shadow-neo-sm hover:bg-[#A6FA3C] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                      title="GitHub"
                    >
                      <Code2 className="w-4 h-4 stroke-[2.5]" />
                    </a>
                    <a
                      href={siteConfig.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white border-2 border-black text-black shadow-neo-sm hover:bg-[#A6FA3C] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                      title="GitHub Repositories"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="p-2.5 bg-white border-2 border-black text-black shadow-neo-sm hover:bg-[#FF499E] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4 stroke-[2.5]" />
                    </a>
                    <a
                      href={siteConfig.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white border-2 border-black text-black shadow-neo-sm hover:bg-[#6366F1] hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                      title="LinkedIn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Magenta Photo Box with Code Overlay (5 cols on desktop) */}
            <div className="lg:col-span-5 flex">
              <div className="w-full neo-card-pink p-6 flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden">
                
                {/* Decorative header dots */}
                <div className="w-full flex items-center justify-between mb-4 border-b-2 border-black pb-3">
                  <span className="font-mono text-xs font-bold text-black uppercase tracking-wider">
                    [ DEV_PROFILE ]
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white border border-black"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A6FA3C] border border-black"></span>
                  </div>
                </div>

                {/* Profile Picture with Neon Green Border Ring */}
                <div className="relative my-4">
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-black p-1 bg-[#A6FA3C] shadow-neo">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
                      <Image
                        src="https://avatars.githubusercontent.com/u/153383866?v=4"
                        alt="Dawood Sajid"
                        fill
                        sizes="176px"
                        priority
                        className="object-cover grayscale contrast-110"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Terminal Config Snippet Box Overlay */}
                <div className="w-full bg-[#1A1A1A] border-2 border-black p-4 text-[#A6FA3C] font-mono text-xs shadow-neo mt-2">
                  <div className="flex items-center justify-between text-gray-400 pb-2 mb-2 border-b border-gray-700 text-[10px]">
                    <span className="flex items-center gap-1 text-[#FF499E] font-bold">
                      <Terminal className="w-3 h-3" />
                      DEVELOPER.CONFIG
                    </span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    </div>
                  </div>

                  <div className="space-y-1 font-mono text-[11px] leading-tight text-gray-200">
                    <div>
                      <span className="text-purple-400">&gt; const</span> <span className="text-yellow-300">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      name: <span className="text-[#A6FA3C]">'Dawood Sajid'</span>,
                    </div>
                    <div className="pl-4">
                      focus: [<span className="text-[#A6FA3C]">'Full-stack'</span>, <span className="text-[#A6FA3C]">'AI/ML'</span>],
                    </div>
                    <div className="pl-4">
                      deploy: <span className="text-[#A6FA3C]">'FastAPI & React'</span>,
                    </div>
                    <div className="pl-4">
                      motto: <span className="text-[#A6FA3C]">'Code. Create. Innovate.'</span>
                    </div>
                    <div>&#125;</div>
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
