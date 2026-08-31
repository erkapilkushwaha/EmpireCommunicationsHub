"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";
const labelClasses = "font-body text-sm font-medium text-navy";

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
      setErrorMessage("Something went wrong. Please try again, or reach us directly by phone or email.");
      return;
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="border border-navy/10 bg-white p-8">
        <p className="text-lg text-navy">
          Thanks for reaching out — we've received your enquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-navy/10 bg-white p-8">
      <div>
        <label className={labelClasses} htmlFor="name">Your name</label>
        <input id="name" name="name" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="company">Company</label>
        <input id="company" name="company" className={inputClasses} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={inputClasses} />
        </div>
      </div>
      <div>
        <label className={labelClasses} htmlFor="message">What do you need handled?</label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
