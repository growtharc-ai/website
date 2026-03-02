'use server'

import { headers } from 'next/headers'

const HUBSPOT_API = 'https://api.hubapi.com/crm/v3/objects'

type Result = { success: true } | { success: false; error: string }

// --- Rate limiting (in-memory, per-IP, 5 requests/hour) ---
const rateMap = new Map<string, number[]>()
const RATE_LIMIT = 5
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateMap.get(ip)?.filter((t) => now - t < RATE_WINDOW) ?? []
  rateMap.set(ip, timestamps)
  if (timestamps.length >= RATE_LIMIT) return true
  timestamps.push(now)
  return false
}

export async function submitContactForm(formData: FormData): Promise<Result> {
  // --- Rate limiting ---
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return { success: false, error: 'Too many submissions. Please try again later.' }
  }

  // --- Honeypot check ---
  const honeypot = (formData.get('website') as string) ?? ''
  if (honeypot) {
    // Bot filled the hidden field — silently fake success
    return { success: true }
  }

  // --- Turnstile verification ---
  const turnstileToken = formData.get('cf-turnstile-response') as string
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
  if (!turnstileToken || !turnstileSecret) {
    return { success: false, error: 'Please complete the verification check.' }
  }

  const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
      remoteip: ip,
    }),
  })

  const turnstileData = await turnstileRes.json()
  if (!turnstileData.success) {
    return { success: false, error: 'Verification failed. Please try again.' }
  }

  // --- HubSpot submission ---
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    return { success: false, error: 'Server configuration error. Please try again later.' }
  }

  const name = (formData.get('name') as string)?.trim() ?? ''
  const email = (formData.get('email') as string)?.trim() ?? ''
  const company = (formData.get('company') as string)?.trim() ?? ''
  const service = (formData.get('service') as string)?.trim() ?? ''
  const message = (formData.get('message') as string)?.trim() ?? ''

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const nameParts = name.split(' ')
  const firstname = nameParts[0]
  const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

  const hubspotHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  // 1. Create contact (or get existing one on 409)
  let contactId: string

  const contactRes = await fetch(`${HUBSPOT_API}/contacts`, {
    method: 'POST',
    headers: hubspotHeaders,
    body: JSON.stringify({
      properties: {
        email,
        firstname,
        lastname,
        company,
        message,
      },
    }),
  })

  if (contactRes.ok) {
    const data = await contactRes.json()
    contactId = data.id
  } else if (contactRes.status === 409) {
    // Contact already exists — extract ID from conflict response
    const err = await contactRes.json()
    const existingId = err?.message?.match(/Existing ID:\s*(\d+)/)?.[1]
    if (!existingId) {
      return { success: false, error: 'Something went wrong. Please try again.' }
    }
    contactId = existingId
  } else {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // 2. Create deal
  const dealname = `Growth Arc — ${company || name}`

  const dealRes = await fetch(`${HUBSPOT_API}/deals`, {
    method: 'POST',
    headers: hubspotHeaders,
    body: JSON.stringify({
      properties: {
        dealname,
        pipeline: '1609755080',
        dealstage: '2685118914',
        description: `Service Interest: ${service || 'Not specified'}\n\n${message}`,
      },
    }),
  })

  if (!dealRes.ok) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  const deal = await dealRes.json()
  const dealId = deal.id

  // 3. Associate deal → contact
  const assocRes = await fetch(
    `${HUBSPOT_API}/deals/${dealId}/associations/contacts/${contactId}/deal_to_contact`,
    { method: 'PUT', headers: hubspotHeaders }
  )

  if (!assocRes.ok) {
    console.error('HubSpot association failed:', assocRes.status)
  }

  // 4. Create note with service interest + message, associated with both contact and deal
  const noteBody = `<strong>Service Interest:</strong> ${service || 'Not specified'}<br><br><strong>Message:</strong> ${message}`

  const noteRes = await fetch(`${HUBSPOT_API}/notes`, {
    method: 'POST',
    headers: hubspotHeaders,
    body: JSON.stringify({
      properties: {
        hs_note_body: noteBody,
        hs_timestamp: new Date().toISOString(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
        },
        {
          to: { id: dealId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 }],
        },
      ],
    }),
  })

  if (!noteRes.ok) {
    console.error('HubSpot note creation failed:', noteRes.status)
  }

  return { success: true }
}
