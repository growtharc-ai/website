import { headers } from 'next/headers'
import OpenAI from 'openai'

const isDev = process.env.NODE_ENV === 'development'

let _openai: OpenAI | null = null
function getOpenAI() {
  if (!_openai) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) throw new Error('OPENAI_API_KEY environment variable is not set')
    _openai = new OpenAI({ apiKey })
  }
  return _openai
}

const SYSTEM_PROMPT = `Based on this AI readiness assessment, provide a personalised analysis. Include:
1) Their readiness level and what it means
2) Top 3 areas where AI would have the biggest impact for them based on their answers
3) Specific Growth Arc services recommended (use actual service page URLs like /services/ai-agents, /services/ai-chatbots, /services/ai-consulting, /services/crm-hubspot, /services/ai-lead-generation, /services/sales-automation, /services/traffic-seo, /services/ai-content, /services/ai-customer-service, /services/ai-virtual-assistants, /services/data-analytics, /services/web-development)
4) A suggested first step

Format as JSON with these fields: readinessLevel (string), score (number), summary (string paragraph), topOpportunities (array of exactly 3 objects with "title" and "description"), recommendedServices (array of exactly 3 objects with "name" and "href"), firstStep (string).

IMPORTANT: Return ONLY valid JSON. No markdown, no code fences.`

const MODELS = ['gpt-4o', 'gpt-4o-mini']

const RATE_LIMIT = 20
const RATE_WINDOW = 3_600_000
const rateMap = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateMap.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW)
  rateMap.set(ip, recent)
  if (recent.length >= RATE_LIMIT) return true
  recent.push(now)
  return false
}

export async function POST(request: Request) {
  try {
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const { score, band, answers, questions } = body

    const userPrompt = `AI Readiness Assessment Results:
- Score: ${score}/21
- Band: ${band}

Answers:
${Array.isArray(questions) && Array.isArray(answers) ? (questions as string[]).map((q: string, i: number) => `${i + 1}. ${q}\n   Answer: ${(answers as string[])[i]}`).join('\n') : 'Not provided'}

Provide a personalised analysis with recommendations.`

    const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt },
    ]

    let result = null
    let lastError: unknown = null

    for (const model of MODELS) {
      try {
        console.log(`[Readiness API] Trying model: ${model}`)
        const completion = await getOpenAI().chat.completions.create({
          model,
          messages: chatMessages,
          max_completion_tokens: 700,
          temperature: 0.7,
        })

        const content = completion.choices[0]?.message?.content
        if (!content) throw new Error('Empty response from model')

        const cleaned = content.replace(/```json?\n?/g, '').replace(/```\n?/g, '').trim()
        result = JSON.parse(cleaned)
        console.log(`[Readiness API] Success with model: ${model}`)
        break
      } catch (err) {
        lastError = err
        console.error(`[Readiness API] ${model} failed:`, err instanceof Error ? err.message : err)
      }
    }

    if (!result) {
      console.error('[Readiness API] All models failed:', lastError)
      return Response.json(
        { error: isDev ? `All models failed: ${lastError instanceof Error ? lastError.message : String(lastError)}` : 'Assessment unavailable. Please try again later.' },
        { status: 502 }
      )
    }

    return Response.json(result)
  } catch (error) {
    console.error('[Readiness API] Unhandled error:', error)
    return Response.json(
      { error: isDev ? String(error) : 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
