"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/contact-form";
import { Mail, Terminal, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-16 pt-4">
      <div className="page-container">
        
        <div className="neo-card bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl overflow-hidden p-6 sm:p-10 transition-colors shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 cols): Direct Info & Availability */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] px-3 py-1 text-xs font-mono font-semibold text-[#D96C3A] rounded-md mb-4">
                  <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>DIRECT INQUIRY // COMM_LINK</span>
                </div>

                <h2 id="contact-heading" className="font-serif-headline text-3xl sm:text-4xl font-bold tracking-tight text-[#121212] dark:text-white uppercase leading-tight mb-4">
                  LET&apos;S BUILD SOMETHING RELIABLE.
                </h2>

                <p className="font-mono text-xs sm:text-sm text-[#4A4A42] dark:text-[#B4B0A6] leading-relaxed mb-6">
                  {siteConfig.availability}
                </p>
              </div>

              {/* Verified Direct Channels */}
              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-3.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl hover:border-[#D96C3A] dark:hover:border-[#D96C3A] transition-colors group"
                >
                  <div className="p-2 bg-white dark:bg-[#2A2A28] rounded-lg text-[#D96C3A] group-hover:bg-[#D96C3A] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6B6B60] dark:text-[#9A968E] uppercase font-semibold">Direct Email</div>
                    <div className="text-xs font-bold text-[#121212] dark:text-white">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl">
                  <div className="p-2 bg-white dark:bg-[#2A2A28] rounded-lg text-[#D96C3A]">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6B6B60] dark:text-[#9A968E] uppercase font-semibold">Location / Base</div>
                    <div className="text-xs font-bold text-[#121212] dark:text-white">Islamabad, Pakistan · Global Remote</div>
                  </div>
                </div>
              </div>

              {/* Guarantees / Highlights */}
              <div className="p-4 bg-[#EFECE6]/50 dark:bg-[#1A1A18]/50 border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl font-mono text-xs space-y-2 text-[#4A4A42] dark:text-[#B4B0A6]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D96C3A]" aria-hidden="true" />
                  <span>Responses within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D96C3A]" aria-hidden="true" />
                  <span>Transparent architecture &amp; timelines</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={siteConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={siteConfig.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#F6F4EF] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] text-[#121212] dark:text-[#F6F4EF] rounded-lg hover:border-[#D96C3A] hover:text-[#D96C3A] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): Working Form */}
            <div className="lg:col-span-7 bg-[#F6F4EF]/60 dark:bg-[#1A1A18]/60 border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl p-6 sm:p-8">
              <div className="mb-4 pb-3 border-b border-[#D8D4C9] dark:border-[#2A2A28] flex items-center justify-between font-mono text-xs text-[#6B6B60] dark:text-[#9A968E]">
                <span className="text-[#D96C3A] font-semibold">[ SECURE INQUIRY FORM ]</span>
                <span>SPAM PROTECTED</span>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
