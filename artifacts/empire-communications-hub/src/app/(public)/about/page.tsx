import type { Metadata } from "next";
import Link from "next/link";

import {
  Container,
  Eyebrow,
} from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Empire Communications Hub, our mission, vision and values in communication, customer support and business operations.",
};

const values = [
  {
    title: "Professionalism",
    detail:
      "We believe in clear communication, responsible work and respectful interactions.",
  },
  {
    title: "Transparency",
    detail:
      "We value clear expectations and honest communication with clients and team members.",
  },
  {
    title: "Learning & Growth",
    detail:
      "We encourage people to learn, improve their skills and take responsibility for their work.",
  },
  {
    title: "Customer Focus",
    detail:
      "We aim to understand customer needs and handle every conversation with care.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-navy">
      {/* About */}
      <section
        aria-labelledby="about-title"
        className="pb-10 pt-12 md:pb-12 md:pt-16"
      >
        <Container>
          <Eyebrow>About Us</Eyebrow>

          <h1
            id="about-title"
            className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl"
          >
            Get to know Empire Communications Hub.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate md:text-lg">
            Empire Communications Hub is a Lucknow-based organisation
            focused on communication, customer engagement, sales
            support and business operations.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
            We aim to help businesses manage everyday work through
            clear communication and organised processes. We also
            value a supportive work environment where people can
            learn and improve their skills.
          </p>
        </Container>
      </section>

      {/* Mission and vision */}
      <section
        aria-label="Our mission and vision"
        className="pb-10 md:pb-12"
      >
        <Container>
          <div className="grid gap-8 border-t border-navy/10 pt-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold">
                Our Mission
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                To support businesses with clear communication,
                responsible customer service and organised
                day-to-day operations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibo
