"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the top of the viewport tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[120] h-1 w-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
    />
  );
}
