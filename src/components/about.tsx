import React from "react";
import { siteConfig } from "@/data/site";
import { experience } from "@/data/experience";

export function About() {
  return (
    <section
      id="about"
      className="section-primary"
      style={{
        borderTop: "1px solid var(--color-hairline-dark)",
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
            marginBottom: "56px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-hairline-dark)"
          }}
        >
          <span className="section-index-dark">01</span>
          <span className="mono-kicker" style={{ color: "var(--color-on-dark-muted)" }}>
            About
          </span>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start"
          }}
        >
          {/* Left: pull-quote */}
          <div>
            <blockquote
              className="text-headline-md"
              style={{
                fontStyle: "italic",
                color: "var(--color-on-dark)",
                lineHeight: 1.45,
                fontFamily: "var(--font-newsreader)"
              }}
            >
              &ldquo;{siteConfig.about.pullQuote}&rdquo;
            </blockquote>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-hairline-dark)"
              }}
            >
              {siteConfig.about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9375rem",
                    color: "var(--color-on-dark-muted)",
                    lineHeight: 1.7,
                    marginBottom: i < siteConfig.about.paragraphs.length - 1 ? "1rem" : 0
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: experience list */}
          <div>
            <span className="mono-kicker" style={{ color: "var(--color-on-dark-faint)", display: "block", marginBottom: "1.5rem" }}>
              Experience
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {experience.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "1rem",
                    alignItems: "start",
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderTop: i === 0 ? "1px solid var(--color-hairline-dark)" : undefined,
                    borderBottom: "1px solid var(--color-hairline-dark)"
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--color-on-dark)",
                        marginBottom: "0.25rem"
                      }}
                    >
                      {item.role}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8125rem",
                        color: "var(--color-secondary)"
                      }}
                    >
                      {item.company}
                    </div>
                    {item.description && (
                      <div
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.8125rem",
                          color: "var(--color-on-dark-muted)",
                          marginTop: "0.375rem",
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </div>
                    )}
                  </div>
                  <span
                    className="mono-label"
                    style={{
                      color: "var(--color-on-dark-faint)",
                      whiteSpace: "nowrap",
                      paddingTop: "0.125rem"
                    }}
                  >
                    {item.dates}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
