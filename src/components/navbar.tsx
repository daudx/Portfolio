"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "GITHUB", href: "#github" },
  { label: "CONTACT", href: "#contact" }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "var(--color-neutral)",
        borderBottom: "1px solid var(--color-hairline-light)"
      }}
    >
      <div className="page-container">
        <nav
          aria-label="Main Navigation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "56px"
          }}
        >
          {/* Wordmark */}
          <a
            href="#"
            aria-label="Back to top"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-ink)",
              textDecoration: "none",
              textTransform: "uppercase"
            }}
          >
            DAUD
          </a>

          {/* Center nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textDecoration: "none",
                    color: isActive
                      ? "var(--color-secondary)"
                      : "var(--color-tertiary)",
                    transition: "color 0.15s ease",
                    textTransform: "uppercase"
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = "var(--color-ink)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = "var(--color-tertiary)";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

        </nav>
      </div>
    </header>
  );
}
