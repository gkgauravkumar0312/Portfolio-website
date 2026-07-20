"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** A custom two-part cursor (dot + trailing ring). Disabled on touch/coarse
 *  pointers and when the user prefers reduced motion. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHovering(Boolean(el?.closest("a, button, [role='button'], input, textarea")));
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[150] -translate-x-1/2 -translate-y-1/2"
      >
        <span className="block h-2 w-2 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[150] -translate-x-1/2 -translate-y-1/2"
      >
        <span className="block h-8 w-8 rounded-full border border-primary/60" />
      </motion.div>
    </>
  );
}
