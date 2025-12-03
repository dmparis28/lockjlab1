// Filename: app/components/ContactForm.jsx
'use client';

import React, { useState } from 'react';
import Icon from './Icon';

/**
 * Reusable ContactForm component
 * Can be used on Contact page or embedded elsewhere
 * 
 * @param {string} variant - 'full' | 'compact' (default: 'full')
 * @param {boolean} showBudget - Show budget field (default: true)
 * @param {function} onSubmit - Custom submit handler (optional)
 */
const ContactForm = ({ 
  variant = 'full', 
  showBudget = true,
  onSubmit: customOnSubmit 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Custom handler or default behavior
    if (customOnSubmit) {
      await customOnSubmit(formData);
    } else {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const budgetOptions = [
    { value: '', label: 'Select a budget range' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k+', label: '$250,000+' },
  ];

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'mvp', label: 'MVP Development' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'strategy', label: 'Product Strategy' },
    { value: 'other', label: 'Other' },
  ];

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  if (isSubmitted) {
    return (
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank you!</h3>
        <p className="text-gray-400 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              budget: '',
              projectType: '',
              message: '',
            });
          }}
          className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111827] border border-white/10 rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="john@company.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Company */}
        {variant === 'full' && (
          <div>
            <label htmlFor="company" className={labelClasses}>Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your company name"
            />
          </div>
        )}

        {/* Project Type */}
        {variant === 'full' && (
          <div>
            <label htmlFor="projectType" className={labelClasses}>Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={inputClasses}
            >
              {projectTypes.map(option => (
                <option key={option.value} value={option.value} className="bg-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Budget */}
        {showBudget && (
          <div className={variant === 'full' ? 'md:col-span-2' : ''}>
            <label htmlFor="budget" className={labelClasses}>Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={inputClasses}
            >
              {budgetOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClasses}>Tell us about your project *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={inputClasses}
            placeholder="Describe your project, goals, and timeline..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Icon name="Send" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
};

export default ContactForm;
