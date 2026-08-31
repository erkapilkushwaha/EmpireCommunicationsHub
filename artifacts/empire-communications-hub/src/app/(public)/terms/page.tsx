import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <Section>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy">Terms of Service</h1>
      <div className="prose prose-slate mt-8 max-w-2xl space-y-6 text-slate">
        <p>
          This website is operated by Empire Communications Hub, based in Chinhat, Lucknow.
          By using this website to submit an enquiry or job application, you confirm that the
          information you provide is accurate to the best of your knowledge.
        </p>
        <p>
          Service engagements with clients are governed by a separate agreement entered into
          directly with Empire Communications Hub, not by this website's terms alone.
        </p>
        <p>
          We may update this website's content and these terms from time to time. Continued use
          of the site after changes are posted means you accept the updated terms.
        </p>
        <p className="text-sm text-slate/70">
          This is a general-purpose starting point and should be reviewed by a legal professional
          before the site goes live.
        </p>
      </div>
    </Section>
  );
}
