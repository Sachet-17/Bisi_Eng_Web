// ============================================
// BISI ENGINEERING - COMPANY WEBSITE DATA
// ============================================
// 
// IMAGE PATHS: All images are stored in /public/images/
// To update images:
// 1. Add your image to the appropriate folder in /public/images/
// 2. Update the path in this file
// 3. Use format: '/images/[folder]/[filename]'
//
// See /public/images/README.md for detailed guide
// ============================================

// ============================================
// NAVIGATION
// ============================================
export const navigation = {
  logo: 'bisi',
  companyName: 'BISI ENGINEERING',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Our Team', href: '/team' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Clients', href: '/clients' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' }
  ],
  cta: { name: 'Contact us', href: '/contact' }
};

// ============================================
// HOME PAGE
// ============================================
export const heroContent = {
  title: 'Engineering Excellence Since 2004',
  subtitle: 'Specializing in erection, installation, commissioning, operation, maintenance, up-gradation, and renovation of industrial projects and power plants across India.',
  primaryCta: { text: 'Request a quote', href: '/contact' },
  secondaryCta: { text: 'Learn more about us', href: '/about' },
  backgroundImage: '/images/home/hero-bg.jpg'
};

export const statsSection = {
  title: 'Our Track Record of Excellence',
  subtitle: 'Numbers that speak for themselves',
  stats: [
    { value: '27+', label: 'Year experience', description: 'Delivering excellence since 2004' },
    { value: '100+', label: "Happy client's", description: 'Trust us with their projects' },
    { value: '100+', label: 'Projects', description: 'Successfully completed' },
    { value: '800+ cr', label: 'Work completed', description: 'Executed till date' },
    { value: '4300+', label: 'Team members', description: 'Skilled professionals' },
    { value: 'ISO', label: 'Certified', description: '9001:2015 & 45001:2018' }
  ]
};

export const achievementsSection = {
  title: 'Our Achievements',
  achievements: [
    { icon: 'Award', title: 'Govt. of Odisha Approved', description: 'Recognized as Erector and Special Class Boiler Repairer' },
    { icon: 'Shield', title: 'ISO 9001:2015 Certified', description: 'Quality Management System certification' },
    { icon: 'Trophy', title: 'ISO 45001:2018 Certified', description: 'Occupational Health & Safety Management System' },
    { icon: 'Star', title: 'IBR Licensed', description: 'Certified Boiler Erector and Special Class Repairer' }
  ]
};

export const ctaSection = {
  title: "Let's build your industrial vision together.",
  description: 'With over two decades of experience in power plant and industrial construction, we bring your projects to life with precision and expertise.',
  cta: { text: 'Request a quote', href: '/contact' },
  yearsLabel: 'Years of trusted expertise.',
  yearsValue: '20+',
  image: '/images/home/cta-bg.jpg'
};

