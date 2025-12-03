// Filename: app/admin/clients/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';

const initialClients = [
  { id: 1, name: 'HealthTech Inc', email: 'contact@healthtech.com', phone: '+1 (555) 123-4567', company: 'HealthTech Inc', projects: 2, totalSpent: 185000, status: 'Active', joinDate: '2024-06-15' },
  { id: 2, name: 'Crypto Ventures', email: 'team@cryptoventures.io', phone: '+1 (555) 234-5678', company: 'Crypto Ventures LLC', projects: 1, totalSpent: 120000, status: 'Active', joinDate: '2024-08-20' },
  { id: 3, name: 'IDS Group', email: 'dominick@idsgroup.com', phone: '+1 (555) 345-6789', company: 'Image Detail Specialists', projects: 3, totalSpent: 245000, status: 'Active', joinDate: '2023-11-10' },
  { id: 4, name: 'RetailMax', email: 'projects@retailmax.com', phone: '+1 (555) 456-7890', company: 'RetailMax Corporation', projects: 1, totalSpent: 65000, status: 'Active', joinDate: '2024-10-01' },
  { id: 5, name: 'MedCare Systems', email: 'dev@medcare.org', phone: '+1 (555) 567-8901', company: 'MedCare Systems', projects: 1, totalSpent: 95000, status: 'Inactive', joinDate: '2024-02-28' },
];

export default function AdminClients() {
  const [clients, setClients] = useState(initialClients);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'Active',
  });

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateNew = () => {
    setSelectedClient(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      status: 'Active',
    });
    setShowModal(true);
  };

  const handleEdit = (client) => {
    setSelectedClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone,
      company: client.company,
      status: client.status,
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (selectedClient) {
      setClients(clients.map(c =>
        c.id === selectedClient.id
          ? { ...c, ...formData }
          : c
      ));
    } else {
      setClients([
        {
          id: Date.now(),
          ...formData,
          projects: 0,
          totalSpent: 0,
          joinDate: new Date().toISOString().split('T')[0],
        },
        ...clients,
      ]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  const generatePortalLink = (client) => {
    // Generate a unique portal link for the client
    const token = btoa(client.email + ':' + Date.now());
    navigator.clipboard.writeText(`${window.location.origin}/portal?token=${token}`);
    alert('Portal link copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Clients</h1>
          <p className="text-gray-400">Manage your client relationships</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
        >
          <Icon name="Plus" className="w-5 h-5" />
          Add Client
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Clients</p>
          <p className="text-2xl font-bold text-white">{clients.length}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Active</p>
          <p className="text-2xl font-bold text-emerald-400">{clients.filter(c => c.status === 'Active').length}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-white">${clients.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</p>
        </div>
        <div className="bg-[#111827] border border-white/10 rounded-xl p-4">
          <p className="text-gray-400 text-sm">Avg. Project Value</p>
          <p className="text-2xl font-bold text-sky-400">
            ${Math.round(clients.reduce((sum, c) => sum + c.totalSpent, 0) / clients.reduce((sum, c) => sum + c.projects, 0) || 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Icon name="Search" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
        />
      </div>

      {/* Clients Table */}
      <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Client</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Contact</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Projects</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Total Spent</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredClients.map((client) => (
              <tr key={client.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-medium">
                      {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{client.name}</p>
                      <p className="text-gray-400 text-sm">{client.company}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">{client.email}</p>
                  <p className="text-gray-400 text-sm">{client.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">{client.projects}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-white">${client.totalSpent.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => generatePortalLink(client)}
                      className="p-2 rounded-lg text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
                      title="Generate Portal Link"
                    >
                      <Icon name="Link" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(client)}
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Icon name="Edit" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <Icon name="Trash" className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#111827] border border-white/10 rounded-2xl w-full max-w-lg">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {selectedClient ? 'Edit Client' : 'Add New Client'}
              </h2>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-lg hover:bg-white/10">
                <Icon name="X" className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="Acme Inc"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="john@acme.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="Active" className="bg-gray-900">Active</option>
                  <option value="Inactive" className="bg-gray-900">Inactive</option>
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
                {selectedClient ? 'Update' : 'Add Client'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
