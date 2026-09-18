import React from "react";
import { GitHubProfile, GitHubContributionsData, GitHubRepo } from "@/lib/github";
import { GitHubContributionGraph } from "@/components/github-contribution-graph";
import { GitHubTopLanguages } from "@/components/github-top-languages";

interface GitHubSectionProps {
  profile: GitHubProfile;
  contributions: GitHubContributionsData;
  repos: GitHubRepo[];
}

export function GitHubSection({ profile, contributions, repos }: GitHubSectionProps) {
  return (
    <section
      id="github"
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
            justifyContent: "space-between",
            marginBottom: "48px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-hairline-light)"
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
            <span className="section-index">02</span>
            <h2 className="text-headline-md" style={{ color: "var(--color-ink)", fontStyle: "normal" }}>
              Synced. Always.
            </h2>
          </div>
          <a
            href={profile.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
            style={{ fontSize: "0.62rem", padding: "0.45rem 1rem" }}
          >
            github.com/daudx ↗
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            backgroundColor: "var(--color-hairline-light)",
            marginBottom: "1px"
          }}
        >
          {[
            { label: "Contributions", value: contributions.totalContributions },
            { label: "Current Streak", value: `${contributions.currentStreak}d` },
            { label: "Repositories", value: profile.publicRepos },
            { label: "Followers", value: profile.followers }
          ].map(stat => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "var(--color-neutral)",
                padding: "1.75rem 2rem"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontSize: "2.75rem",
                  fontWeight: 400,
                  color: "var(--color-secondary)",
                  lineHeight: 1,
                  marginBottom: "0.5rem"
                }}
              >
                {stat.value}
              </div>
              <span className="mono-label" style={{ color: "var(--color-tertiary)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div
          style={{
            backgroundColor: "var(--color-neutral)",
            border: "1px solid var(--color-hairline-light)",
            borderTop: "none",
            padding: "2rem"
          }}
        >
          {contributions.isFallback && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "1rem",
                padding: "4px 10px",
                border: "1px solid rgba(217,108,58,0.3)",
                borderRadius: "2px"
              }}
            >
              <span className="mono-label" style={{ color: "var(--color-secondary)" }}>
                Cached baseline — add GITHUB_TOKEN for live data
              </span>
            </div>
          )}
          <GitHubContributionGraph contributions={contributions} />
        </div>

        {/* Top languages */}
        <div
          style={{
            marginTop: "1px",
            backgroundColor: "var(--color-neutral)",
            border: "1px solid var(--color-hairline-light)"
          }}
        >
          <GitHubTopLanguages repos={repos} />
        </div>
      </div>
    </section>
  );
}
