import type { Metadata } from 'next'
import { FadeIn } from '@/components/motion/fade-in'

export const metadata: Metadata = {
  title: 'Privacy Policy — Growth Arc',
  description:
    'Growth Arc Privacy Policy. How we collect, use, store, and protect your personal information in accordance with the New Zealand Privacy Act 2020.',
  openGraph: {
    title: 'Privacy Policy — Growth Arc',
    description:
      'How we collect, use, store, and protect your personal information.',
    url: 'https://growtharc.ai/privacy',
    siteName: 'Growth Arc',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--ga-navy)]">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg text-white/50">
                Growth Arc &mdash; A trading name of NextGen AI Marketing Ltd
              </p>
              <p className="mt-2 text-sm text-white/30">
                Effective Date: 2 March 2026 | Last Updated: 2 March 2026
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="space-y-12 text-base leading-relaxed text-white/60">
                {/* 1 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">1. Introduction</h2>
                  <p>
                    Growth Arc (operated by NextGen AI Marketing Ltd, NZBN 9429052722073) is committed
                    to protecting your personal information in accordance with the New Zealand Privacy
                    Act 2020, the Privacy Amendment Act 2025, and the 13 Information Privacy Principles
                    (IPPs).
                  </p>
                  <p className="mt-3">
                    This Privacy Policy explains how we collect, use, store, disclose, and protect
                    personal information when you visit our website (growtharc.ai), use our services,
                    or interact with us in any way.
                  </p>
                  <p className="mt-3">
                    <strong className="text-white/80">Privacy Officer:</strong> Amrit Sandhu,{' '}
                    <a href="mailto:amrit@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                      amrit@growtharc.ai
                    </a>
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">2. Information We Collect</h2>

                  <h3 className="mb-2 text-lg font-medium text-white/80">2.1 Information You Provide Directly</h3>
                  <p>
                    When you interact with us through our website contact form, email, or other
                    channels, we may collect your name, email address, company name, phone number,
                    the service you are interested in, and any message or enquiry details you provide.
                  </p>

                  <h3 className="mb-2 mt-6 text-lg font-medium text-white/80">2.2 Information Collected Automatically</h3>
                  <p>
                    When you visit growtharc.ai, we automatically collect certain technical information
                    including your IP address, browser type and version, device type, operating system,
                    pages visited and time spent on each page, referring website, and approximate
                    geographic location (country/region level only).
                  </p>

                  <h3 className="mb-2 mt-6 text-lg font-medium text-white/80">2.3 Cookies and Tracking Technologies</h3>
                  <p>We use the following third-party services that may place cookies on your device:</p>
                  <ul className="mt-3 list-disc space-y-3 pl-6">
                    <li>
                      <strong className="text-white/80">Google Analytics 4 (GA4):</strong> We use GA4
                      to understand how visitors use our website. GA4 collects anonymised usage data
                      including page views, scroll depth, outbound clicks, and session duration. GA4
                      data is processed by Google LLC. For more information, see Google&apos;s Privacy
                      Policy.
                    </li>
                    <li>
                      <strong className="text-white/80">HubSpot Tracking:</strong> We use HubSpot&apos;s
                      tracking code to understand visitor behaviour and connect website activity to CRM
                      records when you submit an enquiry. HubSpot is operated by HubSpot, Inc. For
                      more information, see HubSpot&apos;s Privacy Policy.
                    </li>
                  </ul>
                  <p className="mt-3">
                    You can manage or disable cookies through your browser settings. Disabling cookies
                    may affect your experience on our website.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">3. How We Use Your Information</h2>
                  <p>
                    In accordance with IPP 10 (Limits on Use of Personal Information), we only use
                    your personal information for the purposes for which it was collected, or for
                    directly related purposes. Specifically, we use your information to:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Respond to your enquiries and provide the services you request</li>
                    <li>Communicate with you about our services (including follow-ups and proposals)</li>
                    <li>Improve our website and user experience</li>
                    <li>Analyse website traffic and usage patterns</li>
                    <li>Comply with our legal obligations</li>
                    <li>Protect our legitimate business interests</li>
                  </ul>
                </div>

                {/* 4 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">4. Legal Basis for Collection</h2>
                  <p>
                    Under IPP 1 (Purpose of Collection), we only collect personal information for a
                    lawful purpose connected to our business functions and where collection is necessary
                    for that purpose.
                  </p>
                  <p className="mt-3">
                    Under IPP 3 (Collection of Information from Subject), wherever possible we collect
                    personal information directly from you. Under IPP 3A (Notification of Collection
                    from Third Parties), introduced by the Privacy Amendment Act 2025, if we collect
                    your information from a third party, we will take reasonable steps to notify you.
                  </p>
                  <p className="mt-3">
                    Under IPP 4 (Manner of Collection), we collect information by lawful means that
                    are fair and do not unreasonably intrude upon your personal affairs.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">5. Disclosure of Your Information</h2>
                  <p>
                    In accordance with IPP 11 (Limits on Disclosure), we do not sell, rent, or trade
                    your personal information. We may share your information with trusted third-party
                    service providers who assist us in operating our business, specifically:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Google LLC (analytics)</li>
                    <li>HubSpot Inc (CRM and marketing)</li>
                    <li>Vercel Inc (website hosting)</li>
                  </ul>
                  <p className="mt-3">
                    These providers are contractually required to protect your information and may only
                    use it for the purposes we specify.
                  </p>
                  <p className="mt-3">
                    Under IPP 12 (Disclosure of Personal Information Outside New Zealand), if your
                    information is transferred outside New Zealand, we will ensure the recipient is
                    subject to comparable privacy safeguards as required by Schedule 8 of the Privacy
                    Act 2020.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">6. Data Security</h2>
                  <p>
                    In accordance with IPP 5 (Storage and Security), we take reasonable steps to
                    protect your personal information from loss, unauthorised access, use, modification,
                    or disclosure. Our security measures include:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>HTTPS/TLS encryption on all website communications</li>
                    <li>Secure access controls for our CRM and business systems</li>
                    <li>Regular review of data handling practices</li>
                    <li>Limiting access to personal information to authorised personnel only</li>
                  </ul>
                </div>

                {/* 7 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">7. Data Retention</h2>
                  <p>
                    Under IPP 9 (Retention of Personal Information), we do not keep your personal
                    information for longer than is necessary for the purpose for which it was collected.
                    Contact and CRM records are retained for the duration of any business relationship
                    and for a reasonable period thereafter (typically up to 7 years for financial and
                    tax compliance purposes). Website analytics data is retained in anonymised form.
                  </p>
                </div>

                {/* 8 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">8. Your Rights</h2>
                  <p>Under the Privacy Act 2020, you have the following rights:</p>
                  <ul className="mt-3 list-disc space-y-3 pl-6">
                    <li>
                      <strong className="text-white/80">Right of Access (IPP 6):</strong> You have the
                      right to request access to the personal information we hold about you. We will
                      respond within 20 working days.
                    </li>
                    <li>
                      <strong className="text-white/80">Right of Correction (IPP 7):</strong> You have
                      the right to request correction of any personal information that is inaccurate,
                      incomplete, or misleading.
                    </li>
                    <li>
                      <strong className="text-white/80">Right to Complain:</strong> If you are not
                      satisfied with how we handle your personal information, you may lodge a complaint
                      with the Office of the Privacy Commissioner at{' '}
                      <a
                        href="https://www.privacy.org.nz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ga-blue)] hover:underline"
                      >
                        privacy.org.nz
                      </a>
                      .
                    </li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, please contact us at{' '}
                    <a href="mailto:amrit@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                      amrit@growtharc.ai
                    </a>
                    .
                  </p>
                </div>

                {/* 9 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">9. Privacy Breaches</h2>
                  <p>
                    In accordance with Part 6 of the Privacy Act 2020, if a privacy breach occurs that
                    is likely to cause serious harm to any affected individual, we will notify both the
                    affected individual(s) and the Office of the Privacy Commissioner as soon as
                    practicable.
                  </p>
                </div>

                {/* 10 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">10. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for
                    the privacy practices or content of those websites. We encourage you to read the
                    privacy policies of any third-party websites you visit.
                  </p>
                </div>

                {/* 11 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">11. Children&apos;s Privacy</h2>
                  <p>
                    Our services are not directed at individuals under the age of 16. We do not
                    knowingly collect personal information from children. If we become aware that we
                    have inadvertently collected personal information from a child, we will take steps
                    to delete it promptly.
                  </p>
                </div>

                {/* 12 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">12. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on
                    this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to
                    review this policy periodically.
                  </p>
                </div>

                {/* 13 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">13. Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or
                    our handling of your personal information, please contact us:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li><strong className="text-white/80">Privacy Officer:</strong> Amrit Sandhu</li>
                    <li>
                      <strong className="text-white/80">Email:</strong>{' '}
                      <a href="mailto:amrit@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                        amrit@growtharc.ai
                      </a>
                    </li>
                    <li><strong className="text-white/80">Website:</strong> growtharc.ai</li>
                    <li><strong className="text-white/80">Entity:</strong> NextGen AI Marketing Ltd (NZBN 9429052722073)</li>
                    <li><strong className="text-white/80">Location:</strong> New Zealand</li>
                  </ul>
                  <p className="mt-4">
                    Office of the Privacy Commissioner:{' '}
                    <a
                      href="https://www.privacy.org.nz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--ga-blue)] hover:underline"
                    >
                      www.privacy.org.nz
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  )
}
