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

    // TODO: integrate with CRM/email/DB
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


