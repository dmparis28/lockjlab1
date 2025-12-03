// Filename: app/portal/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon from '../components/Icon';

export default function PortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Demo credentials - in production, this would validate against your database
    if (email === 'client@example.com' && accessCode === 'DEMO123') {
      localStorage.setItem('portal_token', 'client_token_' + Date.now());
      localStorage.setItem('portal_client', JSON.stringify({
        name: 'John Smith',
        company: 'Demo Company',
        email: 'client@example.com',
        projectId: 1,
      }));
      router.push('/portal/dashboard');
    } else {
      setError('Invalid email or access code');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
            <Icon name="Zap" className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-white font-bold text-xl block">Lock J Lab</span>
            <span className="text-sky-400 text-sm">Client Portal</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to your portal</h1>
          <p className="text-gray-400 mb-6">Track your project, share files, and manage invoices</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-6 flex items-center gap-2">
              <Icon name="AlertCircle" className="w-5 h-5 text-red-400" />
              <span className="text-red-400 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Access Code</label>
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 tracking-wider"
                placeholder="XXXXXX"
              />
              <p className="text-gray-500 text-xs mt-1">Check your email for your access code</p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                'Access Portal'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm mb-2">
              Demo: client@example.com / DEMO123
            </p>
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 text-sm">
              {"Don't have access? Contact us"}
            </Link>
          </div>
        </div>

        {/* Back to main site */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-2">
            <Icon name="ArrowLeft" className="w-4 h-4" />
            Back to Lock J Lab
          </Link>
        </div>
      </div>
    </div>
  );
}
