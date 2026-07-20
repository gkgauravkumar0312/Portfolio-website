"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Section wrapper: consistent spacing, id anchor and scroll-in animation. */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

/** Standard section heading with eyebrow label and gradient title. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="mb-3 inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
