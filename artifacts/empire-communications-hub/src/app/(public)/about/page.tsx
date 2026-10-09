import type { Metadata } from "next";

import {
  Section,
  Eyebrow,
} from "@/components/ui/Container";

import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Empire Communications Hub, our mission, vision and values.",
};

const values = [
  {
    title: "Clear Communication",
    detail:
      "We believe in simple, clear and respectful communication.",
  },
  {
    title: "Responsible Work",
    detail:
      "We aim to handle everyday work with care and responsibility.",
  },
  {
    title: "Learning and Growth",
    detail:
      "We encourage our team to learn and improve their skills.",
  },
  {
    title: "Customer Focus",
    detail:
      "We aim to understand customer needs and provide helpful support.",
  },
];

export default function AboutPage() {
  return (
    <Section className="bg-white text-navy">
      <div>
        <Eyebrow>About Us</Eyebrow>

        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">
          About Empire Communications Hub
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
          Empire Communications Hub is based in Lucknow and focuses
          on communication, customer support, sales support and
          business operations.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
          We aim to help businesses manage everyday work through
          clear communication and organised processes. We also
          value a workplace where people can learn and improve
          their skills.
        </p>
      </div>

      <div className="mt-10 grid gap-8 border-t border-navy/10 pt-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Our Mission
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate">
            To help businesses with clear communication, customer
            support and organised day-to-day work.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Our Vision
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate">
            To become a trusted business partner and a workplace
            where people can learn and grow.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-navy/10 pt-8">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Our Values
        </h2>

        <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-base font-semibold text-navy">
                {value.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate">
                {value.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 border-t border-navy/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Join Our Team
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate">
            Interested in working with us? Explore our career
            opportunities.
          </p>
        </div>

        <LinkButton href="/careers" size="lg">
          View Careers
        </LinkButton>
      </div>
    </Section>
  );
}
