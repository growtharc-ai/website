import type { Metadata } from 'next'
import {
  Bot,
  Cpu,
  FileText,
  RefreshCw,
  Workflow,
  Database,
  Plug,
  ClipboardCheck,
  Layers,
  Rocket,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Agents — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Autonomous AI agents that execute business processes, automate workflows, and handle repetitive tasks independently — purpose-built for your business, running 24/7.',
  openGraph: {
    title: 'AI Agents — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Autonomous AI agents that execute business processes and automate workflows independently. Purpose-built for your business, running 24/7.',
    url: 'https://www.growtharc.ai/services/ai-agents',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Agents',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'AI agents that orchestrate multi-step workflows across your tools — triggering actions, moving data, and completing tasks without human intervention.',
    tint: 'blue' as const,
  },
  {
    icon: FileText,
    title: 'Document Processing',
    description:
      'Extract, classify, and process data from invoices, contracts, and forms automatically. No more manual data entry or copy-paste between systems.',
    tint: 'green' as const,
  },
  {
    icon: Database,
    title: 'Data Entry & Migration',
    description:
      'AI agents that clean, validate, and migrate data between systems — CRMs, spreadsheets, ERPs — with accuracy that beats manual processes.',
    tint: 'blue' as const,
  },
  {
    icon: RefreshCw,
    title: 'Process Orchestration',
    description:
      'Chain multiple AI agents together to handle end-to-end business processes — from onboarding new clients to processing monthly reports.',
    tint: 'green' as const,
  },
  {
    icon: Plug,
    title: 'System Integration',
    description:
      'Connect your existing tools — Xero, HubSpot, Google Workspace, Slack, and more — into unified automated workflows with custom AI agents.',
    tint: 'blue' as const,
  },
  {
    icon: Cpu,
    title: 'Decision Automation',
    description:
      'AI agents that apply business rules, flag exceptions, and make routine decisions — escalating to humans only when judgement is genuinely needed.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Process Audit',
    description:
      'We map your existing workflows and identify the repetitive, time-consuming tasks that are prime candidates for AI automation.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Agent Design',
    description:
      'We design custom AI agents tailored to your specific processes — defining triggers, decision logic, data flows, and error handling.',
  },
  {
    number: '03',
    icon: Plug,
    title: 'Build & Integrate',
    description:
      'Your AI agents are built, connected to your existing tools, and tested thoroughly against real-world scenarios before going live.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Optimise',
    description:
      'Agents go live with monitoring dashboards. We continuously refine performance, add new capabilities, and expand automation across your business.',
  },
]

const metrics = [
  { value: 80, suffix: '%', label: 'Reduction in Manual Tasks' },
  { value: 3, suffix: 'x', label: 'Faster Process Completion' },
  { value: 50, suffix: '%', label: 'Lower Operational Costs' },
  { value: 24, suffix: '/7', label: 'Autonomous Operation' },
]

const proofPoints = [
  'Custom-built for your specific workflows',
  'Integrates with your existing tools and systems',
  'Full monitoring and error handling built in',
  'Month-to-month — no lock-in contracts',
]

export default function AIAgentsPage() {
  return (
      <main>
        <ServiceHero
          icon={Bot}
          label="AI Agents"
          headline="Automate Your Operations with"
          gradientText="Intelligent AI Agents"
          subheadline="Autonomous AI agents that execute business processes, automate workflows, and handle repetitive tasks independently — so your team focuses on work that actually matters."
          stats={[
            { value: 'Custom-Built', label: 'For Your Business' },
            { value: 'Multi-Step', label: 'Workflow Automation' },
            { value: 'Always-On', label: '24/7 Execution' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Automate at Scale"
          description="From document processing and data entry to end-to-end workflow orchestration — AI agents built for your business, connected to your tools, running around the clock."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Manual Processes to"
          gradientText="Autonomous Execution"
          description="A four-step process that turns your most time-consuming workflows into AI-powered operations that run themselves."
          steps={steps}
        />
        <ServiceMetrics
          description="Our custom AI agents deliver measurable operational impact — less manual work, faster execution, and lower costs."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Automate Your Operations?"
          description="Book a free process audit and we'll identify the highest-impact automation opportunities in your business."
          proofPoints={proofPoints}
        />
      </main>
  )
}
