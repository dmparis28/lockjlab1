// Filename: app/components/HeroVisuals.jsx
'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Icon from './Icon';

const HeroVisuals = () => {
  const { activeTheme } = useTheme();
  const isLight = activeTheme === 'cleanBespoke';

  if (isLight) {
    // Light theme - Professional app mockup
    return (
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Main Device Frame */}
        <div 
          className="relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb'
          }}
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1.5 bg-gray-100 rounded-lg text-xs text-gray-500 flex items-center gap-2">
                <Icon name="Lock" className="w-3 h-3" />
                yourapp.com
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="p-6 space-y-4">
            {/* App Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))' }}
                >
                  <Icon name="Zap" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Dashboard</div>
                  <div className="text-xs text-gray-500">Welcome back!</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Revenue', value: '$48.2K', change: '+12%', up: true },
                { label: 'Users', value: '2,847', change: '+8%', up: true },
                { label: 'Growth', value: '24%', change: '+3%', up: true },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                  <div className="font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-0.5">
                    <Icon name="TrendingUp" className="w-3 h-3" />
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div 
              className="p-4 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Performance</span>
                <span className="text-xs text-gray-400">Last 7 days</span>
              </div>
              <svg className="w-full h-24" viewBox="0 0 300 80">
                <defs>
                  <linearGradient id="lightChartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF4D6D" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#FF4D6D" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,60 C30,55 60,40 90,45 C120,50 150,25 180,30 C210,35 240,15 270,20 L300,25" 
                  fill="none" 
                  stroke="#FF4D6D" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path 
                  d="M0,60 C30,55 60,40 90,45 C120,50 150,25 180,30 C210,35 240,15 270,20 L300,25 L300,80 L0,80 Z" 
                  fill="url(#lightChartGrad)"
                />
              </svg>
            </div>

            {/* Action Button */}
            <button 
              className="w-full py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, var(--gradient-from), var(--gradient-to))' }}
            >
              View Full Report →
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div 
          className="absolute -right-4 top-1/4 p-3 rounded-xl shadow-lg animate-float"
          style={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <Icon name="Check" className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">New Sale!</div>
              <div className="text-xs text-gray-500">+$1,240</div>
            </div>
          </div>
        </div>

        <div 
          className="absolute -left-4 bottom-1/4 p-3 rounded-xl shadow-lg animate-float animation-delay-1000"
          style={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Icon name="Users" className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">New User</div>
              <div className="text-xs text-gray-500">Just now</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dark theme (Neon Dark) - Original design
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Video Container */}
      <div 
        className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden"
        style={{ 
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border)'
        }}
      >
        {/* Placeholder for video */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, color-mix(in srgb, var(--gradient-from) 30%, var(--bg-secondary)), color-mix(in srgb, var(--gradient-to) 20%, var(--bg-secondary)))` 
          }}
        >
          <div className="text-center">
            <div 
              className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))` }}
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Product Showcase Reel</p>
          </div>
        </div>
      </div>
      
      {/* Glow behind the video */}
      <div 
        className="absolute inset-0 opacity-50 transform scale-110 -z-10"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent), transparent)` }}
      />
    </div>
  );
};

export default HeroVisuals;
