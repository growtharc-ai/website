import { FadeIn } from '@/components/motion/fade-in'

const faqs = [
  {
    question: 'What industries do you work with?',
    answer:
      'We work with businesses across all industries — from SaaS startups and e-commerce to professional services, manufacturing, and healthcare. If your business needs AI-powered marketing, automation, or CRM solutions, we can help.',
  },
  {
    question: 'Do I need to be technical to use your AI solutions?',
    answer:
      'Not at all. We handle the technical build and integration. You get the results — more leads, smoother operations, better data — without needing to understand the AI behind it.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A marketing automation setup can be live in 2–4 weeks. A full CRM implementation typically takes 4–8 weeks. Custom AI agents vary based on complexity, but we aim to deliver working solutions fast.',
  },
  {
    question: 'Which CRM platform should I choose?',
    answer:
      "It depends on your business size, budget, and existing tools. HubSpot is great for growing businesses, Salesforce for enterprise, and Dynamics 365 if you're in the Microsoft ecosystem. We also build fully custom CRMs. We'll help you choose the right fit.",
  },
  {
    question: 'What does a free strategy call involve?',
    answer:
      "It's a 30-minute no-obligation call where we learn about your business, discuss your goals, and identify quick wins. You'll walk away with clear recommendations whether you work with us or not.",
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. All our solutions include onboarding and training. We also offer ongoing optimisation and support packages to make sure your AI systems keep improving over time.',
  },
]

export function FAQ() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="px-6 py-16 md:py-20" style={{ background: '#0A0C14' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="text-sm font-semibold tracking-wider text-[var(--ga-green)] uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[var(--ga-blue)] to-[var(--ga-green)] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Got questions? We&apos;ve got answers.
          </p>
        </FadeIn>

        <FadeIn className="mt-8">
          <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.01]">
            {faqs.map((faq, i) => (
              <div key={i} className="group/faq">
                <input
                  type="radio"
                  name="faq"
                  id={`faq-${i}`}
                  className="hidden"
                  defaultChecked={i === 0}
                />
                <label
                  htmlFor={`faq-${i}`}
                  className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-[15px] font-medium text-white/70 transition-colors group-has-[:checked]/faq:text-white">
                    {faq.question}
                  </span>
                  <span className="relative h-5 w-5 shrink-0">
                    <span className="absolute top-[9px] left-0 h-[2px] w-5 rounded-full bg-white/30 transition-colors duration-300 group-has-[:checked]/faq:bg-[var(--ga-green)]" />
                    <span className="absolute top-0 left-[9px] h-5 w-[2px] rounded-full bg-white/30 transition-all duration-300 group-has-[:checked]/faq:rotate-90 group-has-[:checked]/faq:bg-[var(--ga-green)] group-has-[:checked]/faq:opacity-0" />
                  </span>
                </label>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-has-[:checked]/faq:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-[15px] leading-relaxed text-white/45">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-8 text-center">
          <p className="text-[15px] text-white/40">
            Have more questions?{' '}
            <a
              href="#"
              className="font-semibold text-[var(--ga-blue)] transition-colors hover:text-[var(--ga-green)]"
              data-open-arc=""
            >
              Ask Arc
            </a>
            {' '}— our AI assistant knows everything about Growth Arc.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
