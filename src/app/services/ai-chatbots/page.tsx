import type { Metadata } from 'next'
import {
  MessageSquare,
  Globe,
  Smartphone,
  BookOpen,
  Languages,
  UserCheck,
  BrainCircuit,
  Headset,
  Settings,
  BarChart3,
} from 'lucide-react'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'

export const metadata: Metadata = {
  title: 'AI Chatbots & Virtual Assistants — Growth Arc',
  description:
    'Intelligent conversational AI for your website, app, or internal tools. Handle customer enquiries, qualify leads, book appointments, and provide instant support — without adding headcount.',
  openGraph: {
    title: 'AI Chatbots & Virtual Assistants — Growth Arc',
    description:
      'Intelligent conversational AI that handles customer enquiries, qualifies leads, and provides instant support — without adding headcount.',
    url: 'https://growtharc.ai/services/ai-chatbots',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — AI Chatbots & Virtual Assistants',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Globe,
    title: 'Website Live Chat',
    description:
      'An AI chatbot embedded on your website that engages visitors in real time — answering questions, capturing leads, and guiding them toward conversion.',
    tint: 'blue' as const,
  },
  {
    icon: Smartphone,
    title: 'WhatsApp, Messenger & SMS',
    description:
      'Meet your customers where they are. Deploy AI chatbots across WhatsApp, Facebook Messenger, and SMS for consistent, instant support on every channel.',
    tint: 'green' as const,
  },
  {
    icon: BookOpen,
    title: 'Internal Knowledge Assistants',
    description:
      'AI assistants trained on your internal docs, SOPs, and knowledge base — giving your team instant answers without searching through files or asking colleagues.',
    tint: 'blue' as const,
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    description:
      'Serve customers in their preferred language. Our chatbots handle conversations in 50+ languages with natural, contextually accurate responses.',
    tint: 'green' as const,
  },
  {
    icon: UserCheck,
    title: 'Lead Qualification & Booking',
    description:
      'Chatbots that qualify prospects by asking the right questions, score their intent, and book meetings directly into your calendar — no forms required.',
    tint: 'blue' as const,
  },
  {
    icon: Headset,
    title: 'Human Escalation',
    description:
      'Seamless handoff to your team when a conversation needs a human touch. Full context is passed along so the customer never has to repeat themselves.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'Scope & Train',
    description:
      'We define your chatbot\'s purpose, persona, and knowledge base — then train it on your products, services, FAQs, and brand voice.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Build & Connect',
    description:
      'Your chatbot is built with conversation flows, integrations to your CRM and booking tools, and deployed across your chosen channels.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Test & Launch',
    description:
      'Rigorous testing across real-world scenarios — edge cases, multilingual queries, escalation paths — before going live with your customers.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Monitor & Improve',
    description:
      'We track conversation quality, resolution rates, and customer satisfaction — continuously improving responses and expanding capabilities.',
  },
]

const metrics = [
  { value: 70, suffix: '%', label: 'Enquiries Resolved Instantly' },
  { value: 3, suffix: 'x', label: 'More Leads Captured' },
  { value: 50, suffix: '+', label: 'Languages Supported' },
  { value: 24, suffix: '/7', label: 'Instant Response Time' },
]

const proofPoints = [
  'Trained on your products, services, and brand voice',
  'Deploys across website, WhatsApp, Messenger, and SMS',
  'Seamless escalation to human agents when needed',
  'No lock-in — month-to-month engagement',
]

export default function AIChatbotsPage() {
  return (
      <main>
        <ServiceHero
          icon={MessageSquare}
          label="AI Chatbots & Virtual Assistants"
          headline="Instant, Intelligent Conversations"
          gradientText="Around the Clock"
          subheadline="Conversational AI that handles customer enquiries, qualifies leads, books appointments, and provides instant support — on your website and every messaging channel your customers use."
          stats={[
            { value: 'Omnichannel', label: 'Web, WhatsApp, SMS' },
            { value: 'AI-Trained', label: 'On Your Business' },
            { value: 'Always-On', label: '24/7 Support' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Engage & Convert"
          description="From website live chat and messaging apps to internal knowledge assistants — AI chatbots that understand your business and speak your customers' language."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Setup to"
          gradientText="Live Conversations"
          description="A four-step process that delivers a fully trained, multichannel AI chatbot tailored to your business and ready to engage customers."
          steps={steps}
        />
        <ServiceMetrics
          description="Our AI chatbots deliver measurable customer experience improvements — faster responses, more leads captured, and support that never sleeps."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Automate Customer Conversations?"
          description="Book a free consultation and we'll show you how an AI chatbot can handle your most common enquiries while capturing more leads."
          proofPoints={proofPoints}
        />
      </main>
  )
}
