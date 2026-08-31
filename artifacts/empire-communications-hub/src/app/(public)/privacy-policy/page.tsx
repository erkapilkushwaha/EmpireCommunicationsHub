import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy">Privacy Policy</h1>
      <div className="prose prose-slate mt-8 max-w-2xl space-y-6 text-slate">
        <p>
          Empire Communications Hub ("we", "us") collects the information you provide through
          our contact and career application forms — such as your name, phone number, email
          address, and any message or resume you submit — solely to respond to your enquiry or
          job application.
        </p>
        <p>
          We do not sell your personal information to third parties. Information submitted
          through this website is accessible only to authorized team members who need it to
          respond to you or process your application.
        </p>
        <p>
          You may contact us at{" "}
          <a href="mailto:kapilkushwaha047@gmail.com" className="text-hub underline">
            kapilkushwaha047@gmail.com
          </a>{" "}
          at any time to ask what information we hold about you or to request its deletion.
        </p>
        <p className="text-sm text-slate/70">
          This is a general-purpose policy and should be reviewed by a legal professional before
          the site goes live, to make sure it fully matches how the business actually operates.
        </p>
      </div>
    </Section>
  );
}
