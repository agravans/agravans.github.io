import type { ReactNode } from "react";
import { Container } from "./Container";

type Size = "narrow" | "default" | "wide";

export function Section({
  children,
  id,
  className = "",
  containerSize = "default",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: Size;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
