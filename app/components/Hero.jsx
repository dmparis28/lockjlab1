// Filename: app/components/Hero.jsx
'use client';

import Link from 'next/link';
import Icon from './Icon';
import HeroVisuals from './HeroVisuals';
import { useTheme } from '../context/ThemeContext';

// Simple text-based awards for light theme
const simpleAwards = [
  { name: 'Clutch Global', year: '2025' },
  { name: '5-Star Agency', year: '2024' },
  { name: 'Inc. 5000', year: '2024' },
  { name: 'NY Design Awards', year: '2024' },
];

export default function Hero() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  // Clean Bespoke - Split Layout Hero
  if (isLight) {
    return (
      <section 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Subtle background gradient */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          style={{ 
            background: `linear-gradient(135deg, transparent 0%, color-mix(in srgb, var(--gradient-from) 8%, transparent) 50%, color-mix(in srgb, var(--gradient-to) 5%, transparent) 100%)`
          }}
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[80vh]">
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 animate-fade-in-up"
                style={{ 
                  backgroundColor: 'var(--accent-muted)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                  Digital Product Agency
                </span>
              </div>

              <h1 
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in-up animation-delay-100"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                We Build Digital Products That{' '}
                <span 
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
                >
                  Drive Results
                </span>
              </h1>

              <p 
                className="text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-200"
                style={{ color: 'var(--text-secondary)' }}
              >
                From strategy to launch, we partner with ambitious teams to create apps, platforms, and experiences that users love.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto text-white font-semibold py-4 px-8 transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                    borderRadius: 'var(--radius-full)',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  <span>Start Your Project</span>
                  <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/work"
                  className="group w-full sm:w-auto font-semibold py-4 px-8 transition-all duration-200 flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-full)',
                    border: '2px solid var(--border)'
                  }}
                >
                  <span>View Our Work</span>
                  <Icon name="ArrowUpRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Awards - Compact */}
              <div className="mt-12 animate-fade-in animation-delay-500">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {simpleAwards.map((award, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                      style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                    >
                      <Icon name="Award" className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                      <span style={{ color: 'var(--text-primary)' }}>{award.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual - 7 columns */}
            <div className="lg:col-span-7 animate-fade-in-up animation-delay-300">
              <div className="relative">
                <HeroVisuals />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: `linear-gradient(to top, var(--bg-secondary), transparent)` }}
        />
      </section>
    );
  }

  // Neon Dark - Original two-column layout
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Background glow */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--gradient-from) 15%, transparent) 0%, transparent 70%)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-1/2 -translate-x-1/4"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--gradient-to) 15%, transparent) 0%, transparent 70%)` }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 animate-fade-in-up"
              style={{ 
                backgroundColor: 'var(--accent-muted)',
                border: '1px solid var(--accent-muted-hover)',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span className="relative flex h-2 w-2">
                <span 
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>Digital Product Agency</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up animation-delay-100"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              We Build Digital Products That{' '}
              <span 
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
              >
                Drive Results
              </span>
            </h1>

            <p 
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200"
              style={{ color: 'var(--text-secondary)' }}
            >
              From strategy to launch, we partner with ambitious teams to create apps, platforms, and experiences that users love.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="group w-full sm:w-auto text-white font-semibold py-4 px-8 transition-all duration-300 flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                <span>Start Your Project</span>
                <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="group w-full sm:w-auto font-semibold py-4 px-8 transition-all duration-200 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--accent-muted)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)'
                }}
              >
                <span>View Our Work</span>
                <Icon name="ArrowUpRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Awards - Full badges for dark theme */}
            <div 
              className="mt-12 pt-8 animate-fade-in animation-delay-500"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Award-Winning Digital Agency</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* Clutch Global Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-20 h-24 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
                      <defs>
                        <linearGradient id="clutchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b5998"/>
                          <stop offset="100%" stopColor="#1a365d"/>
                        </linearGradient>
                      </defs>
                      <polygon points="50,6 90,22 90,74 50,106 10,74 10,22" fill="url(#clutchGrad)"/>
                      <polygon points="50,12 84,26 84,70 50,98 16,70 16,26" fill="#1e3a5f"/>
                      <text x="50" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">Clutch</text>
                      <rect x="18" y="46" width="64" height="18" fill="#14b8a6" rx="3"/>
                      <text x="50" y="59" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">GLOBAL</text>
                      <text x="50" y="88" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold" fontFamily="Arial">2025</text>
                    </svg>
                  </div>
                </div>

                {/* 5-Star Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-20 h-24 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
                      <polygon points="50,6 90,22 90,74 50,106 10,74 10,22" fill="#374151"/>
                      <polygon points="50,12 84,26 84,70 50,98 16,70 16,26" fill="#111827"/>
                      <text x="50" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">5-STAR</text>
                      <g transform="translate(25, 46)">
                        {[0, 10, 20, 30, 40].map((x) => (
                          <polygon key={x} points="5,0 6.2,3.8 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.8,3.8" fill="#fbbf24" transform={`translate(${x},0)`}/>
                        ))}
                      </g>
                      <text x="50" y="88" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="Arial">2024</text>
                    </svg>
                  </div>
                </div>

                {/* Inc 5000 Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-20 h-24 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
                      <circle cx="50" cy="52" r="40" fill="#0f172a" stroke="#dc2626" strokeWidth="4"/>
                      <circle cx="50" cy="52" r="32" fill="#1e293b"/>
                      <text x="50" y="46" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontStyle="italic" fontFamily="Georgia">Inc.</text>
                      <text x="50" y="68" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="bold" fontFamily="Arial">5000</text>
                    </svg>
                  </div>
                </div>

                {/* NY Design Award Badge */}
                <div className="group relative hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-20 h-24 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg">
                      <rect x="10" y="10" width="80" height="100" fill="#dc2626" rx="4"/>
                      <rect x="14" y="14" width="72" height="92" fill="#1e293b" rx="2"/>
                      <text x="50" y="48" textAnchor="middle" fill="#dc2626" fontSize="28" fontWeight="bold" fontFamily="Arial">NY</text>
                      <text x="50" y="65" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial">DESIGN AWARDS</text>
                      <rect x="30" y="76" width="40" height="14" fill="#fbbf24" rx="2"/>
                      <text x="50" y="87" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="Arial">2024</text>
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
