/** Join class names, dropping falsy values. A tiny `clsx` replacement. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number compactly, e.g. 1234 -> "1.2k". */
export function formatCompact(value: number): string {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}
