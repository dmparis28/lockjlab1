// Filename: app/services/development/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export default function DevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('web');

  const offerings = [
    {
      icon: 'Monitor',
      title: 'Web Application Development',
      description: 'Modern, responsive web apps built with React, Next.js, or Vue. From marketing sites to complex SaaS platforms.',
      deliverables: ['Production-ready codebase', 'Admin dashboard', 'API integrations', 'Performance optimization'],
      timeline: '6-12 weeks',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile App Development',
      description: 'Native iOS, Android, or cross-platform apps. We build for performance and user experience.',
      deliverables: ['iOS & Android apps', 'App Store submission', 'Push notifications', 'Analytics integration'],
      timeline: '8-16 weeks',
    },
    {
      icon: 'Database',
      title: 'Backend & API Development',
      description: 'Scalable backend systems, REST/GraphQL APIs, and database architecture that grows with you.',
      deliverables: ['API documentation', 'Database design', 'Authentication system', 'Third-party integrations'],
      timeline: '4-10 weeks',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Infrastructure & DevOps',
      description: 'AWS, GCP, or Azure deployment with CI/CD pipelines, monitoring, and auto-scaling.',
      deliverables: ['Cloud architecture', 'CI/CD pipeline', 'Monitoring setup', 'Security hardening'],
      timeline: '2-4 weeks',
    },
  ];

  const packages = [
    {
      name: 'MVP Build',
      description: 'Launch your first version and start learning from real users.',
      price: '$25,000 - $50,000',
      duration: '6-8 weeks',
      includes: [
        'Core feature development',
        'Basic admin panel',
        'User authentication',
        'Responsive design implementation',
        'Cloud deployment',
        'Basic analytics',
        '30 days bug fixes',
      ],
      ideal: 'Startups validating product-market fit',
      popular: false,
    },
    {
      name: 'Full Product Build',
      description: 'Complete development of your web or mobile application.',
      price: '$50,000 - $150,000',
      duration: '10-16 weeks',
      includes: [
        'Everything in MVP Build',
        'Advanced features & integrations',
        'Payment processing',
        'Advanced admin dashboard',
        'Performance optimization',
        'Security audit',
        'CI/CD pipeline',
        '90 days bug fixes',
        'Documentation & training',
      ],
      ideal: 'Funded startups, enterprise projects',
      popular: true,
    },
    {
      name: 'Development Retainer',
      description: 'Ongoing development support for live products.',
      price: '$10,000 - $25,000/mo',
      duration: 'Monthly retainer',
      includes: [
        'Dedicated dev team (2-4 devs)',
        'New feature development',
        'Bug fixes & maintenance',
        'Performance monitoring',
        'Security updates',
        'Weekly progress reports',
        'Flexible hour allocation',
      ],
      ideal: 'Products in growth phase',
      popular: false,
    },
  ];

  const techStacks = {
    web: {
      title: 'Web Development',
      technologies: [
        { name: 'React', type: 'Frontend' },
        { name: 'Next.js', type: 'Frontend' },
        { name: 'Vue.js', type: 'Frontend' },
        { name: 'TypeScript', type: 'Language' },
        { name: 'Tailwind CSS', type: 'Styling' },
        { name: 'Node.js', type: 'Backend' },
        { name: 'PostgreSQL', type: 'Database' },
        { name: 'MongoDB', type: 'Database' },
      ],
    },
    mobile: {
      title: 'Mobile Development',
      technologies: [
        { name: 'React Native', type: 'Cross-platform' },
        { name: 'Flutter', type: 'Cross-platform' },
        { name: 'Swift', type: 'iOS Native' },
        { name: 'Kotlin', type: 'Android Native' },
        { name: 'Firebase', type: 'Backend' },
        { name: 'Expo', type: 'Tooling' },
      ],
    },
    backend: {
      title: 'Backend & APIs',
      technologies: [
        { name: 'Node.js', type: 'Runtime' },
        { name: 'Python', type: 'Language' },
        { name: 'Go', type: 'Language' },
        { name: 'GraphQL', type: 'API' },
        { name: 'REST', type: 'API' },
        { name: 'Redis', type: 'Cache' },
        { name: 'Elasticsearch', type: 'Search' },
      ],
    },
    cloud: {
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', type: 'Cloud' },
        { name: 'Google Cloud', type: 'Cloud' },
        { name: 'Vercel', type: 'Hosting' },
        { name: 'Docker', type: 'Containers' },
        { name: 'Kubernetes', type: 'Orchestration' },
        { name: 'GitHub Actions', type: 'CI/CD' },
        { name: 'Terraform', type: 'IaC' },
      ],
    },
  };

  const process = [
    { 
      step: '01', 
      title: 'Technical Planning', 
      description: 'We analyze requirements, choose the right tech stack, and create a detailed technical spec.',
      duration: '3-5 days',
    },
    { 
      step: '02', 
      title: 'Sprint Development', 
      description: 'We work in 2-week sprints with weekly demos. You see progress and can adjust priorities.',
      duration: 'Ongoing',
    },
    { 
      step: '03', 
      title: 'Testing & QA', 
      description: 'Continuous testing throughout development. We catch bugs before you do.',
      duration: 'Continuous',
    },
    { 
      step: '04', 
      title: 'Deployment & Support', 
      description: 'We deploy to production, monitor for issues, and provide ongoing support.',
      duration: '1 week + ongoing',
    },
  ];

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'We\'re experts in React, Next.js, Node.js, React Native, and AWS. We also work with Vue.js, Python, Go, Flutter, and other modern technologies. We choose the best stack for your specific needs—not what\'s trendy.',
    },
    {
      question: 'How do you handle project management?',
      answer: 'We use agile methodology with 2-week sprints. You get weekly demo calls to see progress, a shared project board (Linear or Jira), daily standups with our team, and a dedicated project manager. Full transparency throughout.',
    },
    {
      question: 'What happens if we need changes mid-project?',
      answer: 'Changes are normal and expected. We build in flexibility with our sprint model. Small changes are absorbed into current sprints. Larger scope changes get documented, estimated, and prioritized with you. No surprises.',
    },
    {
      question: 'Do you provide source code and documentation?',
      answer: 'Absolutely. You own 100% of the code. We provide full source code in a GitHub repository, technical documentation, deployment guides, and a walkthrough with your team. The code is yours to maintain, modify, or hand off.',
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'Every line of code goes through code review. We write automated tests, use linting and formatting tools, and follow industry best practices. Our code is clean, documented, and maintainable by any competent developer.',
    },
    {
      question: 'What about security?',
      answer: 'Security is built-in, not bolted on. We follow OWASP guidelines, implement proper authentication, encrypt sensitive data, and conduct security audits. For healthcare or fintech, we ensure compliance with HIPAA, PCI-DSS, etc.',
    },
    {
      question: 'Can you work with our existing codebase?',
      answer: 'Yes. We regularly take over or augment existing projects. We\'ll audit your current code, identify issues, and propose a plan. Sometimes a rewrite is more cost-effective, sometimes it\'s not—we\'ll give you an honest assessment.',
    },
    {
      question: 'What\'s included in post-launch support?',
      answer: 'MVP builds include 30 days of bug fixes. Full Product builds include 90 days. After that, we offer maintenance retainers starting at $2,500/month for ongoing support, updates, and small enhancements.',
    },
  ];

  const caseStudySnippet = {
    company: 'IDS Express',
    challenge: 'Replace outdated paper-based system with modern membership platform that integrates license plate recognition',
    solution: 'Built React Native app with Stripe integration, custom LPR system, and admin dashboard in 10 weeks',
    result: '60% reduction in no-shows, 45% increase in repeat customers, $180K additional annual revenue',
    quote: 'They delivered a system that completely transformed our business. The ROI was clear within the first month.',
    author: 'James Wilson',
    role: 'Owner, IDS Express',
  };

  const comparisonData = [
    { feature: 'Development speed', offshore: '20-30% slower', lockj: 'On time, every time', bigAgency: '2-3x timeline' },
    { feature: 'Communication', offshore: 'Timezone issues', lockj: 'Same timezone, fluent English', bigAgency: 'Account managers' },
    { feature: 'Code quality', offshore: 'Variable', lockj: 'Production-grade', bigAgency: 'Good but expensive' },
    { feature: 'Flexibility', offshore: 'Contract-bound', lockj: 'Sprint-based pivots', bigAgency: 'Change orders' },
    { feature: 'Cost', offshore: '$20-40K', lockj: '$25K-$150K', bigAgency: '$150K-$500K' },
    { feature: 'Post-launch support', offshore: 'Limited', lockj: 'Included', bigAgency: 'Separate contract' },
  ];

  const portfolioStats = [
    { value: '50+', label: 'Products Shipped' },
    { value: '10M+', label: 'Users Supported' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<3s', label: 'Avg Load Time' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="Software Development"
        icon="Code"
        title="Code That Ships,"
        titleHighlight="Products That Scale"
        description="We build robust, maintainable software that performs on day one and scales to millions. From MVPs to enterprise systems."
        size="lg"
      />

      {/* Trust Indicators */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Most Development Projects Fail
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            70% of software projects come in late. 50% exceed budget by 2x or more. Technical debt cripples products within 2 years. It doesn&apos;t have to be this way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Missed Deadlines</div>
              <p className="text-gray-400 text-sm">&quot;Just 2 more weeks&quot; becomes 6 months</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Technical Debt</div>
              <p className="text-gray-400 text-sm">Quick fixes today, expensive rewrites tomorrow</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Scaling Nightmares</div>
              <p className="text-gray-400 text-sm">Success kills products not built to scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-stack development from frontend to infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                      <Icon name={offering.icon} className="w-7 h-7 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                  </div>
                  <span className="text-sm text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
                    {offering.timeline}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">What You Get</div>
                  {offering.deliverables.map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-3 text-teal-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern, battle-tested technologies chosen for performance, scalability, and developer happiness.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(techStacks).map(([key, stack]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === key
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                }`}
              >
                {stack.title}
              </button>
            ))}
          </div>
          
          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStacks[activeTab].technologies.map((tech) => (
              <div key={tech.name} className="bg-[#111827] rounded-xl p-4 border border-white/10">
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-gray-500 text-sm">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Agile development with complete transparency. You&apos;ll never wonder what&apos;s happening.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-teal-500/20 mb-4">{item.step}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{item.duration}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-teal-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
          
          {/* What You'll See */}
          <div className="mt-16 bg-[#111827] rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">What You&apos;ll Receive Throughout Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-teal-400 font-semibold mb-2">Weekly</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Demo calls with working software</li>
                  <li>• Progress reports</li>
                  <li>• Updated timeline</li>
                </ul>
              </div>
              <div>
                <div className="text-teal-400 font-semibold mb-2">Daily</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Slack/Teams access</li>
                  <li>• Standup summaries</li>
                  <li>• GitHub activity</li>
                </ul>
              </div>
              <div>
                <div className="text-teal-400 font-semibold mb-2">Anytime</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Project board access</li>
                  <li>• Staging environment</li>
                  <li>• Direct team contact</li>
                </ul>
              </div>
              <div>
                <div className="text-teal-400 font-semibold mb-2">At Completion</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Full source code</li>
                  <li>• Technical documentation</li>
                  <li>• Team walkthrough</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Options</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparent pricing based on project scope. No hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-b from-teal-600/20 to-[#111827] border-teal-500/50 ring-1 ring-teal-500/20' 
                    : 'bg-[#111827] border-white/10 hover:border-teal-500/30'
                }`}
              >
                {pkg.popular && (
                  <div className="text-sm font-semibold text-teal-400 mb-4 flex items-center">
                    <Icon name="Star" className="w-4 h-4 mr-1 fill-teal-400" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/ {pkg.duration}</span>
                </div>
                <div className="text-sm text-teal-400 bg-teal-500/10 px-3 py-2 rounded-lg mb-6 inline-block">
                  Best for: {pkg.ideal}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start text-sm text-gray-300">
                      <Icon name="Check" className="w-4 h-4 mr-3 text-teal-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:shadow-lg hover:shadow-teal-500/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how we compare to offshore teams and enterprise agencies.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Consideration</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Offshore Teams</th>
                  <th className="text-center py-4 px-4 text-teal-400 font-medium bg-teal-500/10 rounded-t-lg">Lock J Lab</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Enterprise Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index < comparisonData.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.offshore}</td>
                    <td className="text-center py-4 px-4 text-white bg-teal-500/5">{row.lockj}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.bigAgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600/20 to-[#111827] rounded-2xl p-8 md:p-12 border border-teal-500/30">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold mb-6">
              <Icon name="Trophy" className="w-5 h-5" />
              SUCCESS STORY
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudySnippet.company}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Challenge</div>
                    <p className="text-gray-300">{caseStudySnippet.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">What We Built</div>
                    <p className="text-gray-300">{caseStudySnippet.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Result</div>
                    <p className="text-gray-300">{caseStudySnippet.result}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Icon name="Quote" className="w-10 h-10 text-teal-400 mb-4" />
                <blockquote className="text-xl text-white italic mb-6">
                  &quot;{caseStudySnippet.quote}&quot;
                </blockquote>
                <div>
                  <div className="text-white font-semibold">{caseStudySnippet.author}</div>
                  <div className="text-gray-400 text-sm">{caseStudySnippet.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our development services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <Icon 
                    name={openFaq === index ? 'ChevronUp' : 'ChevronDown'} 
                    className="w-5 h-5 text-gray-400 flex-shrink-0" 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Guarantees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">On-Time</h3>
              <p className="text-gray-400 text-sm">Late = 20% off</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bug-Free Launch</h3>
              <p className="text-gray-400 text-sm">30-90 day warranty</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCode" className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Ownership</h3>
              <p className="text-gray-400 text-sm">Code is yours forever</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gauge" className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">&lt;3s load time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Book a free 30-minute technical consultation. We&apos;ll review your project and provide an honest assessment.
          </p>
          <p className="text-teal-400 text-sm mb-10">
            Bring your designs, specs, or just ideas—we&apos;ll figure out the rest together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-teal-500/30 group border border-teal-500/50"
            >
              Book Technical Consultation
              <Icon name="ArrowRight" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-lg border border-white/20 transition duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
