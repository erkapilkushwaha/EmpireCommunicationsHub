import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { JobsManager } from "@/components/admin/JobsManager";
import { ApplicationsTable } from "@/components/admin/ApplicationsTable";
import type { Job, JobApplication } from "@/lib/types";

export default async function AdminJobsPage() {
  const supabase = await createClient();

  const [{ data: jobs }, { data: applications }] = await Promise.all([
    supabase.from("jobs").select("*").order("created_at", { ascending: false }),
    supabase.from("job_applications").select("*, jobs(title)").order("created_at", { ascending: false }),
  ]);

  const appRows = ((applications as (JobApplication & { jobs?: { title: string } | null })[] | null) ?? []).map(
    (a) => ({ ...a, job_title: a.jobs?.title })
  );

  return (
    <div className="space-y-12">
      <div>
        <PageHeading title="Jobs" subtitle="Post openings — they appear live on the public Careers page." />
        <JobsManager jobs={(jobs as Job[] | null) ?? []} />
      </div>

      <div>
        <PageHeading title="Applications" subtitle="Everyone who has applied through the Careers page." />
        <ApplicationsTable applications={appRows} />
      </div>
    </div>
  );
}
