 'use client';

import { useEffect, useReducer, useState } from 'react';
import type { AnswerMap } from '../types/survey';

export interface SurveyState {
  step: number;
  answers: AnswerMap;
}

type Action =
  | { type: 'answer'; id: string; value: number }
  | { type: 'step'; delta: 1 | -1 }
  | { type: 'reset' }
  | { type: 'hydrate'; state: SurveyState };

function reducer(state: SurveyState, action: Action): SurveyState {
  switch (action.type) {
    case 'answer':
      return {
        ...state,
        answers: { ...state.answers, [action.id]: action.value as any },
      };
    case 'step':
      return { ...state, step: Math.max(0, state.step + action.delta) };
    case 'reset':
      return { step: 0, answers: {} };
    case 'hydrate':
      return { ...state, ...action.state };
    default:
      return state;
  }
}

const STORAGE_KEY = 'opscore_state_v1';

export function useSurveyState(initial: SurveyState = { step: 0, answers: {} }) {
  // To avoid hydration mismatches, initialize with the provided server value
  // and then hydrate from localStorage on the client after mount.
  const [state, dispatch] = useReducer(reducer, initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Hydrate from localStorage after mount
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as SurveyState;
        dispatch({ type: 'hydrate', state: parsed });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const selectAnswer = (id: string, value: number) => dispatch({ type: 'answer', id, value });
  const next = () => dispatch({ type: 'step', delta: 1 });
  const back = () => dispatch({ type: 'step', delta: -1 });
  const reset = () => dispatch({ type: 'reset' });

  return { state, selectAnswer, next, back, reset, hydrated } as const;
}


