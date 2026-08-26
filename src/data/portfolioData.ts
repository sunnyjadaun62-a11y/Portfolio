import { ProjectItem, ExperienceItem, SkillCategory, StatArcData } from '../types/portfolio';
import heroImg2 from '../assets/hero-img-2.png';
import heroBgImg from '../assets/hero-bg-img-2.png';
import aboutPortrait from '../assets/about-portrait.jpg';
import leadDevWorkspace from '../assets/lead-dev-workspace.jpg';
import webxrSpatialVision from '../assets/webxr-spatial-vision.jpg';
import erpOpticsProject from '../assets/erp-optics-project.jpg';
import wppAutomationProject from '../assets/wpp-automation-project.jpg';
import immarsifyArProject from '../assets/immarsify-ar-project.jpg';
import skillsCodeHands from '../assets/skills-code-hands.jpg';
import contactPortrait from '../assets/contact-portrait.jpg';
import leadershipTeamCollab from '../assets/leadership-team-collab.jpg';
import fullstackCloudPortal from '../assets/fullstack-cloud-portal.jpg';
import sunnyAboutCutout from '../assets/bg-remove-4.png';
import sunnyWebxrCutout from '../assets/bg-remove-3.png';
import sunnyLeadCutout from '../assets/bg-remove-2.png';
import sunnyPortraitCutout from '../assets/bg-remove.png';

export const HERO_ASSETS = {
  BG_IMAGE_1: heroImg2,
  BG_IMAGE_2: heroBgImg,
  LOGO_PATH: "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
};

export const PORTFOLIO_IMAGES = {
  aboutPortrait,
  leadDevWorkspace,
  webxrSpatialVision,
  erpOpticsProject,
  wppAutomationProject,
  immarsifyArProject,
  skillsCodeHands,
  contactPortrait,
  leadershipTeamCollab,
  fullstackCloudPortal,
  sunnyAboutCutout,
  sunnyWebxrCutout,
  sunnyLeadCutout,
  sunnyPortraitCutout,
};

export const PERSONAL_INFO = {
  name: "SUNNY JADAUN",
  role: "Full-Stack / Lead Developer",
  specialization: "React.js, Node.js & WebXR Specialist",
  email: "sunnyjadaun63@gmail.com",
  phone: "+91-7302854849",
  github: "https://github.com/sunnyjadaun63",
  location: "India • Remote Worldwide",
  availability: "AVAILABLE FOR FULL-TIME / LEAD ROLES",
  avatar: sunnyAboutCutout,
  contactAvatar: contactPortrait,
  tagline: "Architecting high-performance web platforms, enterprise ERP applications, and interactive 3D/AR digital experiences.",
  summary: "Accomplished Full-Stack and Frontend Lead Developer with 4+ years of experience architecting high-performance web platforms, enterprise ERP applications, and interactive 3D/AR digital experiences. Proven track record leading cross-functional engineering teams, designing resilient RESTful microservices with Node.js/Express, and building responsive, accessible client interfaces with React.js and Next.js. Specialized expertise in WhatsApp Business API integrations, state management, and immersive spatial web technologies (Three.js, A-Frame, MindAR)."
};

