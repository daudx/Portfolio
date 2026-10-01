"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Code2, ArrowRight, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "PROJECTS", href: "/#projects", sectionId: "projects" },
  { label: "EXPERIENCE", href: "/#experience", sectionId: "experience" },
  { label: "CERTIFICATIONS", href: "/#certifications", sectionId: "certifications" },
  { label: "CONTACT", href: "/#contact", sectionId: "contact" }
];

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F6F4EF]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D8D4C9] dark:border-[#2A2A28] py-3.5 transition-colors">
      <div className="page-container flex items-center justify-between gap-4">
        
        {/* Logo Badge (Links to top of page or home) */}
        <Link
          href="/"
          aria-label="Dawood Sajid portfolio home"
          className="inline-flex items-center gap-2 bg-[#121212] text-[#F6F4EF] border border-[#121212] dark:border-[#2A2A28] px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold tracking-wider hover:bg-[#D96C3A] hover:border-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
        >
          <Code2 className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          <span>./ DAWOOD DEV</span>
        </Link>

        {/* Center Nav Links - Desktop (Projects, Experience, Certifications, Contact) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] p-1 rounded-xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(item.sectionId);
                  }
                }}
                className={`px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A] ${
                  isActive
                    ? "bg-[#121212] dark:bg-[#2A2A28] text-white shadow-xs"
                    : "text-[#6B6B60] dark:text-[#9A968E] hover:text-[#121212] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#2A2A28]/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* GitHub Icon Link */}
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile (daudx)"
            className="p-2 bg-white dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-lg text-[#121212] dark:text-[#F6F4EF] hover:border-[#D96C3A] hover:text-[#D96C3A] dark:hover:border-[#D96C3A] dark:hover:text-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            <GithubIcon size={16} />
          </a>

          {/* Contact Button */}
          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="neo-btn neo-btn-pink rounded-lg hidden sm:inline-flex items-center gap-1.5"
          >
            <span>CONTACT</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="p-2 md:hidden bg-white dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-lg text-[#121212] dark:text-[#F6F4EF] hover:border-[#D96C3A] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8D4C9] dark:border-[#2A2A28] bg-[#F6F4EF] dark:bg-[#0A0A0A] p-4 font-mono animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(item.sectionId);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="p-3 text-xs font-semibold tracking-wider rounded-lg bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-white hover:border-[#D96C3A] hover:text-[#D96C3A] transition-all"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="neo-btn neo-btn-pink w-full py-3 text-xs justify-center rounded-lg mt-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
