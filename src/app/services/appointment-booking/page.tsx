import type { Metadata } from 'next'
import {
  CalendarClock,
  CalendarCheck,
  Bot,
  Clock,
  Bell,
  UserCheck,
  Repeat,
  ClipboardCheck,
  Settings,
  Zap,
  TrendingUp,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ServiceHero } from '@/components/sections/service/service-hero'
import { ServiceFeatures } from '@/components/sections/service/service-features'
import { ServiceHowItWorks } from '@/components/sections/service/service-how-it-works'
import { ServiceMetrics } from '@/components/sections/service/service-metrics'
import { ServiceCTA } from '@/components/sections/service/service-cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Smart Appointment Booking — Growth Arc',
  description:
    'AI-powered scheduling with automated qualification, reminders, and follow-ups. Growth Arc keeps your calendar full with qualified meetings.',
  openGraph: {
    title: 'Smart Appointment Booking — Growth Arc',
    description:
      'AI-powered scheduling with automated qualification, reminders, and follow-ups that keep your calendar full.',
    url: 'https://growtharc.ai/services/appointment-booking',
    siteName: 'Growth Arc',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Growth Arc — Smart Appointment Booking',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
}

const features = [
  {
    icon: Bot,
    title: 'AI Qualification',
    description:
      'Our AI chatbot qualifies prospects before they book — asking the right questions to ensure every meeting is worth your time.',
    tint: 'blue' as const,
  },
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling',
    description:
      'Intelligent calendar integration that finds the perfect time slot based on availability, timezone, and meeting priority.',
    tint: 'green' as const,
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description:
      'Multi-channel reminders via email and SMS reduce no-shows by up to 80% — with smart timing based on attendee behaviour.',
    tint: 'blue' as const,
  },
  {
    icon: UserCheck,
    title: 'Lead Routing',
    description:
      'Automatically route bookings to the right team member based on service type, expertise, territory, or round-robin rules.',
    tint: 'green' as const,
  },
  {
    icon: Repeat,
    title: 'Follow-Up Automation',
    description:
      'Post-meeting follow-ups, recap emails, and next-step tasks are triggered automatically — no manual work required.',
    tint: 'blue' as const,
  },
  {
    icon: Clock,
    title: 'Buffer & Availability Rules',
    description:
      'Set buffer times between meetings, daily limits, and custom availability windows to protect your team from calendar overload.',
    tint: 'green' as const,
  },
]

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Discovery',
    description:
      'We map your booking flow — who books, what they book, and where the drop-offs happen in your current process.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Setup & Configure',
    description:
      'We build your booking system with qualification logic, calendar integrations, and routing rules tailored to your team.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automate & Launch',
    description:
      'Reminders, follow-ups, and CRM syncing go live. Every booking flows seamlessly into your sales pipeline.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Scale',
    description:
      'We analyse booking data to improve show rates, reduce friction, and scale your appointment capacity as you grow.',
  },
]

const metrics = [
  { value: 80, suffix: '%', label: 'Fewer No-Shows' },
  { value: 3, suffix: 'x', label: 'More Booked Meetings' },
  { value: 95, suffix: '%', label: 'Show-Up Rate' },
  { value: 5, suffix: 'min', label: 'Average Time to Book' },
]

const proofPoints = [
  'Integrates with Google Calendar, Outlook & more',
  'AI chatbot qualifies leads before they book',
  'Multi-channel reminders reduce no-shows',
  'Full CRM integration for seamless handoff',
]

export default function AppointmentBookingPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          icon={CalendarClock}
          label="Smart Appointment Booking"
          headline="Keep Your Calendar Full of"
          gradientText="Qualified Meetings"
          subheadline="AI-powered scheduling with automated qualification and reminders — so your team spends time selling, not chasing calendars."
          stats={[
            { value: 'AI-Qualified', label: 'Meeting Booking' },
            { value: 'Automated', label: 'Reminders & Follow-Up' },
            { value: 'Smart', label: 'Calendar Routing' },
          ]}
        />
        <ServiceFeatures
          sectionLabel="Capabilities"
          headlinePrefix="Everything You Need to"
          gradientText="Book Smarter"
          description="A complete appointment booking engine — from AI qualification and smart scheduling to automated reminders and follow-ups."
          features={features}
        />
        <ServiceHowItWorks
          headlinePrefix="From Enquiry to"
          gradientText="Booked Meeting"
          description="A four-step process that transforms your scheduling chaos into a seamless, automated booking experience."
          steps={steps}
        />
        <ServiceMetrics
          description="Our smart booking system delivers more meetings with higher show rates — not empty calendar slots."
          metrics={metrics}
        />
        <ServiceCTA
          headline="Ready to Fill Your Calendar?"
          description="Book a free strategy call and we'll show you how our AI booking system can eliminate no-shows and keep your pipeline flowing."
          proofPoints={proofPoints}
        />
      </main>
      <Footer />
    </>
  )
}
