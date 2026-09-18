import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-10 sm:mb-14",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-3 select-none">
          {eyebrow}
        </span>
      )}
      <h2 className="text-mobbin-h2 text-[#141414] font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#707070] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
