import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <Image
        src="/logo-transparent.png"
        alt="Empire Communications Hub"
        width={40}
        height={40}
        className="h-9 w-9 shrink-0"
        priority
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display font-bold tracking-tight text-lg",
            dark ? "text-paper" : "text-navy"
          )}
        >
          EMPIRE
        </span>
        <span
          className={cn(
            "block font-mono text-[10px] tracking-[0.2em]",
            dark ? "text-cyan" : "text-slate"
          )}
        >
          COMMUNICATIONS HUB
        </span>
      </span>
    </Link>
  );
}
