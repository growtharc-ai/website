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

const MODELS = ['gpt-4o', 'gpt-4o-mini']

const RATE_LIMIT = 10
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

/* ------------------------------------------------------------------ */
/* PageSpeed Insights                                                  */
/* ------------------------------------------------------------------ */

type PSIResult = {
  performanceScore: number
  seoScore: number
  accessibilityScore: number
  bestPracticesScore: number
  fcp: string
  lcp: string
  tbt: string
  cls: string
  speedIndex: string
  failedAudits: string[]
}

async function fetchPageSpeed(url: string, strategy: 'mobile' | 'desktop'): Promise<PSIResult | null> {
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY
  if (!apiKey) {
    console.error('[Audit API] GOOGLE_PAGESPEED_API_KEY not set')
    return null
  }

  const params = new URLSearchParams({
    url,
    strategy,
    category: 'performance',
    key: apiKey,
  })
  // Add multiple categories
  params.append('category', 'accessibility')
  params.append('category', 'seo')
  params.append('category', 'best-practices')

  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
  console.log(`[Audit API] Fetching PageSpeed (${strategy}) for: ${url}`)

  const res = await fetch(endpoint, { signal: AbortSignal.timeout(60000) })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error(`[Audit API] PageSpeed ${strategy} error ${res.status}:`, text.slice(0, 500))
    return null
  }

  const data = await res.json()
  const cats = data.lighthouseResult?.categories ?? {}
  const audits = data.lighthouseResult?.audits ?? {}

  // Extract failed audits (score < 0.9, excluding informative/manual)
  const failedAudits: string[] = []
  for (const [id, audit] of Object.entries(audits)) {
    const a = audit as { score?: number | null; title?: string; scoreDisplayMode?: string }
    if (
      a.score !== null &&
      a.score !== undefined &&
      a.score < 0.9 &&
      a.scoreDisplayMode !== 'informative' &&
      a.scoreDisplayMode !== 'manual' &&
      a.scoreDisplayMode !== 'notApplicable'
    ) {
      failedAudits.push(`${a.title || id} (${Math.round((a.score ?? 0) * 100)})`)
    }
  }

  return {
    performanceScore: Math.round((cats.performance?.score ?? 0) * 100),
    seoScore: Math.round((cats.seo?.score ?? 0) * 100),
    accessibilityScore: Math.round((cats.accessibility?.score ?? 0) * 100),
    bestPracticesScore: Math.round((cats['best-practices']?.score ?? 0) * 100),
    fcp: audits['first-contentful-paint']?.displayValue ?? 'N/A',
    lcp: audits['largest-contentful-paint']?.displayValue ?? 'N/A',
    tbt: audits['total-blocking-time']?.displayValue ?? 'N/A',
    cls: audits['cumulative-layout-shift']?.displayValue ?? 'N/A',
    speedIndex: audits['speed-index']?.displayValue ?? 'N/A',
    failedAudits: failedAudits.slice(0, 15),
  }
}

/* ------------------------------------------------------------------ */
/* OpenAI analysis                                                     */
/* ------------------------------------------------------------------ */

