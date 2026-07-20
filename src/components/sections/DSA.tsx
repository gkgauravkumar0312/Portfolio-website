"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { codingProfiles, usernames } from "@/lib/data";
import type { LeetCodeStats } from "@/app/api/leetcode/route";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Placeholder shown while loading or if the API is unavailable. */
const FALLBACK: LeetCodeStats = {
  username: usernames.leetcode,
  totalSolved: 520,
  totalQuestions: 3400,
  easySolved: 200,
  easyTotal: 850,
  mediumSolved: 260,
  mediumTotal: 1750,
  hardSolved: 60,
  hardTotal: 800,
  ranking: 120000,
  profileUrl: `https://leetcode.com/u/${usernames.leetcode}`,
};

const difficultyMeta = [
  { key: "easy", label: "Easy", color: "text-emerald-400", bar: "bg-emerald-400" },
  { key: "medium", label: "Medium", color: "text-amber-400", bar: "bg-amber-400" },
  { key: "hard", label: "Hard", color: "text-rose-400", bar: "bg-rose-400" },
] as const;

export function DSA() {
  const [stats, setStats] = useState<LeetCodeStats>(FALLBACK);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/leetcode")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: LeetCodeStats) => {
        if (active && data && typeof data.totalSolved === "number") {
          setStats(data);
          setIsFallback(false);
        }
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => {
      active = false;
    };
  }, []);

  const solvedByKey = {
    easy: { solved: stats.easySolved, total: stats.easyTotal },
    medium: { solved: stats.mediumSolved, total: stats.mediumTotal },
    hard: { solved: stats.hardSolved, total: stats.hardTotal },
  };

  return (
    <Section id="dsa">
      <SectionHeading
        eyebrow="DSA"
        title="Problem Solving"
        description="Sharpening my algorithmic thinking one problem at a time."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Total solved + badge */}
        <motion.div variants={fadeUp}>
          <GlassCard interactive={false} className="flex h-full flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Code2 className="h-8 w-8" />
            </div>
            <p className="mt-4 text-sm uppercase tracking-widest text-muted">
              Total Problems Solved
            </p>
            <AnimatedCounter
              value={stats.totalSolved}
              suffix="+"
              className="mt-1 text-5xl font-bold text-gradient"
            />

            {/* LeetCode badge placeholder */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl glass px-5 py-3">
              <SiLeetcode className="h-8 w-8 text-amber-400" />
              <div className="text-left">
                <p className="text-sm font-semibold">LeetCode</p>
                <p className="text-xs text-muted">
                  {stats.ranking
                    ? `Rank #${stats.ranking.toLocaleString()}`
                    : "Active problem solver"}
                </p>
              </div>
            </div>
            {isFallback && (
              <p className="mt-3 text-xs text-muted">
                Showing sample data — add your LeetCode username in{" "}
                <code className="rounded bg-foreground/10 px-1">lib/data.ts</code>.
              </p>
            )}
          </GlassCard>
        </motion.div>

        {/* Difficulty breakdown */}
        <motion.div variants={fadeUp}>
          <GlassCard interactive={false} className="h-full">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <Trophy className="h-5 w-5 text-primary" /> Breakdown by Difficulty
            </h3>
            <div className="space-y-6">
              {difficultyMeta.map((d) => {
                const { solved, total } = solvedByKey[d.key];
                const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
                return (
                  <div key={d.key}>
                    <div className="mb-2 flex items-baseline justify-between text-sm">
                      <span className={cn("font-semibold", d.color)}>{d.label}</span>
                      <span className="text-muted">
                        <AnimatedCounter value={solved} /> / {total}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-foreground/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={cn("h-full rounded-full", d.bar)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Coding profile buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  {profile.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
