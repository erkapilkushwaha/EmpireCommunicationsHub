"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { JobCard } from "./JobCard";
import { JobApplyModal } from "./JobApplyModal";
import type { Job } from "@/lib/types";

export function CareersList({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("all");

  const departments = useMemo(
    () =>
      Array.from(
        new Set(
          jobs
            .map((job) => job.department?.trim())
            .filter((value): value is string => Boolean(value)),
        ),
      ).sort(),
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const search = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesDepartment =
        department === "all" ||
        job.department?.trim() === department;

      const searchableContent = [
        job.title,
        job.department,
        job.location,
        job.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesDepartment &&
        (!search || searchableContent.includes(search))
      );
    });
  }, [jobs, query, department]);

  if (jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center md:p-12">
        <h3 className="font-display text-xl font-semibold text-navy">
          No open roles at the moment.
        </h3>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate">
          Please check back for new opportunities. For recruitment
          enquiries, contact{" "}
          <a
            href="mailto:official@empirecommunicationshub.com"
            className="break-words text-hub underline"
          >
            official@empirecommunicationshub.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 grid gap-4 md:grid-cols-[1fr_240px]">
        <div>
          <label
            htmlFor="job-search"
            className="mb-2 block text-sm font-medium text-navy"
          >
            Search opportunities
          </label>
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-3.5 text-slate"
              aria-hidden="true"
            />
            <input
              id="job-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search role, location or keyword"
              className="focus-ring w-full rounded-lg border border-navy/20 bg-white py-3 pl-11 pr-4 text-sm text-navy"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="job-department"
            className="mb-2 block text-sm font-medium text-navy"
          >
            Department
          </label>
          <select
            id="job-department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="focus-ring w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-sm text-navy"
          >
            <option value="all">All departments</option>
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mb-4 text-sm text-slate"
      >
        Showing {filteredJobs.length} of {jobs.length}{" "}
        {jobs.length === 1 ? "role" : "roles"}
      </p>

      {filteredJobs.length === 0 ? (
        <div className="rounded-xl border border-navy/10 bg-white p-8 text-center">
          <h3 className="font-semibold text-navy">
            No roles match your search.
          </h3>
          <p className="mt-2 text-sm text-slate">
            Try a different keyword or clear the filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setDepartment("all");
            }}
            className="focus-ring mt-4 text-sm font-semibold text-hub underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}
        </div>
      )}

      {selectedJob && (
        <JobApplyModal
          key={selectedJob.id}
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
          }
