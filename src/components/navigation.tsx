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
  Bot,
  MessageSquare,
  Sparkles,
  Headphones,
  PenTool,
  Compass,
  Database,
  CircleDot,
  Cloud,
  Grid3X3,
  Code,
  BarChart3,
} from 'lucide-react'

import { Calculator, ClipboardCheck, Search, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ServiceCategory = {
  label: string
  items: { label: string; href: string; icon: LucideIcon }[]
}

const serviceCategories: ServiceCategory[] = [
  {
    label: 'AI Solutions',
    items: [
      { label: 'AI Agents', href: '/services/ai-agents', icon: Bot },
      { label: 'AI Chatbots', href: '/services/ai-chatbots', icon: MessageSquare },
      { label: 'AI Virtual Assistants', href: '/services/ai-virtual-assistants', icon: Sparkles },
      { label: 'AI Customer Service & Support', href: '/services/ai-customer-service', icon: Headphones },
      { label: 'AI Content Creation', href: '/services/ai-content', icon: PenTool },
      { label: 'AI Strategy & Consulting', href: '/services/ai-consulting', icon: Compass },
    ],
  },
  {
    label: 'AI Marketing',
    items: [
      { label: 'AI Lead Generation', href: '/services/ai-lead-generation', icon: Radar },
      { label: 'Traffic & SEO', href: '/services/traffic-seo', icon: Globe },
      { label: 'Sales Automation', href: '/services/sales-automation', icon: Workflow },
      { label: 'Appointment Booking', href: '/services/appointment-booking', icon: CalendarClock },
      { label: 'Ads Management', href: '/services/ads-management', icon: MousePointerClick },
      { label: 'Analytics & Reporting', href: '/services/analytics-reporting', icon: ChartNoAxesCombined },
    ],
  },
  {
    label: 'CRM Solutions',
    items: [
      { label: 'Custom CRM Development', href: '/services/crm-custom', icon: Database },
      { label: 'HubSpot Implementation', href: '/services/crm-hubspot', icon: CircleDot },
      { label: 'Salesforce Implementation', href: '/services/crm-salesforce', icon: Cloud },
      { label: 'Microsoft Dynamics 365', href: '/services/crm-dynamics', icon: Grid3X3 },
    ],
  },
  {
    label: 'Development & Data',
    items: [
      { label: 'Website & App Development', href: '/services/web-development', icon: Code },
      { label: 'Data & Analytics / BI Dashboards', href: '/services/data-analytics', icon: BarChart3 },
    ],
  },
]

type ToolItem = { label: string; href: string; icon: LucideIcon; comingSoon?: boolean }

const toolsItems: ToolItem[] = [
  { label: 'AI ROI Calculator', href: '/tools/roi-calculator', icon: Calculator },
  { label: 'AI Readiness Assessment', href: '/tools/ai-readiness', icon: ClipboardCheck },
  { label: 'AI Website Audit', href: '/tools/website-audit', icon: Search },
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
        /* Desktop mega-menu: visible + opacity for 150ms close delay */
        .nav-mega {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.15s ease, visibility 0s linear 0.15s;
        }
        .nav-services:hover .nav-mega {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.15s ease, visibility 0s linear 0s;
        }
        /* Mobile menu */
        .nav-mobile-toggle:checked ~ .nav-mobile-menu { display: flex; }
        .nav-mobile-toggle:checked ~ .nav-mobile-overlay { display: block; }
        .nav-mobile-toggle:checked ~ .nav-mobile-label .nav-icon-menu { display: none; }
        .nav-mobile-toggle:checked ~ .nav-mobile-label .nav-icon-close { display: block; }
        .nav-mobile-toggle:not(:checked) ~ .nav-mobile-label .nav-icon-close { display: none; }
        /* Mobile accordion — one checkbox per category */
        .nav-cat-toggle { display: none; }
        .nav-cat-toggle:checked + .nav-cat-label .nav-chevron { transform: rotate(180deg); }
        .nav-cat-toggle:checked ~ .nav-cat-list { display: flex; }
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
            {/* Services mega-menu trigger */}
            <div className="nav-services -mx-3 px-3 -my-2 py-2">
              <button
                className="flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {/* Full-width mega-menu panel */}
              <div className="nav-mega fixed inset-x-0 top-[72px] z-50">
                <div className="border-t border-white/5 bg-[#0D0F18]/95 shadow-2xl backdrop-blur-xl">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-6 py-8">
                    {serviceCategories.map((category) => (
                      <div key={category.label}>
                        <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-white/25 uppercase">
                          {category.label}
                        </p>
                        <div className="flex flex-col gap-0.5">
                          {category.items.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              <service.icon className="h-3.5 w-3.5 shrink-0 text-[var(--ga-blue)]" />
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

            {/* Tools dropdown */}
            <div className="nav-services -mx-3 px-3 -my-2 py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white">
                Tools
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="nav-mega fixed left-auto right-auto top-[72px] z-50">
                <div className="border-t border-white/5 bg-[#0D0F18]/95 shadow-2xl backdrop-blur-xl">
                  <div className="px-4 py-3">
                    {toolsItems.map((tool) => (
                      tool.comingSoon ? (
                        <span
                          key={tool.href}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/30"
                        >
                          <tool.icon className="h-3.5 w-3.5 shrink-0 text-white/20" />
                          {tool.label}
                          <span className="ml-auto rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/25">Soon</span>
                        </span>
                      ) : (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          <tool.icon className="h-3.5 w-3.5 shrink-0 text-[var(--ga-blue)]" />
                          {tool.label}
                        </Link>
                      )
                    ))}
                    <a
                      href="#"
                      data-open-arc=""
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[var(--ga-blue)]" />
                      Ask Arc
                    </a>
                  </div>
                </div>
              </div>
            </div>

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

          {/* Mobile overlay — blocks page content behind menu */}
          <div className="nav-mobile-overlay fixed inset-0 top-[72px] z-40 hidden bg-[#07080E] md:hidden">
            <label htmlFor="nav-toggle" className="block h-full w-full" />
          </div>

          {/* Mobile menu */}
          <div className="nav-mobile-menu fixed inset-x-0 top-[72px] z-50 hidden max-h-[calc(100dvh-72px)] flex-col gap-2 overflow-y-auto border-t border-white/5 bg-[#07080E] px-6 py-6 md:hidden">
            {/* Services accordion — one checkbox per category */}
            <p className="mb-1 text-xs font-semibold tracking-wider text-white/30 uppercase">Services</p>
            {serviceCategories.map((category, i) => (
              <div key={category.label}>
                <input
                  type="checkbox"
                  id={`nav-cat-${i}`}
                  className="nav-cat-toggle"
                />
                <label
                  htmlFor={`nav-cat-${i}`}
                  className="nav-cat-label flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {category.label}
                  <ChevronDown className="nav-chevron h-3.5 w-3.5 transition-transform duration-200" />
                </label>
                <div className="nav-cat-list hidden flex-col pl-3">
                  {category.items.map((service) => (
                    <label key={service.href} htmlFor="nav-toggle">
                      <Link
                        href={service.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <service.icon className="h-4 w-4 shrink-0 text-[var(--ga-blue)]" />
                        {service.label}
                      </Link>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="my-2 border-t border-white/5" />

            <p className="mb-1 text-xs font-semibold tracking-wider text-white/30 uppercase">Tools</p>
            {toolsItems.map((tool) =>
              tool.comingSoon ? (
                <span
                  key={tool.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/25"
                >
                  <tool.icon className="h-4 w-4 shrink-0 text-white/15" />
                  {tool.label}
                  <span className="ml-auto rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/20">Soon</span>
                </span>
              ) : (
                <label key={tool.href} htmlFor="nav-toggle">
                  <Link
                    href={tool.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <tool.icon className="h-4 w-4 shrink-0 text-[var(--ga-blue)]" />
                    {tool.label}
                  </Link>
                </label>
              )
            )}
            <label htmlFor="nav-toggle">
              <a
                href="#"
                data-open-arc=""
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[var(--ga-blue)]" />
                Ask Arc
              </a>
            </label>

            <div className="my-2 border-t border-white/5" />

            {navLinks.map((link) => (
              <label key={link.href} htmlFor="nav-toggle">
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
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
