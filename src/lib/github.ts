export interface GitHubProfile {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  company: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  htmlUrl: string;
  isFallback?: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  htmlUrl: string;
  homepage: string | null;
  topics: string[];
  isFork: boolean;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface GitHubContributionsData {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: ContributionWeek[];
  days: ContributionDay[];
  year: number;
  isFallback?: boolean;
}

export interface GitHubActivityEvent {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  actionSummary: string;
}

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "daudx";
const REVALIDATE_SECONDS = parseInt(process.env.GITHUB_REVALIDATE_SECONDS || "3600", 10);

const DEFAULT_PROFILE_FALLBACK: GitHubProfile = {
  username: "daudx",
  name: "Dawood Sajid",
  avatarUrl: "https://avatars.githubusercontent.com/u/153383866?v=4",
  bio: "Software Developer · IT Student",
  location: "Islamabad",
  company: "Devnoz",
  publicRepos: 15,
  followers: 5,
  following: 6,
  totalStars: 4,
  htmlUrl: "https://github.com/daudx",
  isFallback: true
};

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    "User-Agent": "dawood-sajid-portfolio",
    Accept: "application/vnd.github.v3+json"
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

// Abort signal with 3.5 second timeout so we never block the page render
function fetchWithTimeout(url: string, options: RequestInit & { next?: { revalidate?: number } }): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3500);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}

let reposInFlight: Promise<GitHubRepo[]> | null = null;

export function getGitHubRepositories(): Promise<GitHubRepo[]> {
  if (!reposInFlight) {
    reposInFlight = fetchRepositoriesInternal().finally(() => {
      setTimeout(() => { reposInFlight = null; }, 10000);
    });
  }
  return reposInFlight;
}

export async function getGitHubProfile(): Promise<GitHubProfile> {
  try {
    const res = await fetchWithTimeout(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: getHeaders(),
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!res.ok) {
      console.warn(`GitHub profile fetch returned status ${res.status}`);
      return DEFAULT_PROFILE_FALLBACK;
    }

    const data = await res.json();
    let totalStars = DEFAULT_PROFILE_FALLBACK.totalStars;
    try {
      const repos = await getGitHubRepositories();
      totalStars = repos.reduce((acc, r) => acc + (r.stars || 0), 0);
    } catch {
      // fallback stars ok
    }

    return {
      username: data.login || GITHUB_USERNAME,
      name: data.name || "Dawood Sajid",
      avatarUrl: data.avatar_url || DEFAULT_PROFILE_FALLBACK.avatarUrl,
      bio: data.bio || "Software Developer",
      location: data.location || "Islamabad",
      company: data.company || "",
      publicRepos: data.public_repos ?? DEFAULT_PROFILE_FALLBACK.publicRepos,
      followers: data.followers ?? DEFAULT_PROFILE_FALLBACK.followers,
      following: data.following ?? DEFAULT_PROFILE_FALLBACK.following,
      totalStars,
      htmlUrl: data.html_url || `https://github.com/${GITHUB_USERNAME}`,
      isFallback: false
    };
  } catch (err) {
    console.error("Error fetching GitHub profile:", err);
    return DEFAULT_PROFILE_FALLBACK;
  }
}

async function fetchRepositoriesInternal(): Promise<GitHubRepo[]> {
  try {
    const res = await fetchWithTimeout(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: getHeaders(),
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!res.ok) {
      console.warn(`GitHub repos fetch returned status ${res.status}`);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    const repos: GitHubRepo[] = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      fullName: item.full_name,
      description: item.description || "",
      language: item.language || null,
      stars: item.stargazers_count || 0,
      forks: item.forks_count || 0,
      updatedAt: item.updated_at,
      htmlUrl: item.html_url,
      homepage: item.homepage || null,
      topics: Array.isArray(item.topics) ? item.topics : [],
      isFork: Boolean(item.fork)
    }));

    // Prioritize non-fork repos, repos with descriptions, and then recently updated
    return repos.sort((a, b) => {
      if (a.isFork !== b.isFork) return a.isFork ? 1 : -1;
      if (b.stars !== a.stars) return b.stars - a.stars;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  } catch (err) {
    console.error("Error fetching GitHub repos:", err);
    return [];
  }
}

