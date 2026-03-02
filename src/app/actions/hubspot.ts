'use server'

const HUBSPOT_API = 'https://api.hubapi.com/crm/v3/objects'

type Result = { success: true } | { success: false; error: string }

export async function submitContactForm(formData: FormData): Promise<Result> {
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

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  // 1. Create contact (or get existing one on 409)
  let contactId: string

  const contactRes = await fetch(`${HUBSPOT_API}/contacts`, {
    method: 'POST',
    headers,
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
    headers,
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
    { method: 'PUT', headers }
  )

  if (!assocRes.ok) {
    console.error('HubSpot association failed:', assocRes.status)
  }

  // 4. Create note with service interest + message, associated with both contact and deal
  const noteBody = `Service Interest: ${service || 'Not specified'}\nMessage: ${message}`

  const noteRes = await fetch(`${HUBSPOT_API}/notes`, {
    method: 'POST',
    headers,
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
