import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  GraduationCap,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "@/components/ui/Container";

type WorkingPrinciple = {
  title: string;
  detail: string;
  highlight: string;
  icon: LucideIcon;
};

const principles: WorkingPrinciple[] = [
  {
    title: "Reliable execution",
    detail:
      "Clear responsibilities and process discipline help keep customer-facing tasks organised and follow-ups on track.",
    highlight: "Ownership & consistency",
    icon: ShieldCheck,
  },
  {
    title: "Role-focused preparation",
    detail:
      "Communication standards and process guidance help team members understand the work before representing your business.",
    highlight: "Communication & readiness",
    icon: GraduationCap,
  },
  {
    title: "Clear goals",
    detail:
      "Defined expectations give teams a practical direction and create a basis for reviewing work and identifying improvements.",
    highlight: "Focus & improvement",
    icon: Target,
  },
  {
    title: "Useful reporting",
    detail:
      "Agreed reporting formats help you review completed work, pending items and next steps without unnecessary complexity.",
    highlight: "Visibility & accountability",
    icon: ClipboardCheck,
  },
];

export function WhyEmpirePanel() {
  return (
    <section
      aria-labelledby="why-empire-title"
      className="overflow-hidden rounded-2xl border border-navy/10 bg-white"
    >
      <div className="p-6 sm:p-8 lg:p-12">
        {/* Introduction */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
          <div>
            <Eyebrow>Why Empire</Eyebrow>

            <h2
              id="why-empire-title"
              className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-navy md:text-4xl"
            >
              Your customers matter.
              <br />
              <span className="text-hub">
                So does how we support them.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-slate">
            Our approach brings together clear communication,
            responsible execution and practical reporting—so your
            business has a clear way to coordinate everyday support.
          </p>
        </div>

        {/* Working principles */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
          {principles.map(
            ({ title, detail, highlight, icon: Icon }, index) => (
              <li
                key={title}
                className="rounded-xl border border-navy/10 bg-white p-5 md:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-hub/[0.08] text-hub">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className="font-mono text-xs tracking-wider text-slate/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {detail}
                </p>

                <p className="mt-5 border-t border-navy/10 pt-4 text-xs font-medium text-hub">
                  {highlight}
                </p>
              </li>
            ),
          )}
        </ul>

        {/* Practical closing message */}
        <div className="mt-8 flex flex-col gap-5 border-t border-navy/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <ListChecks
              size={20}
              className="mt-0.5 shrink-0 text-hub"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm font-semibold text-navy">
                Start with a clear scope.
              </p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate">
                Discuss your requirements, responsibilities and
                reporting expectations before getting started.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 md:self-auto"
          >
            <MessagesSquare size={17} aria-hidden="true" />
            Discuss your requirements
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