// Parse GitHub contributions from public contributions HTML table
function parseContributionsHtml(html: string): { days: ContributionDay[]; totalCount: number } {
  const days: ContributionDay[] = [];
  let totalCount = 0;

  // Extract yearly count if present: e.g. "60 contributions in the last year"
  const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+(?:the\s+last\s+year|\d{4})/i);
  if (totalMatch) {
    totalCount = parseInt(totalMatch[1].replace(/,/g, ""), 10);
  }

  // Regex to match GitHub table cells or rects
  // Pattern in modern GitHub: <td ... data-date="2024-03-01" data-level="2" ...> or tooltips
  // Also GitHub svg rect: data-date="YYYY-MM-DD" and data-level="0-4"
  const cellRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d+)"/g;
  let match;

  const countMap: Record<string, number> = {};
  // Try to find counts from tooltips or aria-labels
  const tooltipRegex = /id="contribution-slice-(\d+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
  let tMatch;
  while ((tMatch = tooltipRegex.exec(html)) !== null) {
    const text = tMatch[2];
    const cMatch = text.match(/(\d+)\s+contribution/);
    const dMatch = text.match(/(\w+\s+\d{1,2}(?:st|nd|rd|th)?,\s+\d{4})/);
    if (cMatch && dMatch) {
      // We have count
    }
  }

  while ((match = cellRegex.exec(html)) !== null) {
    const date = match[1];
    const level = parseInt(match[2], 10) as 0 | 1 | 2 | 3 | 4;
    // Map level to estimated count if precise count isn't in cell attributes
    const estimatedCount = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10;
    days.push({
      date,
      count: countMap[date] ?? estimatedCount,
      level
    });
  }

  // Sort days ascending by date
  days.sort((a, b) => a.date.localeCompare(b.date));

  if (totalCount === 0) {
    totalCount = days.reduce((acc, d) => acc + d.count, 0);
  }

  return { days, totalCount };
}

