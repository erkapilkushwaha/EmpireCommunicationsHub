import { createClient } from "@/lib/supabase/server";
import { StatCard, PageHeading } from "@/components/dashboard/StatCard";

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [
    { count: newEnquiries },
    { count: openJobs },
    { count: employeeCount },
    { count: pendingApplications },
    { count: pendingLeaves },
  ] = await Promise.all([
    supabase.from("enquiries").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("jobs").select("*", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "employee"),
    supabase.from("job_applications").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("leave_requests").select("*", { count: "exact", head: true }).eq("status", "pending"),
  ]);

  return (
    <div>
      <PageHeading title="Overview" subtitle="Everything happening across the platform right now." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="New Enquiries" value={newEnquiries ?? 0} />
        <StatCard label="Open Job Postings" value={openJobs ?? 0} />
        <StatCard label="Employees" value={employeeCount ?? 0} />
        <StatCard label="New Applications" value={pendingApplications ?? 0} />
        <StatCard label="Leave Requests Pending" value={pendingLeaves ?? 0} />
      </div>
    </div>
  );
}
