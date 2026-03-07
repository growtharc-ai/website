import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import OpenAI from 'openai'

async function checkAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return !!session?.value
}

const SYSTEM_PROMPT = `You are a content writer for Growth Arc (growtharc.ai), an AI solutions company based in New Zealand. You write blog articles about AI automation, CRM strategy, digital marketing, and business growth.

Your writing style:
- Professional but approachable — not corporate jargon
- Data-driven — include specific numbers, benchmarks, and statistics
- Practical — give actionable advice, not theory
- NZ-focused when relevant but globally applicable
- Use British/NZ spelling (optimise, colour, etc.)

Article format (markdown):
- Start with 1-2 introductory paragraphs (no heading needed — the title is the H1)
- Use ## for main sections (5-7 sections)
- Include **bold** for key stats and takeaways
- Include bullet lists and numbered lists where appropriate
- End with a "What's Your Next Step?" or similar CTA section
- Reference Growth Arc tools: AI Readiness Assessment (/tools/ai-readiness), ROI Calculator (/tools/roi-calculator), contact page (/contact)
- Target 800-1200 words
- Do NOT include the title as an H1 — it's rendered separately

Return a JSON object with:
{
  "title": "Article title",
  "slug": "url-friendly-slug",
  "category": "AI Strategy" | "CRM" | "Marketing" | "Automation" | "Development",
  "metaDescription": "150 char max SEO description",
  "excerpt": "1-2 sentence excerpt for cards",
  "readTime": "X min read",
  "tags": ["tag1", "tag2", ...],
  "content": "Full markdown content"
}`

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { topic, instructions } = await req.json()

  if (!topic) {
    return NextResponse.json({ error: 'Topic is required' }, { status: 400 })
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const models = ['gpt-4o', 'gpt-4o-mini']

  for (const model of models) {
    try {
      const completion = await openai.chat.completions.create({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          {
            role: 'user',
            content: `Write a blog article about: ${topic}${instructions ? `\n\nAdditional instructions: ${instructions}` : ''}`,
          },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.7,
        max_tokens: 4000,
      })

      const result = JSON.parse(completion.choices[0].message.content || '{}')

      // Add defaults
      const categoryColors: Record<string, { color: string; bg: string }> = {
        'AI Strategy': { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
        CRM: { color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
        Marketing: { color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
        Automation: { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
        Development: { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
      }

      const colors = categoryColors[result.category] || categoryColors['AI Strategy']

      return NextResponse.json({
        ...result,
        categoryColor: colors.color,
        categoryBg: colors.bg,
        author: 'Growth Arc Team',
        date: new Date().toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' }),
        status: 'draft',
        publishedAt: '',
      })
    } catch (error: unknown) {
      const err = error as { status?: number }
      if (model === models[models.length - 1] || err.status === 401) {
        console.error('Article generation failed:', error)
        return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
      }
    }
  }

  return NextResponse.json({ error: 'All models failed' }, { status: 500 })
}
