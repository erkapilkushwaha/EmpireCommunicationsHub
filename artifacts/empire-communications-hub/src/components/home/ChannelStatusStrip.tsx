import {
  ArrowUpRight,
  Headphones,
  Mail,
  MessageSquare,
  PhoneCall,
  Settings2,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

type ServiceHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const highlights: ServiceHighlight[] = [
  {
    title: "Voice & Telecalling",
    description: "Customer conversations",
    icon: PhoneCall,
  },
  {
    title: "Chat Support",
    description: "Digital customer assistance",
    icon: MessageSquare,
  },
  {
    title: "Email Support",
    description: "Clear, timely communication",
    icon: Mail,
  },
  {
    title: "Customer Care",
    description: "Enquiries and follow-ups",
    icon: Headphones,
  },
  {
    title: "Lead Engagement",
    description: "Sales outreach and follow-up",
    icon: UserRoundCheck,
  },
  {
    title: "Back-Office",
    description: "Everyday process support",
    icon: Settings2,
  },
];

export function ChannelStatusStrip() {
  return (
    <section
      aria-labelledby="channel-strip-title"
      className="relative border-b border-navy/10 bg-white"
    >
      {/* Subtle visual transition from the hero */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hub/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 py-6 md:py-7">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-hub">
              Customer engagement & business support
            </p>

            <h2
              id="channel-strip-title"
              className="mt-1.5 font-display text-lg font-semibold text-navy md:text-xl"
            >
              Across conversations. Behind your operations.
            </h2>
          </div>

          <a
            href="/services"
            className="focus-ring inline-flex min-h-10 shrink-0 items-center gap-2 rounded-md px-1 text-sm font-semibold text-hub underline-offset-4 transition hover:underline"
          >
            Explore our services
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-5 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {highlights.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white px-3.5 py-4 md:block md:px-4"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hub/[0.08] text-hub">
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>

              <div className="min-w-0 md:mt-3">
                <h3 className="text-sm font-semibold leading-snug text-navy">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
