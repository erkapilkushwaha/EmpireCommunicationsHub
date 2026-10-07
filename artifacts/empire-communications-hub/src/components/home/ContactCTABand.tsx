import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactCTABand() {
  return (
    <section className="w-full border-t border-slate-200 bg-white">
      
      {/* 1. TOP SPLIT: 100% Edge-to-Edge Flush Layout */}
      <div className="grid w-full lg:grid-cols-2">
        
        {/* Left Column: Direct Contact Info */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20 bg-slate-50/70">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Contact
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get in touch with us
          </h2>

          <div className="mt-8 space-y-4 border-t border-slate-200/80 pt-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
              <a
                href="tel:+917398823011"
                className="mt-0.5 inline-flex items-center gap-2 text-base font-bold text-slate-900 transition-colors hover:text-blue-600"
              >
                <Phone size={16} className="text-blue-600" />
                +91 73988 23011
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
              <a
                href="mailto:official@empirecommunicationshub.com"
                className="mt-0.5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-blue-600 break-all"
              >
                <Mail size={16} className="text-blue-600" />
                official@empirecommunicationshub.com
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Visit Our Office</p>
              <div className="mt-0.5 flex items-start gap-2 text-xs font-semibold text-slate-800">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <span>D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
              <div className="mt-0.5 flex items-center gap-2 text-xs font-medium text-slate-700">
                <Clock size={16} className="text-blue-600" />
                <span>Monday – Saturday: 9:00 AM to 8:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Fresh Telecalling / Customer Service Photo */}
        <div className="relative min-h-[320px] w-full sm:min-h-[400px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Customer Support and Telecalling Operations"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* 2. BOTTOM LINKS: Exact Reference Layout */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-16">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">
          Contact us
        </h3>

        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Sales inquiries</h4>
            <Link 
              href="/services" 
              className="mt-2 inline-block text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Explore telecalling & outbound services
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Customer support</h4>
            <a 
              href="mailto:official@empirecommunicationshub.com" 
              className="mt-2 inline-block text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              official@empirecommunicationshub.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Partner requests</h4>
            <Link 
              href="/departments" 
              className="mt-2 inline-block text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              View department network
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">General inquiries</h4>
            <a 
              href="tel:+917398823011" 
              className="mt-2 inline-block text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              Call +91 73988 23011
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Career opportunities</h4>
            <Link 
              href="/careers" 
              className="mt-2 inline-block text-sm font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800"
            >
              See open roles
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">Head Office</h4>
            <p className="mt-2 text-sm text-slate-600">
              D50, Vibhuti Khand, Gomti Nagar, Lucknow - 226010
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
