// Filename: app/components/ProblemSolution.jsx
'use client';

import { useState } from 'react';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const problems = [
  {
    id: 1,
    problem: "Your competitors are outpacing you digitally",
    description: "While you're stuck with outdated systems, your competitors are capturing market share with modern digital experiences.",
    solution: "We build cutting-edge platforms that position you as the industry leader, not the follower.",
    icon: "TrendingUp",
    stat: "73%",
    statLabel: "of customers prefer digital-first companies"
  },
  {
    id: 2,
    problem: "Your ideas never make it to market",
    description: "Great ideas die in development hell. Scope creep, technical debt, and endless revisions kill momentum.",
    solution: "Our agile process delivers working products in weeks, not years. Ship fast, iterate faster.",
    icon: "Rocket",
    stat: "6-8 weeks",
    statLabel: "average time to MVP launch"
  },
  {
    id: 3,
    problem: "Your current platform doesn't scale",
    description: "What worked for 100 users breaks at 10,000. Growth exposes every technical shortcut.",
    solution: "We architect for scale from day one. Handle millions of users without breaking a sweat.",
    icon: "BarChart3",
    stat: "10M+",
    statLabel: "users supported on our platforms"
  },
  {
    id: 4,
    problem: "You're hemorrhaging money on maintenance",
    description: "Legacy systems drain budgets. Every fix creates two new bugs. Technical debt compounds.",
    solution: "Modern architecture means 80% less maintenance. Spend on growth, not firefighting.",
    icon: "DollarSign",
    stat: "80%",
    statLabel: "reduction in maintenance costs"
  },
];

export default function ProblemSolution() {
  const [activeProblem, setActiveProblem] = useState(0);
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Elements - Only for dark theme */}
      {!isLight && (
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-1/4 left-0 w-96 h-96"
            style={{ background: 'radial-gradient(circle, var(--error) 0%, transparent 70%)', opacity: 0.15 }}
          />
          <div 
            className="absolute bottom-1/4 right-0 w-96 h-96"
            style={{ background: `radial-gradient(circle, var(--gradient-from) 0%, transparent 70%)`, opacity: 0.15 }}
          />
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium mb-6"
            style={{ 
              backgroundColor: 'var(--error-muted)',
              border: isLight ? 'none' : '1px solid var(--error)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--error)'
            }}
          >
            <Icon name="AlertCircle" className="w-4 h-4" />
            The Problem
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Sound Familiar?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            These challenges cost businesses millions every year. But they don't have to cost you.
          </p>
        </AnimateOnScroll>

        {/* Problem Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Problem Selector */}
          <div className="space-y-4">
            {problems.map((item, index) => (
              <AnimateOnScroll key={item.id} animation="fadeLeft" delay={index * 0.1}>
                <button
                  onClick={() => setActiveProblem(index)}
                  className="w-full text-left p-6 transition-all duration-300"
                  style={{
                    backgroundColor: activeProblem === index 
                      ? (isLight ? 'var(--bg-secondary)' : 'var(--accent-muted)') 
                      : 'var(--bg-secondary)',
                    border: `1px solid ${activeProblem === index ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: isLight && activeProblem === index ? '0 4px 20px rgba(0,0,0,0.08)' : 'none'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3"
                      style={{ 
                        backgroundColor: activeProblem === index ? 'var(--error-muted)' : 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <Icon 
                        name={item.icon} 
                        className="w-6 h-6"
                        style={{ color: activeProblem === index ? 'var(--error)' : 'var(--text-secondary)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold mb-2"
                        style={{ color: activeProblem === index ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      >
                        {item.problem}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {item.description}
                      </p>
                    </div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0"
                      style={{ 
                        borderColor: activeProblem === index ? 'var(--accent)' : 'var(--border-strong)',
                        backgroundColor: activeProblem === index ? 'var(--accent)' : 'transparent'
                      }}
                    >
                      {activeProblem === index && (
                        <Icon name="Check" className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Right: Solution Display */}
          <AnimateOnScroll animation="fadeRight" delay={0.2}>
            <div 
              className="p-8 lg:p-10 h-full"
              style={{ 
                backgroundColor: isLight ? 'var(--bg-secondary)' : 'var(--accent-muted)',
                border: `1px solid ${isLight ? 'var(--border)' : 'var(--accent)'}`,
                borderRadius: 'var(--radius-xl)',
                boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium mb-6"
                style={{ 
                  backgroundColor: 'var(--accent-muted)',
                  color: 'var(--accent)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <Icon name="Sparkles" className="w-4 h-4" />
                The Solution
              </span>
              
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                {problems[activeProblem].solution}
              </h3>
              
              <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-end gap-2 mb-2">
                  <span 
                    className="text-5xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {problems[activeProblem].stat}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {problems[activeProblem].statLabel}
                </p>
              </div>

              {/* Visual Indicator */}
              <div className="mt-8 flex gap-2">
                {problems.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 flex-1 transition-all"
                    style={{ 
                      backgroundColor: index === activeProblem ? 'var(--accent)' : 'var(--border)',
                      borderRadius: 'var(--radius-full)'
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll animation="fadeUp" delay={0.3} className="text-center">
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to solve these problems once and for all?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-white font-semibold py-4 px-8 transition-all group"
            style={{ 
              background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
              borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            Get Your Free Strategy Session
            <Icon name="ArrowRight" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
