import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ background: 'linear-gradient(135deg, var(--ga-blue), var(--ga-green))' }}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-[60px] md:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-[40px] md:blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Grow Faster?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Let&apos;s build an AI-powered growth engine for your
            business. Book a free strategy call and see what&apos;s possible.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[var(--ga-navy)] transition-transform hover:scale-105"
          >
            Get Your Free Audit
            <ArrowRight className="h-4 w-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
