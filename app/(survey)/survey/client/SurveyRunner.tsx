
'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { questions as defaultQuestions } from '@/data/questions';
import type { Question } from '@/types/survey';
import { calculatePillarScores, calculateScore } from '@/lib/scoring';
import { useSurvey } from '@/hooks/SurveyProvider';
import Button from '@/components/ui/Button';

interface Props { questions?: Question[] }

export default function SurveyRunner({ questions = defaultQuestions }: Props) {
  const [hydrated, setHydrated] = useState(false);
  const { state, selectAnswer, next, back } = useSurvey();
  const current = questions[state.step];
  const isLast = state.step === questions.length - 1;
  const router = useRouter();

  useMemo(() => calculateScore(state.answers, questions), [state.answers, questions]);
  useMemo(() => calculatePillarScores(state.answers, questions), [state.answers, questions]);

  useEffect(() => setHydrated(true), []);

  const goResults = () => {
    router.push('/survey/results');
  };

  if (!current || !hydrated) return null;

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Button onClick={back} variant="secondary" className="p-2 rounded-full" aria-label="Back">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold text-center px-2">{current.title}</h1>
            <div className="w-9" />
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {state.step + 1} of {questions.length}</span>
              <span>{Math.round(((state.step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(((state.step + 1) / questions.length) * 100)}>
              <div className="h-2 rounded-full transition-all duration-300 bg-[#ec4899]" style={{ width: `${((state.step + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 leading-tight mb-6">{current.question}</h2>
            <div className="space-y-3">
              {current.options.map((opt) => {
                const selected = state.answers[current.id] === opt.value;
                const handleSelect = () => {
                  selectAnswer(current.id, opt.value);
                  if (isLast) {
                    goResults();
                  } else {
                    next();
                  }
                };
                return (
                  <button
                    key={opt.value}
                    onClick={handleSelect}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 transform group cursor-pointer ${
                      selected ? 'border-blue-500 bg-blue-50 shadow-md scale-105' : 'border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-400 hover:scale-[1.02]'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-gray-100 text-gray-600 rounded-md flex items-center justify-center text-sm font-bold mr-3 transition-transform duration-300 group-hover:scale-110">{opt.letter}</span>
                      <span className="text-sm font-medium text-gray-800 leading-tight">{opt.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


