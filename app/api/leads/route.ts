import { NextResponse } from 'next/server';
import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  score: z.number().int().nonnegative(),
  pillarScores: z.record(z.string(), z.any()),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 });
    }

    const webhookUrl = process.env.ZAPIER_LEADS_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/4829688/uhkbkrs/';
    const zapierRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    });

    if (!zapierRes.ok) {
      return NextResponse.json({ ok: false, error: 'Upstream webhook error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


