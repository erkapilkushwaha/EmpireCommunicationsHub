import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { Section, Eyebrow } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import type { Department } from "@/lib/types";

export const metadata: Metadata = {
  title: "Departments",
  description: "The functional teams behind Empire Communications Hub's client work.",
};

export const revalidate = 60;

export default async function DepartmentsPage() {
  const supabase = await createClient();
  const { data: departments } = await supabase
    .from("departments")
    .select("*")
    .order("display_order");

  const list = (departments as Department[] | null) ?? [];

  return (
    <Section>
      <Eyebrow>Departments</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
        How the team is organized.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate">
        Client work is handled by focused teams, each responsible for one part of the job.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {list.map((dept) => (
          <div key={dept.id} className="border border-navy/10 bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-navy">{dept.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">{dept.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border border-navy/10 bg-white p-8 text-center">
        <p className="text-slate">Looking to join one of these teams?</p>
        <LinkButton href="/careers" size="lg" className="mt-4">View Open Roles</LinkButton>
      </div>
    </Section>
  );
}
