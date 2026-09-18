import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PillButton } from "@/components/ui/pill-button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#141414] px-6 text-center">
      <div className="w-12 h-12 rounded-full bg-[#F3F3F3] border border-[#E0E0E0] flex items-center justify-center font-mono text-sm text-[#707070] mb-6">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141414] mb-3">
        Page not found
      </h1>
      <p className="text-base text-[#707070] max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved to another URL.
      </p>
      <PillButton variant="primary" size="md" href="/">
        <ArrowLeft size={16} />
        <span>Return Home</span>
      </PillButton>
    </div>
  );
}
