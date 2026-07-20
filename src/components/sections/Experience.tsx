"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've Worked"
        description="Internships and roles that shaped how I build software."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical timeline line */}
        <span className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${i}`}
              variants={fadeUp}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute left-2 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background md:left-auto ${
                  i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                }`}
              />

              <GlassCard>
                <div className="flex items-center gap-2 text-primary md:justify-end">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm font-semibold">{item.period}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-muted">{item.company}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted md:justify-end">
                  <MapPin className="h-3.5 w-3.5" /> {item.location}
                </p>
                <ul
                  className={`mt-3 space-y-1.5 text-sm text-muted ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
