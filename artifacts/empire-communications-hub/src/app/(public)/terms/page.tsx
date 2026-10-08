import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the Empire Communications Hub website, including business enquiries, career applications and website content.",
};

const company = {
  name: "Empire Communications Hub",
  email: "official@empirecommunicationshub.com",
  phone: "+91 73988 23011",
  address:
    "D50, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010, India",
};

const lastUpdated = "08 October 2026";

const headingClass =
  "font-display text-xl font-semibold text-navy sm:text-2xl";

const linkClass =
  "break-words text-hub underline underline-offset-4 hover:no-underline";

export default function TermsPage() {
  return (
    <Section>
      <Eyebrow>Legal &amp; Compliance</Eyebrow>

      <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">
        Terms of Service
      </h1>

      <p className="mt-4 text-sm text-slate/70">
        Terms of Website Use
        <span aria-hidden="true"> · </span>
        Last updated:{" "}
        <time dateTime="2026-10-08">{lastUpdated}</time>
      </p>

      <div className="mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-slate">
        <section aria-labelledby="terms-introduction">
          <h2 id="terms-introduction" className={headingClass}>
            1. Introduction and Scope
          </h2>

          <p className="mt-3">
            This website is operated by {company.name}
            (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
            These terms explain the conditions applicable to
            accessing and using our website, submitting business
            enquiries and applying for career opportunities.
          </p>

          <p className="mt-3">
            Please read these terms before using the website or
            submitting information. Where we ask you to accept
            these terms as part of a submission or transaction,
            you should do so only after reviewing them.
          </p>

          <p className="mt-3">
            These website terms do not replace a separate client
            agreement, offer letter, appointment letter or other
            agreement entered into with us.
          </p>
        </section>

        <section aria-labelledby="permitted-use">
          <h2 id="permitted-use" className={headingClass}>
            2. Permitted Use
          </h2>

          <p className="mt-3">
            You may use the website for lawful purposes, including
            learning about our business, contacting us and submitting
            a genuine application for an advertised opportunity.
          </p>

          <p className="mt-3">
            You must not:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Submit fraudulent, misleading, unlawful, threatening
              or abusive information.
            </li>

            <li>
              Impersonate another person or falsely represent your
              identity, qualifications or authority to act.
            </li>

            <li>
              Upload malicious code, infected files or content
              intended to disrupt the website or our systems.
            </li>

            <li>
              Attempt to gain unauthorised access to accounts,
              systems, application records or other information.
            </li>

            <li>
              Interfere with website security or use automated tools
              to extract personal information or overload the website.
            </li>

            <li>
              Use our name, logo or website content to falsely
              suggest an endorsement, partnership or affiliation.
            </li>
          </ul>
        </section>

        <section aria-labelledby="submitted-information">
          <h2 id="submitted-information" className={headingClass}>
            3. Information You Submit
          </h2>

          <p className="mt-3">
            Information submitted through the website should be
            accurate, relevant and complete to the best of your
            knowledge. Please provide current contact details so
            that we can respond where appropriate.
          </p>

          <p className="mt-3">
            You should submit only information and documents that
            you are authorised to share. Please do not include
            unnecessary sensitive information, passwords, OTPs,
            bank details or identity documents in a general
            enquiry or initial job application.
          </p>

          <p className="mt-3">
            You retain any rights you have in the materials you
            submit. We may review and handle those materials for
            the purpose of responding to your enquiry or processing
            your application, as described in our Privacy Policy.
          </p>

          <p className="mt-3">
            If you need to correct information already submitted,
            please contact us using the details below.
          </p>
        </section>

        <section aria-labelledby="business-enquiries">
          <h2 id="business-enquiries" className={headingClass}>
            4. Business Enquiries and Service Engagements
          </h2>

          <p className="mt-3">
            Information about our services on this website is
            provided for general business information. Sending an
            enquiry or receiving an automated acknowledgement does
            not, by itself, confirm an order or create a service
            engagement.
          </p>

          <p className="mt-3">
            The scope of work, pricing, deliverables, timelines,
            payment terms, confidentiality obligations and other
            commercial conditions will be agreed separately through
            an appropriate proposal, statement of work or agreement.
          </p>

          <p className="mt-3">
            If a separately agreed engagement document conflicts
            with these website terms on a matter relating to that
            engagement, the engagement document will govern that
            matter, subject to applicable law.
          </p>

          <p className="mt-3">
            No sales result, revenue outcome or business performance
            is guaranteed merely by a description published on this
            website. Any specific commitment must be expressly
            agreed for the relevant engagement.
          </p>
        </section>

        <section aria-labelledby="career-applications">
          <h2 id="career-applications" className={headingClass}>
            5. Career Applications and Recruitment
          </h2>

          <p className="mt-3">
            Submitting a job application does not guarantee an
            interview, selection, an offer or employment.
            Applications are assessed against relevant role
            requirements and business needs.
          </p>

          <p className="mt-3">
            Applicants should provide truthful information about
            their identity, qualifications, experience and
            availability. We may request clarification or supporting
            documents where relevant to the recruitment process.
          </p>

          <p className="mt-3">
            An application reference number, interview invitation or
            application acknowledgement is an administrative record,
            not an employment offer.
          </p>

          <p className="mt-3">
            Any employment offer and subsequent appointment will be
            communicated separately through authorised company
            channels and will be governed by the relevant employment
            documents and applicable law.
          </p>

          <p className="mt-3">
            If you receive suspicious recruitment communication
            claiming to represent {company.name}, verify it by
            contacting our official email address before sharing
            documents, credentials or money.
          </p>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property" className={headingClass}>
            6. Website Content and Intellectual Property
          </h2>

          <p className="mt-3">
            Unless otherwise stated, the company branding and
            website materials, including text, graphics, layouts
            and other content, are owned by us or used with
            appropriate permission.
          </p>

          <p className="mt-3">
            You may view the website and retain limited copies for
            personal reference or internal evaluation of our
            services, provided that ownership notices are preserved
            and the materials are not misrepresented.
          </p>

          <p className="mt-3">
            You must not commercially reproduce, distribute,
            republish or use our branding without appropriate
            permission, except where permitted by applicable law.
            Third-party marks and materials remain the property
            of their respective owners.
          </p>
        </section>

        <section aria-labelledby="website-information">
          <h2 id="website-information" className={headingClass}>
            7. Accuracy and Availability
          </h2>

          <p className="mt-3">
            We aim to keep website information accurate and current.
            However, content may contain errors or become outdated.
            Please confirm important service or recruitment details
            directly with us before relying on them.
          </p>

          <p className="mt-3">
            Website access may be interrupted by maintenance,
            technical issues, security measures or circumstances
            outside our reasonable control. We do not guarantee
            uninterrupted access or that every website feature
            will always be available.
          </p>

          <p className="mt-3">
            Nothing in this section overrides an express commitment
            in a separate agreement or any obligation that cannot
            lawfully be excluded.
          </p>
        </section>

        <section aria-labelledby="external-links">
          <h2 id="external-links" className={headingClass}>
            8. Third-Party Links and Platforms
          </h2>

          <p className="mt-3">
            The website may link to third-party websites or
            platforms for convenience. Such links do not, by
            themselves, imply endorsement of their content or
            services.
          </p>

          <p className="mt-3">
            Third-party websites and platforms operate under their
            own terms and privacy policies. We do not control their
            content, availability or data-handling practices.
          </p>
        </section>

        <section aria-labelledby="privacy">
          <h2 id="privacy" className={headingClass}>
            9. Privacy and Personal Information
          </h2>

          <p className="mt-3">
            Our handling of personal information submitted through
            this website and our recruitment channels is described
            in our{" "}
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
            .
          </p>

          <p className="mt-3">
            Acceptance of these website terms is not a substitute
            for any separate consent required for a particular
            use of your personal information.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability" className={headingClass}>
            10. Responsibility and Limitations
          </h2>

          <p className="mt-3">
            To the extent permitted by applicable law, we are not
            responsible for indirect or consequential losses arising
            solely from use of this informational website, including
            reliance on outdated general content or interruptions
            to website access.
          </p>

          <p className="mt-3">
            This section does not limit responsibility for fraud,
            wilful misconduct or any liability that cannot lawfully
            be excluded or restricted. It does not affect mandatory
            consumer rights or liability governed by a separate
            service or employment agreement.
          </p>
        </section>

        <section aria-labelledby="access-restrictions">
          <h2 id="access-restrictions" className={headingClass}>
            11. Security and Access Restrictions
          </h2>

          <p className="mt-3">
            We may take reasonable steps to restrict abusive,
            fraudulent or unauthorised use of the website, protect
            our systems or comply with applicable law.
          </p>

          <p className="mt-3">
            A website access restriction does not, by itself,
            terminate a separate client agreement or employment
            relationship. Those matters are governed by their own
            terms and applicable law.
          </p>
        </section>

        <section aria-labelledby="terms-updates">
          <h2 id="terms-updates" className={headingClass}>
            12. Changes to These Terms
          </h2>

          <p className="mt-3">
            We may update these terms to reflect changes in website
            functionality, business practices or legal requirements.
            The current version will be published on this page with
            its updated date.
          </p>

          <p className="mt-3">
            Updates are intended to apply prospectively. Where
            additional notice or acceptance is required, we will
            provide an appropriate mechanism. Website updates do
            not automatically amend a separately agreed client or
            employment contract.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law" className={headingClass}>
            13. Governing Law and Disputes
          </h2>

          <p className="mt-3">
            These website terms are governed by the laws of India.
            If a concern arises, you may contact us first so that
            we can attempt to resolve it.
          </p>

          <p className="mt-3">
            Subject to applicable law and any mandatory rights to
            approach another competent court, tribunal or authority,
            disputes relating to these website terms will be handled
            by the competent courts at Lucknow, Uttar Pradesh.
          </p>

          <p className="mt-3">
            Nothing in these terms removes a right or remedy that
            cannot lawfully be waived.
          </p>
        </section>

        <section aria-labelledby="severability">
          <h2 id="severability" className={headingClass}>
            14. Severability
          </h2>

          <p className="mt-3">
            If a provision of these terms is found to be invalid
            or unenforceable, the remaining provisions will continue
            to apply to the extent permitted by law.
          </p>
        </section>

        <section
          aria-labelledby="terms-contact"
          className="rounded-2xl border border-slate/15 bg-slate/5 p-6"
        >
          <h2 id="terms-contact" className={headingClass}>
            15. Contact Us
          </h2>

          <p className="mt-3">
            For questions about these terms or a concern relating
            to the website, contact:
          </p>

          <address className="mt-4 space-y-2 not-italic">
            <p className="font-semibold text-navy">
              {company.name}
            </p>

            <p>{company.address}</p>

            <p>
              Email:{" "}
              <a
                href={`mailto:${company.email}`}
                className={linkClass}
              >
                {company.email}
              </a>
            </p>

            <p>
              Telephone:{" "}
              <a
                href="tel:+917398823011"
                className={linkClass}
              >
                {company.phone}
              </a>
            </p>
          </address>

          <p className="mt-4">
            Please use the subject line &quot;Website Terms
            Enquiry&quot; and include relevant details so that we
            can review your message.
          </p>
        </section>
      </div>
    </Section>
  );
}
