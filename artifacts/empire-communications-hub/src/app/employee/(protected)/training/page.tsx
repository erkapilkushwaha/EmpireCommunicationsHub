import { createClient } from "@/lib/supabase/server";
import { PageHeading } from "@/components/dashboard/StatCard";
import { TrainingForm } from "@/components/employee/TrainingForm";
import { formatDate } from "@/lib/utils";
import type { TrainingLog } from "@/lib/types";

export default async function EmployeeTrainingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: logs } = await supabase
    .from("training_logs")
    .select("*")
    .eq("employee_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <PageHeading title="Training & Skill Log" subtitle="Keep a record of trainings and certifications you've completed." />
      <TrainingForm userId={user!.id} />

      <div className="mt-8 space-y-3">
        {((logs as TrainingLog[] | null) ?? []).map((log) => (
          <div key={log.id} className="border border-navy/10 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium text-navy">{log.title}</p>
              <p className="text-xs text-slate">{formatDate(log.completed_date)}</p>
            </div>
            {log.notes && <p className="mt-1 text-sm text-slate">{log.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
