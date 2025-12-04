// Filename: app/components/WhyChooseUs.jsx
'use client';

import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const benefits = [
  {
    title: "Expert Team",
    description: "Senior engineers, designers, and strategists with 10+ years average experience building world-class products.",
    icon: "Users",
    stats: "10+ years avg. experience"
  },
  {
    title: "Proven Results",
    description: "Our clients have raised over $50M in funding and generated $100M+ in revenue using products we built.",
    icon: "TrendingUp",
    stats: "$100M+ client revenue"
  },
  {
    title: "Rapid Delivery",
    description: "From concept to launch in weeks, not months. Our agile process keeps projects on time and on budget.",
    icon: "Rocket",
    stats: "6-8 weeks to MVP"
  },
  {
    title: "Full Ownership",
    description: "You own 100% of your code, designs, and intellectual property. No vendor lock-in, ever.",
    icon: "ShieldCheck",
    stats: "100% IP ownership"
  },
];

const comparisons = [
  { feature: "Time to Launch", us: "6-8 weeks", others: "6-12 months" },
  { feature: "Team Experience", us: "10+ years avg", others: "2-3 years avg" },
  { feature: "Communication", us: "Daily updates", others: "Weekly at best" },
  { feature: "Code Ownership", us: "100% yours", others: "Often restricted" },
  { feature: "Support After Launch", us: "Dedicated team", others: "Limited/Extra cost" },
  { feature: "Transparency", us: "Full visibility", others: "Black box" },
];

export default function WhyChooseUs() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  if (isLight) {
    return (
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimateOnScroll animation="fadeUp" className="text-center mb-20">
            <span 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
            >
              <Icon name="Award" className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Built Different
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We combine deep expertise with genuine partnership to deliver exceptional results.
            </p>
          </AnimateOnScroll>

          {/* Benefits - Horizontal Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.1}>
                <div 
                  className="flex gap-6 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-muted)' }}
                  >
                    <Icon name={benefit.icon} className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-semibold mb-2"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {benefit.description}
                    </p>
                    <span 
                      className="inline-flex items-center text-sm font-bold"
                      style={{ color: 'var(--success)' }}
                    >
                      {benefit.stats}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Comparison Table - Clean Style */}
          <div className="max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-bold text-center mb-10"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              How We Compare
            </h3>
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)' }}
            >
              {/* Header */}
              <div 
                className="grid grid-cols-3 py-4 px-6"
                style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}
              >
                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Feature</div>
                <div className="text-center">
                  <span className="font-bold" style={{ color: 'var(--accent)' }}>Lock J Lab</span>
                </div>
                <div className="text-center text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Others</div>
              </div>
              {/* Rows */}
              {comparisons.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-3 py-4 px-6"
                  style={{ borderBottom: index !== comparisons.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <div style={{ color: 'var(--text-primary)' }}>{item.feature}</div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Icon name="Check" className="w-5 h-5" style={{ color: 'var(--success)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.us}</span>
                  </div>
                  <div className="text-center" style={{ color: 'var(--text-muted)' }}>{item.others}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dark theme (Neon Dark) - Original design
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f1629, var(--bg-primary))' }}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent)' }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'var(--accent-muted)', border: '1px solid var(--accent)', color: 'var(--accent)' }}
          >
            <Icon name="Award" className="w-4 h-4" />
            Why Lock J Lab
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            The Unfair Advantage
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We're not just another dev shop. Here's why companies choose to partner with us.
          </p>
        </AnimateOnScroll>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.1}>
              <div 
                className="group rounded-2xl p-6 transition-all duration-300 h-full"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: '1px solid var(--border)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--accent-muted)' }}
                >
                  <Icon name={benefit.icon} className="w-7 h-7" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{benefit.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
                <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>{benefit.stats}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            How We Compare
          </h3>
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid var(--border)'
            }}
          >
            <div className="grid grid-cols-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)' }}>
              <div className="p-4 font-medium" style={{ color: 'var(--text-secondary)' }}>Feature</div>
              <div className="p-4 text-center">
                <span className="font-bold" style={{ background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lock J Lab</span>
              </div>
              <div className="p-4 text-center font-medium" style={{ color: 'var(--text-secondary)' }}>Other Agencies</div>
            </div>
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-3"
                style={{ borderBottom: index !== comparisons.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="p-4" style={{ color: 'var(--text-secondary)' }}>{item.feature}</div>
                <div className="p-4 text-center flex items-center justify-center gap-2">
                  <Icon name="Check" className="w-5 h-5" style={{ color: 'var(--success)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.us}</span>
                </div>
                <div className="p-4 text-center" style={{ color: 'var(--text-muted)' }}>{item.others}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg" style={{ color: 'var(--text-secondary)' }}>Ready to experience the Lock J Lab difference?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:shadow-lg group"
              style={{ background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))' }}
            >
              Get Started
              <Icon name="ArrowRight" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-3 font-semibold py-4 px-8 rounded-xl transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
