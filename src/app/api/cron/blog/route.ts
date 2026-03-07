import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { blogPosts } from '@/data/blog-posts'

const CRON_SECRET = process.env.CRON_SECRET

export async function GET(req: NextRequest) {
  // Verify Vercel Cron authorization
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const existingTitles = blogPosts.map((p) => p.title).join(', ')

  try {
    // Generate a topic
    const topicRes = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'Suggest ONE blog topic for Growth Arc, an AI solutions company. Return JSON with "topic" (a title/description). Focus on practical AI, CRM, or marketing topics for NZ businesses.',
        },
        {
          role: 'user',
          content: `Suggest 1 new topic. Existing: ${existingTitles}. Avoid duplicates.`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.9,
      max_tokens: 200,
    })

    const { topic } = JSON.parse(topicRes.choices[0].message.content || '{}')

    // Generate the article
    const articleRes = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a content writer for Growth Arc (growtharc.ai), an AI solutions company based in New Zealand. Write a blog article in markdown format.

Style: Professional but approachable, data-driven, practical. Use NZ spelling.
Format: ## headings, bold stats, bullet lists, 800-1200 words. End with CTA referencing /tools/ai-readiness and /contact.

Return JSON: { "title", "slug", "category" (AI Strategy|CRM|Marketing|Automation|Development), "metaDescription" (150 chars), "excerpt", "readTime", "tags", "content" }`,
        },
        {
          role: 'user',
          content: `Write about: ${topic}`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 4000,
    })

    const article = JSON.parse(articleRes.choices[0].message.content || '{}')

    const categoryColors: Record<string, { color: string; bg: string }> = {
      'AI Strategy': { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
      CRM: { color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
      Marketing: { color: 'text-[var(--ga-green)]', bg: 'bg-[var(--ga-green)]/10' },
      Automation: { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
      Development: { color: 'text-[var(--ga-blue)]', bg: 'bg-[var(--ga-blue)]/10' },
    }

    const colors = categoryColors[article.category] || categoryColors['AI Strategy']
    const now = new Date()

    // Add as draft to the posts file
    const POSTS_FILE = join(process.cwd(), 'src/data/blog-posts.ts')
    const fileContent = readFileSync(POSTS_FILE, 'utf-8')

    const newPostEntry = `  {
    slug: ${JSON.stringify(article.slug)},
    title: ${JSON.stringify(article.title)},
    category: ${JSON.stringify(article.category)},
    categoryColor: ${JSON.stringify(colors.color)},
    categoryBg: ${JSON.stringify(colors.bg)},
    metaDescription: ${JSON.stringify(article.metaDescription)},
    excerpt: ${JSON.stringify(article.excerpt)},
    readTime: ${JSON.stringify(article.readTime || '5 min read')},
    author: "Growth Arc Team",
    date: ${JSON.stringify(now.toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' }))},
    tags: ${JSON.stringify(article.tags || [])},
    status: 'draft' as const,
    publishedAt: '',
    content: ${JSON.stringify(article.content)},
  }`

    const updatedContent = fileContent.replace(
      /\n\]\n\nexport function getPublishedPosts/,
      `,\n${newPostEntry},\n]\n\nexport function getPublishedPosts`
    )

    writeFileSync(POSTS_FILE, updatedContent, 'utf-8')

    return NextResponse.json({
      success: true,
      title: article.title,
      slug: article.slug,
      status: 'draft',
    })
  } catch (error) {
    console.error('Cron blog generation failed:', error)
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
  }
}
