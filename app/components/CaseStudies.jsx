// Filename: app/components/CaseStudies.jsx
'use client';
import Link from 'next/link';
import Icon from './Icon';

const stats = [
  { value: '$86M+', label: 'Trading Volume' },
  { value: '10+', label: 'Crypto Assets' },
  { value: '24/7', label: 'Live Trading' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<100ms', label: 'Order Execution' },
  { value: '2FA', label: 'Security' },
];

// Coinflow Dashboard - Accurate to screenshot
const CoinflowMockup = () => (
  <div className="w-full h-full bg-[#0a0e14] text-white overflow-hidden flex text-[10px]">
    {/* Left Sidebar - Nav */}
    <div className="w-14 bg-[#0d1117] border-r border-gray-800 flex flex-col items-center py-3 gap-4">
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
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-3 mb-3 flex-shrink-0">
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
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 overflow-hidden flex-1">
            <div className="grid grid-cols-4 text-[8px] text-gray-500 px-3 py-2 border-b border-gray-800 font-medium">
              <span>ASSET</span><span className="text-right">PRICE</span><span className="text-right">24H CHANGE</span><span className="text-right">7D CHART</span>
            </div>
            {[
              { name: 'Bitcoin', sym: 'BTC', price: '$86,643.00', chg: '-0.99%', color: '#f7931a' },
              { name: 'Ethereum', sym: 'ETH', price: '$2,801.42', chg: '-1.89%', color: '#627eea' },
              { name: 'XRP', sym: 'XRP', price: '$2.02', chg: '-2.71%', color: '#23292f' },
              { name: 'Solana', sym: 'SOL', price: '$127.17', chg: '-0.93%', color: '#9945ff' },
              { name: 'Dogecoin', sym: 'DOGE', price: '$0.1359', chg: '-2.68%', color: '#c3a634' },
              { name: 'Cardano', sym: 'ADA', price: '$0.3871', chg: '-1.26%', color: '#0033ad' },
              { name: 'Chainlink', sym: 'LINK', price: '$12.08', chg: '-2.00%', color: '#375bd2' },
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
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-2.5">
            <div className="text-[9px] font-medium mb-2 text-white">Quick Trade</div>
            <div className="flex gap-1 mb-2">
              <button className="flex-1 bg-emerald-500 text-[8px] py-1.5 rounded font-semibold text-white">Buy</button>
              <button className="flex-1 bg-gray-700 text-[8px] py-1.5 rounded text-gray-400">Sell</button>
            </div>
            <div className="space-y-1.5 mb-2">
              <div className="flex items-center bg-[#0a0e14] border border-gray-700 rounded px-2 py-1.5">
                <input type="text" className="bg-transparent flex-1 text-right text-white text-[9px] outline-none w-full" defaultValue="100" />
                <span className="text-gray-500 text-[8px] ml-1">USD</span>
              </div>
              <div className="flex items-center bg-[#0a0e14] border border-gray-700 rounded px-2 py-1.5">
                <input type="text" className="bg-transparent flex-1 text-right text-gray-500 text-[9px] outline-none w-full" defaultValue="0.000000" />
                <span className="text-gray-500 text-[8px] ml-1">BTC</span>
              </div>
            </div>
            <button className="w-full bg-emerald-500 text-white py-1.5 rounded text-[9px] font-semibold">Buy btc</button>
          </div>

          {/* Market Stats */}
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-2.5">
            <div className="text-[9px] font-medium mb-2 text-white">Market Stats (24h)</div>
            <div className="space-y-1.5 text-[8px]">
              <div className="flex justify-between"><span className="text-gray-500">High:</span><span className="text-white">$97,507.90</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Low:</span><span className="text-white">$83,800.00</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Volume:</span><span className="text-white">15,045.74 BTC</span></div>
            </div>
          </div>

          {/* Live Trades */}
          <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-2.5 flex-1 overflow-hidden">
            <div className="flex gap-3 mb-2 border-b border-gray-800 pb-1.5">
              <span className="text-[8px] text-white font-medium border-b border-white pb-1">Live Trades</span>
              <span className="text-[8px] text-gray-500">Order Book</span>
            </div>
            <div className="grid grid-cols-3 text-[7px] text-gray-600 mb-1">
              <span>Time</span><span>Price (USD)</span><span className="text-right">Amount</span>
            </div>
            <div className="space-y-0.5 text-[7px]">
              {[
                { t: '7:58:53', p: '$86,644.03', a: '0.2000' },
                { t: '7:58:51', p: '$86,644.03', a: '0.2000' },
                { t: '7:58:47', p: '$86,644.03', a: '0.2000' },
                { t: '7:58:37', p: '$86,642.05', a: '0.0010' },
                { t: '7:58:35', p: '$86,641.87', a: '0.0102' },
              ].map((tr, i) => (
                <div key={i} className="grid grid-cols-3 text-emerald-400">
                  <span className="text-gray-500">{tr.t}</span>
                  <span>{tr.p}</span>
                  <span className="text-right">{tr.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudies() {
  return (
    <section className="bg-[#0B0F19] py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Featured Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">Results That Speak</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">See how we have helped our clients achieve extraordinary outcomes.</p>
        </div>

        {/* Featured Case Study - Coinflow */}
        <article className="group relative bg-gradient-to-br from-emerald-600/10 to-emerald-900/5 rounded-3xl border border-emerald-500/20 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-emerald-400 font-semibold text-lg">Coinflow</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional cryptocurrency trading dashboard</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">We created Coinflow, a sophisticated crypto trading platform featuring real-time price charts, instant buy/sell functionality, live order books, and comprehensive market statistics for serious traders.</p>
              <Link href="/work" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group/link w-fit">
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

        <div className="text-center mt-12">
          <Link href="/work" className="inline-flex items-center bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg border border-white/10 transition-all group">
            View All Case Studies
            <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
