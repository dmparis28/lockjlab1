// Filename: app/components/FinalCTA.jsx
'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

export default function FinalCTA() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [count, setCount] = useState(47);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 2));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = '/contact';
    }, 500);
  };

  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, color-mix(in srgb, var(--gradient-from) 5%, transparent), transparent, color-mix(in srgb, var(--gradient-to) 5%, transparent))` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--accent) 10%, transparent), transparent)` }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-8">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
            style={{ 
              backgroundColor: 'var(--success-muted)',
              border: '1px solid var(--success)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--success)'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span 
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: 'var(--success)' }}
              />
            </span>
            Limited Availability — Only {count} spots left this quarter
          </span>
        </AnimateOnScroll>

        {/* Main Content */}
        <AnimateOnScroll animation="fadeUp" delay={0.1} className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Let's Build Something
            <br />
            <span 
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
            >
              Extraordinary
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
            Your competitors aren't waiting. Neither should you. Book your free strategy session today and discover how we can transform your vision into reality.
          </p>
        </AnimateOnScroll>

        {/* CTA Card */}
        <AnimateOnScroll animation="scaleUp" delay={0.2}>
          <div 
            className="p-8 md:p-12"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: "Timer", text: "30-minute call", subtext: "No obligation" },
                { icon: "Lightbulb", text: "Custom strategy", subtext: "For your project" },
                { icon: "DollarSign", text: "Transparent pricing", subtext: "No surprises" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <div 
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--accent-muted)', borderRadius: 'var(--radius-md)' }}
                  >
                    <Icon name={item.icon} className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.text}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 transition-all"
                style={{ 
                  backgroundColor: 'var(--input-bg)',
                  border: '1px solid var(--input-border)',
                  borderRadius: 'var(--radius-lg)',
                  color: 'var(--input-text)',
                  outline: 'none'
                }}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-semibold py-4 px-8 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 text-white"
                style={{ 
                  background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                  borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Book Free Call
                    <Icon name="ArrowRight" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div 
              className="mt-8 pt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
              style={{ borderTop: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheck" className="w-5 h-5" style={{ color: 'var(--success)' }} />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Timer" className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" className="w-5 h-5" style={{ color: 'var(--warning)' }} />
                <span>Your info is secure</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Alternative Actions */}
        <AnimateOnScroll animation="fade" delay={0.3} className="mt-12 text-center">
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>Prefer a different approach?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 transition-all hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon name="Phone" className="w-5 h-5" />
              Call us directly
            </a>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <a
              href="mailto:hello@lockjlab.com"
              className="inline-flex items-center gap-2 transition-all hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon name="Mail" className="w-5 h-5" />
              Send an email
            </a>
            <span style={{ color: 'var(--border-strong)' }}>•</span>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 transition-all hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon name="DollarSign" className="w-5 h-5" />
              View pricing
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
