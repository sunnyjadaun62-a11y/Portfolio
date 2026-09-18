import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem, ProjectCategory } from '../types/portfolio';
import { CheckCircle2, ChevronRight, X, Globe, Search, ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConnect: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenConnect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'ALL',
    'AI & Legal Tech',
    'ERP & Enterprise',
    'WebXR & 3D',
    'Creative Motion & Canvas',
    'Full-Stack Web'
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1800px] mx-auto text-white relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-xs uppercase tracking-widest text-red-400 font-mono font-semibold">Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white">
            Featured Projects & <br className="hidden sm:block" />
            <span className="text-zinc-400">Production Systems</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl font-sans">
            A curated showcase of 13 platforms spanning AI auditing, enterprise ERPs, WhatsApp automated pipelines, and WebXR graphics engines.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by keyword or stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/90 rounded-xl border border-zinc-800 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors font-sans"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-zinc-800/60">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900 bg-zinc-950 border border-zinc-800/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              {/* Image Preview Container */}
              {project.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Status pill top right */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium backdrop-blur-md border ${
                      project.status === 'IN DEVELOPMENT'
                        ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                        : project.status === 'PRODUCTION'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : 'bg-zinc-900/90 text-zinc-300 border-zinc-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Year pill top left */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300 bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
                      {project.year}
                    </span>
                  </div>
                </div>
              )}

              {/* Text info */}
              <div className="p-5">
                <div className="text-[11px] font-mono text-red-400 font-semibold mb-1">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-white font-helvetica-neue group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5 border-t border-zinc-800/50 pt-3">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span className="text-[11px] leading-snug font-sans">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stack & Actions */}
            <div className="p-5 pt-0">
              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/80">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800 p-8">
          <p className="text-zinc-400 text-sm">No projects found matching your search.</p>
          <button
            onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
            className="mt-3 px-4 py-2 rounded-xl bg-zinc-100 text-zinc-950 text-xs font-semibold"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Clean Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl bg-zinc-900 border border-zinc-700 max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            {activeModalProject.image && (
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-zinc-800 aspect-[16/9] w-full bg-black">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-semibold text-red-400">{activeModalProject.category}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">{activeModalProject.year}</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-helvetica-neue">
              {activeModalProject.title}
            </h3>
            <p className="text-xs text-zinc-400 font-sans mt-1 mb-6">
              {activeModalProject.subtitle}
            </p>

            <div className="space-y-5 text-sm text-zinc-300 font-sans">
              <div>
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-zinc-400 mb-2">
                  Overview
                </h4>
                <p className="leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 text-xs sm:text-sm text-zinc-300">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-zinc-400 mb-2">
                  Key Technical Implementations
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-zinc-400 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700/60 text-zinc-300 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalProject.metrics && (
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">Benchmark Metric</span>
                  <span className="text-white font-semibold">{activeModalProject.metrics}</span>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex items-center gap-3 pt-4 border-t border-zinc-800">
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Open Live Application</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenConnect();
                }}
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-colors"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
