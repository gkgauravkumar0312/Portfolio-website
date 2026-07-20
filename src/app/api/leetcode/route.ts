import { NextResponse } from "next/server";
import { usernames } from "@/lib/data";

export const revalidate = 3600; // cache for an hour

export type LeetCodeStats = {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  ranking: number | null;
  profileUrl: string;
};

const LEETCODE_GQL = "https://leetcode.com/graphql";

const QUERY = `
  query userProblemsSolved($username: String!) {
    allQuestionsCount { difficulty count }
    matchedUser(username: $username) {
      profile { ranking }
      submitStatsGlobal {
        acSubmissionNum { difficulty count }
      }
    }
  }
`;

/**
 * Fetches public LeetCode solve counts via the GraphQL endpoint. Returns a
 * graceful error payload so the UI can fall back to placeholder data.
 */
export async function GET() {
  const username = usernames.leetcode;

  try {
    const res = await fetch(LEETCODE_GQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "portfolio-app",
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LeetCode data" },
        { status: 502 },
      );
    }

    const json = await res.json();
    const matched = json?.data?.matchedUser;
    if (!matched) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const all: Array<{ difficulty: string; count: number }> =
      json.data.allQuestionsCount ?? [];
    const solved: Array<{ difficulty: string; count: number }> =
      matched.submitStatsGlobal?.acSubmissionNum ?? [];

    const totalOf = (arr: typeof all, diff: string) =>
      arr.find((d) => d.difficulty === diff)?.count ?? 0;

    const stats: LeetCodeStats = {
      username,
      totalSolved: totalOf(solved, "All"),
      totalQuestions: totalOf(all, "All"),
      easySolved: totalOf(solved, "Easy"),
      easyTotal: totalOf(all, "Easy"),
      mediumSolved: totalOf(solved, "Medium"),
      mediumTotal: totalOf(all, "Medium"),
      hardSolved: totalOf(solved, "Hard"),
      hardTotal: totalOf(all, "Hard"),
      ranking: matched.profile?.ranking ?? null,
      profileUrl: `https://leetcode.com/u/${username}`,
    };

    return NextResponse.json(stats);
  } catch {
    return NextResponse.json(
      { error: "Unexpected error fetching LeetCode data" },
      { status: 500 },
    );
  }
}
