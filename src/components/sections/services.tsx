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
    title: 'Custom AI Agents & Automation',
    description:
      'Purpose-built AI agents that handle repetitive tasks, automate workflows, and execute business processes autonomously — tailored to your business, running 24/7.',
    href: '/services/ai-agents',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Intelligent conversational AI for your website, app, or internal tools. Handle enquiries, qualify leads, and provide instant support — without adding headcount.',
    href: '/services/ai-chatbots',
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
    <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ga-blue)]/10">
        <service.icon className="h-6 w-6 text-[var(--ga-blue)]" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/45">
        {service.description}
      </p>
      {service.href && (
        <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--ga-blue)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </p>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
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

        {/* AI Marketing */}
        <FadeIn className="mt-16">
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
            AI Marketing
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block">
                <ServiceCard service={service} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* AI Solutions */}
        <FadeIn className="mt-16">
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
            AI Solutions
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block">
                <ServiceCard service={service} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CRM Solutions */}
        <FadeIn className="mt-16">
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
            CRM Solutions
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {crmServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block">
                <ServiceCard service={service} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Development & Data */}
        <FadeIn className="mt-16">
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
            Development & Data
          </p>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {devServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="block">
                <ServiceCard service={service} />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
