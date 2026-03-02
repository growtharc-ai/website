import { Users } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'

export function LeadGenHero() {
  return (
    <section
      className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
      style={{
        background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)',
      }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-[40%] left-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0077EE]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-[35%] left-[60%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C896]/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
            <Users className="h-4 w-4 text-[var(--ga-green)]" />
            <span className="text-sm font-medium text-white/70">
              AI Lead Generation
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-1.5px]">
            Fill Your Pipeline with
            <br />
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Qualified Opportunities
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed md:text-xl">
            Our AI identifies, engages, and qualifies your ideal prospects
            automatically — so your team only talks to leads ready to buy.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0077EE]/20 transition-transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/#services"
              className="rounded-full border border-white/10 px-8 py-3.5 text-base font-semibold text-white/70 transition-all hover:border-white/25 hover:text-white"
            >
              View All Services
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.4} className="absolute right-0 bottom-0 left-0">
        <div className="border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/5 px-6 py-8">
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                AI-Scored
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                Lead Qualification
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                Multi-Channel
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                Outreach Engine
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                Always-On
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                24/7 Prospecting
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