// ============================================
// ABOUT PAGE
// ============================================
export const aboutPage = {
  hero: {
    title: 'About BISI Engineering',
    subtitle: 'Building trust through excellence and innovation since 2004'
  },
  mdMessage: {
    title: 'Message from the Managing Director',
    name: 'Mr. Sukanta Kumar Bisi',
    position: 'Managing Director',
    image: '/images/about/md-photo.jpg',
    message: `Welcome to BISI Engineering. For over two decades, we have been committed to delivering excellence in every project we undertake.

Founded in 2004, our journey began with a simple vision: to transform the industrial construction sector through innovation, integrity, and unwavering commitment to quality. Today, we stand proud as one of Odisha's leading mechanical contracting companies.

With more than 20 years of business experience across diverse sectors including Construction Projects, Manufacturing, Contracting, and Real Estate, I have personally overseen our growth into a trusted partner for India's leading industrial giants.

We have had the privilege of working with prominent companies such as Hindalco Industries Limited, NTPC, BHEL, Vedanta, Jindal Steel & Power, Bhushan Power & Steel, and many more. Each project has strengthened our expertise and deepened our commitment to excellence.

Our team of highly professional and experienced construction managers, engineers, and technical staff form the backbone of our success. We believe that every structure we build is a testament to our dedication to excellence.

Thank you for considering BISI Engineering for your next project. We look forward to building your vision together.`
  },
  capabilities: {
    title: 'Our Capabilities',
    subtitle: 'Comprehensive solutions for all your industrial construction needs',
    items: [
      { icon: 'Building2', title: 'Erection & Installation', description: 'Fabrication & Erection of Building Structures, Technological Structures for thermal power & steel plants' },
      { icon: 'Factory', title: 'Boiler Systems', description: 'Erection of Boiler and Boiler Auxiliaries including ESP, Fans, Mills, Ducting etc.' },
      { icon: 'Wrench', title: 'Maintenance & Overhauling', description: 'Complete maintenance of Power Plants, Annual Overhauling of Boiler & Rotary Equipment' },
      { icon: 'Landmark', title: 'Pipeline Works', description: 'Large Dia Cooling Water Pipelines, Underground & Inter Plant Pipelines, Steam Pipe lines' },
      { icon: 'Paintbrush', title: 'Commissioning', description: 'Equipment Erection & Commissioning of CRM, CSP, SMS, Wire Rod Mill, Bar Mill, Coal Washery & Power Plants' },
      { icon: 'Home', title: 'Revamping & Renovation', description: 'Revamping of CFBC, AFBC & WHR Boilers, Major modification of Boiler furnace & Pressure parts' }
    ]
  },
  policy: {
    title: 'Our Company Policy',
    subtitle: 'Guiding principles that drive our success',
    policies: [
      { title: 'Conduct of Business', description: 'All business shall be conducted in an efficient, fair, and ethical manner. We respect social norms and environmental standards.' },
      { title: 'Workplace Safety', description: 'Safety of people in the workplace is our primary concern. We ensure compliance with all applicable health and safety norms.' },
      { title: 'Compliance & Standards', description: 'We ensure compliance with applicable accounting standards and tax laws when reporting financial data.' },
      { title: 'Equal Opportunity', description: 'We provide a work environment free from discrimination. Merit is the sole criterion for performance assessment.' },
      { title: 'Client Responsibility', description: 'Complete information about projects, services, and safety requirements are disclosed to clients before awarding a job.' },
      { title: 'Rules & Regulations', description: 'All members must adhere to rules and regulations with strict compliance to code of conduct.' }
    ]
  },
  structure: {
    title: 'Organizational Structure',
    subtitle: 'A strong foundation built on expertise and leadership',
    departments: [
      { name: 'Executive Leadership', head: 'Managing Director' },
      { name: 'Maintenance Division', head: 'General Manager (Maintenance)' },
      { name: 'Projects Division', head: 'General Manager (Project)' },
      { name: 'HR & Administration', head: 'Manager (HR & Admin)' },
      { name: 'Finance & Accounts', head: 'Manager Finance' },
      { name: 'Contract & Commercial', head: 'Manager Contract & Commercial' },
      { name: 'Quality Assurance', head: 'Manager Welding, QA/QC' },
      { name: 'Health, Safety & Environment', head: 'Manager HSE' }
    ]
  }
};

