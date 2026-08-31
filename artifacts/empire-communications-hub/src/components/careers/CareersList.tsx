"use client";

import { useState } from "react";
import { JobCard } from "./JobCard";
import { JobApplyModal } from "./JobApplyModal";
import type { Job } from "@/lib/types";

export function CareersList({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  if (jobs.length === 0) {
    return (
      <div className="border border-navy/10 bg-white p-10 text-center">
        <p className="text-slate">
          No open roles right now — check back soon, or send your resume to{" "}
          <a href="mailto:kapilkushwaha047@gmail.com" className="text-hub underline">
            kapilkushwaha047@gmail.com
          </a>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={() => setSelectedJob(job)} />
        ))}
      </div>
      {selectedJob && <JobApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </>
  );
}
