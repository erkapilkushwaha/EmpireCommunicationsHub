"use client";

import { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-navy/10 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-navy/80 transition-colors hover:text-hub"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/employee/login"
              className="font-mono text-xs uppercase tracking-widest text-slate hover:text-hub"
            >
              Employee Login →
            </Link>
            <LinkButton href="/contact" size="md">
              Get a Quote
            </LinkButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 bg-slate-50 text-navy active:bg-slate-200 lg:hidden cursor-pointer"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Full Screen / Dropdown Drawer */}
        {mounted && open && (
          <div className="fixed inset-x-0 top-[73px] bottom-0 z-[99] flex flex-col justify-between overflow-y-auto bg-white px-6 py-8 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold text-navy transition-colors hover:text-hub"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
              <Link
                href="/employee/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between font-mono text-sm font-semibold uppercase tracking-widest text-slate hover:text-navy"
              >
                Employee Login <span>→</span>
              </Link>
              <LinkButton
                href="/contact"
                size="lg"
                className="w-full text-center"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </LinkButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


