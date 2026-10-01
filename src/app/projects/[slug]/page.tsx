import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  UserCheck, 
  AlertCircle
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.title} — Technical Architecture & Overview`,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.seo.siteUrl}/projects/${project.id}`
    },
    openGraph: {
      title: `${project.title} | Dawood Sajid`,
      description: project.description,
      url: `${siteConfig.seo.siteUrl}/projects/${project.id}`
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] transition-colors flex flex-col justify-between">
      <Navbar />

      <main id="main-content" className="page-container py-12 flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] hover:text-[#D96C3A] dark:hover:text-[#D96C3A] transition-colors mb-4 focus-visible:ring-2 focus-visible:ring-[#D96C3A] rounded"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            <span>&lt; ALL PROJECTS</span>
          </Link>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D4C9] dark:border-[#2A2A28] pb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-0.5 font-mono text-xs font-semibold text-[#D96C3A] uppercase rounded">
                  [ {project.categoryTag} ]
                </span>
                <span className="bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-0.5 font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] rounded">
                  YEAR: {project.year}
                </span>
                <span className="bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-2.5 py-0.5 font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] rounded">
                  STATUS: {project.status.toUpperCase()}
                </span>
              </div>

              <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white uppercase">
                {project.title}
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn py-2.5 px-4 text-xs rounded-lg inline-flex items-center gap-2 bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                >
                  <GithubIcon size={16} />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn neo-btn-green py-2.5 px-4 text-xs rounded-lg inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                >
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Project Screenshot / Visual */}
            <div className="neo-card bg-[#121212] border border-[#2A2A28] rounded-2xl overflow-hidden p-2 shadow-lg">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A28] mb-2 font-mono text-[11px] text-[#B4B0A6]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#D96C3A]" aria-hidden="true" />
                  <span>PREVIEW // {project.id}.screen</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
              </div>

              <div className="relative w-full h-[280px] sm:h-[400px] rounded-xl overflow-hidden bg-[#1A1A18]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center font-mono text-sm text-[#9A968E]">
                    <Layers className="w-10 h-10 text-[#D96C3A] mb-3" />
                    <span>System Preview Placeholder</span>
                  </div>
                )}
              </div>
            </div>

            {/* Overview & Problem Statement */}
            <div className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-serif-headline text-xl font-bold uppercase tracking-tight text-[#121212] dark:text-white mb-3">
                  SYSTEM OVERVIEW
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.problem && (
                <div className="p-4 bg-[#F6F4EF] dark:bg-[#1A1A18] border-l-4 border-[#D96C3A] rounded-r-xl">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#D96C3A]" aria-hidden="true" />
                    PROBLEM STATEMENT &amp; ENGINEERING CHALLENGE
                  </h3>
                  <p className="font-mono text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.myRole && (
                <div className="p-4 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#D96C3A]" aria-hidden="true" />
                    MY ROLE &amp; RESPONSIBILITIES
                  </h3>
                  <p className="font-mono text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
                    {project.myRole}
                  </p>
                </div>
              )}
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="font-serif-headline text-xl font-bold uppercase tracking-tight text-[#121212] dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D96C3A] stroke-[2.5]" aria-hidden="true" />
                  ARCHITECTURE &amp; TECHNICAL HIGHLIGHTS
                </h2>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#4A4A42] dark:text-[#B4B0A6]">
                  {project.architectureHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#D96C3A] flex-shrink-0 mt-0.5 stroke-[2.5]" aria-hidden="true" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Card */}
            <div className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl p-6 space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white flex items-center gap-2 pb-3 border-b border-[#D8D4C9] dark:border-[#2A2A28]">
                <Layers className="w-4 h-4 text-[#D96C3A]" aria-hidden="true" />
                TECHNOLOGY STACK
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-3 py-1 font-mono text-xs font-semibold text-[#121212] dark:text-[#EFECE6] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="neo-card bg-[#121212] text-[#F6F4EF] border border-[#2A2A28] rounded-2xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A2A28]">
                <span className="text-[#D96C3A] font-bold">[ SPECIFICATION ]</span>
                <span className="text-[#9A968E]">{project.year}</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-1 border-b border-[#2A2A28]/60">
                  <span className="text-[#9A968E]">Category</span>
                  <span className="text-white font-semibold">{project.category}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#2A2A28]/60">
                  <span className="text-[#9A968E]">Architecture Type</span>
                  <span className="text-white font-semibold">{project.visualType.toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#2A2A28]/60">
                  <span className="text-[#9A968E]">Project Status</span>
                  <span className="text-[#D96C3A] font-semibold">{project.status}</span>
                </div>
                {project.statusBadge && (
                  <div className="flex justify-between items-center py-1 border-b border-[#2A2A28]/60">
                    <span className="text-[#9A968E]">Pipeline State</span>
                    <span className="text-emerald-400 font-semibold">{project.statusBadge}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#2A2A28]">
                <Link
                  href="/#contact"
                  className="neo-btn neo-btn-green w-full py-2.5 text-xs text-center justify-center rounded-lg"
                >
                  DISCUSS THIS SYSTEM
                </Link>
              </div>
            </div>

            {/* Other Projects Quick Nav */}
            <div className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl p-6 space-y-3 font-mono">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#121212] dark:text-white pb-2 border-b border-[#D8D4C9] dark:border-[#2A2A28]">
                OTHER PROJECTS
              </h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.id}`}
                      className="block p-2 rounded-lg hover:bg-[#F6F4EF] dark:hover:bg-[#1A1A18] text-xs text-[#6B6B60] dark:text-[#B4B0A6] hover:text-[#D96C3A] transition-colors"
                    >
                      <div className="font-semibold text-[#121212] dark:text-white">{p.title}</div>
                      <div className="text-[10px] text-[#9A968E]">{p.categoryTag}</div>
                    </Link>
                  ))}
              </div>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
