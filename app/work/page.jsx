// Filename: app/work/page.jsx
'use client';

import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import InteractiveProjectPoster from '../components/InteractiveProjectPoster';
import { useTheme } from '../context/ThemeContext';

// SVG Mockup Components (these stay dark as they represent the actual product)
const CoinflowMockup = () => (
  <div className="w-full h-full bg-[#0a0e14] p-4 relative overflow-hidden">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <span className="text-white font-semibold">Coinflow</span>
      </div>
      <div className="flex gap-2">
        <div className="w-16 h-6 bg-emerald-500/20 rounded text-emerald-400 text-xs flex items-center justify-center">Buy</div>
        <div className="w-16 h-6 bg-white/10 rounded text-gray-400 text-xs flex items-center justify-center">Sell</div>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-gray-500 text-xs">Portfolio Value</p>
      <p className="text-white text-2xl font-bold">$124,847.32</p>
      <p className="text-emerald-400 text-xs">+$13,847.32 (12.4%)</p>
    </div>
    <div className="h-24 mb-4 relative">
      <svg viewBox="0 0 200 60" className="w-full h-full">
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0 50 Q20 45, 40 40 T80 35 T120 25 T160 30 T200 20" fill="none" stroke="#10b981" strokeWidth="2"/>
        <path d="M0 50 Q20 45, 40 40 T80 35 T120 25 T160 30 T200 20 V60 H0 Z" fill="url(#chartGrad)"/>
      </svg>
    </div>
    <div className="space-y-2">
      {[
        { name: 'BTC', price: '$86,644', change: '-0.99%', color: '#f7931a' },
        { name: 'ETH', price: '$2,801', change: '-1.89%', color: '#627eea' },
      ].map((coin) => (
        <div key={coin.name} className="flex items-center justify-between bg-white/5 rounded-lg p-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: coin.color + '30' }}>
              <div className="w-full h-full flex items-center justify-center text-xs font-bold" style={{ color: coin.color }}>{coin.name[0]}</div>
            </div>
            <span className="text-white text-sm">{coin.name}</span>
          </div>
          <div className="text-right">
            <p className="text-white text-sm">{coin.price}</p>
            <p className="text-red-400 text-xs">{coin.change}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MedibookMockup = () => (
  <div className="w-full h-full bg-white p-4 relative overflow-hidden">
    <div className="bg-blue-500 -mx-4 -mt-4 px-4 py-3 mb-4">
      <p className="text-blue-100 text-xs">Good morning,</p>
      <p className="text-white font-semibold">Alex Thompson</p>
    </div>
    <div className="bg-blue-50 rounded-xl p-3 mb-4">
      <p className="text-blue-600 text-xs font-medium mb-2">Upcoming Appointment</p>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">SC</div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Dr. Sarah Chen</p>
          <p className="text-gray-500 text-xs">Cardiologist</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-blue-100">
        <span className="text-gray-600 text-xs">Today, 2:30 PM</span>
        <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-lg">Join Call</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { name: 'Find Doctor', icon: '🔍' },
        { name: 'Appointments', icon: '📅' },
      ].map((item) => (
        <div key={item.name} className="bg-blue-50 rounded-xl p-3 text-center">
          <div className="text-xl mb-1">{item.icon}</div>
          <p className="text-gray-900 font-medium text-xs">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const IDSStaffingMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative overflow-hidden">
    <div className="flex items-center gap-2 mb-4">
      <div className="text-white font-bold text-lg italic">IDS</div>
      <div className="text-red-500 text-xs">Image Detail Specialists</div>
    </div>
    <div className="mb-4">
      <h3 className="text-white font-bold text-xl italic mb-1">Get A Quote</h3>
      <p className="text-gray-400 text-xs mb-3">From The Country&apos;s #1 Collision Center Staffing Solution</p>
      <div className="flex gap-2">
        <button className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded font-semibold">Single Location</button>
        <button className="flex-1 bg-white text-gray-800 text-xs py-2 px-3 rounded font-semibold">Multi Location</button>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-white text-xs font-medium">Based On 1,000+ Reviews</span>
      <div className="flex">
        {[1,2,3,4,5].map(i => (
          <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        ))}
      </div>
    </div>
  </div>
);

const IDSExpressMockup = () => (
  <div className="w-full h-full bg-white p-4 relative overflow-hidden">
    <div className="flex justify-center mb-4">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">🚿</span>
        </div>
        <span className="font-bold text-gray-800">IDS Express</span>
      </div>
    </div>
    <h3 className="text-gray-900 font-bold text-lg text-center mb-1">Car Wash Membership</h3>
    <p className="text-gray-500 text-xs text-center mb-4">We&apos;ll send you a text to verify your phone</p>
    <button className="w-full bg-cyan-400 text-white font-semibold py-2 rounded-lg text-sm mb-4">Continue →</button>
    <div className="space-y-2">
      {[
        { name: 'Express Wash', price: '$19.99/mo', popular: false },
        { name: 'Express Plus', price: '$29.99/mo', popular: true },
      ].map((plan) => (
        <div key={plan.name} className={`flex items-center justify-between p-2 rounded-lg border ${plan.popular ? 'border-cyan-400 bg-cyan-50' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            {plan.popular && <span className="bg-cyan-400 text-white text-[8px] px-1 rounded">POPULAR</span>}
            <span className="text-gray-900 text-xs font-medium">{plan.name}</span>
          </div>
          <span className="text-gray-600 text-xs">{plan.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const caseStudies = [
  {
    id: 'coinflow',
    slug: '/work/coinflow',
    company: 'Coinflow',
    title: 'Professional cryptocurrency trading dashboard',
    description: 'We created Coinflow, a sophisticated crypto trading platform featuring real-time price charts, instant buy/sell functionality, live order books, and comprehensive market statistics.',
    mockup: CoinflowMockup,
    tags: ['Product Strategy', 'UI/UX Design', 'Fintech', 'Web App'],
    stats: [
      { value: '$86M+', label: 'Trading volume' },
      { value: '10+', label: 'Crypto assets' },
    ],
    accentColor: '#10b981',
  },
  {
    id: 'medibook',
    slug: '/work/medibook',
    company: 'MediBook',
    title: 'Modern healthcare appointment platform',
    description: 'We built MediBook, a comprehensive telehealth platform that connects patients with healthcare providers.',
    mockup: MedibookMockup,
    tags: ['Healthcare', 'UI/UX Design', 'Web App', 'Telehealth'],
    stats: [
      { value: '50K+', label: 'Appointments booked' },
      { value: '98%', label: 'Patient satisfaction' },
    ],
    accentColor: '#3b82f6',
  },
  {
    id: 'ids-staffing',
    slug: '/work/ids-staffing',
    company: 'Image Detail Specialists',
    title: 'The nation\'s leading collision center staffing solution',
    description: 'We built a comprehensive platform for Image Detail Specialists to connect collision centers with skilled professionals.',
    mockup: IDSStaffingMockup,
    tags: ['UI/UX Design', 'Web Development', 'Business Platform'],
    stats: [
      { value: '1,000+', label: 'Reviews' },
      { value: '4.8/5.0', label: 'Trust Score' },
    ],
    accentColor: '#ef4444',
  },
  {
    id: 'ids-express',
    slug: '/work/ids-express',
    company: 'IDS Express Car Wash',
    title: 'Membership-driven express car wash platform',
    description: 'We designed and developed a modern membership platform for IDS Express Car Wash.',
    mockup: IDSExpressMockup,
    tags: ['UI/UX Design', 'Web Development', 'Membership System'],
    stats: [
      { value: '+85%', label: 'Member signups' },
      { value: '+120%', label: 'Recurring revenue' },
    ],
    accentColor: '#06b6d4',
  },
];

export default function WorkPage() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <PageHero
        tag="Our Work"
        icon="FolderOpen"
        title="Case Studies &"
        titleHighlight="Success Stories"
        description="Explore our portfolio of successful digital products. See how we have helped startups and enterprises achieve measurable results."
        size="lg"
      />

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              const MockupComponent = study.mockup;
              return (
                <Link key={study.id} href={study.slug} className="block group">
                  <article
                    className="rounded-2xl overflow-hidden h-full transition-all duration-300"
                    style={{ 
                      backgroundColor: isLight ? 'var(--bg-secondary)' : `${study.accentColor}10`,
                      border: `1px solid ${isLight ? 'var(--border)' : study.accentColor + '30'}`,
                      boxShadow: isLight ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
                    }}
                  >
                    {/* Mockup Preview */}
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 z-10" />
                      <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <MockupComponent />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: isLight ? 'var(--bg-tertiary)' : 'rgba(255,255,255,0.1)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p 
                        className="text-sm uppercase tracking-wider mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {study.company}
                      </p>
                      <h3 
                        className="text-2xl font-bold mb-4"
                        style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                      >
                        {study.title}
                      </h3>
                      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {study.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex gap-8 mb-6">
                        {study.stats.map((stat) => (
                          <div key={stat.label}>
                            <div 
                              className="text-2xl font-bold"
                              style={{ color: 'var(--text-primary)' }}
                            >
                              {stat.value}
                            </div>
                            <div 
                              className="text-sm"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div 
                        className="flex items-center font-medium transition-all"
                        style={{ color: 'var(--accent)' }}
                      >
                        View Case Study
                        <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Project Could Be Next CTA */}
      <InteractiveProjectPoster />
    </div>
  );
}
