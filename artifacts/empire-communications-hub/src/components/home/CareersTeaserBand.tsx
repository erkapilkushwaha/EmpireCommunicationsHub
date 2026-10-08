import Image from "next/image";
import {
  ArrowUpRight,
  Briefcase,
  Headphones,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { Eyebrow } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

type CareersTeaserBandProps = {
  /**
   * Use a local image path, for example:
   * /images/careers/office-team.webp
   *
   * Only pass this after adding the actual image to /public.
   */
  imageSrc?: string;
  imageAlt?: string;
};

const focusAreas = [
  {
    label: "Sales",
    icon: Briefcase,
  },
  {
    label: "Customer communication",
    icon: MessageSquare,
  },
  {
    label: "Business operations",
    icon: Headphones,
  },
];

export function CareersTeaserBand({
  imageSrc,
  imageAlt = "Workplace illustration",
}: CareersTeaserBandProps) {
  return (
    <section
      aria-labelledby="home-careers-title"
      className="overflow-hidden rounded-2xl border border-navy/10 bg-white"
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy and action */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
          <Eyebrow>Careers at Empire</Eyebrow>

          <h2
            id="home-careers-title"
            className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl"
          >
            Bring your ambition.
            <br />
            <span className="text-hub">
              Explore your next opportunity.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
            Ready to put your communication skills to work?
            Explore roles in sales, customer engagement and business
            operations at Empire Communications Hub.
          </p>

          <ul
            aria-label="Career areas"
            className="mt-6 flex flex-wrap gap-2"
          >
            {focusAreas.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-2 text-xs font-medium text-navy"
              >
                <Icon
                  size={14}
                  className="text-hub"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
            <LinkButton href="/careers" size="lg">
              Explore Careers
              <ArrowUpRight
                size={17}
                className="ml-2"
                aria-hidden="true"
              />
            </LinkButton>

            <span className="inline-flex items-center gap-2 text-sm text-slate">
              <MapPin
                size={16}
                className="text-hub"
                aria-hidden="true"
              />
              Lucknow, Uttar Pradesh
            </span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate">
            View current openings, role requirements and application
            details.
          </p>
        </div>

        {/* Image or built-in visual */}
        <div className="relative min-h-[280px] overflow-hidden bg-navy sm:min-h-[320px] lg:min-h-[440px]">
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Empire Communications Hub
                </p>

                <p className="mt-3 max-w-sm font-display text-2xl font-semibold leading-snug text-white">
                  People. Conversations.
                  <br />
                  Everyday impact.
                </p>
              </div>
            </>
          ) : (
            <div className="relative flex h-full min-h-[280px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-8 lg:min-h-[440px]">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10"
              />

              <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Your next chapter
              </p>

              <div className="relative my-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <MessageSquare
                    size={30}
                    strokeWidth={1.5}
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-6 max-w-sm font-display text-3xl font-semibold leading-tight text-white">
                  Start with a skill.
                  <br />
                  Make it count.
                </p>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                  Communication, responsibility and a willingness
                  to learn.
                </p>
              </div>

              <div className="relative border-t border-white/15 pt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/65">
                  Empire Communications Hub
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
