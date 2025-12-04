// Filename: app/components/Testimonials.jsx
'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "Lock J Lab transformed our entire business model. The platform they built handles 10x the traffic we had before, and our customer satisfaction scores have never been higher.",
    author: "Sarah Chen",
    role: "CEO",
    company: "MediBook Health",
    initials: "SC",
    metric: "400%",
    metricLabel: "increase in user engagement"
  },
  {
    id: 2,
    quote: "From concept to launch in 8 weeks. The team delivered a trading platform that rivals the big players. Our users constantly comment on how intuitive and fast the interface is.",
    author: "Michael Torres",
    role: "Founder",
    company: "Coinflow Finance",
    initials: "MT",
    metric: "$2.5B",
    metricLabel: "monthly trading volume"
  },
  {
    id: 3,
    quote: "They didn't just build us a website – they built us a growth engine. Our car wash scheduling system has reduced no-shows by 60% and increased repeat customers by 45%.",
    author: "James Wilson",
    role: "Operations Director",
    company: "IDS Express Car Wash",
    initials: "JW",
    metric: "60%",
    metricLabel: "reduction in no-shows"
  },
  {
    id: 4,
    quote: "The staffing platform Lock J Lab created revolutionized how we place candidates. What used to take days now takes hours. Our recruiters can finally focus on people, not paperwork.",
    author: "Amanda Richardson",
    role: "VP of Talent",
    company: "IDS Staffing Solutions",
    initials: "AR",
    metric: "3x",
    metricLabel: "faster placement times"
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$100M+", label: "Revenue Generated for Clients" },
  { value: "4.9", label: "Average Rating", icon: "Star" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  useEffect(() => {
    if (!isAutoPlaying || isLight) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isLight]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Clean Bespoke - Grid Layout
  if (isLight) {
    return (
      <section 
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
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
              <Icon name="MessageSquare" className="w-4 h-4" />
              Client Stories
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              What Our Clients Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Don't just take our word for it. See what our clients have achieved with Lock J Lab.
            </p>
          </AnimateOnScroll>

          {/* Stats Row */}
          <AnimateOnScroll animation="fadeUp" delay={0.1} className="mb-16">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span 
                      className="text-4xl md:text-5xl font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {stat.value}
                    </span>
                    {stat.icon && <Icon name={stat.icon} className="w-7 h-7 text-yellow-500 fill-yellow-500" />}
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.id} animation="scaleUp" delay={index * 0.1}>
                <div 
                  className="p-8 h-full flex flex-col"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Quote */}
                  <div className="flex-1">
                    <Icon 
                      name="Quote" 
                      className="w-10 h-10 mb-4" 
                      style={{ color: 'var(--accent)', opacity: 0.3 }} 
                    />
                    <blockquote 
                      className="text-lg leading-relaxed mb-6"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {testimonial.author}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    {/* Metric */}
                    <div className="text-right">
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: 'var(--accent)' }}
                      >
                        {testimonial.metric}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {testimonial.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Neon Dark - Carousel Layout
  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium mb-6"
            style={{ 
              backgroundColor: 'var(--accent-muted)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent)'
            }}
          >
            <Icon name="Quote" className="w-4 h-4" />
            Client Success Stories
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Don't just take our word for it. See what our clients have achieved with Lock J Lab.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 text-center"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {stat.value}
                </span>
                {stat.icon && <Icon name={stat.icon} className="w-6 h-6 text-yellow-400 fill-yellow-400" />}
              </div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div 
            className="p-8 md:p-12"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <Icon name="Quote" className="w-12 h-12 mb-6" style={{ color: 'var(--accent)', opacity: 0.3 }} />
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quote Content */}
              <div className="lg:col-span-2">
                <blockquote 
                  className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8"
                  style={{ color: 'var(--text-primary)' }}
                >
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
                  >
                    {testimonials[activeIndex].initials}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {testimonials[activeIndex].author}
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Highlight */}
              <div className="flex flex-col justify-center">
                <div 
                  className="p-6 text-center"
                  style={{ 
                    backgroundColor: 'var(--accent-muted)',
                    border: '1px solid var(--accent)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <p 
                    className="text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
                  >
                    {testimonials[activeIndex].metric}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {testimonials[activeIndex].metricLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="transition-all duration-300"
                  style={{ 
                    width: index === activeIndex ? '40px' : '12px',
                    height: '12px',
                    backgroundColor: index === activeIndex ? 'var(--accent)' : 'var(--border)',
                    borderRadius: 'var(--radius-full)'
                  }}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Company Logos Row */}
          <div className="mt-12 text-center">
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => handleDotClick(index)}
                  className="text-lg font-semibold transition-all"
                  style={{ color: index === activeIndex ? 'var(--text-primary)' : 'var(--text-muted)' }}
                >
                  {t.company}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
