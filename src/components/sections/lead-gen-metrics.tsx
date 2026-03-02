import { FadeIn } from '@/components/motion/fade-in'
import { Counter } from '@/components/motion/counter'

const metrics = [
  {
    value: 3,
    suffix: 'x',
    label: 'More Qualified Leads',
  },
  {
    value: 68,
    suffix: '%',
    label: 'Average Open Rate',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Reduction in CPL',
  },
  {
    value: 14,
    suffix: '',
    label: 'Days to First Booked Call',
  },
]

export function LeadGenMetrics() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Measurable{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Our AI-powered lead generation delivers results you can see in your
            pipeline — not vanity metrics.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                <p className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                  <Counter target={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-3 text-sm text-white/40">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
