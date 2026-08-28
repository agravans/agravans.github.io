import type { ReactNode } from "react";

const TONE = {
  cyan: "hover:border-teal-300/40",
  amber: "hover:border-amber-300/45",
  rose: "hover:border-rose-400/40",
  zinc: "hover:border-white/20",
} as const;

export function GlowCard({
  children,
  className = "",
  tone = "cyan",
}: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof TONE;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 hover:bg-white/[0.07] sm:p-6 ${TONE[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
