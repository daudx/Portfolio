import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function PillButton({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 active:scale-[0.98] select-none text-center cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5 min-h-[36px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[48px]"
  };

  const variantStyles = {
    primary:
      "bg-[#141414] text-white hover:bg-[#262626] hover:-translate-y-0.5 border border-transparent active:translate-y-0 shadow-none",
    secondary:
      "bg-[#F3F3F3] text-[#141414] hover:bg-[#EAEAEA] border border-[#E0E0E0] hover:-translate-y-0.5 active:translate-y-0 shadow-none",
    outline:
      "bg-white text-[#141414] hover:bg-[#F3F3F3] border border-[#E0E0E0] hover:-translate-y-0.5 active:translate-y-0 shadow-none",
    ghost:
      "bg-transparent text-[#707070] hover:text-[#141414] hover:bg-[#F3F3F3] border border-transparent shadow-none"
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
