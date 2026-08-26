import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TabType } from '../types/portfolio';
import { HERO_ASSETS } from '../data/portfolioData';

interface NavbarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenConnect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: TabType; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'demo', label: 'WebXR Lab' },
  ];

  const handleLinkClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  const handleConnectClick = () => {
    setMobileMenuOpen(false);
    onOpenConnect();
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center p-4 sm:p-5 pointer-events-none"
        aria-label="Main Navigation"
      >
        {/* Desktop (md+): ONE centered pill */}
        <div className="hidden md:flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full pl-3 pr-2 py-2 border border-white/10 shadow-2xl nav-drop pointer-events-auto">
          {/* Geometric angular mark logo */}
          <button
            onClick={() => handleLinkClick('about')}
            className="flex items-center justify-center p-1 mr-1.5 text-white hover:text-red-400 transition-colors focus:outline-none"
            title="Sunny Jadaun Portfolio"
          >
            <svg
              className="w-[22px] h-[22px] fill-current"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={HERO_ASSETS.LOGO_PATH} />
            </svg>
          </button>

          {/* Nav items */}
          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* White CTA "Contact" */}
          <button
            onClick={handleConnectClick}
            className="bg-white text-gray-900 text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-gray-100 ml-1 transition-all duration-200 active:scale-95 shadow-md"
          >
            Contact
          </button>
        </div>

        {/* Mobile (<md): logo pill left, hamburger pill right */}
        <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
          {/* Logo pill */}
          <button
            onClick={() => handleLinkClick('about')}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-2 flex items-center gap-2 nav-drop shadow-xl active:scale-95 transition-transform"
          >
            <svg
              className="w-[22px] h-[22px] fill-white"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={HERO_ASSETS.LOGO_PATH} />
            </svg>
            <span className="text-white text-xs font-semibold tracking-wider">SUNNY JADAUN</span>
          </button>

          {/* Hamburger toggle pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full p-2.5 text-white nav-drop shadow-xl active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 pt-20 pb-6 px-5 bg-[#0e0e14] text-white shadow-2xl border-b border-white/10">
          <div className="flex flex-col space-y-1">
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 px-1 pb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between w-full text-left py-3 px-3 border-b border-white/5 text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'text-red-400 font-semibold bg-red-950/30 rounded-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                )}
              </button>
            ))}

            <div className="pt-4">
              <button
                onClick={handleConnectClick}
                className="w-full bg-red-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-red-500 transition-colors shadow-lg active:scale-95"
              >
                Get In Touch / Hire
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
