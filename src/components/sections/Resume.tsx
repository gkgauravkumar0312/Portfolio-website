"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";
import { fadeUp } from "@/lib/motion";

export function Resume() {
  return (
    <Section id="resume">
      <motion.div variants={fadeUp}>
        <GlassCard
          interactive={false}
          className="relative overflow-hidden text-center"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-4 py-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              <span className="text-gradient">My Resume</span>
            </h2>
            <p className="max-w-md text-muted">
              Grab a copy of my resume to learn more about my experience,
              projects and skills — or view it right in your browser.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.resumeUrl} size="lg" download>
                <Download className="h-4 w-4" /> Download Resume
              </Button>
              <Button href={siteConfig.resumeUrl} size="lg" variant="secondary">
                <Eye className="h-4 w-4" /> View Resume
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
