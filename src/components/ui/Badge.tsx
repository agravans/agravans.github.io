export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium text-[var(--accent)] ring-1 ring-inset ring-[var(--accent)]/30 ${className}`}>
      {children}
    </span>
  );
}
