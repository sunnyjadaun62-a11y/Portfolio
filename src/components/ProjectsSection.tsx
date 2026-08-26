import React, { useState } from 'react';
import { PROJECTS_DATA, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { CheckCircle2, ChevronRight, X, Zap, Layers, Sparkles } from 'lucide-react';
import { SpatialHoloStage } from './SpatialHoloStage';

interface ProjectsSectionProps {
  onOpenLiveDemo: () => void;
  onOpenConnect: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenLiveDemo,
  onOpenConnect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['ALL', 'ERP Platform', 'WebXR & 3D', 'API Automation', 'Full-Stack Web'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-white relative">
      {/* 3D Cutout Header Composition (Interactive 3D Stage with Cyan & Red Telemetry) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative">
        {/* Left 7 Columns: Title, Subtitle, Filters */}

        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-sm animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">
              [ 02 // KEY PROJECTS & CASE STUDIES ]
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-helvetica-neue text-white leading-[1.08] mb-4">
            Enterprise Platforms & <br className="hidden sm:block" />
            <span className="text-red-500">Interactive 3D Systems</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Architected for enterprise business scale, sub-second query performance, real-time WhatsApp automation, and browser-based 3D/AR experiences.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-black/70 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: 3D Holographic Spatial Stage with WebXR Avatar */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
          <SpatialHoloStage
            image={PORTFOLIO_IMAGES.sunnyWebxrCutout}
            alt="Sunny Jadaun WebXR Spatial Computing"
            accentColor="cyan"
            heightClass="h-[420px] sm:h-[480px]"
            statusBadge={{
              title: "FRAME ENGINE",
              value: "60 FPS WEBXR",
              icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
            }}
            domainBadge={{
              title: "DEPLOYED",
              value: "15+ PROD SYSTEMS",
              icon: <Layers className="w-4 h-4 text-cyan-400" />,
            }}
          />
        </div>
      </div>

      {/* Projects Grid (Filled Scene Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-3xl p-5 border border-white/10 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top Filled Image Preview & Status */}
            <div>
              {project.image && (
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 aspect-video w-full bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-gray-200">
                      {project.year} • {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-green-500/30 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white mb-1.5 font-helvetica-neue group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-red-300/90 font-medium mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-5">
                {project.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="leading-snug text-[11px]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack & Actions */}
            <div>
              <div className="flex flex-wrap gap-1 mb-3.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/50 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metric Callout */}
              <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 mb-3.5 flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono text-gray-400">BENCHMARK:</span>
                <span className="text-[11px] font-bold font-mono text-red-400">{project.metrics}</span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>VIEW DETAILS</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {project.category === 'WebXR & 3D' ? (
                  <button
                    onClick={onOpenLiveDemo}
                    className="px-3 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30 text-cyan-300 text-xs font-semibold transition-all flex items-center gap-1"
                    title="Launch WebXR Simulator"
                  >
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>3D DEMO</span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenConnect}
                    className="px-3 py-2 rounded-xl bg-red-600/20 border border-red-500/40 hover:bg-red-600/30 text-red-300 text-xs font-semibold transition-all"
                    title="Inquire about this project"
                  >
                    INQUIRE
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel border border-red-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative animate-ken-burns">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            {activeModalProject.image && (
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 aspect-video w-full">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300">
                      {activeModalProject.category} • {activeModalProject.year}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
                    {activeModalProject.status}
                  </span>
                </div>
              </div>
            )}

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-helvetica-neue">
              {activeModalProject.title}
            </h3>
            <p className="text-sm text-red-300 mb-6 font-medium">
              {activeModalProject.subtitle}
            </p>

            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-2 font-bold">
                  // OVERVIEW & ARCHITECTURAL HIGHLIGHTS
                </h4>
                <p className="leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/10">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-2 font-bold">
                  // KEY TECHNICAL IMPLEMENTATIONS
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-2 font-bold">
                  // TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">BENCHMARK / IMPACT</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">{activeModalProject.metrics}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 pt-4 border-t border-white/10">
              {activeModalProject.category === 'WebXR & 3D' && (
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenLiveDemo();
                  }}
                  className="flex-1 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold text-xs tracking-wider transition-all"
                >
                  LAUNCH 3D SPATIAL LAB
                </button>
              )}
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenConnect();
                }}
                className="flex-1 py-3 rounded-full bg-white hover:bg-gray-200 text-gray-900 font-bold text-xs tracking-wider transition-all shadow-lg"
              >
                DISCUSS THIS PROJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
