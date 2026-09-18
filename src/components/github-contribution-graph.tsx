"use client";

import React, { useState } from "react";
import { GitHubContributionsData, ContributionDay } from "@/lib/github";

interface GitHubContributionGraphProps {
  contributions: GitHubContributionsData;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getCellClass(level: number, count: number): string {
  if (count === 0 || level === 0) return "heat-0";
  if (level === 1) return "heat-1";
  if (level === 2) return "heat-2";
  if (level === 3) return "heat-3";
  return "heat-4";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

export function GitHubContributionGraph({ contributions }: GitHubContributionGraphProps) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  return (
    <div>
      {/* Heading + legend */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem"
        }}
      >
        <span className="mono-kicker" style={{ color: "var(--color-tertiary)" }}>
          Contribution Activity — {contributions.year}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>Less</span>
          {["heat-0", "heat-1", "heat-2", "heat-3", "heat-4"].map(cls => (
            <span
              key={cls}
              className={cls}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "2px",
                display: "inline-block"
              }}
            />
          ))}
          <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>More</span>
        </div>
      </div>

      {/* Scrollable heatmap */}
      <div
        style={{ overflowX: "auto", position: "relative" }}
        className="no-scrollbar"
      >
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateRows: "repeat(7, 12px)",
            gap: "3px",
            minWidth: "fit-content"
          }}
        >
          {contributions.weeks.map((week, wIdx) =>
            week.days.map((day: ContributionDay) => (
              <div
                key={`${wIdx}-${day.date}`}
                className={getCellClass(day.level, day.count)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "opacity 0.1s ease"
                }}
                onMouseEnter={e => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  setTooltip({
                    text: `${day.count} contribution${day.count === 1 ? "" : "s"} — ${formatDate(day.date)}`,
                    x: rect.left + rect.width / 2,
                    y: rect.top - 8
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
              />
            ))
          )}
        </div>
      </div>

      {/* Global tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
            backgroundColor: "var(--color-primary)",
            color: "var(--color-on-dark)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.04em",
            padding: "4px 10px",
            borderRadius: "2px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 9999,
            border: "1px solid var(--color-hairline-dark)"
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
