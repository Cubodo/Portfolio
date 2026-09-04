import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Award, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SiteSettings } from '../types';

interface FooterProps {
  siteSettings: SiteSettings;
  setCurrentTab: (tab: string) => void;
  onOpenRedDotModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ siteSettings, setCurrentTab, onOpenRedDotModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand & Statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#10B981] text-black flex items-center justify-center font-display font-bold text-sm">
                AK
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {siteSettings.designerName}
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              I am an Industrial Designer specializing in wristwatches, mobility hardware, travel gear, and bespoke CMF solutions. I hold a Master's in Industrial Design from IIT Bombay (IDC).
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => { setCurrentTab('home'); scrollToTop(); }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  Featured Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('about'); scrollToTop(); }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  About & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('skills'); scrollToTop(); }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  Skills & Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('resume'); scrollToTop(); }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  Résumé & Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab('contact'); scrollToTop(); }}
                  className="hover:text-[#10B981] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-white transition-colors">
                  {siteSettings.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#10B981]" />
                <a href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteSettings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>{siteSettings.location}</span>
              </li>
              {siteSettings.linkedin && (
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {siteSettings.designerName}. All rights reserved. Designed with precision & whitespace.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#10B981]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
