import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="w-full bg-white">
      
      {/* 1. TOP SPLIT: Clean White Surface + Right Image */}
      <div className="grid w-full lg:grid-cols-2">
        
        {/* Left Side: Direct Contact Details on Pure White */}
        <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-12 md:px-16 lg:px-20 lg:py-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get in touch with us
          </h2>

          <div className="mt-8 space-y-5 border-t border-slate-200 pt-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
              <a
                href="tel:+917398823011"
                className="mt-1 inline-flex items-center gap-2 text-base font-bold text-slate-900 transition-colors hover:text-blue-600"
              >
                <Phone size={16} className="text-blue-600" />
                +91 73988 23011
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
              <a
                href="mailto:official@empirecommunicationshub.com"
                className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-blue-600 break-all"
              >
                <Mail size={16} className="text-blue-600" />
                official@empirecommunicationshub.com
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Visit Our Office</p>
              <div className="mt-1 flex items-start gap-2 text-xs font-semibold text-slate-800">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <span>D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
              <div className="mt-1 flex items-center gap-2 text-xs font-medium text-slate-700">
                <Clock size={16} className="text-blue-600" />
                <span>Monday – Saturday: 9:00 AM to 8:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="relative min-h-[340px] w-full sm:min-h-[420px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
            alt="Customer Support and Telecalling Operations"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* 2. BOTTOM SECTION: Direct Text on Pure White Background (No Cards / No Boxes) */}
      <div className="w-full bg-white px-6 py-14 sm:px-12 md:px-16 lg:px-20 lg:py-18">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Contact us
        </h3>

        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Sales inquiries */}
          <div>
            <h4 className="text-base font-bold text-slate-900">Sales inquiries</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Looking to hire dedicated callers or scale your business outreach? Let's connect.
            </p>
            <Link 
              href="/services" 
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Explore outbound services <ArrowRight size={13} />
            </Link>
          </div>

          {/* Customer support */}
          <div>
            <h4 className="text-base font-bold text-slate-900">Customer support</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Need help with ongoing processes or daily customer care services? We are here for you.
            </p>
            <a 
              href="mailto:official@empirecommunicationshub.com" 
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800 break-all"
            >
              official@empirecommunicationshub.com <ArrowRight size={13} />
            </a>
          </div>

          {/* Partner requests */}
          <div>
            <h4 className="text-base font-bold text-slate-900">Partner requests</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Want to outsource your daily business operations or build a long-term operational partnership?
            </p>
            <Link 
              href="/departments" 
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              View department network <ArrowRight size={13} />
            </Link>
          </div>

          {/* General inquiries */}
          <div>
            <h4 className="text-base font-bold text-slate-900">General inquiries</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Have general questions about our services or company policies? Contact our main desk.
            </p>
            <a 
              href="tel:+917398823011" 
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Call +91 73988 23011 <ArrowRight size={13} />
            </a>
          </div>

          {/* Career opportunities */}
          <div>
            <h4 className="text-base font-bold text-slate-900">Career opportunities</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Looking for a job in telecalling, customer support, or operations? Explore open roles with us.
            </p>
            <Link 
              href="/careers" 
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              See open roles <ArrowRight size={13} />
            </Link>
          </div>

          {/* Head Office Location */}
          <div>
            <h4 className="text-base font-bold text-slate-900">Head Office Location</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010.
            </p>
            <span className="mt-2 block text-xs font-medium text-slate-500">
              Walk-in timings: 10:00 AM – 5:00 PM
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
