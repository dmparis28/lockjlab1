// Filename: app/work/ids-staffing/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function IDSStaffingCaseStudy() {
  const [quoteType, setQuoteType] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    locations: 1,
    technicians: '',
    paintTechs: '',
    estimators: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const stats = [
    { value: '1,000+', label: 'Verified Reviews' },
    { value: '4.8/5.0', label: 'Trust Score' },
    { value: '500+', label: 'Collision Centers Served' },
    { value: '10K+', label: 'Technicians Placed' },
    { value: '48hrs', label: 'Average Placement Time' },
    { value: '95%', label: 'Client Retention' },
  ];

  const services = [
    { title: 'Body Technicians', desc: 'Skilled body repair specialists', icon: 'Wrench' },
    { title: 'Paint Technicians', desc: 'Expert painters and refinishers', icon: 'Paintbrush' },
    { title: 'Estimators', desc: 'Certified damage estimators', icon: 'Calculator' },
    { title: 'Managers', desc: 'Experienced shop managers', icon: 'Users' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logos/ids-staffing.webp" alt="Image Detail Specialists" className="h-12 w-auto" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 italic">
                The nation&apos;s #1 collision center staffing solution
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We redesigned and rebuilt the Image Detail Specialists platform from the ground up—creating a streamlined quote system, comprehensive review management, and powerful admin tools that connect collision centers with qualified technicians nationwide.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Platforms</p>
                  <p className="text-white font-medium">Web Application</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Deliverables</p>
                  <p className="text-white font-medium">Strategy, Design, Development</p>
                </div>
              </div>

              <a href="https://imagedetailspecialists.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors">
                Visit IDS <Icon name="ArrowUpRight" className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Hero Image - Website Preview */}
            <div className="relative">
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent z-10" />
                <div className="relative z-20 p-8">
                  <img src="/images/logos/ids-staffing.webp" alt="IDS" className="h-16 w-auto mb-6" />
                  <h2 className="text-3xl font-bold text-white italic mb-3">Get A Quote</h2>
                  <p className="text-gray-300 text-sm mb-6">From The Country&apos;s Number One Collision Center Staffing Solution.</p>
                  <div className="flex gap-3">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold uppercase tracking-wide text-sm transition-colors">Single Location</button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded font-semibold uppercase tracking-wide text-sm transition-colors">Multi Location</button>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-white font-medium">Based On 1,000+ Reviews</span>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">(Trusted Score 4.8 / 5.0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111827] border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The staffing crisis in collision repair</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            The collision repair industry faces a critical skilled labor shortage. With an aging workforce and fewer young technicians entering the trade, collision centers struggle to maintain adequate staffing levels. This leads to longer repair times, reduced capacity, and frustrated customers.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Image Detail Specialists had been solving this problem for years, but their legacy website wasn&apos;t keeping up. The quote process was cumbersome, the review system was outdated, and multi-location businesses had no streamlined way to manage staffing across their network.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-red-400 font-semibold mb-3">Before</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5" />
                  <span>5+ minute quote process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5" />
                  <span>No multi-location support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5" />
                  <span>Manual review collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5" />
                  <span>Phone-only contact</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-green-400 font-semibold mb-3">After</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>90-second quote process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Enterprise multi-location dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Automated review requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>Instant quote + callback scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quote Demo */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Quote System</h2>
            <p className="text-gray-400 text-lg">Experience the streamlined quote process we built</p>
          </div>

          {/* Quote Demo */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {!quoteType ? (
              <div className="p-8 md:p-12 text-center">
                <img src="/images/logos/ids-staffing.webp" alt="IDS" className="h-16 w-auto mx-auto mb-8" />
                <h3 className="text-3xl font-bold text-white italic mb-4">Get A Quote</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">From The Country&apos;s Number One Collision Center Staffing Solution.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button 
                    onClick={() => { setQuoteType('single'); setFormStep(1); }}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="Building" className="w-5 h-5" />
                    Single Location
                  </button>
                  <button 
                    onClick={() => { setQuoteType('multi'); setFormStep(1); }}
                    className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="Building" className="w-5 h-5" />
                    Multi Location
                  </button>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-white font-medium">Based On 1,000+ Reviews</span>
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 md:p-12">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-8">
                  <button onClick={() => { setQuoteType(null); setFormStep(1); }} className="text-gray-400 hover:text-white">
                    <Icon name="ArrowLeft" className="w-5 h-5" />
                  </button>
                  <div className="flex-1 mx-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${formStep >= step ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                            {formStep > step ? <Icon name="Check" className="w-4 h-4" /> : step}
                          </div>
                          {step < 3 && <div className={`w-12 h-1 ${formStep > step ? 'bg-red-600' : 'bg-gray-700'}`} />}
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm">
                      Step {formStep} of 3: {formStep === 1 ? 'Staffing Needs' : formStep === 2 ? 'Contact Info' : 'Review'}
                    </p>
                  </div>
                  <div className="w-5" />
                </div>

                {/* Step 1: Staffing Needs */}
                {formStep === 1 && (
                  <div className="animate-fade-in max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">What staffing do you need?</h3>
                    
                    {quoteType === 'multi' && (
                      <div className="mb-6">
                        <label className="text-gray-400 text-sm mb-2 block">Number of Locations</label>
                        <select 
                          value={formData.locations}
                          onChange={(e) => setFormData({...formData, locations: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                        >
                          {[2,3,4,5,'6+'].map(n => <option key={n} value={n}>{n} Locations</option>)}
                        </select>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {services.map((service) => (
                        <div key={service.title} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                              <Icon name={service.icon} className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{service.title}</p>
                              <p className="text-gray-500 text-xs">{service.desc}</p>
                            </div>
                          </div>
                          <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-red-500">
                            <option value="0">None needed</option>
                            <option value="1">1 technician</option>
                            <option value="2">2 technicians</option>
                            <option value="3">3 technicians</option>
                            <option value="4+">4+ technicians</option>
                          </select>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setFormStep(2)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {formStep === 2 && (
                  <div className="animate-fade-in max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Contact Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-400 text-sm mb-2 block">First Name</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm mb-2 block">Last Name</label>
                          <input 
                            type="text" 
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Company Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                          placeholder="ABC Collision Center"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Email</label>
                        <input 
                          type="email" 
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm mb-2 block">Phone</label>
                        <input 
                          type="tel" 
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFormStep(1)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-lg font-semibold transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        onClick={() => setFormStep(3)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {formStep === 3 && (
                  <div className="animate-fade-in max-w-lg mx-auto text-center">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircle" className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Quote Request Submitted!</h3>
                    <p className="text-gray-400 mb-8">
                      Thank you for your interest. A staffing specialist will contact you within 2 business hours to discuss your needs and provide a customized quote.
                    </p>
                    <div className="bg-gray-800/50 rounded-xl p-6 mb-6 text-left">
                      <h4 className="text-white font-semibold mb-3">What happens next?</h4>
                      <ol className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                          <span>Our team reviews your staffing needs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                          <span>We match you with qualified technicians in your area</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                          <span>Receive a customized quote and technician profiles</span>
                        </li>
                      </ol>
                    </div>
                    <button 
                      onClick={() => { setQuoteType(null); setFormStep(1); }}
                      className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold transition-colors"
                    >
                      Start New Quote
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Comprehensive staffing solutions</h2>
          <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
            From single technician placements to full shop staffing, IDS provides qualified professionals for every role.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Body Technicians', desc: 'I-CAR certified body repair specialists with expertise in structural and non-structural repairs.', count: '3,500+', icon: 'Wrench' },
              { title: 'Paint Technicians', desc: 'Skilled refinish technicians experienced with all major paint systems and color matching.', count: '2,800+', icon: 'Paintbrush' },
              { title: 'Estimators', desc: 'CCC, Mitchell, and Audatex certified estimators with DRP experience.', count: '1,200+', icon: 'Calculator' },
              { title: 'Shop Managers', desc: 'Experienced production and front office managers to optimize your operations.', count: '500+', icon: 'Users' },
            ].map((service) => (
              <div key={service.title} className="bg-[#111827] rounded-xl p-6 border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <p className="text-red-400 font-semibold">{service.count} in network</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our development process</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery &amp; Analysis</h3>
                <p className="text-gray-400 leading-relaxed">
                  We spent two weeks embedded with the IDS team, understanding their operations, interviewing collision center owners, and mapping the entire staffing workflow from initial contact to placement.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">UX Overhaul</h3>
                <p className="text-gray-400 leading-relaxed">
                  Redesigned the quote process from a lengthy form to a streamlined 3-step flow. Created separate paths for single and multi-location businesses with appropriate complexity for each.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Review System</h3>
                <p className="text-gray-400 leading-relaxed">
                  Built an automated review collection system that requests feedback after each placement, aggregates scores, and displays verified reviews prominently throughout the site.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Admin Dashboard</h3>
                <p className="text-gray-400 leading-relaxed">
                  Created a powerful admin dashboard for the IDS team to manage leads, track placements, communicate with clients, and analyze performance metrics in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The new platform transformed IDS Staffing&apos;s lead generation and placement process
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: '3x', label: 'Faster Placements', icon: 'Zap', change: '48hrs avg' },
              { value: '280%', label: 'Lead Increase', icon: 'TrendingUp', change: 'First 6 months' },
              { value: '95%', label: 'Client Retention', icon: 'Users', change: 'Up from 72%' },
              { value: '4.8/5', label: 'Client Satisfaction', icon: 'Star', change: '1000+ reviews' }
            ].map((metric, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} className="w-7 h-7 text-red-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <span className="text-red-400 text-xs font-medium">{metric.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-500/5 to-orange-500/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon name="Quote" className="w-16 h-16 text-red-500/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              &quot;Lock J Lab completely transformed our business. The new platform has cut our placement time by two-thirds, and our recruiters can now focus on finding the right matches instead of drowning in paperwork. We&apos;ve seen a 280% increase in qualified leads.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AR
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Amanda Richardson</p>
                <p className="text-gray-400">VP of Talent, IDS Staffing Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Coinflow', category: 'Fintech Platform', href: '/work/coinflow', color: 'from-emerald-500 to-teal-500' },
              { name: 'MediBook', category: 'Healthcare Platform', href: '/work/medibook', color: 'from-blue-500 to-cyan-500' },
              { name: 'IDS Express', category: 'Service Platform', href: '/work/ids-express', color: 'from-cyan-500 to-blue-500' }
            ].map((project, i) => (
              <Link key={i} href={project.href} className="group block">
                <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white text-4xl font-bold opacity-30">{project.name[0]}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Icon name="ArrowRight" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                </div>
                <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Stripe', 'Vercel', 'Node.js', 'Twilio'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 to-transparent">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need help with your business platform?</h2>
          <p className="text-gray-400 text-lg mb-8">Let&apos;s discuss how we can streamline your operations.</p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            Start a Project
            <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
