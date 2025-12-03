// Filename: app/data/navdata.js

// --- WORK DATA ---
const allProjects = [
  {
    title: 'Coinflow',
    description: 'Professional cryptocurrency trading dashboard with real-time charts and instant trading.',
    image: 'https://placehold.co/300x200/0d1117/10b981?text=Coinflow',
    href: '/work/coinflow'
  },
  {
    title: 'MediBook',
    description: 'Modern telehealth platform connecting patients with healthcare providers.',
    image: 'https://placehold.co/300x200/f8fafc/3b82f6?text=MediBook',
    href: '/work/medibook'
  },
  {
    title: 'Image Detail Specialists',
    description: 'The nation\'s leading collision center staffing solution with 1,000+ reviews.',
    image: 'https://placehold.co/300x200/1e293b/ef4444?text=IDS+Staffing',
    href: '/work/ids-staffing'
  },
  {
    title: 'IDS Express Car Wash',
    description: 'Membership-driven express car wash platform with easy subscription management.',
    image: 'https://placehold.co/300x200/0891b2/ffffff?text=IDS+Express',
    href: '/work/ids-express'
  },
];

export const workData = {
  layout: 'list',
  sidebar: [
    { id: 'case-studies', name: 'Case Studies', icon: 'FolderOpen', href: '/work' },
  ],
  content: {
    'case-studies': allProjects,
  },
  footer: { text: 'Discover 20+ more case studies', linkText: 'View all case studies', href: '/work' }
};

// --- SERVICES DATA ---
export const servicesData = {
  layout: 'grid',
  sidebar: [
    { id: 'strategy', name: 'Product Strategy', icon: 'Rocket', href: '/services/strategy' },
    { id: 'design', name: 'Design', icon: 'Palette', href: '/services/design' },
    { id: 'development', name: 'Software Development', icon: 'Code', href: '/services/development' }
  ],
  content: {
    'strategy': [
      { title: 'Product Launch Strategy', description: 'Launch at the intersection of business & user goals.', icon: 'Compass', href: '/services/strategy' },
      { title: 'Competitor Analysis Services', description: 'Boost market positioning by learning from competitors.', icon: 'Target', href: '/services/strategy' },
      { title: 'Product Ideation & Roadmapping', description: 'Turn raw ideas into a prioritized, actionable plan.', icon: 'Lightbulb', href: '/services/strategy' },
      { title: 'User Experience Research', description: 'Ground your product decisions in real user insights.', icon: 'Users', href: '/services/strategy' },
    ],
    'design': [
      { title: 'UI/UX Design', description: 'Beautiful and functional interfaces for any platform.', icon: 'Palette', href: '/services/design' },
      { title: 'Interactive Prototyping', description: 'Validate ideas with clickable, high-fidelity prototypes.', icon: 'Layers', href: '/services/design' },
      { title: 'Brand & Visual Identity', description: 'Create a memorable brand that resonates with users.', icon: 'Star', href: '/services/design' },
      { title: 'Design Systems', description: 'Scalable, consistent design languages for your products.', icon: 'Settings', href: '/services/design' },
    ],
    'development': [
      { title: 'Web Application Development', description: 'Robust, scalable web apps using modern frameworks.', icon: 'Monitor', href: '/services/development' },
      { title: 'Mobile App Development', description: 'Native and cross-platform apps for iOS and Android.', icon: 'Smartphone', href: '/services/development' },
      { title: 'API & Backend Development', description: 'Secure, efficient, and scalable backend systems.', icon: 'Database', href: '/services/development' },
      { title: 'Cloud Infrastructure', description: 'Deploy and scale on AWS, GCP, or Azure.', icon: 'Cloud', href: '/services/development' },
    ],
  },
  footer: { text: 'Explore all our services', linkText: 'View all services', href: '/services' }
};

// --- CLIENTS DATA ---
export const clientsData = {
  layout: 'grid',
  sidebar: [
    { id: 'startups', name: 'Startups', icon: 'Rocket', href: '/services' },
    { id: 'enterprise', name: 'Enterprise', icon: 'Building2', href: '/services' },
    { id: 'nonprofit', name: 'Nonprofits', icon: 'Heart', href: '/services' },
  ],
  content: {
    'startups': [
      { title: 'MVP Development', description: 'Launch your minimum viable product in weeks, not months.', icon: 'Zap', href: '/services/development' },
      { title: 'Pitch Deck Design', description: 'Compelling visual stories for investor presentations.', icon: 'TrendingUp', href: '/services/design' },
      { title: 'Product-Market Fit', description: 'Validate and refine your product with real users.', icon: 'Target', href: '/services/strategy' },
      { title: 'Growth Engineering', description: 'Technical solutions to accelerate user acquisition.', icon: 'BarChart3', href: '/services/development' },
    ],
    'enterprise': [
      { title: 'Digital Transformation', description: 'Modernize legacy systems and processes.', icon: 'Repeat', href: '/services/development' },
      { title: 'Custom Software Solutions', description: 'Tailored applications for complex business needs.', icon: 'Code', href: '/services/development' },
      { title: 'Data Visualization & Dashboards', description: 'Transforming complex data sets into intuitive visuals.', icon: 'BarChart3', href: '/services/design' },
      { title: 'Internal Workflow Optimization', description: 'Building custom software to improve operational efficiency.', icon: 'Gauge', href: '/services/strategy' },
    ],
    'nonprofit': [
      { title: 'Accessible Design', description: 'WCAG-compliant interfaces for all users.', icon: 'Users', href: '/services/design' },
      { title: 'Donation Platforms', description: 'Seamless giving experiences that increase contributions.', icon: 'Heart', href: '/services/development' },
      { title: 'Impact Reporting', description: 'Visualize and communicate your organization\'s impact.', icon: 'BarChart3', href: '/services/design' },
      { title: 'Volunteer Management', description: 'Tools to coordinate and engage your volunteers.', icon: 'UserCheck', href: '/services/development' },
    ],
  },
  footer: { text: 'Discover 10+ more industries we\'ve worked with', linkText: 'View all', href: '/work' }
};

