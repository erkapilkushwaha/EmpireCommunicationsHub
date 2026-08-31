import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  dark = false,
}: {
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={cn("py-20 md:py-28", dark ? "bg-navy text-paper" : "bg-paper text-navy", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("font-mono text-xs tracking-[0.25em] uppercase text-hub mb-4", className)}>
      {children}
    </p>
  );
}
