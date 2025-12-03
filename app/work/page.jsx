// Filename: app/work/page.jsx
import Link from 'next/link';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export const metadata = {
  title: 'Our Work | Lock J Lab',
  description: 'Explore our portfolio of successful digital products. See how we have helped startups and enterprises achieve their goals.',
};

// SVG Mockup Components
const CoinflowMockup = () => (
  <div className="w-full h-full bg-[#0a0e14] p-4 relative overflow-hidden">
    {/* Header */}
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
    {/* Portfolio Value */}
    <div className="mb-4">
      <p className="text-gray-500 text-xs">Portfolio Value</p>
      <p className="text-white text-2xl font-bold">$124,847.32</p>
      <p className="text-emerald-400 text-xs">+$13,847.32 (12.4%)</p>
    </div>
    {/* Chart Area */}
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
    {/* Crypto List */}
    <div className="space-y-2">
      {[
        { name: 'BTC', price: '$86,644', change: '-0.99%', color: '#f7931a' },
        { name: 'ETH', price: '$2,801', change: '-1.89%', color: '#627eea' },
        { name: 'SOL', price: '$127.17', change: '-0.93%', color: '#9945ff' },
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
    {/* Header */}
    <div className="bg-blue-500 -mx-4 -mt-4 px-4 py-3 mb-4">
      <p className="text-blue-100 text-xs">Good morning,</p>
      <p className="text-white font-semibold">Alex Thompson</p>
    </div>
    {/* Appointment Card */}
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
    {/* Quick Actions */}
    <div className="grid grid-cols-2 gap-2">
      {[
        { name: 'Find Doctor', color: 'blue', icon: '🔍' },
        { name: 'Appointments', color: 'green', icon: '📅' },
        { name: 'Records', color: 'purple', icon: '📋' },
        { name: 'Messages', color: 'orange', icon: '💬' },
      ].map((item) => (
        <div key={item.name} className={`bg-${item.color}-50 rounded-xl p-3 text-center`} style={{ backgroundColor: item.color === 'blue' ? '#eff6ff' : item.color === 'green' ? '#f0fdf4' : item.color === 'purple' ? '#faf5ff' : '#fff7ed' }}>
          <div className="text-xl mb-1">{item.icon}</div>
          <p className="text-gray-900 font-medium text-xs">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const IDSStaffingMockup = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 p-4 relative overflow-hidden">
    {/* Logo */}
    <div className="flex items-center gap-2 mb-4">
      <div className="text-white font-bold text-lg italic">IDS</div>
      <div className="text-red-500 text-xs">Image Detail Specialists</div>
    </div>
    {/* Get Quote Section */}
    <div className="mb-4">
      <h3 className="text-white font-bold text-xl italic mb-1">Get A Quote</h3>
      <p className="text-gray-400 text-xs mb-3">From The Country&apos;s #1 Collision Center Staffing Solution</p>
      <div className="flex gap-2">
        <button className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded font-semibold">Single Location</button>
        <button className="flex-1 bg-white text-gray-800 text-xs py-2 px-3 rounded font-semibold">Multi Location</button>
      </div>
    </div>
    {/* Reviews */}
    <div className="flex items-center gap-2 mb-4">
      <span className="text-white text-xs font-medium">Based On 1,000+ Reviews</span>
      <div className="flex">
        {[1,2,3,4,5].map(i => (
          <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        ))}
      </div>
      <span className="text-gray-400 text-xs">(4.8/5.0)</span>
    </div>
    {/* Services Grid */}
    <div className="grid grid-cols-2 gap-2">
      {['Body Techs', 'Paint Techs', 'Estimators', 'Managers'].map((service) => (
        <div key={service} className="bg-white/10 rounded-lg p-2 text-center">
          <p className="text-white text-xs font-medium">{service}</p>
          <p className="text-red-400 text-xs">Available</p>
        </div>
      ))}
    </div>
  </div>
);

const IDSExpressMockup = () => (
  <div className="w-full h-full bg-white p-4 relative overflow-hidden">
    {/* Logo */}
    <div className="flex justify-center mb-4">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">🚿</span>
        </div>
        <span className="font-bold text-gray-800">IDS Express</span>
      </div>
    </div>
    {/* Membership Title */}
    <h3 className="text-gray-900 font-bold text-lg text-center mb-1">Car Wash Membership</h3>
    <p className="text-gray-500 text-xs text-center mb-4">We&apos;ll send you a text to verify your phone</p>
    {/* Phone Input */}
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden mb-4">
      <div className="flex items-center gap-1 px-2 py-2 bg-gray-50 border-r border-gray-200">
        <span className="text-sm">🇺🇸</span>
        <span className="text-gray-600 text-xs">US</span>
      </div>
      <div className="flex-1 px-2 py-2 text-gray-400 text-sm">(555) 123-4567</div>
    </div>
    {/* CTA Button */}
    <button className="w-full bg-cyan-400 text-white font-semibold py-2 rounded-lg text-sm mb-4">Continue →</button>
    {/* Plan Preview */}
    <div className="space-y-2">
      {[
        { name: 'Express Wash', price: '$19.99/mo', popular: false },
        { name: 'Express Plus', price: '$29.99/mo', popular: true },
        { name: 'Unlimited VIP', price: '$49.99/mo', popular: false },
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
    color: 'from-emerald-600/20 to-emerald-800/10',
    accent: 'border-emerald-500/30',
  },
  {
    id: 'medibook',
    slug: '/work/medibook',
    company: 'MediBook',
    title: 'Modern healthcare appointment platform',
    description: 'We built MediBook, a comprehensive telehealth platform that connects patients with healthcare providers. Features include appointment scheduling, video consultations, and secure medical records.',
    mockup: MedibookMockup,
    tags: ['Healthcare', 'UI/UX Design', 'Web App', 'Telehealth'],
    stats: [
      { value: '50K+', label: 'Appointments booked' },
      { value: '98%', label: 'Patient satisfaction' },
    ],
    color: 'from-blue-600/20 to-blue-800/10',
    accent: 'border-blue-500/30',
  },
  {
    id: 'ids-staffing',
    slug: '/work/ids-staffing',
    company: 'Image Detail Specialists',
    title: 'The nation\'s leading collision center staffing solution',
    description: 'We built a comprehensive platform for Image Detail Specialists to connect collision centers with skilled professionals. Features instant quote generation and a robust review system.',
    mockup: IDSStaffingMockup,
    tags: ['UI/UX Design', 'Web Development', 'Business Platform'],
    stats: [
      { value: '1,000+', label: 'Reviews' },
      { value: '4.8/5.0', label: 'Trust Score' },
    ],
    color: 'from-red-600/20 to-red-800/10',
    accent: 'border-red-500/30',
  },
  {
    id: 'ids-express',
    slug: '/work/ids-express',
    company: 'IDS Express Car Wash',
    title: 'Membership-driven express car wash platform',
    description: 'We designed and developed a modern membership platform for IDS Express Car Wash, making it easy for customers to sign up, manage subscriptions, and enjoy unlimited washes.',
    mockup: IDSExpressMockup,
    tags: ['UI/UX Design', 'Web Development', 'Membership System'],
    stats: [
      { value: '+85%', label: 'Member signups' },
      { value: '+120%', label: 'Recurring revenue' },
    ],
    color: 'from-cyan-600/20 to-cyan-800/10',
    accent: 'border-cyan-500/30',
  },
];

export default function WorkPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
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
                <Link
                  key={study.id}
                  href={study.slug}
                  className="block"
                >
                  <article
                    className={`group rounded-2xl overflow-hidden bg-gradient-to-br ${study.color} border ${study.accent} hover:shadow-2xl hover:shadow-${study.id === 'coinflow' ? 'emerald' : study.id === 'medibook' ? 'blue' : study.id === 'ids-staffing' ? 'red' : 'cyan'}-500/20 transition-all duration-300 h-full cursor-pointer`}
                  >
                    {/* Mockup Preview */}
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
                      <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <MockupComponent />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{study.company}</p>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-400 mb-6">{study.description}</p>
                      
                      {/* Stats */}
                      <div className="flex gap-8 mb-6">
                        {study.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sky-400 font-medium group-hover:gap-2 transition-all">
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

      {/* Video Section Placeholder - Ready for videos */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Our Work in Action</h2>
            <p className="text-gray-400 text-lg">Watch how we transform ideas into digital experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group hover:border-sky-500/30 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500/20 transition-colors">
                    <Icon name="Play" className="w-6 h-6 text-white ml-1" />
                  </div>
                  <p className="text-gray-500 text-sm">Video Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's discuss how we can help you achieve similar results for your business."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Start Your Project
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
