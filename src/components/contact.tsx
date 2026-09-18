"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";
import { PillButton } from "@/components/ui/pill-button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#E0E0E0]">
      <div className="page-container">
        <div className="max-w-3xl">
          <span className="eyebrow-pill mb-6">Get in touch</span>

          <h2 className="text-mobbin-h1 text-[#141414] tracking-tight leading-[1.05] mb-5">
            Have something worth
            <br />
            building?
          </h2>

          <p className="text-mobbin-body-lg text-[#555555] max-w-xl leading-relaxed mb-10">
            Whether it&apos;s a product idea, a technical problem, or a development opportunity — feel free to reach out.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <PillButton variant="primary" size="lg" href={`mailto:${siteConfig.email}`}>
              <Mail size={17} />
              <span>Email me</span>
            </PillButton>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium bg-[#F3F3F3] text-[#141414] border border-[#E0E0E0] hover:border-[#C0C0C0] hover:bg-white transition-all duration-150 gap-2 cursor-pointer h-[44px]"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={15} className="text-[#707070]" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <PillButton variant="outline" size="lg" href={siteConfig.linkedin.url} external>
              <LinkedinIcon size={16} className="text-[#0066FF]" />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} className="text-[#ADADAD]" />
            </PillButton>

            <PillButton variant="secondary" size="lg" href={siteConfig.github.url} external>
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} className="text-[#ADADAD]" />
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
