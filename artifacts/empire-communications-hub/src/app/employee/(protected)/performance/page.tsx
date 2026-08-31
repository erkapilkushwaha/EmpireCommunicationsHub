import { createClient } from "@/lib/supabase/server";
import { PageHeading, StatusBadge } from "@/components/dashboard/StatCard";
import type { Goal } from "@/lib/types";

export default async function EmployeePerformancePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: goals } = await supabase
    .from("goals")
    .select("*")
    .eq("employee_id", user?.id)
    .order("created_at", { ascending: false });

  const list = (goals as Goal[] | null) ?? [];

  return (
    <div>
      <PageHeading title="Performance & Goals" subtitle="Targets set by your manager and where things stand." />

      {list.length === 0 && <p className="text-slate">No goals have been set yet.</p>}

      <div className="space-y-4">
        {list.map((goal) => (
          <div key={goal.id} className="border border-navy/10 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs uppercase tracking-widest text-slate">{goal.period_label}</p>
              <StatusBadge status={goal.status} />
            </div>
            <p className="mt-2 text-navy">{goal.target_description}</p>
            {goal.manager_feedback && (
              <p className="mt-3 border-t border-navy/10 pt-3 text-sm text-slate">
                <span className="font-medium text-navy">Manager feedback: </span>
                {goal.manager_feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
