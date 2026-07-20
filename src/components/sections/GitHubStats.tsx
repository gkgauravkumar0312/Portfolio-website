"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, Users, FolderGit2, GitFork } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { usernames } from "@/lib/data";
import type { GitHubStats as GitHubStatsType } from "@/app/api/github/route";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/** Placeholder shown while loading or if the API is unavailable. */
const FALLBACK: GitHubStatsType = {
  username: usernames.github,
  name: null,
  avatar: null,
  bio: null,
  publicRepos: 32,
  followers: 120,
  following: 80,
  totalStars: 240,
  topLanguages: [
    { name: "TypeScript", count: 12 },
    { name: "JavaScript", count: 8 },
    { name: "Python", count: 5 },
    { name: "Java", count: 4 },
    { name: "CSS", count: 3 },
  ],
  profileUrl: `https://github.com/${usernames.github}`,
};

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsType>(FALLBACK);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/github")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: GitHubStatsType) => {
        if (active && data && typeof data.publicRepos === "number") {
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

  const cards = [
    { icon: FolderGit2, label: "Repositories", value: stats.publicRepos },
    { icon: Users, label: "Followers", value: stats.followers },
    { icon: Star, label: "Total Stars", value: stats.totalStars },
    { icon: GitFork, label: "Following", value: stats.following },
  ];

  return (
    <Section id="github">
      <SectionHeading
        eyebrow="GitHub"
        title="Open Source & Activity"
        description="My contributions, repositories and most-used languages."
      />

      {/* Stat cards */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div key={card.label} variants={fadeUp}>
              <GlassCard className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <AnimatedCounter
                  value={card.value}
                  className="mt-3 text-3xl font-bold text-gradient"
                />
                <p className="mt-1 text-sm text-muted">{card.label}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Contribution graph */}
        <motion.div variants={fadeUp}>
          <GlassCard interactive={false} className="h-full">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Github className="h-5 w-5" /> Contribution Graph
            </h3>
            <div className="overflow-x-auto rounded-xl bg-foreground/5 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://ghchart.rshah.org/8b5cf6/${stats.username}`}
                alt={`${stats.username}'s GitHub contribution graph`}
                loading="lazy"
                className="min-w-[600px]"
              />
            </div>
            <div className="mt-6">
              <Button href={stats.profileUrl} variant="secondary" size="sm">
                <Github className="h-4 w-4" /> View GitHub Profile
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Languages */}
        <motion.div variants={fadeUp}>
          <GlassCard interactive={false} className="h-full">
            <h3 className="mb-5 text-lg font-semibold">Languages Used</h3>
            <div className="space-y-4">
              {stats.topLanguages.map((lang, i) => {
                const max = stats.topLanguages[0]?.count || 1;
                const pct = Math.round((lang.count / max) * 100);
                return (
                  <div key={lang.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted">{lang.count} repos</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {isFallback && (
              <p className="mt-5 text-xs text-muted">
                Showing sample data — add your GitHub username in{" "}
                <code className="rounded bg-foreground/10 px-1">lib/data.ts</code>.
              </p>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
