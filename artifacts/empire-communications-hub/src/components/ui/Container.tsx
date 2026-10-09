import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export function Container({
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

const sectionSpacing = {
  none: "py-0",
  compact: "py-8 md:py-10",
  default: "py-12 md:py-16",
  spacious: "py-20 md:py-28",
};

type SectionProps = {
  className?: string;
  children: ReactNode;
  dark?: boolean;
  contained?: boolean;
  spacing?: keyof typeof sectionSpacing;
};

export function Section({
  className,
  children,
  dark = false,
  contained = true,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        sectionSpacing[spacing],
        dark
          ? "bg-navy text-paper"
          : "bg-white text-navy",
        className,
      )}
    >
      {contained ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

type EyebrowProps = {
  className?: string;
  children: ReactNode;
};

export function Eyebrow({
  className,
  children,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-4 font-mono text-xs uppercase tracking-[0.25em] text-hub",
        className,
      )}
    >
      {children}
    </p>
  );
}
