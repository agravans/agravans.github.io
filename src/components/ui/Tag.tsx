import type { ReactNode } from "react";

const VARIANTS = {
  cyan: "bg-[var(--accent-dim)] text-[var(--accent)]",
  amber: "bg-[var(--media-dim)] text-[var(--media)]",
  rose: "bg-[var(--intel-dim)] text-[var(--intel)]",
  zinc: "bg-white/10 text-[var(--text-muted)]",
} as const;

export function Tag({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: keyof typeof VARIANTS;
}) {
  return (
    <span className={`rounded px-2 py-1 text-xs font-mono ${VARIANTS[tone]}`}>
      {children}
    </span>
  );
}
