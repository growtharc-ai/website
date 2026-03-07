import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import OpenAI from 'openai'

async function checkAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return !!session?.value
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug, title, category } = await req.json()

  if (!slug || !title) {
    return NextResponse.json({ error: 'Missing slug or title' }, { status: 400 })
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  const prompt = `Modern dark abstract digital artwork for a tech blog article about "${title}". Style: dark background (#0A0B10), with subtle blue (#0077EE) and green (#00C896) gradient accents as glowing elements. Minimal, premium, Vercel/Linear aesthetic. Abstract geometric shapes, soft ambient glows, no text, no logos, no people. Category: ${category || 'Technology'}. 16:9 landscape orientation.`

  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
      style: 'vivid',
    })

    const imageUrl = response.data?.[0]?.url
    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL returned' }, { status: 500 })
    }

    // Download the image
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      return NextResponse.json({ error: 'Failed to download image' }, { status: 500 })
    }

    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer())

    // Save to filesystem
    const imagesDir = join(process.cwd(), 'public/blog/images')
    mkdirSync(imagesDir, { recursive: true })
    const filePath = join(imagesDir, `${slug}.png`)
    writeFileSync(filePath, imageBuffer)

    const heroImage = `/blog/images/${slug}.png`

    return NextResponse.json({ success: true, heroImage })
  } catch (error: unknown) {
    console.error('Image generation failed:', error)
    const message = error instanceof Error ? error.message : 'Image generation failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
