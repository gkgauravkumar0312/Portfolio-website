"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { concepts, skillCategories } from "@/lib/data";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="My Tech Stack"
        description="Technologies and tools I use to design, build and ship modern applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const CatIcon = category.icon;
          return (
            <GlassCard key={category.title} className="group">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <CatIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <motion.ul
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li
                      key={skill.name}
                      variants={scaleIn}
                      className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all hover:-translate-y-1 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </GlassCard>
          );
        })}
      </div>

      {/* Core CS concepts */}
      <motion.div variants={fadeUp} className="mt-10">
        <GlassCard interactive={false}>
          <h3 className="mb-4 text-center text-lg font-semibold">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {concepts.map((concept) => (
              <span
                key={concept}
                className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground/90"
              >
                {concept}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
