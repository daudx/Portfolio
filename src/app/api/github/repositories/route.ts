import { NextResponse } from "next/server";
import { getGitHubRepositories } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "all"; // all | popular | updated

    let repos = await getGitHubRepositories();

    if (filter === "popular") {
      repos = [...repos].sort((a, b) => b.stars - a.stars);
    } else if (filter === "updated") {
      repos = [...repos].sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    }

    return NextResponse.json(repos);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
}
