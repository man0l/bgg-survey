'use client';

import React from 'react';
import { SurveyProvider } from '@/hooks/SurveyProvider';

export default function SurveyLayout({ children }: { children: React.ReactNode }) {
  return <SurveyProvider>{children}</SurveyProvider>;
}


