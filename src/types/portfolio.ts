export type TabType = 'about' | 'projects' | 'experience' | 'skills' | 'demo';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'ERP Platform' | 'WebXR & 3D' | 'API Automation' | 'Full-Stack Web';
  stack: string[];
  description: string;
  highlights: string[];
  metrics: string;
  status: 'PRODUCTION' | 'DEPLOYED' | 'PROPRIETARY' | 'LIVE DEMO';
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  points: string[];
  technologies: string[];
  impactMetric: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number;
    tag?: string;
    highlight?: boolean;
  }[];
}

export interface StatArcData {
  r: number;
  startAngle: number;
  endAngle: number;
  dotAngle: number;
  value: string;
  suffix: string;
  label: string;
}
