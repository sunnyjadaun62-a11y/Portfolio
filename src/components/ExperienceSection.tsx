import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1800px] mx-auto text-white relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="text-xs uppercase tracking-widest text-red-400 font-mono font-semibold">Career</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white">
            Work Experience & <br className="hidden sm:block" />
            <span className="text-zinc-400">Engineering Leadership</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl font-sans">
            Directing end-to-end full-stack architectures, leading cross-functional engineering squads, and enforcing rigorous performance benchmarks.
          </p>
        </div>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-6 mb-16">
        {EXPERIENCE_DATA.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-800/80">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl font-bold text-white font-helvetica-neue">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/30">
                    {exp.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 mt-1 flex items-center gap-2 font-sans">
                  <span className="text-white font-bold">{exp.company}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 flex items-center gap-1 font-normal">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-3.5 py-1.5 rounded-full border border-zinc-800 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="py-5 space-y-2.5 font-sans">
              {exp.points.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Technologies Footer */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {exp.impactMetric && (
                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-xl border border-emerald-500/20">
                  {exp.impactMetric}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Education Block */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-zinc-800 rounded-xl border border-zinc-700/60">
            <GraduationCap className="w-5 h-5 text-zinc-200" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-helvetica-neue text-white">
              Education & Academic Foundation
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              COMPUTER SCIENCE DEGREE • GRADUATED {EDUCATION_DATA.gradYear}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-1">
            <div className="text-[10px] uppercase font-mono text-zinc-500 font-semibold">Degree</div>
            <div className="text-sm font-bold text-white font-sans">{EDUCATION_DATA.degree}</div>
            <div className="text-zinc-400 font-sans">{EDUCATION_DATA.institution}</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-1">
            <div className="text-[10px] uppercase font-mono text-zinc-500 font-semibold">Spatial & WebXR Research</div>
            <p className="text-zinc-300 leading-relaxed font-sans">
              {EDUCATION_DATA.research}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
