import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const companyEmail = "official@empirecommunicationshub.com";
const companyPhone = "+91 73988 23011";
const phoneHref = "tel:+917398823011";

const officeAddress =
  "D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010";

const linkClasses =
  "focus-ring mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-hub underline decoration-hub/30 underline-offset-4 transition hover:decoration-hub";

export function ContactCTABand() {
  return (
    <section
      aria-labelledby="contact-section-title"
      className="w-full border-t border-navy/10 bg-white"
    >
      {/* Full-width split layout — no outer card or rounded corners */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        {/* Contact details */}
        <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-12 md:px-16 lg:px-12 lg:py-16 xl:px-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-hub">
            Contact Empire
          </p>

          <h2
            id="contact-section-title"
            className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl"
          >
            Let&apos;s start
            <br />
            a conversation.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
            Have a business requirement, a service enquiry or a
            question about working with us? Reach out to our team.
          </p>

          <dl className="mt-8 space-y-6 border-t border-navy/10 pt-7">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                Call us
              </dt>

              <dd className="mt-2">
                <a
                  href={phoneHref}
                  className="focus-ring inline-flex min-h-8 items-center gap-3 text-base font-semibold text-navy transition hover:text-hub"
                >
                  <Phone
                    size={18}
                    className="shrink-0 text-hub"
                    aria-hidden="true"
                  />
                  {companyPhone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                Email us
              </dt>

              <dd className="mt-2">
                <a
                  href={`mailto:${companyEmail}`}
                  className="focus-ring inline-flex max-w-full items-start gap-3 text-sm font-semibold text-navy transition hover:text-hub sm:text-base"
                >
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-hub"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                    {companyEmail}
                  </span>
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                Visit our office
              </dt>

              <dd className="mt-2 flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-hub"
                  aria-hidden="true"
                />

                <address className="max-w-md text-sm not-italic leading-relaxed text-navy">
                  {officeAddress}
                </address>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate">
                Business hours
              </dt>

              <dd className="mt-2 flex items-start gap-3 text-sm leading-relaxed text-navy">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-hub"
                  aria-hidden="true"
                />

                <span>
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM IST
                </span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Full-flush illustrative photograph */}
        <div className="relative min-h-[300px] w-full overflow-hidden sm:min-h-[400px] lg:min-h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="Illustrative photograph of a professional handshake"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Empire Communications Hub
            </p>

            <p className="mt-3 max-w-md font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Clear conversations.
              <br />
              Practical next steps.
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry categories — open white layout */}
      <div className="border-t border-navy/10 bg-white px-6 py-12 sm:px-12 md:px-16 lg:px-12 lg:py-16 xl:px-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-hub">
            How can we help?
          </p>

          <h3 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl">
            Find the right starting point.
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            Explore our services, ask about a partnership or find
            information about career opportunities.
          </p>
        </div>

        <div className="mt-9 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {/* Sales enquiries */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              Sales enquiries
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              Looking for telecalling or support with business
              outreach? Explore our services and discuss your needs.
            </p>

            <Link href="/services" className={linkClasses}>
              Explore our services
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Existing service support */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              Service support
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              Have a question about an ongoing process or service?
              Include relevant details when contacting our team.
            </p>

            <a
              href={`mailto:${companyEmail}?subject=Service%20support%20enquiry`}
              className={linkClasses}
            >
              Email our team
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Partnership enquiries */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              Partnership enquiries
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              Discuss outsourcing requirements or a potential
              operational partnership with Empire.
            </p>

            <a
              href={`mailto:${companyEmail}?subject=Partnership%20enquiry`}
              className={linkClasses}
            >
              Discuss a partnership
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* General enquiries */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              General enquiries
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              Have a question about our company or how to get
              started? Contact us during business hours.
            </p>

            <a href={phoneHref} className={linkClasses}>
              Call {companyPhone}
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Careers */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              Career opportunities
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              Interested in telecalling, customer communication
              or operations? Review current opportunities.
            </p>

            <Link href="/careers" className={linkClasses}>
              Explore careers
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Office visits */}
          <div className="border-t border-navy/10 pt-5">
            <h4 className="text-base font-semibold text-navy">
              Office visits
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              {officeAddress}
            </p>

            <p className="mt-3 text-sm text-slate">
              Walk-in timings: 10:00 AM – 5:00 PM
            </p>

            <a href={phoneHref} className={linkClasses}>
              Call before visiting
              <ArrowUpRight
                size={16}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
              }
