import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Terminal,
  Code2
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: `Projects (${projects.length}) — Engineering & AI Systems`,
  description: "Comprehensive portfolio of AI systems, RAG backends, full-stack applications, and desktop software by Dawood Sajid.",
  alternates: {
    canonical: `${siteConfig.seo.siteUrl}/projects`
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] transition-colors flex flex-col justify-between">
      <Navbar />

      <main id="main-content" className="page-container py-12 flex-grow">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#6B6B60] dark:text-[#9A968E] hover:text-[#D96C3A] dark:hover:text-[#D96C3A] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            <span>&lt; BACK TO HOME</span>
          </Link>

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D8D4C9] dark:border-[#2A2A28] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-3 py-1 text-xs font-mono font-semibold text-[#D96C3A] rounded-md mb-3">
                <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>INDEXED REPOSITORY // {projects.length} PROJECTS</span>
              </div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] dark:text-white uppercase">
                ALL PROJECTS &amp; ARCHITECTURES
              </h1>
            </div>

            <p className="font-mono text-xs sm:text-sm text-[#6B6B60] dark:text-[#9A968E] max-w-md">
              Complete index of engineering work — AI RAG pipelines, healthcare verification platforms, offline desktop POS, and systems utilities.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#D96C3A] dark:hover:border-[#D96C3A] hover:shadow-md transition-all group"
            >
              <div>
                {/* Visual Header / Thumbnail */}
                <div className="relative w-full h-44 rounded-lg overflow-hidden bg-[#1A1A18] border border-[#2A2A28] mb-4">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#9A968E]">
                      <Code2 className="w-8 h-8 text-[#D96C3A] mb-2" />
                      <span>{project.visualType.toUpperCase()}</span>
                    </div>
                  )}

                  <div className="absolute top-2 left-2 bg-[#121212]/90 backdrop-blur-xs text-[#D96C3A] border border-[#2A2A28] font-mono text-[9px] font-semibold px-2 py-0.5 rounded">
                    [ {project.categoryTag} ]
                  </div>

                  <div className="absolute top-2 right-2 bg-[#121212]/90 backdrop-blur-xs text-white border border-[#2A2A28] font-mono text-[9px] px-2 py-0.5 rounded">
                    {project.year}
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="font-serif-headline text-lg font-bold text-[#121212] dark:text-white uppercase tracking-tight group-hover:text-[#D96C3A] transition-colors mb-2">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="font-mono text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] font-mono text-[9px] font-semibold px-1.5 py-0.5 rounded text-[#121212] dark:text-[#EFECE6]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="font-mono text-[9px] text-[#6B6B60] dark:text-[#9A968E] px-1 py-0.5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-[#D8D4C9] dark:border-[#2A2A28] flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="neo-btn neo-btn-green py-2 px-3.5 text-xs rounded-lg inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
                >
                  <span>FULL SPEC</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] transition-colors"
                      aria-label={`Live application demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
