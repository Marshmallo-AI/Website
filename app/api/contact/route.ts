import { NextResponse } from 'next/server';

const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName || '').trim();
    const lastName = String(body.lastName || '').trim();
    const email = String(body.email || '').trim();
    const company = String(body.company || '').trim();
    const message = String(body.message || '').trim();

    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
    const to = process.env.RESEND_TO || 'aman@marshmallo.ai';

    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      company: escapeHtml(company),
      message: escapeHtml(message),
    };

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Company:</strong> ${safe.company}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message.replace(/\n/g, '<br />')}</p>
    `;

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry from ${firstName} ${lastName}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
