"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { achievements } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & Wins"
        description="Moments that mark my growth as an engineer and problem solver."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <GlassCard className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
