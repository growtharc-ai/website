import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export function CTASection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24"
            style={{
              background:
                'linear-gradient(135deg, var(--ga-blue), var(--ga-green))',
            }}
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-[60px]" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Ready to Grow Faster?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Let&apos;s build an AI-powered marketing engine for your
                business. Book a free strategy call and see what&apos;s possible.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[var(--ga-navy)] transition-transform hover:scale-105"
              >
                Get Your Free Audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
