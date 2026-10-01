import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal, FolderKanban } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] p-6 font-mono transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl p-8 shadow-xl text-center space-y-6">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#D8D4C9] dark:border-[#2A2A28] pb-3 text-xs text-[#6B6B60] dark:text-[#9A968E]">
          <span className="flex items-center gap-1.5 text-[#D96C3A] font-bold">
            <Terminal className="w-4 h-4" aria-hidden="true" />
            HTTP_STATUS_404
          </span>
          <div className="flex gap-1" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-serif-headline text-3xl font-bold uppercase tracking-tight text-[#121212] dark:text-white">
            TARGET ROUTE NOT FOUND
          </h1>
          <p className="text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
            The requested path does not exist in the route index or has been migrated to a new specification.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="neo-btn neo-btn-green w-full sm:w-auto py-2.5 px-5 text-xs rounded-lg inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>RETURN HOME</span>
          </Link>

          <Link
            href="/projects"
            className="neo-btn w-full sm:w-auto py-2.5 px-5 text-xs rounded-lg inline-flex items-center justify-center gap-2 bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            <FolderKanban className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>ALL PROJECTS</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
