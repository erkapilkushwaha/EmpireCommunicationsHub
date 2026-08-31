import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { Section, Eyebrow } from "@/components/ui/Container";
import type { Service } from "@/lib/types";

export const metadata: Metadata = {
  title: "Services",
  description: "Communication, customer engagement, sales support and business process services from Empire Communications Hub.",
};

export const revalidate = 60;

export default async function ServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("display_order");

  const list = (services as Service[] | null) ?? [];

  return (
    <Section>
      <Eyebrow>Our Services</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
        The work behind your growth.
      </h1>

      <div className="mt-14 divide-y divide-navy/10 border-t border-navy/10">
        {list.map((service, i) => (
          <div key={service.id} className="grid gap-4 py-10 md:grid-cols-[80px_1fr]">
            <span className="font-mono text-sm text-hub">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">{service.title}</h2>
              <p className="mt-3 max-w-2xl text-slate">{service.description}</p>
            </div>
          </div>
        ))}

        {list.length === 0 && (
          <p className="py-10 text-slate">Service details are being finalized — check back shortly.</p>
        )}
      </div>
    </Section>
  );
}
