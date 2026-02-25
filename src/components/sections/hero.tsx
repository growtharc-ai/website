import { FadeIn } from '@/components/motion/fade-in'

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background: 'linear-gradient(160deg, #060710 0%, #0A0F20 100%)',
      }}
    >
      {/* Ambient glow — large blurred gradient circles */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0077EE]/15 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-[#00C896]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[#0077EE]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-1.5px]">
            AI-Powered Marketing
            <br />
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              That Scales
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed md:text-xl">
            We help businesses grow faster with intelligent lead generation,
            sales automation, and data-driven marketing strategy.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0077EE]/20 transition-transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/10 px-8 py-3.5 text-base font-semibold text-white/70 transition-all hover:border-white/25 hover:text-white"
            >
              Our Services
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.35} className="absolute right-0 bottom-0 left-0">
        <div className="border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/5 px-6 py-8">
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                AI-First
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                Strategy &amp; Execution
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                Full-Funnel
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                Lead to Close
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                Always-On
              </p>
              <p className="mt-1 text-xs text-white/35 md:text-sm">
                24/7 Automation
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
