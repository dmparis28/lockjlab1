// Filename: app/admin/dashboard/page.jsx
'use client';

import Link from 'next/link';
import Icon from '../../components/Icon';

const stats = [
  { label: 'Active Projects', value: '12', change: '+2 this month', icon: 'Briefcase', trend: 'up' },
  { label: 'Total Clients', value: '48', change: '+5 this month', icon: 'Users', trend: 'up' },
  { label: 'Blog Posts', value: '24', change: '+3 this month', icon: 'FileText', trend: 'up' },
  { label: 'Revenue MTD', value: '$84,250', change: '+12% vs last month', icon: 'TrendingUp', trend: 'up' },
];

const recentProjects = [
  { id: 1, name: 'MediBook Platform', client: 'HealthTech Inc', status: 'In Progress', progress: 75, dueDate: 'Jan 15, 2025' },
  { id: 2, name: 'Coinflow Dashboard', client: 'Crypto Ventures', status: 'In Progress', progress: 45, dueDate: 'Feb 1, 2025' },
  { id: 3, name: 'IDS Express App', client: 'IDS Group', status: 'Review', progress: 90, dueDate: 'Dec 20, 2024' },
  { id: 4, name: 'E-commerce Redesign', client: 'RetailMax', status: 'Planning', progress: 15, dueDate: 'Mar 1, 2025' },
];

const recentActivity = [
  { id: 1, action: 'New project created', detail: 'E-commerce Redesign', time: '2 hours ago', icon: 'Plus' },
  { id: 2, action: 'Invoice paid', detail: 'MediBook Platform - $12,500', time: '5 hours ago', icon: 'Check' },
  { id: 3, action: 'Files uploaded', detail: '8 files to Coinflow Dashboard', time: '1 day ago', icon: 'Upload' },
  { id: 4, action: 'Comment added', detail: 'IDS Express App review', time: '2 days ago', icon: 'MessageSquare' },
];

const statusColors = {
  'In Progress': 'bg-blue-50 text-blue-700',
  'Review': 'bg-amber-50 text-amber-700',
  'Planning': 'bg-gray-100 text-gray-600',
  'Completed': 'bg-green-50 text-green-700',
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-7xl">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
        <p className="text-gray-500 text-sm mt-1">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-200 rounded-lg p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
              <Icon name={stat.icon} className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
            <p className="text-green-600 text-xs mt-1 flex items-center gap-1">
              <Icon name="TrendingUp" className="w-3 h-3" />
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Projects</h2>
            <Link href="/admin/projects" className="text-gray-500 hover:text-gray-900 text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{project.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{project.client}</p>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <div className="w-24 hidden sm:block">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-900 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                  <span className="text-gray-400 text-xs hidden md:block w-24 text-right">{project.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Activity</h2>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={activity.icon} className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-gray-500 text-xs truncate">{activity.detail}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Icon name="Plus" className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">New Post</span>
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Icon name="FolderPlus" className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">New Project</span>
          </Link>
          <Link
            href="/admin/clients"
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Icon name="UserPlus" className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Add Client</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
            <Icon name="Receipt" className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Send Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}
