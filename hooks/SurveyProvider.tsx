'use client';

import React, { createContext, useContext, useReducer } from 'react';
import type { AnswerMap } from '../types/survey';

export interface SurveyState {
  step: number;
  answers: AnswerMap;
}

type Action =
  | { type: 'answer'; id: string; value: number }
  | { type: 'step'; delta: 1 | -1 }
  | { type: 'reset' };

function reducer(state: SurveyState, action: Action): SurveyState {
  switch (action.type) {
    case 'answer':
      return { ...state, answers: { ...state.answers, [action.id]: action.value as any } };
    case 'step':
      return { ...state, step: Math.max(0, state.step + action.delta) };
    case 'reset':
      return { step: 0, answers: {} };
    default:
      return state;
  }
}

interface SurveyContextValue {
  state: SurveyState;
  selectAnswer: (id: string, value: number) => void;
  next: () => void;
  back: () => void;
  reset: () => void;
}

const SurveyContext = createContext<SurveyContextValue | undefined>(undefined);

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { step: 0, answers: {} });

  const selectAnswer = (id: string, value: number) => dispatch({ type: 'answer', id, value });
  const next = () => dispatch({ type: 'step', delta: 1 });
  const back = () => dispatch({ type: 'step', delta: -1 });
  const reset = () => dispatch({ type: 'reset' });

  const value: SurveyContextValue = { state, selectAnswer, next, back, reset };
  return <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>;
}

export function useSurvey() {
  const ctx = useContext(SurveyContext);
  if (!ctx) throw new Error('useSurvey must be used within SurveyProvider');
  return ctx;
}


