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
      
      {/* 1. TOP HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Get in touch with our team.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Reach out to set up dedicated telecalling, 24/7 customer care, sales support, or back-office operations for your business.
            </p>

            <div className="mt-8 space-y-6 border-t border-slate-200 pt-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                <a 
                  href="tel:+917398823011" 
                  className="mt-1 flex items-center gap-2 text-lg font-bold text-slate-900 transition-colors hover:text-blue-600"
                >
                  <Phone size={18} className="text-blue-600" />
                  +91 73988 23011
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                <a 
                  href="mailto:official@empirecommunicationshub.com" 
                  className="mt-1 flex items-center gap-2 text-base font-bold text-slate-900 transition-colors hover:text-blue-600 break-all"
                >
                  <Mail size={18} className="text-blue-600" />
                  official@empirecommunicationshub.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Visit Our Office</p>
                <div className="mt-1 flex items-start gap-2 text-sm font-medium text-slate-800">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</p>
                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Clock size={18} className="text-blue-600" />
                  <span>Monday – Saturday: 9:00 AM to 8:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Team / Office Image */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:h-96 lg:col-span-6 lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Empire Communications Hub Operations Room"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 2. MIDDLE FORM SECTION: Edge-to-Edge Surface */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tell Us What You Need
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form below and our operations team will review your requirement and connect with you shortly.
            </p>
          </div>

          {status === "done" ? (
            <div className="mt-8 rounded-xl border border-green-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Message Received</h3>
              <p className="mt-1 text-sm text-slate-600">
                Thank you for reaching out. We will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Submit another message
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
                      placeholder="+91 73988 23011"
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
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Briefly describe your requirements or inquiry..."
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
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. BOTTOM DEPARTMENTAL NAVIGATION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
      </section>

    </div>
  );
}

// Backward compatibility ke liye export alias:
export { ContactPage as EnquiryForm };
              
