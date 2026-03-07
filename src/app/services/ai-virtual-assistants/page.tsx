import type { Metadata } from 'next'
import {
  Sparkles,
  Calendar,
  FileSearch,
  Mail,
  BookOpen,
  ListChecks,
  Headphones,
  Search,
  Wrench,
  Settings,
  Rocket,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Virtual Assistants — Growth Arc | AI Solutions That Grow Your Business',
  description:
    'Smart digital assistants for your team — managing schedules, drafting communications, summarising documents, answering internal questions, and streamlining daily workflows.',
  openGraph: {
    title: 'AI Virtual Assistants — Growth Arc | AI Solutions That Grow Your Business',
    description:
      'Smart digital assistants that manage schedules, draft communications, summarise documents, and streamline daily workflows for your team.',
    url: 'https://www.growtharc.ai/services/ai-virtual-assistants',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Virtual Assistants',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Calendar,
    title: 'Schedule & Calendar Management',
    description:
      'AI assistants that coordinate meetings, resolve scheduling conflicts, send reminders, and keep your calendar optimised — so your team spends less time on logistics.',
    tint: 'blue' as const,
  },
  {
    icon: FileSearch,
    title: 'Document Summarisation',
    description:
      'Automatically distil lengthy reports, proposals, and research into clear, actionable summaries — giving your team the key insights in seconds, not hours.',
    tint: 'green' as const,
  },
  {
    icon: Mail,
    title: 'Email & Comms Drafting',
    description:
      'AI-powered drafting for emails, follow-ups, and internal messages — matching your tone, pulling in relevant context, and cutting composition time dramatically.',
    tint: 'blue' as const,
  },
  {
    icon: BookOpen,
    title: 'Internal Knowledge Q&A',
    description:
      'A virtual assistant trained on your company docs, SOPs, and policies — answering team questions instantly instead of digging through shared drives and wikis.',
    tint: 'green' as const,
  },
  {
    icon: ListChecks,
    title: 'Task & Project Management',
    description:
      'AI assistants that track deadlines, prioritise to-do lists, send status updates, and flag overdue items — keeping projects moving without constant manual follow-up.',
    tint: 'blue' as const,
  },
  {
    icon: Headphones,
    title: 'Meeting Prep & Notes',
    description:
      'Automated pre-meeting briefs with attendee context and agenda items, plus post-meeting summaries with action items distributed to the right people.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We audit your team\'s daily workflows to identify where an AI assistant can save the most time — from calendar overload to repetitive communications.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Design',
    description:
      'We design your virtual assistant\'s capabilities, personality, and integrations — tailored to your tools, processes, and communication style.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Build & Train',
    description:
      'Your AI assistant is built, connected to your systems, and trained on your company knowledge — then tested with real scenarios before launch.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Refine',
    description:
      'Your assistant goes live with your team. We monitor usage, gather feedback, and continuously improve accuracy and capability over time.',
  },
]

const metrics = [
  { value: 12, suffix: 'hrs', label: 'Saved per Employee Weekly' },
  { value: 40, suffix: '%', label: 'Faster Response Times' },
  { value: 3, suffix: 'x', label: 'More Tasks Completed Daily' },
  { value: 90, suffix: '%', label: 'Internal Query Resolution' },
]

const proofPoints = [
  'Tailored to your team\'s tools and workflows',
  'Trained on your company knowledge and SOPs',
  'Integrates with Slack, Teams, Google Workspace, and more',
  'Continuous learning — gets smarter with every interaction',
  'Month-to-month — no lock-in contracts',
]

export default function AIVirtualAssistantsPage() {
  return (
      <main>
        <ServiceHero
          icon={Sparkles}
          label="AI Virtual Assistants"
          headline="Give Your Team a"
          gradientText="Smart Digital Assistant"
          subheadline="AI-powered virtual assistants that manage schedules, draft communications, summarise documents, and answer internal questions — freeing your team to focus on high-value work."
          stats={[
            { value: 'Always-On', label: 'Digital Assistant' },
            { value: 'Company-Trained', label: 'Knowledge Base' },
            { value: 'Seamless', label: 'Tool Integration' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need for"
          gradientText="Smarter Daily Workflows"
          description="From scheduling and email drafting to document summarisation and internal knowledge — AI assistants that handle the repetitive work so your team can focus on what matters."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Time-Consuming Tasks to"
          gradientText="Effortless Productivity"
          description="A four-step process that gives every team member their own AI-powered assistant, tuned to your business and integrated with your tools."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI virtual assistants deliver measurable productivity gains — less time on admin, faster responses, and more capacity for high-value work."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Supercharge Your Team's Productivity?"
          description="Book a free workflow assessment and we'll show you exactly where an AI assistant can save your team hours every week."
          proofPoints={proofPoints}
        />
      </main>
  )
}
