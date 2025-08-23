'use client';

import { useEffect } from 'react';
import { useSurvey } from '@/hooks/SurveyProvider';
import { questions } from '@/data/questions';
import SurveyRunner from './SurveyRunner';

export default function StartSurvey() {
  const { reset } = useSurvey();
  useEffect(() => {
    // reset once on mount to allow retaking
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SurveyRunner questions={questions} />;
}


