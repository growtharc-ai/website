'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  Radar,
  Globe,
  Workflow,
  CalendarClock,
  MousePointerClick,
  ChartNoAxesCombined,
} from 'lucide-react'

const serviceLinks = [
  {
    label: 'AI Lead Generation',
    href: '/services/ai-lead-generation',
    icon: Radar,
  },
  { label: 'Traffic & SEO', href: '/services/traffic-seo', icon: Globe },
  {
    label: 'Sales Automation',
    href: '/services/sales-automation',
    icon: Workflow,
  },
  {
    label: 'Appointment Booking',
    href: '/services/appointment-booking',
    icon: CalendarClock,
  },
  {
    label: 'Ads Management',
    href: '/services/ads-management',
    icon: MousePointerClick,
  },
  {
    label: 'Analytics & Reporting',
    href: '/services/analytics-reporting',
    icon: ChartNoAxesCombined,
  },
]

const navLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080E]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/">
          <Image
            src="/logo/02-logo-primary-dark.svg"
            alt="Growth Arc"
            width={170}
            height={40}
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0D0F18]/95 p-2 shadow-2xl backdrop-blur-xl">
                {serviceLinks.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <service.icon className="h-4 w-4 text-[var(--ga-blue)]" />
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-ga-blue to-ga-green px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#07080E]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {/* Services expandable */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-base font-medium text-white/60 transition-colors hover:text-white"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="flex flex-col gap-1 pl-4">
                {serviceLinks.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <service.icon className="h-4 w-4 text-[var(--ga-blue)]" />
                    {service.label}
                  </a>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-ga-blue to-ga-green px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
