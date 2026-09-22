"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsBar } from "@/components/skills-bar";
import { FeaturedProjects } from "@/components/featured-projects";
import { ExperienceSection } from "@/components/experience-section";
import { LearningJourney } from "@/components/learning-journey";
import { Footer } from "@/components/footer";
import { ProjectModal } from "@/components/project-modal";
import { ContactModal } from "@/components/contact-modal";
import { Project } from "@/data/projects";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5EE] antialiased text-black">
      {/* ── Navbar ─────────────────────────────────────────── */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="space-y-4">
        {/* ── Hero Section ───────────────────────────────────── */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* ── Skills Bar ─────────────────────────────────────── */}
        <SkillsBar />

        {/* ── Featured Projects & Certifications ─────────────── */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* ── Experience Timeline & Collaboration ───────────── */}
        <ExperienceSection onOpenContact={() => setIsContactOpen(true)} />

        {/* ── Learning Journey Growth Chart ───────────────────── */}
        <LearningJourney onOpenContact={() => setIsContactOpen(true)} />
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
