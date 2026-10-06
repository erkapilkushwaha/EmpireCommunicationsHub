import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Headphones, Zap } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Strategic Pitch & Badges */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Next-Gen Operational Infrastructure
            </div>
            
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ready to scale your outreach with{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                zero operational friction?
              </span>
            </h2>
            
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              Stop letting missed calls and fragmented workflows slow your pipeline. 
              Deploy dedicated voice specialists, proactive sales outreach, and 24/7 customer 
              support engineered to convert and retain.
            </p>

            {/* Value Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-200/80 py-5 sm:grid-cols-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="shrink-0 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Strict SLA Quality</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Headphones size={18} className="shrink-0 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Omnichannel Desk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap size={18} className="shrink-0 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Fast Team Ramp-up</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Initiate Onboarding
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                View Operational Specs
              </Link>
            </div>
          </div>

          {/* Right Column: Corporate Direct-Line Cards */}
          <div className="space-y-4 lg:col-span-5">
            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Operations Desk</span>
                  <a
                    href="tel:+917398823011"
                    className="mt-1 block text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                  >
                    +91 73988 23011
                  </a>
                  <p className="mt-0.5 text-xs text-slate-500">Mon - Sat | 9:30 AM to 6:30 PM IST</p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Enterprise Inquiries</span>
                  <a
                    href="mailto:official@empirecommunicationshub.com"
                    className="mt-1 block break-all text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                  >
                    official@empirecommunicationshub.com
                  </a>
                  <p className="mt-0.5 text-xs text-slate-500">Guaranteed response within 4 operational hours</p>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Central Operations Hub</span>
                  <p className="mt-1 text-sm font-semibold leading-snug text-slate-800">
                    D50, Vibhuti Khand, Gomti Nagar
                  </p>
                  <p className="text-xs text-slate-500">Lucknow, Uttar Pradesh - 226010</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