// ============================================
// SERVICES PAGE
// ============================================
export const servicesPage = {
  hero: {
    title: 'Our Services',
    subtitle: 'Comprehensive industrial construction and maintenance solutions'
  },
  services: [
    {
      icon: 'Building2',
      title: 'Erection & Installation',
      description: 'Complete erection and installation services for thermal power plants, steel plants, and industrial facilities with precision engineering.',
      features: [
        'Fabrication & Erection of Building Structures',
        'Technological Structures for thermal power & steel plants',
        'Erection of Heavy Equipment',
        'Pipe Racks Structures & mechanical structures'
      ],
      image: '/images/services/erection.jpg'
    },
    {
      icon: 'Factory',
      title: 'Boiler Systems',
      description: 'Specialized in boiler erection, commissioning, and maintenance with IBR certification and government approval.',
      features: [
        'Erection of Boiler and Boiler Auxiliaries',
        'ESP, Fans, Mills, Ducting installation',
        'CFBC, AFBC & WHR Boiler works',
        'IBR approved welding procedures'
      ],
      image: '/images/services/boiler.jpg'
    },
    {
      icon: 'Wrench',
      title: 'Maintenance & Overhauling',
      description: 'Comprehensive maintenance services for power plants and industrial facilities ensuring optimal performance.',
      features: [
        'Complete Maintenance of Power Plant',
        'Annual Overhauling of Boiler & Rotary Equipment',
        'Shutdown operation & maintenance',
        'Ash Handling System maintenance'
      ],
      image: '/images/services/maintenance.jpg'
    },
    {
      icon: 'Landmark',
      title: 'Pipeline Works',
      description: 'Expert fabrication and erection of industrial pipelines including IBR steam pipelines and cooling water systems.',
      features: [
        'Large Dia Cooling Water Pipelines',
        'Underground & Inter Plant Pipelines',
        'Steam Pipe lines (130 to 100 MW)',
        'Acid Pickling and Oil Flushing'
      ],
      image: '/images/services/pipeline.jpg'
    },
    {
      icon: 'Paintbrush',
      title: 'Equipment Commissioning',
      description: 'End-to-end commissioning services for various industrial equipment and complete plant systems.',
      features: [
        'CRM, CSP, SMS Commissioning',
        'Wire Rod Mill & Bar Mill',
        'Coal Washery & Power Plants',
        'Blast Furnace & Coke Oven Projects'
      ],
      image: '/images/services/commissioning.jpg'
    },
    {
      icon: 'Home',
      title: 'Revamping & Renovation',
      description: 'Breathing new life into existing facilities with expert revamping and renovation services.',
      features: [
        'Revamping of CFBC & AFBC Boilers',
        'WHR Boiler Revamping',
        'Major modification of Boiler furnace',
        'Pressure parts replacement'
      ],
      image: '/images/services/revamping.jpg'
    }
  ]
};

