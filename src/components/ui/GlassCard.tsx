"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  /** Adds an interactive lift + glow on hover. */
  interactive?: boolean;
};

/** A rounded, glassmorphism card used throughout the site. */
export function GlassCard({
  className,
  interactive = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass rounded-2xl p-6 shadow-card transition-shadow duration-300",
        interactive && "hover:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
