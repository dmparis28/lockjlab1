// Filename: app/components/IsThisForYou.jsx
'use client';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const goodFit = [
  'Startups ready to build their MVP and get to market fast',
  'Businesses replacing outdated systems that are holding them back',
  'Teams without in-house dev resources who need expert help',
  'Founders who value quality and want to do it right the first time',
  'Companies ready to invest $25K+ in their digital product',
];

const notGoodFit = [
  'Looking for the cheapest option (we\'re not the budget choice)',
  'Need it done yesterday with no planning or discovery',
  'Want to micromanage every line of code',
  'Not ready to commit to a collaborative process',
];

export default function IsThisForYou() {
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
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium mb-6"
            style={{ 
              backgroundColor: 'var(--accent-muted)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent)'
            }}
          >
            <Icon name="Users" className="w-4 h-4" />
            Before We Talk
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Is Lock J Lab Right For You?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We&apos;re not for everyone—and that&apos;s intentional. Here&apos;s how to know if we&apos;re a good fit.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Good Fit */}
          <AnimateOnScroll animation="fadeLeft" delay={0.1}>
            <div 
              className="rounded-2xl p-8 h-full"
              style={{ 
                backgroundColor: isLight ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                >
                  <Icon name="CheckCircle" className="w-6 h-6" style={{ color: 'var(--success)' }} />
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  We&apos;re a great fit if you...
                </h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Not a Good Fit */}
          <AnimateOnScroll animation="fadeRight" delay={0.2}>
            <div 
              className="rounded-2xl p-8 h-full"
              style={{ 
                backgroundColor: isLight ? 'rgba(239, 68, 68, 0.05)' : 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                >
                  <Icon name="XCircle" className="w-6 h-6" style={{ color: 'var(--error)' }} />
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  We&apos;re probably not right if you...
                </h3>
              </div>
              <ul className="space-y-4">
                {notGoodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="X" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--error)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fadeUp" delay={0.3} className="text-center mt-12">
          <p style={{ color: 'var(--text-secondary)' }}>
            Sound like you?{' '}
            <a href="/contact" className="font-medium" style={{ color: 'var(--accent)' }}>
              Let&apos;s talk.
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
