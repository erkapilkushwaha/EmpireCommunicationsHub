import { createClient } from "@/lib/supabase/server";
import { PageHeading, StatusBadge } from "@/components/dashboard/StatCard";
import { AttendanceWidget } from "@/components/employee/AttendanceWidget";
import { formatDate } from "@/lib/utils";
import type { Attendance } from "@/lib/types";

export default async function EmployeeAttendancePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const today = new Date().toISOString().slice(0, 10);

  const [{ data: todayRow }, { data: history }] = await Promise.all([
    supabase.from("attendance").select("id, check_in_time, check_out_time").eq("employee_id", user?.id).eq("date", today).maybeSingle(),
    supabase.from("attendance").select("*").eq("employee_id", user?.id).order("date", { ascending: false }).limit(30),
  ]);

  return (
    <div>
      <PageHeading title="Attendance" subtitle="Check in when you start work, check out when you finish." />
      <AttendanceWidget userId={user!.id} today={todayRow as { id: string; check_in_time: string | null; check_out_time: string | null } | null} />

      <div className="mt-8 overflow-x-auto border border-navy/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Check In</th>
              <th className="px-4 py-3">Check Out</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/10">
            {((history as Attendance[] | null) ?? []).map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 text-navy">{formatDate(row.date)}</td>
                <td className="px-4 py-3 text-slate">
                  {row.check_in_time ? new Date(row.check_in_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "—"}
                </td>
                <td className="px-4 py-3 text-slate">
                  {row.check_out_time ? new Date(row.check_out_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "—"}
                </td>
                <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
