import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading & Clean CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Connect With Us
            </div>
            
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Powering your business growth with{" "}
              <span className="text-blue-600">seamless customer engagement.</span>
            </h2>
            
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Whether you need dedicated telecalling, multichannel customer support, or structured 
              back-office operations, our operational teams are ready to scale with you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Cards matching Screenshot Theme */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                  <a
                    href="tel:+917398823011"
                    className="mt-1 block text-base font-semibold text-slate-900 transition-colors hover:text-blue-600"
                  >
                    +91 73988 23011
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Official Email</p>
                  <a
                    href="mailto:official@empirecommunicationshub.com"
                    className="mt-1 block break-all text-base font-semibold text-slate-900 transition-colors hover:text-blue-600"
                  >
                    official@empirecommunicationshub.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Operational Hub</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-slate-800">
                    D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
