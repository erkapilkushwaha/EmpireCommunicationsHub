import { ArrowUpRight, Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/lib/types";

function readableLabel(value: string | null | undefined) {
  if (!value) return "";

  return value
    .replace(/[_-]+/g, " ")
    .replace(/\bw/g, (letter) => letter.toUpperCase());
}

const employmentLabels: Record<string, string> = {
  full_time: "Full-time",
  part_time: "Part-time",
  contract: "Contract",
  internship: "Internship",
  intern: "Internship",
  temporary: "Temporary",
};

const workModeLabels: Record<string, string> = {
  onsite: "On-site",
  on_site: "On-site",
  remote: "Remote",
  hybrid: "Hybrid",
};

export function JobCard({
  job,
  onApply,
}: {
  job: Job;
  onApply: () => void;
}) {
  const employmentType =
    employmentLabels[job.employment_type] ||
    readableLabel(job.employment_type) ||
    "Not specified";

  const workMode =
    workModeLabels[job.work_mode] ||
    readableLabel(job.work_mode);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition hover:border-navy/25 hover:shadow-sm md:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        <span className="rounded-full border border-navy/10 px-3 py-1 text-hub">
          {job.department || "General"}
        </span>
        <span className="rounded-full border border-navy/10 px-3 py-1 text-slate">
          {employmentType}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
        {job.title}
      </h3>

      {job.description && (
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate">
          {job.description}
        </p>
      )}

      <div className="mt-5 space-y-3 text-sm text-slate">
        <div className="flex items-start gap-2">
          <MapPin
            size={17}
            className="mt-0.5 shrink-0 text-hub"
            aria-hidden="true"
          />
          <span>
            {job.location || "Lucknow"}
            {workMode ? ` · ${workMode}` : ""}
          </span>
        </div>

        {job.experience_range && (
          <div className="flex items-start gap-2">
            <Clock
              size={17}
              className="mt-0.5 shrink-0 text-hub"
              aria-hidden="true"
            />
            <span>{job.experience_range}</span>
          </div>
        )}

        <div className="flex items-start gap-2">
          <Briefcase
            size={17}
            className="mt-0.5 shrink-0 text-hub"
            aria-hidden="true"
          />
          <span>Empire Communications Hub</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onApply}
          aria-label={`Apply for ${job.title}`}
          className="focus-ring inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Apply now
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
