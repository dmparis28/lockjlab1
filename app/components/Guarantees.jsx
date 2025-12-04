// Filename: app/components/Guarantees.jsx
'use client';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const guarantees = [
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    description: 'We hit our deadlines. If we\'re late, you get 20% off your project.',
    highlight: '20% off if late',
  },
  {
    icon: 'ThumbsUp',
    title: 'Satisfaction Promise',
    description: 'Not happy after the first week of work? Full refund, no questions asked.',
    highlight: 'Full refund guarantee',
  },
  {
    icon: 'FileCode',
    title: '100% Code Ownership',
    description: 'Everything we build is yours. Full source code, documentation, and IP rights.',
    highlight: 'You own everything',
  },
  {
    icon: 'Calendar',
    title: 'No Long-Term Contracts',
    description: 'We work in sprints. You can pause or stop at any sprint boundary.',
    highlight: 'Flexible commitment',
  },
];

export default function Guarantees() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <section 
      className="py-24 md:py-32"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
          >
            <Icon name="Shield" className="w-4 h-4" />
            Zero Risk
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Our Guarantees To You
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We put our money where our mouth is. These aren&apos;t marketing fluff—they&apos;re contractual commitments.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map((guarantee, index) => (
            <AnimateOnScroll key={guarantee.title} animation="scaleUp" delay={index * 0.1}>
              <div 
                className="rounded-2xl p-8 transition-all duration-300 h-full"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: 'var(--accent-muted)',
                      border: isLight ? 'none' : '1px solid var(--accent)'
                    }}
                  >
                    <Icon name={guarantee.icon} className="w-7 h-7" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                    >
                      {guarantee.title}
                    </h3>
                    <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {guarantee.description}
                    </p>
                    <span 
                      className="inline-block text-sm px-3 py-1 rounded-full font-medium"
                      style={{ 
                        backgroundColor: 'var(--accent-muted)', 
                        color: 'var(--accent)' 
                      }}
                    >
                      {guarantee.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust Statement */}
        <AnimateOnScroll animation="fadeUp" delay={0.4} className="mt-12 text-center">
          <div 
            className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{ 
              backgroundColor: isLight ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)'
            }}
          >
            <Icon name="ShieldCheck" className="w-5 h-5" style={{ color: 'var(--success)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Every guarantee is written into our contract</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
