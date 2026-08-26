import React from 'react';
import { PERSONAL_INFO, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { ShieldCheck, Cpu, Layers, Terminal, ArrowRight, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { TabType } from '../types/portfolio';
import { SpatialHoloStage } from './SpatialHoloStage';

interface AboutSectionProps {
  onSelectTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onSelectTab,
  onOpenConnect,
}) => {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-red-500" />,
      title: "Enterprise ERP & Microservices",
      description: "Directing high-throughput Node.js/Express architectures, real-time inventory tracking, prescription calculation math (SPH, CYL, AXIS), and automated multi-tier billing workflows.",
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Spatial Computing & WebXR",
      description: "Architecting zero-install browser-based 3D and AR experiences using Three.js, A-Frame, and MindAR for fluid 60 FPS spatial graphics on mobile web.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-green-400" />,
      title: "WhatsApp API Automation",
      description: "Building high-volume messaging engines with asynchronous rate-limit queues, real-time webhook listeners, and dynamic template generators.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: "Engineering Team Leadership",
      description: "Led cross-functional squads of 10+ frontend and QA engineers through sprint planning, code audits, state management, and Vite/Webpack optimizations (-30% bundle load time).",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-white relative">
      {/* 3D Cutout Hero Header Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 relative">
        {/* Left 7 Columns: Text, Telemetry & CTA */}
        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-sm animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">
              [ 01 // ABOUT ME ]
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-helvetica-neue text-white leading-[1.08] mb-6">
            Engineering High-Performance <br className="hidden sm:block"/>
            <span className="text-red-500">Web Platforms</span> & Spatial 3D
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => onSelectTab('projects')}
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-wider transition-all shadow-lg shadow-red-900/40 active:scale-95 flex items-center gap-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenConnect}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wider transition-all active:scale-95"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg">
            <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-xl sm:text-2xl font-bold font-helvetica-neue text-white">4+ Yrs</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">Experience</div>
            </div>
            <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-xl sm:text-2xl font-bold font-helvetica-neue text-red-400">10+ Engs</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">Squad Lead</div>
            </div>
            <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-xl sm:text-2xl font-bold font-helvetica-neue text-green-400">-30%</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">Bundle Load</div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: 3D Holographic Spatial Avatar Stage (Life-Size & Interactive 3D Tilt) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
          <SpatialHoloStage
            image={PORTFOLIO_IMAGES.sunnyAboutCutout}
            alt="Sunny Jadaun Full-Stack Lead"
            accentColor="red"
            heightClass="h-[460px] sm:h-[520px]"
            statusBadge={{
              title: "STATUS",
              value: "AVAILABLE FOR HIRE",
            }}
            domainBadge={{
              title: "CORE DOMAIN",
              value: "REACT • NODE • WEBXR",
              icon: <Code2 className="w-4 h-4 text-red-400" />,
            }}
          />
        </div>
      </div>

      {/* Lead Dev Workspace Card with Real Studio Environment (Filled Box Image) */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">
                DEVELOPER ENVIRONMENT & DIRECTIVES
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-helvetica-neue">
              Production-Grade Architecture & Sub-Second Performance
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">
              Directing end-to-end full-stack architectures, optical ERP prescription matrices (SPH, CYL, AXIS), automated WhatsApp broadcast queues, and zero-install 3D spatial web experiences.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Engineered high-throughput RESTful services with Node.js/Express and MongoDB aggregation pipelines.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Integrated Three.js, A-Frame, and MindAR image tracking directly into standard React apps at 60 FPS.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 aspect-video w-full relative group bg-black/60">
            <img
              src={PORTFOLIO_IMAGES.leadDevWorkspace}
              alt="Developer Workspace Studio"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-gray-300">
              DEVELOPER STUDIO // REACT & NODE.JS WORKSPACE
            </div>
          </div>
        </div>
      </div>

      {/* Grid Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/15 transition-all" />
            <div className="p-3 bg-black/40 border border-white/10 rounded-xl w-fit mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-helvetica-neue group-hover:text-red-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
