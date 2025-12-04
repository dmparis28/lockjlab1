// Filename: app/about/page.jsx
'use client';

import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
];

const values = [
  { icon: 'Target', title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we create.' },
  { icon: 'Users', title: 'Collaboration', description: 'We believe the best work happens when we partner closely with our clients.' },
  { icon: 'Lightbulb', title: 'Innovation', description: 'We stay ahead of the curve, embracing new technologies and approaches.' },
  { icon: 'Heart', title: 'Impact', description: 'We measure success by the real-world difference our products make.' },
];

const locations = [
  { city: 'New York', role: 'Headquarters', address: '123 Tech Avenue, NY 10001', icon: 'Building2' },
  { city: 'San Francisco', role: 'West Coast Office', address: '456 Innovation Drive, CA 94105', icon: 'MapPin' },
  { city: 'London', role: 'European Office', address: '789 Digital Lane, EC1A 1BB', icon: 'Globe' },
];

export default function AboutPage() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <PageHero
        tag="About Lock J Lab"
        icon="Building2"
        title="Building Digital Products"
        titleHighlight="That Matter"
        description="For over a decade, we've partnered with startups, nonprofits, and enterprises to create products that drive real results."
        size="lg"
      />

      {/* Stats Section */}
      <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div 
                  className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))' }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Our Story
              </h2>
              <div className="space-y-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Lock J Lab was founded with a simple mission: help ambitious teams build products that make a difference. What started as a small design studio has grown into a full-service digital product agency.
                </p>
                <p>
                  Today, we bring together strategists, designers, and engineers who share a passion for solving complex problems. We've helped launch over 200 products, from early-stage MVPs to enterprise platforms serving millions.
                </p>
                <p>
                  Our approach combines deep technical expertise with a relentless focus on user experience. We don't just build software — we create products that people love to use.
                </p>
              </div>
            </div>
            <div 
              className="aspect-square rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: isLight ? 'var(--bg-secondary)' : 'rgba(14, 165, 233, 0.1)',
                border: `1px solid ${isLight ? 'var(--border)' : 'rgba(14, 165, 233, 0.3)'}`
              }}
            >
              <Icon name="Building2" className="w-32 h-32 opacity-50" style={{ color: 'var(--accent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Our Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl text-center"
                style={{
                  backgroundColor: isLight ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-muted)' }}
                >
                  <Icon name={value.icon} className="w-8 h-8" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Our Locations
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              With offices across the globe, we're always close to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.city}
                className="p-8 rounded-xl"
                style={{
                  backgroundColor: isLight ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-muted)' }}
                >
                  <Icon name={location.icon} className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 
                  className="text-2xl font-semibold mb-2"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {location.city}
                </h3>
                <p className="mb-4 font-medium" style={{ color: 'var(--accent)' }}>{location.role}</p>
                <p style={{ color: 'var(--text-muted)' }}>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {"Let's discuss your project and see how we can help you achieve your goals."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="text-white font-semibold py-3 px-8 transition-all flex items-center group"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              Start a Conversation
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="font-semibold py-3 px-8 transition-all"
              style={{ 
                backgroundColor: isLight ? 'transparent' : 'rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
