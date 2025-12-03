// Filename: app/portal/dashboard/page.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

const projectData = {
  name: 'MediBook Platform',
  status: 'In Progress',
  progress: 75,
  startDate: '2024-08-01',
  dueDate: '2025-01-15',
  budget: 85000,
  spent: 63750,
  team: [
    { name: 'Sarah Chen', role: 'Project Manager', avatar: 'SC' },
    { name: 'Mike Johnson', role: 'Lead Developer', avatar: 'MJ' },
    { name: 'Emily Davis', role: 'UI/UX Designer', avatar: 'ED' },
  ],
  milestones: [
    { name: 'Discovery & Planning', status: 'completed', date: '2024-08-15' },
    { name: 'UI/UX Design', status: 'completed', date: '2024-09-30' },
    { name: 'Frontend Development', status: 'completed', date: '2024-11-15' },
    { name: 'Backend Integration', status: 'in-progress', date: '2024-12-20' },
    { name: 'Testing & QA', status: 'upcoming', date: '2025-01-05' },
    { name: 'Launch', status: 'upcoming', date: '2025-01-15' },
  ],
};

const recentActivity = [
  { id: 1, action: 'New design files uploaded', user: 'Emily Davis', time: '2 hours ago', icon: 'FileUp' },
  { id: 2, action: 'Invoice #INV-003 sent', user: 'System', time: '1 day ago', icon: 'Receipt' },
  { id: 3, action: 'Comment on wireframes', user: 'Sarah Chen', time: '2 days ago', icon: 'MessageSquare' },
  { id: 4, action: 'Milestone completed: Frontend Development', user: 'Mike Johnson', time: '3 days ago', icon: 'CheckCircle' },
];

export default function PortalDashboard() {
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('portal_client');
    if (stored) {
      setClientData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome back, {clientData?.name?.split(' ')[0] || 'Client'}!
        </h1>
        <p className="text-gray-400">
          {"Here's an overview of your project progress."}
        </p>
      </div>

      {/* Project Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Project Card */}
        <div className="lg:col-span-2 bg-[#111827] border border-white/10 rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">{projectData.name}</h2>
              <p className="text-gray-400 text-sm">Due: {new Date(projectData.dueDate).toLocaleDateString()}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/20 text-sky-400">
              {projectData.status}
            </span>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Overall Progress</span>
              <span className="text-white font-medium">{projectData.progress}%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all"
                style={{ width: `${projectData.progress}%` }}
              />
            </div>
          </div>

          {/* Milestones */}
          <h3 className="text-white font-medium mb-4">Project Milestones</h3>
          <div className="space-y-3">
            {projectData.milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.status === 'completed' ? 'bg-emerald-500/20' :
                  milestone.status === 'in-progress' ? 'bg-sky-500/20' :
                  'bg-white/10'
                }`}>
                  {milestone.status === 'completed' ? (
                    <Icon name="CheckCircle" className="w-4 h-4 text-emerald-400" />
                  ) : milestone.status === 'in-progress' ? (
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${milestone.status === 'completed' ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {milestone.name}
                  </p>
                </div>
                <span className="text-gray-500 text-xs">
                  {new Date(milestone.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          {/* Budget Card */}
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">Budget Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-400">Spent</span>
                  <span className="text-white">${projectData.spent.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Budget</span>
                  <span className="text-white">${projectData.budget.toLocaleString()}</span>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${(projectData.spent / projectData.budget) * 100}%` }}
                />
              </div>
              <p className="text-emerald-400 text-sm">
                ${(projectData.budget - projectData.spent).toLocaleString()} remaining
              </p>
            </div>
          </div>

          {/* Team Card */}
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">Your Team</h3>
            <div className="space-y-3">
              {projectData.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm">{member.name}</p>
                    <p className="text-gray-400 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/portal/files"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="p-2 rounded-lg bg-sky-500/10">
                <Icon name="FileUp" className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Upload Files</p>
                <p className="text-gray-400 text-xs">Share documents</p>
              </div>
            </Link>
            <Link
              href="/portal/messages"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Icon name="MessageSquare" className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Send Message</p>
                <p className="text-gray-400 text-xs">Contact team</p>
              </div>
            </Link>
            <Link
              href="/portal/invoices"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Icon name="Receipt" className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">View Invoices</p>
                <p className="text-gray-400 text-xs">Billing history</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Icon name="HelpCircle" className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Get Support</p>
                <p className="text-gray-400 text-xs">Need help?</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5">
                  <Icon name={activity.icon} className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-500 text-xs">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
