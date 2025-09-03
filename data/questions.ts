import type { Question } from '../types/survey';

export const questions: Question[] = [
  {
    id: 'q1',
    title: 'Delivery & Client Management',
    pillar: 'delivery',
    question:
      'Client projects are delivered on or ahead of agreed timelines with minimal last-minute fixes or scope overruns.',
    options: [
      { value: 1, text: 'Projects are often late and chaotic', letter: 'A' },
      { value: 2, text: "Some projects meet deadlines, many don't", letter: 'B' },
      { value: 3, text: 'About half are on time, issues frequent', letter: 'C' },
      { value: 4, text: 'Most projects on time, occasional problems', letter: 'D' },
      { value: 5, text: 'Consistently on time or early, no firefighting', letter: 'E' },
    ],
  },
  {
    id: 'q2',
    title: 'Delivery & Client Management',
    pillar: 'delivery',
    question:
      'We could increase client volume by 20% tomorrow without hiring or overloading the team.',
    options: [
      { value: 1, text: 'Absolutely not, team already at breaking point', letter: 'A' },
      { value: 2, text: 'Small increase possible, very stressful', letter: 'B' },
      { value: 3, text: 'Manageable but would strain resources', letter: 'C' },
      { value: 4, text: 'Manageable with only minor disruption', letter: 'D' },
      { value: 5, text: 'Easily absorbed due to systems and capacity', letter: 'E' },
    ],
  },
  {
    id: 'q3',
    title: 'Team & Leadership',
    pillar: 'leadership',
    question:
      'Every role in the team has clear KPIs, decision rights, and full ownership of responsibilities.',
    options: [
      { value: 1, text: 'Roles unclear, founder fills gaps constantly', letter: 'A' },
      { value: 2, text: 'Some clarity but overlap and confusion often', letter: 'B' },
      { value: 3, text: 'Mostly clear but founder still intervenes', letter: 'C' },
      { value: 4, text: 'Clear roles, founder rarely steps in', letter: 'D' },
      { value: 5, text: 'Roles fully owned, zero reliance on founder', letter: 'E' },
    ],
  },
  {
    id: 'q4',
    title: 'Team & Leadership',
    pillar: 'leadership',
    question:
      'Operational or delivery problems are solved by the team without escalating to the founder.',
    options: [
      { value: 1, text: 'Almost all problems come to me', letter: 'A' },
      { value: 2, text: 'Team solves minor issues, major ones land on me', letter: 'B' },
      { value: 3, text: 'Half of problems handled without me', letter: 'C' },
      { value: 4, text: "Most issues handled by team, I only see big escalations", letter: 'D' },
      { value: 5, text: "Team fully autonomous, I'm never the bottleneck", letter: 'E' },
    ],
  },
  {
    id: 'q5',
    title: 'Systems & Processes',
    pillar: 'systems',
    question:
      'We have documented workflows for all core activities (onboarding, delivery, reporting) that are actually followed.',
    options: [
      { value: 1, text: 'Nothing documented, tribal knowledge only', letter: 'A' },
      { value: 2, text: 'Some workflows exist, mostly ignored', letter: 'B' },
      { value: 3, text: 'Most workflows documented but inconsistently followed', letter: 'C' },
      { value: 4, text: 'Well-documented, used by most of the team', letter: 'D' },
      { value: 5, text: 'Fully documented, trained, consistently applied', letter: 'E' },
    ],
  },
  {
    id: 'q6',
    title: 'Systems & Processes',
    pillar: 'systems',
    question:
      'At any time, I can see the exact status of every client/project without asking my team.',
    options: [
      { value: 1, text: 'No visibility, rely on chasing updates', letter: 'A' },
      { value: 2, text: 'Patchy visibility, often outdated info', letter: 'B' },
      { value: 3, text: 'Some visibility, manual updates required', letter: 'C' },
      { value: 4, text: 'Accurate view most of the time, some manual checks', letter: 'D' },
      { value: 5, text: 'Full real-time visibility through dashboards or tools', letter: 'E' },
    ],
  },
  {
    id: 'q7',
    title: 'Financial Operations',
    pillar: 'financial',
    question:
      'We track profitability per client or project and know which accounts are unprofitable.',
    options: [
      { value: 1, text: 'No view of profitability at all', letter: 'A' },
      { value: 2, text: 'Some estimates but not reliable', letter: 'B' },
      { value: 3, text: 'Partial tracking, often outdated or unclear', letter: 'C' },
      { value: 4, text: 'Regular reports with minor gaps', letter: 'D' },
      { value: 5, text: 'Clear, accurate profitability tracking on demand', letter: 'E' },
    ],
  },
  {
    id: 'q8',
    title: 'Financial Operations',
    pillar: 'financial',
    question:
      'We have clear visibility of team capacity and utilisation, and can predict workload bottlenecks before they cause delivery issues.',
    options: [
      { value: 1, text: 'No visibility, constant overload or idle time', letter: 'A' },
      { value: 2, text: 'Rough guesses only, often inaccurate', letter: 'B' },
      { value: 3, text: 'Some tracking, mostly reactive firefighting', letter: 'C' },
      { value: 4, text: 'Reliable tracking for most roles, occasional gaps', letter: 'D' },
      { value: 5, text: 'Full, real-time visibility, proactive load balancing', letter: 'E' },
    ],
  },
  {
    id: 'q9',
    title: 'Founder Leverage',
    pillar: 'founder',
    question:
      "I spend most of my week on strategy, growth, and leadership—not on client delivery or operational firefighting.",
    options: [
      { value: 1, text: '70%+ of my time is delivery or putting out fires', letter: 'A' },
      { value: 2, text: '50-70% of my time is reactive work', letter: 'B' },
      { value: 3, text: '30-50% of my time is non-strategic, hands-on work', letter: 'C' },
      { value: 4, text: '10-30% of my time is reactive or delivery tasks', letter: 'D' },
      { value: 5, text: '<10% of my time is non-strategic, fully leveraged for growth', letter: 'E' },
    ],
  },
  {
    id: 'q10',
    title: 'Founder Leverage',
    pillar: 'founder',
    question:
      'The agency could operate smoothly for 2+ weeks if I stepped away with no prior notice.',
    options: [
      { value: 1, text: 'Would collapse within days', letter: 'A' },
      { value: 2, text: 'Might last a few days before chaos', letter: 'B' },
      { value: 3, text: 'Would mostly hold but big problems likely', letter: 'C' },
      { value: 4, text: 'Would run with only minor escalations', letter: 'D' },
      { value: 5, text: 'Would run seamlessly without me', letter: 'E' },
    ],
  },
  {
    id: 'q11',
    title: 'AI & Automation',
    pillar: 'automation',
    question:
      'We actively use AI or automation to eliminate repetitive tasks in delivery or reporting.',
    options: [
      { value: 1, text: 'No AI or automation used', letter: 'A' },
      { value: 2, text: 'A few ad-hoc tools, mostly manual work', letter: 'B' },
      { value: 3, text: 'Some automation but limited or inconsistent', letter: 'C' },
      { value: 4, text: 'Many processes automated, saves time weekly', letter: 'D' },
      { value: 5, text: 'AI deeply embedded, removes majority of manual work', letter: 'E' },
    ],
  },
  {
    id: 'q12',
    title: 'AI & Automation',
    pillar: 'automation',
    question:
      'Our client reporting, analysis, and QA processes are partially or fully automated.',
    options: [
      { value: 1, text: '100% manual, time-consuming and error-prone', letter: 'A' },
      { value: 2, text: 'Some templates or shortcuts but no automation', letter: 'B' },
      { value: 3, text: 'Some automation but still heavily manual', letter: 'C' },
      { value: 4, text: 'Mostly automated, reduces workload significantly', letter: 'D' },
      { value: 5, text: 'Fully automated, reliable, almost zero manual input', letter: 'E' },
    ],
  },
  {
    id: 'q13',
    title: 'AI & Automation',
    pillar: 'automation',
    question:
      'We have a defined AI roadmap or playbook to scale efficiency and decision-making across the agency.',
    options: [
      { value: 1, text: 'No AI plan, not discussed', letter: 'A' },
      { value: 2, text: 'Ad-hoc ideas but nothing structured', letter: 'B' },
      { value: 3, text: 'Informal plan, not yet actioned', letter: 'C' },
      { value: 4, text: 'Defined plan, partially implemented', letter: 'D' },
      { value: 5, text: 'Clear roadmap, tracked adoption, measurable results', letter: 'E' },
    ],
  },
  // Scale readiness questions moved from lead form into assessment (last pillar)
  {
    id: 'q14',
    title: 'Scale Readiness',
    pillar: 'automation',
    question: "What’s your monthly revenue?",
    input: { kind: 'text', placeholder: 'e.g. $50k' },
  },
  {
    id: 'q15',
    title: 'Scale Readiness',
    pillar: 'automation',
    question: "What’s your biggest challenge in your own words?",
    input: { kind: 'text', multiline: true, placeholder: 'Describe your biggest challenge' },
  },
];


