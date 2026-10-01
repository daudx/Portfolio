"use client";

import React from "react";
import { certifications, Certification } from "@/data/certifications";
import { Award, ExternalLink, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CertificationsCardProps {
  onSelectCert?: (cert: Certification) => void;
}

export function CertificationsCard({ onSelectCert }: CertificationsCardProps) {
  return (
    <div id="certifications" className="neo-card p-5 bg-white dark:bg-[#121212] rounded-2xl flex flex-col justify-between h-full border border-[#D8D4C9] dark:border-[#2A2A28] transition-colors">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between bg-[#121212] text-[#F6F4EF] border border-[#2A2A28] p-3 mb-4 rounded-xl shadow-xs">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#F6F4EF] tracking-wider uppercase">
            <Award className="w-4 h-4 text-[#D96C3A] stroke-[2.5]" aria-hidden="true" />
            <span>CERTIFICATIONS</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#D96C3A]" aria-hidden="true"></span>
        </div>

        {/* Certifications List */}
        <div className="space-y-3.5">
          {certifications.map((cert) => {
            const hasCredential = Boolean(cert.credentialUrl && cert.credentialUrl.startsWith("http"));

            return (
              <div
                key={cert.id}
                onClick={() => onSelectCert && onSelectCert(cert)}
                className="group border border-[#D8D4C9] dark:border-[#2A2A28] p-3.5 bg-[#F6F4EF]/50 dark:bg-[#1A1A18]/60 rounded-xl hover:bg-white dark:hover:bg-[#1A1A18] hover:border-[#D96C3A] dark:hover:border-[#D96C3A] transition-all cursor-pointer shadow-xs"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6B60] dark:text-[#9A968E] mb-1.5">
                  <span className="font-semibold text-[#121212] dark:text-[#F6F4EF] uppercase bg-white dark:bg-[#2A2A28] border border-[#D8D4C9] dark:border-[#3A3A38] px-1.5 py-0.5 rounded">
                    [ {cert.providerShort} ]
                  </span>
                  <span className="font-mono text-[#6B6B60] dark:text-[#9A968E] font-semibold">{cert.year}</span>
                </div>

                <h4 className="font-mono text-xs font-bold text-[#121212] dark:text-white uppercase tracking-tight mb-1 group-hover:text-[#D96C3A] transition-colors">
                  {cert.title}
                </h4>

                <p className="font-mono text-[11px] text-[#4A4A42] dark:text-[#B4B0A6] line-clamp-2 leading-relaxed mb-2">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-[#D8D4C9]/60 dark:border-[#2A2A28]">
                  {hasCredential ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-[#D96C3A] hover:underline uppercase font-semibold"
                    >
                      <ShieldCheck className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                      <span>VERIFIED CREDENTIAL</span>
                      <ExternalLink className="w-3 h-3 stroke-[2]" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#6B6B60] dark:text-[#9A968E] uppercase font-medium">
                      <Clock className="w-3 h-3 text-[#6B6B60]" aria-hidden="true" />
                      <span>CREDENTIAL ISSUED</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 mt-4 border-t border-[#D8D4C9] dark:border-[#2A2A28]">
        <a
          href={siteConfig.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn w-full py-2.5 text-xs text-center justify-center rounded-lg inline-flex items-center gap-2 bg-[#121212] dark:bg-[#1A1A18] text-white border border-[#121212] dark:border-[#2A2A28] hover:bg-[#2A2A28] focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
          aria-label="View LinkedIn certifications profile"
        >
          <span>VIEW LINKEDIN CREDENTIALS</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
