import React, { useState, useEffect } from 'react';
import { TabType } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveLab } from './components/InteractiveLab';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'about') {
      const el = document.getElementById('about');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'projects') {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'experience') {
      const el = document.getElementById('experience');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'skills') {
      const el = document.getElementById('skills');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'demo') {
      const el = document.getElementById('demo');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreHero = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll spy to dynamically update active navigation pill tab
  useEffect(() => {
    const handleScroll = () => {
      const sections: { id: TabType; el: HTMLElement | null }[] = [
        { id: 'about', el: document.getElementById('about') },
        { id: 'projects', el: document.getElementById('projects') },
        { id: 'experience', el: document.getElementById('experience') },
        { id: 'skills', el: document.getElementById('skills') },
        { id: 'demo', el: document.getElementById('demo') },
      ];

      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveTab(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#08080c] text-white tracking-[-0.02em] font-mono relative selection:bg-red-500 selection:text-white"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Fixed Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenConnect={() => setIsConnectOpen(true)}
      />

      {/* Main Single Page Portfolio */}
      <main className="relative">
        {/* Layered Cyber Hero Section (100dvh) */}
        <HeroSection
          onExplore={handleExploreHero}
          onOpenConnect={() => setIsConnectOpen(true)}
        />

        {/* Section 01: About & Professional Summary */}
        <AboutSection
          onSelectTab={handleSelectTab}
          onOpenConnect={() => setIsConnectOpen(true)}
        />

        {/* Section 02: Projects & Case Studies */}
        <ProjectsSection
          onOpenLiveDemo={() => handleSelectTab('demo')}
          onOpenConnect={() => setIsConnectOpen(true)}
        />

        {/* Section 03: Experience Timeline */}
        <ExperienceSection />

        {/* Section 04: Technical Skills Matrix */}
        <SkillsSection />

        {/* Section 05: WebXR & 3D Interactive Lab */}
        <InteractiveLab
          onOpenConnect={() => setIsConnectOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenConnect={() => setIsConnectOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
    </div>
  );
};

export default App;
