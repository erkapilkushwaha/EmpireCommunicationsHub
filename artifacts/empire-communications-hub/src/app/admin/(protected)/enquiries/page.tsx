import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { EnquiriesTable } from "@/components/admin/EnquiriesTable";
import type { Enquiry, Profile } from "@/lib/types";

export default async function AdminEnquiriesPage() {
  const supabase = await createClient();

  const [{ data: enquiries }, { data: employees }] = await Promise.all([
    supabase.from("enquiries").select("*").order("created_at", { ascending: false }),
    supabase.from("profiles").select("*").eq("role", "employee").order("full_name"),
  ]);

  return (
    <div>
      <PageHeading title="Enquiries" subtitle="Every public enquiry lands here — respond directly or route it to an employee." />
      <EnquiriesTable
        enquiries={(enquiries as Enquiry[] | null) ?? []}
        employees={(employees as Profile[] | null) ?? []}
      />
    </div>
  );
}
