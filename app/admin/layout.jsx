// Filename: app/admin/layout.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '../components/Icon';

const sidebarItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: 'LayoutDashboard' },
  { name: 'Blog Posts', href: '/admin/blog', icon: 'FileText' },
  { name: 'Projects', href: '/admin/projects', icon: 'Briefcase' },
  { name: 'Clients', href: '/admin/clients', icon: 'Users' },
  { name: 'Settings', href: '/admin/settings', icon: 'Settings' },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('admin_token');
    if (!authToken && pathname !== '/admin') {
      router.push('/admin');
    } else if (authToken) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin');
  };

  // Show login page without layout
  if (pathname === '/admin') {
    return children;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-16'} bg-white border-r border-gray-200 transition-all duration-200 flex flex-col`}>
        {/* Logo */}
        <div className="h-14 px-4 border-b border-gray-200 flex items-center">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            {sidebarOpen && (
              <span className="text-gray-900 font-semibold text-sm">Lock J Lab</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon name={item.icon} className="w-4 h-4 flex-shrink-0" />
                    {sidebarOpen && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="px-3 py-3 border-t border-gray-200">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors text-sm"
          >
            <Icon name={sidebarOpen ? 'PanelLeftClose' : 'PanelLeft'} className="w-4 h-4" />
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Admin</span>
            <Icon name="ChevronRight" className="w-4 h-4 text-gray-300" />
            <span className="text-gray-900 font-medium text-sm">
              {sidebarItems.find(item => pathname.startsWith(item.href))?.name || 'Dashboard'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
              <Icon name="Bell" className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
              <Icon name="Search" className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm"
            >
              <Icon name="LogOut" className="w-4 h-4" />
              <span>Logout</span>
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
