"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";

interface TodayRow {
  id: string;
  check_in_time: string | null;
  check_out_time: string | null;
}

export function AttendanceWidget({ userId, today }: { userId: string; today: TodayRow | null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function checkIn() {
    setLoading(true);
    const supabase = createClient();
    await supabase.from("attendance").upsert(
      {
        employee_id: userId,
        date: new Date().toISOString().slice(0, 10),
        check_in_time: new Date().toISOString(),
        status: "present",
      },
      { onConflict: "employee_id,date" }
    );
    setLoading(false);
    router.refresh();
  }

  async function checkOut() {
    if (!today) return;
    setLoading(true);
    const supabase = createClient();
    await supabase.from("attendance").update({ check_out_time: new Date().toISOString() }).eq("id", today.id);
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="flex flex-wrap items-center gap-4 border border-navy/10 bg-white p-6">
      <div className="flex-1">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">Today</p>
        <p className="mt-1 text-navy">
          {today?.check_in_time
            ? `Checked in at ${new Date(today.check_in_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`
            : "Not checked in yet"}
          {today?.check_out_time &&
            ` · Checked out at ${new Date(today.check_out_time).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`}
        </p>
      </div>
      {!today?.check_in_time && <Button onClick={checkIn} disabled={loading}>Check In</Button>}
      {today?.check_in_time && !today?.check_out_time && (
        <Button onClick={checkOut} disabled={loading} variant="secondary">Check Out</Button>
      )}
    </div>
  );
}
