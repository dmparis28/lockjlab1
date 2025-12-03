// Filename: app/admin/blog/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';

const initialPosts = [
  { id: 1, title: 'How to Choose the Right AI Software Development Company in 2025', status: 'Published', author: 'Sarah Chen', date: '2025-11-28', views: 1245 },
  { id: 2, title: 'Lock J Lab Expands UX and Accessibility Services', status: 'Published', author: 'John Smith', date: '2025-11-25', views: 890 },
  { id: 3, title: 'The Complete Guide to UX Audits', status: 'Draft', author: 'Sarah Chen', date: '2025-11-20', views: 0 },
  { id: 4, title: 'Building Scalable React Applications', status: 'Published', author: 'Mike Johnson', date: '2025-11-15', views: 2340 },
  { id: 5, title: 'Design Systems: A Comprehensive Guide', status: 'Review', author: 'Emily Davis', date: '2025-11-10', views: 0 },
];

export default function AdminBlog() {
  const [posts, setPosts] = useState(initialPosts);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    status: 'Draft',
    featuredImage: '',
  });

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleCreateNew = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: '',
      status: 'Draft',
      featuredImage: '',
    });
    setShowEditor(true);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: '',
      excerpt: '',
      category: '',
      status: post.status,
      featuredImage: '',
    });
    setShowEditor(true);
  };

  const handleSave = () => {
    if (editingPost) {
      setPosts(posts.map(p => 
        p.id === editingPost.id 
          ? { ...p, title: formData.title, status: formData.status }
          : p
      ));
    } else {
      setPosts([
        {
          id: Date.now(),
          title: formData.title,
          status: formData.status,
          author: 'Admin',
          date: new Date().toISOString().split('T')[0],
          views: 0,
        },
        ...posts,
      ]);
    }
    setShowEditor(false);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400">Manage your blog content</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
        >
          <Icon name="Plus" className="w-5 h-5" />
          New Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Icon name="Search" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
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
          <option value="published" className="bg-gray-900">Published</option>
          <option value="draft" className="bg-gray-900">Draft</option>
          <option value="review" className="bg-gray-900">Review</option>
        </select>
      </div>

      {/* Posts Table */}
      <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Title</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Author</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Date</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Views</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredPosts.map((post) => (
              <tr key={post.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-white font-medium">{post.title}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-400">{post.author}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === 'Published' ? 'bg-emerald-500/20 text-emerald-400' :
                    post.status === 'Draft' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-400">{post.date}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-400">{post.views.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Icon name="Edit" className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                      <Icon name="Eye" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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

      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowEditor(false)} />
          <div className="relative bg-[#111827] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-[#111827] border-b border-white/10 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              <button
                onClick={() => setShowEditor(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Icon name="X" className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 resize-none"
                  placeholder="Short description for previews"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 resize-none font-mono text-sm"
                  placeholder="Write your blog post content here... (Markdown supported)"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="" className="bg-gray-900">Select category</option>
                    <option value="development" className="bg-gray-900">Development</option>
                    <option value="design" className="bg-gray-900">Design</option>
                    <option value="strategy" className="bg-gray-900">Strategy</option>
                    <option value="news" className="bg-gray-900">News</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Draft" className="bg-gray-900">Draft</option>
                    <option value="Review" className="bg-gray-900">Review</option>
                    <option value="Published" className="bg-gray-900">Published</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image</label>
                <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-sky-500/50 transition-colors cursor-pointer">
                  <Icon name="Image" className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm mt-1">PNG, JPG, GIF up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-[#111827] border-t border-white/10 p-6 flex items-center justify-end gap-4">
              <button
                onClick={() => setShowEditor(false)}
                className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white transition-colors"
              >
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
