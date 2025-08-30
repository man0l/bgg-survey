'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const Schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().min(2, 'Enter your company name'),
  monthlyRevenue: z.string().optional(),
  biggestChallenge: z.string().optional(),
});

export default function LeadForm({ score, pillarScores }: { score: number; pillarScores: unknown }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', monthlyRevenue: '', biggestChallenge: '' });
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.issues?.[0]?.message ?? 'Invalid input';
      setError(first);
      return;
    }
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, score, pillarScores }),
    });
    if (!res.ok) {
      setError('Submission failed. Please try again.');
      return;
    }
    setOk(true);
  };

  if (ok) {
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
      <div>
        <label className="block text-sm font-medium mb-1">What’s your monthly revenue?</label>
        <Input value={form.monthlyRevenue} onChange={(e) => setForm({ ...form, monthlyRevenue: e.target.value })} placeholder="e.g. $50k" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">What’s your biggest challenge in your own words?</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          rows={4}
          value={form.biggestChallenge}
          onChange={(e) => setForm({ ...form, biggestChallenge: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full py-3">See What&#39;s Slowing You Down</Button>
    </form>
  );
}


