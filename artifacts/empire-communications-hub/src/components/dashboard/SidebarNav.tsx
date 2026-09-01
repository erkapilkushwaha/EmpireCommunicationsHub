"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "./DashboardShell";

export function SidebarNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="mt-4 flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = item.href === pathname || (item.href !== "/employee" && item.href !== "/admin" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-all duration-200",
              isActive
                ? "bg-hub text-paper shadow-sm"
                : "text-paper/75 hover:bg-paper/10 hover:text-paper hover:pl-4"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}