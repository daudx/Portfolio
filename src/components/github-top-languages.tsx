import React from "react";
import { GitHubRepo } from "@/lib/github";

interface GitHubTopLanguagesProps {
  repos: GitHubRepo[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#D96C3A",
  JavaScript: "#C85A2A",
  Python: "#B04A22",
  CSS: "#E08050",
  HTML: "#D07040",
  "Jupyter Notebook": "#9A3A18",
  Shell: "#8A3010",
  Other: "#D8D4C9"
};

export function GitHubTopLanguages({ repos }: GitHubTopLanguagesProps) {
  // Aggregate languages from repo list using the language field
  const langCount: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language && !repo.isFork) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  }

  const total = Object.values(langCount).reduce((a, b) => a + b, 0);
  if (total === 0) return null;

  const sorted = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([lang, count]) => ({
      lang,
      count,
      pct: Math.round((count / total) * 100)
    }));

  return (
    <div style={{ padding: "1.75rem 2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem"
        }}
      >
        <span className="mono-kicker" style={{ color: "var(--color-tertiary)" }}>
          Top Languages
        </span>
        <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
          By repo count
        </span>
      </div>

      {/* Segmented bar */}
      <div
        style={{
          display: "flex",
          height: "8px",
          borderRadius: "4px",
          overflow: "hidden",
          gap: "1px",
          marginBottom: "1rem"
        }}
      >
        {sorted.map(({ lang, pct }) => (
          <div
            key={lang}
            style={{
              width: `${pct}%`,
              backgroundColor: LANG_COLORS[lang] || LANG_COLORS.Other,
              minWidth: pct > 0 ? "4px" : "0",
              flexShrink: 0
            }}
            title={`${lang}: ${pct}%`}
          />
        ))}
        {/* Fill remainder */}
        <div style={{ flex: 1, backgroundColor: "var(--color-hairline-light)" }} />
      </div>

      {/* Labels */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
        {sorted.map(({ lang, pct }) => (
          <div key={lang} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: LANG_COLORS[lang] || LANG_COLORS.Other,
                flexShrink: 0
              }}
            />
            <span className="mono-label" style={{ color: "var(--color-ink)" }}>
              {lang}
            </span>
            <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
              {pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
