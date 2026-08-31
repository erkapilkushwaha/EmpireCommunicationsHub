"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { formatDate } from "@/lib/utils";
import type { Enquiry, EnquiryStatus } from "@/lib/types";

const statuses: EnquiryStatus[] = ["new", "contacted", "in_progress", "converted", "closed"];

export function LeadsTable({ leads }: { leads: Enquiry[] }) {
  const [rows, setRows] = useState(leads);

  async function updateStatus(id: string, status: EnquiryStatus) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    const supabase = createClient();
    await supabase.from("enquiries").update({ status, updated_at: new Date().toISOString() }).eq("id", id);
  }

  if (rows.length === 0) {
    return <p className="text-slate">No leads assigned to you yet.</p>;
  }

  return (
    <div className="overflow-x-auto border border-navy/10 bg-white">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
          <tr>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Received</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {rows.map((lead) => (
            <tr key={lead.id}>
              <td className="px-4 py-3">
                <p className="font-medium text-navy">{lead.name}</p>
                <p className="text-xs text-slate">{lead.phone ?? lead.email}</p>
                {lead.company && <p className="text-xs text-slate">{lead.company}</p>}
              </td>
              <td className="max-w-xs px-4 py-3 text-slate">{lead.message}</td>
              <td className="px-4 py-3 text-slate">{formatDate(lead.created_at)}</td>
              <td className="px-4 py-3">
                <select
                  value={lead.status}
                  onChange={(e) => updateStatus(lead.id, e.target.value as EnquiryStatus)}
                  className="border border-navy/20 bg-white px-2 py-1.5 text-xs focus-ring"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>{s.replace("_", " ")}</option>
                  ))}
                </select>
                <div className="mt-1"><StatusBadge status={lead.status} /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
