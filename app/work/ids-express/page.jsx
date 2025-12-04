// Filename: app/work/ids-express/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function IDSExpressCaseStudy() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [licensePlate, setLicensePlate] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const plans = [
    { name: 'Unlimited Diamond', price: 49, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Unlimited Paladium', price: 39, color: 'from-gray-400 to-gray-500' },
    { name: 'Unlimited Platinum', price: 29, color: 'from-gray-300 to-gray-400' },
    { name: 'Unlimited Gold', price: 24, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Unlimited Silver', price: 16, color: 'from-gray-200 to-gray-300' },
  ];

  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const handleContinue = () => {
    if (currentScreen < 6) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const resetDemo = () => {
    setCurrentScreen(0);
    setPhone('');
    setVerificationCode('');
    setSelectedPlan(null);
    setLicensePlate('');
    setSelectedState('');
    setFormData({ firstName: '', lastName: '', email: '', address: '', city: '', state: '', zip: '' });
  };

  // Logo Component
  const IDSLogo = () => (
    <div className="flex flex-col items-center mb-6">
      <div className="flex items-center gap-1 text-2xl font-bold tracking-wider">
        <span className="text-gray-800">I</span>
        <span className="text-gray-800">D</span>
        <span className="text-gray-800">S</span>
        <span className="text-cyan-500 italic text-xl ml-1">Express</span>
      </div>
      <div className="text-gray-600 text-xs tracking-[0.3em] mt-0.5">C A R W A S H</div>
    </div>
  );

  // Screen Components
  const PhoneScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">IDS Car Wash Membership</h2>
      <p className="text-gray-500 text-sm mb-6">{"We'll send you a text to verify your phone and get you on your way."}</p>
      
      <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-4">
        <div className="flex items-center gap-1 px-3 py-3 bg-gray-50 border-r border-gray-200">
          <span className="text-sm">🇺🇸</span>
          <span className="text-gray-600 text-sm">US</span>
          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 123-4567"
          className="flex-1 px-3 py-3 text-gray-700 text-sm focus:outline-none"
        />
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Continue →
      </button>
      
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">Need help getting started?</p>
        <a href="#" className="text-cyan-500 text-xs hover:underline">Contact support</a>
      </div>
    </div>
  );

  const VerificationScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">Enter the code we sent you</h2>
      <p className="text-gray-500 text-sm mb-6">Please enter the 6-digit code we texted to your number.</p>
      
      <div className="flex justify-center gap-2 mb-6">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={verificationCode[i] || ''}
            onChange={(e) => {
              const newCode = verificationCode.split('');
              newCode[i] = e.target.value;
              setVerificationCode(newCode.join(''));
            }}
            className="w-10 h-12 border border-gray-200 rounded-lg text-center text-lg font-semibold text-gray-700 focus:outline-none focus:border-cyan-400"
          />
        ))}
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Next →
      </button>
      
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">{"Didn't get the code?"}</p>
        <a href="#" className="text-cyan-500 text-xs hover:underline">Resend Code</a>
      </div>
    </div>
  );

  const PlanScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">Choose your monthly membership plan</h2>
      <p className="text-gray-500 text-sm mb-4">Tap a plan below to continue.</p>
      
      <div className="space-y-2 mb-4">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            onClick={() => setSelectedPlan(index)}
            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
              selectedPlan === index 
                ? 'border-cyan-400 bg-cyan-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold text-gray-900 text-sm">{plan.name}</div>
            <div className="text-gray-500 text-xs">${plan.price}.00 / month</div>
          </button>
        ))}
      </div>
      
      <button
        onClick={handleContinue}
        disabled={selectedPlan === null}
        className="w-full bg-cyan-400 hover:bg-cyan-500 disabled:bg-gray-300 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Next →
      </button>
    </div>
  );

  const VehicleScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">Add a vehicle</h2>
      <p className="text-gray-500 text-sm mb-6">{"We'll use this to link your membership to your plate."}</p>
      
      <div className="mb-4">
        <label className="block text-gray-600 text-xs mb-1">License Plate</label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
          placeholder="ABC1234"
          className="w-full px-3 py-3 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-cyan-400 bg-gray-50"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-600 text-xs mb-1">State</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-3 py-3 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:border-cyan-400 bg-white"
        >
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Next →
      </button>
      
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">Need help adding your plate?</p>
        <a href="#" className="text-cyan-500 text-xs hover:underline">Contact support</a>
      </div>
    </div>
  );

  const PersonalInfoScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">{"Let's get you washed"}</h2>
      <p className="text-gray-500 text-sm mb-4">{"We'll use this information to send you a receipt after your visit."}</p>
      
      <div className="space-y-3 mb-4">
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          placeholder="First Name"
          className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400 bg-gray-50"
        />
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          placeholder="Last Name"
          className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400 bg-gray-50"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Email"
          className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400 bg-gray-50"
        />
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          placeholder="Street Address"
          className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            placeholder="City"
            className="px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
          />
          <input
            type="text"
            value={formData.state}
            onChange={(e) => setFormData({...formData, state: e.target.value})}
            placeholder="State"
            className="px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
          />
          <input
            type="text"
            value={formData.zip}
            onChange={(e) => setFormData({...formData, zip: e.target.value})}
            placeholder="ZIP Code"
            className="px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
          />
        </div>
      </div>
      
      <label className="flex items-start gap-2 mb-4 text-xs text-gray-500">
        <input type="checkbox" className="mt-0.5" />
        <span>By checking this box, I agree to the <a href="#" className="text-cyan-500 hover:underline">Terms of Service</a></span>
      </label>
      
      <button
        onClick={handleContinue}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Next →
      </button>
    </div>
  );

  const PaymentScreen = () => (
    <div className="p-6">
      <IDSLogo />
      <h2 className="text-xl font-bold text-gray-900 mb-1">Add a payment method</h2>
      <p className="text-gray-500 text-sm mb-6">{"We'll securely store your card for future billing."}</p>
      
      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-gray-600 text-xs mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-xs mb-1">Expiration</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-xs mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-3 py-2.5 border-b border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
      </div>
      
      <label className="flex items-center gap-2 mb-4 text-xs text-gray-500">
        <input type="checkbox" />
        <span>My billing address is different than my address</span>
      </label>
      
      <button
        onClick={handleContinue}
        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Submit
      </button>
      
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">Need help?</p>
        <a href="#" className="text-cyan-500 text-xs hover:underline">Contact support</a>
      </div>
    </div>
  );

  const SuccessScreen = () => (
    <div className="p-6 text-center">
      <IDSLogo />
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome to IDS Express!</h2>
      <p className="text-gray-500 text-sm mb-4">Your membership is now active. Drive up to any IDS Express Car Wash and enjoy your wash!</p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-500 text-xs mb-1">Member ID</p>
        <p className="text-gray-900 font-mono font-semibold">IDS-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
      </div>
      
      <div className="bg-cyan-50 rounded-lg p-4 mb-6">
        <p className="text-cyan-600 text-xs mb-1">Your Plan</p>
        <p className="text-cyan-700 font-semibold">{selectedPlan !== null ? plans[selectedPlan].name : 'Unlimited Diamond'}</p>
        <p className="text-cyan-600 text-sm">${selectedPlan !== null ? plans[selectedPlan].price : 49}.00/month</p>
      </div>
      
      <button
        onClick={resetDemo}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors"
      >
        Start Over (Demo)
      </button>
    </div>
  );

  const screens = [PhoneScreen, VerificationScreen, PlanScreen, VehicleScreen, PersonalInfoScreen, PaymentScreen, SuccessScreen];
  const CurrentScreenComponent = screens[currentScreen];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/logos/ids-express.png" 
                  alt="IDS Express Car Wash" 
                  className="h-12 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="italic">Membership-driven car wash experience</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                We designed and developed a streamlined membership platform for IDS Express Car Wash, transforming a 5+ minute signup process into a 30-second mobile-first experience.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Platform</span>
                  <p className="text-white">Web App (Mobile-First)</p>
                </div>
                <div>
                  <span className="text-gray-500">Deliverables</span>
                  <p className="text-white">UI/UX, Development, SMS Integration</p>
                </div>
                <div>
                  <span className="text-gray-500">Timeline</span>
                  <p className="text-white">8 Weeks</p>
                </div>
              </div>
            </div>
            
            {/* Live Demo Phone */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-[320px] h-[650px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-cyan-500/20">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                    
                    {/* Screen Content */}
                    <div className="pt-8 h-full overflow-y-auto">
                      <CurrentScreenComponent />
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full" />
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentScreen(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentScreen ? 'bg-cyan-400' : 'bg-gray-600'
                      }`}
                    />
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { value: '+85%', label: 'Member Signups', icon: 'TrendingUp' },
              { value: '+120%', label: 'Recurring Revenue', icon: 'DollarSign' },
              { value: '4.9', label: 'App Store Rating', icon: 'Star' },
              { value: '<30s', label: 'Signup Time', icon: 'Clock' },
              { value: '95%', label: 'Member Retention', icon: 'Users' },
              { value: '50K+', label: 'Active Members', icon: 'Award' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Integration Feature */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                SMS-First Verification
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                We integrated Twilio for seamless SMS verification. Customers receive a 6-digit code instantly, making the signup process feel native and secure.
              </p>
              <ul className="space-y-4">
                {[
                  'No app download required',
                  'Works on any mobile device',
                  'Instant verification delivery',
                  'Auto-fill support on iOS/Android',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="w-3 h-3 text-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* SMS Mockup */}
            <div className="flex justify-center">
              <div className="bg-gray-900 rounded-3xl p-4 w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">78156</p>
                    <p className="text-gray-500 text-xs">SMS/MMS</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl p-4">
                  <p className="text-white text-sm">Your IDS Car Wash verification code is:</p>
                  <p className="text-cyan-400 text-2xl font-bold mt-2">954767</p>
                </div>
                <p className="text-gray-500 text-xs text-center mt-3">9:20 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From transactions to relationships
            </h2>
            <p className="text-gray-400 text-lg">
              IDS Express was losing 70% of potential members during their old signup process. We reimagined the entire flow from the ground up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                <Icon name="X" className="w-5 h-5" />
                Before
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  5+ minute signup process
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  Desktop-only registration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  Email-based verification (low completion)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  Complex multi-page forms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  70% abandonment rate
                </li>
              </ul>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
              <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                <Icon name="Check" className="w-5 h-5" />
                After
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Under 30 seconds to complete
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Mobile-first progressive web app
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  SMS verification (98% delivery rate)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Single-screen focused steps
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  85% completion rate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            5 Tiers of Clean
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We designed a clear pricing structure that makes it easy for customers to choose the right plan for their needs.
          </p>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: 'Silver', price: 16, features: ['Basic wash', 'Free vacuums', 'Glass cleaner'] },
              { name: 'Gold', price: 24, features: ['Triple foam', 'Rain repellent', 'All Silver features'] },
              { name: 'Platinum', price: 29, features: ['Sealer wax', 'Tire shine', 'All Gold features'] },
              { name: 'Paladium', price: 39, features: ['Ceramic coating', '3-layer protection', 'All Platinum features'] },
              { name: 'Diamond', price: 49, features: ['Graphene nano', 'Ultimate protection', 'All Paladium features'], popular: true },
            ].map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-xl p-4 ${plan.popular ? 'bg-cyan-500/20 border-2 border-cyan-500' : 'bg-white/5 border border-white/10'}`}
              >
                {plan.popular && (
                  <div className="text-cyan-400 text-xs font-semibold mb-2">MOST POPULAR</div>
                )}
                <h3 className="text-white font-semibold mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold text-white mb-3">${plan.price}<span className="text-sm text-gray-400">/mo</span></div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-gray-400 text-xs flex items-center gap-2">
                      <Icon name="Check" className="w-3 h-3 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Development Journey
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Customer Research',
                description: 'Interviewed 100+ car wash customers and analyzed signup abandonment data.',
              },
              {
                step: '02',
                title: 'SMS-First Architecture',
                description: 'Built a Twilio-powered verification system with mobile web app foundation.',
              },
              {
                step: '03',
                title: 'POS Integration',
                description: 'Connected to existing car wash systems and license plate recognition cameras.',
              },
              {
                step: '04',
                title: 'Launch & Iteration',
                description: 'Soft launch with 3 locations, then scaled to all sites with 85% higher signup rates.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-cyan-500/30 mb-4">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="AlertCircle" className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Challenge</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  IDS Express Car Wash wanted to modernize their unlimited wash membership system. Their existing process was entirely paper-based, leading to high no-show rates, manual billing issues, and no way to track customer preferences.
                </p>
                <ul className="space-y-3">
                  {[
                    'Paper-based membership management',
                    '40% no-show rate for appointments',
                    'No license plate recognition system',
                    'Manual payment processing each month',
                    'Zero customer engagement data'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="X" className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Solution</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  We built a mobile-first membership platform with license plate recognition, automated billing, and SMS notifications that transformed their customer experience.
                </p>
                <ul className="space-y-3">
                  {[
                    'Mobile app with easy signup flow',
                    'License plate recognition integration',
                    'Automated Stripe recurring billing',
                    'SMS reminders reduce no-shows by 60%',
                    'Customer analytics dashboard'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Results</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The new platform transformed IDS Express operations and customer satisfaction
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: '60%', label: 'Reduction in No-Shows', icon: 'Timer', change: 'Down from 40%' },
              { value: '45%', label: 'Increase in Repeat Customers', icon: 'Users', change: '+45%' },
              { value: '3min', label: 'Average Signup Time', icon: 'Zap', change: 'vs 15min before' },
              { value: '$180K', label: 'Annual Revenue Increase', icon: 'TrendingUp', change: '+35%' }
            ].map((metric, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} className="w-7 h-7 text-cyan-400" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                <span className="text-cyan-400 text-xs font-medium">{metric.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Icon name="Quote" className="w-16 h-16 text-cyan-500/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              "The Lock J Lab team delivered exactly what we needed—a modern membership system that our customers actually enjoy using. Our no-show rate dropped by 60%, and we're seeing more repeat customers than ever. The ROI was clear within the first month."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                JW
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">James Wilson</p>
                <p className="text-gray-400">Operations Director, IDS Express Car Wash</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Coinflow', category: 'Fintech Platform', href: '/work/coinflow', color: 'from-emerald-500 to-teal-500' },
              { name: 'MediBook', category: 'Healthcare Platform', href: '/work/medibook', color: 'from-blue-500 to-cyan-500' },
              { name: 'IDS Staffing', category: 'HR Technology', href: '/work/ids-staffing', color: 'from-orange-500 to-amber-500' }
            ].map((project, i) => (
              <Link key={i} href={project.href} className="group block">
                <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-white text-4xl font-bold opacity-30">{project.name[0]}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Icon name="ArrowRight" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>
                </div>
                <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'React', 'Tailwind CSS', 'Twilio', 'Stripe', 'PostgreSQL', 'Vercel', 'Node.js'].map((tech) => (
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
            Ready to transform your customer experience?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {"Let's build something that converts browsers into loyal customers."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 group"
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
