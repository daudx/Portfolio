"use client";

import React, { useEffect } from "react";
import { PillButton } from "@/components/ui/pill-button";
import { RotateCcw, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#141414] px-6 text-center">
      <div className="w-12 h-12 rounded-full bg-[#FFF1F2] border border-[#FECDD3] flex items-center justify-center font-mono text-xs text-rose-600 mb-6">
        ERR
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-[#141414] mb-3">
        Unable to load application
      </h1>
      <p className="text-sm text-[#707070] max-w-md mb-8 leading-relaxed">
        An unexpected error occurred while loading content. You can try refreshing the page or navigating back home.
      </p>
      <div className="flex items-center gap-3">
        <PillButton variant="primary" size="md" onClick={() => reset()}>
          <RotateCcw size={16} />
          <span>Try again</span>
        </PillButton>
        <PillButton variant="secondary" size="md" href="/">
          <ArrowLeft size={16} />
          <span>Home</span>
        </PillButton>
      </div>
    </div>
  );
}
