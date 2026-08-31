"use client";

import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import type { Job } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";
const labelClasses = "font-body text-sm font-medium text-navy";

export function JobApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const resumeFile = data.get("resume") as File | null;
    const supabase = createClient();

    try {
      let resumePath: string | null = null;

      if (resumeFile && resumeFile.size > 0) {
        const path = `${Date.now()}-${resumeFile.name}`.replace(/\s+/g, "-");
        const { error: uploadError } = await supabase.storage.from("resumes").upload(path, resumeFile);
        if (uploadError) throw uploadError;
        resumePath = path;
      }

      const { error } = await supabase.from("job_applications").insert({
        job_id: job.id,
        full_name: String(data.get("full_name") ?? ""),
        mobile: String(data.get("mobile") ?? ""),
        email: String(data.get("email") ?? ""),
        city: String(data.get("city") ?? ""),
        highest_qualification: String(data.get("qualification") ?? ""),
        total_experience: String(data.get("experience") ?? ""),
        resume_url: resumePath,
        additional_info: String(data.get("additional_info") ?? ""),
      });

      if (error) throw error;
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy/60 px-4 py-10">
      <div className="w-full max-w-lg bg-paper p-8">
        <div className="flex items-start justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-hub">
            Apply · {job.department ?? "General"}
          </p>
          <button onClick={onClose} aria-label="Close" className="focus-ring text-navy">
            <X size={22} />
          </button>
        </div>

        <h2 className="mt-2 font-display text-3xl font-bold text-navy">{job.title}</h2>

        {status === "done" ? (
          <p className="mt-8 text-slate">
            Thanks — your application has been received. Our team will be in touch if it's a fit.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <p className="text-sm text-slate">Share a few details and our team will be in touch.</p>

            <div>
              <label className={labelClasses} htmlFor="full_name">Full name</label>
              <input id="full_name" name="full_name" required className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="mobile">Mobile number</label>
              <input id="mobile" name="mobile" required className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="city">City</label>
              <input id="city" name="city" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="qualification">Highest qualification</label>
              <input id="qualification" name="qualification" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="experience">Total experience</label>
              <input id="experience" name="experience" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="resume">Resume / CV</label>
              <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses} htmlFor="additional_info">Additional information</label>
              <textarea id="additional_info" name="additional_info" rows={3} className={inputClasses} />
            </div>

            {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

            <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting…" : "Submit Application"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
