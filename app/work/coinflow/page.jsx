// Filename: app/work/coinflow/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function CoinflowCaseStudy() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('100');

  const cryptoAssets = [
    { symbol: 'BTC', name: 'Bitcoin', price: 86597.00, change: 0.20, marketCap: '1725.76B', color: 'bg-orange-500' },
    { symbol: 'ETH', name: 'Ethereum', price: 2801.88, change: -0.65, marketCap: '337.67B', color: 'bg-blue-500' },
    { symbol: 'XRP', name: 'XRP', price: 2.02, change: -1.84, marketCap: '121.81B', color: 'bg-gray-500' },
    { symbol: 'SOL', name: 'Solana', price: 126.95, change: 0.01, marketCap: '70.59B', color: 'bg-purple-500' },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.1359, change: -1.59, marketCap: '20.61B', color: 'bg-yellow-500' },
    { symbol: 'ADA', name: 'Cardano', price: 0.3879, change: -0.99, marketCap: '14.22B', color: 'bg-blue-600' },
    { symbol: 'LINK', name: 'Chainlink', price: 22.05, change: -1.25, marketCap: '5.39B', color: 'bg-blue-400' },
    { symbol: 'LTC', name: 'Litecoin', price: 77.65, change: -0.98, marketCap: '5.96B', color: 'bg-gray-400' },
    { symbol: 'AVAX', name: 'Avalanche', price: 32.92, change: -0.96, marketCap: '5.54B', color: 'bg-red-500' },
    { symbol: 'SHIB', name: 'Shiba Inu', price: 0.00001, change: -0.43, marketCap: '4.70B', color: 'bg-orange-400' },
  ];

  const walletBalances = [
    { symbol: 'BTC', name: 'Bitcoin', amount: 0.5, value: 34061.73, color: 'bg-orange-500' },
    { symbol: 'ETH', name: 'Ethereum', amount: 10, value: 35678.90, color: 'bg-blue-500' },
    { symbol: 'SOL', name: 'Solana', amount: 50, value: 8410.50, color: 'bg-purple-500' },
  ];

  const articles = [
    { category: 'Market Analysis', title: 'Bitcoin Reaches New All-Time High Amidst Market Optimism', source: 'CryptoNews Daily', time: '2h ago', categoryColor: 'bg-green-500' },
    { category: 'Ecosystems', title: 'The Rise of Solana: A Deep Dive into its Ecosystem', source: 'DeFi Report', time: '1d ago', categoryColor: 'bg-green-500' },
    { category: 'Technology', title: "Ethereum's Next Major Upgrade: What to Expect from 'Prague'", source: 'ETH Foundation', time: '9h ago', categoryColor: 'bg-cyan-500' },
    { category: 'NFTs', title: "NFTs Are Making a Comeback: Here's What's Different", source: 'NFT Insider', time: '2d ago', categoryColor: 'bg-cyan-500' },
  ];

  const liveTrades = [
    { time: '01:34:26 PM', price: 86568.98, amount: 0.1245 },
    { time: '01:34:25 PM', price: 86567.12, amount: 0.1904 },
    { time: '01:34:24 PM', price: 86565.45, amount: 0.0832 },
    { time: '01:34:23 PM', price: 86570.21, amount: 0.2156 },
    { time: '01:34:22 PM', price: 86569.88, amount: 0.0541 },
  ];

  // Navigation Component
  const TopNav = ({ active, onSelect }) => (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <span className="text-white font-bold">CoinFlow</span>
      </div>
      <div className="flex items-center gap-4">
        {['Dashboard', 'Markets', 'Wallet', 'Articles', 'Support'].map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item.toLowerCase())}
            className={`text-sm transition-colors ${
              active === item.toLowerCase() ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          <Icon name="User" className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );

  // Mini Chart Component
  const MiniChart = ({ trend }) => (
    <svg className="w-16 h-8" viewBox="0 0 64 32">
      <path
        d={trend > 0 
          ? "M0 24 L8 20 L16 22 L24 16 L32 18 L40 12 L48 14 L56 8 L64 10"
          : "M0 8 L8 12 L16 10 L24 16 L32 14 L40 20 L48 18 L56 24 L64 22"
        }
        fill="none"
        stroke={trend > 0 ? '#10b981' : '#ef4444'}
        strokeWidth="2"
      />
    </svg>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="h-full bg-[#0a0e14] text-white">
      <TopNav active="dashboard" onSelect={(nav) => {
        setActiveNav(nav);
        if (nav === 'markets') setCurrentScreen(1);
        if (nav === 'wallet') setCurrentScreen(2);
        if (nav === 'articles') setCurrentScreen(3);
        if (nav === 'support') setCurrentScreen(4);
      }} />
      
      <div className="p-4 flex gap-4">
        {/* Main Chart Area */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Bitcoin (BTC)</span>
                <span className="text-emerald-400 text-sm">+0.20%</span>
              </div>
              <p className="text-2xl font-bold">$86,568.98</p>
            </div>
            <div className="flex gap-2">
              {['1m', '5m', '1h', '1D', '1W'].map((t) => (
                <button key={t} className="px-2 py-1 text-xs bg-gray-800 rounded hover:bg-gray-700">
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          {/* Candlestick Chart Placeholder */}
          <div className="h-32 bg-gray-900/50 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-around px-2 pb-2">
              {[40, 55, 45, 60, 50, 65, 55, 70, 60, 75, 65, 80, 70, 85, 75].map((h, i) => (
                <div key={i} className="w-2 flex flex-col items-center gap-0.5">
                  <div className={`w-0.5 ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${h * 0.3}px` }} />
                  <div className={`w-2 ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${h * 0.5}px` }} />
                  <div className={`w-0.5 ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ height: `${h * 0.2}px` }} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Asset List */}
          <div className="space-y-1">
            {cryptoAssets.slice(0, 5).map((asset) => (
              <div key={asset.symbol} className="flex items-center justify-between py-2 px-3 bg-gray-900/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 ${asset.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{asset.name}</p>
                    <p className="text-xs text-gray-500">{asset.symbol}</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <MiniChart trend={asset.change} />
                  <div>
                    <p className="text-sm">${asset.price.toLocaleString()}</p>
                    <p className={`text-xs ${asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {asset.change >= 0 ? '+' : ''}{asset.change}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-48 space-y-3">
          {/* Quick Trade */}
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="flex mb-3">
              <button
                onClick={() => setTradeType('buy')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-l-lg ${
                  tradeType === 'buy' ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-400'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setTradeType('sell')}
                className={`flex-1 py-1.5 text-xs font-medium rounded-r-lg ${
                  tradeType === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'
                }`}
              >
                Sell
              </button>
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-800 rounded px-2 py-1.5 text-sm mb-2"
              placeholder="Amount USD"
            />
            <input
              type="text"
              value="0.000000"
              className="w-full bg-gray-800 rounded px-2 py-1.5 text-sm mb-2"
              placeholder="BTC"
              readOnly
            />
            <button className={`w-full py-2 rounded text-sm font-medium ${
              tradeType === 'buy' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'
            }`}>
              {tradeType === 'buy' ? 'Buy' : 'Sell'} BTC
            </button>
          </div>
          
          {/* Market Stats */}
          <div className="bg-gray-900/50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-2">24h Stats</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">High</span>
                <span>$87,350.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Low</span>
                <span>$85,800.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Volume</span>
                <span>50,004.68 BTC</span>
              </div>
            </div>
          </div>
          
          {/* Live Trades */}
          <div className="bg-gray-900/50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-2">Live Trades</p>
            <div className="space-y-1">
              {liveTrades.slice(0, 4).map((trade, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-gray-500">{trade.time.split(' ')[0]}</span>
                  <span className={i % 2 === 0 ? 'text-emerald-400' : 'text-red-400'}>
                    ${trade.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400">{trade.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Markets Screen
  const MarketsScreen = () => (
    <div className="h-full bg-[#0a0e14] text-white">
      <TopNav active="markets" onSelect={(nav) => {
        setActiveNav(nav);
        if (nav === 'dashboard') setCurrentScreen(0);
        if (nav === 'wallet') setCurrentScreen(2);
        if (nav === 'articles') setCurrentScreen(3);
        if (nav === 'support') setCurrentScreen(4);
      }} />
      
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Markets</h2>
        
        <div className="bg-gray-900/30 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-800">
              <tr className="text-gray-500 text-xs">
                <th className="text-left px-3 py-2">Asset</th>
                <th className="text-right px-3 py-2">Price</th>
                <th className="text-right px-3 py-2">24H</th>
                <th className="text-right px-3 py-2">Chart</th>
                <th className="text-right px-3 py-2">Market Cap</th>
                <th className="text-right px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cryptoAssets.map((asset) => (
                <tr key={asset.symbol} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${asset.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <p className="font-medium text-xs">{asset.name}</p>
                        <p className="text-gray-500 text-xs">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-3 py-2 text-xs">${asset.price.toLocaleString()}</td>
                  <td className={`text-right px-3 py-2 text-xs ${asset.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {asset.change >= 0 ? '+' : ''}{asset.change}%
                  </td>
                  <td className="text-right px-3 py-2">
                    <MiniChart trend={asset.change} />
                  </td>
                  <td className="text-right px-3 py-2 text-xs text-gray-400">${asset.marketCap}</td>
                  <td className="text-right px-3 py-2">
                    <button className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs hover:bg-emerald-500/30">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Wallet Screen
  const WalletScreen = () => (
    <div className="h-full bg-[#0a0e14] text-white">
      <TopNav active="wallet" onSelect={(nav) => {
        setActiveNav(nav);
        if (nav === 'dashboard') setCurrentScreen(0);
        if (nav === 'markets') setCurrentScreen(1);
        if (nav === 'articles') setCurrentScreen(3);
        if (nav === 'support') setCurrentScreen(4);
      }} />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Your Balances</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-emerald-500 text-white rounded text-xs font-medium">
              Deposit
            </button>
            <button className="px-3 py-1.5 bg-gray-700 text-white rounded text-xs font-medium">
              Withdraw
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {walletBalances.map((balance) => (
            <div key={balance.symbol} className="bg-gray-900/30 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${balance.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {balance.symbol[0]}
                </div>
                <div>
                  <p className="font-medium">{balance.name}</p>
                  <p className="text-gray-500 text-sm">{balance.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">${balance.value.toLocaleString()}</p>
                <p className="text-gray-500 text-sm">{balance.amount} {balance.symbol}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-4 bg-gray-900/30 rounded-lg">
          <p className="text-gray-500 text-sm mb-2">Total Portfolio Value</p>
          <p className="text-2xl font-bold">${(walletBalances.reduce((sum, b) => sum + b.value, 0)).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );

  // Articles Screen
  const ArticlesScreen = () => (
    <div className="h-full bg-[#0a0e14] text-white">
      <TopNav active="articles" onSelect={(nav) => {
        setActiveNav(nav);
        if (nav === 'dashboard') setCurrentScreen(0);
        if (nav === 'markets') setCurrentScreen(1);
        if (nav === 'wallet') setCurrentScreen(2);
        if (nav === 'support') setCurrentScreen(4);
      }} />
      
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">News & Articles</h2>
        <p className="text-gray-500 text-sm mb-4">The latest updates from the world of crypto.</p>
        
        <div className="grid grid-cols-2 gap-3">
          {articles.map((article, i) => (
            <div key={i} className="bg-gray-900/30 rounded-lg p-3 hover:bg-gray-900/50 cursor-pointer transition-colors">
              <span className={`inline-block px-2 py-0.5 ${article.categoryColor} text-white text-xs rounded mb-2`}>
                {article.category}
              </span>
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{article.title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Support Screen
  const SupportScreen = () => (
    <div className="h-full bg-[#0a0e14] text-white">
      <TopNav active="support" onSelect={(nav) => {
        setActiveNav(nav);
        if (nav === 'dashboard') setCurrentScreen(0);
        if (nav === 'markets') setCurrentScreen(1);
        if (nav === 'wallet') setCurrentScreen(2);
        if (nav === 'articles') setCurrentScreen(3);
      }} />
      
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">Support Center</h2>
        <p className="text-gray-500 text-sm mb-4">How can we help you today?</p>
        
        <div className="grid grid-cols-2 gap-4">
          {/* FAQ */}
          <div className="bg-gray-900/30 rounded-lg p-3">
            <h3 className="font-medium mb-3 text-sm">Frequently Asked Questions</h3>
            <div className="space-y-2">
              {[
                { q: 'How do I secure my account?', a: 'Enable 2FA in settings for enhanced security.' },
                { q: 'What are the trading fees?', a: null },
                { q: 'How long do withdrawals take?', a: null },
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-800 pb-2">
                  <button className="w-full text-left text-sm flex justify-between items-center">
                    <span>{faq.q}</span>
                    <Icon name="ChevronDown" className="w-4 h-4 text-gray-500" />
                  </button>
                  {faq.a && (
                    <p className="text-gray-500 text-xs mt-1">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Submit Ticket */}
          <div className="bg-gray-900/30 rounded-lg p-3">
            <h3 className="font-medium mb-3 text-sm">Submit a Ticket</h3>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <textarea
                placeholder="How can we help?"
                rows={3}
                className="w-full bg-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded text-sm font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const screens = [DashboardScreen, MarketsScreen, WalletScreen, ArticlesScreen, SupportScreen];
  const screenNames = ['Dashboard', 'Markets', 'Wallet', 'Articles', 'Support'];
  const CurrentScreenComponent = screens[currentScreen];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-white font-bold text-2xl">CoinFlow</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="italic">Professional-grade crypto trading</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A comprehensive cryptocurrency trading platform with real-time market data, advanced charting, portfolio management, and seamless trading execution.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Platform</span>
                  <p className="text-white">Web Application</p>
                </div>
                <div>
                  <span className="text-gray-500">Deliverables</span>
                  <p className="text-white">UI/UX, Full-Stack, API Integration</p>
                </div>
                <div>
                  <span className="text-gray-500">Timeline</span>
                  <p className="text-white">16 Weeks</p>
                </div>
              </div>
            </div>
            
            {/* Live Demo - Desktop Frame */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Browser Frame */}
                <div className="w-[480px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/20">
                  {/* Browser Header */}
                  <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-xs">
                        coinflow.trade
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="h-[380px] overflow-hidden">
                    <CurrentScreenComponent />
                  </div>
                </div>
                
                {/* Screen Selector */}
                <div className="flex justify-center gap-2 mt-4">
                  {screenNames.map((name, i) => (
                    <button
                      key={name}
                      onClick={() => setCurrentScreen(i)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        i === currentScreen 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$2.5B+', label: 'Trading Volume' },
              { value: '150K+', label: 'Active Traders' },
              { value: '50+', label: 'Crypto Assets' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'BarChart3', title: 'Advanced Charts', description: 'Professional candlestick charts with multiple timeframes and technical indicators.' },
              { icon: 'Zap', title: 'Instant Trading', description: 'Execute trades in milliseconds with our high-performance matching engine.' },
              { icon: 'Wallet', title: 'Secure Wallet', description: 'Multi-signature cold storage with real-time balance tracking.' },
              { icon: 'Newspaper', title: 'Market News', description: 'Stay informed with curated crypto news and market analysis.' },
              { icon: 'Shield', title: 'Bank-Grade Security', description: '2FA, biometrics, and advanced fraud detection systems.' },
              { icon: 'HelpCircle', title: '24/7 Support', description: 'Round-the-clock customer support with live chat and ticket system.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Design System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colors */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <div className="w-full h-12 rounded-lg bg-[#0a0e14] border border-gray-700 mb-2" />
                  <p className="text-white text-xs">#0A0E14</p>
                  <p className="text-gray-500 text-xs">Background</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-emerald-500 mb-2" />
                  <p className="text-white text-xs">#10B981</p>
                  <p className="text-gray-500 text-xs">Primary</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-red-500 mb-2" />
                  <p className="text-white text-xs">#EF4444</p>
                  <p className="text-gray-500 text-xs">Negative</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-gray-800 mb-2" />
                  <p className="text-white text-xs">#1F2937</p>
                  <p className="text-gray-500 text-xs">Card</p>
                </div>
              </div>
            </div>
            
            {/* Supported Assets */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Supported Assets</h3>
              <div className="flex flex-wrap gap-2">
                {cryptoAssets.map((asset) => (
                  <div key={asset.symbol} className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded">
                    <div className={`w-4 h-4 ${asset.color} rounded-full flex items-center justify-center text-white text-xs`}>
                      {asset.symbol[0]}
                    </div>
                    <span className="text-white text-xs">{asset.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="AlertCircle" className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Challenge</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Coinflow came to us with an ambitious vision: create a cryptocurrency trading platform that could compete with industry giants like Coinbase and Binance, but with a focus on user experience and accessibility for both beginners and professional traders.
                </p>
                <ul className="space-y-3">
                  {[
                    'Complex real-time data from multiple exchanges',
                    'Sub-second trade execution requirements',
                    'Support for 50+ cryptocurrency pairs',
                    'Mobile-responsive design for trading on-the-go',
                    'Regulatory compliance across multiple jurisdictions'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Solution</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  We architected a high-performance trading platform using cutting-edge technologies, with a modular design that allows for rapid feature development and seamless scaling.
                </p>
                <ul className="space-y-3">
                  {[
                    'WebSocket-based real-time data streaming',
                    'Redis-backed order matching engine',
                    'Progressive Web App for mobile trading',
                    'Intuitive UI with customizable dashboards',
                    'Built-in compliance and audit logging'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Design Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From initial wireframes to polished UI, we followed a user-centered design approach
            </p>
          </div>

          {/* Process Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { phase: 'Research', duration: '2 weeks', icon: 'Target', items: ['Competitive analysis', 'User interviews', 'Market research'] },
              { phase: 'Wireframing', duration: '2 weeks', icon: 'Layers', items: ['Information architecture', 'User flows', 'Lo-fi prototypes'] },
              { phase: 'Visual Design', duration: '3 weeks', icon: 'Palette', items: ['Design system', 'Component library', 'Hi-fi mockups'] },
              { phase: 'Prototyping', duration: '2 weeks', icon: 'MousePointerClick', items: ['Interactive demos', 'User testing', 'Iteration'] }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent z-0" />
                )}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative z-10">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={step.icon} className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{step.phase}</h3>
                  <p className="text-emerald-400 text-sm mb-3">{step.duration}</p>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Design Showcase Gallery */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Interface Evolution</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Wireframe', stage: 'Early Concept', bgColor: 'bg-gray-800' },
                { label: 'Lo-Fi Mockup', stage: 'Structure Definition', bgColor: 'bg-gray-700' },
                { label: 'Final Design', stage: 'Production Ready', bgColor: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20' }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className={`aspect-video ${item.bgColor} rounded-lg mb-3 overflow-hidden border border-white/10 flex items-center justify-center relative`}>
                    {/* Simplified mockup representation */}
                    <div className="w-4/5 h-4/5 bg-black/30 rounded flex flex-col p-2">
                      <div className="h-2 bg-white/20 rounded mb-2 w-1/2" />
                      <div className="flex-1 flex gap-2">
                        <div className="w-1/4 bg-white/10 rounded" />
                        <div className="flex-1 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors flex items-center justify-center">
                      <Icon name="Eye" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Since launch, Coinflow has exceeded all performance benchmarks and business goals
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: '$2.5B+', label: 'Monthly Trading Volume', icon: 'TrendingUp', change: '+340%' },
              { value: '150K+', label: 'Active Traders', icon: 'Users', change: '+520%' },
              { value: '<50ms', label: 'Average Trade Execution', icon: 'Zap', change: '-85%' },
              { value: '99.99%', label: 'Platform Uptime', icon: 'ShieldCheck', change: 'Enterprise Grade' }
            ].map((metric, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} className="w-7 h-7 text-emerald-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <span className="text-emerald-400 text-xs font-medium">{metric.change}</span>
              </div>
            ))}
          </div>

          {/* Before/After Comparison */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Before & After Impact</h3>
            <div className="space-y-4">
              {[
                { metric: 'User Onboarding Time', before: '15 minutes', after: '3 minutes', improvement: '80% faster' },
                { metric: 'Trade Completion Rate', before: '67%', after: '94%', improvement: '40% improvement' },
                { metric: 'Customer Support Tickets', before: '450/week', after: '120/week', improvement: '73% reduction' },
                { metric: 'Mobile User Engagement', before: '12%', after: '45%', improvement: '275% increase' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.metric}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 line-through mr-4">{item.before}</span>
                    <span className="text-white font-semibold">{item.after}</span>
                  </div>
                  <div className="w-32 text-right">
                    <span className="text-emerald-400 text-sm font-medium">{item.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500/5 to-teal-500/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon name="Quote" className="w-16 h-16 text-emerald-500/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              "Lock J Lab didn't just build us a trading platform—they built us a competitive advantage. The attention to detail, technical expertise, and genuine partnership approach made all the difference. We launched 3 weeks ahead of schedule and exceeded our first-year user targets within 4 months."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                MT
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Michael Torres</p>
                <p className="text-gray-400">Founder & CEO, Coinflow Finance</p>
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
              { name: 'MediBook', category: 'Healthcare Platform', href: '/work/medibook', color: 'from-blue-500 to-cyan-500' },
              { name: 'IDS Express', category: 'Service Platform', href: '/work/ids-express', color: 'from-purple-500 to-pink-500' },
              { name: 'IDS Staffing', category: 'HR Technology', href: '/work/ids-staffing', color: 'from-orange-500 to-amber-500' }
            ].map((project, i) => (
              <Link key={i} href={project.href} className="group block">
                <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white text-4xl font-bold opacity-30">{project.name[0]}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Icon name="ArrowRight" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                </div>
                <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{project.name}</h3>
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
            {['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'WebSocket', 'Redis', 'PostgreSQL', 'Chart.js', 'CoinGecko API'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build your trading platform?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's create a platform that empowers traders worldwide."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 group"
            >
              Start Your Project
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
