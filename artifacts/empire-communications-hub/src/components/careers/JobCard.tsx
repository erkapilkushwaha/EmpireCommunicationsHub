import { Briefcase, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Job } from "@/lib/types";

export function JobCard({ job, onApply }: { job: Job; onApply: () => void }) {
  return (
    <div className="border border-navy/10 bg-white p-6">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="text-hub">{job.department ?? "General"}</span>
        <span className="text-slate/50">·</span>
        <span className="text-slate">{job.employment_type === "full_time" ? "Full-Time" : "Part-Time"}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{job.title}</h3>
      {job.description && <p className="mt-2 max-w-xl text-sm text-slate">{job.description}</p>}

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
        <span className="flex items-center gap-1.5">
          <MapPin size={15} className="text-hub" />
          {job.location ?? "Lucknow"} · {job.work_mode.replace("_", "-")}
        </span>
        {job.experience_range && (
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-hub" /> {job.experience_range}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Briefcase size={15} className="text-hub" /> Empire Communications Hub
        </span>
      </div>

      <Button onClick={onApply} className="mt-5">Apply Now</Button>
    </div>
  );
}
