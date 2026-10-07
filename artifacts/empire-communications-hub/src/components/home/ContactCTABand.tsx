import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="w-full border-t border-slate-200 bg-white">
      {/* 1. TOP SPLIT SECTION: Left Details + Right Telecalling Image */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Content, Buttons & Contact Links */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Powering your business growth with{" "}
              <span className="text-blue-600">seamless customer engagement.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We handle your telecalling, support your customers, and run your daily business operations with dedicated teams and reliable execution.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
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
            </div>

            {/* Direct Contact Links */}
            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                <a
                  href="tel:+917398823011"
                  className="mt-0.5 flex items-center gap-2 text-base font-bold text-slate-900 transition-colors hover:text-blue-600"
                >
                  <Phone size={17} className="text-blue-600" />
                  +91 73988 23011
                </a>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                <a
                  href="mailto:official@empirecommunicationshub.com"
                  className="mt-0.5 flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-blue-600 break-all"
                >
                  <Mail size={17} className="text-blue-600" />
                  official@empirecommunicationshub.com
                </a>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Visit Our Office</p>
                <div className="mt-0.5 flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
                <div className="mt-0.5 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Clock size={17} className="text-blue-600" />
                  <span>Monday – Saturday: 9:00 AM to 8:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Telecalling Floor Photo */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md sm:h-96 lg:col-span-6 lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Telecalling Operations Team at Empire Communications Hub"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* 2. BOTTOM DEPARTMENTAL NAVIGATION SECTION */}
      <div className="border-t border-slate-200 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How can we help you?
          </h3>
          
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">Sales inquiries</h4>
              <p className="mt-1 text-xs text-slate-600">
                Looking to hire dedicated callers or scale your business outreach? Let's connect.
              </p>
              <Link href="/services" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                Explore outbound services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">Customer support</h4>
              <p className="mt-1 text-xs text-slate-600">
                Need help with ongoing processes or daily customer care services? We are here for you.
              </p>
              <a href="mailto:official@empirecommunicationshub.com" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                official@empirecommunicationshub.com <ArrowRight size={14} />
              </a>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">Partner requests</h4>
              <p className="mt-1 text-xs text-slate-600">
                Want to outsource your daily business operations or build a long-term operational partnership?
              </p>
              <Link href="/departments" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                View department network <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">General inquiries</h4>
              <p className="mt-1 text-xs text-slate-600">
                Have general questions about our services or company policies? Contact our main desk.
              </p>
              <a href="tel:+917398823011" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                Call +91 73988 23011 <ArrowRight size={14} />
              </a>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">Career opportunities</h4>
              <p className="mt-1 text-xs text-slate-600">
                Looking for a job in telecalling, customer support, or operations? Explore open roles with us.
              </p>
              <Link href="/careers" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                See open roles <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-lg font-bold text-slate-900">Head Office Location</h4>
              <p className="mt-1 text-xs text-slate-600">
                D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010.
              </p>
              <span className="mt-3 block text-sm font-semibold text-slate-700">
                Walk-in timings: 10:00 AM – 5:00 PM
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
