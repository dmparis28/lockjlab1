// Filename: app/admin/dashboard/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

const stats = [
  { label: 'Active Projects', value: '12', change: '+2', icon: 'FolderOpen', color: 'sky' },
  { label: 'Total Clients', value: '48', change: '+5', icon: 'Users', color: 'emerald' },
  { label: 'Blog Posts', value: '24', change: '+3', icon: 'Newspaper', color: 'purple' },
  { label: 'Revenue MTD', value: '$84,250', change: '+12%', icon: 'DollarSign', color: 'amber' },
];

const recentProjects = [
  { id: 1, name: 'MediBook Platform', client: 'HealthTech Inc', status: 'In Progress', progress: 75, dueDate: '2025-01-15' },
  { id: 2, name: 'Coinflow Dashboard', client: 'Crypto Ventures', status: 'In Progress', progress: 45, dueDate: '2025-02-01' },
  { id: 3, name: 'IDS Express App', client: 'IDS Group', status: 'Review', progress: 90, dueDate: '2025-12-20' },
  { id: 4, name: 'E-commerce Redesign', client: 'RetailMax', status: 'Planning', progress: 15, dueDate: '2025-03-01' },
];

const recentActivity = [
  { id: 1, action: 'New project created', project: 'E-commerce Redesign', time: '2 hours ago' },
  { id: 2, action: 'Invoice paid', project: 'MediBook Platform', time: '5 hours ago' },
  { id: 3, action: 'Files uploaded', project: 'Coinflow Dashboard', time: '1 day ago' },
  { id: 4, action: 'Comment added', project: 'IDS Express App', time: '2 days ago' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#111827] border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-500/10`}>
                <Icon name={stat.icon} className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-[#111827] border border-white/10 rounded-xl">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent Projects</h2>
            <Link href="/admin/projects" className="text-sky-400 hover:text-sky-300 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.client}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-32">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-sky-500 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Progress' ? 'bg-sky-500/20 text-sky-400' :
                      project.status === 'Review' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#111827] border border-white/10 rounded-xl">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-sky-500" />
                  <div>
                    <p className="text-white text-sm">{activity.action}</p>
                    <p className="text-gray-400 text-xs">{activity.project}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Link
          href="/admin/blog"
          className="flex items-center gap-4 p-4 bg-[#111827] border border-white/10 rounded-xl hover:border-sky-500/30 transition-colors"
        >
          <div className="p-3 rounded-lg bg-purple-500/10">
            <Icon name="Plus" className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-white font-medium">New Blog Post</p>
            <p className="text-gray-400 text-sm">Create content</p>
          </div>
        </Link>
        <Link
          href="/admin/projects"
          className="flex items-center gap-4 p-4 bg-[#111827] border border-white/10 rounded-xl hover:border-sky-500/30 transition-colors"
        >
          <div className="p-3 rounded-lg bg-sky-500/10">
            <Icon name="Plus" className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <p className="text-white font-medium">New Project</p>
            <p className="text-gray-400 text-sm">Start tracking</p>
          </div>
        </Link>
        <Link
          href="/admin/clients"
          className="flex items-center gap-4 p-4 bg-[#111827] border border-white/10 rounded-xl hover:border-sky-500/30 transition-colors"
        >
          <div className="p-3 rounded-lg bg-emerald-500/10">
            <Icon name="Plus" className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-medium">Add Client</p>
            <p className="text-gray-400 text-sm">New customer</p>
          </div>
        </Link>
        <button className="flex items-center gap-4 p-4 bg-[#111827] border border-white/10 rounded-xl hover:border-sky-500/30 transition-colors text-left">
          <div className="p-3 rounded-lg bg-amber-500/10">
            <Icon name="Receipt" className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <p className="text-white font-medium">Send Invoice</p>
            <p className="text-gray-400 text-sm">Bill a client</p>
          </div>
        </button>
      </div>
    </div>
  );
}
