import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--bg)] hover:opacity-90",
  secondary:
    "border border-[var(--border)] hover:bg-[var(--surface)]",
  ghost: "hover:bg-[var(--surface)]",
  link: "text-[var(--accent)] hover:underline",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  [k: string]: unknown;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
