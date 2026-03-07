import Link from 'next/link'
import {
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
  ArrowRight,
} from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import {
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/stagger-children'

const marketingServices = [
  {
    icon: Radar,
    title: 'AI Lead Generation',
    description:
      'AI agents that research, qualify, and engage prospects around the clock — filling your pipeline while you sleep.',
    href: '/services/ai-lead-generation',
  },
  {
    icon: Globe,
    title: 'Traffic & SEO',
    description:
      'AI-driven content strategy and technical SEO that compounds organic traffic month after month.',
    href: '/services/traffic-seo',
  },
  {
    icon: Workflow,
    title: 'Sales Automation',
    description:
      'End-to-end pipeline automation — from first touch to closed deal — with AI handling the follow-ups.',
    href: '/services/sales-automation',
  },
  {
    icon: CalendarClock,
    title: 'Smart Appointment Booking',
    description:
      'AI-powered scheduling that qualifies leads, books meetings, and sends reminders — no manual coordination.',
    href: '/services/appointment-booking',
  },
  {
    icon: MousePointerClick,
    title: 'Ads Management',
    description:
      'Google, Meta, and LinkedIn campaigns managed by AI — optimising bids, budgets, and creative in real time.',
    href: '/services/ads-management',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Analytics & Reporting',
    description:
      'Live dashboards with clear attribution and ROI tracking. Always know what\'s working and where to invest.',
    href: '/services/analytics-reporting',
  },
]

const aiServices = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Autonomous AI agents that execute business processes, automate workflows, and handle repetitive tasks independently — purpose-built for your business, running 24/7.',
    href: '/services/ai-agents',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Intelligent conversational AI for your website, apps, and messaging platforms. Handle customer enquiries, qualify leads, and book appointments — instantly, around the clock.',
    href: '/services/ai-chatbots',
  },
  {
    icon: Sparkles,
    title: 'AI Virtual Assistants',
    description:
      'Smart digital assistants for your team — managing schedules, drafting communications, summarising documents, answering internal questions, and streamlining daily workflows.',
    href: '/services/ai-virtual-assistants',
  },
  {
    icon: Headphones,
    title: 'AI Customer Service & Support',
    description:
      'Transform your support operations with AI that handles tickets, routes enquiries, analyses customer sentiment, and resolves issues instantly — 24/7. Escalate to humans only when it matters.',
    href: '/services/ai-customer-service',
  },
  {
    icon: PenTool,
    title: 'AI Content Creation & Management',
    description:
      'AI-powered content at scale — blog posts, social media, email campaigns, product descriptions, and brand-consistent copy. Created faster, published smarter, optimised continuously.',
    href: '/services/ai-content',
  },
  {
    icon: Compass,
    title: 'AI Strategy & Consulting',
    description:
      'Not sure where AI fits in your business? We audit your operations, identify high-impact opportunities, and build a roadmap to get you there.',
    href: '/services/ai-consulting',
  },
]

const crmServices = [
  {
    icon: Database,
    title: 'Custom CRM Development',
    description:
      'A CRM built from the ground up around your sales process — no compromises, no workarounds. Designed to fit the way your team actually works.',
    href: '/services/crm-custom',
  },
  {
    icon: CircleDot,
    title: 'HubSpot Implementation',
    description:
      'Full HubSpot setup, migration, and optimisation — from CRM and marketing hub to sales automation and reporting. Hands-on from day one.',
    href: '/services/crm-hubspot',
  },
  {
    icon: Cloud,
    title: 'Salesforce Implementation',
    description:
      'Enterprise-grade Salesforce deployment, customisation, and integration. Built for complex sales teams that need power and flexibility.',
    href: '/services/crm-salesforce',
  },
  {
    icon: Grid3X3,
    title: 'Microsoft Dynamics 365',
    description:
      'Dynamics 365 setup and customisation for businesses in the Microsoft ecosystem. Seamless integration with Outlook, Teams, and Azure.',
    href: '/services/crm-dynamics',
  },
]

const devServices = [
  {
    icon: Code,
    title: 'Website & App Development',
    description:
      'Custom websites, web apps, and mobile applications built with modern frameworks. From landing pages to full-stack platforms — designed to convert, built to scale.',
    href: '/services/web-development',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics / BI Dashboards',
    description:
      'Turn your business data into clear, actionable insights. Custom dashboards that connect your tools, visualise KPIs, and surface the metrics that drive decisions.',
    href: '/services/data-analytics',
  },
]

function ServiceCard({ service }: { service: { icon: React.ComponentType<{ className?: string }>; title: string; description: string; href?: string } }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ga-blue)]/25 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[var(--ga-blue)]/[0.08]">
      {/* Shimmer sweep on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-none group-hover:animate-[shimmer_0.8s_ease_forwards]" />
      <div className="relative flex flex-1 flex-col">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
          <service.icon className="h-6 w-6 text-[var(--ga-blue)] transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/45">
          {service.description}
        </p>
        {service.href && (
          <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--ga-blue)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </p>
        )}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* AI Solutions — blue-tinted zone */}
      <div
        className="px-6 pt-24 pb-16 md:pt-32 md:pb-20"
        style={{ background: 'linear-gradient(180deg, #080A16 0%, #0A0E1A 100%)' }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
                Grow
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              AI-powered solutions across marketing, operations, and automation.
              One integrated partner.
            </p>
          </FadeIn>

          {/* AI Solutions */}
          <FadeIn className="mt-16">
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              AI Solutions
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <Link href={service.href} className="block h-full">
                  <ServiceCard service={service} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* AI Marketing — grid pattern zone */}
      <div
        className="relative px-6 py-16 md:py-20"
        style={{
          background: '#07080E',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              AI Marketing
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <Link href={service.href} className="block h-full">
                  <ServiceCard service={service} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* CRM Solutions */}
      <div className="bg-[#090B14] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              CRM Solutions
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {crmServices.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <Link href={service.href} className="block h-full">
                  <ServiceCard service={service} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Development & Data */}
      <div className="bg-[#07080E] px-6 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              Development & Data
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {devServices.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <Link href={service.href} className="block h-full">
                  <ServiceCard service={service} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
