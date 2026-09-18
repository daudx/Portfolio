"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="section-neutral"
      style={{
        borderTop: "1px solid var(--color-hairline-light)"
      }}
    >
      {/* ── CTA section ───────────────────────────────────────────── */}
      <div
        className="page-container"
        style={{ paddingTop: "80px", paddingBottom: "64px" }}
      >
        <div
          style={{
            borderBottom: "1px solid var(--color-hairline-light)",
            paddingBottom: "64px",
            marginBottom: "48px"
          }}
        >
          {/* Availability line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "2rem"
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "var(--color-secondary)",
                display: "inline-block",
                flexShrink: 0
              }}
            />
            <span className="mono-label" style={{ color: "var(--color-secondary)" }}>
              {siteConfig.availability}
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-newsreader)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              color: "var(--color-ink)",
              marginBottom: "2.5rem"
            }}
          >
            Let&apos;s build something
            <span style={{ color: "var(--color-secondary)" }}>.</span>
          </h2>

          {/* Link columns */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "4rem" }}>
            {/* GitHub */}
            <div>
              <span className="mono-kicker" style={{ color: "var(--color-tertiary)", display: "block", marginBottom: "0.75rem" }}>
                GitHub
              </span>
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                github.com/daudx <ArrowUpRight size={14} style={{ display: "inline" }} />
              </a>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "var(--color-hairline-light)", marginTop: "1.5rem" }} />

            {/* LinkedIn */}
            <div>
              <span className="mono-kicker" style={{ color: "var(--color-tertiary)", display: "block", marginBottom: "0.75rem" }}>
                LinkedIn
              </span>
              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                linkedin.com/in/dawood-sajid <ArrowUpRight size={14} style={{ display: "inline" }} />
              </a>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "48px", backgroundColor: "var(--color-hairline-light)", marginTop: "1.5rem" }} />

            {/* Email */}
            <div>
              <span className="mono-kicker" style={{ color: "var(--color-tertiary)", display: "block", marginBottom: "0.75rem" }}>
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-link"
              >
                {siteConfig.email} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
            © {year} {siteConfig.name}
          </span>
          <span
            className="mono-kicker"
            style={{
              color: "var(--color-ink-faint)",
              letterSpacing: "0.25em",
              fontSize: "0.7rem"
            }}
          >
            UNDISPUTED
          </span>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-family: var(--font-inter);
          font-size: 0.9375rem;
          color: var(--color-ink);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: var(--color-secondary);
        }
      `}</style>
    </footer>
  );
}
