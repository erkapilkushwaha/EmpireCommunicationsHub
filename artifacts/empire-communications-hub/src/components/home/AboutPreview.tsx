import Link from "next/link";
import { ArrowRight, PhoneCall, Headphones, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

const deliveryPillars = [
  {
    title: "Voice & Omnichannel Support",
    desc: "End-to-end inbound customer care, active telecalling, and 24/7 responsive live chat and email support.",
  },
  {
    title: "Sales & Revenue Acceleration",
    desc: "Proactive lead qualification, appointment booking, and persistent follow-ups that turn prospects into clients.",
  },
  {
    title: "Data & Back-Office Execution",
    desc: "High-accuracy data processing, record verification, and daily administrative CRM maintenance.",
  },
];

const operationalCards = [
  {
    icon: PhoneCall,
    tag: "VOICE & OUTREACH",
    title: "Telecalling & Outreach",
    desc: "High-intent outbound calling, proactive outreach, and structured follow-ups handled by trained callers to qualify prospects and maintain a healthy sales pipeline.",
  },
  {
    icon: Headphones,
    tag: "SUPPORT & CARE",
    title: "24/7 Multi-Channel Customer Support",
    desc: "Continuous voice, live chat, and email assistance delivering rapid resolutions, zero missed interactions, and high customer satisfaction ratings.",
  },
  {
    icon: Database,
    tag: "ADMINISTRATION",
    title: "Reliable Back-Office & Business Operations",
    desc: "Day-to-day administrative processing, verified data management, record reconciliation, and routine CRM maintenance executed without delays.",
  },
  {
    icon: ShieldCheck,
    tag: "QUALITY & SLA",
    title: "Zero-Lag & Error-Free Execution",
    desc: "Standardized operating workflows with continuous quality audits to guarantee strict SLA compliance and eliminate daily operational friction.",
  },
];

export function AboutPreview() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>ABOUT EMPIRE COMMUNICATIONS HUB · OPERATIONAL EXCELLENCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            We handle your telecalling,{" "}
            <span className="text-blue-600">
              support your customers, and run your daily business operations.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-2">
            At Empire Communications Hub, we believe that real business growth happens when every customer conversation is valued and daily operations run without interruption. We function as the strategic operational backbone for modern organizations—bridging the gap between your brand and your customers through dedicated teams, structured processes, and reliable execution.
          </p>
        </div>

        {/* 3 Core Delivery Highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-slate-100 py-8">
          {deliveryPillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Cards Heading */}
        <div className="mt-14 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            The operations we execute{" "}
            <span className="text-blue-600">for you every day.</span>
          </h3>
        </div>

        {/* 4 Execution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {operationalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100/70 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {card.tag}
                    </span>
                  </div>

                  <h4 className="mt-5 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h4>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Full About Page */}
        <div className="mt-12 flex justify-start">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
          >
            <span>Learn More About Our Journey</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

