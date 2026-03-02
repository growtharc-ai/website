import { ArrowRight, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const proofPoints = [
  'No long-term contracts — month-to-month',
  'Leads delivered directly to your CRM',
  'Dedicated strategist for your account',
  'Full transparency on performance metrics',
]

export function LeadGenCTA() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24"
            style={{
              background:
                'linear-gradient(135deg, var(--ga-blue), var(--ga-green))',
            }}
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-[60px]" />

            <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Ready to Fill Your Pipeline?
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Book a free strategy call and we&apos;ll show you exactly how
                  our AI lead generation engine can work for your business.
                </p>
                <ul className="mt-8 space-y-3">
                  {proofPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-white/70" />
                      <span className="text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-right">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[var(--ga-navy)] transition-transform hover:scale-105"
                >
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-sm text-white/60">
                  No commitment required. See results in 14 days.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
