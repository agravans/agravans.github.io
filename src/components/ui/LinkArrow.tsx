import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function LinkArrow({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline"
    >
      {children}
      <ArrowRight size={14} />
    </Link>
  );
}
