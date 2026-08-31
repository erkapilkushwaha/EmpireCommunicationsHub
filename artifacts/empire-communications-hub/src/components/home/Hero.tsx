import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Container";
import { RoutingDiagram } from "./RoutingDiagram";

export function Hero() {
  return (
    <div className="pt-16 pb-8 md:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl animate-fade-up">
          <Eyebrow>BPO · Communications · Customer Engagement</Eyebrow>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy md:text-6xl">
            Every client conversation, routed to the right team.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate">
            Empire Communications Hub handles calls, customer support, sales follow-up and
            back-office work for businesses that would rather focus on running their business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/contact" size="lg">Get a Quote</LinkButton>
            <LinkButton href="/careers" variant="secondary" size="lg">View Careers</LinkButton>
          </div>
        </div>

        <div className="mt-14 flex justify-center md:mt-20">
          <RoutingDiagram />
        </div>
      </div>
    </div>
  );
}
