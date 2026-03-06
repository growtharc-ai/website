import { headers } from 'next/headers'
import OpenAI from 'openai'

let _openai: OpenAI | null = null
function getOpenAI() {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }
  return _openai
}

const SYSTEM_PROMPT = `You are the Growth Arc AI Assistant. Growth Arc is an AI solutions company based in New Zealand, serving globally. Help visitors understand our services and qualify them as leads.

Our 4 tiers:
- AI Solutions: AI Agents, Chatbots, Virtual Assistants, Customer Service & Support, Content Creation, Strategy & Consulting
- AI Marketing: Lead Gen, SEO, Sales Automation, Booking, Ads, Analytics
- CRM Solutions: Custom, HubSpot, Salesforce, Dynamics 365
- Development & Data: Web/App Dev, BI Dashboards

We work: Discover → Design → Build → Scale.
Contact: hello@growtharc.ai

Be professional, friendly, concise — under 3 sentences unless detail needed. For pricing questions, suggest booking a free strategy call. Never make up information.`

const LEAD_CAPTURE_PROMPT = `The visitor has asked several questions and seems engaged. If you haven't already, naturally and briefly ask for their name and email so the team can follow up with more details. Keep it conversational — don't be pushy.`

// Rate limiting: 100 messages per IP per hour (5 sessions × 20 messages)
const RATE_LIMIT = 100
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

type ChatMessage = { role: 'user' | 'assistant'; content: string }

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

    const body = await request.json()
    const messages: ChatMessage[] = body.messages ?? []
    const sessionMessageCount: number = body.sessionMessageCount ?? 0

    // Validate last user message
    const lastMessage = messages[messages.length - 1]
    if (!lastMessage || lastMessage.role !== 'user') {
      return Response.json({ error: 'Invalid message.' }, { status: 400 })
    }
    if (lastMessage.content.length > 500) {
      return Response.json(
        { error: 'Message too long. Maximum 500 characters.' },
        { status: 400 }
      )
    }

    // Build messages for OpenAI
    const systemMessages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ]

    // After 3 visitor messages, nudge lead capture
    if (sessionMessageCount >= 3) {
      systemMessages.push({ role: 'system', content: LEAD_CAPTURE_PROMPT })
    }

    const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
      ...systemMessages,
      ...messages.map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    ]

    const stream = await getOpenAI().chat.completions.create({
      model: 'gpt-5.4',
      messages: chatMessages,
      stream: true,
      max_tokens: 300,
      temperature: 0.7,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content
          if (text) {
            controller.enqueue(encoder.encode(text))
          }
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
