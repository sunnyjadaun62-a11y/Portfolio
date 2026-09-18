import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TabType } from '../types/portfolio';
import { SJLogo } from './SJLogo';

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
        {/* Desktop (md+): Centered Pill */}
        <div className="hidden md:flex items-center gap-1 bg-black/80 backdrop-blur-md rounded-full pl-3 pr-2 py-1.5 border border-zinc-800 shadow-2xl nav-drop pointer-events-auto">
          {/* SJ Monogram Logo */}
          <button
            onClick={() => handleLinkClick('about')}
            className="flex items-center justify-center p-1 mr-1 text-white hover:scale-105 transition-transform focus:outline-none"
            title="Sunny Jadaun (SJ)"
          >
            <SJLogo className="w-6 h-6" />
          </button>

          {/* Nav items */}
          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${isActive
                      ? 'text-white bg-zinc-800 shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Contact Button */}
          <button
            onClick={handleConnectClick}
            className="bg-white text-zinc-950 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-zinc-200 ml-1.5 transition-all duration-200 active:scale-95 shadow-sm"
          >
            Contact
          </button>
        </div>

        {/* Mobile (<md): logo pill left, hamburger pill right */}
        <div className="md:hidden flex items-center justify-between w-full pointer-events-auto">
          {/* Logo pill */}
          <button
            onClick={() => handleLinkClick('about')}
            className="bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full px-3 py-1.5 flex items-center gap-2 nav-drop shadow-xl active:scale-95 transition-transform"
          >
            <SJLogo className="w-5 h-5" />
            <span className="text-white text-xs font-bold font-helvetica-neue tracking-wider">SUNNY JADAUN</span>
          </button>

          {/* Hamburger toggle pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full p-2.5 text-white nav-drop shadow-xl active:scale-95 transition-transform"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 pt-20 pb-6 px-5 bg-zinc-950/95 backdrop-blur-xl text-white shadow-2xl border-b border-zinc-800">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between w-full text-left py-3 px-3 border-b border-zinc-800/40 text-sm font-medium transition-colors ${activeTab === link.id
                    ? 'text-white font-semibold bg-zinc-900 rounded-xl'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                )}
              </button>
            ))}

            <button
              onClick={handleConnectClick}
              className="mt-4 w-full bg-white text-zinc-950 font-bold py-2.5 rounded-xl text-center text-xs tracking-wider shadow-md active:scale-95 transition-transform"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </>
  );
};
