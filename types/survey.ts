export type PillarKey =
  | 'delivery'
  | 'leadership'
  | 'systems'
  | 'financial'
  | 'founder'
  | 'automation';

export type OptionValue = 1 | 2 | 3 | 4 | 5;

export interface QuestionOption {
  value: OptionValue;
  text: string;
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface Question {
  id: `q${number}`;
  title: string;
  pillar: PillarKey;
  question: string;
  options: QuestionOption[];
}

export type AnswerMap = Partial<Record<Question['id'], OptionValue>>;

export interface PillarScore {
  score: number;
  percentage: number;
  maxScore: number;
  questionCount: number;
}

export type PillarScores = Record<PillarKey, PillarScore>;


