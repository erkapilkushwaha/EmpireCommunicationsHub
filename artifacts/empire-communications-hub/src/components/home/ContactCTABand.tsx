import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-blue-600">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Powering your business growth with{" "}
            <span className="text-blue-600">seamless customer engagement.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We handle your telecalling, support your customers, and run your daily business operations with dedicated teams and reliable execution.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Partner With Us
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Explore Services
            </Link>
            <Link
              href="/contact#enquiry"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Send Enquiry
            </Link>
          </div>
        </div>

        {/* Contact Details Boxes */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Phone Box */}
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Phone size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
            <a
              href="tel:+917398823011"
              className="mt-1 block text-base font-bold text-slate-900 hover:text-blue-600"
            >
              +91 73988 23011
            </a>
            <p className="mt-1 text-xs text-slate-500">Mon - Sat: 9:00 AM – 8:00 PM</p>
          </div>

          {/* Email Box */}
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Mail size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Official Email</p>
            <a
              href="mailto:official@empirecommunicationshub.com"
              className="mt-1 block break-all text-base font-bold text-slate-900 hover:text-blue-600"
            >
              official@empirecommunicationshub.com
            </a>
            <p className="mt-1 text-xs text-slate-500">Direct response from operations</p>
          </div>

          {/* Office Address Box */}
          <div className="rounded-xl border border-slate-200 p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <MapPin size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Head Office</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              D50, Vibhuti Khand, Gomti Nagar
            </p>
            <p className="text-xs text-slate-500">Lucknow, Uttar Pradesh - 226010</p>
          </div>

        </div>

      </div>
    </section>
  );
}
