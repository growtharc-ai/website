'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Globe,
  Gauge,
  Search,
  Shield,
  Bot,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Monitor,
  Smartphone,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Category = {
  name: string
  score?: number
  mobileScore?: number
  desktopScore?: number
  status: 'good' | 'needs-work' | 'critical'
  findings: string[]
}

type AuditResult = {
  overallScore: number
  categories: Category[]
  coreWebVitals: {
    fcp: string
    lcp: string
    tbt: string
    cls: string
    speedIndex: string
  }
  topPriorities: string[]
  recommendedServices: { name: string; href: string }[]
  summary: string
  rawPSI?: {
    mobile: { performanceScore: number }
    desktop: { performanceScore: number }
  }
}

/* ------------------------------------------------------------------ */
/* Score ring                                                          */
/* ------------------------------------------------------------------ */

function ScoreRing({
  score,
  size = 120,
  label,
}: {
  score: number
  size?: number
  label?: string
}) {
  const [animated, setAnimated] = useState(0)
  const r = (size - 12) / 2
  const circumference = 2 * Math.PI * r

  useEffect(() => {
    let current = 0
    const step = score / (1000 / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= score) {
        current = score
        clearInterval(timer)
      }
      setAnimated(Math.round(current))
    }, 16)
    return () => clearInterval(timer)
  }, [score])

  const offset = circumference - (animated / 100) * circumference
  const color =
    score >= 90
      ? '#00DFAA'
      : score >= 50
        ? '#fb923c'
        : '#f87171'

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="8"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>{animated}</span>
        </div>
      </div>
      {label && <span className="mt-2 text-xs text-white/40">{label}</span>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Status badge                                                        */
/* ------------------------------------------------------------------ */

function StatusBadge({ status }: { status: string }) {
  if (status === 'good')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
        <CheckCircle2 className="h-3 w-3" /> Good
      </span>
    )
  if (status === 'needs-work')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-orange-400">
        <AlertTriangle className="h-3 w-3" /> Needs Work
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-red-400">
      <XCircle className="h-3 w-3" /> Critical
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* CWV pass/fail                                                       */
/* ------------------------------------------------------------------ */

function CwvMetric({ label, value }: { label: string; value: string }) {
  // Simple heuristic: parse numeric portion and assess
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''))
  let isGood = true
  if (label === 'FCP' && numericPart > 1.8) isGood = false
  if (label === 'LCP' && numericPart > 2.5) isGood = false
  if (label === 'TBT' && numericPart > 200) isGood = false
  if (label === 'CLS' && numericPart > 0.1) isGood = false
  if (label === 'SI' && numericPart > 3.4) isGood = false

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
      <p className="text-xs text-white/30">{label}</p>
      <p className={`mt-1 text-lg font-bold ${isGood ? 'text-emerald-400' : 'text-orange-400'}`}>
        {value}
      </p>
      <p className={`mt-1 text-[10px] font-semibold ${isGood ? 'text-emerald-400/60' : 'text-orange-400/60'}`}>
        {isGood ? 'PASS' : 'NEEDS WORK'}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Category icon                                                       */
/* ------------------------------------------------------------------ */

const categoryIcons: Record<string, typeof Gauge> = {
  Performance: Gauge,
  SEO: Search,
  Accessibility: Shield,
  'Best Practices': Globe,
  'AI-Readiness': Bot,
}

/* ------------------------------------------------------------------ */
/* Progress stages                                                     */
/* ------------------------------------------------------------------ */

