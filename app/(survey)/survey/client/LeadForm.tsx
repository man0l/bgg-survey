'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useSurvey } from '@/hooks/SurveyProvider';

const Schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().min(2, 'Enter your company name'),
  // Removed extra questions; captured within the assessment itself
});

export default function LeadForm({ score, pillarScores }: { score: number; pillarScores: unknown }) {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const { state, markLeadSubmitted } = useSurvey();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues?.[0]?.message ?? 'Invalid input';
      setError(first);
      return;
    }
    const monthlyRevenue = (state.answers['q14'] as string | number | undefined) ?? '';
    const biggestChallenge = (state.answers['q15'] as string | number | undefined) ?? '';

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        score,
        pillarScores,
        monthlyRevenue: String(monthlyRevenue),
        biggestChallenge: String(biggestChallenge),
      }),
    });
    if (!res.ok) {
      setError('Submission failed. Please try again.');
      return;
    }
    setOk(true);
    markLeadSubmitted();
  };

  if (ok || state.leadSubmitted) {
    return <div className="text-center text-green-700">Thanks! We will send your report shortly.</div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
      </div>
      {/* Extra qualification questions moved into the assessment */}
      <Button type="submit" className="w-full py-3">Get a Full, Custom Report</Button>
    </form>
  );
}