// --- RESOURCES DATA ---
export const resourcesData = {
  layout: 'list',
  sidebar: [
    { id: 'blog', name: 'Blog', icon: 'Newspaper', href: '/resources' },
    { id: 'guides', name: 'Guides & Ebooks', icon: 'BookOpen', href: '/resources' },
    { id: 'templates', name: 'Templates & Tools', icon: 'FileCode', href: '/resources' },
  ],
  content: {
    'blog': [
      { title: 'How to Choose the Right AI Software Development Company in 2025', description: 'If you choose the wrong AI software development company, it can seriously derail your project...', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=AI+Strategy', href: '/resources' },
      { title: 'Lock J Lab Expands UX and Accessibility Services to Empower Nonprofits', description: 'Los Angeles, California - May 28, 2025 - Lock J Lab expands its services...', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=UX+Expansion', href: '/resources' },
      { title: 'The Complete Guide to UX Audits (And Why They Matter More Than Ever)', description: 'User experience is make-or-break. Whether you\'re battling user drop-off...', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=UX+Audit', href: '/resources' },
    ],
    'guides': [
      { title: 'The Ultimate Guide to MVP Development in 2025', description: 'A step-by-step playbook for launching your minimum viable product successfully.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=MVP+Guide', href: '/resources' },
      { title: 'Scaling Your SaaS: Infrastructure Best Practices', description: 'Learn how to design and implement a scalable infrastructure for your growing SaaS.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=SaaS+Scaling', href: '/resources' },
      { title: 'Designing for Accessibility (WCAG 2.1)', description: 'Ensure your digital products are inclusive and accessible to all users.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=Accessibility', href: '/resources' },
    ],
    'templates': [
      { title: 'Free Product Requirements Document (PRD) Template', description: 'Kickstart your project with our proven PRD template.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=PRD+Template', href: '/resources' },
      { title: 'Competitor Analysis Spreadsheet', description: 'A structured spreadsheet to analyze your competitors.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=Analysis+Tool', href: '/resources' },
      { title: 'UX Audit Checklist', description: 'A comprehensive checklist to evaluate user experience.', image: 'https://placehold.co/300x150/1e293b/94a3b8?text=UX+Checklist', href: '/resources' },
    ],
  },
  footer: { text: 'Discover 200+ more resources', linkText: 'View all resources', href: '/resources' }
};

// --- ABOUT DATA ---
export const aboutData = {
  layout: 'grid',
  sidebar: [
    { id: 'company', name: 'Company', icon: 'Building2', href: '/about' },
    { id: 'locations', name: 'Locations', icon: 'Globe', href: '/contact' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle', href: '/faq' },
  ],
  content: {
    'company': [
      { title: 'About Lock J Lab', description: 'For over a decade, we\'ve helped startups, nonprofits, and corporations build impactful products.', icon: 'Info', href: '/about' },
      { title: 'Careers', description: 'Build the career you want with Lock J Lab. Find fulfillment and create impact.', icon: 'Briefcase', href: '/careers' },
      { title: 'Press & Media', description: 'Catch up on our latest company news and announcements.', icon: 'Newspaper', href: '/resources' },
      { title: 'Pricing & Engagement Models', description: 'Tailored pricing for your needs. Custom-built products to help you scale.', icon: 'DollarSign', href: '/pricing' },
      { title: 'Our Process', description: 'We leverage product strategy, UX research, UI/UX design, and development seamlessly.', icon: 'Repeat', href: '/process' },
    ],
    'locations': [
      { title: 'New York (HQ)', description: '123 Tech Avenue, New York, NY 10001. Our main hub for strategy and design.', icon: 'MapPin', href: '/contact' },
      { title: 'San Francisco', description: '456 Innovation Drive, San Francisco, CA 94105. Focused on cutting-edge technology.', icon: 'MapPin', href: '/contact' },
      { title: 'London, UK', description: '789 Digital Lane, London, UK EC1A 1BB. Serving our European clients.', icon: 'MapPin', href: '/contact' },
      { title: 'Remote & Global', description: 'We utilize a global talent pool to deliver exceptional results around the clock.', icon: 'Globe', href: '/careers' },
    ],
    'faq': [
      { title: 'How long does it take to build an MVP?', description: 'Typically, an MVP takes 3-6 months, depending on complexity and scope.', icon: 'Gauge', href: '/faq' },
      { title: 'What is your typical team structure?', description: 'We assign a PM, UX/UI Designer, Tech Lead, and 2-4 Developers.', icon: 'Building2', href: '/faq' },
      { title: 'Do you offer post-launch support?', description: 'Yes, we offer various support and maintenance packages.', icon: 'ShieldCheck', href: '/faq' },
      { title: 'What technologies do you specialize in?', description: 'We specialize in React, Node.js, Python, Swift, and Kotlin.', icon: 'Code', href: '/faq' },
    ],
  },
  callouts: {
    'faq': {
      tag: 'Still have questions?',
      title: 'Talk to a Solutions Architect',
      description: 'Get detailed answers regarding your specific project needs.',
      linkText: 'Contact Us',
      link: '/contact'
    },
  }
};
