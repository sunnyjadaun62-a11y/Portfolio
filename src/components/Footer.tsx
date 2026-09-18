import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TabType } from '../types/portfolio';
import { ArrowUp, Github } from 'lucide-react';
import { SJLogo } from './SJLogo';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenConnect }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-30 font-sans text-xs">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Role */}
        <div className="flex items-center gap-3">
          <SJLogo className="w-7 h-7" />
          <div>
            <div className="font-bold text-white tracking-wider font-helvetica-neue text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">
              Full-Stack & Lead Developer • React.js, Node.js & WebXR
            </div>
          </div>
        </div>

        {/* Quick Navigation Jumps */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400 text-xs">
          <button
            onClick={() => onSelectTab('about')}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <span className="text-zinc-700">•</span>
          <button
            onClick={() => onSelectTab('projects')}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <span className="text-zinc-700">•</span>
          <button
            onClick={() => onSelectTab('experience')}
            className="hover:text-white transition-colors"
          >
            Experience
          </button>
          <span className="text-zinc-700">•</span>
          <button
            onClick={() => onSelectTab('skills')}
            className="hover:text-white transition-colors"
          >
            Skills
          </button>
        </div>

        {/* Social / Contact & Scroll */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-800"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenConnect}
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
          >
            Get In Touch
          </button>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-800"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
        <div>
          © {new Date().getFullYear()} SUNNY JADAUN. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <span>React 18</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>Three.js</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
