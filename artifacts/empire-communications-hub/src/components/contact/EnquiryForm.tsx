"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Briefcase 
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";
const labelClasses = "text-xs font-semibold uppercase tracking-wider text-slate-700";

export function EnquiryPageSection() {
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
      setErrorMessage("Kuch galat hua. Kripya dobara try karein ya direct phone/email par contact karein.");
      return;
    }
    setStatus("done");
  }

  return (
    <div className="bg-slate-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Direct Enterprise Consultation
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let’s discuss your{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              operational pipeline.
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Dedicated telecalling teams, customer retention support, ya back-office scaling—apni requirement share karein aur hamari operational team aapko structured plan provide karegi.
          </p>
        </div>

        {/* Main Grid: Form + Info with Unsplash Image */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Form */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm lg:col-span-7">
            {status === "done" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Enquiry Received Successfully</h3>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Aapka message mil gaya hai. Hamare operations manager agle 4 operational hours me aapse contact karenge.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Dusra message bhejein
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses} htmlFor="name">Full Name *</label>
                    <input id="name" name="name" required placeholder="Aapka naam" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="company">Company / Organization</label>
                    <input id="company" name="company" placeholder="Business ka naam" className={inputClasses} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses} htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" required placeholder="+91 98765 43210" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="email">Official Email *</label>
                    <input id="email" name="email" type="email" required placeholder="name@company.com" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className={labelClasses} htmlFor="message">Requirement Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Process type, required team size, daily target volume..."
                    className={inputClasses}
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    "Processing details..."
                  ) : (
                    <>
                      Submit Operational Enquiry
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Photo & Real Contact Card */}
          <div className="space-y-6 lg:col-span-5">
            {/* Unsplash Image Card */}
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Empire Communications Hub Operations Room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 rounded bg-blue-600/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                  Active BPO Floor
                </span>
                <p className="mt-1 text-sm font-semibold">Structured Workflows & Continuous Supervision</p>
              </div>
            </div>

            {/* Official Contact Badges */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Phone Support</p>
                  <a href="tel:+917398823011" className="text-sm font-bold text-slate-900 hover:text-blue-600">
                    +91 73988 23011
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-500">Email Desk</p>
                  <a href="mailto:official@empirecommunicationshub.com" className="break-all text-sm font-bold text-slate-900 hover:text-blue-600">
                    official@empirecommunicationshub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">HQ Location</p>
                  <p className="text-xs font-semibold text-slate-800">
                    D50, Vibhuti Khand, Gomti Nagar, Lucknow, UP - 226010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Operations Hours</p>
                  <p className="text-xs font-medium text-slate-700">Mon - Sat: 9:30 AM – 6:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Pre-Footer Quick Navigation Band */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Corporate Navigation</span>
              <h4 className="mt-1 text-lg font-bold text-slate-900">Explore Empire Communications Hub</h4>
              <p className="mt-1 text-xs text-slate-600">Check our service catalogue or build your career with our Lucknow branch.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                <ShieldCheck size={15} className="text-blue-600" />
                Services
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                <Briefcase size={15} className="text-blue-600" />
                Careers
              </Link>
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                <Users size={15} className="text-blue-600" />
                Departments
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Partner With Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
