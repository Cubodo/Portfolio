import React, { useState } from 'react';
import { SlidersHorizontal, Award, Menu, X, ArrowUpRight } from 'lucide-react';
import { SiteSettings } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  siteSettings: SiteSettings;
  onOpenCustomizer: () => void;
  onOpenRedDotModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  siteSettings,
  onOpenCustomizer,
  onOpenRedDotModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#18181B] text-white flex items-center justify-center font-display font-bold text-xs tracking-tighter uppercase group-hover:bg-[#CCFF00] group-hover:text-[#18181B] transition-colors">
            ID
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg sm:text-xl text-[#18181B] tracking-tight uppercase">
                {siteSettings.designerName}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#CCFF00]"></span>
                <span className="relative inline-flex h-2 w-2 bg-[#CCFF00]"></span>
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#71717A]">Senior Industrial Designer</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-[#71717A]">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#18181B] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#CCFF00]'
                    : 'hover:text-[#18181B]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-[#F4F4F5] text-[#18181B] border border-[#E4E4E7] transition-colors"
            title="Open Site Customizer to edit text, order, and styling"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#18181B]" />
            <span>Edit Theme</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#18181B] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCustomizer}
            className="p-2 bg-[#F4F4F5] text-[#18181B] border border-[#E4E4E7]"
            title="Edit Site"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#18181B] text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F4F4F5] px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'bg-[#18181B] text-[#CCFF00]'
                      : 'text-[#52525B] hover:bg-[#F4F4F5] hover:text-[#18181B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {siteSettings.redDotWinner && (
            <button
              onClick={() => {
                onOpenRedDotModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 text-xs font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]"
            >
              <Award className="w-4 h-4 text-[#CCFF00]" />
              <span>Red Dot Award Winner 2025</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};

