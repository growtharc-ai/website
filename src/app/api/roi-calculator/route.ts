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

const SYSTEM_PROMPT = `You are an AI ROI analyst for Growth Arc. Based on the business data provided, calculate and present a realistic ROI estimate. Include:
1. Estimated hours saved per week and per year
2. Estimated cost savings per year (use $35/hour as average NZ employee cost)
3. Estimated productivity gain percentage
4. Which Growth Arc services would deliver the most impact for this business
5. A brief recommendation paragraph

Be specific with numbers. Be optimistic but realistic. Format your response as JSON with these fields: hoursSavedWeekly (number), hoursSavedYearly (number), costSavingsYearly (number), productivityGainPercent (number), topServices (array of exactly 3 objects with "name" and "href" fields — use actual Growth Arc service page URLs like /services/ai-agents), recommendation (string paragraph).

IMPORTANT: Return ONLY valid JSON. No markdown, no code fences, no explanation text outside the JSON.`

const MODELS = ['gpt-4o', 'gpt-4o-mini']

// Rate limiting: 20 calculations per IP per hour
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
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const { industry, teamSize, revenue, hoursAdmin, hoursSupport, hoursMarketing, hoursSales, interests } = body

    const userPrompt = `Business profile:
- Industry: ${industry}
- Team size: ${teamSize}
- Monthly revenue: ${revenue}

Current weekly hours spent on manual tasks:
- Data entry & admin: ${hoursAdmin} hours
- Customer support: ${hoursSupport} hours
- Marketing tasks: ${hoursMarketing} hours
- Sales follow-ups & CRM: ${hoursSales} hours
- Total manual hours: ${Number(hoursAdmin) + Number(hoursSupport) + Number(hoursMarketing) + Number(hoursSales)} hours/week

AI solutions they're interested in: ${Array.isArray(interests) ? interests.join(', ') : 'Not specified'}

Calculate their AI ROI and recommend the top 3 Growth Arc services.`

    const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userPrompt },
    ]

    let result = null
    let lastError: unknown = null

    for (const model of MODELS) {
      try {
        console.log(`[ROI API] Trying model: ${model}`)
        const completion = await getOpenAI().chat.completions.create({
          model,
          messages: chatMessages,
          max_completion_tokens: 600,
          temperature: 0.7,
        })

        const content = completion.choices[0]?.message?.content
        if (!content) throw new Error('Empty response from model')

        // Parse JSON — strip any markdown fences if present
        const cleaned = content.replace(/```json?\n?/g, '').replace(/```\n?/g, '').trim()
        result = JSON.parse(cleaned)
        console.log(`[ROI API] Success with model: ${model}`)
        break
      } catch (err) {
        lastError = err
        console.error(`[ROI API] ${model} failed:`, err instanceof Error ? err.message : err)
      }
    }

    if (!result) {
      console.error('[ROI API] All models failed. Last error:', lastError)
      return Response.json(
        {
          error: isDev
            ? `All models failed: ${lastError instanceof Error ? lastError.message : String(lastError)}`
            : 'Calculator is temporarily unavailable. Please try again later.',
        },
        { status: 502 }
      )
    }

    return Response.json(result)
  } catch (error) {
    console.error('[ROI API] Unhandled error:', error)
    return Response.json(
      { error: isDev ? String(error) : 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
