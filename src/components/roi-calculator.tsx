'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  Clock,
  DollarSign,
  TrendingUp,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const industries = [
  'SaaS / Tech',
  'E-commerce',
  'Professional Services',
  'Manufacturing',
  'Healthcare',
  'Real Estate',
  'Finance',
  'Education',
  'Other',
]

const teamSizes = ['1-5', '6-15', '16-50', '51-200', '200+']

const revenueRanges = [
  'Under $10k',
  '$10k - $50k',
  '$50k - $200k',
  '$200k - $500k',
  '$500k+',
]

const solutionOptions = [
  'AI Agents',
  'AI Chatbots',
  'AI Virtual Assistants',
  'Customer Service AI',
  'Content Creation AI',
  'Marketing Automation',
  'CRM Implementation',
  'Website & App Development',
]

type ROIResult = {
  hoursSavedWeekly: number
  hoursSavedYearly: number
  costSavingsYearly: number
  productivityGainPercent: number
  topServices: { name: string; href: string }[]
  recommendation: string
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1500,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let start = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        start = value
        clearInterval(timer)
      }
      setDisplay(Math.round(start))
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Slider component                                                    */
/* ------------------------------------------------------------------ */

function Slider({
  label,
  value,
  onChange,
  max = 40,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  max?: number
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-[15px] text-white/70">{label}</label>
        <span className="text-sm font-semibold text-[var(--ga-green)]">
          {value} hrs/week
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-[var(--ga-blue)]"
      />
      <div className="mt-1 flex justify-between text-[11px] text-white/20">
        <span>0</span>
        <span>{max}</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function RoiCalculator() {
  const [step, setStep] = useState(1)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [result, setResult] = useState<ROIResult | null>(null)
  const [error, setError] = useState('')

  // Step 1
  const [industry, setIndustry] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [revenue, setRevenue] = useState('')

  // Step 2
  const [hoursAdmin, setHoursAdmin] = useState(10)
  const [hoursSupport, setHoursSupport] = useState(8)
  const [hoursMarketing, setHoursMarketing] = useState(6)
  const [hoursSales, setHoursSales] = useState(5)

  // Step 3
  const [interests, setInterests] = useState<string[]>([])

  // Lead capture
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadSubmitted, setLeadSubmitted] = useState(false)

  const resultsRef = useRef<HTMLDivElement>(null)

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  function canProceed() {
    if (step === 1) return industry && teamSize && revenue
    if (step === 2) return true
    if (step === 3) return interests.length > 0
    return false
  }

  async function handleCalculate() {
    setError('')
    setIsCalculating(true)

    try {
      const res = await fetch('/api/roi-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          teamSize,
          revenue,
          hoursAdmin,
          hoursSupport,
          hoursMarketing,
          hoursSales,
          interests,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Something went wrong.' }))
        throw new Error(data.error || 'Something went wrong.')
      }

      const data: ROIResult = await res.json()
      setResult(data)
      setShowLeadCapture(true)

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setIsCalculating(false)
    }
  }

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!leadName.trim() || !leadEmail.trim()) return

    try {
      const formData = new FormData()
      formData.append('name', leadName)
      formData.append('email', leadEmail)
      formData.append('company', '')
      formData.append('service', 'ROI Calculator')
      formData.append(
        'message',
        `ROI Calculator submission:\nIndustry: ${industry}\nTeam: ${teamSize}\nRevenue: ${revenue}\nAdmin: ${hoursAdmin}hrs, Support: ${hoursSupport}hrs, Marketing: ${hoursMarketing}hrs, Sales: ${hoursSales}hrs\nInterests: ${interests.join(', ')}\nEstimated savings: $${result?.costSavingsYearly?.toLocaleString()}/yr`
      )
      formData.append('website', '') // honeypot
      formData.append('cf-turnstile-response', 'roi-calculator') // skip turnstile for this flow

      // Fire and forget — don't block results
      fetch('/api/lead-capture', {
        method: 'POST',
        body: formData,
      }).catch(() => {})
    } catch {
      // Silently fail lead capture — don't block the user
    }

    setLeadSubmitted(true)
  }

  const stepLabels = ['Your Business', 'Current Operations', 'Your Interest']

  return (
    <div className="px-6 pb-24">
      <div className="mx-auto max-w-2xl">
        {/* Progress indicator */}
        {!result && (
          <div className="mb-10 flex items-center justify-center gap-2">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    step > i + 1
                      ? 'bg-[var(--ga-green)] text-white'
                      : step === i + 1
                        ? 'bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] text-white'
                        : 'bg-white/5 text-white/30'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden text-sm sm:block ${
                    step === i + 1 ? 'text-white' : 'text-white/30'
                  }`}
                >
                  {label}
                </span>
                {i < 2 && (
                  <div className="mx-2 h-px w-8 bg-white/10 sm:w-12" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 1 — Your Business */}
        {step === 1 && !result && (
          <div className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">Tell us about your business</h2>

            <div>
              <label className="mb-2 block text-sm text-white/50">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--ga-blue)]/40"
              >
                <option value="" className="bg-[#0D0F18]">Select your industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} className="bg-[#0D0F18]">
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/50">Team size</label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--ga-blue)]/40"
              >
                <option value="" className="bg-[#0D0F18]">Select team size</option>
                {teamSizes.map((size) => (
                  <option key={size} value={size} className="bg-[#0D0F18]">
                    {size} people
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/50">
                Monthly revenue range
              </label>
              <select
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--ga-blue)]/40"
              >
                <option value="" className="bg-[#0D0F18]">Select revenue range</option>
                {revenueRanges.map((range) => (
                  <option key={range} value={range} className="bg-[#0D0F18]">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!canProceed()}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-30"
            >
              Next: Current Operations
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Step 2 — Current Operations */}
        {step === 2 && !result && (
          <div className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">
              How much time does your team spend on these tasks?
            </h2>
            <p className="text-sm text-white/40">
              Drag the sliders to estimate weekly hours. Be honest — we&apos;ll use
              this to calculate realistic savings.
            </p>

            <div className="space-y-8 pt-2">
              <Slider
                label="Manual data entry & admin"
                value={hoursAdmin}
                onChange={setHoursAdmin}
              />
              <Slider
                label="Customer support enquiries"
                value={hoursSupport}
                onChange={setHoursSupport}
              />
              <Slider
                label="Marketing tasks (emails, social, content)"
                value={hoursMarketing}
                onChange={setHoursMarketing}
              />
              <Slider
                label="Sales follow-ups & CRM updates"
                value={hoursSales}
                onChange={setHoursSales}
              />
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-center">
              <p className="text-sm text-white/40">
                Total manual hours per week:{' '}
                <span className="font-semibold text-[var(--ga-green)]">
                  {hoursAdmin + hoursSupport + hoursMarketing + hoursSales} hours
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              >
                Next: Your Interest
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Your Interest */}
        {step === 3 && !result && (
          <div className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">
              Which AI solutions interest you?
            </h2>
            <p className="text-sm text-white/40">Select all that apply.</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {solutionOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleInterest(option)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    interests.includes(option)
                      ? 'border-[var(--ga-blue)]/50 bg-[var(--ga-blue)]/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-white/60 hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button
                onClick={handleCalculate}
                disabled={!canProceed() || isCalculating}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-40"
              >
                {isCalculating ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="h-4 w-4" />
                    Calculate My ROI
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Lead capture gate */}
        {showLeadCapture && !leadSubmitted && result && (
          <div ref={resultsRef} className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">Your results are ready!</h2>
            <p className="text-sm text-white/50">
              Enter your details to see your full personalised report.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--ga-blue)]/40"
              />
              <input
                type="email"
                placeholder="Your email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--ga-blue)]/40"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              >
                See My Results
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <button
              onClick={() => setLeadSubmitted(true)}
              className="w-full text-center text-xs text-white/20 transition-colors hover:text-white/40"
            >
              Skip for now
            </button>
          </div>
        )}

        {/* Results */}
        {result && leadSubmitted && (
          <div ref={resultsRef} className="space-y-8">
            {/* Stat cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                <Clock className="mx-auto mb-3 h-6 w-6 text-[var(--ga-blue)]" />
                <p className="text-3xl font-bold">
                  <AnimatedCounter value={result.hoursSavedWeekly} suffix=" hrs" />
                </p>
                <p className="mt-1 text-sm text-white/40">Saved per week</p>
                <p className="mt-0.5 text-xs text-white/25">
                  <AnimatedCounter value={result.hoursSavedYearly} suffix=" hrs" /> / year
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--ga-green)]/20 bg-[var(--ga-green)]/[0.04] p-6 text-center">
                <DollarSign className="mx-auto mb-3 h-6 w-6 text-[var(--ga-green)]" />
                <p className="text-3xl font-bold text-[var(--ga-green)]">
                  <AnimatedCounter
                    value={result.costSavingsYearly}
                    prefix="$"
                  />
                </p>
                <p className="mt-1 text-sm text-white/40">Estimated annual savings</p>
                <p className="mt-0.5 text-xs text-white/25">
                  Based on $35/hr avg cost
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                <TrendingUp className="mx-auto mb-3 h-6 w-6 text-[var(--ga-blue)]" />
                <p className="text-3xl font-bold">
                  <AnimatedCounter value={result.productivityGainPercent} suffix="%" />
                </p>
                <p className="mt-1 text-sm text-white/40">Productivity gain</p>
                <p className="mt-0.5 text-xs text-white/25">Across automated tasks</p>
              </div>
            </div>

            {/* Recommended services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Top 3 recommended services for your business
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {result.topServices.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[var(--ga-blue)]/25 hover:bg-white/[0.04]"
                  >
                    <span className="mb-2 text-xs font-semibold text-[var(--ga-green)]">
                      #{i + 1} Recommended
                    </span>
                    <span className="text-sm font-semibold">{service.name}</span>
                    <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-medium text-[var(--ga-blue)] opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommendation */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-3 text-lg font-semibold">Our recommendation</h3>
              <p className="text-[15px] leading-relaxed text-white/60">
                {result.recommendation}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector('[data-open-arc]')
                  if (el instanceof HTMLElement) el.click()
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                Ask Arc About Your Results
              </button>
            </div>

            {/* Recalculate */}
            <button
              onClick={() => {
                setResult(null)
                setStep(1)
                setShowLeadCapture(false)
                setLeadSubmitted(false)
                setError('')
              }}
              className="w-full text-center text-sm text-white/30 transition-colors hover:text-white/50"
            >
              Start over with different inputs
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
