export type BlogPost = {
  slug: string
  title: string
  category: string
  categoryColor: string
  categoryBg: string
  metaDescription: string
  excerpt: string
  readTime: string
  author: string
  date: string
  tags: string[]
  content: string // markdown
  status: 'published' | 'draft'
  publishedAt?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'signs-ready-for-ai',
    title: '5 Signs Your Business Is Ready for AI Automation',
    category: 'AI Strategy',
    categoryColor: 'text-[var(--ga-blue)]',
    categoryBg: 'bg-[var(--ga-blue)]/10',
    metaDescription:
      "Not every business needs AI today. But these five signals mean you're leaving money on the table without it.",
    excerpt:
      "Not every business needs AI today. But these five signals mean you're leaving money on the table without it.",
    readTime: '4 min read',
    author: 'Growth Arc Team',
    date: 'March 2026',
    tags: ['AI', 'Automation', 'Strategy', 'SMB'],
    status: 'published',
    publishedAt: '2026-03-01',
    content: `AI automation is transforming how businesses operate — but not every company is ready to make the leap. Timing matters, and implementing AI too early (or without the right foundations) can waste resources.

So how do you know when your business is actually ready? Here are five signals that suggest it's time to explore AI-powered automation.

## 1. Your Team Spends More Than 10 Hours a Week on Repetitive Tasks

If your team is manually entering data, copying information between systems, sending follow-up emails, or updating spreadsheets — that's automation gold. AI agents can handle these tasks 24/7, freeing your team to focus on strategy and customer relationships.

**The benchmark:** If repetitive admin tasks consume more than 10 hours per week across your team, you're likely losing $18,000+ per year in productivity (at $35/hour NZ average).

## 2. Your Response Times Are Measured in Hours, Not Minutes

In 2026, customers expect near-instant responses. If enquiries sit in an inbox for hours — or worse, days — you're losing deals to competitors who respond faster.

AI chatbots and virtual assistants can respond instantly, qualify leads, and even book meetings while your team sleeps. Businesses that implement AI-powered customer service typically see response times drop from 4+ hours to under 30 seconds.

## 3. You Have Data but No Insights

You're collecting data — website analytics, CRM records, sales figures — but nobody has time to analyse it. Dashboards are outdated or ignored. Decisions are made on gut feel rather than evidence.

AI-powered analytics can surface patterns, predict trends, and highlight opportunities automatically. When your data is working for you instead of collecting dust, every business decision gets sharper.

## 4. Your Marketing Feels Inconsistent

One month you're publishing content regularly, the next month nothing goes out. Email campaigns are sporadic. Social media is an afterthought. You know marketing matters, but execution is inconsistent.

AI content tools and marketing automation can create, schedule, and optimise campaigns continuously — maintaining a professional presence even when your team is focused elsewhere. Companies using AI-assisted content creation publish 3-4x more consistently.

## 5. You're Growing but Your Processes Aren't Scaling

Revenue is up, the team is bigger, but things feel chaotic. What worked for 5 people doesn't work for 20. Leads fall through cracks. Handoffs between teams are messy. You know something needs to change.

This is exactly when AI automation delivers the highest ROI. Automating workflows, standardising processes, and connecting your tools creates the operational backbone that lets you scale without the chaos.

## What's Your Next Step?

If two or more of these signs resonate, your business is primed for AI. The question isn't whether to implement AI — it's where to start.

**Take our free [AI Readiness Assessment](/tools/ai-readiness)** to get a personalised score and recommendations, or **[book a free strategy call](/contact)** to discuss the biggest opportunities in your business.`,
  },
  {
    slug: 'crm-comparison',
    title: 'HubSpot vs Salesforce vs Dynamics 365: Which CRM Fits Your Business?',
    category: 'CRM',
    categoryColor: 'text-[var(--ga-green)]',
    categoryBg: 'bg-[var(--ga-green)]/10',
    metaDescription:
      'We break down the three biggest CRM platforms — HubSpot, Salesforce, and Microsoft Dynamics 365 — by cost, complexity, and best fit for your business.',
    excerpt:
      'We break down the three biggest CRM platforms by cost, complexity, and best fit.',
    readTime: '6 min read',
    author: 'Growth Arc Team',
    date: 'March 2026',
    tags: ['CRM', 'HubSpot', 'Salesforce', 'Dynamics 365', 'Comparison'],
    status: 'published',
    publishedAt: '2026-03-03',
    content: `Choosing the right CRM is one of the most impactful decisions a growing business can make. The right platform streamlines your sales pipeline, improves customer relationships, and gives you data-driven clarity on what's working.

But with HubSpot, Salesforce, and Microsoft Dynamics 365 all competing for your attention, it's not always obvious which one is the best fit. Let's break it down.

## HubSpot: Best for Growing Businesses

**Price range:** Free — $4,000+/month
**Best for:** Companies with 5-200 employees who want an all-in-one platform

HubSpot is the most intuitive of the three. Its free tier is genuinely useful — you get contact management, deal tracking, email templates, and basic reporting without spending a cent. The paid Marketing, Sales, and Service Hubs unlock automation, workflows, and advanced analytics.

**Strengths:**
- Fastest time to value — most teams are up and running within 2 weeks
- Excellent built-in marketing tools (email, landing pages, forms)
- Free tier is the best in the industry
- Clean, modern interface that your team will actually use

**Weaknesses:**
- Gets expensive fast as you scale (especially Marketing Hub)
- Less customisable than Salesforce for complex enterprise workflows
- Advanced reporting requires Professional tier ($890/month+)

**Our recommendation:** If you're a small-to-mid business (5-100 employees) and want a platform that's easy to adopt, HubSpot is hard to beat. We typically implement full HubSpot setups in 3-4 weeks.

## Salesforce: Best for Enterprise and Complex Sales

**Price range:** $25 — $500+/user/month
**Best for:** Companies with 50+ employees, complex sales processes, or enterprise requirements

Salesforce is the 800-pound gorilla of CRM. It can do almost anything — but that power comes with complexity. You'll likely need a dedicated admin or implementation partner (like us) to get the most out of it.

**Strengths:**
- Unmatched customisation — build literally anything
- Massive app ecosystem (AppExchange has 7,000+ integrations)
- Enterprise-grade security and compliance
- Powerful reporting and AI features (Einstein)

**Weaknesses:**
- Steep learning curve — most teams need 6-12 weeks to be fully productive
- Per-user pricing adds up quickly for large teams
- Implementation costs are typically 2-5x the first year of licences
- Over-engineering is a real risk without expert guidance

**Our recommendation:** If you have a complex, multi-stage sales process with multiple teams, Salesforce gives you the flexibility you need. Budget $15-50k for a proper implementation.

## Microsoft Dynamics 365: Best for Microsoft-First Businesses

**Price range:** $65 — $210+/user/month
**Best for:** Companies already invested in the Microsoft ecosystem (Outlook, Teams, Azure)

Dynamics 365 is often overlooked but quietly powerful. If your team lives in Outlook and Teams, Dynamics integrates natively — no third-party connectors needed.

**Strengths:**
- Seamless Microsoft integration (Outlook, Teams, Excel, Power BI)
- Strong for businesses with both CRM and ERP needs
- Competitive pricing at scale vs Salesforce
- Power Platform (Power Automate, Power Apps) for low-code customisation

**Weaknesses:**
- UI feels dated compared to HubSpot
- Less marketing functionality out of the box
- Requires Microsoft ecosystem buy-in
- Smaller partner/app ecosystem than Salesforce

**Our recommendation:** If your team already uses Microsoft 365, Dynamics is the natural choice. The native integration alone saves hours of manual data transfer each week.

## The Quick Decision Framework

| Factor | HubSpot | Salesforce | Dynamics 365 |
|--------|---------|------------|--------------|
| Team size | 5-100 | 50-10,000+ | 20-5,000 |
| Budget | $$ | $$$$ | $$$ |
| Ease of use | ★★★★★ | ★★★ | ★★★★ |
| Customisation | ★★★ | ★★★★★ | ★★★★ |
| Time to value | 2-4 weeks | 6-12 weeks | 4-8 weeks |

## Still Not Sure?

Every business is different. The best CRM depends on your team size, sales process, existing tools, and growth plans. **[Book a free strategy call](/contact)** and we'll give you an honest recommendation — no sales pitch, just practical advice. We implement all three platforms and custom CRMs, so we'll recommend whatever actually fits.

You can also **[try our AI ROI Calculator](/tools/roi-calculator)** to estimate how much a CRM implementation could save your business.`,
  },
  {
    slug: 'ai-lead-generation-vs-outbound',
    title: 'Why AI Lead Generation Beats Traditional Outbound',
    category: 'Marketing',
    categoryColor: 'text-[var(--ga-green)]',
    categoryBg: 'bg-[var(--ga-green)]/10',
    metaDescription:
      "AI agents don't sleep, don't forget to follow up, and learn from every interaction. Here's why AI lead generation outperforms traditional outbound.",
    excerpt:
      "AI agents don't sleep, don't forget to follow up, and learn from every interaction. Here's why that matters.",
    readTime: '5 min read',
    author: 'Growth Arc Team',
    date: 'March 2026',
    tags: ['AI', 'Lead Generation', 'Marketing', 'Sales', 'Automation'],
    status: 'published',
    publishedAt: '2026-03-05',
    content: `Traditional outbound relies on manual effort — cold calls, mass emails, and follow-up spreadsheets. It works, but it doesn't scale. And it burns out your sales team in the process.

AI-powered lead generation flips the model. Intelligent agents prospect, qualify, and nurture leads around the clock — learning from every interaction and improving over time.

## The Old Way: Manual Outbound

A typical outbound sales process looks like this:

1. Research prospects manually (30-60 minutes per batch)
2. Write personalised emails (5-10 minutes each)
3. Send and track opens (scattered across tools)
4. Follow up 3-5 times over 2-3 weeks (easy to forget)
5. Qualify responses manually (subjective, inconsistent)
6. Hand off to sales (context often lost)

A skilled SDR can handle 50-80 outreach activities per day. That's the ceiling. And when they leave? Their pipeline knowledge walks out the door with them.

## The AI Way: Intelligent Lead Generation

AI-powered lead generation removes the bottlenecks:

**Research at scale:** AI agents can analyse thousands of potential prospects in minutes — scanning websites, LinkedIn profiles, industry databases, and news — to identify the best-fit companies and decision-makers.

**Personalisation without the grind:** Instead of writing each email from scratch, AI generates contextually relevant messages based on the prospect's industry, role, company size, recent news, and pain points. Every message feels personal because it is — just created 100x faster.

**Follow-up that never forgets:** AI sequences don't lose track. They follow up at optimal intervals, adjust messaging based on engagement signals, and escalate warm leads to your team at exactly the right moment.

**Qualification that improves over time:** Machine learning models score leads based on hundreds of signals — not just a salesperson's gut feel. And they get more accurate with every interaction, learning what "ready to buy" actually looks like for your business.

## The Numbers Don't Lie

Businesses that switch from manual outbound to AI-powered lead generation typically see:

- **3-5x more qualified leads** per month (same team size)
- **60-70% reduction** in time spent on prospecting
- **40% higher email response rates** (better personalisation)
- **2x faster pipeline velocity** (leads move through stages quicker)
- **$50-100k+ saved annually** on SDR costs for a mid-size team

## But What About the Human Touch?

This is the most common objection — and it's a valid one. Relationships matter. Trust matters. A robot can't replace a genuine human conversation.

Here's the thing: AI doesn't replace your salespeople. It removes the grunt work so they can focus on what humans do best — building relationships and closing deals. Your team talks to warmer, better-qualified prospects instead of cold-calling through a list.

The best AI lead generation systems are human-in-the-loop: AI handles research, outreach, and qualification, then hands off to your team when a lead is genuinely ready to talk. The result? Your salespeople spend 80% of their time selling instead of 80% of their time hunting.

## Getting Started

You don't need to overhaul your entire sales process overnight. Start with one area:

1. **Automated prospecting:** Let AI find and research your ideal customers
2. **Intelligent outreach:** Use AI to personalise email sequences at scale
3. **Smart qualification:** Deploy lead scoring that learns from your data

Each step compounds. Within 90 days, most businesses see a measurable improvement in pipeline quality and velocity.

## Ready to See the Difference?

**[Calculate your potential savings](/tools/roi-calculator)** with our free AI ROI Calculator, or **[book a free strategy call](/contact)** and we'll show you exactly how AI lead generation could work for your business.

You can also **[chat with Arc](/tools/ai-readiness)**, our AI assistant, to explore which solutions fit your situation.`,
  },
]

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status === 'published')
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return blogPosts
    .filter((p) => p.slug !== slug && p.status === 'published')
    .slice(0, limit)
}
