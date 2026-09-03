"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowRight, UserCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

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
      <header className="sticky top-0 z-[100] w-full border-b border-navy/10 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Logo />

          {/* Desktop Navigation - Sleek & Compact */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/employee/login"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-500 transition-colors hover:bg-slate-100 hover:text-navy"
            >
              <UserCheck className="h-3.5 w-3.5 text-slate-400" />
              <span>Employee Portal</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-600 hover:shadow-md active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="relative z-[110] flex h-9 w-9 items-center justify-center rounded-lg border border-navy/10 bg-slate-50 text-navy transition-colors active:bg-slate-200 lg:hidden cursor-pointer"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mounted && open && (
          <div className="fixed inset-x-0 top-[65px] bottom-0 z-[99] flex flex-col justify-between overflow-y-auto bg-white px-6 py-6 shadow-2xl lg:hidden">
            {/* Menu Links */}
            <nav className="flex flex-col divide-y divide-slate-100">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-sm font-medium text-navy transition-colors hover:text-blue-600 active:text-blue-600"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            {/* Bottom Actions Section */}
            <div className="flex flex-col gap-3 border-t border-slate-200 pt-5">
              <Link
                href="/employee/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-100 active:bg-slate-200"
              >
                <UserCheck className="h-4 w-4 text-slate-500" />
                <span>Employee Portal</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-navy py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 active:scale-[0.98]"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
