import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Phone,
  MessageSquare,
  FileText,
  ShieldCheck,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Contact — Growth Arc',
  description:
    'Get in touch with Growth Arc. Tell us about your business goals and we\'ll get back to you within 4 hours with a tailored AI marketing strategy.',
  openGraph: {
    title: 'Contact — Growth Arc',
    description:
      'Get in touch with Growth Arc. Tell us about your goals and we\'ll reply within 4 hours.',
    url: 'https://growtharc.ai/contact',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Contact Us',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const expectations = [
  {
    icon: Clock,
    title: 'We Reply in 24 Hours',
    description:
      'Every enquiry gets a personal response from our team — no bots, no generic auto-replies.',
    tint: 'blue' as const,
  },
  {
    icon: Phone,
    title: 'Free Strategy Call',
    description:
      'We\'ll schedule a 30-minute call to understand your business, goals, and current marketing setup.',
    tint: 'green' as const,
  },
  {
    icon: FileText,
    title: 'Custom Proposal',
    description:
      'You\'ll receive a tailored plan with clear deliverables, timelines, and transparent pricing.',
    tint: 'blue' as const,
  },
  {
    icon: ShieldCheck,
    title: 'No Lock-In Contracts',
    description:
      'We earn your business every month. No long-term commitments, no hidden fees, cancel anytime.',
    tint: 'green' as const,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative flex min-h-[50vh] items-center overflow-hidden px-6 pt-32 pb-20"
          style={{
            background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)',
          }}
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--ga-blue)]/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[var(--ga-green)]/8 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 uppercase">
                <Mail className="h-3.5 w-3.5 text-[var(--ga-green)]" />
                Get in Touch
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="mt-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                style={{ lineHeight: 1.1, letterSpacing: '-1.5px' }}
              >
                Let&apos;s Start{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Growing
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
                Tell us about your business and goals. We&apos;ll get back to
                you within 4 hours with a tailored plan to accelerate your
                growth.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── Contact Form + Info ─── */}
        <section
          className="px-6 py-24 md:py-32"
          style={{
            background: 'linear-gradient(180deg, #0A0F20 0%, #07080E 100%)',
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Left column — info */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                    Contact Details
                  </p>
                  <h2
                    className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
                    style={{ letterSpacing: '-0.5px' }}
                  >
                    Reach Out{' '}
                    <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                      Anytime
                    </span>
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/50">
                    Whether you&apos;re looking to supercharge your lead
                    generation, automate your sales pipeline, or scale with AI
                    — we&apos;re here to help.
                  </p>

                  <div className="mt-10 space-y-5">
                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
                        <Mail className="h-5 w-5 text-[var(--ga-blue)]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/30 uppercase">
                          Email
                        </p>
                        <p className="text-sm">hello@growtharc.ai</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
                        <MapPin className="h-5 w-5 text-[var(--ga-blue)]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/30 uppercase">
                          Location
                        </p>
                        <p className="text-sm">New Zealand — Serving globally</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ga-green)]/10">
                        <Clock className="h-5 w-5 text-[var(--ga-green)]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/30 uppercase">
                          Response Time
                        </p>
                        <p className="text-sm">Within 4 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white/50">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ga-green)]/10">
                        <MessageSquare className="h-5 w-5 text-[var(--ga-green)]" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/30 uppercase">
                          Socials
                        </p>
                        <div className="flex gap-3 text-sm">
                          <a
                            href="https://www.linkedin.com/company/growtharc-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
                          >
                            LinkedIn
                          </a>
                          <a
                            href="https://instagram.com/growtharc.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
                          >
                            Instagram
                          </a>
                          <a
                            href="https://x.com/growtharc_ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
                          >
                            X
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right column — form */}
              <div className="lg:col-span-3">
                <FadeIn delay={0.15}>
                  <ContactForm />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What to Expect ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-center text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                What to Expect
              </p>
              <h2
                className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl"
                style={{ letterSpacing: '-0.5px' }}
              >
                What Happens{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Next
                </span>
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {expectations.map((item) => (
                <StaggerItem key={item.title}>
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/5 p-7 ${
                      item.tint === 'blue'
                        ? 'bg-[var(--ga-blue)]/[0.03]'
                        : 'bg-[var(--ga-green)]/[0.03]'
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        item.tint === 'blue'
                          ? 'bg-[var(--ga-blue)]/10'
                          : 'bg-[var(--ga-green)]/10'
                      }`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.tint === 'blue'
                            ? 'text-[var(--ga-blue)]'
                            : 'text-[var(--ga-green)]'
                        }`}
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-6 py-24 md:py-32 bg-[#07080E]">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-lg text-white/50">
                Not sure what you need?
              </p>
              <Link
                href="/#services"
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent transition-opacity hover:opacity-80"
              >
                Explore our services
                <ArrowRight className="h-5 w-5 text-[var(--ga-green)]" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
