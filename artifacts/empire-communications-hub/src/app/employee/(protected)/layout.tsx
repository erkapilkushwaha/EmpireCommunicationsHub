import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  CalendarCheck,
  CalendarClock,
  TrendingUp,
  GraduationCap,
  UserCircle,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";

const navItems: NavItem[] = [
  { href: "/employee", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { href: "/employee/leads", label: "My Leads", icon: <Target size={18} /> },
  { href: "/employee/attendance", label: "Attendance", icon: <CalendarCheck size={18} /> },
  { href: "/employee/leave", label: "Leave", icon: <CalendarClock size={18} /> },
  { href: "/employee/performance", label: "Performance", icon: <TrendingUp size={18} /> },
  { href: "/employee/training", label: "Training", icon: <GraduationCap size={18} /> },
  { href: "/employee/profile", label: "Profile", icon: <UserCircle size={18} /> },
];

export default async function EmployeeLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Authoritative access check — this is what actually protects the route,
  // not the proxy layer. Row-Level Security backs this up at the data layer.
  if (!user) {
    redirect("/employee/login");
  }

  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).single();
  const userName = (profile as { full_name?: string } | null)?.full_name ?? user.email ?? null;

  return (
    <DashboardShell navItems={navItems} roleLabel="Employee Workspace" signOutRedirect="/employee/login" userName={userName}>
      {children}
    </DashboardShell>
  );
}
