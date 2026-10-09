import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  ClipboardCheck,
  MessageSquare,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  Container,
  Eyebrow,
} from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Empire Communications Hub and our approach to communication, customer engagement, sales support and business operations.",
};

type Value = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const values: Value[] = [
  {
    title: "Professionalism",
    detail:
      "We aim to represent each client’s business with clear communication, responsible conduct and attention to detail.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    detail:
      "Clear expectations and agreed reporting help clients understand progress, pending work and the next steps.",
    icon: ClipboardCheck,
  },
  {
    title: "Employee development",
    detail:
      "We value role-focused learning, constructive feedback and measurable goals that help people strengthen their skills.",
    icon: Users,
  },
  {
    title: "Customer experience",
    detail:
      "We treat each customer conversation as part of the client’s brand experience—not simply as a task to complete.",
    icon: Target,
  },
];

const focusAreas = [
  {
    title: "Customer communication",
    detail: "Conversations, enquiries and follow-ups.",
    icon: MessageSquare,
  },
  {
    title: "Sales support",
    detail: "Business outreach and lead engagement.",
    icon: Briefcase,
  },
  {
    title: "Business operations",
    detail: "Back-office tasks and process coordination.",
    icon: Settings2,
  },
];

const primaryLinkClasses =
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90";

const textLinkClasses =
  "focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-hub underline-offset-4 transition hover:underline";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-navy">
      {/* Introduction */}
      <section
        aria-labelledby="about-title"
        className="py-12 md:py-16 lg:py-20"
      >
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>About Empire</Eyebrow>

              <h1
                id="about-title"
                className="max-w-3xl font-display text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl"
              >
                Built around people.
                <br />
                <span className="text-hub">
                  Guided by process.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
                Empire Communications Hub focuses on communication,
                customer engagement, sales support and business
                operations.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
                We bring a structured approach to customer-facing
                work and the everyday processes behind it—with an
                emphasis on clear responsibilities, professional
                communication and practical coordination.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/services"
                  className={primaryLinkClasses}
                >
                  Explore our services
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className={textLinkClasses}
                >
                  Talk to our team
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Open editorial panel — no card */}
            <aside className="border-l-2 border-hub pl-5 md:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hub">
                Our perspective
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy">
                Every conversation reflects the business behind it.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate">
                That is why we place importance on how people
                communicate, how work is organised and how
                responsibilities are understood.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* Company focus */}
      <section
        aria-labelledby="about-focus-title"
        className="border-t border-navy/10 py-10 md:py-12"
      >
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <Eyebrow>Our focus</Eyebrow>

              <h2
                id="about-focus-title"
                className="font-display text-2xl font-bold text-navy md:text-3xl"
              >
                Connecting conversations and operations.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate">
              Specific services and delivery arrangements are
              discussed against each client’s requirements.
            </p>
          </div>

          <ul className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-3">
            {focusAreas.map(({ title, detail, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-3 border-t border-navy/10 pt-5"
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-hub"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Values */}
      <section
        aria-labelledby="about-values-title"
        className="border-t border-navy/10 py-12 md:py-16"
      >
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-12">
            <div>
              <Eyebrow>What matters to us</Eyebrow>

              <h2
                id="about-values-title"
                className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-4xl"
              >
                Clear principles.
                <br />
                Responsible work.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-slate">
              These values describe the standards we aim to bring
              to our client relationships, team development and
              customer interactions.
            </p>
          </div>

          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:mt-10 lg:gap-x-16">
            {values.map(
              ({ title, detail, icon: Icon }, index) => (
                <li
                  key={title}
                  className="border-t border-navy/10 py-7"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      className="mt-1 shrink-0 text-hub"
                      aria-hidden="true"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-navy">
                          {title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="shrink-0 font-mono text-xs text-slate/60"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate">
                        {detail}
                      </p>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </section>

      {/* Careers */}
      <section
        aria-labelledby="about-careers-title"
        className="border-t border-navy/10 py-12 md:py-16"
      >
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <Eyebrow>Careers at Empire</Eyebrow>

              <h2
                id="about-careers-title"
                className="max-w-2xl font-display text-3xl font-bold leading-tight text-navy md:text-4xl"
              >
                Bring your ambition.
                <br />
                <span className="text-hub">
                  Explore your next opportunity.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
                Interested in communication, sales or business
                operations? Explore current opportunities and
                learn about the application process.
              </p>
            </div>

            <Link
              href="/careers"
              className={`${primaryLinkClasses} justify-self-start`}
            >
              Explore careers
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Business enquiry */}
      <section
        aria-labelledby="about-contact-title"
        className="border-t border-navy/10 py-8 md:py-10"
      >
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <h2
                id="about-contact-title"
                className="font-display text-xl font-semibold text-navy"
              >
                Let&apos;s understand your requirements.
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate">
                Share the work you need support with and discuss
                the next steps with our team.
              </p>
            </div>

            <Link
              href="/contact"
              className={`${textLinkClasses} self-start md:shrink-0`}
            >
              Discuss your requirements
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
