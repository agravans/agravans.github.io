import type { ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
