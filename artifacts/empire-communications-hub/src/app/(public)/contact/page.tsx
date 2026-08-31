import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Empire Communications Hub for communication, customer engagement and sales support services.",
};

export default function ContactPage() {
  return (
    <Section>
      <Eyebrow>Contact</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
        Let's talk about what you need handled.
      </h1>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <a href="tel:+919569079118" className="flex items-center gap-3 text-lg text-navy hover:text-hub focus-ring">
            <Phone size={20} className="text-hub" /> +91 95690 79118
          </a>
          <a href="mailto:kapilkushwaha047@gmail.com" className="flex items-center gap-3 text-lg text-navy hover:text-hub focus-ring break-all">
            <Mail size={20} className="text-hub" /> kapilkushwaha047@gmail.com
          </a>
          <p className="flex items-center gap-3 text-lg text-navy">
            <MapPin size={20} className="text-hub" /> Chinhat, Lucknow, Uttar Pradesh
          </p>
        </div>

        <EnquiryForm />
      </div>
    </Section>
  );
}
