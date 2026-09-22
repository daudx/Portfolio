"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Code2, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#F5F5EE] border-t-3 border-black py-8 font-mono">
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#A6FA3C] border-2 border-black px-3 py-1.5 text-xs font-bold tracking-wider text-black shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <Code2 className="w-4 h-4 stroke-[2.5]" />
              <span>./ DAWOOD DEV</span>
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="text-xs text-gray-700 font-bold text-center">
            © 2026 Dawood Sajid. All rights reserved.
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border-2 border-black text-black hover:bg-[#A6FA3C] shadow-neo-sm transition-all"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 bg-white border-2 border-black text-black hover:bg-[#FF499E] shadow-neo-sm transition-all"
              title="Send Email"
            >
              <Mail className="w-4 h-4 stroke-[2]" />
            </a>
            <a
              href={siteConfig.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border-2 border-black text-black hover:bg-[#6366F1] hover:text-white shadow-neo-sm transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#A6FA3C] border-2 border-black text-black hover:translate-y-[-2px] shadow-neo-sm transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
