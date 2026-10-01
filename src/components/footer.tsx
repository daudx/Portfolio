"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Code2, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F6F4EF] dark:bg-[#0A0A0A] border-t border-[#D8D4C9] dark:border-[#2A2A28] py-8 font-mono transition-colors">
      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Badge (Links to / instead of #) */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="Return to portfolio home"
              className="inline-flex items-center gap-2 bg-[#121212] text-[#F6F4EF] border border-[#121212] dark:border-[#2A2A28] px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider hover:bg-[#D96C3A] hover:border-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
            >
              <Code2 className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              <span>./ DAWOOD DEV</span>
            </Link>
          </div>

          {/* Copyright Notice */}
          <div className="text-xs text-[#6B6B60] dark:text-[#9A968E] font-semibold text-center">
            &copy; {new Date().getFullYear()} Dawood Sajid. Built with Next.js, TypeScript &amp; Tailwind.
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dawood Sajid GitHub profile"
              className="p-2 bg-white dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Send direct email to ${siteConfig.email}`}
              className="p-2 bg-white dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
            >
              <Mail className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dawood Sajid LinkedIn profile"
              className="p-2 bg-white dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#D96C3A] text-white border border-[#D96C3A] rounded-lg hover:bg-[#c85b29] transition-all ml-2 focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
