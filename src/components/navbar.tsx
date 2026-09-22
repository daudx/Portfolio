"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Code2, Mail, FileText, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "GITHUB", href: "#github" },
  { label: "JOURNEY", href: "#journey" }
];

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5EE]/90 backdrop-blur-md border-b-3 border-black py-3">
      <div className="page-container flex items-center justify-between gap-4">
        {/* Logo Badge */}
        <a
          href="#"
          aria-label="Dawood Sajid portfolio home"
          className="inline-flex items-center gap-2 bg-[#A6FA3C] border-2 border-black px-3 py-1.5 font-mono text-xs font-bold tracking-wider text-black shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-neo transition-all"
        >
          <Code2 className="w-4 h-4 stroke-[2.5]" />
          <span>./ DAWOOD DEV</span>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5 bg-white border-2 border-black p-1 shadow-neo-sm">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1 font-mono text-xs font-bold tracking-wider transition-all border ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-transparent hover:border-black hover:bg-[#F5F5EE]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 bg-white border-2 border-black text-black shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-neo transition-all"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
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
            className="neo-btn neo-btn-pink"
          >
            <span>CONTACT ME</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
