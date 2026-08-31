import { Eyebrow } from "@/components/ui/Container";

const log = [
  {
    title: "Reliability",
    detail: "Consistent coverage and process discipline, so client-facing work doesn't slip.",
  },
  {
    title: "Trained Team",
    detail: "People are trained on communication standards before they represent your business.",
  },
  {
    title: "Growth Culture",
    detail: "Employees work against clear, measurable goals, and are supported to grow into them.",
  },
  {
    title: "Clear Reporting",
    detail: "You can see what's being handled, by whom, and where things stand, at any time.",
  },
];

export function WhyEmpirePanel() {
  return (
    <div className="bg-navy p-8 text-paper md:p-12">
      <Eyebrow className="text-cyan">Why Empire</Eyebrow>
      <h2 className="font-display text-3xl font-bold md:text-4xl">Built to be trusted with your customers.</h2>

      <div className="mt-10 divide-y divide-paper/10 border-t border-paper/10">
        {log.map((item, i) => (
          <div key={item.title} className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8">
            <span className="font-mono text-xs text-cyan md:w-10">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-lg font-semibold md:w-48 md:shrink-0">{item.title}</span>
            <p className="text-sm text-paper/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
