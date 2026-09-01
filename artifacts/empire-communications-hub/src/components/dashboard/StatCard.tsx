export function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="card-surface relative overflow-hidden p-6">
      <span className="absolute left-0 top-0 h-full w-1 bg-hub/0 transition-colors duration-300" />
      <p className="font-mono text-xs uppercase tracking-widest text-slate">{label}</p>
      <p className="mt-2 font-display text-3xl font-bold text-navy">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate">{hint}</p>}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-hub/10 text-hub",
    contacted: "bg-amber-100 text-amber-700",
    in_progress: "bg-amber-100 text-amber-700",
    converted: "bg-emerald-100 text-emerald-700",
    closed: "bg-slate/10 text-slate",
    pending: "bg-amber-100 text-amber-700",
    approved: "bg-emerald-100 text-emerald-700",
    rejected: "bg-red-100 text-red-700",
    on_track: "bg-emerald-100 text-emerald-700",
    behind: "bg-amber-100 text-amber-700",
    achieved: "bg-hub/10 text-hub",
    present: "bg-emerald-100 text-emerald-700",
    absent: "bg-red-100 text-red-700",
    leave: "bg-amber-100 text-amber-700",
    holiday: "bg-slate/10 text-slate",
    open: "bg-emerald-100 text-emerald-700",
    reviewed: "bg-amber-100 text-amber-700",
    shortlisted: "bg-hub/10 text-hub",
    hired: "bg-emerald-100 text-emerald-700",
  };
  const label = status.split("_").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  return (
    <span className={`inline-block rounded-sm px-2.5 py-1 text-xs font-medium ${styles[status] ?? "bg-slate/10 text-slate"}`}>
      {label}
    </span>
  );
}

export function PageHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="font-display text-3xl font-bold text-navy">{title}</h1>
      {subtitle && <p className="mt-1 text-slate">{subtitle}</p>}
    </div>
  );
}