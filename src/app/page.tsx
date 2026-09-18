import { getGitHubProfile, getGitHubContributions, getGitHubRepositories } from "@/lib/github";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StackSection } from "@/components/stack-section";
import { About } from "@/components/about";
import { ProofStrip } from "@/components/proof-strip";
import { GitHubSection } from "@/components/github-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { CommunityStrip } from "@/components/community-strip";
import { Footer } from "@/components/footer";

// ISR: revalidate cached GitHub data every hour
export const revalidate = 3600;

export default async function HomePage() {
  // Server-side parallel fetch with resilience (timeouts + fallbacks in lib/github.ts)
  const [profile, contributions, repos] = await Promise.all([
    getGitHubProfile(),
    getGitHubContributions(),
    getGitHubRepositories()
  ]);

  return (
    <div className="antialiased" style={{ minHeight: "100vh" }}>
      {/* ── 0. Sticky navigation ────────────────────────────── */}
      <Navbar />

      <main>
        {/* ── 1. Hero (Primary dark bg) ────────────────────── */}
        <Hero />

        {/* ── 00. Stack (Neutral bg) ───────────────────────── */}
        <StackSection />

        {/* ── 01. About (Primary dark bg) ──────────────────── */}
        <About />

        {/* ── Proof strip (Neutral hairline) ────────────────── */}
        <ProofStrip />

        {/* ── 02. GitHub Live Panel (Neutral bg) ───────────── */}
        <GitHubSection
          profile={profile}
          contributions={contributions}
          repos={repos}
        />

        {/* ── 03. Selected Work (Primary dark bg) ───────────── */}
        <FeaturedProjects />

        {/* ── 04. Community & Systems (Neutral bg) ──────────── */}
        <CommunityStrip />
      </main>

      {/* ── Footer / Contact (Neutral bg + UNDISPUTED) ────── */}
      <Footer />
    </div>
  );
}
