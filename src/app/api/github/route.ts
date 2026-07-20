import { NextResponse } from "next/server";
import { usernames } from "@/lib/data";

export const revalidate = 3600; // cache for an hour

export type GitHubStats = {
  username: string;
  name: string | null;
  avatar: string | null;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  profileUrl: string;
};

/**
 * Aggregates public GitHub profile stats. Uses an optional GITHUB_TOKEN
 * (higher rate limits) when present. Returns a graceful error payload so the
 * UI can fall back to placeholder data.
 */
export async function GET() {
  const username = usernames.github;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-app",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 502 },
      );
    }

    const user = await userRes.json();
    const repos: Array<{
      stargazers_count: number;
      language: string | null;
      fork: boolean;
    }> = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const langCount = new Map<string, number>();
    for (const repo of repos) {
      if (repo.fork || !repo.language) continue;
      langCount.set(repo.language, (langCount.get(repo.language) || 0) + 1);
    }
    const topLanguages = [...langCount.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    const stats: GitHubStats = {
      username,
      name: user.name ?? null,
      avatar: user.avatar_url ?? null,
      bio: user.bio ?? null,
      publicRepos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      totalStars,
      topLanguages,
      profileUrl: user.html_url ?? `https://github.com/${username}`,
    };

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      { error: "Unexpected error fetching GitHub data" },
      { status: 500 },
    );
  }
}
