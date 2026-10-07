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

export function EnquiryForm() {
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
      setErrorMessage("Kuch takneeki dikkat aayi. Kripya phone ya email par sampark karein.");
      return;
    }
    setStatus("done");
  }

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Section */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-blue-600">
            Enterprise Consultation
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Powering your business growth with{" "}
            <span className="text-blue-600">seamless customer engagement.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether you need dedicated telecalling, multichannel customer support, or structured 
            back-office operations, our operational teams are ready to scale with you.
          </p>
        </div>

        {/* 2. Top Professional Office Banner Image */}
        <div className="relative mt-10 h-72 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Empire Communications Hub Corporate Office Floor"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
                Active Operations Center
              </span>
              <p className="mt-2 text-lg font-bold sm:text-xl">Central Communications Hub & BPO Floor</p>
            </div>
            <p className="text-xs text-slate-300">Vibhuti Khand, Gomti Nagar, Lucknow</p>
          </div>
        </div>

        {/* 3. Official Contact Details Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Phone size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</p>
            <a href="tel:+917398823011" className="mt-1 block text-base font-bold text-slate-900 hover:text-blue-600">
              +91 73988 23011
            </a>
            <p className="mt-1 text-xs text-slate-500">Direct operations desk</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Mail size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Official Email</p>
            <a href="mailto:official@empirecommunicationshub.com" className="mt-1 block break-all text-sm font-bold text-slate-900 hover:text-blue-600">
              official@empirecommunicationshub.com
            </a>
            <p className="mt-1 text-xs text-slate-500">Enterprise support desk</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <MapPin size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Head Office</p>
            <p className="mt-1 text-sm font-bold text-slate-900">D50, Vibhuti Khand</p>
            <p className="text-xs text-slate-500">Gomti Nagar, Lucknow, UP - 226010</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 transition-all hover:border-blue-300 hover:shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Clock size={20} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Operations Timing</p>
            <p className="mt-1 text-sm font-bold text-slate-900">9:00 AM – 8:00 PM</p>
            <p className="text-xs text-slate-500">Monday to Saturday</p>
          </div>
        </div>

        {/* 4. Structured Enquiry Form */}
        <div className="mt-14 rounded-2xl border border-slate-200 p-8 lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Send Us An Operational Requirement</h2>
            <p className="mt-2 text-sm text-slate-600">
              Process volume, required seat capacity ya workflow specifications share karein.
            </p>
          </div>

          {status === "done" ? (
            <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50/50 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Enquiry Received</h3>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Aapka request record ho gaya hai. Hamare operations manager jald hi aapse sampark karenge.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClasses} htmlFor="name">Your Name *</label>
                  <input id="name" name="name" required placeholder="Full Name" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="company">Company Name</label>
                  <input id="company" name="company" placeholder="Business / Enterprise" className={inputClasses} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClasses} htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" required placeholder="+91 73988 23011" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="email">Work Email *</label>
                  <input id="email" name="email" type="email" required placeholder="contact@domain.com" className={inputClasses} />
                </div>
              </div>

              <div>
                <label className={labelClasses} htmlFor="message">Requirement Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your telecalling, customer support, or back-office requirements..."
                  className={inputClasses}
                />
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-70"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Enquiry
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* 5. Pre-Footer Corporate Navigation Band */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/60 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Quick Navigation</span>
              <h4 className="mt-1 text-lg font-bold text-slate-900">Explore Empire Communications Hub</h4>
              <p className="mt-1 text-xs text-slate-600">Browse service verticals, departments, or join our professional team.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                <ShieldCheck size={15} className="text-blue-600" />
                Services
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                <Briefcase size={15} className="text-blue-600" />
                Careers
              </Link>
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100"
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

export { EnquiryForm as EnquiryPageSection };
              
