// Filename: app/careers/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';

const values = [
  {
    icon: 'Target',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we create.',
  },
  {
    icon: 'Users',
    title: 'Collaboration',
    description: 'The best work happens when diverse perspectives come together.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to solve complex problems.',
  },
  {
    icon: 'Heart',
    title: 'Impact',
    description: 'We build products that make a real difference in peoples lives.',
  },
];

const benefits = [
  { icon: 'Globe', title: 'Remote-First', description: 'Work from anywhere in the world' },
  { icon: 'Calendar', title: 'Flexible Hours', description: 'Design your own schedule' },
  { icon: 'TrendingUp', title: 'Growth Budget', description: '$2,000/year for learning' },
  { icon: 'Heart', title: 'Health Insurance', description: 'Comprehensive coverage' },
  { icon: 'Monitor', title: 'Equipment', description: 'Latest tools and hardware' },
  { icon: 'Users', title: 'Team Retreats', description: 'Annual company gatherings' },
];

const openings = [
  {
    id: 'senior-product-designer',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Lead design for complex product challenges and mentor junior designers.',
  },
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
  },
  {
    id: 'product-strategist',
    title: 'Product Strategist',
    department: 'Strategy',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Help clients define product vision and go-to-market strategies.',
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer (React Native)',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    description: 'Build cross-platform mobile apps for iOS and Android.',
  },
  {
    id: 'ux-researcher',
    title: 'UX Researcher',
    department: 'Design',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Conduct user research and translate insights into actionable recommendations.',
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    resumeFile: null,
    coverLetter: '',
    howHeard: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openApplication = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setSubmitSuccess(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      portfolio: '',
      resumeFile: null,
      coverLetter: '',
      howHeard: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resumeFile: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, you'd send this to your backend/email service
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Application: ${selectedJob?.title || 'General Application'}`);
    const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
LinkedIn: ${formData.linkedin}
Portfolio: ${formData.portfolio}
Position: ${selectedJob?.title || 'General Application'}
How they heard about us: ${formData.howHeard}

Cover Letter:
${formData.coverLetter}
    `);

    // Open mailto as backup
    window.open(`mailto:careers@lockjlab.com?subject=${subject}&body=${body}`, '_blank');

    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                <Icon name="Briefcase" className="w-5 h-5 text-sky-400" />
              </div>
              <span className="text-sky-400 font-semibold tracking-wider uppercase text-sm">Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your Career,<br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Build Amazing Products
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Join a team of talented designers, developers, and strategists working on meaningful products for innovative companies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape who we hire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-4">
                  <Icon name={value.icon} className="w-8 h-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We invest in our team with competitive benefits and a supportive culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start p-6 rounded-xl bg-[#111827] border border-white/10"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 mr-4">
                  <Icon name={benefit.icon} className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg">
              {"Find your next opportunity. Don't see a fit? We're always looking for talented people."}
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <button
                key={job.id}
                onClick={() => openApplication(job)}
                className="w-full text-left group p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{job.description}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-sky-400 font-medium">
                      Apply Now
                      <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* General Application */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-sky-900/20 to-blue-900/20 border border-sky-500/20 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">{"Don't see the right role?"}</h3>
            <p className="text-gray-400 mb-4">
              {"We're always interested in meeting talented people. Send us your resume and let's chat."}
            </p>
            <button
              onClick={() => openApplication(null)}
              className="inline-flex items-center bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Submit General Application
              <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-[#0B0F19] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-[#0B0F19] border-b border-white/10 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedJob ? `Apply: ${selectedJob.title}` : 'General Application'}
                </h2>
                {selectedJob && (
                  <p className="text-gray-400 text-sm mt-1">
                    {selectedJob.department} • {selectedJob.location} • {selectedJob.type}
                  </p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Icon name="X" className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Form */}
            {!submitSuccess ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                      placeholder="johndoe.com"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume / CV <span className="text-red-400">*</span>
                  </label>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-sky-500/50 transition-colors">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Icon name="Upload" className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                      {formData.resumeFile ? (
                        <p className="text-sky-400 font-medium">{formData.resumeFile.name}</p>
                      ) : (
                        <>
                          <p className="text-gray-400">Click to upload or drag and drop</p>
                          <p className="text-gray-500 text-sm mt-1">PDF, DOC, DOCX (max 5MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 resize-none"
                    placeholder="Tell us why you'd be a great fit for this role..."
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="" className="bg-gray-900">Select an option</option>
                    <option value="linkedin" className="bg-gray-900">LinkedIn</option>
                    <option value="indeed" className="bg-gray-900">Indeed</option>
                    <option value="google" className="bg-gray-900">Google Search</option>
                    <option value="referral" className="bg-gray-900">Employee Referral</option>
                    <option value="social" className="bg-gray-900">Social Media</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                {/* Submit */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 py-3 px-6 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium hover:shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-400 mb-6">
                  {"Thank you for your interest in joining Lock J Lab. We'll review your application and get back to you soon."}
                </p>
                <button
                  onClick={closeModal}
                  className="py-3 px-8 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
