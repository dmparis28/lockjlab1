// Filename: app/components/Hero.jsx
'use client';

import Link from 'next/link';
import Icon from './Icon';
import HeroVisuals from './HeroVisuals';

export default function Hero() {
  return (
    <section className="relative bg-[#0B0F19] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-sky-400 text-sm font-medium">Digital Product Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
              We Build Digital Products That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Drive Results
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              From strategy to launch, we partner with ambitious teams to create apps, platforms, and experiences that users love.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="group w-full sm:w-auto bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-sky-500/25 border border-sky-500/50"
              >
                <span>Start Your Project</span>
                <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="group w-full sm:w-auto bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border border-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <span>View Our Work</span>
                <Icon name="ArrowUpRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Awards Section */}
            <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in animation-delay-500">
              <p className="text-gray-500 text-sm mb-6">Award-Winning Digital Agency</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                {/* Clutch Global Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="clutchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b5998"/>
                          <stop offset="100%" stopColor="#1a365d"/>
                        </linearGradient>
                        <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.5"/>
                        </filter>
                      </defs>
                      <polygon points="50,6 90,22 90,74 50,106 10,74 10,22" fill="url(#clutchGrad)" filter="url(#shadow1)"/>
                      <polygon points="50,12 84,26 84,70 50,98 16,70 16,26" fill="#1e3a5f"/>
                      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">Clutch</text>
                      <rect x="18" y="46" width="64" height="18" fill="#14b8a6" rx="3"/>
                      <text x="50" y="59" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">GLOBAL</text>
                      <text x="50" y="78" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial, sans-serif">Spring</text>
                      <text x="50" y="92" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">2025</text>
                    </svg>
                  </div>
                </div>

                {/* DesignRush 5-Star Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="drGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4b5563"/>
                          <stop offset="100%" stopColor="#1f2937"/>
                        </linearGradient>
                      </defs>
                      <polygon points="50,6 90,22 90,74 50,106 10,74 10,22" fill="url(#drGrad)" filter="url(#shadow1)"/>
                      <polygon points="50,12 84,26 84,70 50,98 16,70 16,26" fill="#111827"/>
                      <text x="50" y="34" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">5-STAR</text>
                      <text x="50" y="48" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Arial, sans-serif">AGENCY</text>
                      <g transform="translate(22, 54)">
                        <polygon points="6,0 7.5,4.5 12,4.8 8.5,7.8 9.5,12 6,9.5 2.5,12 3.5,7.8 0,4.8 4.5,4.5" fill="#fbbf24"/>
                        <polygon points="6,0 7.5,4.5 12,4.8 8.5,7.8 9.5,12 6,9.5 2.5,12 3.5,7.8 0,4.8 4.5,4.5" fill="#fbbf24" transform="translate(11,0)"/>
                        <polygon points="6,0 7.5,4.5 12,4.8 8.5,7.8 9.5,12 6,9.5 2.5,12 3.5,7.8 0,4.8 4.5,4.5" fill="#fbbf24" transform="translate(22,0)"/>
                        <polygon points="6,0 7.5,4.5 12,4.8 8.5,7.8 9.5,12 6,9.5 2.5,12 3.5,7.8 0,4.8 4.5,4.5" fill="#fbbf24" transform="translate(33,0)"/>
                        <polygon points="6,0 7.5,4.5 12,4.8 8.5,7.8 9.5,12 6,9.5 2.5,12 3.5,7.8 0,4.8 4.5,4.5" fill="#fbbf24" transform="translate(44,0)"/>
                      </g>
                      <text x="50" y="82" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Arial, sans-serif">DESIGNRUSH.com</text>
                      <text x="50" y="94" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="Arial, sans-serif">2024</text>
                    </svg>
                  </div>
                </div>

                {/* Inc 5000 Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <circle cx="50" cy="52" r="44" fill="#0f172a" stroke="#dc2626" strokeWidth="5" filter="url(#shadow1)"/>
                      <circle cx="50" cy="52" r="36" fill="#1e293b"/>
                      <text x="50" y="44" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif">Inc.</text>
                      <text x="50" y="70" textAnchor="middle" fill="#dc2626" fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif">5000</text>
                      <text x="50" y="104" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="Arial, sans-serif">FASTEST GROWING</text>
                      <text x="50" y="114" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Arial, sans-serif">PRIVATE COMPANIES</text>
                    </svg>
                  </div>
                </div>

                {/* NY Design Award Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <rect x="10" y="6" width="80" height="108" fill="#dc2626" rx="5" filter="url(#shadow1)"/>
                      <rect x="15" y="11" width="70" height="98" fill="#1e293b" rx="3"/>
                      <text x="50" y="42" textAnchor="middle" fill="#dc2626" fontSize="30" fontWeight="bold" fontFamily="Arial, sans-serif">NY</text>
                      <text x="50" y="58" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">PRODUCT DESIGN</text>
                      <text x="50" y="70" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial, sans-serif">AWARDS</text>
                      <rect x="30" y="80" width="40" height="16" fill="#fbbf24" rx="3"/>
                      <text x="50" y="92" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">2024</text>
                    </svg>
                  </div>
                </div>

                {/* Best of CES Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="cesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6"/>
                          <stop offset="100%" stopColor="#5b21b6"/>
                        </linearGradient>
                      </defs>
                      <polygon points="50,6 90,22 90,74 50,106 10,74 10,22" fill="url(#cesGrad)" filter="url(#shadow1)"/>
                      <polygon points="50,12 84,26 84,70 50,98 16,70 16,26" fill="#4c1d95"/>
                      <text x="50" y="38" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">BEST OF</text>
                      <text x="50" y="66" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">CES</text>
                      <text x="50" y="88" textAnchor="middle" fill="#c4b5fd" fontSize="14" fontFamily="Arial, sans-serif">2023</text>
                    </svg>
                  </div>
                </div>

                {/* Manifest Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-28 h-32 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="manGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#059669"/>
                          <stop offset="100%" stopColor="#064e3b"/>
                        </linearGradient>
                      </defs>
                      <rect x="10" y="6" width="80" height="108" fill="url(#manGrad)" rx="8" filter="url(#shadow1)"/>
                      <rect x="15" y="11" width="70" height="98" fill="#022c22" rx="6"/>
                      <text x="50" y="30" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="Arial, sans-serif">MOST REVIEWED</text>
                      <text x="50" y="48" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">UX COMPANY</text>
                      <circle cx="50" cy="70" r="14" fill="#10b981"/>
                      <path d="M42 70 L47 75 L58 64" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <text x="50" y="98" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="Arial, sans-serif">Manifest 2024</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-fade-in-up animation-delay-300">
            <HeroVisuals />
          </div>
        </div>
      </div>
    </section>
  );
}
