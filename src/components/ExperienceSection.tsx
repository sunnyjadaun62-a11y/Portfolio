import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA, PORTFOLIO_IMAGES } from '../data/portfolioData';
import { Calendar, MapPin, Award, GraduationCap, CheckCircle2, Users, Cpu } from 'lucide-react';
import { SpatialHoloStage } from './SpatialHoloStage';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-white relative">
      {/* 3D Cutout Header Composition (Interactive 3D Stage with Amber & Crimson Telemetry) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 relative">
        {/* Left 7 Columns: Text, Lead Metrics */}
        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-sm animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">
              [ 03 // WORK EXPERIENCE & CAREER JOURNEY ]
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-helvetica-neue text-white leading-[1.08] mb-4">
            Engineering Leadership & <br className="hidden sm:block" />
            <span className="text-red-500">Career Trajectory</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            Directing end-to-end full-stack architectures, leading cross-functional engineering squads of 10+ engineers, and enforcing performance benchmarks across enterprise products.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-gray-300">
              <Users className="w-4 h-4 text-red-400" />
              <span>Squad Lead (10+ Frontend & QA Engineers)</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono text-green-400">
              <Award className="w-4 h-4 text-green-400" />
              <span>+20% Runtime Efficiency</span>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: 3D Holographic Spatial Stage with System Architect Avatar */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
          <SpatialHoloStage
            image={PORTFOLIO_IMAGES.sunnyLeadCutout}
            alt="Sunny Jadaun System Architect Leadership"
            accentColor="amber"
            heightClass="h-[460px] sm:h-[520px]"
            statusBadge={{
              title: "ROLE DESIGNATION",
              value: "SYSTEM ARCHITECT",
              icon: <Cpu className="w-4 h-4 text-amber-400" />,
            }}
            domainBadge={{
              title: "SQUAD LEAD",
              value: "10+ ENGINEERS",
              icon: <Users className="w-4 h-4 text-amber-400" />,
            }}
          />
        </div>
      </div>

      {/* Featured Filled Workspace Showcase Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* Filled Workspace Card 1 */}
        <div className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between group hover:border-red-500/40 transition-all">
          <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/10 aspect-video w-full bg-black/60">
            <img
              src={PORTFOLIO_IMAGES.leadDevWorkspace}
              alt="DigiBySR Lead Workspace"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white bg-black/70 px-3 py-1 rounded-full border border-white/15">
                DIGIBYSR // LEAD DEVELOPER
              </span>
              <span className="text-[10px] font-mono text-green-400 bg-green-950/80 px-2.5 py-0.5 rounded-full border border-green-500/30">
                CURRENT
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold font-helvetica-neue text-white">
            Enterprise ERP & Microservices Engine
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Leading end-to-end development of DigiWholesale Optics ERP and WhatsApp messaging automation engine.
          </p>
        </div>

        {/* Filled Workspace Card 2 */}
        <div className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between group hover:border-red-500/40 transition-all">
          <div className="relative rounded-2xl overflow-hidden mb-5 border border-white/10 aspect-video w-full bg-black/60">
            <img
              src={PORTFOLIO_IMAGES.leadershipTeamCollab}
              alt="I-Pangram Agile Team Sprint"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white bg-black/70 px-3 py-1 rounded-full border border-white/15">
                I-PANGRAM // SQUAD LEAD
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-500/30">
                10 ENGINEERS
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold font-helvetica-neue text-white">
            Frontend Architecture & WebXR Products
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Directed agile sprints, Three.js VR/AR integrations, and cut bundle load times by 30% via modern Vite tooling.
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-red-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 mb-16">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-red-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-red-500 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-white group-hover:bg-black" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-helvetica-neue">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-300 mt-1 flex items-center gap-2">
                    <span className="text-red-400 font-bold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 mb-6">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Impact Metric & Tech Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/50 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-green-400 bg-green-950/20 px-3 py-1.5 rounded-xl border border-green-500/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>{exp.impactMetric}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Research Module */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-2xl">
            <GraduationCap className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-helvetica-neue text-white">
              Education & WebXR Research
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              COMPUTER SCIENCE DEGREE // GRADUATED {EDUCATION_DATA.gradYear}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-red-400 font-bold">
              DEGREE & INSTITUTION
            </div>
            <div className="text-base font-bold text-white">
              {EDUCATION_DATA.degree}
            </div>
            <div className="text-xs text-gray-400">
              {EDUCATION_DATA.institution}
            </div>
          </div>

          <div className="bg-black/50 p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
              SPATIAL COMPUTING & 3D RESEARCH
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {EDUCATION_DATA.research}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
