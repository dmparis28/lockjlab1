// Filename: app/services/design/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import Icon from '../../components/Icon';

export default function DesignPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const offerings = [
    {
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. We design every screen, interaction, and micro-animation.',
      deliverables: ['Complete UI design (all screens)', 'Interactive prototypes', 'Design specifications', 'Developer handoff files'],
      timeline: '3-6 weeks',
    },
    {
      icon: 'Layers',
      title: 'Product Design Sprints',
      description: 'Rapid design iterations to validate ideas fast. Perfect for MVPs or new feature exploration.',
      deliverables: ['User flow diagrams', 'Wireframes', 'High-fidelity mockups', 'Usability test results'],
      timeline: '1-2 weeks',
    },
    {
      icon: 'Star',
      title: 'Brand & Visual Identity',
      description: 'Create a memorable brand that stands out. From logos to complete visual systems.',
      deliverables: ['Logo design (3 concepts)', 'Color palette', 'Typography system', 'Brand guidelines document'],
      timeline: '2-3 weeks',
    },
    {
      icon: 'Settings',
      title: 'Design Systems',
      description: 'Scalable component libraries that ensure consistency across your entire product.',
      deliverables: ['Component library (Figma)', 'Style guide', 'Usage documentation', 'Developer-ready assets'],
      timeline: '4-8 weeks',
    },
  ];

  const packages = [
    {
      name: 'Design Sprint',
      description: 'Fast-track design for a single feature or MVP validation.',
      price: '$8,000 - $15,000',
      duration: '1-2 weeks',
      includes: [
        'User research synthesis',
        'Wireframes & user flows',
        '5-10 high-fidelity screens',
        'Interactive prototype',
        '1 round of revisions',
        'Developer handoff',
      ],
      ideal: 'MVPs, feature exploration, quick validation',
      popular: false,
    },
    {
      name: 'Full Product Design',
      description: 'Complete UI/UX design for web or mobile applications.',
      price: '$25,000 - $60,000',
      duration: '4-8 weeks',
      includes: [
        'User research & personas',
        'Information architecture',
        'Complete wireframe set',
        'Full UI design (all screens)',
        'Interactive prototypes',
        'Usability testing',
        'Design system basics',
        '3 rounds of revisions',
        'Ongoing support during dev',
      ],
      ideal: 'New products, app redesigns, funded startups',
      popular: true,
    },
    {
      name: 'Design Retainer',
      description: 'Ongoing design support for evolving products.',
      price: '$5,000 - $12,000/mo',
      duration: 'Monthly retainer',
      includes: [
        'Dedicated design hours (40-80/mo)',
        'New feature design',
        'Design system maintenance',
        'Usability improvements',
        'A/B test variations',
        'Weekly design reviews',
      ],
      ideal: 'Growing products, ongoing development',
      popular: false,
    },
  ];

  const process = [
    { 
      step: '01', 
      title: 'Discovery', 
      description: 'We learn about your users, goals, and constraints. If you\'ve done strategy work, we build on it.',
      duration: '2-3 days',
    },
    { 
      step: '02', 
      title: 'Wireframing', 
      description: 'Low-fidelity layouts to nail the structure and user flows before visual design.',
      duration: '3-5 days',
    },
    { 
      step: '03', 
      title: 'Visual Design', 
      description: 'High-fidelity UI with your brand, complete with interactions and animations.',
      duration: '1-3 weeks',
    },
    { 
      step: '04', 
      title: 'Testing & Handoff', 
      description: 'Validate with users, refine, and deliver developer-ready assets.',
      duration: '3-5 days',
    },
  ];

  const faqs = [
    {
      question: 'What\'s included in developer handoff?',
      answer: 'We provide Figma files with auto-layout, design tokens (colors, spacing, typography), exportable assets in multiple formats, responsive breakpoints, interaction specifications, and a walkthrough call with your development team. Everything needed to build pixel-perfect.',
    },
    {
      question: 'Do you design for both web and mobile?',
      answer: 'Yes, we design for web (desktop + responsive), iOS, Android, and cross-platform. Many projects include multiple platforms. We design mobile-first when appropriate and ensure consistency across all touchpoints.',
    },
    {
      question: 'How many revisions are included?',
      answer: 'Design Sprints include 1 round, Full Product Design includes 3 rounds. A "round" means consolidated feedback on the full design. We find this approach more effective than unlimited revisions, which often leads to scope creep and decision fatigue.',
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely. We can extend your existing brand into product design, or we can help refresh it if needed. Send us your brand assets during kickoff and we\'ll incorporate them from day one.',
    },
    {
      question: 'What tools do you use?',
      answer: 'Figma is our primary tool for UI design, prototyping, and collaboration. We also use FigJam for workshops, Principle for complex animations, and Loom for async video feedback. All deliverables are in Figma unless you request otherwise.',
    },
    {
      question: 'Do you conduct user testing?',
      answer: 'Full Product Design includes usability testing with 5-8 users. We handle recruiting, testing, analysis, and recommendations. For Design Sprints, testing is available as an add-on. We strongly recommend it—testing always reveals surprises.',
    },
  ];

  const caseStudySnippet = {
    company: 'Coinflow',
    challenge: 'Needed to simplify complex crypto trading for mainstream users while maintaining power-user features',
    solution: 'Conducted user research with 15 traders, designed progressive disclosure UI that scales from beginner to advanced',
    result: '520% increase in active users, 85% reduction in trade execution time, featured in TechCrunch',
    quote: 'The design work completely transformed our product. Users say Coinflow is the easiest crypto platform they\'ve ever used.',
    author: 'Michael Torres',
    role: 'CEO, Coinflow',
  };

  const comparisonData = [
    { feature: 'Design quality', diy: 'Variable', lockj: 'Award-winning', other: 'Good to great' },
    { feature: 'User research', diy: 'Usually skipped', lockj: 'Always included', other: 'Extra cost' },
    { feature: 'Turnaround time', diy: 'Months', lockj: '1-8 weeks', other: '2-4 months' },
    { feature: 'Developer handoff', diy: 'Incomplete', lockj: 'Production-ready', other: 'Varies' },
    { feature: 'Revisions', diy: 'Unlimited chaos', lockj: '1-3 rounds', other: 'Nickel & dimed' },
    { feature: 'Cost', diy: 'Time + tools', lockj: '$8K-$60K', other: '$50K-$200K' },
  ];

  const tools = [
    { name: 'Figma', desc: 'Primary design tool' },
    { name: 'FigJam', desc: 'Workshops & planning' },
    { name: 'Principle', desc: 'Advanced animations' },
    { name: 'Loom', desc: 'Async feedback' },
    { name: 'Maze', desc: 'Usability testing' },
    { name: 'Notion', desc: 'Documentation' },
  ];

  const portfolioStats = [
    { value: '150+', label: 'Apps Designed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '4.9', label: 'Avg User Rating' },
    { value: '50%', label: 'Faster Dev Time' },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <PageHero
        tag="UI/UX Design"
        icon="Palette"
        title="Design That Users"
        titleHighlight="Love & Businesses Trust"
        description="We craft interfaces that are beautiful, intuitive, and built to convert. From first wireframe to developer handoff, we handle it all."
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
            Bad Design Kills Good Products
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            88% of users won&apos;t return to a website after a bad experience. First impressions are made in 50 milliseconds. Your design is your first sales pitch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">High Bounce Rates</div>
              <p className="text-gray-400 text-sm">Users leave before seeing your value</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Support Overload</div>
              <p className="text-gray-400 text-sm">Confused users flood your support team</p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <Icon name="XCircle" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-semibold mb-2">Lost Revenue</div>
              <p className="text-gray-400 text-sm">Poor UX = poor conversion rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive design services from research to developer-ready handoff.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-[#111827] border border-white/10 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                      <Icon name={offering.icon} className="w-7 h-7 text-sky-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{offering.title}</h3>
                  </div>
                  <span className="text-sm text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
                    {offering.timeline}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Deliverables</div>
                  {offering.deliverables.map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-300">
                      <Icon name="CheckCircle" className="w-4 h-4 mr-3 text-sky-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Design Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven approach that delivers beautiful, functional designs on time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-sky-500/20 mb-4">{item.step}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{item.duration}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-sky-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Deliverables Preview */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Handoff Looks Like</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We don&apos;t just hand you a Figma link. You get production-ready designs with everything your developers need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111827] rounded-xl p-6 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-blue-600/10 rounded-lg mb-4 flex items-center justify-center">
                <Icon name="Layers" className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Organized Figma Files</h3>
              <p className="text-gray-400 text-sm">Auto-layout components, named layers, consistent structure</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-6 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-blue-600/10 rounded-lg mb-4 flex items-center justify-center">
                <Icon name="Code" className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design Tokens</h3>
              <p className="text-gray-400 text-sm">Colors, spacing, typography exportable to CSS/Tailwind</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-6 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-blue-600/10 rounded-lg mb-4 flex items-center justify-center">
                <Icon name="PlayCircle" className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interaction Specs</h3>
              <p className="text-gray-400 text-sm">Animations, transitions, hover states documented</p>
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
              Flexible packages to match your project scope and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-b from-sky-600/20 to-[#111827] border-sky-500/50 ring-1 ring-sky-500/20' 
                    : 'bg-[#111827] border-white/10 hover:border-sky-500/30'
                }`}
              >
                {pkg.popular && (
                  <div className="text-sm font-semibold text-sky-400 mb-4 flex items-center">
                    <Icon name="Star" className="w-4 h-4 mr-1 fill-sky-400" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/ {pkg.duration}</span>
                </div>
                <div className="text-sm text-sky-400 bg-sky-500/10 px-3 py-2 rounded-lg mb-6 inline-block">
                  Best for: {pkg.ideal}
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start text-sm text-gray-300">
                      <Icon name="Check" className="w-4 h-4 mr-3 text-sky-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white hover:shadow-lg hover:shadow-sky-500/30'
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

      {/* Tools We Use */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools We Use</h2>
            <p className="text-gray-400 text-lg">Industry-standard tools for seamless collaboration.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-[#111827] rounded-xl p-4 border border-white/10 text-center">
                <div className="text-white font-semibold mb-1">{tool.name}</div>
                <div className="text-gray-500 text-xs">{tool.desc}</div>
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
              See how we compare to in-house design or traditional agencies.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Consideration</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">DIY / Freelance</th>
                  <th className="text-center py-4 px-4 text-sky-400 font-medium bg-sky-500/10 rounded-t-lg">Lock J Lab</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Big Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={index < comparisonData.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.diy}</td>
                    <td className="text-center py-4 px-4 text-white bg-sky-500/5">{row.lockj}</td>
                    <td className="text-center py-4 px-4 text-gray-400">{row.other}</td>
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
          <div className="bg-gradient-to-br from-sky-600/20 to-[#111827] rounded-2xl p-8 md:p-12 border border-sky-500/30">
            <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold mb-6">
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
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">What We Did</div>
                    <p className="text-gray-300">{caseStudySnippet.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Result</div>
                    <p className="text-gray-300">{caseStudySnippet.result}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Icon name="Quote" className="w-10 h-10 text-sky-400 mb-4" />
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
              Everything you need to know about our design services.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm">We hit our deadlines. If we&apos;re late, you get 20% off.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unlimited Small Tweaks</h3>
              <p className="text-gray-400 text-sm">Color changes, spacing adjustments—we don&apos;t nickel and dime.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#111827] border border-white/10">
              <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="HeartHandshake" className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dev Support Included</h3>
              <p className="text-gray-400 text-sm">Questions during build? We&apos;re available throughout development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Design Something Beautiful?
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Book a free 30-minute design consultation. We&apos;ll review your current product and share ideas.
          </p>
          <p className="text-sky-400 text-sm mb-10">
            Bring your Figma files, sketches, or just ideas—we&apos;ll take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-4 px-10 rounded-lg transition duration-300 flex items-center shadow-lg hover:shadow-xl hover:shadow-sky-500/30 group border border-sky-500/50"
            >
              Book Free Consultation
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
