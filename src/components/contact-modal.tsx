"use client";

import React, { useEffect } from "react";
import { X, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#121212] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-2xl shadow-2xl overflow-hidden font-mono text-[#121212] dark:text-[#F6F4EF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#121212] text-[#F6F4EF] border-b border-[#2A2A28] p-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#D96C3A] stroke-[2.5]" aria-hidden="true" />
            <h2 id="contact-modal-title" className="text-xs font-bold uppercase tracking-wider text-[#F6F4EF]">
              [ GET IN TOUCH // CONTACT ]
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-[#2A2A28] border border-[#3A3A38] text-[#F6F4EF] rounded-lg hover:bg-[#D96C3A] transition-all focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
            aria-label="Close contact window"
          >
            <X className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </button>
        </div>

        {/* Content with Real Working Form */}
        <div className="p-6">
          <ContactForm onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
}
