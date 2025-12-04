// Filename: app/components/CaseStudies.jsx
'use client';
import Link from 'next/link';
import Icon from './Icon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../context/ThemeContext';

const stats = [
  { value: '$86M+', label: 'Trading Volume' },
  { value: '10+', label: 'Crypto Assets' },
  { value: '24/7', label: 'Live Trading' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<100ms', label: 'Order Execution' },
  { value: '2FA', label: 'Security' },
];

// Coinflow Dashboard - Accurate to screenshot (always dark - it's the product)
const CoinflowMockup = () => (
  <div className="w-full h-full bg-[#0B0F19] text-white overflow-hidden flex text-[10px]">
    {/* Left Sidebar - Nav */}
    <div className="w-14 bg-[#111827] border-r border-gray-800 flex flex-col items-center py-3 gap-4">
      <div className="w-7 h-7 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-2">
        <span className="text-white font-bold text-xs">C</span>
      </div>
      {['Dashboard', 'Markets', 'Wallet', 'Articles', 'Support'].map((item, i) => (
        <div key={item} className={`w-8 h-8 rounded flex items-center justify-center ${i === 0 ? 'bg-gray-800 text-white' : 'text-gray-600 hover:text-gray-400'}`}>
          <div className="w-4 h-4 rounded bg-current opacity-30" />
        </div>
      ))}
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col min-w-0">
      {/* Top Nav */}
      <div className="h-10 border-b border-gray-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-white">COINFLOW</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-700" />
          <span className="text-gray-400">Alex Thompson</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 flex gap-4 overflow-hidden">
        {/* Chart Section */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Price Header */}
          <div className="mb-3">
            <div className="text-gray-500 text-[9px] mb-0.5">Bitcoin (BTC) Price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white">$86,644.03</span>
              <span className="text-red-400 text-[9px]">↓ -0.99% (24h)</span>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-[#111827] rounded-lg border border-gray-800 p-3 mb-3 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1">
                {['1H', '6H', '1D', '1W'].map((t, i) => (
                  <button key={t} className={`px-2 py-0.5 rounded text-[8px] ${i === 2 ? 'bg-gray-700 text-white' : 'text-gray-500'}`}>{t}</button>
                ))}
              </div>
              <div className="flex gap-1">
                <button className="px-2 py-0.5 rounded text-[8px] bg-gray-700 text-white">Line</button>
                <button className="px-2 py-0.5 rounded text-[8px] text-gray-500">Candles</button>
              </div>
            </div>
            <svg className="w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,60 C20,55 40,50 80,45 C120,40 140,55 180,35 C220,15 260,25 300,20 C340,15 380,10 400,15" fill="none" stroke="#22c55e" strokeWidth="2"/>
              <path d="M0,60 C20,55 40,50 80,45 C120,40 140,55 180,35 C220,15 260,25 300,20 C340,15 380,10 400,15 L400,80 L0,80 Z" fill="url(#chartGrad)"/>
            </svg>
            <div className="flex justify-between text-[7px] text-gray-600 mt-1">
              <span>Nov 17</span><span>Nov 19</span><span>Nov 21</span><span>Nov 23</span><span>Nov 25</span><span>Nov 27</span><span>Nov 29</span><span>Dec 2025</span>
            </div>
          </div>

          {/* Asset Table */}
          <div className="bg-[#111827] rounded-lg border border-gray-800 overflow-hidden flex-1">
            <div className="grid grid-cols-4 text-[8px] text-gray-500 px-3 py-2 border-b border-gray-800 font-medium">
              <span>ASSET</span><span className="text-right">PRICE</span><span className="text-right">24H CHANGE</span><span className="text-right">7D CHART</span>
            </div>
            {[
              { name: 'Bitcoin', sym: 'BTC', price: '$86,643.00', chg: '-0.99%', color: '#f7931a' },
              { name: 'Ethereum', sym: 'ETH', price: '$2,801.42', chg: '-1.89%', color: '#627eea' },
              { name: 'XRP', sym: 'XRP', price: '$2.02', chg: '-2.71%', color: '#23292f' },
              { name: 'Solana', sym: 'SOL', price: '$127.17', chg: '-0.93%', color: '#9945ff' },
            ].map((a, i) => (
              <div key={a.sym} className="grid grid-cols-4 text-[9px] px-3 py-1.5 border-b border-gray-800/50 items-center hover:bg-gray-800/30">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ backgroundColor: a.color }}>{a.sym[0]}</div>
                  <div><div className="text-white font-medium">{a.name}</div><div className="text-gray-600 text-[7px]">{a.sym}</div></div>
                </div>
                <div className="text-right text-white">{a.price}</div>
                <div className="text-right text-red-400">{a.chg}</div>
                <div className="flex justify-end">
                  <svg className="w-12 h-4" viewBox="0 0 48 16"><path d="M0,12 Q8,8 16,10 T32,6 T48,8" fill="none" stroke="#ef4444" strokeWidth="1.5"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-32 flex flex-col gap-3 flex-shrink-0">
          {/* Quick Trade */}
          <div className="bg-[#111827] rounded-lg border border-gray-800 p-2.5">
            <div className="text-[9px] font-medium mb-2 text-white">Quick Trade</div>
            <div className="flex gap-1 mb-2">
              <button className="flex-1 bg-emerald-500 text-[8px] py-1.5 rounded font-semibold text-white">Buy</button>
              <button className="flex-1 bg-gray-700 text-[8px] py-1.5 rounded text-gray-400">Sell</button>
            </div>
            <button className="w-full bg-emerald-500 text-white py-1.5 rounded text-[9px] font-semibold">Buy BTC</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  if (isLight) {
    return (
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
            <span 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
            >
              <Icon name="Sparkles" className="w-4 h-4" />
              Featured Work
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Results That Speak
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              See how we've helped our clients achieve extraordinary outcomes.
            </p>
          </AnimateOnScroll>

          {/* Featured Case Study - Light Theme Card */}
          <AnimateOnScroll animation="scaleUp" delay={0.1}>
            <article 
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <span className="font-semibold text-lg" style={{ color: 'var(--accent)' }}>Coinflow</span>
                  </div>
                  <h3 
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    Professional cryptocurrency trading dashboard
                  </h3>
                  <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We created Coinflow, a sophisticated crypto trading platform featuring real-time price charts, instant buy/sell functionality, and comprehensive market statistics.
                  </p>
                  <Link 
                    href="/work/coinflow" 
                    className="inline-flex items-center font-semibold transition-all group/link w-fit"
                    style={{ color: 'var(--accent)' }}
                  >
                    View Case Study
                    <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Mockup Side */}
                <div className="p-6 lg:p-10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    <CoinflowMockup />
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div 
                className="px-10 lg:px-14 py-8"
                style={{ 
                  background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))',
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <span className="text-sm text-white/80">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={0.2} className="text-center mt-12">
            <Link 
              href="/work" 
              className="inline-flex items-center font-semibold py-4 px-8 rounded-full transition-all group"
              style={{ 
                backgroundColor: 'var(--bg-primary)', 
                color: 'var(--text-primary)',
                border: '1px solid var(--border)'
              }}
            >
              View All Case Studies
              <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    );
  }

  // Dark theme (Neon Dark)
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div 
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, transparent, color-mix(in srgb, var(--accent) 5%, transparent), transparent)` }}
      />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: 'var(--accent)' }}>Featured Work</span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}
          >Results That Speak</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            See how we have helped our clients achieve extraordinary outcomes.
          </p>
        </AnimateOnScroll>

        {/* Featured Case Study - Coinflow */}
        <AnimateOnScroll animation="scaleUp" delay={0.1}>
          <article 
            className="group relative rounded-3xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(16,185,129,0.1), rgba(16,185,129,0.02))',
              border: '1px solid rgba(16,185,129,0.2)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-lg">Coinflow</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Professional cryptocurrency trading dashboard
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We created Coinflow, a sophisticated crypto trading platform featuring real-time price charts, instant buy/sell functionality, live order books, and comprehensive market statistics for serious traders.
                </p>
                <Link href="/work/coinflow" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-all group/link w-fit">
                  View Case Study
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-emerald-500/10">
                  <CoinflowMockup />
                </div>
              </div>
            </div>

            <div className="bg-black/30 border-t border-white/10 px-8 lg:px-12 py-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Icon name="TrendingUp" className="w-4 h-4 text-emerald-400" />
                      <span className="text-xl font-bold text-white">{stat.value}</span>
                    </div>
                    <span className="text-xs text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={0.2} className="text-center mt-12">
          <Link 
            href="/work" 
            className="inline-flex items-center font-medium py-3 px-6 rounded-lg transition-all group"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              color: 'var(--text-primary)',
              border: '1px solid var(--border)'
            }}
          >
            View All Case Studies
            <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
