import type { Metadata } from 'next'
import {
  Headphones,
  Ticket,
  Route,
  SmilePlus,
  Zap,
  BookOpen,
  ArrowUpRight,
  ClipboardCheck,
  PenTool,
  Plug,
  Rocket,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Customer Service & Support — Growth Arc',
  description:
    'Transform your support operations with AI that handles tickets, routes enquiries, analyses customer sentiment, and resolves issues instantly — 24/7. Escalate to humans only when it matters.',
  openGraph: {
    title: 'AI Customer Service & Support — Growth Arc',
    description:
      'AI-powered customer support that handles tickets, routes enquiries, and resolves issues instantly — 24/7. Escalate to humans only when it matters.',
    url: 'https://growtharc.ai/services/ai-customer-service',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Customer Service & Support',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Ticket,
    title: 'Intelligent Ticket Triage',
    description:
      'AI that reads, categorises, and prioritises every incoming ticket automatically — routing urgent issues to the front of the queue and tagging by topic, product, and severity.',
    tint: 'blue' as const,
  },
  {
    icon: Route,
    title: 'Smart Enquiry Routing',
    description:
      'Route tickets to the right team or agent based on skill, availability, and context. No more misrouted enquiries bouncing between departments.',
    tint: 'green' as const,
  },
  {
    icon: SmilePlus,
    title: 'Sentiment Analysis',
    description:
      'Detect customer frustration, urgency, and satisfaction in real time. Flag at-risk conversations for immediate human attention before they escalate.',
    tint: 'blue' as const,
  },
  {
    icon: Zap,
    title: 'Instant Resolution',
    description:
      'Resolve common queries — order status, password resets, billing questions — in seconds with AI-generated responses grounded in your policies and data.',
    tint: 'green' as const,
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base Automation',
    description:
      'AI that keeps your help centre up to date — drafting new articles from resolved tickets, surfacing gaps, and suggesting improvements based on real customer questions.',
    tint: 'blue' as const,
  },
  {
    icon: ArrowUpRight,
    title: 'Escalation Management',
    description:
      'Define precise escalation rules so complex or sensitive issues reach a human agent with full context — no cold handoffs, no repeated explanations.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Support Audit',
    description:
      'We analyse your current ticket volume, resolution times, common enquiry types, and pain points to identify where AI will have the biggest impact.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Configure',
    description:
      'We design your AI support workflows — triage rules, routing logic, response templates, escalation paths, and sentiment thresholds tailored to your business.',
  },
  {
    number: '03',
    icon: Plug,
    title: 'Build & Integrate',
    description:
      'Your AI support system is built, connected to your helpdesk, CRM, and knowledge base, then tested against real ticket scenarios before going live.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimise',
    description:
      'Go live with full monitoring. We continuously refine response accuracy, expand coverage to new enquiry types, and improve resolution rates over time.',
  },
]

const metrics = [
  { value: 65, suffix: '%', label: 'Ticket Deflection Rate' },
  { value: 70, suffix: '%', label: 'Faster Resolution Time' },
  { value: 95, suffix: '%', label: 'Customer Satisfaction' },
  { value: 24, suffix: '/7', label: 'Instant Support Coverage' },
]

const proofPoints = [
  'Integrates with your existing helpdesk and CRM',
  'Trained on your policies, products, and brand voice',
  'Human escalation paths built in from day one',
  'Real-time sentiment monitoring and reporting',
  'Month-to-month — no lock-in contracts',
]

export default function AICustomerServicePage() {
  return (
      <main>
        <ServiceHero
          icon={Headphones}
          label="AI Customer Service & Support"
          headline="Deliver Exceptional Support with"
          gradientText="AI-Powered Service"
          subheadline="Transform your support operations with AI that handles tickets, routes enquiries, analyses customer sentiment, and resolves issues instantly — 24/7. Escalate to humans only when it matters."
          stats={[
            { value: '24/7', label: 'Instant Support' },
            { value: 'AI-Powered', label: 'Ticket Resolution' },
            { value: 'Real-Time', label: 'Sentiment Analysis' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need for"
          gradientText="Smarter Support"
          description="From intelligent ticket triage and instant resolution to sentiment analysis and escalation management — AI support built for your customers, connected to your tools, running around the clock."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Overwhelmed Inbox to"
          gradientText="Effortless Resolution"
          description="A four-step process that transforms your support operations into an AI-powered system that resolves issues faster and keeps customers happier."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI support systems deliver measurable improvements — fewer manual tickets, faster resolutions, and higher customer satisfaction."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Transform Your Support?"
          description="Book a free support audit and we'll show you exactly how AI can cut resolution times, deflect tickets, and improve your customer experience."
          proofPoints={proofPoints}
        />
      </main>
  )
}
