import { createClient } from "@/lib/supabase/server";
import { PageHeading, StatusBadge } from "@/components/dashboard/StatCard";
import { LeaveForm } from "@/components/employee/LeaveForm";
import { formatDate } from "@/lib/utils";
import type { LeaveRequest } from "@/lib/types";

export default async function EmployeeLeavePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: leaves } = await supabase
    .from("leave_requests")
    .select("*")
    .eq("employee_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <PageHeading title="Leave" subtitle="Request time off and track approval status." />
      <LeaveForm userId={user!.id} />

      <div className="mt-8 overflow-x-auto border border-navy/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Dates</th>
              <th className="px-4 py-3">Reason</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/10">
            {((leaves as LeaveRequest[] | null) ?? []).map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 capitalize text-navy">{row.leave_type}</td>
                <td className="px-4 py-3 text-slate">{formatDate(row.start_date)} – {formatDate(row.end_date)}</td>
                <td className="px-4 py-3 text-slate">{row.reason ?? "—"}</td>
                <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