const stages = [
  'Scanning website...',
  'Analysing performance...',
  'Checking SEO...',
  'Generating recommendations...',
]

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function WebsiteAudit() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [stageIdx, setStageIdx] = useState(0)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [error, setError] = useState('')
  const resultsRef = useRef<HTMLDivElement>(null)

  // Cycle through progress stages
  useEffect(() => {
    if (!isLoading) return
    setStageIdx(0)
    const timer = setInterval(() => {
      setStageIdx((prev) => (prev < stages.length - 1 ? prev + 1 : prev))
    }, 4000)
    return () => clearInterval(timer)
  }, [isLoading])

  async function handleAudit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setError('')
    setResult(null)
    setIsLoading(true)

    try {
      const res = await fetch('/api/website-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Something went wrong.' }))
        throw new Error(data.error || 'Something went wrong.')
      }

      const data: AuditResult = await res.json()
      setResult(data)

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-6 pb-24">
      <div className="mx-auto max-w-3xl">
        {/* URL input */}
        <form onSubmit={handleAudit} className="mb-12">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Globe className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your website URL (e.g. example.com)"
                disabled={isLoading}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[var(--ga-blue)]/40 disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={!url.trim() || isLoading}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-40"
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              {isLoading ? 'Auditing...' : 'Audit My Site'}
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        </form>

        {/* Loading stages */}
        {isLoading && (
          <div className="mb-12 flex flex-col items-center gap-6 py-10">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-[var(--ga-blue)]" />
            <div className="space-y-3 text-center">
              {stages.map((stage, i) => (
                <p
                  key={stage}
                  className={`text-sm transition-all duration-500 ${
                    i < stageIdx
                      ? 'text-[var(--ga-green)]'
                      : i === stageIdx
                        ? 'text-white'
                        : 'text-white/20'
                  }`}
                >
                  {i < stageIdx ? '✓ ' : i === stageIdx ? '→ ' : '  '}
                  {stage}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div ref={resultsRef} className="space-y-8">
            {/* Overall score + mobile/desktop */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                <ScoreRing score={result.overallScore} size={140} label="Overall Score" />
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Smartphone className="h-4 w-4 text-white/30" />
                    <ScoreRing
                      score={result.rawPSI?.mobile?.performanceScore ?? result.categories.find(c => c.name === 'Performance')?.mobileScore ?? 0}
                      size={90}
                      label="Mobile"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Monitor className="h-4 w-4 text-white/30" />
                    <ScoreRing
                      score={result.rawPSI?.desktop?.performanceScore ?? result.categories.find(c => c.name === 'Performance')?.desktopScore ?? 0}
                      size={90}
                      label="Desktop"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-[15px] leading-relaxed text-white/50">
                {result.summary}
              </p>
            </div>

            {/* Core Web Vitals */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Core Web Vitals</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                <CwvMetric label="FCP" value={result.coreWebVitals.fcp} />
                <CwvMetric label="LCP" value={result.coreWebVitals.lcp} />
                <CwvMetric label="TBT" value={result.coreWebVitals.tbt} />
                <CwvMetric label="CLS" value={result.coreWebVitals.cls} />
                <CwvMetric label="SI" value={result.coreWebVitals.speedIndex} />
              </div>
            </div>

            {/* Category breakdowns */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Detailed Analysis</h3>
              <div className="space-y-4">
                {result.categories.map((cat) => {
                  const Icon = categoryIcons[cat.name] ?? Globe
                  return (
                    <div
                      key={cat.name}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-[var(--ga-blue)]" />
                          <h4 className="font-semibold">{cat.name}</h4>
                          {cat.mobileScore !== undefined && cat.desktopScore !== undefined ? (
                            <span className="text-xs text-white/30">
                              Mobile {cat.mobileScore} / Desktop {cat.desktopScore}
                            </span>
                          ) : cat.score !== undefined ? (
                            <span className="text-xs text-white/30">{cat.score}/100</span>
                          ) : null}
                        </div>
                        <StatusBadge status={cat.status} />
                      </div>
                      <ul className="mt-4 space-y-2">
                        {cat.findings.map((finding, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-[14px] leading-relaxed text-white/50"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Top priorities */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 text-lg font-semibold">Top Priorities</h3>
              <ol className="space-y-3">
                {result.topPriorities.map((priority, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-white/50">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    {priority}
                  </li>
                ))}
              </ol>
            </div>

            {/* Recommended services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Recommended Services</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {result.recommendedServices.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[var(--ga-blue)]/25 hover:bg-white/[0.04]"
                  >
                    <span className="text-sm font-semibold">{service.name}</span>
                    <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-medium text-[var(--ga-blue)] opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              >
                Get Help Fixing These Issues
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

            {/* Audit again */}
            <button
              onClick={() => {
                setResult(null)
                setUrl('')
                setError('')
              }}
              className="w-full text-center text-sm text-white/30 transition-colors hover:text-white/50"
            >
              Audit a different website
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
