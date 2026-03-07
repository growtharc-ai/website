'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Quiz data                                                           */
/* ------------------------------------------------------------------ */

const questions = [
  {
    question: 'How would you describe your current use of AI?',
    options: [
      "We don't use any AI tools",
      'We use basic AI tools (ChatGPT, Copilot etc.)',
      'We have some AI automation in place',
      'AI is integrated across multiple areas of our business',
    ],
  },
  {
    question: 'How do you currently handle customer enquiries?',
    options: [
      'Manually — email and phone only',
      'Basic contact form or ticketing system',
      'Live chat with human agents',
      'Some automation (chatbots or auto-responders)',
    ],
  },
  {
    question: 'How is your customer and sales data managed?',
    options: [
      'Spreadsheets or manual records',
      'Basic CRM (free tier or simple tool)',
      'Full CRM platform (HubSpot, Salesforce, Dynamics)',
      'CRM with automation and integrations',
    ],
  },
  {
    question: 'How much time does your team spend on repetitive admin tasks per week?',
    options: [
      '20+ hours',
      '10-20 hours',
      '5-10 hours',
      'Less than 5 hours',
    ],
  },
  {
    question: 'How do you currently create marketing content?',
    options: [
      "We don't do much marketing",
      'Manual — writing everything from scratch',
      'Some AI-assisted content creation',
      'Fully automated content pipeline',
    ],
  },
  {
    question: "What's your biggest operational challenge?",
    options: [
      'Too much manual work and admin',
      'Slow customer response times',
      'Inconsistent marketing and lead generation',
      'Lack of data visibility and reporting',
    ],
  },
  {
    question: "What's your budget appetite for AI solutions?",
    options: [
      'Exploring — no budget set yet',
      'Small — under $1,000/month',
      'Moderate — $1,000-$5,000/month',
      'Significant — $5,000+/month',
    ],
  },
]

type Band = {
  label: string
  description: string
  color: string
  ringColor: string
}

const bands: { max: number; band: Band }[] = [
  {
    max: 5,
    band: {
      label: 'AI Starter',
      description: 'Your business has huge untapped potential. AI could transform your operations.',
      color: 'text-red-400',
      ringColor: '#f87171',
    },
  },
  {
    max: 10,
    band: {
      label: 'AI Explorer',
      description: 'You\'ve started the journey. Strategic AI implementation could accelerate your growth significantly.',
      color: 'text-orange-400',
      ringColor: '#fb923c',
    },
  },
  {
    max: 15,
    band: {
      label: 'AI Adopter',
      description: 'You\'re ahead of most businesses. Targeted AI solutions could take you to the next level.',
      color: 'text-[var(--ga-blue)]',
      ringColor: '#0088FF',
    },
  },
  {
    max: 21,
    band: {
      label: 'AI Leader',
      description: 'You\'re already AI-forward. Advanced solutions like custom agents and automation could compound your advantage.',
      color: 'text-[var(--ga-green)]',
      ringColor: '#00DFAA',
    },
  },
]

function getBand(score: number): Band {
  return (bands.find((b) => score <= b.max) ?? bands[bands.length - 1]).band
}

type ReadinessResult = {
  readinessLevel: string
  score: number
  summary: string
  topOpportunities: { title: string; description: string }[]
  recommendedServices: { name: string; href: string }[]
  firstStep: string
}

/* ------------------------------------------------------------------ */
/* Score ring                                                          */
/* ------------------------------------------------------------------ */

