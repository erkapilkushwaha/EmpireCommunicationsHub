"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/departments", label: "Departments" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-navy/80 transition-colors hover:text-hub focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/employee/login" className="font-mono text-xs uppercase tracking-widest text-slate hover:text-hub focus-ring">
            Employee Login →
          </Link>
          <LinkButton href="/contact" size="md">
            Get a Quote
          </LinkButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring text-navy lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-paper px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4 border-t border-navy/10 pt-6">
            <Link
              href="/employee/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between font-mono text-sm uppercase tracking-widest text-slate"
            >
              Employee Login <span aria-hidden>→</span>
            </Link>
            <LinkButton href="/contact" size="lg" className="w-full">
              Get a Quote
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
