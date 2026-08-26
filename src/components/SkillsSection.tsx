import React, { useState } from 'react';
import { SKILLS_DATA, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { Code2, Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-red-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-green-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-white relative">
      {/* Telemetry Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-sm animate-pulse" />
        <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">
          [ 04 // TECHNICAL SKILLS & EXPERTISE ]
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white">
            Technical Stack & <br className="hidden sm:block" />
            <span className="text-red-500">Core Proficiencies</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl text-sm sm:text-base">
            Engineered depth across high-performance client frameworks, resilient backend services, and spatial WebXR engines.
          </p>
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
          {SKILLS_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                activeCategoryIndex === idx
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/50'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.category.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Deep Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Left Column: Category Summary Card with Code Image */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="rounded-2xl overflow-hidden mb-5 border border-white/10 h-36 relative">
              <img
                src={PORTFOLIO_IMAGES.skillsCodeHands}
                alt="Code Execution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-2.5 left-3">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 text-red-400 border border-red-500/30">
                  DEVELOPER EXECUTION
                </span>
              </div>
            </div>

            <div className="p-3 bg-black/50 border border-white/10 rounded-2xl w-fit mb-3">
              {getCategoryIcon(SKILLS_DATA[activeCategoryIndex].iconName)}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">
              CATEGORY 0{activeCategoryIndex + 1}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2 font-helvetica-neue">
              {SKILLS_DATA[activeCategoryIndex].category}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {SKILLS_DATA[activeCategoryIndex].description}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
            <div className="text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>AVG PROFICIENCY:</span>
              <span className="text-red-400 font-bold">94% (EXPERT)</span>
            </div>
            <div className="text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>PRODUCTION EXPERIENCE:</span>
              <span className="text-green-400 font-bold">ENTERPRISE READY</span>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Individual Skill Bars */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS_DATA[activeCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white font-helvetica-neue group-hover:text-red-400 transition-colors">
                    {skill.name}
                  </span>
                  {skill.tag && (
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-500/30">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-gray-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-rose-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Categories Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((category, catIdx) => (
          <div
            key={category.category}
            onClick={() => setActiveCategoryIndex(catIdx)}
            className={`cursor-pointer glass-panel p-6 rounded-2xl border transition-all duration-300 ${
              activeCategoryIndex === catIdx
                ? 'border-red-500/60 bg-red-950/10'
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              {getCategoryIcon(category.iconName)}
              <span className="text-[10px] font-mono text-gray-500">
                0{catIdx + 1}
              </span>
            </div>
            <h4 className="text-base font-bold text-white font-helvetica-neue mb-2">
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-1 mt-3">
              {category.skills.slice(0, 4).map((s) => (
                <span
                  key={s.name}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-gray-300 border border-white/5"
                >
                  {s.name}
                </span>
              ))}
              {category.skills.length > 4 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 text-gray-500">
                  +{category.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
