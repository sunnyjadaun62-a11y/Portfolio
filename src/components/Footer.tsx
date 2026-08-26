import React from 'react';
import { PERSONAL_INFO, HERO_ASSETS } from '../data/portfolioData';
import { TabType } from '../types/portfolio';
import { ArrowUp } from 'lucide-react';

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
          <svg
            className="w-6 h-6 fill-red-500"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={HERO_ASSETS.LOGO_PATH} />
          </svg>
          <div>
            <div className="font-bold text-white tracking-wider">
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
          <span>•</span>
          <button
            onClick={onOpenConnect}
            className="text-red-400 hover:text-red-300 font-bold"
          >
            Contact
          </button>
        </div>

        {/* Status & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="text-[10px] text-gray-400 text-right hidden sm:block">
            <div>LOCATION: INDIA (REMOTE)</div>
            <div className="text-green-400">OPEN TO WORK // 4+ YRS EXP</div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-all active:scale-95 shadow-md"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div>
          Built with React 18, TypeScript, Tailwind CSS & WebXR.
        </div>
      </div>
    </footer>
  );
};
