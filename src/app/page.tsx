"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsBar } from "@/components/skills-bar";
import { FeaturedProjects } from "@/components/featured-projects";
import { ExperienceSection } from "@/components/experience-section";
import { LearningJourney } from "@/components/learning-journey";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ProjectModal } from "@/components/project-modal";
import { ContactModal } from "@/components/contact-modal";
import { Project } from "@/data/projects";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] antialiased transition-colors">
      {/* ── Skip to Main Content Link for Accessibility (WCAG 2.4.1) ────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D96C3A] focus:text-white focus:rounded-md focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      {/* ── Top Sticky Navbar ─────────────────────────────────────────── */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="space-y-4">
        {/* ── Hero Section ───────────────────────────────────── */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* ── Skills Bar (Grouped: Frontend, Backend, AI/ML, Mobile/Other) ─ */}
        <SkillsBar />

        {/* ── Featured Projects & Certifications ─────────────── */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* ── Experience Timeline & Achievements ─────────────── */}
        <ExperienceSection onOpenContact={() => setIsContactOpen(true)} />

        {/* ── Learning Journey Growth Chart (2021-2026) ──────── */}
        <LearningJourney onOpenContact={() => setIsContactOpen(true)} />

        {/* ── Direct Contact Section with Form ────────────────── */}
        <ContactSection />
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer />

      {/* ── Modals ─────────────────────────────────────────── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
