import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Empire Communications Hub is a professional organization built around structured processes and employee growth.",
};

const values = [
  { title: "Professionalism", detail: "Every client interaction is handled the way we'd want our own business represented." },
  { title: "Transparency", detail: "Clear status and reporting, so clients always know where things stand." },
  { title: "Employee Growth", detail: "Structured skill-building and measurable goals for every team member." },
  { title: "Customer Experience", detail: "Every conversation is treated as a reflection of the client's brand, not just a task." },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pb-10">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
          A team built on structure and communication.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate">
          Empire Communications Hub is a professional organization focused on communication,
          customer engagement, sales support and business operations. We combine disciplined
          process with a trained, growth-oriented team, so businesses can hand off client-facing
          work with confidence.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="border border-navy/10 bg-white p-6">
              <h2 className="font-display text-xl font-semibold text-navy">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{value.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Eyebrow className="text-cyan">Join The Team</Eyebrow>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              We're building this team deliberately — one role at a time.
            </h2>
          </div>
          <LinkButton href="/careers" variant="dark" size="lg">View Careers</LinkButton>
        </div>
      </Section>
    </>
  );
}
