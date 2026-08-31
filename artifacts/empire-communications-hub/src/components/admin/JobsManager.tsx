"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/dashboard/StatCard";
import type { Job } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function JobsManager({ jobs }: { jobs: Job[] }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    await supabase.from("jobs").insert({
      title: String(data.get("title") ?? ""),
      department: String(data.get("department") ?? ""),
      employment_type: String(data.get("employment_type") ?? "full_time"),
      location: String(data.get("location") ?? "Lucknow"),
      work_mode: String(data.get("work_mode") ?? "on_site"),
      experience_range: String(data.get("experience_range") ?? ""),
      description: String(data.get("description") ?? ""),
    });

    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    setShowForm(false);
    router.refresh();
  }

  async function toggleStatus(job: Job) {
    const supabase = createClient();
    await supabase.from("jobs").update({ status: job.status === "open" ? "closed" : "open" }).eq("id", job.id);
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-slate">{jobs.length} posting{jobs.length === 1 ? "" : "s"} total</p>
        <Button onClick={() => setShowForm((v) => !v)}>{showForm ? "Cancel" : "Post New Job"}</Button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="mt-4 grid gap-4 border border-navy/10 bg-white p-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="title">Job title</label>
            <input id="title" name="title" required className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="department">Department</label>
            <input id="department" name="department" placeholder="e.g. Telecalling" className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="employment_type">Employment type</label>
            <select id="employment_type" name="employment_type" className={inputClasses}>
              <option value="full_time">Full-Time</option>
              <option value="part_time">Part-Time</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="work_mode">Work mode</label>
            <select id="work_mode" name="work_mode" className={inputClasses}>
              <option value="on_site">On-Site</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="location">Location</label>
            <input id="location" name="location" defaultValue="Lucknow" className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="experience_range">Experience</label>
            <input id="experience_range" name="experience_range" placeholder="e.g. 0-2 years" className={inputClasses} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-navy" htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={3} className={inputClasses} />
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" disabled={submitting}>{submitting ? "Posting…" : "Post Job"}</Button>
          </div>
        </form>
      )}

      <div className="mt-6 space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="flex flex-wrap items-center justify-between gap-3 border border-navy/10 bg-white p-4">
            <div>
              <p className="font-medium text-navy">{job.title}</p>
              <p className="text-xs text-slate">{job.department} · {job.location} · {job.work_mode.replace("_", "-")}</p>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={job.status} />
              <Button size="md" variant="secondary" onClick={() => toggleStatus(job)}>
                {job.status === "open" ? "Close" : "Reopen"}
              </Button>
            </div>
          </div>
        ))}
        {jobs.length === 0 && <p className="text-slate">No job postings yet.</p>}
      </div>
    </div>
  );
}
