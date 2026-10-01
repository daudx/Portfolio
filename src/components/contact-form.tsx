"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  website: z.string().optional() // honeypot
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit message.");
      }

      setIsSuccess(true);
      reset();
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Failed to deliver message. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#EFECE6] dark:bg-[#1A1A18] border border-[#D8D4C9] dark:border-[#2A2A28] rounded-xl p-8 text-center space-y-4 font-mono animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-[#D96C3A] text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
        </div>
        <h3 className="font-serif-headline text-2xl font-bold uppercase tracking-tight text-[#121212] dark:text-white">
          TRANSMISSION RECEIVED
        </h3>
        <p className="text-xs sm:text-sm text-[#4A4A42] dark:text-[#B4B0A6] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Your message has been routed to Dawood Sajid and he will respond promptly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="neo-btn neo-btn-green py-2 px-6 text-xs rounded-lg mt-2 inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#D96C3A]"
        >
          <span>SEND ANOTHER MESSAGE</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
      {/* Honeypot field (hidden from real users, caught by bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (Leave empty)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {serverError && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block font-bold text-[#121212] dark:text-[#F6F4EF] uppercase tracking-wider mb-1.5">
          YOUR NAME <span className="text-[#D96C3A]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="e.g. Elena Rostova"
          disabled={isSubmitting}
          {...register("name")}
          className={`w-full bg-[#F6F4EF] dark:bg-[#1A1A18] border rounded-lg p-3 text-xs text-[#121212] dark:text-white focus:outline-none transition-colors ${
            errors.name 
              ? "border-red-500 focus:border-red-500" 
              : "border-[#D8D4C9] dark:border-[#2A2A28] focus:border-[#D96C3A]"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-[11px] text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="block font-bold text-[#121212] dark:text-[#F6F4EF] uppercase tracking-wider mb-1.5">
          EMAIL ADDRESS <span className="text-[#D96C3A]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="e.g. elena@domain.com"
          disabled={isSubmitting}
          {...register("email")}
          className={`w-full bg-[#F6F4EF] dark:bg-[#1A1A18] border rounded-lg p-3 text-xs text-[#121212] dark:text-white focus:outline-none transition-colors ${
            errors.email 
              ? "border-red-500 focus:border-red-500" 
              : "border-[#D8D4C9] dark:border-[#2A2A28] focus:border-[#D96C3A]"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-[11px] text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="block font-bold text-[#121212] dark:text-[#F6F4EF] uppercase tracking-wider mb-1.5">
          PROJECT SCOPE OR MESSAGE <span className="text-[#D96C3A]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Describe your engineering requirements, RAG system specs, contract or collaboration inquiry..."
          disabled={isSubmitting}
          {...register("message")}
          className={`w-full bg-[#F6F4EF] dark:bg-[#1A1A18] border rounded-lg p-3 text-xs text-[#121212] dark:text-white focus:outline-none transition-colors resize-none ${
            errors.message 
              ? "border-red-500 focus:border-red-500" 
              : "border-[#D8D4C9] dark:border-[#2A2A28] focus:border-[#D96C3A]"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-[11px] text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="neo-btn neo-btn-green w-full py-3 text-xs font-semibold rounded-lg inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#D96C3A] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>DISPATCHING...</span>
            </>
          ) : (
            <>
              <span>TRANSMIT MESSAGE</span>
              <Send className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
