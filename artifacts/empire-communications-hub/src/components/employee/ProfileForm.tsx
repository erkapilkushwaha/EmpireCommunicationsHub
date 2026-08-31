"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import type { Profile } from "@/lib/types";

const inputClasses =
  "mt-1.5 w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy focus-ring focus:border-hub";

export function ProfileForm({ profile, email }: { profile: Profile; email: string | undefined }) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSaved(false);
    const data = new FormData(e.currentTarget);
    const supabase = createClient();

    await supabase
      .from("profiles")
      .update({ full_name: String(data.get("full_name") ?? ""), phone: String(data.get("phone") ?? "") })
      .eq("id", profile.id);

    setSubmitting(false);
    setSaved(true);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4 border border-navy/10 bg-white p-6">
      <div>
        <label className="text-sm font-medium text-navy">Email</label>
        <input value={email ?? ""} disabled className={`${inputClasses} bg-navy/5 text-slate`} />
      </div>
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="full_name">Full name</label>
        <input id="full_name" name="full_name" defaultValue={profile.full_name} required className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" defaultValue={profile.phone ?? ""} className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-navy">Role</label>
        <input value={profile.role} disabled className={`${inputClasses} bg-navy/5 capitalize text-slate`} />
      </div>

      {saved && <p className="text-sm text-emerald-600">Saved.</p>}
      <Button type="submit" disabled={submitting}>{submitting ? "Saving…" : "Save Changes"}</Button>
    </form>
  );
}
