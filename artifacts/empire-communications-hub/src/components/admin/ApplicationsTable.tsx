"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { StatusBadge } from "@/components/dashboard/StatCard";
import { formatDate } from "@/lib/utils";
import type { ApplicationStatus, JobApplication } from "@/lib/types";

const statuses: ApplicationStatus[] = ["new", "reviewed", "shortlisted", "rejected", "hired"];

interface Row extends JobApplication {
  job_title?: string;
}

export function ApplicationsTable({ applications }: { applications: Row[] }) {
  const [rows, setRows] = useState(applications);

  async function updateStatus(id: string, status: ApplicationStatus) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    const supabase = createClient();
    await supabase.from("job_applications").update({ status }).eq("id", id);
  }

  async function viewResume(path: string | null) {
    if (!path) return;
    const supabase = createClient();
    const { data } = await supabase.storage.from("resumes").createSignedUrl(path, 60);
    if (data?.signedUrl) window.open(data.signedUrl, "_blank");
  }

  if (rows.length === 0) {
    return <p className="text-slate">No applications yet.</p>;
  }

  return (
    <div className="overflow-x-auto border border-navy/10 bg-white">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
          <tr>
            <th className="px-4 py-3">Applicant</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Experience</th>
            <th className="px-4 py-3">Applied</th>
            <th className="px-4 py-3">Resume</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-3">
                <p className="font-medium text-navy">{row.full_name}</p>
                <p className="text-xs text-slate">{row.mobile} · {row.email}</p>
              </td>
              <td className="px-4 py-3 text-slate">{row.job_title ?? "—"}</td>
              <td className="px-4 py-3 text-slate">{row.total_experience ?? "—"}</td>
              <td className="px-4 py-3 text-slate">{formatDate(row.created_at)}</td>
              <td className="px-4 py-3">
                {row.resume_url ? (
                  <button onClick={() => viewResume(row.resume_url)} className="text-hub underline focus-ring">View</button>
                ) : (
                  "—"
                )}
              </td>
              <td className="px-4 py-3">
                <select
                  value={row.status}
                  onChange={(e) => updateStatus(row.id, e.target.value as ApplicationStatus)}
                  className="border border-navy/20 bg-white px-2 py-1.5 text-xs focus-ring"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="mt-1"><StatusBadge status={row.status} /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
