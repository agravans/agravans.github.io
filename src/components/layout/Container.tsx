import type { ReactNode } from "react";

type Size = "narrow" | "default" | "wide";

export function Container({
  children,
  size = "default",
  className = "",
}: {
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  const width = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${width} ${className}`}>
      {children}
    </div>
  );
}
