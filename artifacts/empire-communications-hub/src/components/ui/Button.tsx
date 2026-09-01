import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-hub text-paper shadow-sm hover:bg-navy hover:shadow-md",
  secondary: "border border-navy/25 text-navy hover:border-hub hover:text-hub hover:bg-hub/5",
  ghost: "text-navy hover:text-hub hover:bg-hub/5",
  dark: "bg-paper text-navy shadow-sm hover:bg-cyan hover:shadow-md",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm rounded-sm",
  lg: "px-7 py-3.5 text-base rounded-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  loading = false,
  disabled,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 size={16} className="animate-spin-smooth" />}
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}