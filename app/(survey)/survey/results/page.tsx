"use client";

import { useMemo, useState } from 'react';
import { questions } from '@/data/questions';
import { pillars } from '@/data/pillars';
import { calculatePillarScores, calculateScore, getMaturityLevel, getPillarMaturityLevel } from '@/lib/scoring';
import { useSurvey } from '@/hooks/SurveyProvider';
import LeadForm from '../client/LeadForm';
import Button from '@/components/ui/Button';

export default function ResultsPage() {
  const { state } = useSurvey();
  const { percentage } = useMemo(() => calculateScore(state.answers, questions), [state.answers]);
  const maturity = getMaturityLevel(percentage);
  const pillarScores = useMemo(() => calculatePillarScores(state.answers, questions), [state.answers]);
  const [activeTab, setActiveTab] = useState<'report' | 'categories'>('report');
  const hasAnswers = Object.keys(state.answers ?? {}).length > 0;

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl">
        <div className="px-8 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your OPSCORE™ Results</h1>
            <p className="text-gray-600">Based on your responses, we’ve analyzed your agency’s operational maturity</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-8 text-gray-800">Overall OPSCORE™</h2>
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#ec4899"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${(percentage * 314) / 100} 314`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{percentage}</div>
                    <div className="text-sm text-gray-500">out of 100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">{maturity.level}</div>
              <p className="text-gray-600">
                {!hasAnswers
                  ? 'No answers found. Please complete the survey to see your OPSCORE.'
                  : percentage <= 30
                  ? "You're in the early stages - significant room for operational improvements."
                  : percentage <= 50
                  ? 'You have basic systems but still fighting fires regularly.'
                  : percentage <= 70
                  ? 'Good foundation in place with room for automation and optimization.'
                  : percentage <= 85
                  ? 'Well-optimized operations with strong systems and processes.'
                  : 'Excellent operational maturity with AI-enabled scalable systems.'}
              </p>
            </div>
          </div>

          {!hasAnswers && (
            <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">It looks like you haven’t completed the survey yet.</p>
              <a href="/survey">
                <Button>Start the Survey</Button>
              </a>
            </div>
          )}

          {hasAnswers && (
            <>
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('report')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === 'report' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Get Full Report
                  </button>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === 'categories' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Category Scores
                  </button>
                </div>
              </div>

          {hasAnswers && (activeTab === 'report' ? (
            <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-2">Get Your Detailed OPSCORE™ Report</h2>
              <p className="text-gray-600 mb-6">Enter your details to receive a comprehensive report with personalized recommendations</p>
              <LeadForm score={percentage} pillarScores={pillarScores} />
              <p className="text-xs text-gray-500 text-center mt-4">We’ll email you a copy of your report and provide recommendations tailored to your organization’s needs.</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-2">Category Breakdown</h2>
              <p className="text-gray-600 mb-8">See how your agency performs in each operational pillar</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(pillarScores).map(([key, data]) => {
                  const p = pillars[key as keyof typeof pillars];
                  const level = getPillarMaturityLevel(data.percentage);
                  return (
                    <div key={key} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{p.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${p.color} ml-3 mt-1`} />
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-gray-900">{data.percentage}%</span>
                          <span className={`text-xs font-medium px-2 py-1 rounded ${p.lightColor} ${p.textColor}`}>{level}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${p.color}`} style={{ width: `${data.percentage}%` }} />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{data.score}/{data.maxScore} points</span>
                          <span>{data.questionCount} questions</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {data.percentage <= 30
                          ? 'Needs immediate attention - foundational issues present'
                          : data.percentage <= 50
                          ? 'Basic systems in place but inconsistent execution'
                          : data.percentage <= 70
                          ? 'Good foundation with room for optimization'
                          : data.percentage <= 85
                          ? 'Strong performance with minor improvements needed'
                          : 'Excellent - this is a competitive advantage'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4 text-center">Key Insights</h3>
                <div className="space-y-3">
                  {Object.entries(pillarScores)
                    .sort(([, a], [, b]) => a.percentage - b.percentage)
                    .slice(0, 2)
                    .map(([key]) => (
                      <div key={`insight-${key}`} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>{pillars[key as keyof typeof pillars].name}</strong> is your biggest opportunity - improving this area could unlock significant operational efficiency.
                        </p>
                      </div>
                    ))}
                  {Object.entries(pillarScores)
                    .sort(([, a], [, b]) => b.percentage - a.percentage)
                    .slice(0, 1)
                    .map(([key]) => (
                      <div key={`strength-${key}`} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          <strong>{pillars[key as keyof typeof pillars].name}</strong> is your strongest area - leverage this strength to support improvements in other pillars.
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button onClick={() => setActiveTab('report')} className="py-4 px-8">See What's Slowing You Down</Button>
                <p className="text-xs text-gray-500 mt-2">Receive specific action steps for each pillar</p>
              </div>
            </div>
          ))}
            </>
          )}

        </div>
      </div>
    </div>
  );
}


