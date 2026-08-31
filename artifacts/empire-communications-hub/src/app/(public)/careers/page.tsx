import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { Section, Eyebrow } from "@/components/ui/Container";
import { CareersList } from "@/components/careers/CareersList";
import type { Job } from "@/lib/types";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at Empire Communications Hub — build a career in communication, sales and business operations.",
};

export const revalidate = 30;

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "open")
    .order("created_at", { ascending: false });

  const list = (jobs as Job[] | null) ?? [];

  return (
    <Section>
      <Eyebrow>Careers</Eyebrow>
      <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
        Your ambition belongs here.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate">
        We're looking for disciplined, growth-oriented people who want to build a long-term
        career in communication, sales and business operations.
      </p>
      <p className="mt-4 font-mono text-sm uppercase tracking-widest text-hub">
        {list.length} open {list.length === 1 ? "role" : "roles"}
      </p>

      <div className="mt-10">
        <CareersList jobs={list} />
      </div>
    </Section>
  );
}
