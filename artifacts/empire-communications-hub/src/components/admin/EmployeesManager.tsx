"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import type { Profile } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function EmployeesManager({ employees }: { employees: Profile[] }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    const { data: result, error } = await supabase.functions.invoke("create-employee", {
      body: {
        email: String(data.get("email") ?? ""),
        full_name: String(data.get("full_name") ?? ""),
        phone: String(data.get("phone") ?? ""),
      },
    });

    setSubmitting(false);

    if (error || (result as { error?: string } | null)?.error) {
      setMessage({
        type: "error",
        text:
          (result as { error?: string } | null)?.error ??
          "Could not send the invite. Make sure the create-employee Edge Function is deployed (see README).",
      });
      return;
    }

    setMessage({ type: "success", text: "Invite sent — they'll receive an email to set their password." });
    (e.target as HTMLFormElement).reset();
    setShowForm(false);
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-slate">{employees.length} employee{employees.length === 1 ? "" : "s"}</p>
        <Button onClick={() => setShowForm((v) => !v)}>{showForm ? "Cancel" : "Register Employee"}</Button>
      </div>

      {showForm && (
        <form onSubmit={handleInvite} className="mt-4 grid gap-4 border border-navy/10 bg-white p-6 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="full_name">Full name</label>
            <input id="full_name" name="full_name" required className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-medium text-navy" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" className={inputClasses} />
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" disabled={submitting}>{submitting ? "Sending Invite…" : "Send Invite"}</Button>
          </div>
        </form>
      )}

      {message && (
        <p className={`mt-3 text-sm ${message.type === "success" ? "text-emerald-600" : "text-red-600"}`}>
          {message.text}
        </p>
      )}

      <div className="mt-6 overflow-x-auto border border-navy/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-navy/10 bg-navy/[0.02] font-mono text-xs uppercase tracking-widest text-slate">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/10">
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="px-4 py-3 font-medium text-navy">{emp.full_name}</td>
                <td className="px-4 py-3 text-slate">{emp.phone ?? "—"}</td>
                <td className="px-4 py-3 text-slate">{formatDate(emp.joining_date)}</td>
                <td className="px-4 py-3 capitalize text-slate">{emp.role}</td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-slate">No employees registered yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
