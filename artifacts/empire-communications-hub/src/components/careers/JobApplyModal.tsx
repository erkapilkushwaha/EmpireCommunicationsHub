"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, X } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import type { Job } from "@/lib/types";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const allowedExtensions = new Set(["pdf", "doc", "docx"]);

const inputClasses =
  "focus-ring mt-2 w-full rounded-lg border border-navy/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/60";

const labelClasses = "block text-sm font-medium text-navy";

export function JobApplyModal({
  job,
  onClose,
}: {
  job: Job;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const submittingRef = useRef(false);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";

    return () => {
      if (dialog?.open) dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus?.isConnected) {
        previousFocus.focus();
      }
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const text = (name: string) =>
      String(data.get(name) ?? "").trim();

    const fullName = text("full_name");
    const mobile = text("mobile");
    const email = text("email");
    const city = text("city");
    const qualification = text("qualification");
    const experience = text("experience");

    const resumeValue = data.get("resume");
    const resumeFile =
      resumeValue instanceof File ? resumeValue : null;

    setErrorMessage("");

    if (
      !fullName ||
      !email ||
      !city ||
      !qualification ||
      !experience ||
      !/^[6-9]d{9}$/.test(mobile)
    ) {
      setStatus("error");
      setErrorMessage(
        "Please complete the required fields and enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (data.get("privacy_acknowledgement") !== "on") {
      setStatus("error");
      setErrorMessage("Please acknowledge the privacy notice.");
      return;
    }

    if (!resumeFile || resumeFile.size === 0) {
      setStatus("error");
      setErrorMessage("Please attach your resume.");
      return;
    }

    const extension =
      resumeFile.name.split(".").pop()?.toLowerCase() ?? "";

    if (!allowedExtensions.has(extension)) {
      setStatus("error");
      setErrorMessage("Upload a PDF, DOC or DOCX resume.");
      return;
    }

    if (resumeFile.size > MAX_RESUME_BYTES) {
      setStatus("error");
      setErrorMessage("Your resume must be 5 MB or smaller.");
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");

    const supabase = createClient();
    let uploadedPath: string | null = null;
    let saved = false;

    try {
      const path = `applications/${crypto.randomUUID()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(path, resumeFile, {
          upsert: false,
          cacheControl: "3600",
        });

      if (uploadError) {
        throw new Error("upload_failed");
      }

      uploadedPath = path;

      const { error: insertError } = await supabase
        .from("job_applications")
        .insert({
          job_id: job.id,
          full_name: fullName,
          mobile,
          email,
          city,
          highest_qualification: qualification,
          total_experience: experience,
          resume_url: uploadedPath,
          additional_info: text("additional_info"),
        });

      if (insertError) {
        throw new Error("application_failed");
      }

      saved = true;
      setStatus("done");
    } catch {
      if (uploadedPath && !saved) {
        try {
          const { error: cleanupError } = await supabase.storage
            .from("resumes")
            .remove([uploadedPath]);

          if (cleanupError) {
            console.warn("Resume cleanup needs administrator review.");
          }
        } catch {
          console.warn("Resume cleanup could not be completed.");
        }
      }

      setStatus("error");
      setErrorMessage(
        "We couldn't submit your application. Please try again or contact official@empirecommunicationshub.com.",
      );
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="application-title"
      aria-describedby="application-description"
      onCancel={(event) => {
        event.preventDefault();

        if (!submittingRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-navy/10 bg-white p-0 text-navy shadow-2xl backdrop:bg-navy/60"
    >
      <div className="border-b border-navy/10 bg-white px-6 py-5 md:px-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-hub">
              {job.department || "Careers"} · Application
            </p>

            <h2
              id="application-title"
              className="mt-2 font-display text-2xl font-bold text-navy"
            >
              {job.title}
            </h2>

            <p
              id="application-description"
              className="mt-2 text-sm leading-relaxed text-slate"
            >
              Share your details and resume. Fields marked * are required.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={status === "submitting"}
            aria-label="Close application form"
            className="focus-ring rounded-lg p-2 text-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      {status === "done" ? (
        <div
          role="status"
          aria-live="polite"
          className="px-6 py-10 text-center md:px-8"
        >
          <CheckCircle2
            size={42}
            className="mx-auto text-hub"
            aria-hidden="true"
          />

          <h3 className="mt-5 font-display text-2xl font-semibold">
            Application received.
          </h3>

          <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate">
            Thank you for applying for {job.title}. Our team will review
            your application and contact you if you are shortlisted.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="focus-ring mt-7 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white"
          >
            Back to opportunities
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-6 py-6 md:px-8"
        >
          <fieldset
            disabled={status === "submitting"}
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="full_name" className={labelClasses}>
                  Full name *
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  className={inputClasses}
                  placeholder="As shown on your official records"
                />
              </div>

              <div>
                <label htmlFor="mobile" className={labelClasses}>
                  Mobile number *
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a 10-digit Indian mobile number without +91."
                  className={inputClasses}
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="city" className={labelClasses}>
                  Current city *
                </label>
                <input
                  id="city"
                  name="city"
                  required
                  maxLength={100}
                  autoComplete="address-level2"
                  className={inputClasses}
                  placeholder="e.g. Lucknow"
                />
              </div>

              <div>
                <label htmlFor="qualification" className={labelClasses}>
                  Highest qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  required
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select qualification
                  </option>
                  <option value="High School">High School / 10th</option>
                  <option value="Intermediate">
                    Intermediate / 12th
                  </option>
                  <option value="Diploma">Diploma</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="experience" className={labelClasses}>
                  Total work experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="Less than 6 months">
                    Less than 6 months
                  </option>
                  <option value="6–12 months">6–12 months</option>
                  <option value="1–2 years">1–2 years</option>
                  <option value="2–3 years">2–3 years</option>
                  <option value="More than 3 years">
                    More than 3 years
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="resume" className={labelClasses}>
                Resume / CV *
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                aria-describedby="resume-help"
                className={`${inputClasses} file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-2 file:text-sm file:font-medium file:text-navy`}
              />
              <p
                id="resume-help"
                className="mt-2 text-xs leading-relaxed text-slate"
              >
                PDF, DOC or DOCX. Maximum 5 MB. Do not upload identity
                or bank documents.
              </p>
            </div>

            <div>
              <label htmlFor="additional_info" className={labelClasses}>
                Additional information
                <span className="ml-1 font-normal text-slate">
                  (optional)
                </span>
              </label>
              <textarea
                id="additional_info"
                name="additional_info"
                rows={4}
                maxLength={2000}
                className={inputClasses}
                placeholder="Share relevant skills, availability or details that may help us review your application."
              />
            </div>

            <div className="rounded-xl border border-navy/10 bg-white p-4">
              <p className="text-xs leading-relaxed text-slate">
                Empire Communications Hub will use the information
                you submit to review your application, communicate
                with you and manage the recruitment process.
                Submitting an application does not guarantee employment.
              </p>

              <label className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-slate">
                <input
                  type="checkbox"
                  name="privacy_acknowledgement"
                  required
                  className="focus-ring mt-1 h-4 w-4 shrink-0 accent-navy"
                />
                <span>
                  I confirm that my information is accurate and have
                  read the{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hub underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hub underline"
                  >
                    Terms of Service
                  </Link>
                  . *
                </span>
              </label>
            </div>
          </fieldset>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />
                Submitting application…
              </>
            ) : (
              "Submit application"
            )}
          </button>
        </form>
      )}
    </dialog>
  );
        }
