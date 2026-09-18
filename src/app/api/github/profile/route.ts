import { NextResponse } from "next/server";
import { getGitHubProfile } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const profile = await getGitHubProfile();
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub profile" },
      { status: 500 }
    );
  }
}
