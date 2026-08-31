import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Container";
import type { Service } from "@/lib/types";

export function ServicesPreviewGrid({ services }: { services: Service[] }) {
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>What We Handle</Eyebrow>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Channels we run for you.
          </h2>
        </div>
        <Link href="/services" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-hub hover:text-navy focus-ring">
          View all services <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative border border-navy/10 bg-white p-6 transition-colors hover:border-hub"
          >
            <span className="absolute left-0 top-6 h-px w-4 bg-cyan" aria-hidden />
            <h3 className="pl-6 font-display text-lg font-semibold text-navy">{service.title}</h3>
            <p className="mt-2 pl-6 text-sm leading-relaxed text-slate">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
