import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SignOutButton } from "@/components/auth/SignOutButton";

export interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function DashboardShell({
  navItems,
  roleLabel,
  signOutRedirect,
  userName,
  children,
}: {
  navItems: NavItem[];
  roleLabel: string;
  signOutRedirect: string;
  userName?: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper md:flex">
      <aside className="flex shrink-0 flex-col justify-between bg-navy p-6 text-paper md:w-64">
        <div>
          <Logo dark />
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">{roleLabel}</p>
          <nav className="mt-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-paper/80 transition-colors hover:bg-paper/5 hover:text-paper"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 space-y-3 border-t border-paper/10 pt-4">
          {userName && <p className="truncate text-sm text-paper/70">{userName}</p>}
          <SignOutButton redirectTo={signOutRedirect} />
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
