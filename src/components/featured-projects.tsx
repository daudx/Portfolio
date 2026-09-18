import React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

type StatusType = "Completed" | "In Development" | "Prototype";

function statusBadge(status: StatusType): { label: string; color: string; bg: string } {
  if (status === "Completed")      return { label: "LIVE",      color: "#D96C3A", bg: "rgba(217,108,58,0.12)" };
  if (status === "In Development") return { label: "IN DEV",   color: "#9A9690", bg: "rgba(154,150,144,0.12)" };
  return                                    { label: "PROTOTYPE", color: "#5A5854", bg: "rgba(90,88,84,0.12)"   };
}

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);
  const all      = [...featured, ...rest];

  return (
    <section
      id="work"
      className="section-primary"
      style={{
        borderTop: "1px solid var(--color-hairline-dark)",
        paddingTop: "80px",
        paddingBottom: "80px"
      }}
    >
      <div className="page-container">

        {/* ── Section header ─────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "48px",
            paddingBottom: "14px",
            borderBottom: "1px solid var(--color-hairline-dark)"
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
            <span className="section-index-dark">03</span>
            <h2 className="text-headline-md" style={{ color: "var(--color-on-dark)", fontStyle: "normal" }}>
              Selected Work
            </h2>
          </div>
          <span className="mono-label" style={{ color: "var(--color-on-dark-faint)" }}>
            {all.length} projects
          </span>
        </div>

        {/* ── 3-column card grid ─────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "var(--color-hairline-dark)"
          }}
        >
          {all.map((project, idx) => {
            const { label, color, bg } = statusBadge(project.status as StatusType);
            return (
              <div
                key={project.id}
                className="project-card-wrap"
                style={{
                  backgroundColor: "var(--color-primary)",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundColor: "#1A1A18",
                    overflow: "hidden",
                    borderBottom: "1px solid var(--color-hairline-dark)"
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1440px) 33vw, 480px"
                      className="object-cover project-card-img"
                      unoptimized
                    />
                  ) : (
                    /* Elegant placeholder when no image */
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: "linear-gradient(135deg, #1A1A18 0%, #222220 100%)"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-newsreader)",
                          fontSize: "2rem",
                          fontStyle: "italic",
                          color: "rgba(246,244,239,0.15)",
                          textAlign: "center",
                          padding: "0 1.5rem"
                        }}
                      >
                        {project.title}
                      </span>
                      <span className="mono-label" style={{ color: "rgba(246,244,239,0.2)" }}>
                        {project.categoryTag}
                      </span>
                    </div>
                  )}

                  {/* Index number */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "12px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "rgba(246,244,239,0.35)",
                      lineHeight: 1
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Status badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: bg,
                      border: `1px solid ${color}33`,
                      borderRadius: "2px",
                      padding: "3px 8px"
                    }}
                  >
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.15em", color }}>
                      {label}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                  }}
                >
                  {/* Category tag */}
                  <span className="mono-label" style={{ color: "var(--color-on-dark-faint)", marginBottom: "0.625rem", display: "block" }}>
                    {project.categoryTag} · {project.year}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-newsreader)",
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      fontStyle: "normal",
                      color: "var(--color-on-dark)",
                      lineHeight: 1.2,
                      marginBottom: "0.75rem"
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.8125rem",
                      color: "var(--color-on-dark-muted)",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                      flex: 1
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "1.25rem" }}>
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.575rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-on-dark-muted)",
                          border: "1px solid var(--color-hairline-dark)",
                          padding: "2px 7px",
                          borderRadius: "2px"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.575rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-secondary)",
                          border: "1px solid var(--color-hairline-dark)",
                          padding: "2px 7px",
                          borderRadius: "2px"
                        }}
                      >
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", borderTop: "1px solid var(--color-hairline-dark)", paddingTop: "1.125rem" }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-dark"
                        style={{ fontSize: "0.6rem", padding: "0.4rem 0.875rem" }}
                      >
                        Repo ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-amber"
                        style={{ fontSize: "0.6rem", padding: "0.4rem 0.875rem" }}
                      >
                        Live ↗
                      </a>
                    )}
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.575rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        color: "var(--color-on-dark-faint)",
                        textTransform: "uppercase"
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Archive link ───────────────────────────────────── */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-hairline-dark)",
            textAlign: "center"
          }}
        >
          <a
            href="https://github.com/daudx?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
            style={{ fontSize: "0.62rem", padding: "0.65rem 2rem", letterSpacing: "0.2em" }}
          >
            VIEW ALL ARCHIVED REPOSITORIES ↗
          </a>
        </div>
      </div>
    </section>
  );
}
