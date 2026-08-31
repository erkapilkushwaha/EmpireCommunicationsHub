import { createClient } from "@/lib/supabase/server";
import { StatCard, PageHeading } from "@/components/dashboard/StatCard";

export default async function EmployeeDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const today = new Date().toISOString().slice(0, 10);

  const [{ count: leadsCount }, { count: pendingLeaveCount }, { data: todayAttendance }, { count: goalsCount }] =
    await Promise.all([
      supabase.from("enquiries").select("*", { count: "exact", head: true }).eq("assigned_to", user?.id).in("status", ["new", "contacted", "in_progress"]),
      supabase.from("leave_requests").select("*", { count: "exact", head: true }).eq("employee_id", user?.id).eq("status", "pending"),
      supabase.from("attendance").select("status").eq("employee_id", user?.id).eq("date", today).maybeSingle(),
      supabase.from("goals").select("*", { count: "exact", head: true }).eq("employee_id", user?.id).neq("status", "achieved"),
    ]);

  return (
    <div>
      <PageHeading title="Dashboard" subtitle="Here's where things stand today." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Leads" value={leadsCount ?? 0} hint="Assigned & in progress" />
        <StatCard label="Pending Leave" value={pendingLeaveCount ?? 0} hint="Awaiting approval" />
        <StatCard label="Today's Attendance" value={(todayAttendance as { status?: string } | null)?.status ?? "Not marked"} />
        <StatCard label="Open Goals" value={goalsCount ?? 0} hint="In progress this period" />
      </div>
    </div>
  );
}
