"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    const { error } = await supabase.from("enquiries").insert({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please connect with our team directly via phone or email.");
      return;
    }
    setStatus("done");
  }

  return (
    <div className="w-full bg-white">
      
      {/* 1. TOP HERO SECTION: Details Left + Image Right */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Get in touch with our operations team.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For more information about deploying dedicated telecalling callers, 
              customer care support, or end-to-end back-office execution, call our desk 
              or submit the requirement form below.
            </p>

            <div className="mt-8 space-y-5 border-t border-slate-200 pt-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Call Line</p>
                <a href="tel:+917398823011" className="mt-1 flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-blue-600">
                  <Phone size={18} className="text-blue-600" />
                  +91 73988 23011
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Email</p>
                <a href="mailto:official@empirecommunicationshub.com" className="mt-1 flex items-center gap-2 text-base font-bold text-slate-900 hover:text-blue-600 break-all">
                  <Mail size={18} className="text-blue-600" />
                  official@empirecommunicationshub.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Operational Hub</p>
                <div className="mt-1 flex items-start gap-2 text-sm font-medium text-slate-800">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Working Hours</p>
                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Clock size={18} className="text-blue-600" />
                  <span>Monday – Saturday: 9:00 AM to 8:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Telecalling Operations Floor Image */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:h-96 lg:col-span-6 lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Empire Communications Hub BPO Team"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="rounded bg-blue-600 px-2.5 py-1 text-xs font-bold tracking-wide uppercase">
                Active BPO Execution
              </span>
              <p className="mt-2 text-base font-bold">Empire Communications Hub — Lucknow Floor</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MIDDLE FORM SECTION: Edge-to-Edge Gray Surface */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Requirement & Inquiry Form
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Submit your project scope and operational specifications.
            </p>
          </div>

          {status === "done" ? (
            <div className="mt-8 rounded-xl border border-green-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Enquiry Submitted Successfully</h3>
              <p className="mt-1 text-sm text-slate-600">
                Our operations team will evaluate your requirement and reach out within 4 business hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="company">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      placeholder="Company name"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="message">
                      Your Message / Requirement *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Describe target calling volume, process requirements..."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600">{errorMessage}</p>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Requirement
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. BOTTOM DEPARTMENTAL NAVIGATION (Sample 2 Style) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Departmental Contacts
        </h3>
        
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">Sales inquiries</h4>
            <p className="mt-1 text-xs text-slate-600">Discuss new campaigns, telecalling capacity, and pricing.</p>
            <Link href="/services" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              Explore outbound services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">Customer support</h4>
            <p className="mt-1 text-xs text-slate-600">24/7 client coordination and ongoing campaign support.</p>
            <a href="mailto:official@empirecommunicationshub.com" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              official@empirecommunicationshub.com <ArrowRight size={14} />
            </a>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">Partner requests</h4>
            <p className="mt-1 text-xs text-slate-600">Corporate partnerships, BPO outsourcing, and tie-ups.</p>
            <Link href="/departments" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              View department network <ArrowRight size={14} />
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">General inquiries</h4>
            <p className="mt-1 text-xs text-slate-600">Administrative and central operational desk assistance.</p>
            <a href="tel:+917398823011" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              Call +91 73988 23011 <ArrowRight size={14} />
            </a>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">Career opportunities</h4>
            <p className="mt-1 text-xs text-slate-600">Hiring for telecallers, team leads, and quality analysts in Lucknow.</p>
            <Link href="/careers" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
              See open roles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h4 className="text-lg font-bold text-slate-900">Head Office Location</h4>
            <p className="mt-1 text-xs text-slate-600">D50, Vibhuti Khand, Gomti Nagar, Lucknow, UP - 226010.</p>
            <span className="mt-3 block text-sm font-semibold text-slate-700">Walk-ins: 10:00 AM – 5:00 PM</span>
          </div>

        </div>
      </section>

    </div>
  );
}

export { ContactPage as EnquiryForm };
              