function ScoreRing({ score, color }: { score: number; color: string }) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const pct = (animatedScore / 21) * 100
  // SVG circle: r=70, circumference=439.8
  const circumference = 2 * Math.PI * 70
  const offset = circumference - (pct / 100) * circumference

  useEffect(() => {
    let current = 0
    const step = score / (1200 / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= score) {
        current = score
        clearInterval(timer)
      }
      setAnimatedScore(Math.round(current))
    }, 16)
    return () => clearInterval(timer)
  }, [score])

  return (
    <div className="relative mx-auto h-48 w-48">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="8"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
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
        <span className="text-4xl font-bold">{animatedScore}</span>
        <span className="text-sm text-white/40">out of 21</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function AiReadinessQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [isCalculating, setIsCalculating] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [result, setResult] = useState<ReadinessResult | null>(null)
  const [error, setError] = useState('')

  // Lead capture
  const [leadName, setLeadName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadSubmitted, setLeadSubmitted] = useState(false)

  const resultsRef = useRef<HTMLDivElement>(null)

  const totalQuestions = questions.length
  const answered = answers.filter((a) => a >= 0).length
  const score = answers.reduce((sum, a) => sum + (a >= 0 ? a : 0), 0)
  const band = getBand(score)

  function selectAnswer(qIndex: number, optionIndex: number) {
    const newAnswers = [...answers]
    newAnswers[qIndex] = optionIndex
    setAnswers(newAnswers)

    // Auto-advance after short delay
    if (qIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentQ(qIndex + 1), 300)
    }
  }

  async function handleSubmit() {
    setError('')
    setIsCalculating(true)

    try {
      const res = await fetch('/api/ai-readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score,
          band: band.label,
          questions: questions.map((q) => q.question),
          answers: questions.map((q, i) => q.options[answers[i]] ?? 'Not answered'),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Something went wrong.' }))
        throw new Error(data.error || 'Something went wrong.')
      }

      const data: ReadinessResult = await res.json()
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
      formData.append('service', 'AI Readiness Quiz')
      formData.append(
        'message',
        `AI Readiness Assessment:\nScore: ${score}/21 (${band.label})\n\nAnswers:\n${questions.map((q, i) => `${q.question}\n→ ${q.options[answers[i]]}`).join('\n\n')}`
      )
      formData.append('website', '')
      formData.append('cf-turnstile-response', 'ai-readiness-quiz')

      fetch('/api/lead-capture', { method: 'POST', body: formData }).catch(() => {})
    } catch {
      // Silently fail
    }

    setLeadSubmitted(true)
  }

  const allAnswered = answered === totalQuestions

  return (
    <div className="px-6 pb-24">
      <div className="mx-auto max-w-2xl">
        {/* Quiz */}
        {!result && !isCalculating && (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/40">
                  Question {currentQ + 1} of {totalQuestions}
                </span>
                <span className="text-white/40">{Math.round((answered / totalQuestions) * 100)}% complete</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] transition-all duration-500"
                  style={{ width: `${(answered / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h2 className="text-xl font-semibold leading-snug">
                {questions[currentQ].question}
              </h2>

              <div className="mt-6 space-y-3">
                {questions[currentQ].options.map((option, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => selectAnswer(currentQ, optIdx)}
                    className={`w-full rounded-xl border px-5 py-4 text-left text-[15px] transition-all ${
                      answers[currentQ] === optIdx
                        ? 'border-[var(--ga-blue)]/50 bg-[var(--ga-blue)]/10 text-white'
                        : 'border-white/5 bg-white/[0.02] text-white/60 hover:border-white/10 hover:bg-white/[0.04]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                  disabled={currentQ === 0}
                  className="flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white disabled:opacity-20"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                {currentQ < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentQ(currentQ + 1)}
                    disabled={answers[currentQ] < 0}
                    className="flex items-center gap-2 text-sm font-medium text-[var(--ga-blue)] transition-colors hover:text-white disabled:opacity-20"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-30"
                  >
                    See My Results
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-400">{error}</p>
              )}
            </div>

            {/* Question dots */}
            <div className="mt-6 flex justify-center gap-2">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQ(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentQ
                      ? 'w-6 bg-[var(--ga-blue)]'
                      : answers[i] >= 0
                        ? 'w-2 bg-[var(--ga-green)]'
                        : 'w-2 bg-white/10'
                  }`}
                  aria-label={`Go to question ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Calculating */}
        {isCalculating && (
          <div className="flex flex-col items-center gap-4 py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[var(--ga-blue)]" />
            <p className="text-white/50">Analysing your responses...</p>
          </div>
        )}

        {/* Lead capture gate */}
        {showLeadCapture && !leadSubmitted && result && (
          <div ref={resultsRef} className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <div className="text-center">
              <ScoreRing score={score} color={band.ringColor} />
              <p className={`mt-4 text-2xl font-bold ${band.color}`}>{band.label}</p>
              <p className="mt-2 text-sm text-white/50">{band.description}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
              <p className="text-sm text-white/50">
                Enter your details to see your full personalised report with
                AI recommendations.
              </p>
            </div>

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
                See My Full Report
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

        {/* Full results */}
        {result && leadSubmitted && (
          <div ref={resultsRef} className="space-y-8">
            {/* Score */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
              <ScoreRing score={score} color={band.ringColor} />
              <p className={`mt-4 text-2xl font-bold ${band.color}`}>
                {result.readinessLevel || band.label}
              </p>
              <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-white/50">
                {result.summary}
              </p>
            </div>

            {/* Top opportunities */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Top 3 opportunities for your business
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {result.topOpportunities.map((opp, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                  >
                    <span className="mb-2 inline-block text-xs font-semibold text-[var(--ga-green)]">
                      #{i + 1}
                    </span>
                    <h4 className="text-sm font-semibold">{opp.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/40">
                      {opp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended services */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Recommended services
              </h3>
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

            {/* First step */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-3 text-lg font-semibold">Suggested first step</h3>
              <p className="text-[15px] leading-relaxed text-white/60">
                {result.firstStep}
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

            {/* Retake */}
            <button
              onClick={() => {
                setResult(null)
                setCurrentQ(0)
                setAnswers(Array(questions.length).fill(-1))
                setShowLeadCapture(false)
                setLeadSubmitted(false)
                setError('')
              }}
              className="w-full text-center text-sm text-white/30 transition-colors hover:text-white/50"
            >
              Retake the assessment
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