// Transparent streak calculation from chronological day data
export function calculateStreaks(days: ContributionDay[]): { currentStreak: number; longestStreak: number } {
  if (!days || days.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  let longestStreak = 0;
  let runningStreak = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i].count > 0) {
      runningStreak++;
      if (runningStreak > longestStreak) {
        longestStreak = runningStreak;
      }
    } else {
      runningStreak = 0;
    }
  }

  // Calculate current streak backwards from today or yesterday
  // (A user might not have committed today yet, so if yesterday had commits, streak is still active)
  let currentStreak = 0;
  const todayStr = new Date().toISOString().split("T")[0];
  const reversed = [...days].reverse();

  let startIndex = 0;
  if (reversed.length > 0) {
    // If today has 0 contributions, check if yesterday was active
    if (reversed[0].date === todayStr && reversed[0].count === 0) {
      startIndex = 1; // start from yesterday
    }
  }

  for (let i = startIndex; i < reversed.length; i++) {
    if (reversed[i].count > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

// Fallback contribution data generator for resilience
function generateFallbackContributions(): GitHubContributionsData {
  const days: ContributionDay[] = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setDate(today.getDate() - 364);

  let currentDate = new Date(oneYearAgo);
  while (currentDate <= today) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    // Generate realistic low-density activity consistent with student activity
    const seed = (currentDate.getDate() * 13 + currentDate.getMonth() * 7) % 11;
    const hasActivity = !isWeekend && seed > 6;
    const count = hasActivity ? (seed % 4) + 1 : 0;
    const level = (count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 7 ? 3 : 4) as 0 | 1 | 2 | 3 | 4;

    days.push({ date: dateStr, count, level });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const { currentStreak, longestStreak } = calculateStreaks(days);
  const totalContributions = days.reduce((sum, d) => sum + d.count, 0);

  // Group into weeks of 7 days
  const weeks: ContributionWeek[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push({ days: days.slice(i, i + 7) });
  }

  return {
    totalContributions,
    currentStreak,
    longestStreak,
    weeks,
    days,
    year: new Date().getFullYear(),
    isFallback: true
  };
}

export async function getGitHubContributions(): Promise<GitHubContributionsData> {
  // If GITHUB_TOKEN is available, try official GraphQL API first
  if (process.env.GITHUB_TOKEN) {
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

      const res = await fetchWithTimeout("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "User-Agent": "dawood-sajid-portfolio"
        },
        body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } }),
        next: { revalidate: REVALIDATE_SECONDS }
      });

      if (res.ok) {
        const json = await res.json();
        const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
        if (cal) {
          const days: ContributionDay[] = [];
          const weeks: ContributionWeek[] = cal.weeks.map((w: any) => ({
            days: w.contributionDays.map((d: any) => {
              const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
                NONE: 0,
                FIRST_QUARTILE: 1,
                SECOND_QUARTILE: 2,
                THIRD_QUARTILE: 3,
                FOURTH_QUARTILE: 4
              };
              const dayObj: ContributionDay = {
                date: d.date,
                count: d.contributionCount,
                level: levelMap[d.contributionLevel] ?? (d.contributionCount > 0 ? 1 : 0)
              };
              days.push(dayObj);
              return dayObj;
            })
          }));

          const { currentStreak, longestStreak } = calculateStreaks(days);
          return {
            totalContributions: cal.totalContributions,
            currentStreak,
            longestStreak,
            weeks,
            days,
            year: new Date().getFullYear(),
            isFallback: false
          };
        }
      }
    } catch (err) {
      console.warn("GitHub GraphQL contributions fetch failed, falling back to public HTML endpoint:", err);
    }
  }

  // Public endpoint scraping fallback (requires no token!)
  try {
    const res = await fetchWithTimeout(`https://github.com/users/${GITHUB_USERNAME}/contributions`, {
      headers: {
        "User-Agent": "dawood-sajid-portfolio",
        Accept: "text/html"
      },
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (res.ok) {
      const html = await res.text();
      const { days, totalCount } = parseContributionsHtml(html);

      if (days.length > 0) {
        const { currentStreak, longestStreak } = calculateStreaks(days);
        const weeks: ContributionWeek[] = [];
        for (let i = 0; i < days.length; i += 7) {
          weeks.push({ days: days.slice(i, i + 7) });
        }

        return {
          totalContributions: totalCount,
          currentStreak,
          longestStreak,
          weeks,
          days,
          year: new Date().getFullYear(),
          isFallback: false
        };
      }
    }
  } catch (err) {
    console.error("Error scraping public GitHub contributions:", err);
  }

  // Ultimate fallback
  return generateFallbackContributions();
}

export async function getGitHubEvents(): Promise<GitHubActivityEvent[]> {
  try {
    const res = await fetchWithTimeout(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=12`, {
      headers: getHeaders(),
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data
      .filter((ev: any) => ["PushEvent", "CreateEvent", "WatchEvent", "PublicEvent", "IssuesEvent"].includes(ev.type))
      .slice(0, 6)
      .map((ev: any) => {
        let actionSummary = "Activity on repository";
        if (ev.type === "PushEvent") {
          const commits = ev.payload?.commits?.length || 1;
          actionSummary = `Pushed ${commits} commit${commits > 1 ? "s" : ""}`;
        } else if (ev.type === "CreateEvent") {
          actionSummary = `Created ${ev.payload?.ref_type || "repository"}`;
        } else if (ev.type === "WatchEvent") {
          actionSummary = "Starred repository";
        }

        return {
          id: ev.id,
          type: ev.type,
          repoName: ev.repo?.name ? ev.repo.name.replace(`${GITHUB_USERNAME}/`, "") : "repository",
          repoUrl: `https://github.com/${ev.repo?.name || GITHUB_USERNAME}`,
          createdAt: ev.created_at,
          actionSummary
        };
      });
  } catch {
    return [];
  }
}
