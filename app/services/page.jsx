// Filename: app/services/page.jsx
'use client';

import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    id: 'strategy',
    name: 'Product Strategy',
    icon: 'Rocket',
    description: 'We define a clear product vision, analyze the market, and create a roadmap that aligns business goals with user needs.',
    accentColor: '#a855f7',
    href: '/services/strategy',
    features: [
      'Product Launch Strategy',
      'Competitor Analysis',
      'Product Ideation & Roadmapping',
      'User Experience Research',
    ],
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    icon: 'Palette',
    description: 'Our design team crafts intuitive, engaging, and aesthetically pleasing interfaces that users love.',
    accentColor: '#0ea5e9',
    href: '/services/design',
    features: [
      'UI/UX Design',
      'Interactive Prototyping',
      'Brand & Visual Identity',
      'Design Systems',
    ],
  },
  {
    id: 'development',
    name: 'Software Development',
    icon: 'Code',
    description: 'We build robust, scalable, and maintainable applications using modern technology stacks.',
    accentColor: '#14b8a6',
    href: '/services/development',
    features: [
      'Web Application Development',
      'Mobile App Development',
      'API & Backend Development',
      'Cloud Infrastructure',
    ],
  },
];

const industries = [
  { name: 'Startups', icon: 'Rocket', description: 'MVP development, pitch decks, and growth engineering.' },
  { name: 'Enterprise', icon: 'Building2', description: 'Digital transformation and custom software solutions.' },
  { name: 'Healthcare', icon: 'Heart', description: 'HIPAA-compliant apps and patient engagement platforms.' },
  { name: 'Fintech', icon: 'DollarSign', description: 'Secure payment systems and financial dashboards.' },
  { name: 'E-commerce', icon: 'ShoppingCart', description: 'Scalable storefronts and inventory management.' },
  { name: 'Nonprofits', icon: 'Users', description: 'Accessible design and donation platforms.' },
];

export default function ServicesPage() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <PageHero
        tag="What We Do"
        icon="Layers"
        title="End-to-End Digital"
        titleHighlight="Product Services"
        description="From initial concept to scalable deployment, we provide the expertise needed at every stage of the product lifecycle."
        size="lg"
      />

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: isLight ? 'var(--bg-secondary)' : `${service.accentColor}15`,
                  border: `1px solid ${isLight ? 'var(--border)' : service.accentColor + '30'}`,
                  boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="p-4 rounded-xl"
                    style={{ 
                      backgroundColor: `${service.accentColor}15`,
                      border: `1px solid ${service.accentColor}30`
                    }}
                  >
                    <Icon name={service.icon} className="w-8 h-8" style={{ color: service.accentColor }} />
                  </div>
                  <h3 
                    className="text-2xl font-bold ml-5"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    {service.name}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
                      <Icon name="CheckCircle" className="w-5 h-5 mr-3" style={{ color: service.accentColor }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div 
                  className="font-semibold flex items-center group-hover:gap-2 transition-all"
                  style={{ color: service.accentColor }}
                >
                  Learn More
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Industries We Serve
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We bring deep expertise across diverse sectors, tailoring our approach to your unique industry challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-6 rounded-xl transition-colors group"
                style={{
                  backgroundColor: isLight ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid var(--border)`
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--accent-muted)' }}
                  >
                    <Icon name={industry.icon} className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 
                    className="text-xl font-semibold ml-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {industry.name}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {"Let's discuss how we can help bring your vision to life with our comprehensive suite of services."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="text-white font-semibold py-3 px-8 transition duration-300 flex items-center group"
              style={{ 
                background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))',
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              Book a Consultation
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/process"
              className="font-semibold py-3 px-8 transition duration-300"
              style={{ 
                backgroundColor: isLight ? 'transparent' : 'rgba(255,255,255,0.1)',
                color: 'var(--text-primary)',
                borderRadius: isLight ? 'var(--radius-full)' : 'var(--radius-lg)',
                border: `1px solid var(--border)`
              }}
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
