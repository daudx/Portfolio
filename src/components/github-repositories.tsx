"use client";

import React, { useState } from "react";
import { Star, GitFork, BookOpen, ArrowUpRight, Code2 } from "lucide-react";
import { GitHubRepo } from "@/lib/github";
import { formatDate, getLanguageColor } from "@/lib/utils";
import { TechChip } from "@/components/ui/tech-chip";
import { cn } from "@/lib/utils";

interface GitHubRepositoriesProps {
  initialRepos: GitHubRepo[];
}

export function GitHubRepositories({ initialRepos }: GitHubRepositoriesProps) {
  const [filter, setFilter] = useState<"all" | "popular" | "updated">("all");

  const sortedRepos = [...initialRepos].sort((a, b) => {
    if (filter === "popular") {
      return b.stars - a.stars;
    }
    if (filter === "updated") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }
    // Default: non-forks first, then stars, then updated
    if (a.isFork !== b.isFork) return a.isFork ? 1 : -1;
    if (b.stars !== a.stars) return b.stars - a.stars;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#141414] tracking-tight">
            Repositories &amp; Open Source
          </h3>
          <p className="text-xs sm:text-sm text-[#707070] mt-0.5">
            Synchronized directly with live GitHub repositories.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F3F3F3] rounded-full border border-[#E0E0E0] select-none self-start sm:self-auto">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer",
              filter === "all"
                ? "bg-[#141414] text-white"
                : "text-[#707070] hover:text-[#141414]"
            )}
          >
            All
          </button>
          <button
            onClick={() => setFilter("popular")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer",
              filter === "popular"
                ? "bg-[#141414] text-white"
                : "text-[#707070] hover:text-[#141414]"
            )}
          >
            Popular
          </button>
          <button
            onClick={() => setFilter("updated")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer",
              filter === "updated"
                ? "bg-[#141414] text-white"
                : "text-[#707070] hover:text-[#141414]"
            )}
          >
            Recently Updated
          </button>
        </div>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {sortedRepos.map(repo => (
          <a
            key={repo.id}
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 sm:p-6 rounded-[20px] bg-[#FFFFFF] border border-[#E0E0E0] hover:border-[#B5B5B5] transition-all duration-200 hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#707070] group-hover:text-[#141414] transition-colors shrink-0" />
                  <span className="font-semibold text-[#141414] text-sm sm:text-base group-hover:text-[#0066FF] transition-colors break-all">
                    {repo.name}
                  </span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#ADADAD] group-hover:text-[#141414] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#707070] line-clamp-3 leading-relaxed mb-4">
                {repo.description || "Public software repository by Dawood Sajid."}
              </p>

              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map(topic => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-full bg-[#F5F5F5] text-[#707070] text-[11px] font-mono border border-[#EBEBEB]"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs text-[#707070]">
              <div className="flex items-center gap-3">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span className="font-medium text-[#141414]">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star size={13} className="text-[#707070]" />
                  <span>{repo.stars}</span>
                </div>
                {repo.forks > 0 && (
                  <div className="flex items-center gap-1">
                    <GitFork size={13} className="text-[#707070]" />
                    <span>{repo.forks}</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#ADADAD] font-mono">
                Updated {formatDate(repo.updatedAt)}
              </div>
            </div>
          </a>
        ))}

        {sortedRepos.length === 0 && (
          <div className="col-span-full py-12 text-center border border-dashed border-[#E0E0E0] rounded-[24px] bg-[#FAFAFA]">
            <p className="text-sm text-[#707070]">
              Repositories couldn&apos;t be loaded right now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
