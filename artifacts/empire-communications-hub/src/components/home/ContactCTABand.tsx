import { Phone, Mail, MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Container";

export function ContactCTABand() {
  return (
    <div className="grid gap-10 border-t border-navy/10 pt-16 md:grid-cols-2 md:items-center">
      <div>
        <Eyebrow>Get In Touch</Eyebrow>
        <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
          Tell us what you need handled.
        </h2>
        <p className="mt-4 max-w-md text-slate">
          Share a few details about your business and we'll get back to you with how we can help.
        </p>
        <LinkButton href="/contact" size="lg" className="mt-6">Get a Quote</LinkButton>
      </div>

      <div className="space-y-4 border border-navy/10 bg-white p-6">
        <a href="tel:+919569079118" className="flex items-center gap-3 text-navy hover:text-hub focus-ring">
          <Phone size={18} className="text-hub" /> +91 95690 79118
        </a>
        <a href="mailto:kapilkushwaha047@gmail.com" className="flex items-center gap-3 text-navy hover:text-hub focus-ring break-all">
          <Mail size={18} className="text-hub" /> kapilkushwaha047@gmail.com
        </a>
        <p className="flex items-center gap-3 text-navy">
          <MapPin size={18} className="text-hub" /> Chinhat, Lucknow, Uttar Pradesh
        </p>
      </div>
    </div>
  );
}
