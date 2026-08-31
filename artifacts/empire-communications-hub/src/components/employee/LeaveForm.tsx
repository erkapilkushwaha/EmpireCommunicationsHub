"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function LeaveForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    const { error: insertError } = await supabase.from("leave_requests").insert({
      employee_id: userId,
      leave_type: String(data.get("leave_type") ?? "casual"),
      start_date: String(data.get("start_date") ?? ""),
      end_date: String(data.get("end_date") ?? ""),
      reason: String(data.get("reason") ?? ""),
    });

    if (insertError) {
      setError("Could not submit your request. Please try again.");
      setSubmitting(false);
      return;
    }

    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-navy/10 bg-white p-6 sm:grid-cols-2">
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="leave_type">Leave type</label>
        <select id="leave_type" name="leave_type" className={inputClasses}>
          <option value="casual">Casual</option>
          <option value="sick">Sick</option>
        </select>
      </div>
      <div />
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="start_date">Start date</label>
        <input id="start_date" name="start_date" type="date" required className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="end_date">End date</label>
        <input id="end_date" name="end_date" type="date" required className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-navy" htmlFor="reason">Reason</label>
        <textarea id="reason" name="reason" rows={2} className={inputClasses} />
      </div>
      {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Request Leave"}</Button>
      </div>
    </form>
  );
}
