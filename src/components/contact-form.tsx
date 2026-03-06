'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { submitContactForm } from '@/app/actions/hubspot'

const serviceOptions = [
  'AI Agents',
  'AI Chatbots',
  'AI Virtual Assistants',
  'AI Customer Service & Support',
  'AI Content Creation & Management',
  'AI Strategy & Consulting',
  'AI Lead Generation',
  'Traffic & SEO',
  'Sales Automation',
  'Smart Appointment Booking',
  'Ads Management',
  'Analytics & Reporting',
  'CRM — Custom Build',
  'CRM — HubSpot',
  'CRM — Salesforce',
  'CRM — Microsoft Dynamics 365',
  'Website & App Development',
  'Data & Analytics / BI Dashboards',
  'Not Sure / Multiple',
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showTurnstile, setShowTurnstile] = useState(false)
  const turnstileRef = useRef<TurnstileInstance>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!formRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTurnstile(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(formRef.current)
    return () => observer.disconnect()
  }, [])

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--ga-green)]/20 bg-[var(--ga-green)]/5 p-10 text-center">
        <p className="text-2xl font-semibold text-white">Thanks!</p>
        <p className="mt-2 text-white/50">
          We&apos;ll be in touch within 4 hours.
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await submitContactForm(formData)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error)
      turnstileRef.current?.reset()
    }
    setSubmitting(false)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/60">
            Name <span className="text-[var(--ga-green)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={submitting}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-[var(--ga-blue)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--ga-blue)]/50 disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/60">
            Email <span className="text-[var(--ga-green)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={submitting}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-[var(--ga-blue)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--ga-blue)]/50 disabled:opacity-50"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white/60">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            disabled={submitting}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-[var(--ga-blue)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--ga-blue)]/50 disabled:opacity-50"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white/60">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            disabled={submitting}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white focus:border-[var(--ga-blue)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--ga-blue)]/50 disabled:opacity-50"
          >
            <option value="" className="bg-[#0D0F18]">
              Select a service...
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0D0F18]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/60">
          Message <span className="text-[var(--ga-green)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={submitting}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/25 focus:border-[var(--ga-blue)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--ga-blue)]/50 disabled:opacity-50"
          placeholder="Tell us about your goals..."
        />
      </div>

      {/* Honeypot — hidden from humans, visible to bots */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Cloudflare Turnstile — lazy loaded when form scrolls into view */}
      {showTurnstile && (
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          options={{ theme: 'dark' }}
        />
      )}

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
      >
        {submitting ? 'Sending...' : 'Send Message'}
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
      </button>
    </form>
  )
}
