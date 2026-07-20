"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one to create a
 * looping typewriter effect.
 */
export function useTypingEffect(
  words: readonly string[],
  { typeSpeed = 90, deleteSpeed = 45, pause = 1500 } = {},
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === "") {
      delay = 400;
    }

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
