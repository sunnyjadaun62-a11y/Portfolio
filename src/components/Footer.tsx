import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TabType } from '../types/portfolio';
import { ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md text-white py-12 px-4 sm:px-6 lg:px-12 relative z-30 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <SJLogo className="w-8 h-8" />
          <div>
            <div className="font-bold text-white tracking-wider font-helvetica-neue text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[10px] text-gray-400">
              FULL-STACK LEAD & WEBXR SPECIALIST
            </div>
          </div>
        </div>

        {/* Quick Navigation Jumps */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
          <button
            onClick={() => onSelectTab('about')}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectTab('projects')}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectTab('experience')}
            className="hover:text-white transition-colors"
          >
            Experience
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectTab('skills')}
            className="hover:text-white transition-colors"
          >
            Skills
          </button>
          <span>•</span>
          <button
            onClick={() => onSelectTab('demo')}
            className="hover:text-white transition-colors"
          >
            WebXR Lab
          </button>
        </div>

        {/* Right CTA & Scroll To Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConnect}
            className="px-4 py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600/30 text-xs font-semibold transition-all"
          >
            CONTACT ME
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-400">
        <div>
          © {new Date().getFullYear()} SUNNY JADAUN. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-4">
          <span>REACT 18</span>
          <span>•</span>
          <span>NODE.JS</span>
          <span>•</span>
          <span>THREE.JS</span>
          <span>•</span>
          <span>TAILWIND CSS</span>
        </div>
      </div>
    </footer>
  );
};