// ============================================
// PROJECTS PAGE
// ============================================
export const projectsPage = {
  hero: {
    title: 'Project Portfolio',
    subtitle: 'Showcasing our commitment to excellence across major industrial projects'
  },
  categories: ['All', 'Power Plant', 'Steel Plant', 'Maintenance', 'Pipeline'],
  projects: [
    {
      title: '5x270 MW BHEL Boiler Erection',
      category: 'Power Plant',
      location: 'Amravati Thermal Power Project, Maharashtra',
      year: '2015-2018',
      value: '₹16.50 Cr',
      description: 'Erection, Testing and Commissioning of 5x270 MW BHEL Boiler UNIT-1, 3 & 5 including Structural, Pressure parts, Non-pressure parts & Rotating Equipment.',
      image: '/images/projects/project-1.jpg'
    },
    {
      title: '6x150 MW BHEL Boiler Erection',
      category: 'Power Plant',
      location: 'Aditya Aluminium Ltd, Lapanga, Sambalpur',
      year: '2012-2016',
      value: '₹27.70 Cr',
      description: 'Erection, Testing and Commissioning of 6 X 150 MW BHEL Boiler UNIT- 3, 4, 5 & 6 (4 Nos) with complete structural and equipment erection.',
      image: '/images/projects/project-2.jpg'
    },
    {
      title: '2x800 MW BHEL Boiler ESP',
      category: 'Power Plant',
      location: 'NTPC Darlipali, Sundargarh, Odisha',
      year: '2018-2020',
      value: '₹8.20 Cr',
      description: 'Erection, Testing and Commissioning of 2 X 800 MW BHEL Boiler UNIT-1 & 2 ESP systems.',
      image: '/images/projects/project-3.jpg'
    },
    {
      title: 'Blast Furnace Project Piping',
      category: 'Steel Plant',
      location: 'Bhushan Power & Steel Ltd, Sambalpur',
      year: '2014-2016',
      value: '₹5.85 Cr',
      description: 'Fabrication, Erection and Commissioning of Blast Furnace (2015 M³) Project Piping including Acid Pickling and Oil Flushing.',
      image: '/images/projects/project-4.jpg'
    },
    {
      title: 'Ash Transporting System',
      category: 'Power Plant',
      location: 'NTPC Talcher Super Thermal Power Station',
      year: '2016-2017',
      value: '₹3.50 Cr',
      description: 'Fabrication, Erection, Testing & Commissioning of Ash Transporting System of 6 X 500 MW Boiler.',
      image: '/images/projects/project-5.jpg'
    },
    {
      title: 'Alumina Extension Project',
      category: 'Pipeline',
      location: 'Utkal Alumina International Limited, Rayagada',
      year: '2017-2018',
      value: '₹7.04 Cr',
      description: 'Fabrication, Shot Blasting, Painting, Erection and Commissioning of Alumina Extension Project.',
      image: '/images/projects/project-6.jpg'
    },
    {
      title: 'CSP Mill & Caster Project',
      category: 'Steel Plant',
      location: 'Bhushan Power & Steel Ltd, Sambalpur',
      year: '2006-2008',
      value: '₹5.78 Cr',
      description: 'Fabrication, Erection and Commissioning of CSP Mill and CSP Caster Project Piping including Acid Pickling and Oil Flushing.',
      image: '/images/projects/project-7.jpg'
    },
    {
      title: 'Annual Boiler Overhauling',
      category: 'Maintenance',
      location: 'OPGC, Banaharpali, Jharsuguda',
      year: '2019-2020',
      value: '₹2.84 Cr',
      description: 'Annual Over hauling work of Boiler & Rotary Parts for Odisha Power Generation Corporation.',
      image: '/images/projects/project-8.jpg'
    },
    {
      title: 'CFBC Boiler Revamping',
      category: 'Maintenance',
      location: 'Bhushan Power & Steel Limited, Lapanga',
      year: '2018-2019',
      value: '₹4.77 Cr',
      description: 'Revamping of 340 TPH & 390 TPH CFBC Boilers with complete pressure parts replacement.',
      image: '/images/projects/project-9.jpg'
    }
  ]
};

// ============================================
// TEAM PAGE
// ============================================
export const teamPage = {
  hero: {
    title: 'Meet Our Team',
    subtitle: 'The talented professionals behind our success'
  },
  leadership: [
    {
      name: 'Mr. Sukanta Kumar Bisi',
      position: 'Managing Director',
      image: '/images/about/md-photo.jpg',
      bio: '20+ years of business experience across diverse sectors',
      linkedin: '#',
      email: 'bisiengineering@ymail.com'
    },
    {
      name: 'Mr. Uttam Ku. Sethy',
      position: 'GM (Maintenance)',
      image: '/images/team/member-2.jpg',
      bio: 'Expert in power plant maintenance operations',
      linkedin: '#',
      email: 'maintenance@bisiengineering.com'
    },
    {
      name: 'Mr. Purandra Mahanta',
      position: 'GM (Project)',
      image: '/images/team/member-3.jpg',
      bio: 'Leading large-scale industrial projects',
      linkedin: '#',
      email: 'projects@bisiengineering.com'
    },
    {
      name: 'Mr. Pullak Kumar Dalai',
      position: 'Manager (HR & Admin)',
      image: '/images/team/member-4.jpg',
      bio: 'Building our world-class workforce',
      linkedin: '#',
      email: 'hr@bisiengineering.com'
    },
    {
      name: 'Mr. Amitt Ku. Panda',
      position: 'Manager Finance',
      image: '/images/team/member-5.jpg',
      bio: 'Financial strategy and management',
      linkedin: '#',
      email: 'finance@bisiengineering.com'
    },
    {
      name: 'Mr. Naufal Kabeer',
      position: 'Manager Welding, QA/QC',
      image: '/images/team/member-6.jpg',
      bio: 'Ensuring quality in every weld',
      linkedin: '#',
      email: 'qaqc@bisiengineering.com'
    },
    {
      name: 'Mr. Rajesh Nayak',
      position: 'Manager Contract & Commercial',
      image: '/images/team/member-7.jpg',
      bio: 'Contract management and commercial operations',
      linkedin: '#',
      email: 'contracts@bisiengineering.com'
    },
    {
      name: 'Mr. Lalat Mangaraj',
      position: 'Manager HSE',
      image: '/images/team/member-8.jpg',
      bio: 'Health, Safety & Environment excellence',
      linkedin: '#',
      email: 'hse@bisiengineering.com'
    }
  ],
  technicalStaff: {
    title: 'Our Technical Strength',
    stats: [
      { role: 'Sr. GM / GM / DGM (Projects)', count: '05' },
      { role: 'Site Manager / Dy. Site Manager', count: '07' },
      { role: 'Asst. Manager (Projects)', count: '03' },
      { role: 'Sr. Engineer / Sr. Supervisor', count: '14' },
      { role: 'Engineer / Supervisor (Projects)', count: '21' },
      { role: 'Engineer / Supervisor (Q.C.)', count: '04' },
      { role: 'Safety Officer / Safety Supervisor', count: '06' }
    ]
  }
};

