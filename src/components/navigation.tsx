import Link from 'next/link'
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
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  return (
    <>
      <style>{`
        .nav-header {
          background: rgba(7, 8, 14, 0.85);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-dropdown { display: none; }
        .nav-services:hover .nav-dropdown { display: block; }
        .nav-mobile-toggle:checked ~ .nav-mobile-menu { display: flex; }
        .nav-mobile-toggle:checked ~ .nav-mobile-label .nav-icon-menu { display: none; }
        .nav-mobile-toggle:checked ~ .nav-mobile-label .nav-icon-close { display: block; }
        .nav-mobile-toggle:not(:checked) ~ .nav-mobile-label .nav-icon-close { display: none; }
        .nav-mobile-services:checked ~ .nav-mobile-services-list { display: flex; }
        .nav-mobile-services:checked ~ .nav-mobile-services-label .nav-chevron { transform: rotate(180deg); }
      `}</style>
      <header className="nav-header fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/02-logo-primary-dark.svg"
              alt="Growth Arc"
              width={170}
              height={40}
              fetchPriority="high"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Services dropdown */}
            <div className="nav-services relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <div className="nav-dropdown absolute top-full left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0D0F18]/95 p-2 shadow-2xl backdrop-blur-xl">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <service.icon className="h-4 w-4 text-[var(--ga-blue)]" />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-ga-blue to-ga-green px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle — checkbox hack, no JS */}
          <input
            type="checkbox"
            id="nav-toggle"
            className="nav-mobile-toggle peer sr-only"
            aria-label="Toggle menu"
          />
          <label
            htmlFor="nav-toggle"
            className="nav-mobile-label cursor-pointer text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="nav-icon-menu" />
            <X size={24} className="nav-icon-close" />
          </label>

          {/* Mobile menu */}
          <div className="nav-mobile-menu fixed inset-x-0 top-[72px] hidden flex-col gap-4 border-t border-white/5 bg-[#07080E]/95 px-6 py-6 backdrop-blur-xl md:hidden">
            {/* Services expandable — checkbox hack */}
            <input
              type="checkbox"
              id="nav-services-toggle"
              className="nav-mobile-services sr-only"
            />
            <label
              htmlFor="nav-services-toggle"
              className="nav-mobile-services-label flex cursor-pointer items-center justify-between text-base font-medium text-white/60 transition-colors hover:text-white"
            >
              Services
              <ChevronDown className="nav-chevron h-4 w-4 transition-transform duration-200" />
            </label>

            <div className="nav-mobile-services-list hidden flex-col gap-1 pl-4">
              {serviceLinks.map((service) => (
                <label key={service.href} htmlFor="nav-toggle">
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <service.icon className="h-4 w-4 text-[var(--ga-blue)]" />
                    {service.label}
                  </Link>
                </label>
              ))}
            </div>

            {navLinks.map((link) => (
              <label key={link.href} htmlFor="nav-toggle">
                <Link
                  href={link.href}
                  className="block text-base font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </label>
            ))}
            <label htmlFor="nav-toggle">
              <Link
                href="/contact"
                className="mt-2 block rounded-full bg-gradient-to-r from-ga-blue to-ga-green px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Contact
              </Link>
            </label>
          </div>
        </nav>
      </header>
    </>
  )
}
