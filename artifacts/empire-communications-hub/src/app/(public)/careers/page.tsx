import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { Section, Eyebrow } from "@/components/ui/Container";
import { CareersList } from "@/components/careers/CareersList";
import type { Job } from "@/lib/types";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at Empire Communications Hub in Lucknow. Find opportunities in sales, communication and business operations.",
};

export const revalidate = 30;

const process = [
  {
    step: "01",
    title: "Explore a role",
    description:
      "Review the responsibilities, location and experience requirements.",
  },
  {
    step: "02",
    title: "Submit your application",
    description:
      "Share your contact details, relevant experience and resume.",
  },
  {
    step: "03",
    title: "Application review",
    description:
      "If your profile matches the role, our team will contact you about the next steps.",
  },
  {
    step: "04",
    title: "Interview and next steps",
    description:
      "Discuss the opportunity with us. Selected candidates receive offer and joining information separately.",
  },
];

const faqs = [
  {
    question: "Can freshers apply?",
    answer:
      "Yes, where the role’s listed experience requirements allow it. Please review the individual job description before applying.",
  },
  {
    question: "Where will I work?",
    answer:
      "The location and work arrangement are listed on each job card. Please confirm any specific reporting requirements during the recruitment process.",
  },
  {
    question: "Which documents should I submit initially?",
    answer:
      "Submit your resume and the information requested in the application form. Do not upload Aadhaar, PAN, bank documents or other unnecessary sensitive records at this stage.",
  },
  {
    question: "Does submitting an application guarantee an interview?",
    answer:
      "No. Applications are reviewed against the role requirements and current business needs. Shortlisted applicants will be contacted.",
  },
];

export default async function CareersPage() {
  let jobs: Job[] = [];
  let loadError = false;

  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("status", "open")
      .order("created_at", { ascending: false });

    if (error) {
      loadError = true;
      console.error("Careers jobs query failed:", error.code);
    } else {
      jobs = (data as Job[] | null) ?? [];
    }
  } catch {
    loadError = true;
    console.error("Careers page could not load vacancies.");
  }

  return (
    <main className="bg-white">
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Careers at Empire</Eyebrow>

            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
              Your next chapter
              <br />
              starts with a conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Explore opportunities at Empire Communications Hub.
              Bring your communication skills, curiosity and commitment
              to work in sales and business operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate">
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} aria-hidden="true" />
                Lucknow, Uttar Pradesh
              </span>

              <span className="inline-flex items-center gap-2">
                <Briefcase size={17} aria-hidden="true" />
                Roles for different experience levels
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#open-roles"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore open roles
                <ArrowDown size={17} aria-hidden="true" />
              </a>

              <a
                href="#hiring-process"
                className="focus-ring inline-flex items-center rounded-lg border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/50"
              >
                How hiring works
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
            <MessageSquare
              size={30}
              className="text-hub"
              aria-hidden="true"
            />

            <h2 className="mt-5 font-display text-2xl font-semibold text-navy">
              Clear communication.
              <br />
              Responsible work.
            </h2>

            <p className="mt-4 leading-relaxed text-slate">
              We look for people who communicate professionally,
              take ownership of their responsibilities and are ready
              to learn.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "A professional approach to customer conversations",
                "Accuracy and care in day-to-day work",
                "Respect for colleagues and customer information",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-hub"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section>
        <section id="open-roles" className="scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Opportunities</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy">
                Find your role.
              </h2>
              <p className="mt-3 max-w-2xl text-slate">
                Review the role details and apply for the opportunity
                that matches your skills and interests.
              </p>
            </div>

            {!loadError && (
              <p className="rounded-full border border-navy/10 px-4 py-2 text-sm text-navy">
                {jobs.length} open {jobs.length === 1 ? "role" : "roles"}
              </p>
            )}
          </div>

          <div className="mt-8">
            {loadError ? (
              <div
                role="status"
                className="rounded-xl border border-navy/15 bg-white p-8"
              >
                <h3 className="font-semibold text-navy">
                  We couldn&apos;t load vacancies right now.
                </h3>
                <p className="mt-2 text-slate">
                  Please refresh this page or contact{" "}
                  <a
                    href="mailto:official@empirecommunicationshub.com"
                    className="break-words text-hub underline"
                  >
                    official@empirecommunicationshub.com
                  </a>{" "}
                  for recruitment enquiries.
                </p>
              </div>
            ) : (
              <CareersList jobs={jobs} />
            )}
          </div>
        </section>
      </Section>

      <Section>
        <section
          id="hiring-process"
          className="scroll-mt-24 border-t border-navy/10 pt-10"
        >
          <Eyebrow>The process</Eyebrow>

          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            A straightforward path to applying.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-navy/10 bg-white p-6"
              >
                <span className="font-mono text-sm text-hub">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Section>

      <Section>
        <section className="grid gap-8 border-t border-navy/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Before you apply</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              A few useful answers.
            </h2>
            <p className="mt-4 text-slate">
              Understand the basics before sharing your application.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-navy/10 bg-white p-5"
              >
                <summary className="focus-ring cursor-pointer font-semibold text-navy">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-navy/10 bg-white p-6">
          <div>
            <h3 className="font-semibold text-navy">
              Questions about an application?
            </h3>
            <p className="mt-2 text-sm text-slate">
              Write to our official company email for assistance.
            </p>
          </div>

          <a
            href="mailto:official@empirecommunicationshub.com"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-hub"
          >
            Contact our team
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Link
            href="/privacy-policy"
            className="focus-ring text-hub underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="focus-ring text-hub underline underline-offset-4"
          >
            Terms of Service
          </Link>
        </div>
      </Section>
    </main>
  );
}
