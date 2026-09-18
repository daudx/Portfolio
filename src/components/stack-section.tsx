"use client";

import React from "react";
import { Code2, Layers, Wrench, Database } from "lucide-react";
import { skills, SkillCategory } from "@/data/skills";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Languages":        <Code2 size={16} />,
  "Frameworks":       <Layers size={16} />,
  "Tools & Systems":  <Wrench size={16} />,
  "Databases":        <Database size={16} />,
};

function ProficiencyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {[1, 2, 3].map(i => (
        <span
          key={i}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            display: "inline-block",
            backgroundColor: i <= level
              ? "var(--color-secondary)"
              : "var(--color-hairline-light)",
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );
}

export function StackSection() {
  return (
    <section
      id="stack"
      className="section-neutral"
      style={{
        borderTop: "1px solid var(--color-hairline-light)",
        paddingTop: "72px",
        paddingBottom: "72px"
      }}
    >
      <div className="page-container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "40px",
            paddingBottom: "14px",
            borderBottom: "1px solid var(--color-hairline-light)"
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
            <span className="section-index">00</span>
            <h2
              className="text-headline-md"
              style={{ color: "var(--color-ink)", fontStyle: "normal" }}
            >
              Stack
            </h2>
          </div>
          <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
            Skills &amp; Proficiency
          </span>
        </div>

        {/* 4-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "var(--color-hairline-light)"
          }}
        >
          {skills.map((cat: SkillCategory) => (
            <div
              key={cat.category}
              style={{
                backgroundColor: "var(--color-neutral)",
                padding: "1.75rem"
              }}
            >
              {/* Category header with icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.875rem",
                  borderBottom: "1px solid var(--color-hairline-light)"
                }}
              >
                <span style={{ color: "var(--color-secondary)", display: "flex", alignItems: "center" }}>
                  {CATEGORY_ICONS[cat.category] ?? <Code2 size={16} />}
                </span>
                <span className="mono-kicker" style={{ color: "var(--color-ink)" }}>
                  {cat.category}
                </span>
              </div>

              {/* Skills list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8125rem",
                        color: "var(--color-ink)",
                        fontWeight: 400
                      }}
                    >
                      {skill.name}
                    </span>
                    <ProficiencyDots level={skill.proficiency} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "1.25rem"
          }}
        >
          <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
            Proficiency:
          </span>
          {(
            [
              { level: 1 as const, label: "Learning" },
              { level: 2 as const, label: "Proficient" },
              { level: 3 as const, label: "Expert" }
            ] as const
          ).map(({ level, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <ProficiencyDots level={level} />
              <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
