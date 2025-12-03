// Filename: app/portal/files/page.jsx
'use client';

import { useState } from 'react';
import Icon from '../../components/Icon';

const initialFiles = [
  { id: 1, name: 'Brand Guidelines v2.pdf', type: 'pdf', size: '2.4 MB', uploadedBy: 'Emily Davis', uploadedAt: '2024-11-28', category: 'Design' },
  { id: 2, name: 'Wireframes-Final.fig', type: 'figma', size: '8.1 MB', uploadedBy: 'Emily Davis', uploadedAt: '2024-11-25', category: 'Design' },
  { id: 3, name: 'API Documentation.pdf', type: 'pdf', size: '1.2 MB', uploadedBy: 'Mike Johnson', uploadedAt: '2024-11-20', category: 'Development' },
  { id: 4, name: 'User Research Report.pdf', type: 'pdf', size: '3.8 MB', uploadedBy: 'Sarah Chen', uploadedAt: '2024-11-15', category: 'Research' },
  { id: 5, name: 'Logo Assets.zip', type: 'zip', size: '15.2 MB', uploadedBy: 'Emily Davis', uploadedAt: '2024-11-10', category: 'Design' },
  { id: 6, name: 'Project Kickoff Notes.docx', type: 'doc', size: '245 KB', uploadedBy: 'Sarah Chen', uploadedAt: '2024-08-05', category: 'Planning' },
];

const categories = ['All', 'Design', 'Development', 'Research', 'Planning'];

export default function PortalFiles() {
  const [files, setFiles] = useState(initialFiles);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState([]);

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return { icon: 'FileCode', color: 'text-red-400' };
      case 'figma': return { icon: 'Palette', color: 'text-purple-400' };
      case 'zip': return { icon: 'Package', color: 'text-amber-400' };
      case 'doc': return { icon: 'Newspaper', color: 'text-blue-400' };
      default: return { icon: 'FileCode', color: 'text-gray-400' };
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFileUpload(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFileUpload(selectedFiles);
  };

  const handleFileUpload = (newFiles) => {
    // Simulate upload progress
    const uploading = newFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      progress: 0,
    }));
    
    setUploadingFiles(uploading);

    // Simulate upload progress
    uploading.forEach((uploadFile, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Add to files list
          const file = newFiles[index];
          const extension = file.name.split('.').pop().toLowerCase();
          setFiles(prev => [{
            id: Date.now() + index,
            name: file.name,
            type: extension === 'pdf' ? 'pdf' : extension === 'fig' ? 'figma' : extension === 'zip' ? 'zip' : 'doc',
            size: formatFileSize(file.size),
            uploadedBy: 'You',
            uploadedAt: new Date().toISOString().split('T')[0],
            category: 'Design',
          }, ...prev]);
          
          // Remove from uploading
          setTimeout(() => {
            setUploadingFiles(prev => prev.filter(f => f.id !== uploadFile.id));
          }, 500);
        }
        
        setUploadingFiles(prev => prev.map(f => 
          f.id === uploadFile.id ? { ...f, progress } : f
        ));
      }, 200);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this file?')) {
      setFiles(files.filter(f => f.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Project Files</h1>
        <p className="text-gray-400">Upload and manage files for your project</p>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragging 
            ? 'border-sky-500 bg-sky-500/10' 
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <Icon name="FileUp" className={`w-12 h-12 mx-auto mb-4 ${isDragging ? 'text-sky-400' : 'text-gray-500'}`} />
        <p className="text-white mb-2">Drag and drop files here</p>
        <p className="text-gray-400 text-sm mb-4">or</p>
        <label
          htmlFor="file-upload"
          className="inline-flex items-center gap-2 px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg cursor-pointer transition-colors"
        >
          <Icon name="Plus" className="w-4 h-4" />
          Browse Files
        </label>
        <p className="text-gray-500 text-xs mt-4">
          Supports PDF, DOC, DOCX, ZIP, PNG, JPG, FIG up to 50MB
        </p>
      </div>

      {/* Uploading Files */}
      {uploadingFiles.length > 0 && (
        <div className="space-y-2">
          {uploadingFiles.map((file) => (
            <div key={file.id} className="bg-[#111827] border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm">{file.name}</span>
                <span className="text-sky-400 text-sm">{Math.round(file.progress)}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full transition-all"
                  style={{ width: `${file.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Icon name="Search" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-sky-500/20 text-sky-400'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Files List */}
      <div className="bg-[#111827] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">File Name</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Category</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Size</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Uploaded By</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Date</th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredFiles.map((file) => {
              const { icon, color } = getFileIcon(file.type);
              return (
                <tr key={file.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Icon name={icon} className={`w-5 h-5 ${color}`} />
                      </div>
                      <span className="text-white">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                      {file.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{file.size}</td>
                  <td className="px-6 py-4 text-gray-400">{file.uploadedBy}</td>
                  <td className="px-6 py-4 text-gray-400">
                    {new Date(file.uploadedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Icon name="Download" className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Icon name="Eye" className="w-4 h-4" />
                      </button>
                      {file.uploadedBy === 'You' && (
                        <button 
                          onClick={() => handleDelete(file.id)}
                          className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <Icon name="Trash" className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredFiles.length === 0 && (
          <div className="p-12 text-center">
            <Icon name="FolderOpen" className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">No files found</p>
          </div>
        )}
      </div>
    </div>
  );
}
