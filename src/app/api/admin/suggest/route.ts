import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import OpenAI from 'openai'
import { blogPosts } from '@/data/blog-posts'

async function checkAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return !!session?.value
}

export async function GET() {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const existingTitles = blogPosts.map((p) => p.title).join(', ')

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You suggest blog topics for Growth Arc, an AI solutions company. Return a JSON array of 5 topic suggestions. Each should have "topic" (1-2 sentence description) and "category" ("AI Strategy" | "CRM" | "Marketing" | "Automation" | "Development"). Focus on practical, actionable topics that NZ businesses would search for.',
        },
        {
          role: 'user',
          content: `Suggest 5 new blog topics. Existing articles: ${existingTitles}. Avoid duplicates.`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.9,
      max_tokens: 1000,
    })

    const result = JSON.parse(completion.choices[0].message.content || '{}')
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Failed to generate suggestions' }, { status: 500 })
  }
}
