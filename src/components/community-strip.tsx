"use client";

import React from "react";
import { articles } from "@/data/writing";

export function CommunityStrip() {
  return (
    <section
      id="community"
      className="section-neutral"
      style={{
        borderTop: "1px solid var(--color-hairline-light)",
        paddingTop: "80px",
        paddingBottom: "80px"
      }}
    >
      <div className="page-container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "48px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-hairline-light)"
          }}
        >
          <span className="section-index">04</span>
          <h2 className="text-headline-md" style={{ color: "var(--color-ink)", fontStyle: "normal" }}>
            Community &amp; Systems
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "var(--color-hairline-light)"
          }}
        >
          {/* Left: Open Source */}
          <div
            style={{
              backgroundColor: "var(--color-neutral)",
              padding: "2.5rem 2rem 2.5rem 0"
            }}
          >
            <span className="mono-kicker" style={{ color: "var(--color-tertiary)", display: "block", marginBottom: "1.25rem" }}>
              Open Source
            </span>
            <h3
              className="text-headline-md"
              style={{
                color: "var(--color-ink)",
                fontStyle: "italic",
                marginBottom: "1rem",
                fontSize: "1.75rem"
              }}
            >
              NinjasCode
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9375rem",
                color: "var(--color-tertiary)",
                lineHeight: 1.7,
                marginBottom: "1rem"
              }}
            >
              I help build and grow the NinjasCode developer community — a collaborative space for students and early-career engineers to contribute to open-source projects, share knowledge, and mentor each other.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9375rem",
                color: "var(--color-tertiary)",
                lineHeight: 1.7,
                marginBottom: "2rem"
              }}
            >
              The goal is simple: lower the barrier to open source contribution for developers in Pakistan who want to build real things in public.
            </p>
            <a
              href="https://github.com/daudx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
              style={{ fontSize: "0.62rem", padding: "0.45rem 1rem" }}
            >
              github.com/daudx ↗
            </a>
          </div>

          {/* Right: Writing */}
          <div
            style={{
              backgroundColor: "var(--color-neutral)",
              padding: "2.5rem 0 2.5rem 2rem"
            }}
          >
            <span className="mono-kicker" style={{ color: "var(--color-tertiary)", display: "block", marginBottom: "1.25rem" }}>
              Writing
            </span>

            {articles.length === 0 ? (
              /* Graceful empty state */
              <div
                style={{
                  border: "1px dashed var(--color-hairline-light)",
                  borderRadius: "4px",
                  padding: "2.5rem",
                  textAlign: "center"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-newsreader)",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "var(--color-ink-faint)",
                    display: "block",
                    marginBottom: "0.75rem"
                  }}
                >
                  Nothing published yet.
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8125rem",
                    color: "var(--color-tertiary)"
                  }}
                >
                  Articles and essays will appear here when published.
                </span>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {articles.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="writing-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "1rem",
                      alignItems: "start",
                      paddingTop: "1.25rem",
                      paddingBottom: "1.25rem",
                      borderBottom: "1px solid var(--color-hairline-light)",
                      textDecoration: "none"
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.9375rem",
                          color: "var(--color-ink)",
                          fontWeight: 500,
                          marginBottom: "0.25rem"
                        }}
                      >
                        {article.title}
                      </div>
                      <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
                        {article.publication}
                      </span>
                    </div>
                    <span className="mono-label" style={{ color: "var(--color-tertiary)", whiteSpace: "nowrap" }}>
                      {article.date}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .writing-row {
          transition: opacity 0.15s ease;
        }
        .writing-row:hover {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}
