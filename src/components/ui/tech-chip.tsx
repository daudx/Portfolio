import React from "react";
import { cn } from "@/lib/utils";

interface TechChipProps {
  label: string;
  size?: "sm" | "md";
  variant?: "default" | "subtle" | "active";
  className?: string;
}

export function TechChip({
  label,
  size = "md",
  variant = "default",
  className
}: TechChipProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3 py-1 text-xs sm:text-sm font-medium"
  };

  const variantStyles = {
    default: "bg-[#F3F3F3] text-[#141414] border border-[#E0E0E0]",
    subtle: "bg-[#F7F7F7] text-[#707070] border border-[#EBEBEB]",
    active: "bg-[#141414] text-white border border-[#141414]"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full transition-colors whitespace-nowrap select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
