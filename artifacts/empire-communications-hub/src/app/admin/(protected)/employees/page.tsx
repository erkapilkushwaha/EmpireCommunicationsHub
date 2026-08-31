import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { EmployeesManager } from "@/components/admin/EmployeesManager";
import { LeaveApprovalQueue } from "@/components/admin/LeaveApprovalQueue";
import type { LeaveRequest, Profile } from "@/lib/types";

export default async function AdminEmployeesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [{ data: employees }, { data: leaves }] = await Promise.all([
    supabase.from("profiles").select("*").eq("role", "employee").order("full_name"),
    supabase.from("leave_requests").select("*, profiles(full_name)").order("created_at", { ascending: false }),
  ]);

  const leaveRows = ((leaves as (LeaveRequest & { profiles?: { full_name: string } | null })[] | null) ?? []).map(
    (l) => ({ ...l, employeeName: l.profiles?.full_name })
  );

  return (
    <div className="space-y-12">
      <div>
        <PageHeading title="Employees" subtitle="Register new employees and review who's on the team." />
        <EmployeesManager employees={(employees as Profile[] | null) ?? []} />
      </div>

      <div>
        <PageHeading title="Leave Approvals" subtitle="Approve or reject time-off requests." />
        <LeaveApprovalQueue requests={leaveRows} currentUserId={user!.id} />
      </div>
    </div>
  );
}
