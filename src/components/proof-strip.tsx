"use client";

import React from "react";
import { companies } from "@/data/companies";

export function ProofStrip() {
  return (
    <section
      className="section-neutral"
      style={{
        borderTop: "1px solid var(--color-hairline-light)",
        borderBottom: "1px solid var(--color-hairline-light)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem"
      }}
    >
      <div className="page-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem"
          }}
        >
          {/* Kicker label */}
          <span
            className="mono-kicker"
            style={{ color: "var(--color-tertiary)", flexShrink: 0 }}
          >
            Worked At
          </span>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "var(--color-hairline-light)",
              flexShrink: 0
            }}
          />

          {/* Company wordmarks */}
          <div style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
            {companies.map((co, i) => (
              <React.Fragment key={co.name}>
                {co.url !== "#" ? (
                  <a
                    href={co.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-wordmark"
                  >
                    {co.short || co.name}
                  </a>
                ) : (
                  <span className="proof-wordmark proof-wordmark--static">
                    {co.short || co.name}
                  </span>
                )}
                {i < companies.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "16px",
                      backgroundColor: "var(--color-hairline-light)",
                      flexShrink: 0
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .proof-wordmark {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-ink);
          text-decoration: none;
          opacity: 0.65;
          transition: opacity 0.15s ease;
        }
        .proof-wordmark:hover {
          opacity: 1;
        }
        .proof-wordmark--static {
          cursor: default;
        }
        .proof-wordmark--static:hover {
          opacity: 0.65;
        }
      `}</style>
    </section>
  );
}