export const HERO_STATS: StatArcData[] = [
  {
    r: 330,
    startAngle: -92,
    endAngle: 16,
    dotAngle: -46,
    value: "4",
    suffix: "+",
    label: "YEARS EXP"
  },
  {
    r: 395,
    startAngle: -56,
    endAngle: 60,
    dotAngle: 2,
    value: "15",
    suffix: "+",
    label: "PROJECTS"
  },
  {
    r: 460,
    startAngle: -14,
    endAngle: 72,
    dotAngle: 44,
    value: "99",
    suffix: "%",
    label: "UPTIME & CSAT"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "digi-wholesale",
    title: "DigiWholesale Optics ERP",
    subtitle: "Enterprise B2B Optical Supply Chain & Precision Matrix",
    year: "2026",
    category: "ERP Platform",
    image: erpOpticsProject,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Architected an end-to-end enterprise B2B platform tailored for the optical industry, connecting wholesalers with retail stores across dedicated role-based portals.",
    highlights: [
      "Real-time multi-warehouse optical inventory with prescription calculations (SPH, CYL, AXIS).",
      "Automated multi-tier billing workflows with instant GST compliance and tax calculation engine.",
      "High-throughput sub-second catalog querying with Redis caching and MongoDB aggregation pipelines."
    ],
    metrics: "<0.4s Query Latency • 100% Tax Accuracy",
    status: "PRODUCTION",
    accentColor: "#ef4444"
  },
  {
    id: "digi-wpp-connect",
    title: "DigiWPPConnect Automation",
    subtitle: "Enterprise WhatsApp Messaging & Webhook Orchestration",
    year: "2026",
    category: "API Automation",
    image: wppAutomationProject,
    stack: ["React.js", "Node.js", "Express.js", "WhatsApp Business API", "Redis"],
    description: "Centralized automation dashboard for managing high-volume WhatsApp broadcast campaigns, automated optical invoice delivery, and intelligent message queues.",
    highlights: [
      "Asynchronous queuing mechanism managing strict rate limits and ensuring zero-packet drop message delivery.",
      "Dynamic template generation engine supporting rich interactive media payloads and quick button triggers.",
      "Real-time webhook listener architecture with automated retry mechanisms and delivery telemetry."
    ],
    metrics: "50k+ Msgs/Hr • 99.9% Delivery Rate",
    status: "PRODUCTION",
    accentColor: "#22c55e"
  },
  {
    id: "immarsify-ar",
    title: "Immarsify AR Digital Cards",
    subtitle: "WebXR & Marker-Based Augmented Reality Experience",
    year: "2024-25",
    category: "WebXR & 3D",
    image: immarsifyArProject,
    stack: ["Three.js", "A-Frame", "MindAR", "WebGL", "JavaScript ES6+"],
    description: "Zero-install browser-based image-tracking AR application rendering interactive 3D spatial avatars, multimedia links, and digital contact cards on physical business cards.",
    highlights: [
      "Browser-native WebGL and MindAR execution enabling 60 FPS spatial rendering without downloading any mobile app.",
      "Optimized 3D geometry and shader pipelines for ultra-fast mobile browser loading over mobile networks.",
      "Interactive touch gesture support for rotating and inspecting 3D holographic models in real time."
    ],
    metrics: "60 FPS Fluid AR • Zero App Downloads",
    status: "LIVE DEMO",
    accentColor: "#06b6d4"
  },
  {
    id: "liiqwise",
    title: "Liiqwise Matching Engine",
    subtitle: "Advanced Multi-Parameter Filter & State Architecture",
    year: "2025",
    category: "Full-Stack Web",
    image: fullstackCloudPortal,
    stack: ["React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    description: "High-engagement discovery platform implementing sophisticated multi-parameter filtering algorithms across lifestyle, interests, and profile metrics with real-time UI state updates.",
    highlights: [
      "Optimized client-side state machine with Redux Toolkit for instantaneous filtering without re-render lag.",
      "Custom swipe gestures and responsive micro-interactions powered by hardware-accelerated CSS transforms.",
      "Enterprise security practices with encrypted profile token validation and data sanitization."
    ],
    metrics: "25% Higher User Engagement • Instant Filters",
    status: "DEPLOYED",
    accentColor: "#ec4899"
  },
  {
    id: "royal-canin-web",
    title: "Royal Canin Global Portal",
    subtitle: "High-Performance Frontend & Asset Optimization",
    year: "2023",
    category: "Full-Stack Web",
    image: fullstackCloudPortal,
    stack: ["React.js", "Node.js", "Figma to Code", "Vite", "SEO Engine"],
    description: "Engineered official global frontend components for Royal Canin with pixel-perfect responsive execution and maximum Core Web Vitals optimization.",
    highlights: [
      "Streamlined asset delivery pipelines cutting initial bundle load times by 30%.",
      "Achieved 98+ Google Lighthouse scores across Performance, Accessibility, and SEO metrics.",
      "Seamless RESTful endpoint integrations with authenticated customer preference panels."
    ],
    metrics: "98+ Lighthouse Score • 30% Faster Bundle",
    status: "DEPLOYED",
    accentColor: "#f59e0b"
  },
  {
    id: "skulam-erp",
    title: "Skulam Educational ERP & CreditsIn",
    subtitle: "Institutional Management System & Real-Time Utility Tool",
    year: "2022-23",
    category: "ERP Platform",
    image: erpOpticsProject,
    stack: ["React.js", "JavaScript ES6+", "RESTful APIs", "Tailwind CSS"],
    description: "Engineered institutional modules for admissions, grading, and administrative workflows, along with the real-time credit score analysis tool CreditsIn.",
    highlights: [
      "Refactored legacy vanilla JavaScript codebases into modern React functional components with custom hooks.",
      "Implemented modular, accessible UI design system compliant with WCAG 2.1 AA guidelines.",
      "Built real-time calculations for academic grading curves and credit risk algorithms."
    ],
    metrics: "40% Less Tech Debt • 100% Accessible",
    status: "DEPLOYED",
    accentColor: "#8b5cf6"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "digibysr",
    role: "Full Stack / Lead Developer",
    company: "DigiBySR",
    location: "Remote",
    period: "01/2026 – Present",
    badge: "LEAD DEVELOPER",
    image: leadDevWorkspace,
    points: [
      "Directing end-to-end development of the DigiWholesale Optics ERP platform, architecting dedicated portals for optical wholesalers, retailers, and customer panels.",
      "Leading an agile engineering team through sprint planning, technical code reviews, database schema design, and modular frontend component architecture.",
      "Designing high-throughput backend services using Node.js and Express.js to process real-time inventory tracking, complex optical prescription calculations, and multi-tier billing workflows.",
      "Spearheading development of the DigiWPPConnect automation engine, leveraging WhatsApp Business APIs to process asynchronous bulk broadcasts, automated invoice notifications, and customer engagement queues.",
      "Enforcing performance benchmarking and API caching strategies to ensure sub-second response times across large-scale retail catalog queries."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WhatsApp API", "Tailwind CSS", "Architecture"],
    impactMetric: "Sub-second ERP queries & 50k+ automated WhatsApp notifications processed"
  },
  {
    id: "ipangram",
    role: "React.js Developer & Team Lead",
    company: "I-Pangram Pvt. Ltd.",
    location: "Remote (Surat, Gujarat)",
    period: "08/2023 – 01/2026",
    badge: "SQUAD LEAD (10 ENGS)",
    image: leadershipTeamCollab,
    points: [
      "Led a cross-functional squad of 10 frontend and QA engineers in developing client-facing web applications using React.js and modern state management patterns.",
      "Collaborated closely with backend teams to streamline payload sizes and eliminate redundant API calls, achieving a 20% increase in application runtime efficiency.",
      "Architected interactive 3D and WebXR applications, integrating Three.js and A-Frame into standard React environments for immersive virtual reality and augmented reality products.",
      "Built and deployed responsive, mobile-first dashboards with complex client-side filtering algorithms and enterprise authentication flows.",
      "Optimized build pipelines with Webpack and Vite, cutting initial bundle load times by 30% across multiple deployed client projects."
    ],
    technologies: ["React.js", "Three.js", "A-Frame", "WebXR", "Vite", "Webpack", "Redux", "Team Leadership"],
    impactMetric: "+20% Application Runtime Efficiency & -30% Bundle Load Time"
  },
  {
    id: "codefeast",
    role: "MERN Stack Developer",
    company: "Codefeast Pvt. Ltd.",
    location: "Remote (Meerut, UP)",
    period: "05/2023 – 07/2023",
    badge: "MERN STACK",
    image: fullstackCloudPortal,
    points: [
      "Engineered dynamic full-stack web applications using MongoDB, Express.js, React.js, and Node.js for client deliverables and internal products.",
      "Designed responsive, intuitive user interfaces from Figma prototypes, boosting end-user engagement metrics by 25%.",
      "Developed the official global website frontend for Royal Canin, incorporating interactive UI components and optimizing asset delivery for maximum SEO and Core Web Vitals scores.",
      "Implemented RESTful endpoints and secure authentication middlewares, verifying data sanitization and reliable database operations."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Figma to Code", "Core Web Vitals"],
    impactMetric: "25% Engagement Lift & Global Brand Launch"
  },
  {
    id: "forelskets",
    role: "Frontend Engineer",
    company: "Forelskets Softwares Pvt. Ltd.",
    location: "Aligarh, Uttar Pradesh",
    period: "05/2022 – 08/2023",
    badge: "FRONTEND ENGINEER",
    image: skillsCodeHands,
    points: [
      "Developed modular and reusable React.js components for enterprise software applications, with strict emphasis on accessibility and cross-browser compatibility.",
      "Engineered frontend modules for Skulam ERP, an educational ERP solution built to streamline admissions, grading, and administrative workflows for schools and colleges.",
      "Delivered client user interfaces for CreditsIn, a real-time credit score checking and analysis utility tool.",
      "Refactored legacy vanilla JavaScript codebases into modern React functional components using Hooks, drastically reducing technical debt."
    ],
    technologies: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Custom Hooks", "Accessibility"],
    impactMetric: "Refactored legacy codebases into modern modular React architecture"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    iconName: "Code2",
    description: "High-speed, reactive, component-driven client architecture with pixel-perfect responsive execution.",
    skills: [
      { name: "React.js (18+)", level: 98, highlight: true, tag: "CORE" },
      { name: "Next.js", level: 92, highlight: true, tag: "SSR/SSG" },
      { name: "TypeScript", level: 94, highlight: true, tag: "TYPED" },
      { name: "JavaScript (ES6+)", level: 96, highlight: false },
      { name: "Tailwind CSS", level: 98, highlight: true, tag: "STYLING" },
      { name: "HTML5 & CSS3", level: 98, highlight: false },
      { name: "GSAP & Web Animations", level: 88, highlight: false },
      { name: "Bootstrap", level: 90, highlight: false }
    ]
  },
  {
    category: "Backend & Cloud Architecture",
    iconName: "Cpu",
    description: "Resilient microservices, RESTful APIs, high-throughput caching, and distributed database models.",
    skills: [
      { name: "Node.js", level: 94, highlight: true, tag: "BACKEND" },
      { name: "Express.js", level: 95, highlight: true, tag: "MICROSERVICES" },
      { name: "RESTful API Design", level: 96, highlight: true, tag: "ARCHITECTURE" },
      { name: "MongoDB & Mongoose", level: 92, highlight: true, tag: "DATABASE" },
      { name: "Firebase & Real-time DB", level: 88, highlight: false },
      { name: "Cloud Architecture & Caching", level: 85, highlight: false }
    ]
  },
  {
    category: "Spatial Computing & WebXR",
    iconName: "Layers",
    description: "Interactive browser-based 3D models, WebGL shaders, AR/VR integration, and spatial tracking.",
    skills: [
      { name: "Three.js", level: 90, highlight: true, tag: "3D WEB" },
      { name: "A-Frame VR", level: 88, highlight: true, tag: "IMMERSIVE" },
      { name: "MindAR (Image Tracking)", level: 92, highlight: true, tag: "AUGMENTED" },
      { name: "3D Web Integration", level: 90, highlight: false },
      { name: "WebGL Fundamentals", level: 82, highlight: false }
    ]
  },
  {
    category: "Tools, Integrations & Leadership",
    iconName: "ShieldCheck",
    description: "Enterprise messaging automation, build optimization, state management, and agile leadership.",
    skills: [
      { name: "WhatsApp Business API (WPP)", level: 96, highlight: true, tag: "INTEGRATION" },
      { name: "State Management (Redux/Zustand)", level: 95, highlight: true, tag: "STATE" },
      { name: "Vite & Webpack Bundling", level: 92, highlight: false },
      { name: "Git, GitHub & CI/CD", level: 94, highlight: false },
      { name: "Postman & API Testing", level: 92, highlight: false },
      { name: "Agile/Scrum Team Lead", level: 94, highlight: true, tag: "LEADERSHIP" }
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Shri Varshney College, Aligarh, Uttar Pradesh",
  gradYear: "2022",
  research: "Spatial Computing & WebXR: Actively researching and prototyping with Three.js, A-Frame, and WebGL to bring 3D graphics and spatial interactions into commercial web ecosystems.",
  extracurriculars: "Digital Content & Video Production: Creator and editor for online sports fan channels, applying motion design and multimedia storytelling techniques."
};
