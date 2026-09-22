"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { X, Mail, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white border-4 border-black shadow-neo-xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#FF499E] border-b-3 border-black p-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-black stroke-[2.5]" />
            <span className="text-sm font-black uppercase text-black">
              [ GET IN TOUCH // CONTACT ]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all shadow-neo-sm"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#A6FA3C] border-3 border-black rounded-full flex items-center justify-center mx-auto shadow-neo">
                <CheckCircle className="w-8 h-8 text-black stroke-[3]" />
              </div>
              <h3 className="text-xl font-black uppercase text-black">MESSAGE SENT!</h3>
              <p className="text-xs text-gray-700 max-w-xs mx-auto">
                Thank you for reaching out. Dawood Sajid will get back to you shortly at {siteConfig.email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="neo-btn neo-btn-green py-2 px-6 text-xs mt-4"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-[#F5F5EE] border-2 border-black p-2.5 text-xs text-black focus:outline-none focus:bg-white focus:shadow-neo-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  className="w-full bg-[#F5F5EE] border-2 border-black p-2.5 text-xs text-black focus:outline-none focus:bg-white focus:shadow-neo-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-black uppercase mb-1">PROJECT DETAILS / MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your product idea, RAG system requirement, or full-stack project..."
                  className="w-full bg-[#F5F5EE] border-2 border-black p-2.5 text-xs text-black focus:outline-none focus:bg-white focus:shadow-neo-sm font-mono resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#F5F5EE] border-2 border-black text-black hover:bg-[#A6FA3C]"
                    title="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={siteConfig.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#F5F5EE] border-2 border-black text-black hover:bg-[#6366F1] hover:text-white"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="neo-btn neo-btn-green py-2.5 px-6 text-xs"
                >
                  {loading ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
