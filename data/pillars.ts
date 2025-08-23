import type { PillarKey } from '../types/survey';

export interface PillarMeta {
  name: string;
  description: string;
  color: string;
  lightColor: string;
  textColor: string;
}

export const pillars: Record<PillarKey, PillarMeta> = {
  delivery: {
    name: 'Delivery & Client Management',
    description: 'How well you manage client projects and delivery quality',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  leadership: {
    name: 'Team & Leadership',
    description: 'Depth of leadership and team autonomy',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  systems: {
    name: 'Systems & Processes',
    description: 'Documentation and process standardization',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-700',
  },
  financial: {
    name: 'Financial Operations',
    description: 'Financial tracking and margin management',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  founder: {
    name: 'Founder Leverage',
    description: 'How much the business depends on founder involvement',
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
  automation: {
    name: 'AI & Automation',
    description: 'Use of technology to eliminate manual work',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
  },
};


