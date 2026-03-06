import { headers } from 'next/headers'
import OpenAI from 'openai'

const isDev = process.env.NODE_ENV === 'development'

let _openai: OpenAI | null = null
function getOpenAI() {
  if (!_openai) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set')
    }
    console.log('[Chat API] Initialising OpenAI client (key starts with:', apiKey.slice(0, 7) + '...)')
    _openai = new OpenAI({ apiKey })
  }
  return _openai
}

const SYSTEM_PROMPT = `Your name is Arc. You are Growth Arc's AI assistant. When referring to yourself, use the name Arc. Growth Arc is an AI solutions company based in New Zealand, serving globally. Help visitors understand our services and qualify them as leads.

Our 4 tiers:
- AI Solutions: AI Agents, Chatbots, Virtual Assistants, Customer Service & Support, Content Creation, Strategy & Consulting
- AI Marketing: Lead Gen, SEO, Sales Automation, Booking, Ads, Analytics
- CRM Solutions: Custom, HubSpot, Salesforce, Dynamics 365
- Development & Data: Web/App Dev, BI Dashboards

We work: Discover → Design → Build → Scale.
Contact: hello@growtharc.ai

Be professional, friendly, concise — under 3 sentences unless detail needed. For pricing questions, suggest booking a free strategy call. Never make up information.`

const LEAD_CAPTURE_PROMPT = `The visitor has asked several questions and seems engaged. If you haven't already, naturally and briefly ask for their name and email so the team can follow up with more details. Keep it conversational — don't be pushy.`

// Model cascade: try each in order until one works
const MODELS = ['gpt-4o', 'gpt-4o-mini']

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

function logError(label: string, error: unknown) {
  if (error instanceof OpenAI.APIError) {
    console.error(`[Chat API] ${label}:`, {
      status: error.status,
      message: error.message,
      code: error.code,
      type: error.type,
    })
  } else if (error instanceof Error) {
    console.error(`[Chat API] ${label}:`, {
      name: error.name,
      message: error.message,
    })
  } else {
    console.error(`[Chat API] ${label}:`, error)
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof OpenAI.APIError) {
    return `OpenAI ${error.status}: ${error.message}`
  }
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}

type ChatMessage = { role: 'user' | 'assistant'; content: string }

async function createChatStream(
  chatMessages: OpenAI.ChatCompletionMessageParam[],
  model: string
) {
  console.log(`[Chat API] Trying model: ${model}`)
  return getOpenAI().chat.completions.create({
    model,
    messages: chatMessages,
    stream: true,
    max_completion_tokens: 300,
    temperature: 0.7,
  })
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

    const messages: ChatMessage[] = Array.isArray(body.messages) ? body.messages : []
    const sessionMessageCount: number =
      typeof body.sessionMessageCount === 'number' ? body.sessionMessageCount : 0

    // Validate last user message
    const lastMessage = messages[messages.length - 1]
    if (
      !lastMessage ||
      lastMessage.role !== 'user' ||
      typeof lastMessage.content !== 'string'
    ) {
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

    // Try models in cascade order
    let stream
    let lastError: unknown = null
    for (const model of MODELS) {
      try {
        stream = await createChatStream(chatMessages, model)
        console.log(`[Chat API] Success with model: ${model}`)
        break
      } catch (err) {
        lastError = err
        logError(`${model} failed`, err)
      }
    }

    if (!stream) {
      const errorDetail = getErrorMessage(lastError)
      console.error(`[Chat API] All models failed. Last error: ${errorDetail}`)
      return Response.json(
        {
          error: isDev
            ? `All models failed: ${errorDetail}`
            : 'Chat is temporarily unavailable. Please try again later.',
        },
        { status: 502 }
      )
    }

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (streamError) {
          logError('Streaming error', streamError)
          controller.enqueue(
            encoder.encode('\n\n[Sorry, an error occurred. Please try again.]')
          )
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    logError('Unhandled error', error)

    const userMessage =
      (error as Error).message === 'OPENAI_API_KEY environment variable is not set'
        ? 'Chat is temporarily unavailable.'
        : isDev
          ? getErrorMessage(error)
          : 'Something went wrong. Please try again.'

    return Response.json({ error: userMessage }, { status: 500 })
  }
}
