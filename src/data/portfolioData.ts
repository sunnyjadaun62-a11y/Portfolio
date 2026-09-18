import { ProjectItem, ExperienceItem, SkillCategory, StatArcData } from '../types/portfolio';
import heroImg2 from '../assets/hero-img-2.png';
import heroBgImg from '../assets/hero-bg-img-2.png';
import aboutPortrait from '../assets/about-portrait.jpg';
import leadDevWorkspace from '../assets/lead-dev-workspace.jpg';
import webxrSpatialVision from '../assets/webxr-spatial-vision.jpg';
import skillsCodeHands from '../assets/skills-code-hands.jpg';
import contactPortrait from '../assets/contact-portrait.jpg';
import leadershipTeamCollab from '../assets/leadership-team-collab.jpg';
import sunnyAboutCutout from '../assets/bg-remove-4.png';
import sunnyWebxrCutout from '../assets/bg-remove-3.png';
import sunnyLeadCutout from '../assets/bg-remove-2.png';
import sunnyPortraitCutout from '../assets/bg-remove.png';

// Captured High-Resolution Real Project Screenshots
import haqdarImg from '../assets/projects/haqdar.png';
import digiwholesaleImg from '../assets/projects/digiwholesale.png';
import digiwppconnectImg from '../assets/projects/digiwppconnect.png';
import immarsifyImg from '../assets/projects/immarsify.png';
import afterMotionImg from '../assets/projects/after-motion.png';
import cliptoshortImg from '../assets/projects/cliptoshort.png';
import wevaPerfumesImg from '../assets/projects/weva-perfumes.png';
import cosentinelImg from '../assets/projects/cosentinel.png';
import studioFooterImg from '../assets/projects/studio-footer.png';
import tastybitesImg from '../assets/projects/tastybites.png';
import liiqwiseImg from '../assets/projects/liiqwise.png';
import skulamErpImg from '../assets/projects/skulam-erp.png';
import creditsinImg from '../assets/projects/creditsin.png';

export const HERO_ASSETS = {
  BG_IMAGE_1: heroImg2,
  BG_IMAGE_2: heroBgImg,
  LOGO_PATH: "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
};

export const PORTFOLIO_IMAGES = {
  aboutPortrait,
  leadDevWorkspace,
  webxrSpatialVision,
  skillsCodeHands,
  contactPortrait,
  leadershipTeamCollab,
  sunnyAboutCutout,
  sunnyWebxrCutout,
  sunnyLeadCutout,
  sunnyPortraitCutout,
  haqdarImg,
  digiwholesaleImg,
  digiwppconnectImg,
  immarsifyImg,
  afterMotionImg,
  cliptoshortImg,
  wevaPerfumesImg,
  cosentinelImg,
  studioFooterImg,
  tastybitesImg,
  liiqwiseImg,
  skulamErpImg,
  creditsinImg
};

