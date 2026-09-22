"use client";

import React from "react";
import { certifications, Certification } from "@/data/certifications";
import { Award, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";

interface CertificationsCardProps {
  onSelectCert?: (cert: Certification) => void;
}

export function CertificationsCard({ onSelectCert }: CertificationsCardProps) {
  return (
    <div id="certifications" className="neo-card p-5 bg-white flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between bg-[#A6FA3C] border-2 border-black p-3 mb-4 shadow-neo-sm">
          <div className="flex items-center gap-2 font-mono text-sm font-black text-black tracking-wider uppercase">
            <Award className="w-4 h-4 stroke-[2.5]" />
            <span>CERTIFICATIONS</span>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
        </div>

        {/* Certifications List */}
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert && onSelectCert(cert)}
              className="group border-2 border-black p-3.5 bg-white hover:bg-[#F5F5EE] shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-700 mb-1.5">
                <span className="font-bold text-black uppercase bg-gray-100 border border-black px-1.5 py-0.5">
                  [ {cert.providerShort} ]
                </span>
                <span className="font-mono text-gray-500 font-bold">{cert.year}</span>
              </div>

              <h4 className="font-mono text-xs font-black text-black uppercase tracking-tight mb-1 group-hover:text-[#6366F1] transition-colors">
                {cert.title}
              </h4>

              <p className="font-mono text-[11px] text-gray-600 line-clamp-2 leading-relaxed mb-2">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                <span className="flex items-center gap-1 font-mono text-[10px] text-gray-500 uppercase font-semibold">
                  <ShieldCheck className="w-3 h-3 text-green-600 stroke-[2.5]" />
                  VERIFIED CREDENTIAL
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-black group-hover:translate-x-[1px] transition-transform stroke-[2]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 mt-4 border-t-2 border-black">
        <a
          href="https://linkedin.com/in/dawood-sajid-58ab7a2b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn w-full py-2.5 text-xs text-center justify-center"
        >
          <span>VIEW ALL CERTIFICATIONS</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
}
