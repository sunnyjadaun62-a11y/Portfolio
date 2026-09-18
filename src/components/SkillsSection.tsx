import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code2, Cpu, Layers, Database, ShieldCheck } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-red-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-zinc-300" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Database className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1800px] mx-auto text-white relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="text-xs uppercase tracking-widest text-red-400 font-mono font-semibold">Expertise</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white">
            Technical Stack & <br className="hidden sm:block" />
            <span className="text-zinc-400">Core Proficiencies</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl font-sans">
            Specialized in high-performance frontend architectures, robust Node.js backend microservices, and interactive spatial WebXR engines.
          </p>
        </div>
      </div>

      {/* 5-Column Clean Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {SKILLS_DATA.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-zinc-800/80 rounded-xl border border-zinc-700/60 w-fit">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
              </div>

              <h3 className="text-base font-bold text-white font-helvetica-neue mb-1">
                {cat.category}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-5">
                {cat.description}
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-colors ${
                    skill.highlight
                      ? 'bg-zinc-800 text-white border-zinc-700'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800/80'
                  }`}
                >
                  <span>{skill.name}</span>
                  {skill.tag && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-950/80 text-red-400 font-semibold border border-red-500/20">
                      {skill.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
