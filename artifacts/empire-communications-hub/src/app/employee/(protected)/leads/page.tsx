import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { LeadsTable } from "@/components/employee/LeadsTable";
import type { Enquiry } from "@/lib/types";

export default async function EmployeeLeadsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: leads } = await supabase
    .from("enquiries")
    .select("*")
    .eq("assigned_to", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <PageHeading title="My Leads" subtitle="Enquiries routed to you for follow-up." />
      <LeadsTable leads={(leads as Enquiry[] | null) ?? []} />
    </div>
  );
}
