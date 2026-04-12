import { corsHeaders } from '@supabase/supabase-js/cors'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

const EmailSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.string().email().max(255),
  company: z.string().max(200).optional().default(''),
  phone: z.string().max(20).optional().default(''),
  subject: z.string().max(300).optional().default(''),
  message: z.string().max(5000).optional().default(''),
  preferredDate: z.string().optional().default(''),
  preferredTime: z.string().optional().default(''),
  formType: z.string().max(100).optional().default('Contact Form'),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured')

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured')

    const parsed = EmailSchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid input', details: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { firstName, lastName, email, company, phone, subject, message, preferredDate, preferredTime, formType } = parsed.data
    const fullName = `${firstName} ${lastName}`

    const emailSubject = subject
      ? `${formType}: ${subject} - from ${fullName}`
      : `${formType} Request from ${fullName}`

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4169E1; border-bottom: 2px solid #4169E1; padding-bottom: 10px;">${formType} Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px;">${fullName}</td></tr>
          <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding: 8px; font-weight: bold; color: #333;">Company:</td><td style="padding: 8px;">${company}</td></tr>` : ''}
          ${phone ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>` : ''}
          ${preferredDate ? `<tr><td style="padding: 8px; font-weight: bold; color: #333;">Preferred Date:</td><td style="padding: 8px;">${preferredDate}</td></tr>` : ''}
          ${preferredTime ? `<tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #333;">Preferred Time:</td><td style="padding: 8px;">${preferredTime}</td></tr>` : ''}
        </table>
        ${message ? `<div style="margin-top: 20px; padding: 15px; background: #f0f4ff; border-radius: 8px;"><h3 style="color: #333; margin-top: 0;">Message:</h3><p style="color: #555; white-space: pre-wrap;">${message}</p></div>` : ''}
        <p style="margin-top: 20px; color: #999; font-size: 12px;">Sent from DFT Consult website</p>
      </div>
    `

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'DFT Consult <onboarding@resend.dev>',
        to: ['info@dftconsult.com'],
        reply_to: email,
        subject: emailSubject,
        html: htmlBody,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(`Resend API error [${response.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
