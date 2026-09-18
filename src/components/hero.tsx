"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const TECH_TAGS = [
  "Next.js", "·", "React", "·", "TypeScript", "·", "Python", "·", "FastAPI",
  "·", "PostgreSQL", "·", "RAG", "·", "Vector Search", "·", "Node.js",
  "·", "Docker", "·", "SQLite", "·", "Electron", "·", "Tailwind CSS",
  "·", "AI / ML", "·", "REST APIs", "·", "Git", "·", "Linux"
];

export function Hero() {
  return (
    <section
      id="hero"
      className="section-primary"
      style={{ paddingTop: "72px", paddingBottom: "0" }}
    >
      <div className="page-container">
        {/* ── Main hero grid ─────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "5rem",
            alignItems: "start",
            paddingBottom: "64px"
          }}
        >
          {/* Left: text */}
          <div>
            {/* Status chip */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "2rem",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: "2px",
                padding: "5px 12px"
              }}
            >
              <span
                className="status-dot-pulse"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-secondary)",
                  display: "inline-block",
                  flexShrink: 0
                }}
              />
              <span
                className="mono-kicker"
                style={{ color: "var(--color-secondary)", fontSize: "0.62rem" }}
              >
                {siteConfig.heroStatus}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-display"
              style={{ color: "var(--color-on-dark)", marginBottom: "1.5rem" }}
            >
              {siteConfig.headline}
            </h1>

            {/* Role line */}
            <p
              className="mono-label"
              style={{
                color: "var(--color-secondary)",
                marginBottom: "1.25rem",
                display: "block"
              }}
            >
              {siteConfig.role}
            </p>

            {/* Bio */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "1rem",
                color: "var(--color-on-dark-muted)",
                maxWidth: "500px",
                lineHeight: 1.7,
                marginBottom: "2.25rem"
              }}
            >
              {siteConfig.bio}
            </p>

            {/* Button row */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#work" className="btn-outline-dark">
                View Work ↓
              </a>
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-amber"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Right: circular photo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "1.5rem",
              paddingTop: "0.25rem"
            }}
          >
            {/* Photo circle */}
            <div style={{ position: "relative", width: "240px", height: "240px" }}>
              {/* Amber glow */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(217,108,58,0.3) 0%, transparent 65%)",
                  zIndex: 0
                }}
              />
              {/* Circle */}
              <div
                style={{
                  position: "relative",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(217,108,58,0.4)",
                  zIndex: 1,
                  backgroundColor: "#1C1C1A"
                }}
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/153383866?v=4"
                  alt="Dawood Sajid"
                  fill
                  sizes="240px"
                  className="object-cover"
                  style={{ filter: "grayscale(15%) contrast(1.08) brightness(0.95)" }}
                  unoptimized
                />
              </div>
            </div>

            {/* Name + role card under photo */}
            <div
              style={{
                width: "240px",
                padding: "1rem",
                border: "1px solid var(--color-hairline-dark)",
                borderRadius: "3px",
                backgroundColor: "rgba(255,255,255,0.03)"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-on-dark)",
                  marginBottom: "0.25rem"
                }}
              >
                {siteConfig.name}
              </div>
              <div className="mono-label" style={{ color: "var(--color-tertiary)" }}>
                AI Developer · Full-Stack
              </div>
              <div
                style={{
                  marginTop: "0.875rem",
                  paddingTop: "0.875rem",
                  borderTop: "1px solid var(--color-hairline-dark)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-secondary)",
                    flexShrink: 0
                  }}
                />
                <span className="mono-label" style={{ color: "var(--color-on-dark-muted)" }}>
                  Islamabad, PK · UTC+5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee ticker ─────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--color-hairline-dark)",
          paddingTop: "0.875rem",
          paddingBottom: "0.875rem",
          overflow: "hidden"
        }}
      >
        <div className="marquee-container" aria-hidden="true">
          {[0, 1].map(run => (
            <div key={run} className="marquee-content">
              {TECH_TAGS.map((tag, i) => (
                <span
                  key={i}
                  className="mono-label"
                  style={{
                    color: tag === "·"
                      ? "var(--color-on-dark-faint)"
                      : "var(--color-on-dark-muted)",
                    marginRight: tag === "·" ? "1.25rem" : "1.25rem",
                    marginLeft: tag === "·" ? 0 : 0,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    fontSize: tag === "·" ? "0.5rem" : undefined
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
