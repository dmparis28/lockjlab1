// Filename: app/components/InteractiveProjectPoster.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon.jsx';

export default function InteractiveProjectPoster() {
  const [view, setView] = useState('initial');
  const [projectData, setProjectData] = useState({
    title: '',
    company: '',
    description: '',
    imageUrl: '',
  });

  const [formValues, setFormValues] = useState({
    title: '',
    company: '',
    description: '',
    imageFile: null,
  });

  const [contactFormValues, setContactFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    needs: '',
  });
  
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    let timer;
    if (view === 'contact-submitted') {
      timer = setTimeout(() => {
        resetState();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [view]);

  const resetState = () => {
    setView('initial');
    setProjectData({ title: '', company: '', description: '', imageUrl: '' });
    setFormValues({ title: '', company: '', description: '', imageFile: null });
    setContactFormValues({ firstName: '', lastName: '', email: '', phone: '', budget: '', needs: '' });
    setImagePreview('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormValues(prev => ({...prev, [name]: value}));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormValues(prev => ({ ...prev, imageFile: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectData({
      title: formValues.title || 'An innovative smart basketball hoop',
      company: formValues.company || 'Huupe',
      description: formValues.description || 'Learn how we revolutionized the way players interact with the game of basketball, blending technology and sport.',
      imageUrl: imagePreview || 'https://placehold.co/800x600/1e293b/94a3b8?text=Your+Project',
    });
    setView('submitted');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setView('contact-submitted');
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition";

  return (
    <section className="bg-[#0B0F19] py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.3)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Initial State */}
        {view === 'initial' && (
          <div className="text-center w-full animate-fade-in">
            <p className="text-sky-400 font-semibold tracking-wider uppercase mb-4">Let's Build Together</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Your Project Could Be Next</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              We partner with ambitious teams to bring innovative ideas to life. Ready to transform your vision into a market-ready product?
            </p>
            
            <div 
              onClick={() => setView('form')} 
              className="group cursor-pointer relative w-full max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-sky-500/30 hover:border-sky-500/60 bg-[#111827] hover:bg-[#1a2332] transition-all duration-300 flex flex-col items-center justify-center p-16 md:p-24"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-sky-500/50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-sky-500/50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-sky-500/50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-sky-500/50 rounded-br-2xl" />
              
              <div className="w-24 h-24 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-all">
                <Icon name="UploadCloud" className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">Submit Your Project Idea</h3>
              <p className="text-gray-400 text-lg">Click here to tell us about your vision</p>
              
              {/* Hover arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRight" className="w-6 h-6 text-sky-400" />
              </div>
            </div>
          </div>
        )}

        {/* Form State */}
        {view === 'form' && (
          <div className="w-full max-w-2xl animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Tell Us About Your Project</h2>
            <p className="text-gray-400 mb-8 text-center">Share the details and we'll bring it to life.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
                  <input type="text" name="title" value={formValues.title} onChange={handleInputChange} placeholder="e.g., AI Fitness Coach" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input type="text" name="company" value={formValues.company} onChange={handleInputChange} placeholder="e.g., FitTech Inc." className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                <textarea name="description" rows="4" value={formValues.description} onChange={handleInputChange} placeholder="Describe your project vision..." className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Cover Image (Optional)</label>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer w-full h-40 rounded-lg border-2 border-dashed border-white/20 hover:border-sky-500/50 bg-white/5 flex flex-col items-center justify-center text-gray-400 transition-colors">
                  {imagePreview ? (<img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-md" />) : (<><Icon name="UploadCloud" className="w-8 h-8 mb-2" /><p className="text-sm">Click to upload an image</p></>)}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <button type="button" onClick={() => setView('initial')} className="w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-4 rounded-lg transition">Cancel</button>
                <button type="submit" className="w-full text-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-shadow hover:shadow-lg hover:shadow-sky-500/30">Submit Project</button>
              </div>
            </form>
          </div>
        )}

        {/* Submitted State */}
        {view === 'submitted' && (
          <article className="group relative isolate flex flex-col gap-8 lg:flex-row bg-gray-900/50 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-fade-in w-full">
            <div className="relative flex-1">
              <div className="flex flex-col justify-center h-full max-w-xl">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">{projectData.company}</p>
                <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{projectData.title}</h3>
                <p className="mt-6 text-lg leading-8 text-gray-400">{projectData.description}</p>
                <div className="mt-8">
                  <button onClick={() => setView('contact')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-sky-500/30 transition-all group">
                    Bring This to Life
                    <Icon name="ArrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src={projectData.imageUrl} alt={`Screenshot of the ${projectData.title} project`} className="aspect-[4/3] w-full rounded-2xl bg-gray-800 object-cover" />
            </div>
          </article>
        )}

        {/* Contact Form State */}
        {view === 'contact' && (
          <div className="w-full max-w-2xl animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Almost There!</h2>
            <p className="text-gray-400 mb-8 text-center">Fill in your details and we'll reach out to discuss "{projectData.title}".</p>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-gray-300 mb-2">First Name</label><input type="text" name="firstName" required value={contactFormValues.firstName} onChange={handleContactInputChange} className={inputClass} /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label><input type="text" name="lastName" required value={contactFormValues.lastName} onChange={handleContactInputChange} className={inputClass} /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Email</label><input type="email" name="email" required value={contactFormValues.email} onChange={handleContactInputChange} className={inputClass} /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Phone</label><input type="tel" name="phone" value={contactFormValues.phone} onChange={handleContactInputChange} className={inputClass} /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                <select name="budget" value={contactFormValues.budget} onChange={handleContactInputChange} className={inputClass}>
                  <option value="" className="bg-gray-900">Select a range</option>
                  <option value="25k-50k" className="bg-gray-900">$25k - $50k</option>
                  <option value="50k-100k" className="bg-gray-900">$50k - $100k</option>
                  <option value="100k+" className="bg-gray-900">$100k+</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium text-gray-300 mb-2">What do you need help with?</label><textarea name="needs" rows="3" value={contactFormValues.needs} onChange={handleContactInputChange} className={inputClass} /></div>
              <div className="flex items-center gap-4 mt-8">
                <button type="button" onClick={() => setView('submitted')} className="w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-4 rounded-lg transition">Back</button>
                <button type="submit" className="w-full text-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-shadow hover:shadow-lg hover:shadow-sky-500/30">Send Request</button>
              </div>
            </form>
          </div>
        )}

        {/* Success State */}
        {view === 'contact-submitted' && (
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <Icon name="CheckCircle" className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
            <p className="text-gray-400">We'll be in touch with you shortly to schedule a call.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes dash-animation { to { stroke-dashoffset: -35; } }
        .animated-dash { animation: dash-animation 1.5s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
