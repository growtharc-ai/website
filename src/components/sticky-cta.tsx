'use client'

import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'

export function StickyCTA() {
  const [pastHero, setPastHero] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    const contact = document.getElementById('contact')
    let observer: IntersectionObserver | undefined
    if (contact) {
      observer = new IntersectionObserver(
        ([entry]) => setContactInView(entry.isIntersecting),
        { threshold: 0.1 }
      )
      observer.observe(contact)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer?.disconnect()
    }
  }, [])

  const show = pastHero && !contactInView && !dismissed

  return (
    <>
      {/* Desktop — pill button, bottom-right */}
      <div
        className={`fixed bottom-8 right-8 z-40 hidden transition-all duration-300 md:block ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
      >
        <div className="flex items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-ga-blue to-ga-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--ga-blue)]/20"
          >
            <Calendar className="h-4 w-4" />
            Book a Free Call
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#0D0F18] text-white/50 transition-colors hover:bg-[#1a1d2e] hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Mobile — full-width bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 md:hidden ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`}
      >
        <div className="flex items-center bg-gradient-to-r from-ga-blue to-ga-green px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold text-white"
          >
            <Calendar className="h-4 w-4" />
            Book a Free Call
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="rounded-full p-1.5 transition-colors hover:bg-white/20"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4 text-white/80" />
          </button>
        </div>
      </div>
    </>
  )
}
