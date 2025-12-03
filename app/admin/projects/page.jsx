// Filename: app/admin/projects/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';

const initialProjects = [
  { id: 1, name: 'MediBook Platform', client: 'HealthTech Inc', clientEmail: 'contact@healthtech.com', status: 'In Progress', progress: 75, budget: 85000, spent: 63750, dueDate: '2025-01-15', team: ['SC', 'MJ', 'ED'] },
  { id: 2, name: 'Coinflow Dashboard', client: 'Crypto Ventures', clientEmail: 'team@cryptoventures.io', status: 'In Progress', progress: 45, budget: 120000, spent: 54000, dueDate: '2025-02-01', team: ['JD', 'AK'] },
  { id: 3, name: 'IDS Express App', client: 'IDS Group', clientEmail: 'dominick@idsgroup.com', status: 'Review', progress: 90, budget: 45000, spent: 40500, dueDate: '2025-12-20', team: ['SC', 'JD'] },
  { id: 4, name: 'E-commerce Redesign', client: 'RetailMax', clientEmail: 'projects@retailmax.com', status: 'Planning', progress: 15, budget: 65000, spent: 9750, dueDate: '2025-03-01', team: ['ED', 'MJ', 'AK'] },
  { id: 5, name: 'Healthcare Portal', client: 'MedCare Systems', clientEmail: 'dev@medcare.org', status: 'Completed', progress: 100, budget: 95000, spent: 92000, dueDate: '2025-11-01', team: ['SC', 'JD', 'ED'] },
];

export default function AdminProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [formData, setFormData] = useState({
    name: '',
    client: '',
    clientEmail: '',
    status: 'Planning',
    budget: '',
    dueDate: '',
  });

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status.toLowerCase().replace(' ', '-') === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    setSelectedProject(null);
    setFormData({
      name: '',
      client: '',
      clientEmail: '',
      status: 'Planning',
      budget: '',
      dueDate: '',
    });
    setShowModal(true);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setFormData({
      name: project.name,
      client: project.client,
      clientEmail: project.clientEmail,
      status: project.status,
      budget: project.budget.toString(),
      dueDate: project.dueDate,
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (selectedProject) {
      setProjects(projects.map(p =>
        p.id === selectedProject.id
          ? { ...p, ...formData, budget: parseInt(formData.budget) || 0 }
          : p
      ));
    } else {
      setProjects([
        {
          id: Date.now(),
          ...formData,
          budget: parseInt(formData.budget) || 0,
          spent: 0,
          progress: 0,
          team: [],
        },
        ...projects,
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-sky-500/20 text-sky-400';
      case 'Review': return 'bg-amber-500/20 text-amber-400';
      case 'Planning': return 'bg-gray-500/20 text-gray-400';
      case 'Completed': return 'bg-emerald-500/20 text-emerald-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-gray-400">Manage client projects and track progress</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
        >
          <Icon name="Plus" className="w-5 h-5" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Projects</p>
          <p className="text-2xl font-bold text-white">{projects.length}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">In Progress</p>
          <p className="text-2xl font-bold text-sky-400">{projects.filter(p => p.status === 'In Progress').length}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Budget</p>
          <p className="text-2xl font-bold text-white">${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Revenue</p>
          <p className="text-2xl font-bold text-emerald-400">${projects.reduce((sum, p) => sum + p.spent, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Icon name="Search" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
        >
          <option value="all" className="bg-gray-900">All Status</option>
          <option value="planning" className="bg-gray-900">Planning</option>
          <option value="in-progress" className="bg-gray-900">In Progress</option>
          <option value="review" className="bg-gray-900">Review</option>
          <option value="completed" className="bg-gray-900">Completed</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:border-sky-500/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.client}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-white">{project.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Budget */}
            <div className="flex items-center justify-between text-sm mb-4">
              <span className="text-gray-400">Budget</span>
              <span className="text-white">${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}</span>
            </div>

            {/* Team & Due Date */}
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-sky-500/20 border-2 border-[#111827] flex items-center justify-center text-sky-400 text-xs font-medium"
                  >
                    {member}
                  </div>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                Due: {new Date(project.dueDate).toLocaleDateString()}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => handleEdit(project)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Icon name="Edit" className="w-4 h-4" />
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm">
                <Icon name="Eye" className="w-4 h-4" />
                View
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors"
              >
                <Icon name="Trash" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#111827] border border-white/10 rounded-2xl w-full max-w-lg">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {selectedProject ? 'Edit Project' : 'Create New Project'}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-white/10">
                <Icon name="X" className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Client Email</label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="client@example.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget ($)</label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                    placeholder="50000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="Planning" className="bg-gray-900">Planning</option>
                  <option value="In Progress" className="bg-gray-900">In Progress</option>
                  <option value="Review" className="bg-gray-900">Review</option>
                  <option value="Completed" className="bg-gray-900">Completed</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex items-center justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors"
              >
                {selectedProject ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