// ============================================
// CERTIFICATIONS PAGE
// ============================================
export const certificationsPage = {
  hero: {
    title: 'Licenses & Certifications',
    subtitle: 'Recognized excellence and compliance'
  },
  certifications: [
    {
      title: 'ISO 9001:2015',
      category: 'Quality Management',
      issuer: 'International Organization for Standardization',
      year: 'Current',
      description: 'Certified Quality Management System ensuring consistent delivery of quality services across all projects.',
      image: '/images/certifications/iso-9001.jpg'
    },
    {
      title: 'ISO 45001:2018',
      category: 'Health & Safety',
      issuer: 'International Organization for Standardization',
      year: 'Current',
      description: 'Occupational Health & Safety Management System certification demonstrating our commitment to workplace safety.',
      image: '/images/certifications/iso-45001.jpg'
    },
    {
      title: 'Boiler Repairer License',
      category: 'IBR License',
      issuer: 'Government of Odisha',
      year: 'Valid: 2024-2026',
      description: 'Certificate of Recognition as Boiler Repairer (Special Class for any Boiler Pressure).',
      image: '/images/certifications/boiler-repairer.jpg'
    },
    {
      title: 'Boiler Erector License',
      category: 'IBR License',
      issuer: 'Government of Odisha',
      year: 'Valid: 2024-2025',
      description: 'Certificate of Recognition as Boiler Erector under Indian Boiler Regulations.',
      image: '/images/certifications/boiler-erector.jpg'
    },
    {
      title: 'EPF Registration',
      category: 'Statutory Compliance',
      issuer: "Employees' Provident Fund Organisation",
      year: 'Active',
      description: 'Registered with EPFO for employee provident fund compliance.',
      image: '/images/certifications/epf.jpg'
    },
    {
      title: 'ESI Registration',
      category: 'Statutory Compliance',
      issuer: "Employees' State Insurance Corporation",
      year: 'Active',
      description: 'Registered with ESIC for employee state insurance compliance.',
      image: '/images/certifications/esi.jpg'
    }
  ]
};

