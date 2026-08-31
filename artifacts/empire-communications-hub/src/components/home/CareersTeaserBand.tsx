import { Eyebrow } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export function CareersTeaserBand() {
  return (
    <div className="grid gap-8 border border-navy/10 bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
      <div>
        <Eyebrow>Growth Track</Eyebrow>
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Structured skill-building and performance-based growth for every employee.
        </h2>
      </div>
      <LinkButton href="/careers" size="lg">View Openings</LinkButton>
    </div>
  );
}
