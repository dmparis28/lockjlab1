// Filename: app/components/Portfolio.jsx
import Link from 'next/link';
import Icon from './Icon';

const projects = [
  {
    company: 'MediBook',
    title: 'Modern healthcare appointment platform',
    description: 'We built MediBook, a comprehensive telehealth platform connecting patients with healthcare providers. Features include appointment scheduling, video consultations, medical records management, and secure messaging.',
    image: null,
    tags: ['Healthcare', 'UI/UX Design', 'Telehealth'],
    color: 'from-blue-600/10 to-blue-900/5',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    mockup: 'medibook',
    href: '/work/medibook',
  },
  {
    company: 'Image Detail Specialists',
    title: 'The nation\'s leading collision center staffing solution',
    description: 'We created a comprehensive staffing platform connecting collision centers with skilled detailing professionals, featuring instant quotes and a robust review system with 1,000+ verified reviews.',
    image: null,
    tags: ['Web Development', 'Business Platform', 'Staffing'],
    color: 'from-red-600/10 to-red-900/5',
    border: 'border-red-500/20',
    accent: 'text-red-400',
    mockup: 'ids',
    href: '/work/ids-staffing',
  },
  {
    company: 'IDS Express Car Wash',
    title: 'Membership-driven express car wash platform',
    description: 'We designed and developed a sleek membership platform for IDS Express Car Wash, making it easy for customers to sign up, manage subscriptions, and enjoy unlimited premium washes.',
    image: null,
    tags: ['Web Development', 'Membership System', 'E-commerce'],
    color: 'from-cyan-600/10 to-cyan-900/5',
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    mockup: 'idsexpress',
    href: '/work/ids-express',
  },
];

// Simple mockup components
const MediBookMockup = () => (
  <div className="w-full h-full bg-white p-4 flex">
    {/* Sidebar */}
    <div className="w-1/4 border-r border-gray-200 pr-3">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
          <Icon name="Calendar" className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-semibold text-gray-800">MediBook</span>
      </div>
      <div className="space-y-2">
        {['Dashboard', 'Find a Doctor', 'Medical Records', 'Billing', 'Messages'].map((item, i) => (
          <div key={item} className={`text-xs py-2 px-2 rounded ${i === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
    {/* Main content */}
    <div className="flex-1 pl-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Welcome back, Alex!</h3>
        <p className="text-xs text-gray-500">Here&apos;s your health overview</p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: 'Appointments', value: '1' },
          { label: 'Messages', value: '1 Unread' },
          { label: 'Prescriptions', value: '2' },
          { label: 'Last Check-up', value: 'Sep 15' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded p-2">
            <div className="text-[10px] text-gray-500">{stat.label}</div>
            <div className="text-sm font-semibold text-gray-800">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded p-3">
        <div className="text-xs font-medium text-gray-700 mb-2">Upcoming Appointments</div>
        <div className="flex items-center justify-between bg-white rounded p-2 border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">J</div>
            <div>
              <div className="text-xs font-medium text-gray-800">Dr. John Carter</div>
              <div className="text-[10px] text-gray-500">Cardiologist</div>
            </div>
          </div>
          <button className="bg-blue-500 text-white text-[10px] px-3 py-1 rounded">Join Call</button>
        </div>
      </div>
    </div>
  </div>
);

const IDSMockup = () => (
  <div className="w-full h-full relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 overflow-hidden">
    {/* Background with subtle car image effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
    <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
    
    {/* Content */}
    <div className="relative z-10 p-6 h-full flex flex-col justify-center">
      {/* Logo */}
      <img 
        src="/images/logos/ids-staffing.webp" 
        alt="Image Detail Specialists" 
        className="h-10 w-auto mb-4 object-contain"
      />
      <h3 className="text-2xl font-bold text-white italic mb-2">Get A Quote</h3>
      <p className="text-gray-300 text-xs mb-5 max-w-xs">From The Country&apos;s Number One Collision Center Staffing Solution.</p>
      <div className="flex gap-3">
        <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-5 py-2.5 rounded font-semibold uppercase tracking-wide transition-all">Single Location</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 text-xs px-5 py-2.5 rounded font-semibold uppercase tracking-wide transition-all">Multi Location</button>
      </div>
      
      {/* Reviews bar */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 w-fit">
          <span className="text-white text-sm font-medium">Based On 1,000+ Reviews</span>
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-gray-400 text-xs">(Trusted Score 4.8 / 5.0)</span>
        </div>
      </div>
    </div>
  </div>
);

const IDSExpressMockup = () => (
  <div className="w-full h-full bg-gray-100 flex items-center justify-center p-6">
    {/* Membership Card */}
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xs">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img 
          src="/images/logos/ids-express.png" 
          alt="IDS Express Car Wash" 
          className="h-10 w-auto object-contain"
        />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-1">IDS Car Wash Membership</h3>
      <p className="text-gray-500 text-xs mb-5">We&apos;ll send you a text to verify your phone and get you on your way.</p>
      
      {/* Phone Input */}
      <div className="flex items-center border border-gray-200 rounded-lg mb-4 overflow-hidden">
        <div className="flex items-center gap-1 px-3 py-2.5 bg-gray-50 border-r border-gray-200">
          <span className="text-sm">🇺🇸</span>
          <span className="text-gray-600 text-sm">US</span>
          <Icon name="ChevronDown" className="w-3 h-3 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Mobile phone number" 
          className="flex-1 px-3 py-2.5 text-sm text-gray-400 outline-none"
        />
      </div>
      
      {/* Continue Button */}
      <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-all text-sm">
        Continue →
      </button>
      
      {/* Help Link */}
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">Need help getting started?</p>
        <a href="#" className="text-cyan-500 text-xs hover:underline">Contact support</a>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <section className="bg-[var(--bg-primary)] py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">More Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Featured Work
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.company}
              className={`group bg-gradient-to-br ${project.color} rounded-2xl border ${project.border} overflow-hidden`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content - alternates sides */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{project.company}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <Link
                    href={project.href}
                    className={`inline-flex items-center ${project.accent} hover:opacity-80 font-semibold transition-opacity group/link w-fit`}
                  >
                    View Case Study
                    <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Image/Mockup */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[3/2] rounded-xl overflow-hidden bg-black/20 border border-white/10">
                    {project.mockup === 'medibook' && <MediBookMockup />}
                    {project.mockup === 'ids' && <IDSMockup />}
                    {project.mockup === 'idsexpress' && <IDSExpressMockup />}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
