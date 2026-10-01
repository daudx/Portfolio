import React from "react";

export default function Loading() {
  return (
    <div 
      className="min-h-[40vh] flex flex-col items-center justify-center p-8 font-mono text-xs text-[#6B6B60] dark:text-[#9A968E]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D96C3A] animate-ping" aria-hidden="true" />
        <span>INITIALIZING INTERFACE...</span>
      </div>
    </div>
  );
}
