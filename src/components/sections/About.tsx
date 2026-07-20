"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Rocket, Puzzle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { about, education } from "@/lib/data";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

const cards = [
  { icon: Target, title: "Career Objective", body: about.objective },
  { icon: Rocket, title: "Currently Learning", body: about.learning },
  { icon: Puzzle, title: "Problem Solving", body: about.passion },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Get to know me"
        description={about.intro}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: highlight cards */}
        <motion.div variants={slideInLeft} className="space-y-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {card.body}
                  </p>
                </div>
              </GlassCard>
            );
          })}

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {about.highlights.map((h) => (
              <GlassCard key={h.label} interactive={false} className="p-4">
                <p className="text-xs uppercase tracking-wider text-muted">
                  {h.label}
                </p>
                <p className="mt-1 font-semibold text-gradient">{h.value}</p>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: education */}
        <motion.div variants={slideInRight}>
          <GlassCard interactive={false} className="h-full">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <ol className="relative space-y-8 border-l border-border pl-6">
              {education.map((edu) => (
                <li key={edu.school} className="relative">
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background" />
                  <p className="text-sm font-medium text-primary">{edu.period}</p>
                  <h4 className="mt-1 font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted">{edu.school}</p>
                  <p className="mt-2 text-sm text-muted">{edu.detail}</p>
                  <span className="mt-2 inline-block rounded-full glass px-3 py-1 text-xs font-medium">
                    {edu.grade}
                  </span>
                </li>
              ))}
            </ol>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
