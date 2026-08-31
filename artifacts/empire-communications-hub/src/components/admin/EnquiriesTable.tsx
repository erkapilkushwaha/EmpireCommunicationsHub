"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { formatDateTime } from "@/lib/utils";
import type { Enquiry, EnquiryStatus, Profile } from "@/lib/types";

const statuses: EnquiryStatus[] = ["new", "contacted", "in_progress", "converted", "closed"];

export function EnquiriesTable({ enquiries, employees }: { enquiries: Enquiry[]; employees: Profile[] }) {
  const [rows, setRows] = useState(enquiries);

  async function assign(id: string, employeeId: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, assigned_to: employeeId || null } : r)));
    const supabase = createClient();
    await supabase.from("enquiries").update({ assigned_to: employeeId || null }).eq("id", id);
  }

  async function updateStatus(id: string, status: EnquiryStatus) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    const supabase = createClient();
    await supabase.from("enquiries").update({ status }).eq("id", id);
  }

  return (
    <div className="overflow-x-auto border border-navy/10 bg-white">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
          <tr>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Received</th>
            <th className="px-4 py-3">Assigned To</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-3">
                <p className="font-medium text-navy">{row.name}</p>
                <p className="text-xs text-slate">{row.phone ?? row.email}</p>
                {row.company && <p className="text-xs text-slate">{row.company}</p>}
              </td>
              <td className="max-w-xs px-4 py-3 text-slate">{row.message}</td>
              <td className="px-4 py-3 text-slate">{formatDateTime(row.created_at)}</td>
              <td className="px-4 py-3">
                <select
                  value={row.assigned_to ?? ""}
                  onChange={(e) => assign(row.id, e.target.value)}
                  className="border border-navy/20 bg-white px-2 py-1.5 text-xs focus-ring"
                >
                  <option value="">Unassigned</option>
                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>{emp.full_name}</option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-3">
                <select
                  value={row.status}
                  onChange={(e) => updateStatus(row.id, e.target.value as EnquiryStatus)}
                  className="border border-navy/20 bg-white px-2 py-1.5 text-xs focus-ring"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>{s.replace("_", " ")}</option>
                  ))}
                </select>
                <div className="mt-1"><StatusBadge status={row.status} /></div>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr><td colSpan={5} className="px-4 py-8 text-center text-slate">No enquiries yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
