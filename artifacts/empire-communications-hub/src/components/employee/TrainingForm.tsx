"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function TrainingForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    await supabase.from("training_logs").insert({
      employee_id: userId,
      title: String(data.get("title") ?? ""),
      completed_date: String(data.get("completed_date") ?? "") || null,
      notes: String(data.get("notes") ?? ""),
    });

    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 border border-navy/10 bg-white p-6 sm:grid-cols-2">
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="title">Training / certification</label>
        <input id="title" name="title" required className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="completed_date">Completed on</label>
        <input id="completed_date" name="completed_date" type="date" className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm font-medium text-navy" htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows={2} className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={submitting}>{submitting ? "Saving…" : "Add To Log"}</Button>
      </div>
    </form>
  );
}
