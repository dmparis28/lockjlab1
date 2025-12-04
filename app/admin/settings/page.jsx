// Filename: app/admin/settings/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';
import ThemeSelector from '../../components/ThemeSelector';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('theme');

  const tabs = [
    { id: 'theme', name: 'Website Theme', icon: 'Palette' },
    { id: 'seo', name: 'SEO', icon: 'Search' },
    { id: 'integrations', name: 'Integrations', icon: 'Plug' },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Customize your website appearance and preferences</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 border-b-2 transition-colors text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Theme Tab */}
      {activeTab === 'theme' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Website Theme</h2>
              <p className="text-gray-500 text-sm mt-1">
                Choose a visual style for your public website. Changes apply instantly.
              </p>
            </div>
            
            <ThemeSelector />
          </div>

          {/* Preview Section */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900 flex items-center gap-2">
                <Icon name="Eye" className="w-4 h-4 text-gray-400" />
                Live Preview
              </h3>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="bg-[var(--bg-primary)] rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                {/* Mini Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                      <Icon name="Zap" className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[var(--text-primary)] font-bold text-sm">Lock J Lab</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-[var(--radius-md)] text-xs font-medium text-white bg-[var(--accent)]">
                    Contact
                  </button>
                </div>

                {/* Mini Hero */}
                <div className="text-center mb-6">
                  <p className="text-xs font-medium text-[var(--accent)] mb-2">DIGITAL PRODUCTS AGENCY</p>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    We Build Products That Drive Results
                  </h2>
                  <p className="text-[var(--text-secondary)] text-xs">
                    Transform your ideas into high-performance digital products.
                  </p>
                </div>

                {/* Mini Cards */}
                <div className="grid grid-cols-3 gap-3">
                  {['Strategy', 'Design', 'Development'].map((item) => (
                    <div key={item} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--radius-sm)] p-3 text-center">
                      <div className="w-8 h-8 rounded-[var(--radius-sm)] mx-auto mb-2 flex items-center justify-center bg-[var(--accent-muted)]">
                        <Icon 
                          name={item === 'Strategy' ? 'Lightbulb' : item === 'Design' ? 'Palette' : 'Code'} 
                          className="w-4 h-4 text-[var(--accent)]" 
                        />
                      </div>
                      <p className="text-[var(--text-primary)] text-xs font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO Tab */}
      {activeTab === 'seo' && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h2>
          <p className="text-gray-500 text-sm mb-6">
            Manage meta tags and search engine visibility.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Site Title</label>
              <input
                type="text"
                defaultValue="Lock J Lab | Digital Products That Drive Results"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Meta Description</label>
              <textarea
                rows={3}
                defaultValue="Lock J Lab transforms complex challenges into high-performance applications. Expert strategy, design, and development for startups and enterprises."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
            </div>
            <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Save SEO Settings
            </button>
          </div>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Integrations</h2>
            <p className="text-gray-500 text-sm mt-1">Connect third-party services</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {[
              { name: 'Google Analytics', desc: 'Track website traffic and user behavior', connected: false },
              { name: 'Stripe', desc: 'Process payments securely', connected: true },
              { name: 'Mailchimp', desc: 'Email marketing automation', connected: false },
            ].map((integration) => (
              <div key={integration.name} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{integration.name}</h3>
                  <p className="text-gray-500 text-sm">{integration.desc}</p>
                </div>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  integration.connected
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {integration.connected ? 'Connected' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
