import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { FadeIn } from '@/components/motion/fade-in'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Growth Arc',
  description:
    'Growth Arc Terms of Service. Terms governing your use of growtharc.ai and our AI-powered marketing services.',
  openGraph: {
    title: 'Terms of Service — Growth Arc',
    description:
      'Terms governing your use of growtharc.ai and our services.',
    url: 'https://growtharc.ai/terms',
    siteName: 'Growth Arc',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--ga-navy)]">
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-lg text-white/50">
                Growth Arc &mdash; A trading name of NextGen AI Marketing Ltd
              </p>
              <p className="mt-2 text-sm text-white/30">
                Effective Date: 2 March 2026
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
                  <h2 className="mb-4 text-xl font-semibold text-white">1. Agreement to Terms</h2>
                  <p>
                    These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
                    website growtharc.ai (&ldquo;Website&rdquo;) and any services provided by Growth
                    Arc, a trading name of NextGen AI Marketing Ltd (NZBN 9429052722073) (&ldquo;we&rdquo;,
                    &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                  </p>
                  <p className="mt-3">
                    By accessing our Website or engaging our services, you agree to be bound by these
                    Terms. If you do not agree with any part of these Terms, you must not use our
                    Website or services.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">2. About Us</h2>
                  <ul className="space-y-2">
                    <li><strong className="text-white/80">Legal Entity:</strong> NextGen AI Marketing Ltd</li>
                    <li><strong className="text-white/80">Trading As:</strong> Growth Arc</li>
                    <li><strong className="text-white/80">NZBN:</strong> 9429052722073</li>
                    <li><strong className="text-white/80">Location:</strong> New Zealand</li>
                    <li>
                      <strong className="text-white/80">Contact:</strong>{' '}
                      <a href="mailto:hello@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                        hello@growtharc.ai
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 3 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">3. Our Services</h2>
                  <p>
                    Growth Arc provides AI-powered marketing services including, but not limited to,
                    AI lead generation, traffic and SEO, sales automation, smart appointment booking,
                    ads management, and analytics and reporting.
                  </p>
                  <p className="mt-3">
                    The specific scope, deliverables, timelines, and fees for any engagement will be
                    set out in a separate service agreement or statement of work between you and Growth
                    Arc. These Terms apply in addition to any such agreement.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">4. Consumer Guarantees Act 1993</h2>
                  <p>
                    If you are acquiring our services for personal, domestic, or household use, you
                    have rights under the Consumer Guarantees Act 1993 (CGA) that cannot be excluded,
                    restricted, or modified by these Terms. Our services come with guarantees that
                    cannot be excluded under New Zealand consumer law, including that:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Services will be carried out with reasonable care and skill</li>
                    <li>Services will be fit for the particular purpose communicated to us</li>
                    <li>Services will be provided within a reasonable time (if no time is agreed)</li>
                  </ul>
                  <p className="mt-3">
                    Nothing in these Terms is intended to limit any rights you may have under the CGA
                    or the Fair Trading Act 1986.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">5. Website Use</h2>
                  <p>
                    You may use our Website for lawful purposes only. You agree not to use our Website
                    in any way that:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Breaches any applicable New Zealand law or regulation</li>
                    <li>Is fraudulent or deceptive</li>
                    <li>Involves the transmission of unsolicited or unauthorised advertising</li>
                    <li>Attempts to gain unauthorised access to our systems</li>
                    <li>Could damage, disable, or impair the Website</li>
                  </ul>
                  <p className="mt-3">
                    We reserve the right to restrict or terminate your access to the Website at any
                    time if we reasonably believe you are in breach of these Terms.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">6. Intellectual Property</h2>
                  <p>
                    All content on the Website, including text, graphics, logos, images, software, and
                    design elements, is owned by or licensed to NextGen AI Marketing Ltd and is
                    protected by New Zealand and international intellectual property laws, including
                    the Copyright Act 1994 and the Trade Marks Act 2002.
                  </p>
                  <p className="mt-3">
                    You may not reproduce, distribute, modify, or create derivative works from any
                    content on our Website without our prior written consent. The Growth Arc name and
                    logo are trademarks of NextGen AI Marketing Ltd. Unauthorised use is prohibited.
                  </p>
                </div>

                {/* 7 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">7. Contact Form and Communications</h2>
                  <p>
                    When you submit an enquiry through our Website contact form, you consent to us
                    storing your information in our customer relationship management system (HubSpot)
                    and contacting you in response to your enquiry. We will handle your personal
                    information in accordance with our{' '}
                    <Link href="/privacy" className="text-[var(--ga-blue)] hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and the Privacy Act 2020.
                  </p>
                  <p className="mt-3">
                    By providing your email address, you consent to receiving communications from us
                    related to your enquiry. You may opt out of any marketing communications at any
                    time by contacting us at{' '}
                    <a href="mailto:hello@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                      hello@growtharc.ai
                    </a>
                    .
                  </p>
                </div>

                {/* 8 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">8. Disclaimers</h2>
                  <p>
                    Subject to your rights under the Consumer Guarantees Act 1993, our Website is
                    provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we
                    endeavour to keep the Website operational and accurate, we do not warrant that:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>The Website will be uninterrupted, error-free, or free of viruses or other harmful components</li>
                    <li>Any defects will be corrected</li>
                    <li>The content on the Website is complete, accurate, or up to date</li>
                  </ul>
                  <p className="mt-3">
                    Any results, case studies, or performance metrics mentioned on our Website are
                    illustrative and do not guarantee similar outcomes. Marketing results vary depending
                    on industry, market conditions, budget, and other factors.
                  </p>
                </div>

                {/* 9 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">9. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by New Zealand law, and subject to Section 4
                    (Consumer Guarantees Act) of these Terms, NextGen AI Marketing Ltd shall not be
                    liable for any indirect, incidental, special, consequential, or punitive damages,
                    or any loss of profits, revenue, data, or business opportunities arising from your
                    use of the Website or our services.
                  </p>
                  <p className="mt-3">
                    Our total liability for any claim arising under or in connection with these Terms
                    shall not exceed the total fees paid by you to Growth Arc in the 12 months
                    preceding the claim.
                  </p>
                  <p className="mt-3">
                    Nothing in these Terms excludes or limits liability for death or personal injury
                    caused by negligence, fraud or fraudulent misrepresentation, or any liability that
                    cannot be excluded or limited under New Zealand law.
                  </p>
                </div>

                {/* 10 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">10. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless NextGen AI Marketing Ltd, its directors,
                    employees, and agents from any claims, losses, damages, liabilities, and expenses
                    (including legal costs) arising from your breach of these Terms, your use of the
                    Website or services, or your violation of any applicable law or the rights of a
                    third party.
                  </p>
                </div>

                {/* 11 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">11. Electronic Communications</h2>
                  <p>
                    We comply with the Unsolicited Electronic Messages Act 2007 (New Zealand). We will
                    not send you unsolicited commercial electronic messages without your consent. All
                    marketing communications will include a clear mechanism to unsubscribe or opt out.
                  </p>
                </div>

                {/* 12 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">12. Governing Law and Disputes</h2>
                  <p>
                    These Terms are governed by the laws of New Zealand. Any disputes arising from or
                    in connection with these Terms shall be subject to the exclusive jurisdiction of
                    the courts of New Zealand.
                  </p>
                  <p className="mt-3">
                    In the event of a dispute, the parties agree to first attempt to resolve the matter
                    through good-faith negotiation. If the dispute cannot be resolved through
                    negotiation within 30 days, either party may refer the matter to mediation before
                    pursuing court proceedings. For claims within the jurisdiction of the Disputes
                    Tribunal of New Zealand, either party may refer the matter to the Tribunal.
                  </p>
                </div>

                {/* 13 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">13. Third-Party Links</h2>
                  <p>
                    Our Website may contain links to third-party websites or services. We do not
                    control, endorse, or assume responsibility for the content, privacy policies, or
                    practices of any third-party websites. You access third-party websites at your own
                    risk.
                  </p>
                </div>

                {/* 14 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">14. Modifications to These Terms</h2>
                  <p>
                    We reserve the right to update or modify these Terms at any time. Changes will be
                    effective when posted on this page with an updated effective date. Your continued
                    use of the Website after any changes constitutes acceptance of the revised Terms.
                  </p>
                  <p className="mt-3">
                    For material changes that significantly affect your rights, we will make reasonable
                    efforts to provide notice (such as posting a prominent notice on our Website).
                  </p>
                </div>

                {/* 15 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">15. Severability</h2>
                  <p>
                    If any provision of these Terms is found to be invalid or unenforceable by a court
                    of competent jurisdiction, that provision shall be modified to the minimum extent
                    necessary to make it valid and enforceable, and the remaining provisions shall
                    continue in full force and effect.
                  </p>
                </div>

                {/* 16 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">16. Entire Agreement</h2>
                  <p>
                    These Terms, together with our{' '}
                    <Link href="/privacy" className="text-[var(--ga-blue)] hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and any separate service agreement, constitute the entire agreement between you and
                    Growth Arc regarding your use of the Website and services.
                  </p>
                </div>

                {/* 17 */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">17. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <strong className="text-white/80">Email:</strong>{' '}
                      <a href="mailto:hello@growtharc.ai" className="text-[var(--ga-blue)] hover:underline">
                        hello@growtharc.ai
                      </a>
                    </li>
                    <li><strong className="text-white/80">Website:</strong> growtharc.ai</li>
                    <li><strong className="text-white/80">Entity:</strong> NextGen AI Marketing Ltd (NZBN 9429052722073)</li>
                    <li><strong className="text-white/80">Location:</strong> New Zealand</li>
                  </ul>
                  <p className="mt-6 text-sm text-white/30">
                    &copy; 2026 NextGen AI Marketing Ltd. Trading as Growth Arc. All rights reserved.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
