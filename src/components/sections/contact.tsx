import { Mail, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { ContactForm } from '@/components/contact-form'

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--ga-navy)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left column — info */}
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
                Get in Touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Let&apos;s Start{' '}
                <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                  Growing
                </span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                Tell us about your business and goals. We&apos;ll get back to
                you within 4 hours with a tailored plan.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-white/40">
                  <Mail className="h-5 w-5 text-[var(--ga-blue)]" />
                  <span>hello@growtharc.ai</span>
                </div>
                <div className="flex items-center gap-3 text-white/40">
                  <MapPin className="h-5 w-5 text-[var(--ga-blue)]" />
                  <span>New Zealand — Serving globally</span>
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
  )
}
