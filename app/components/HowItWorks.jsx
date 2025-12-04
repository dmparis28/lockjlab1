// Filename: app/components/HowItWorks.jsx
'use client';

import { useState } from 'react';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 min",
    description: "We start with a free strategy session to understand your vision, challenges, and goals. No sales pitch – just honest conversation about what's possible.",
    details: [
      "Understand your business model",
      "Identify key challenges",
      "Discuss technical requirements",
      "Align on timeline expectations"
    ],
    icon: "Phone",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "1-2 weeks",
    description: "Our team dives deep into research and planning. You'll receive a detailed roadmap with milestones, technical architecture, and investment breakdown.",
    details: [
      "Market & competitor analysis",
      "Technical architecture design",
      "Detailed project roadmap",
      "Resource & budget planning"
    ],
    icon: "Target",
  },
  {
    number: "03",
    title: "Design & Prototype",
    duration: "2-3 weeks",
    description: "See your product come to life before a single line of code. Interactive prototypes let you experience the user journey and refine the experience.",
    details: [
      "User experience (UX) design",
      "Visual design system",
      "Interactive prototypes",
      "Stakeholder review sessions"
    ],
    icon: "Palette",
  },
  {
    number: "04",
    title: "Development",
    duration: "4-8 weeks",
    description: "Agile sprints with weekly demos. You'll see progress constantly and have opportunities to provide feedback that shapes the final product.",
    details: [
      "Frontend & backend development",
      "Weekly progress demos",
      "Continuous integration",
      "Quality assurance testing"
    ],
    icon: "Code",
  },
  {
    number: "05",
    title: "Launch & Beyond",
    duration: "Ongoing",
    description: "Launch is just the beginning. We provide training, documentation, and ongoing support to ensure your continued success.",
    details: [
      "Production deployment",
      "Team training & handoff",
      "Performance monitoring",
      "Ongoing support options"
    ],
    icon: "Rocket",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  // Clean Bespoke - Horizontal Stepper Layout
  if (isLight) {
    return (
      <section 
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
            <span 
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium mb-6"
              style={{ 
                backgroundColor: 'var(--accent-muted)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--accent)'
              }}
            >
              <Icon name="Workflow" className="w-4 h-4" />
              Our Process
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              From Idea to Launch
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A proven process that delivers results. Transparent, collaborative, and designed for your success.
            </p>
          </AnimateOnScroll>

          {/* Horizontal Stepper */}
          <div className="mb-12">
            {/* Step Indicators */}
            <div className="flex items-center justify-between max-w-4xl mx-auto mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  {/* Step Circle */}
                  <button
                    onClick={() => setActiveStep(index)}
                    className="relative z-10 flex flex-col items-center group"
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                      style={{ 
                        background: index <= activeStep 
                          ? `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`
                          : 'var(--bg-secondary)',
                        border: index <= activeStep ? 'none' : '2px solid var(--border)'
                      }}
                    >
                      {index < activeStep ? (
                        <Icon name="Check" className="w-6 h-6 text-white" />
                      ) : (
                        <Icon 
                          name={step.icon} 
                          className="w-6 h-6"
                          style={{ color: index <= activeStep ? 'white' : 'var(--text-muted)' }}
                        />
                      )}
                    </div>
                    <span 
                      className="mt-3 text-sm font-medium text-center max-w-[100px] hidden sm:block"
                      style={{ color: index <= activeStep ? 'var(--text-primary)' : 'var(--text-muted)' }}
                    >
                      {step.title}
                    </span>
                  </button>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: index < activeStep ? '100%' : '0%',
                          background: `linear-gradient(90deg, var(--gradient-from), var(--gradient-to))`
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content Card */}
          <AnimateOnScroll animation="fadeUp" delay={0.1}>
            <div 
              className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)'
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left - Main Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                    >
                      Step {steps[activeStep].number}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {steps[activeStep].duration}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-3xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Right - Details */}
                <div 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                >
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    What happens:
                  </h4>
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon 
                          name="Check" 
                          className="w-5 h-5 mt-0.5 flex-shrink-0" 
                          style={{ color: 'var(--success)' }} 
                        />
                        <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div 
                className="mt-8 pt-6 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center gap-2 font-medium transition-all disabled:opacity-30"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Icon name="ArrowLeft" className="w-4 h-4" />
                  Previous
                </button>
                
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{ 
                        backgroundColor: i === activeStep ? 'var(--accent)' : 'var(--border)',
                        width: i === activeStep ? '24px' : '8px'
                      }}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className="flex items-center gap-2 font-medium transition-all disabled:opacity-30"
                  style={{ color: 'var(--accent)' }}
                >
                  Next
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Timeline Summary */}
          <AnimateOnScroll animation="fadeUp" delay={0.2} className="mt-12 text-center">
            <div 
              className="inline-flex items-center gap-6 px-8 py-4 rounded-full"
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2">
                <Icon name="Calendar" className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>Total Timeline:</span>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>6-12 Weeks</span>
              </div>
              <div className="w-px h-6" style={{ backgroundColor: 'var(--border)' }} />
              <a
                href="/contact"
                className="flex items-center gap-2 font-semibold"
                style={{ color: 'var(--accent)' }}
              >
                Get Started
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    );
  }

  // Neon Dark - Original Vertical Timeline Layout
  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium mb-6"
            style={{ 
              backgroundColor: 'var(--accent-muted)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent)'
            }}
          >
            <Icon name="Workflow" className="w-4 h-4" />
            Our Process
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            From Idea to Launch in 5 Steps
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A proven process that delivers results. Transparent, collaborative, and designed for your success.
          </p>
        </AnimateOnScroll>

        {/* Process Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Step Selector */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} animation="fadeLeft" delay={index * 0.08}>
                <button
                  onClick={() => setActiveStep(index)}
                  className="w-full text-left p-6 transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === index ? 'var(--accent-muted)' : 'var(--bg-secondary)',
                    border: `1px solid ${activeStep === index ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center font-bold transition-all"
                      style={{ 
                        background: activeStep === index 
                          ? `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`
                          : 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        color: activeStep === index ? 'white' : 'var(--text-secondary)'
                      }}
                    >
                      {step.number}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 
                          className="font-semibold"
                          style={{ color: activeStep === index ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                        >
                          {step.title}
                        </h3>
                        <span 
                          className="text-sm"
                          style={{ color: activeStep === index ? 'var(--accent)' : 'var(--text-muted)' }}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm mt-1 line-clamp-1" style={{ color: 'var(--text-muted)' }}>
                        {step.description}
                      </p>
                    </div>

                    <Icon 
                      name="ChevronRight" 
                      className="w-5 h-5 transition-all"
                      style={{ color: activeStep === index ? 'var(--accent)' : 'var(--text-muted)' }}
                    />
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Right: Step Details */}
          <AnimateOnScroll animation="fadeRight" delay={0.2}>
            <div 
              className="p-8"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--accent)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <Icon name={steps[activeStep].icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                    Step {steps[activeStep].number}
                  </span>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
                  What happens in this phase:
                </h4>
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent-muted)' }}
                    >
                      <Icon name="Check" className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                  </div>
                ))}
              </div>

              <div 
                className="mt-8 pt-6 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  <Icon name="Timer" className="w-5 h-5" />
                  <span>Timeline: {steps[activeStep].duration}</span>
                </div>
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: 'var(--accent)' }}
                  >
                    Next Step
                    <Icon name="ArrowRight" className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Total Timeline */}
            <div 
              className="mt-6 p-6 text-center"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>Total Project Timeline</p>
              <p className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>6-12 Weeks</p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>From discovery to launch</p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll animation="fadeUp" delay={0.3} className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-white font-semibold py-4 px-8 transition-all group"
            style={{ 
              background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            Start Your Project Today
            <Icon name="ArrowRight" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            Free discovery call • No commitment required
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
