export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[var(--accent-dim)] px-2 py-1 text-xs font-mono text-[var(--accent)]">
      {children}
    </span>
  );
}
