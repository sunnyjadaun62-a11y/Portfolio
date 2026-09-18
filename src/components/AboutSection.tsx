import React from 'react';
import { PERSONAL_INFO, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { Cpu, Layers, Terminal, ArrowRight, Sparkles, MapPin, Mail, Github } from 'lucide-react';
import { TabType } from '../types/portfolio';

interface AboutSectionProps {
  onSelectTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSelectTab,
  onOpenConnect,
}) => {
  const domains = [
    {
      icon: <Sparkles className="w-5 h-5 text-red-500" />,
      title: "AI Legal Tech & OCR",
      description: "Architecting Haqdar, an AI platform auditing consumer bills for CCPA/RERA overcharges and generating statutory legal notices.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-zinc-300" />,
      title: "Enterprise ERP & Microservices",
      description: "Engineering high-throughput Node.js/Express backends, optical prescription math (SPH, CYL, AXIS), and automated GST billing.",
    },
    {
      icon: <Layers className="w-5 h-5 text-zinc-300" />,
      title: "Spatial Computing & WebXR",
      description: "Building zero-install 3D & AR browser experiences using Three.js, A-Frame, and MindAR for fluid 60 FPS spatial web.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-zinc-300" />,
      title: "WhatsApp API Automation",
      description: "Developing high-volume messaging engines with asynchronous rate-limited queues, webhooks, and dynamic template generators.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1800px] mx-auto text-white relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="text-xs uppercase tracking-widest text-red-400 font-mono font-semibold">About</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start mb-16">
        {/* Left Columns: Story & Narrative */}
        <div className="lg:col-span-8 xl:col-span-8 2xl:col-span-9 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white leading-tight">
            Full-Stack & Lead Developer building robust web systems & spatial experiences.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            <p>
              I am a Full-Stack and Frontend Lead Developer with 4+ years of experience architecting high-performance web platforms, enterprise ERP applications, and interactive 3D/AR spatial web applications.
            </p>
            <p>
              Currently, I lead full-stack engineering at <span className="text-white font-medium">DigiBySR</span>, overseeing optical ERP systems and WhatsApp Business API pipelines. I am also architecting <span className="text-white font-medium">Haqdar</span>, an AI legal assistant auditing consumer overcharges and auto-drafting statutory notices.
            </p>
            <p>
              Previously at <span className="text-white font-medium">I-Pangram</span>, I led a squad of 10 frontend and QA engineers, delivering high-performance React architectures and Three.js/A-Frame WebXR applications while optimizing bundle load times by 30%.
            </p>
          </div>

          {/* Key Metric Counters */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl sm:text-3xl font-bold font-helvetica-neue text-white">4+</div>
              <div className="text-xs text-zinc-400 mt-1">Years Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl sm:text-3xl font-bold font-helvetica-neue text-white">13+</div>
              <div className="text-xs text-zinc-400 mt-1">Live Applications</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-2xl sm:text-3xl font-bold font-helvetica-neue text-white">10+</div>
              <div className="text-xs text-zinc-400 mt-1">Engineers Led</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectTab('projects')}
              className="px-6 py-3 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenConnect}
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Columns: Clean Profile & Focus Card */}
        <div className="lg:col-span-4 xl:col-span-4 2xl:col-span-3">
          <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-700 shrink-0 bg-zinc-800">
                <img
                  src={PORTFOLIO_IMAGES.aboutPortrait}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-helvetica-neue">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-zinc-400 font-mono">{PERSONAL_INFO.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>India • Remote Worldwide</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-500">Core Focus</span>
                <span className="text-white font-medium">React, Node.js, WebXR, ERP</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-500">Active Build</span>
                <span className="text-red-400 font-medium">Haqdar AI Legal Platform</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-500">Leadership</span>
                <span className="text-white font-medium">Squad Lead & Architecture</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-500">Availability</span>
                <span className="text-emerald-400 font-medium">Open to Lead / Full-Stack Roles</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-2 rounded-xl bg-red-600/20 border border-red-500/30 hover:bg-red-600/30 text-red-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {domains.map((d, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
          >
            <div className="p-2.5 bg-zinc-800/60 rounded-xl w-fit mb-3 border border-zinc-700/50">
              {d.icon}
            </div>
            <h3 className="text-sm font-bold text-white font-helvetica-neue mb-1.5 group-hover:text-red-400 transition-colors">
              {d.title}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
