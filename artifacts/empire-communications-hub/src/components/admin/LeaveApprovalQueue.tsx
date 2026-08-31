"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { formatDate } from "@/lib/utils";
import type { LeaveRequest, Profile } from "@/lib/types";

interface Row extends LeaveRequest {
  employeeName?: string;
}

export function LeaveApprovalQueue({ requests, currentUserId }: { requests: Row[]; currentUserId: string }) {
  const [rows, setRows] = useState(requests);

  async function decide(id: string, status: "approved" | "rejected") {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    const supabase = createClient();
    await supabase.from("leave_requests").update({ status, approved_by: currentUserId }).eq("id", id);
  }

  const pending = rows.filter((r) => r.status === "pending");
  const resolved = rows.filter((r) => r.status !== "pending");

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate">Pending ({pending.length})</p>
        {pending.length === 0 && <p className="text-slate">Nothing waiting on you.</p>}
        <div className="space-y-3">
          {pending.map((row) => (
            <div key={row.id} className="flex flex-wrap items-center justify-between gap-3 border border-navy/10 bg-white p-4">
              <div>
                <p className="font-medium text-navy">{row.employeeName ?? "Employee"}</p>
                <p className="text-xs text-slate capitalize">{row.leave_type} · {formatDate(row.start_date)} – {formatDate(row.end_date)}</p>
                {row.reason && <p className="text-xs text-slate">{row.reason}</p>}
              </div>
              <div className="flex gap-2">
                <Button size="md" onClick={() => decide(row.id, "approved")}>Approve</Button>
                <Button size="md" variant="secondary" onClick={() => decide(row.id, "rejected")}>Reject</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate">History</p>
        <div className="space-y-2">
          {resolved.map((row) => (
            <div key={row.id} className="flex flex-wrap items-center justify-between gap-3 border border-navy/10 bg-white p-4">
              <div>
                <p className="font-medium text-navy">{row.employeeName ?? "Employee"}</p>
                <p className="text-xs text-slate capitalize">{row.leave_type} · {formatDate(row.start_date)} – {formatDate(row.end_date)}</p>
              </div>
              <StatusBadge status={row.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
