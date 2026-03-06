import { Check, X } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

const rows = [
  {
    feature: 'AI-Powered Execution',
    traditional: 'Manual processes',
    growthArc: 'AI agents work 24/7',
  },
  {
    feature: 'CRM & Sales Integration',
    traditional: 'Separate vendors',
    growthArc: 'Built-in CRM solutions',
  },
  {
    feature: 'Custom AI Agents',
    traditional: 'Not available',
    growthArc: 'Purpose-built for your business',
  },
  {
    feature: 'Transparent Reporting',
    traditional: 'Monthly PDFs',
    growthArc: 'Real-time dashboards',
  },
  {
    feature: 'Tech Stack',
    traditional: 'Off-the-shelf tools',
    growthArc: 'Custom-built AI systems',
  },
  {
    feature: 'Scalability',
    traditional: 'More staff = more cost',
    growthArc: 'AI scales without headcount',
  },
  {
    feature: 'Contract Lock-in',
    traditional: '6–12 month contracts',
    growthArc: 'No lock-in, results-based',
  },
]

export function Comparison() {
  return (
    <section className="px-6 py-16 md:py-20" style={{ background: '#080A12' }}>
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            How We Compare
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            See Why Businesses Choose{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Growth Arc
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            See why businesses choose Growth Arc over traditional options.
          </p>
        </FadeIn>

        {/* Desktop table */}
        <FadeIn className="mt-8 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-white/5">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/5 bg-white/[0.02]">
              <div className="px-5 py-3.5" />
              <div className="border-x border-white/5 px-5 py-3.5 text-center">
                <p className="text-sm font-semibold text-white/30">Traditional Agency</p>
              </div>
              <div className="px-5 py-3.5 text-center">
                <p className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-sm font-semibold text-transparent">
                  Growth Arc
                </p>
              </div>
            </div>

            {/* Table rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? 'border-b border-white/5' : ''} transition-colors duration-200 hover:bg-white/[0.02]`}
              >
                <div className="flex items-center px-5 py-3">
                  <p className="text-sm font-medium text-white/70">{row.feature}</p>
                </div>
                <div className="flex items-center justify-center gap-2.5 border-x border-white/5 px-5 py-3">
                  <X className="h-4 w-4 shrink-0 text-red-400/50" />
                  <p className="text-sm text-white/30">{row.traditional}</p>
                </div>
                <div className="flex items-center justify-center gap-2.5 px-5 py-3">
                  <Check className="h-4 w-4 shrink-0 text-[var(--ga-green)]" />
                  <p className="text-sm text-white/60">{row.growthArc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mobile cards */}
        <div className="mt-8 flex flex-col gap-3 md:hidden">
          {rows.map((row) => (
            <FadeIn key={row.feature}>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <p className="text-sm font-semibold text-white/70">{row.feature}</p>
                <div className="mt-3 flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/50" />
                  <p className="text-sm text-white/30">{row.traditional}</p>
                </div>
                <div className="mt-2 flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ga-green)]" />
                  <p className="text-sm text-white/60">{row.growthArc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
