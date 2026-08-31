import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { ListContentEditor } from "@/components/admin/ListContentEditor";
import type { Department, Service } from "@/lib/types";

export default async function AdminContentPage() {
  const supabase = await createClient();

  const [{ data: services }, { data: departments }] = await Promise.all([
    supabase.from("services").select("*").order("display_order"),
    supabase.from("departments").select("*").order("display_order"),
  ]);

  return (
    <div className="space-y-12">
      <div>
        <PageHeading title="Services" subtitle="Shown on the public Services page — edits go live immediately." />
        <ListContentEditor table="services" labelField="title" items={(services as Service[] | null) ?? []} />
      </div>

      <div>
        <PageHeading title="Departments" subtitle="Shown on the public Departments page." />
        <ListContentEditor table="departments" labelField="name" items={(departments as Department[] | null) ?? []} />
      </div>
    </div>
  );
}
