// Filename: app/work/medibook/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function MediBookCaseStudy() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeTab, setActiveTab] = useState('patient');
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [activeConversation, setActiveConversation] = useState(0);

  const doctors = [
    { initials: 'JC', name: 'Dr. John Carter', specialty: 'Cardiologist', location: 'New York, NY', rating: 4.4, reviews: 120, color: 'bg-blue-500' },
    { initials: 'SB', name: 'Dr. Susan Benton', specialty: 'Dermatologist', location: 'Los Angeles, CA', rating: 4.9, reviews: 98, color: 'bg-purple-500' },
    { initials: 'PG', name: 'Dr. Peter Green', specialty: 'General Practice', location: 'Chicago, IL', rating: 4.7, reviews: 210, color: 'bg-green-500' },
  ];

  const invoices = [
    { id: 'INV-001', date: '2025-09-28', description: 'General Check-up', amount: 150, status: 'Paid' },
    { id: 'INV-002', date: '2025-09-22', description: 'Cardiology Consultation', amount: 250, status: 'Paid' },
    { id: 'INV-003', date: '2025-10-05', description: 'Video Consultation', amount: 120, status: 'Pending' },
  ];

  const conversations = [
    { initials: 'JC', name: 'Dr. John Carter', lastMessage: 'Sounds good, see you then!', time: '10:42 AM', color: 'bg-blue-500' },
    { initials: 'SB', name: 'Dr. Susan Benton', lastMessage: 'No problem, happy to help.', time: 'Yesterday', color: 'bg-purple-500' },
  ];

  const messages = [
    { from: 'doctor', text: 'Hi Alex, just a reminder about your appointment tomorrow at 10:30 AM.' },
    { from: 'patient', text: "Thanks for the reminder, Dr. Carter. I'll be there." },
    { from: 'doctor', text: 'Sounds good, see you then!' },
  ];

  // Sidebar Component
  const Sidebar = ({ active, onSelect }) => (
    <div className="w-14 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-2">
      {[
        { id: 'dashboard', icon: 'Home' },
        { id: 'find-doctor', icon: 'Search' },
        { id: 'records', icon: 'FileText' },
        { id: 'billing', icon: 'CreditCard' },
        { id: 'messages', icon: 'MessageCircle' },
        { id: 'settings', icon: 'Settings' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            active === item.id ? 'bg-blue-50 text-blue-500' : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <Icon name={item.icon} className="w-5 h-5" />
        </button>
      ))}
      <div className="flex-1" />
      <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50">
        <Icon name="LogOut" className="w-5 h-5" />
      </button>
    </div>
  );

  // Login Screen
  const LoginScreen = () => (
    <div className="flex h-full">
      {/* Left Panel - Blue */}
      <div className="w-2/5 bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon name="Package" className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-lg">MediBook</span>
        </div>
        <p className="text-blue-100 text-xs">Your partner in modern, accessible healthcare.</p>
      </div>
      {/* Right Panel - Form */}
      <div className="flex-1 bg-white p-6 flex flex-col justify-center">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Welcome back</h2>
        <p className="text-gray-500 text-xs mb-4">Sign in to your account</p>
        
        {/* Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button
            onClick={() => setActiveTab('patient')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'patient' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Patient
          </button>
          <button
            onClick={() => setActiveTab('doctor')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'doctor' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
            }`}
          >
            Doctor
          </button>
        </div>
        
        <div className="space-y-3">
          <input
            type="email"
            defaultValue="patient@medibook.com"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            defaultValue="••••••••"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
          />
          <a href="#" className="text-blue-500 text-xs hover:underline block text-right">Forgot password?</a>
          <button
            onClick={() => setCurrentScreen(1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg text-xs transition-colors"
          >
            Sign In as {activeTab === 'patient' ? 'Patient' : 'Doctor'}
          </button>
        </div>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="dashboard" onSelect={(id) => {
        setActiveSidebarItem(id);
        if (id === 'find-doctor') setCurrentScreen(2);
        if (id === 'billing') setCurrentScreen(3);
        if (id === 'messages') setCurrentScreen(4);
      }} />
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-500 text-xs">{"Here's your health overview for today."}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <Icon name="Bell" className="w-4 h-4 text-gray-500" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">AT</div>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: 'Upcoming Appointments', value: '1', icon: 'Calendar' },
            { label: 'Messages', value: '1 Unread', icon: 'MessageCircle' },
            { label: 'Active Prescriptions', value: '2', icon: 'Pill' },
            { label: 'Last Check-up', value: 'Sep 15', icon: 'Activity' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <Icon name={stat.icon} className="w-4 h-4 text-blue-500" />
              </div>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Upcoming Appointment */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">Upcoming Appointments</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">JC</div>
              <div>
                <p className="font-medium text-gray-900 text-sm">Dr. John Carter</p>
                <p className="text-gray-500 text-xs">Cardiologist</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-900 text-sm">October 4 at 10:30 AM</p>
              <p className="text-gray-500 text-xs">Video call</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
              Join Call
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">Quick Actions</h3>
          <div className="flex gap-3">
            <button 
              onClick={() => setCurrentScreen(2)}
              className="flex-1 flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Icon name="Search" className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-700">Find a Doctor</span>
            </button>
            <button className="flex-1 flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Icon name="FileText" className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-700">View Medical Records</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Find a Doctor Screen
  const FindDoctorScreen = () => (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="find-doctor" onSelect={(id) => {
        if (id === 'dashboard') setCurrentScreen(1);
        if (id === 'billing') setCurrentScreen(3);
        if (id === 'messages') setCurrentScreen(4);
      }} />
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-lg font-bold text-gray-900 mb-4">Find a Doctor</h1>
        
        {/* Search */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Icon name="Search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by doctor name..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500">
            <option>All Specialties</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>General Practice</option>
          </select>
        </div>
        
        {/* Doctor Cards */}
        <div className="space-y-3">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${doctor.color} flex items-center justify-center text-white font-medium`}>
                  {doctor.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{doctor.name}</p>
                  <p className="text-gray-500 text-sm">{doctor.specialty}</p>
                  <p className="text-gray-400 text-xs">{doctor.location}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end mb-1">
                  <Icon name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                  <span className="text-gray-400 text-xs">({doctor.reviews} reviews)</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Billing Screen
  const BillingScreen = () => (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="billing" onSelect={(id) => {
        if (id === 'dashboard') setCurrentScreen(1);
        if (id === 'find-doctor') setCurrentScreen(2);
        if (id === 'messages') setCurrentScreen(4);
      }} />
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-lg font-bold text-gray-900 mb-4">Your Invoices</h1>
        
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Invoice #</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Description</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{invoice.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{invoice.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{invoice.description}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">${invoice.amount.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    {invoice.status === 'Paid' ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Paid</span>
                    ) : (
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Messages Screen
  const MessagesScreen = () => (
    <div className="flex h-full bg-gray-50">
      <Sidebar active="messages" onSelect={(id) => {
        if (id === 'dashboard') setCurrentScreen(1);
        if (id === 'find-doctor') setCurrentScreen(2);
        if (id === 'billing') setCurrentScreen(3);
      }} />
      <div className="flex-1 flex">
        {/* Conversation List */}
        <div className="w-1/3 bg-white border-r border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Messages</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {conversations.map((conv, i) => (
              <button
                key={conv.name}
                onClick={() => setActiveConversation(i)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  activeConversation === i ? 'bg-blue-50' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${conv.color} flex items-center justify-center text-white font-medium text-sm`}>
                  {conv.initials}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900 text-sm">{conv.name}</p>
                  <p className="text-gray-500 text-xs truncate">{conv.lastMessage}</p>
                </div>
                <span className="text-gray-400 text-xs">{conv.time}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${conversations[activeConversation].color} flex items-center justify-center text-white font-medium text-sm`}>
                {conversations[activeConversation].initials}
              </div>
              <div>
                <p className="font-medium text-gray-900">{conversations[activeConversation].name}</p>
                <p className="text-green-500 text-xs">Online</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'patient' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  msg.from === 'patient' 
                    ? 'bg-blue-500 text-white rounded-br-md' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Icon name="Send" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const screens = [LoginScreen, DashboardScreen, FindDoctorScreen, BillingScreen, MessagesScreen];
  const screenNames = ['Login', 'Dashboard', 'Find Doctor', 'Billing', 'Messages'];
  const CurrentScreenComponent = screens[currentScreen];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Icon name="Package" className="w-7 h-7 text-white" />
                </div>
                <span className="text-white font-bold text-2xl">MediBook</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="italic">Healthcare at your fingertips</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A comprehensive healthcare platform connecting patients with doctors through seamless appointment booking, secure messaging, and integrated billing.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Platform</span>
                  <p className="text-white">Web Application</p>
                </div>
                <div>
                  <span className="text-gray-500">Deliverables</span>
                  <p className="text-white">UI/UX, Full-Stack Development</p>
                </div>
                <div>
                  <span className="text-gray-500">Timeline</span>
                  <p className="text-white">12 Weeks</p>
                </div>
              </div>
            </div>
            
            {/* Live Demo - Desktop Frame */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Browser Frame */}
                <div className="w-[420px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                  {/* Browser Header */}
                  <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-xs">
                        medibook.app
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="h-[320px] bg-white overflow-hidden">
                    <CurrentScreenComponent />
                  </div>
                </div>
                
                {/* Screen Selector */}
                <div className="flex justify-center gap-2 mt-4">
                  {screenNames.map((name, i) => (
                    <button
                      key={name}
                      onClick={() => setCurrentScreen(i)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        i === currentScreen 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Active Patients' },
              { value: '2,500+', label: 'Healthcare Providers' },
              { value: '98%', label: 'Patient Satisfaction' },
              { value: '4.8', label: 'App Store Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Search', title: 'Find Doctors', description: 'Search by specialty, location, and ratings. View detailed profiles and patient reviews.' },
              { icon: 'Calendar', title: 'Easy Scheduling', description: 'Book appointments instantly with real-time availability. Video and in-person options.' },
              { icon: 'MessageCircle', title: 'Secure Messaging', description: 'HIPAA-compliant messaging with your healthcare providers. Share files and images.' },
              { icon: 'CreditCard', title: 'Integrated Billing', description: 'View invoices, make payments, and track insurance claims all in one place.' },
              { icon: 'FileText', title: 'Medical Records', description: 'Access your complete medical history, prescriptions, and test results anytime.' },
              { icon: 'Video', title: 'Telehealth', description: 'Join video consultations directly from the app. No downloads required.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Design System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colors */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <div className="w-full h-12 rounded-lg bg-blue-500 mb-2" />
                  <p className="text-white text-xs">#3B82F6</p>
                  <p className="text-gray-500 text-xs">Primary</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-white border border-gray-200 mb-2" />
                  <p className="text-white text-xs">#FFFFFF</p>
                  <p className="text-gray-500 text-xs">Background</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-gray-900 mb-2" />
                  <p className="text-white text-xs">#1F2937</p>
                  <p className="text-gray-500 text-xs">Text</p>
                </div>
                <div>
                  <div className="w-full h-12 rounded-lg bg-green-500 mb-2" />
                  <p className="text-white text-xs">#22C55E</p>
                  <p className="text-gray-500 text-xs">Success</p>
                </div>
              </div>
            </div>
            
            {/* Typography */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Typography</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white text-2xl font-bold">Heading 1</p>
                  <p className="text-gray-500 text-xs">Inter Bold 24px</p>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">Heading 2</p>
                  <p className="text-gray-500 text-xs">Inter Semibold 18px</p>
                </div>
                <div>
                  <p className="text-white text-sm">Body Text</p>
                  <p className="text-gray-500 text-xs">Inter Regular 14px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'WebRTC', 'Stripe', 'Twilio'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform healthcare delivery?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's build a platform that puts patients first."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-blue-500/30 group"
            >
              Start Your Project
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 transition duration-300"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