// ============================================
// CLIENTS PAGE
// ============================================
export const clientsPage = {
  hero: {
    title: 'Our Clients',
    subtitle: 'Trusted partnerships built on excellence'
  },
  intro: 'We are proud to have worked with leading industrial organizations across India. Our commitment to quality and client satisfaction has earned us long-term partnerships with some of the most respected names in the power and steel industry.',
  clientCategories: [
    {
      category: 'Power Sector',
      clients: [
        { name: 'NTPC Limited', logo: '/images/clients/ntpc.png' },
        { name: 'BHEL', logo: '/images/clients/bhel.png' },
        { name: 'OPGC (Odisha Power Generation Corporation)', logo: '/images/clients/opgc.png' },
        { name: 'Power Max', logo: '/images/clients/power-max.png' }
      ]
    },
    {
      category: 'Steel & Metals',
      clients: [
        { name: 'Jindal Steel & Power Limited', logo: '/images/clients/jspl.png' },
        { name: 'Bhushan Power & Steel Limited', logo: '/images/clients/bpsl.png' },
        { name: 'Jindal Stainless Limited (JSL)', logo: '/images/clients/jsl.png' },
        { name: 'Aryan Ispat & Power (P) Ltd.', logo: '/images/clients/aryan.png' }
      ]
    },
    {
      category: 'Aluminium & Mining',
      clients: [
        { name: 'Hindalco Industries Limited', logo: '/images/clients/hindalco.png' },
        { name: 'Aditya Birla Hindalco', logo: '/images/clients/aditya.png' },
        { name: 'Vedanta Aluminium', logo: '/images/clients/vedanta.png' }
      ]
    },
    {
      category: 'Engineering & Construction',
      clients: [
        { name: 'L&T Construction', logo: '/images/clients/lt.png' },
        { name: 'FLSmidth', logo: '/images/clients/flsmidth.png' },
        { name: 'Gannon Dunkerley Co. Limited (GD)', logo: '/images/clients/gannon.png' },
        { name: 'Spiegel Consultants, L.L.C', logo: '/images/clients/spiegel.png' },
        { name: 'Bhavani Erectors Pvt Ltd', logo: '/images/clients/bhavani.png' },
        { name: 'Macawber', logo: '/images/clients/macawber.png' }
      ]
    },
    {
      category: 'Cement & Other Industrial',
      clients: [
        { name: 'ACC Limited', logo: '/images/clients/acc.png' },
        { name: 'Ambuja Cement', logo: '/images/clients/ambuja.png' },
        { name: 'Facor Power Limited', logo: '/images/clients/facor.png' },
        { name: 'MECGALE Pneumatics Pvt. Ltd', logo: '/images/clients/mecgale.png' },
        { name: 'HB', logo: '/images/clients/hb.png' }
      ]
    }
  ]
};

// ============================================
// GALLERY PAGE
// ============================================
export const galleryPage = {
  hero: {
    title: 'Gallery',
    subtitle: 'Visual journey through our projects'
  },
  categories: ['All', 'Power Plants', 'Steel Plants', 'Boiler Works', 'Team'],
  images: [
    { src: '/images/gallery/gallery-1.jpg', category: 'Power Plants', caption: 'NTPC Darlipali - 800 MW Boiler ESP Erection' },
    { src: '/images/gallery/gallery-2.jpg', category: 'Power Plants', caption: 'Aditya Aluminium - 150 MW BHEL Boiler' },
    { src: '/images/gallery/gallery-3.jpg', category: 'Steel Plants', caption: 'Bhushan Steel - Blast Furnace Project' },
    { src: '/images/gallery/gallery-4.jpg', category: 'Boiler Works', caption: 'Boiler Pressure Parts Erection' },
    { src: '/images/gallery/gallery-5.jpg', category: 'Power Plants', caption: 'NTPC Talcher - Ash Handling System' },
    { src: '/images/gallery/gallery-6.jpg', category: 'Team', caption: 'Site Planning Meeting' },
    { src: '/images/gallery/gallery-7.jpg', category: 'Steel Plants', caption: 'CSP Mill Piping Work' },
    { src: '/images/gallery/gallery-8.jpg', category: 'Boiler Works', caption: 'CFBC Boiler Revamping' },
    { src: '/images/gallery/gallery-9.jpg', category: 'Power Plants', caption: 'Steam Pipeline Installation' },
    { src: '/images/gallery/gallery-10.jpg', category: 'Team', caption: 'Leadership Team' },
    { src: '/images/gallery/gallery-11.jpg', category: 'Steel Plants', caption: 'Wire Rod Mill Equipment' },
    { src: '/images/gallery/gallery-12.jpg', category: 'Boiler Works', caption: 'Annual Overhauling Work' }
  ]
};

