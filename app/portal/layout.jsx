// Filename: app/portal/layout.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '../components/Icon';

const sidebarItems = [
  { name: 'Dashboard', href: '/portal/dashboard', icon: 'LayoutDashboard' },
  { name: 'Files', href: '/portal/files', icon: 'FolderOpen' },
  { name: 'Messages', href: '/portal/messages', icon: 'MessageSquare' },
  { name: 'Invoices', href: '/portal/invoices', icon: 'Receipt' },
];

export default function PortalLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem('portal_token');
    const clientInfo = localStorage.getItem('portal_client');
    
    if (!authToken && pathname !== '/portal') {
      router.push('/portal');
    } else if (authToken) {
      setIsAuthenticated(true);
      if (clientInfo) {
        setClientData(JSON.parse(clientInfo));
      }
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('portal_token');
    localStorage.removeItem('portal_client');
    router.push('/portal');
  };

  // Show login page without layout
  if (pathname === '/portal') {
    return children;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] border-r border-white/10 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <Link href="/portal/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <Icon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white font-bold">Lock J Lab</span>
              <span className="text-sky-400 text-xs block">Client Portal</span>
            </div>
          </Link>
        </div>

        {/* Client Info */}
        {clientData && (
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">
                {clientData.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'CL'}
              </div>
              <div>
                <p className="text-white font-medium text-sm">{clientData.name || 'Client'}</p>
                <p className="text-gray-400 text-xs">{clientData.company || 'Company'}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-sky-500/20 text-sky-400' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon name={item.icon} className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Support & Logout */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/contact"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Icon name="HelpCircle" className="w-5 h-5" />
            <span>Get Support</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Icon name="LogOut" className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-[#111827] border-b border-white/10 flex items-center justify-between px-6">
          <h1 className="text-white font-semibold">
            {sidebarItems.find(item => pathname.startsWith(item.href))?.name || 'Portal'}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
              <Icon name="Bell" className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-sky-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