function buildPrompt(url: string, mobile: PSIResult, desktop: PSIResult): string {
  return `You are an expert website analyst for Growth Arc. Analyse this real PageSpeed Insights data for ${url}:

Mobile Performance: ${mobile.performanceScore}/100
Desktop Performance: ${desktop.performanceScore}/100
SEO Score: ${mobile.seoScore}/100
Accessibility Score: ${mobile.accessibilityScore}/100
Best Practices: ${mobile.bestPracticesScore}/100
First Contentful Paint: ${mobile.fcp}
Largest Contentful Paint: ${mobile.lcp}
Total Blocking Time: ${mobile.tbt}
Cumulative Layout Shift: ${mobile.cls}
Speed Index: ${mobile.speedIndex}
Failed Audits (top): ${mobile.failedAudits.join('; ') || 'None'}

Based on this REAL data, provide an expert analysis. Format as JSON:
{
  "overallScore": number (weighted average of all scores),
  "categories": [
    { "name": "Performance", "mobileScore": number, "desktopScore": number, "status": "good"|"needs-work"|"critical", "findings": ["3 specific findings based on real metrics"] },
    { "name": "SEO", "score": number, "status": "good"|"needs-work"|"critical", "findings": ["3 specific findings"] },
    { "name": "Accessibility", "score": number, "status": "good"|"needs-work"|"critical", "findings": ["3 specific findings"] },
    { "name": "Best Practices", "score": number, "status": "good"|"needs-work"|"critical", "findings": ["3 specific findings"] },
    { "name": "AI-Readiness", "score": number (0-100), "status": "good"|"needs-work"|"critical", "findings": ["3 AI-specific recommendations — chatbots, automation, structured data, modern tech"] }
  ],
  "coreWebVitals": { "fcp": "${mobile.fcp}", "lcp": "${mobile.lcp}", "tbt": "${mobile.tbt}", "cls": "${mobile.cls}", "speedIndex": "${mobile.speedIndex}" },
  "topPriorities": ["3 specific actionable priorities based on real data"],
  "recommendedServices": [{ "name": "service name", "href": "/services/slug" }, ...3 total],
  "summary": "paragraph summary referencing actual scores"
}

Use actual Growth Arc service URLs: /services/traffic-seo, /services/web-development, /services/ai-chatbots, /services/ai-agents, /services/data-analytics, /services/ai-content, /services/ai-consulting, /services/ai-customer-service.
Be specific — reference actual scores and metrics. RETURN ONLY VALID JSON.`
}

/* ------------------------------------------------------------------ */
/* Route handler                                                       */
/* ------------------------------------------------------------------ */

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

    const rawUrl = typeof body.url === 'string' ? body.url.trim() : ''
    if (!rawUrl) {
      return Response.json({ error: 'Please enter a URL.' }, { status: 400 })
    }

    // Normalise URL
    let url = rawUrl
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`
    try {
      new URL(url) // validate
    } catch {
      return Response.json({ error: 'Invalid URL. Please enter a valid website address.' }, { status: 400 })
    }

    // Fetch PageSpeed data — mobile and desktop in parallel
    const [mobile, desktop] = await Promise.all([
      fetchPageSpeed(url, 'mobile'),
      fetchPageSpeed(url, 'desktop'),
    ])

    if (!mobile && !desktop) {
      return Response.json(
        { error: 'Could not analyse this URL. Please check the address and try again.' },
        { status: 422 }
      )
    }

    // Use mobile as primary, fall back to desktop
    const primary = mobile ?? desktop!
    const desktopData = desktop ?? mobile!

    // Send to OpenAI for analysis
    const chatMessages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'user', content: buildPrompt(url, primary, desktopData) },
    ]

    let result = null
    let lastError: unknown = null

    for (const model of MODELS) {
      try {
        console.log(`[Audit API] Trying model: ${model}`)
        const completion = await getOpenAI().chat.completions.create({
          model,
          messages: chatMessages,
          max_completion_tokens: 1200,
          temperature: 0.5,
        })

        const content = completion.choices[0]?.message?.content
        if (!content) throw new Error('Empty response')

        const cleaned = content.replace(/```json?\n?/g, '').replace(/```\n?/g, '').trim()
        result = JSON.parse(cleaned)
        console.log(`[Audit API] Success with model: ${model}`)
        break
      } catch (err) {
        lastError = err
        console.error(`[Audit API] ${model} failed:`, err instanceof Error ? err.message : err)
      }
    }

    if (!result) {
      console.error('[Audit API] All models failed:', lastError)
      return Response.json(
        { error: isDev ? `AI analysis failed: ${lastError instanceof Error ? lastError.message : String(lastError)}` : 'Analysis temporarily unavailable.' },
        { status: 502 }
      )
    }

    // Attach raw PSI data for the frontend
    result.rawPSI = {
      mobile: primary,
      desktop: desktopData,
    }

    return Response.json(result)
  } catch (error) {
    console.error('[Audit API] Unhandled error:', error)
    return Response.json(
      { error: isDev ? String(error) : 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