// ============================================
// TESTIMONIALS PAGE
// ============================================
export const testimonialsPage = {
  hero: {
    title: 'Testimonials',
    subtitle: 'What our clients say about us'
  },
  testimonials: [
    {
      quote: "BISI Engineering has consistently delivered exceptional quality on all our boiler erection projects. Their team's expertise and commitment to timelines make them our preferred contractor.",
      author: 'Project Head',
      position: 'Thermal Power Division',
      company: 'NTPC Limited',
      image: '/images/testimonials/testimonial-1.jpg',
      rating: 5
    },
    {
      quote: "The team at BISI Engineering demonstrated remarkable professionalism during our 6x150 MW boiler erection project. Their attention to detail and safety standards are commendable.",
      author: 'Plant Manager',
      position: 'Operations',
      company: 'Aditya Aluminium Ltd',
      image: '/images/testimonials/testimonial-2.jpg',
      rating: 5
    },
    {
      quote: "Working with BISI Engineering on our steel plant projects has been a seamless experience. They understand complex industrial requirements and deliver beyond expectations.",
      author: 'Technical Director',
      position: 'Projects Division',
      company: 'Bhushan Power & Steel',
      image: '/images/testimonials/testimonial-3.jpg',
      rating: 5
    },
    {
      quote: "BISI Engineering's annual maintenance services have significantly improved our plant efficiency. Their skilled workforce and IBR certifications give us complete confidence.",
      author: 'Maintenance Head',
      position: 'Power Plant',
      company: 'Jindal Steel & Power',
      image: '/images/testimonials/testimonial-4.jpg',
      rating: 5
    },
    {
      quote: "The quality of welding and fabrication work by BISI Engineering meets the highest industry standards. Their IBR approved procedures ensure safe and reliable installations.",
      author: 'QA Manager',
      position: 'Quality Assurance',
      company: 'Hindalco Industries',
      image: '/images/testimonials/testimonial-5.jpg',
      rating: 5
    },
    {
      quote: "From concept to commissioning, BISI Engineering demonstrated exceptional expertise in our alumina extension project. Highly recommended for complex industrial projects.",
      author: 'Project Manager',
      position: 'Expansion Projects',
      company: 'Utkal Alumina International',
      image: '/images/testimonials/testimonial-6.jpg',
      rating: 5
    }
  ]
};

// ============================================
// CONTACT PAGE
// ============================================
export const contactPage = {
  hero: {
    title: 'Contact Us',
    subtitle: "Let's discuss your next project"
  },
  info: {
    address: 'Bisi House, Subhashree Vihar, Near Madanawati Public School, Ainthapali, Sambalpur, Pin - 768004, Odisha',
    phone: '+91 9437082081 / +91 9437071181',
    email: 'bisiengineering@ymail.com',
    altEmail: 'bisiengineering@rediffmail.com',
    hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
  }
};

// ============================================
// FOOTER
// ============================================
export const footerContent = {
  logo: 'bisi',
  companyName: 'BISI ENGINEERING',
  tagline: 'Engineering Excellence Since 2004. Specializing in erection, installation, commissioning, and maintenance of industrial projects.',
  email: 'bisiengineering@ymail.com',
  phone: '+91 9437082081',
  address: 'Bisi House, Subhashree Vihar, Ainthapali, Sambalpur - 768004, Odisha',
  links: [
    {
      title: 'Quick Links',
      items: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'Erection & Installation', href: '/services' },
        { name: 'Boiler Systems', href: '/services' },
        { name: 'Maintenance & Overhauling', href: '/services' },
        { name: 'Pipeline Works', href: '/services' },
        { name: 'Revamping & Renovation', href: '/services' }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Our Team', href: '/team' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Clients', href: '/clients' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Testimonials', href: '/testimonials' }
      ]
    }
  ],
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' }
  ],
  copyright: '© 2024 BISI Engineering. All rights reserved.'
};
