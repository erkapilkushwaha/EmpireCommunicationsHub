import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Briefcase,
  Users,
  FileEdit,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";

const navItems: NavItem[] = [
  { href: "/admin", label: "Overview", icon: <LayoutDashboard size={18} /> },
  { href: "/admin/enquiries", label: "Enquiries", icon: <Inbox size={18} /> },
  { href: "/admin/jobs", label: "Jobs", icon: <Briefcase size={18} /> },
  { href: "/admin/employees", label: "Employees", icon: <Users size={18} /> },
  { href: "/admin/content", label: "Content", icon: <FileEdit size={18} /> },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Authoritative access check — this is what actually protects the route,
  // not the proxy layer. Row-Level Security backs this up at the data layer,
  // so even a bypass here couldn't reach another user's data.
  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", user.id).single();

  if ((profile as { role?: string } | null)?.role !== "admin") {
    redirect("/admin/login");
  }

  const userName = (profile as { full_name?: string } | null)?.full_name ?? user.email ?? null;

  return (
    <DashboardShell navItems={navItems} roleLabel="Admin Dashboard" signOutRedirect="/admin/login" userName={userName}>
      {children}
    </DashboardShell>
  );
}
