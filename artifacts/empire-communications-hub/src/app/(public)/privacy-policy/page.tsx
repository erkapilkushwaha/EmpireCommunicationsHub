import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Empire Communications Hub collects, uses, stores and protects personal information submitted through its website and recruitment channels.",
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

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Eyebrow>Legal &amp; Privacy</Eyebrow>

      <h1 className="font-display text-4xl font-bold text-navy sm:text-5xl">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-slate/70">
        Last updated:{" "}
        <time dateTime="2026-10-08">{lastUpdated}</time>
      </p>

      <div className="mt-8 max-w-3xl space-y-8 text-base leading-relaxed text-slate">
        <section aria-labelledby="privacy-introduction">
          <h2 id="privacy-introduction" className={headingClass}>
            1. Introduction
          </h2>

          <p className="mt-3">
            {company.name} (&quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;) respects your privacy. This Privacy Policy
            explains how we collect, use, retain and protect personal
            information when you visit our website, contact us, apply
            for a position or communicate with us through our
            recruitment channels.
          </p>

          <p className="mt-3">
            This policy applies to information handled by us for these
            purposes. If you become an employee, additional employment,
            payroll and statutory privacy notices or documentation may
            apply to your employee records.
          </p>
        </section>

        <section aria-labelledby="information-collected">
          <h2 id="information-collected" className={headingClass}>
            2. Information We Collect
          </h2>

          <p className="mt-3">
            Depending on how you interact with us, we may collect:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Contact details, including your name, telephone number,
              email address and information included in your enquiry.
            </li>

            <li>
              Business enquiry details, such as your organisation,
              service requirements and related correspondence.
            </li>

            <li>
              Recruitment information, including your resume,
              qualifications, work experience, role applied for,
              availability, salary expectations and information you
              provide during interviews.
            </li>

            <li>
              Recruitment records created by us, such as application
              references, interview feedback, hiring decisions and
              offer correspondence.
            </li>

            <li>
              Limited technical information that may be recorded by
              our website infrastructure, such as IP address, browser
              or device information, request timestamps and security
              or error logs.
            </li>
          </ul>

          <p className="mt-3">
            Please do not include Aadhaar copies, PAN details, bank
            account information, passwords, OTPs or other unnecessary
            sensitive information in a general enquiry or initial job
            application. Where identity or payroll documents are
            needed during onboarding, we will communicate the
            requirement and the appropriate submission method
            separately.
          </p>
        </section>

        <section aria-labelledby="collection-methods">
          <h2 id="collection-methods" className={headingClass}>
            3. How We Receive Information
          </h2>

          <p className="mt-3">
            We receive information directly from you through website
            forms, email, telephone conversations, interviews,
            office visits and documents you submit. We may also
            receive recruitment information from a referral or
            recruitment channel through which your application is
            shared with us.
          </p>

          <p className="mt-3">
            If you provide another person&apos;s information, such as
            a professional reference, please ensure that you are
            authorised to share it and that the person understands
            why it is being provided.
          </p>
        </section>

        <section aria-labelledby="information-use">
          <h2 id="information-use" className={headingClass}>
            4. How We Use Information
          </h2>

          <p className="mt-3">
            We use personal information for relevant business and
            recruitment purposes, including:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Responding to enquiries and communicating about our
              services.
            </li>

            <li>
              Reviewing applications, scheduling interviews and
              assessing suitability for a role.
            </li>

            <li>
              Communicating recruitment decisions, offers and
              onboarding requirements.
            </li>

            <li>
              Maintaining accurate correspondence and recruitment
              records.
            </li>

            <li>
              Operating our website, investigating technical issues
              and protecting against misuse or unauthorised activity.
            </li>

            <li>
              Meeting applicable legal obligations and establishing,
              exercising or defending legal claims.
            </li>
          </ul>

          <p className="mt-3">
            We do not sell personal information. Information submitted
            for recruitment or an enquiry is not automatically treated
            as permission to send unrelated promotional communications.
          </p>
        </section>

        <section aria-labelledby="processing-basis">
          <h2 id="processing-basis" className={headingClass}>
            5. Consent and Other Permitted Grounds
          </h2>

          <p className="mt-3">
            We handle personal information in accordance with
            applicable law. Where consent is required, we will seek
            it for the relevant purpose. Where the law permits
            processing on another ground, we may rely on that ground
            as appropriate.
          </p>

          <p className="mt-3">
            Where processing is based on your consent, you may
            withdraw that consent by contacting us. Withdrawal does
            not affect processing already lawfully carried out.
            Depending on the information involved, withdrawal may
            limit our ability to respond to an enquiry or continue
            an application.
          </p>
        </section>

        <section aria-labelledby="information-sharing">
          <h2 id="information-sharing" className={headingClass}>
            6. Access and Disclosure
          </h2>

          <p className="mt-3">
            Access to personal information is limited to authorised
            management, personnel and service providers who need it
            for the purposes described in this policy.
          </p>

          <p className="mt-3">
            Where necessary, information may be handled by providers
            supporting website hosting, business email, cloud
            storage, recruitment or other relevant administrative
            services. We seek to use providers with appropriate
            confidentiality and security arrangements.
          </p>

          <p className="mt-3">
            We may disclose information where required by law, a
            valid legal process or a competent authority, or where
            lawfully necessary to protect rights, investigate misuse
            or address security concerns.
          </p>
        </section>

        <section aria-labelledby="cookies-technical-data">
          <h2 id="cookies-technical-data" className={headingClass}>
            7. Cookies and Technical Information
          </h2>

          <p className="mt-3">
            Our website infrastructure may process technical
            information needed to deliver pages, maintain security
            and diagnose errors. Cookie and local-storage use
            depends on the features enabled on the website.
          </p>

          <p className="mt-3">
            If we enable non-essential analytics, advertising
            technologies or third-party tracking, we will provide
            the relevant information and obtain consent where
            required before those technologies are used.
          </p>

          <p className="mt-3">
            You can manage cookies through your browser settings.
            Disabling certain cookies may affect website features.
          </p>
        </section>

        <section aria-labelledby="data-retention">
          <h2 id="data-retention" className={headingClass}>
            8. Retention of Information
          </h2>

          <p className="mt-3">
            We retain personal information only for as long as
            reasonably necessary for the purpose for which it was
            collected, including relevant administrative, legal and
            record-keeping requirements.
          </p>

          <p className="mt-3">
            Recruitment information is retained while an application
            is being considered and for an appropriate period after
            its conclusion. If we wish to keep your profile for
            future opportunities, we will communicate that purpose
            and obtain consent where required.
          </p>

          <p className="mt-3">
            Where an applicant joins the company, relevant records
            may become part of the employee file. When information
            is no longer required, we take steps to delete or
            anonymise it, subject to applicable retention
            obligations and backup processes.
          </p>
        </section>

        <section aria-labelledby="information-security">
          <h2 id="information-security" className={headingClass}>
            9. Security
          </h2>

          <p className="mt-3">
            We take reasonable steps to protect personal information
            against unauthorised access, disclosure, alteration and
            loss. The measures used depend on the nature of the
            information and how it is stored or processed.
          </p>

          <p className="mt-3">
            No internet transmission or storage system can be
            guaranteed to be completely secure. If you believe
            information submitted to us has been compromised,
            please contact us promptly.
          </p>
        </section>

        <section aria-labelledby="privacy-requests">
          <h2 id="privacy-requests" className={headingClass}>
            10. Your Requests and Choices
          </h2>

          <p className="mt-3">
            You may contact us to ask about information we hold
            about you, request correction or deletion, withdraw
            consent where relevant, or raise a privacy concern.
            We will consider and respond to requests in accordance
            with applicable law.
          </p>

          <p className="mt-3">
            We may ask for proportionate information to verify your
            identity before acting on a request. Certain records
            may need to be retained to meet legal obligations or
            address an ongoing dispute. If we cannot fulfil a
            request in full, we will explain the relevant reason
            where appropriate.
          </p>

          <p className="mt-3">
            Please email{" "}
            <a
              href={`mailto:${company.email}`}
              className={linkClass}
            >
              {company.email}
            </a>{" "}
            with the subject line &quot;Privacy Request&quot; and
            sufficient details to help us locate the relevant record.
            Please do not send identity documents unless we request
            them through an appropriate channel.
          </p>
        </section>

        <section aria-labelledby="children-privacy">
          <h2 id="children-privacy" className={headingClass}>
            11. Children&apos;s Information
          </h2>

          <p className="mt-3">
            Our website and recruitment forms are not intended for
            children under 18. Please do not submit a child&apos;s
            personal information through these forms. If we become
            aware of such a submission, we will assess and handle
            it in accordance with applicable law.
          </p>
        </section>

        <section aria-labelledby="external-services">
          <h2 id="external-services" className={headingClass}>
            12. External Links and Storage Locations
          </h2>

          <p className="mt-3">
            Our website may contain links to third-party websites
            or platforms. Their privacy practices are governed by
            their own policies, which you should review before
            sharing personal information.
          </p>

          <p className="mt-3">
            Depending on the providers we use, information may be
            stored or processed outside India. Where this occurs,
            we will comply with applicable legal requirements and
            restrictions.
          </p>
        </section>

        <section aria-labelledby="policy-updates">
          <h2 id="policy-updates" className={headingClass}>
            13. Updates to This Policy
          </h2>

          <p className="mt-3">
            We may update this policy when our practices, website
            features or legal requirements change. The latest
            version will be published on this page with an updated
            date. Where required, we will provide additional notice
            or seek fresh consent for a new processing purpose.
          </p>
        </section>

        <section
          aria-labelledby="privacy-contact"
          className="rounded-2xl border border-slate/15 bg-slate/5 p-6"
        >
          <h2 id="privacy-contact" className={headingClass}>
            14. Contact and Privacy Grievances
          </h2>

          <p className="mt-3">
            For questions, requests or complaints relating to this
            policy or our handling of personal information, contact:
          </p>

          <address className="mt-4 space-y-2 not-italic">
            <p className="font-semibold text-navy">
              {company.name}
            </p>

            <p>
              Privacy Contact: Jalaj Singh Surya
              <br />
              Owner / Authorised Management Representative
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
            Please use the subject line &quot;Privacy
            Grievance&quot; for a complaint. We will review the matter
            and respond in accordance with applicable requirements.
            This does not limit any right to approach an appropriate
            authority where available under applicable law.
          </p>
        </section>
      </div>
    </Section>
  );
}
