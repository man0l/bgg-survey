import type { AnswerMap, PillarScores, Question, PillarKey } from '../types/survey';

export function calculateScore(answers: AnswerMap, questions: Question[]) {
  const totalScore = Object.values(answers).reduce<number>((sum, value) => {
    return sum + (value ?? 0);
  }, 0);
  const percentage = Math.round((totalScore / (questions.length * 5)) * 100);
  return { totalScore, percentage };
}

export function calculatePillarScores(
  answers: AnswerMap,
  questions: Question[]
): PillarScores {
  const pillarQuestions: Record<string, string[]> = {};
  for (const q of questions) {
    if (!pillarQuestions[q.pillar]) pillarQuestions[q.pillar] = [];
    pillarQuestions[q.pillar].push(q.id);
  }

  const scores: Partial<PillarScores> = {};
  Object.keys(pillarQuestions).forEach((pillarKey) => {
    const pillar = pillarKey as PillarKey;
    const ids = pillarQuestions[pillar]!;
    const vals = ids.map((id) => (answers as Record<string, number | undefined>)[id] ?? 0);
    const score = vals.reduce((s, v) => s + v, 0);
    const maxScore = ids.length * 5;
    const percentage = Math.round((score / maxScore) * 100);
    scores[pillar] = {
      score,
      percentage,
      maxScore,
      questionCount: ids.length,
    };
  });
  return scores as PillarScores;
}

export function getMaturityLevel(percentage: number) {
  if (percentage <= 30)
    return { level: 'Founder-Centric Chaos', color: 'bg-red-100 text-red-700' };
  if (percentage <= 50)
    return { level: 'Firefighting Ops', color: 'bg-orange-100 text-orange-700' };
  if (percentage <= 70)
    return { level: 'Manual Stability', color: 'bg-yellow-100 text-yellow-700' };
  if (percentage <= 85)
    return { level: 'Optimised Ops Engine', color: 'bg-green-100 text-green-700' };
  return { level: 'AI-Enabled Scalable Agency', color: 'bg-blue-100 text-blue-700' };
}

export function getPillarMaturityLevel(percentage: number) {
  if (percentage <= 30) return 'Critical Risk';
  if (percentage <= 50) return 'Weak Foundation';
  if (percentage <= 70) return 'Developing';
  if (percentage <= 85) return 'Strong';
  return 'Optimised';
}


