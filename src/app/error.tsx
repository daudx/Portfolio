"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] p-6 font-mono transition-colors">
      <div className="max-w-md w-full bg-white dark:bg-[#121212] border border-red-500/30 rounded-2xl p-8 shadow-xl text-center space-y-6">
        
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 text-[#D96C3A] flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#121212] dark:text-white">
            UNEXPECTED EXCEPTION CAUGHT
          </h1>
          <p className="text-xs text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed">
            An execution error occurred while processing the requested view. The error trace has been recorded.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="neo-btn neo-btn-green w-full sm:w-auto py-2.5 px-5 text-xs rounded-lg inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>RESET COMPONENT</span>
          </button>

          <Link
            href="/"
            className="neo-btn w-full sm:w-auto py-2.5 px-5 text-xs rounded-lg inline-flex items-center justify-center gap-2 bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>RETURN HOME</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
