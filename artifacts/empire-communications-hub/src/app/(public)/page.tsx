import { createClient } from "@/lib/supabase/server";
import { Hero } from "@/components/home/Hero";
import { ChannelStatusStrip } from "@/components/home/ChannelStatusStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyEmpirePanel } from "@/components/home/WhyEmpirePanel";
import { CareersTeaserBand } from "@/components/home/CareersTeaserBand";
import { ContactCTABand } from "@/components/home/ContactCTABand";
import { Section } from "@/components/ui/Container";
import type { Service } from "@/lib/types";

export const revalidate = 60;

export default async function HomePage() {
  const supabase = await createClient();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("display_order")
    .limit(4);

  return (
    <>
      <Hero />
      <ChannelStatusStrip />
      <AboutPreview />
      <Section className="pt-0">
        <WhyEmpirePanel />
      </Section>
      <Section className="pt-0 space-y-20">
        <CareersTeaserBand />
        <ContactCTABand />
      </Section>
    </>
  );
}