export const PERSONAL_INFO = {
  name: "SUNNY JADAUN",
  role: "Full-Stack / Lead Developer",
  specialization: "React.js, Node.js & WebXR Specialist",
  email: "sunnyjadaun63@gmail.com",
  phone: "+91-7302854849",
  portfolio: "https://sunny-jadaun.vercel.app/",
  github: "https://github.com/sunnyjadaun63",
  location: "India • Remote Worldwide",
  availability: "AVAILABLE FOR FULL-TIME / LEAD ROLES",
  avatar: sunnyAboutCutout,
  contactAvatar: contactPortrait,
  tagline: "Architecting high-performance web platforms, enterprise ERP applications, and interactive 3D/AR spatial web experiences.",
  summary: "Full-Stack and Frontend Lead Developer with 4+ years of experience architecting high-performance web platforms, enterprise ERP applications, and interactive 3D/AR spatial web experiences. Proven track record leading engineering squads, engineering asynchronous backend pipelines, and building responsive client applications with React.js, Next.js, and Node.js. Experienced in WhatsApp Business API systems, custom canvas/WebGL interactions, and currently building Haqdar, an AI platform auditing illegal consumer overcharges and generating statutory legal notices."
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
    value: "13",
    suffix: "+",
    label: "LIVE PROJECTS"
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
    id: "haqdar",
    title: "Haqdar — AI Legal Audit & Notice Generator",
    subtitle: "AI Overcharge Auditing & Statutory Legal Notice Generator",
    year: "2026",
    category: "AI & Legal Tech",
    image: haqdarImg,
    stack: ["React.js", "Node.js", "OCR Engine", "LLM APIs", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "An AI-driven legal assistant platform enabling users to upload PDF/photo bills and contracts. It automatically detects illegal and suspicious charges—such as builder delays (RERA), illegal restaurant service charges (CCPA), inflated hospital bills, and power tariff anomalies—and drafts immediate, statutory-compliant legal notices.",
    highlights: [
      "Automated OCR and LLM-powered extraction auditing consumer invoices for illegal CCPA, RERA, and power tariff anomalies.",
      "Instant statutory legal notice generator citing Indian penal, consumer protection, and statutory codes.",
      "Multi-document parsing pipeline with client-side preview, anomaly scoring, and instant legal draft generation."
    ],
    metrics: "Sub-Second OCR • Statutory Notice Engine",
    status: "IN DEVELOPMENT",
    liveUrl: "https://github.com/sunnyjadaun63",
    accentColor: "#ef4444"
  },
  {
    id: "digi-wholesale",
    title: "DigiWholesale — Optics ERP Platform",
    subtitle: "Enterprise B2B Optical Supply Chain & Precision Matrix",
    year: "2026",
    category: "ERP & Enterprise",
    image: digiwholesaleImg,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Enterprise B2B ERP system built for the optical trade. Features dedicated portals for wholesalers and retailers, custom optical parameter handling (SPH, CYL, AXIS), real-time inventory tracking, and automated GST billing workflows.",
    highlights: [
      "Real-time multi-warehouse optical inventory with prescription matrix calculations (SPH, CYL, AXIS).",
      "Automated multi-tier billing workflows with instant GST compliance and tax calculation engine.",
      "High-throughput sub-second catalog querying with Redis caching and MongoDB aggregation pipelines."
    ],
    metrics: "<0.4s Query Latency • 100% Tax Accuracy",
    status: "PRODUCTION",
    liveUrl: "https://digiwholesale-frontend.digibysr.in/",
    accentColor: "#3b82f6"
  },
  {
    id: "digi-wpp-connect",
    title: "DigiWPPConnect — WhatsApp API Suite",
    subtitle: "Enterprise Messaging & Asynchronous Queue Orchestration",
    year: "2026",
    category: "ERP & Enterprise",
    image: digiwppconnectImg,
    stack: ["React.js", "Node.js", "Express.js", "WhatsApp Business API", "Redis Queues"],
    description: "Enterprise messaging and notification platform with a centralized dashboard for high-volume broadcast campaigns, automated transaction notifications, dynamic template generation, and asynchronous rate-limited message queues.",
    highlights: [
      "Asynchronous queuing mechanism managing strict rate limits and ensuring zero-packet drop message delivery.",
      "Dynamic template generation engine supporting rich interactive media payloads and quick button triggers.",
      "Real-time webhook listener architecture with automated retry mechanisms and delivery telemetry."
    ],
    metrics: "50k+ Msgs/Hr • 99.9% Delivery Rate",
    status: "PRODUCTION",
    liveUrl: "https://digiwppconnect-frontend.digibysr.in/",
    accentColor: "#22c55e"
  },
  {
    id: "immarsify-ar",
    title: "Immarsify — No-Code WebXR & AR Platform",
    subtitle: "Browser-Based Target-Image Tracking & Spatial WebXR",
    year: "2024-25",
    category: "WebXR & 3D",
    image: immarsifyImg,
    stack: ["Three.js", "A-Frame", "MindAR", "JavaScript (ES6+)", "WebGL"],
    description: "Browser-based, no-code AR utility utilizing target-image tracking. Enables users to render interactive 3D avatars, multimedia content, and digital business cards in web browsers without downloading native mobile applications.",
    highlights: [
      "Browser-native WebGL and MindAR execution enabling 60 FPS spatial rendering without downloading any mobile app.",
      "Optimized 3D geometry and shader pipelines for ultra-fast mobile browser loading over mobile networks.",
      "Interactive touch gesture support for rotating and inspecting 3D holographic models in real time."
    ],
    metrics: "60 FPS Fluid AR • Zero App Downloads",
    status: "LIVE DEMO",
    liveUrl: "https://app.immarsify.com/#/auth/sign-in",
    accentColor: "#06b6d4"
  },
  {
    id: "after-motion",
    title: "After Motion — Motion Graphics Engine",
    subtitle: "In-Browser Motion Design, Keyframing & Compositing",
    year: "2025",
    category: "Creative Motion & Canvas",
    image: afterMotionImg,
    stack: ["React.js", "WebGL", "HTML5 Canvas API", "GSAP", "JavaScript"],
    description: "Web-based motion design platform featuring timeline scrubbing, custom keyframing, and real-time graphics rendering directly inside the browser viewport.",
    highlights: [
      "Multi-track timeline scrubbing with bezier curve easing and real-time keyframe interpolation.",
      "Hardware-accelerated HTML5 Canvas and WebGL rendering pipelines for fluid 60 FPS viewport playback.",
      "Layer compositing system supporting vector assets, text dynamics, and custom animation presets."
    ],
    metrics: "60 FPS Timeline Scrubbing • Zero Server Render",
    status: "LIVE DEMO",
    liveUrl: "https://after-motion.vercel.app/",
    accentColor: "#a855f7"
  },
  {
    id: "cliptoshort",
    title: "ClipToShort — 16:9 to 9:16 Shorts Creator",
    subtitle: "Zero-Server Client-Side Video Reformatting Utility",
    year: "2025",
    category: "Creative Motion & Canvas",
    image: cliptoshortImg,
    stack: ["React.js", "HTML5 Canvas", "Video API", "Tailwind CSS"],
    description: "Zero-server, client-side video conversion tool that reformats standard horizontal 16:9 gameplay clips into vertical 9:16 video tailored for YouTube Shorts and Instagram Reels in real time.",
    highlights: [
      "Client-side canvas rendering pipeline processing multi-layer video cropping and blurs directly in the browser.",
      "Custom aspect framing controls with real-time video preview and subtitle placement overlays.",
      "Instant export without server uploads, protecting user privacy and eliminating cloud compute latency."
    ],
    metrics: "100% Client-Side • Instant 9:16 Video Reframe",
    status: "LIVE DEMO",
    liveUrl: "https://youtube-shorts-create.vercel.app/",
    accentColor: "#f43f5e"
  },
  {
    id: "weva-perfumes",
    title: "WEVA Perfumes — Luxury Canvas Showcase",
    subtitle: "Frame-by-Frame Canvas Scrubbing & Scroll Storytelling",
    year: "2025",
    category: "Creative Motion & Canvas",
    image: wevaPerfumesImg,
    stack: ["React.js", "GSAP ScrollTrigger", "HTML5 Canvas", "Tailwind CSS"],
    description: "Luxury commercial web experience delivering frame-by-frame canvas scrubbing linked to user scroll behavior for smooth interactive storytelling.",
    highlights: [
      "High-performance canvas frame preloading and caching system for jitter-free scroll-based animation.",
      "GSAP ScrollTrigger synchronization binding fluid scroll progress with 3D product visual reveal.",
      "Optimized asset compression preserving ultra-high-definition bottle textures and refractions."
    ],
    metrics: "Fluid 60 FPS Canvas Scrubbing • Luxury E-Commerce",
    status: "LIVE DEMO",
    liveUrl: "https://weva-perfumes.vercel.app/",
    accentColor: "#eab308"
  },
  {
    id: "cosentinel",
    title: "ConSentinel — Security Operations Interface",
    subtitle: "Security Operations Landing Page & Status Visualization",
    year: "2024",
    category: "Full-Stack Web",
    image: cosentinelImg,
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Telemetry UI"],
    description: "Security operations landing page and monitoring interface featuring status visualization, centralized system indicators, and clean dashboard layouts.",
    highlights: [
      "Modular monitoring cards showing real-time security metric states and active incident logs.",
      "Clean cyber-themed visual design system with high-contrast indicator lights and telemetry.",
      "Responsive layout architected for multi-monitor command center environments."
    ],
    metrics: "Zero Latency UI • Centralized Operations",
    status: "LIVE DEMO",
    liveUrl: "https://sunnyjadaun63.github.io/cosentinal/",
    accentColor: "#0ea5e9"
  },
  {
    id: "studio-footer",
    title: "Studio — Interactive Footer Component",
    subtitle: "High-Craft Experimental UI Motion & Micro-Interactions",
    year: "2026",
    category: "Creative Motion & Canvas",
    image: studioFooterImg,
    stack: ["React.js", "Modern CSS", "Micro-Interactions", "Motion Design"],
    description: "High-craft interactive footer component built to demonstrate experimental UI motion design, fluid responsiveness, and stateful hover micro-interactions.",
    highlights: [
      "Dynamic physics-inspired magnetic hover reactions and fluid typography scaling.",
      "Stateful interactive toggles with smooth transition curves and micro-animations.",
      "Ultra-clean component architecture built for modular drop-in integration."
    ],
    metrics: "High-Craft Micro-Interactions • Modular UI",
    status: "LIVE DEMO",
    liveUrl: "https://interactive-footer-phi.vercel.app/",
    accentColor: "#6366f1"
  },
  {
    id: "tasty-bites",
    title: "Tasty Bites — On-Demand Food Platform",
    subtitle: "Dynamic Menus, Cart Workflows & Real-Time Sync",
    year: "2024-25",
    category: "Full-Stack Web",
    image: tastybitesImg,
    stack: ["React.js", "Firebase Realtime Database", "Tailwind CSS", "REST APIs"],
    description: "Customer food-ordering application with dynamic menus, cart workflows, real-time database order synchronization, and admin tracking screens.",
    highlights: [
      "Real-time database order synchronization between customer cart, kitchen display, and delivery status.",
      "Dynamic categorization and modifier system supporting custom dietary preferences and pricing tiers.",
      "Optimized checkout flow with instant state validation and responsive touch feedback."
    ],
    metrics: "Real-Time DB Sync • Sub-Second Order Dispatch",
    status: "DEPLOYED",
    liveUrl: "https://tastybites.ipangram.com/#/",
    accentColor: "#f97316"
  },
  {
    id: "liiqwise",
    title: "Liiqwise — Filter-Based Matching Platform",
    subtitle: "Multi-Parameter Matching Algorithm & Instant UI State",
    year: "2025",
    category: "Full-Stack Web",
    image: liiqwiseImg,
    stack: ["React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    description: "Social discovery platform powered by client-side multi-parameter filtering algorithms matching profiles across lifestyle, health, and preference criteria with instant UI state re-rendering.",
    highlights: [
      "Optimized client-side state machine with Redux Toolkit for instantaneous filtering without re-render lag.",
      "Custom swipe gestures and responsive micro-interactions powered by hardware-accelerated CSS transforms.",
      "Encrypted profile token validation and data sanitization for consumer safety."
    ],
    metrics: "25% Higher User Engagement • Instant Filters",
    status: "DEPLOYED",
    liveUrl: "https://github.com/sunnyjadaun63",
    accentColor: "#ec4899"
  },
  {
    id: "skulam-erp",
    title: "Skulam ERP — Educational Platform",
    subtitle: "Modular Academic Admissions, Grading & Fee Tracking",
    year: "2022-23",
    category: "ERP & Enterprise",
    image: skulamErpImg,
    stack: ["React.js", "Node.js", "RESTful APIs", "Tailwind CSS"],
    description: "Modular academic ERP built to manage student admissions, grading records, fee tracking, and institutional administration workflows.",
    highlights: [
      "Refactored legacy vanilla JavaScript codebases into modern React functional components with custom hooks.",
      "Engineered student admission and grade distribution modules with accessible UI compliant with WCAG 2.1 AA.",
      "Automated fee collection ledger and receipt generation with role-based access control."
    ],
    metrics: "40% Less Tech Debt • 100% Accessible",
    status: "DEPLOYED",
    liveUrl: "https://github.com/sunnyjadaun63",
    accentColor: "#8b5cf6"
  },
  {
    id: "creditsin",
    title: "CreditsIn — Credit Score Analysis Platform",
    subtitle: "Real-Time Credit Score Verification & Analytics Utility",
    year: "2022-23",
    category: "Full-Stack Web",
    image: creditsinImg,
    stack: ["React.js", "REST APIs", "Data Visualization", "Chart Engine"],
    description: "Real-time financial credit score verification and analysis platform providing users with interactive breakdown charts and financial health metrics.",
    highlights: [
      "Interactive score calculation gauge and multi-factor credit risk breakdown visualization.",
      "Secure customer data encryption with tokenized credit bureau API integrations.",
      "Actionable recommendations engine helping users identify credit improvement opportunities."
    ],
    metrics: "Real-Time Risk Scoring • Instant Financial Insights",
    status: "DEPLOYED",
    liveUrl: "https://github.com/sunnyjadaun63",
    accentColor: "#14b8a6"
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
      "Direct end-to-end full-stack development for enterprise optics ERP platforms and WhatsApp messaging engines.",
      "Lead sprint planning, database schema architecture, code quality standards, and technical reviews.",
      "Optimize backend services for sub-second responses across large retail catalog databases.",
      "Direct the DigiWholesale Optics ERP platform with precision parameter matrix calculations (SPH, CYL, AXIS).",
      "Engineer the DigiWPPConnect automation suite managing rate-limited queues and high-volume message broadcasts."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WhatsApp API", "Tailwind CSS", "System Architecture"],
    impactMetric: "Sub-second ERP queries & 50k+ automated WhatsApp notifications processed"
  },
  {
    id: "ipangram",
    role: "React.js Developer & Squad Lead",
    company: "I-Pangram Pvt. Ltd.",
    location: "Remote",
    period: "08/2023 – 01/2026",
    badge: "SQUAD LEAD (10 ENGS)",
    image: leadershipTeamCollab,
    points: [
      "Managed a squad of 10 frontend and QA engineers delivering production web products.",
      "Engineered WebXR experiences using Three.js and A-Frame within React environments.",
      "Cut bundle load times by 30% through Vite/Webpack optimizations and improved API payload performance by 20%.",
      "Built client-side filtering engines (Liiqwise) and real-time database customer food delivery platforms (Tasty Bites).",
      "Collaborated closely with QA squads to establish rigorous cross-browser and mobile performance benchmarks."
    ],
    technologies: ["React.js", "Three.js", "A-Frame", "MindAR", "Vite", "Webpack", "Redux", "Team Leadership"],
    impactMetric: "+20% Application Efficiency & -30% Bundle Load Time"
  },
  {
    id: "codefeast",
    role: "MERN Stack Developer",
    company: "Codefeast Pvt. Ltd.",
    location: "Remote",
    period: "05/2023 – 07/2023",
    badge: "MERN STACK",
    image: skillsCodeHands,
    points: [
      "Built full-stack features using MongoDB, Express, React, and Node.js with secure auth middleware.",
      "Developed the global website frontend for Royal Canin, improving SEO and Core Web Vitals while raising engagement metrics by 25%.",
      "Designed responsive, intuitive user interfaces from Figma prototypes with pixel-perfect fidelity.",
      "Engineered RESTful endpoints and middleware verifying data sanitization and reliable database operations."
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Figma to Code", "Core Web Vitals", "SEO"],
    impactMetric: "25% Engagement Lift & Global Brand Launch"
  },
  {
    id: "forelskets",
    role: "Frontend Engineer",
    company: "Forelskets Softwares Pvt. Ltd.",
    location: "Aligarh, UP",
    period: "05/2022 – 08/2023",
    badge: "FRONTEND ENGINEER",
    image: skillsCodeHands,
    points: [
      "Built reusable component libraries for enterprise ERPs (Skulam ERP) and credit analysis utilities (CreditsIn).",
      "Refactored legacy vanilla JavaScript codebases into modern React functional components with custom hooks.",
      "Engineered frontend modules for academic admissions, grading matrices, and fee collection workflows.",
      "Delivered real-time financial credit score verification and analytical breakdown charts with strict WCAG compliance."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5/CSS3", "Custom Hooks", "REST APIs", "Accessibility"],
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
      { name: "JavaScript (ES6+)", level: 96, highlight: false },
      { name: "TypeScript", level: 94, highlight: true, tag: "TYPED" },
      { name: "Tailwind CSS", level: 98, highlight: true, tag: "STYLING" },
      { name: "HTML5 & CSS3", level: 98, highlight: false },
      { name: "GSAP & Web Animations", level: 90, highlight: true, tag: "MOTION" },
      { name: "Bootstrap", level: 90, highlight: false }
    ]
  },
  {
    category: "Backend & Systems",
    iconName: "Cpu",
    description: "Resilient microservices, RESTful APIs, document/OCR parsing pipelines, and rate-limited queues.",
    skills: [
      { name: "Node.js", level: 94, highlight: true, tag: "BACKEND" },
      { name: "Express.js", level: 95, highlight: true, tag: "MICROSERVICES" },
      { name: "RESTful APIs", level: 96, highlight: true, tag: "ARCHITECTURE" },
      { name: "Document / OCR Parsing", level: 92, highlight: true, tag: "AI/OCR" },
      { name: "Rate-Limited Queues", level: 93, highlight: true, tag: "QUEUES" },
      { name: "Linux & Nginx", level: 88, highlight: false }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "ShieldCheck",
    description: "High-throughput document and relational database models, caching layers, and real-time syncing.",
    skills: [
      { name: "MongoDB & Mongoose", level: 95, highlight: true, tag: "NOSQL" },
      { name: "PostgreSQL", level: 88, highlight: false },
      { name: "MySQL", level: 88, highlight: false },
      { name: "Firebase Realtime Database", level: 90, highlight: true, tag: "REALTIME" },
      { name: "Redis Caching", level: 89, highlight: false }
    ]
  },
  {
    category: "Immersive Tech (WebXR)",
    iconName: "Layers",
    description: "Interactive browser-based 3D models, WebGL shaders, target-image AR, and spatial computing.",
    skills: [
      { name: "Three.js", level: 92, highlight: true, tag: "3D WEB" },
      { name: "A-Frame VR", level: 90, highlight: true, tag: "IMMERSIVE" },
      { name: "MindAR (Image Tracking)", level: 94, highlight: true, tag: "AUGMENTED" },
      { name: "Target-Image AR", level: 92, highlight: true, tag: "SPATIAL" },
      { name: "WebGL Fundamentals", level: 85, highlight: false }
    ]
  },
  {
    category: "Workflow & Leadership",
    iconName: "ShieldCheck",
    description: "System architecture, code audits, squad leadership (10+ engs), Vite/Webpack build optimization, and CI/CD.",
    skills: [
      { name: "System Architecture", level: 96, highlight: true, tag: "CORE" },
      { name: "Code Reviews & Audits", level: 95, highlight: true, tag: "LEADERSHIP" },
      { name: "Agile / Scrum (Squad Lead)", level: 95, highlight: true, tag: "MANAGEMENT" },
      { name: "Vite & Webpack Optimization", level: 94, highlight: true, tag: "BUILD" },
      { name: "Docker & Git CI/CD", level: 90, highlight: false },
      { name: "WhatsApp Business API", level: 96, highlight: true, tag: "INTEGRATION" }
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
