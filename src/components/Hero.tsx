import React from 'react';
import { ArrowDown, Award, Sparkles, FileText, ChevronRight, ArrowRight } from 'lucide-react';
import { SiteSettings } from '../types';

interface HeroProps {
  siteSettings: SiteSettings;
  onExploreClick: () => void;
  onResumeClick: () => void;
  onOpenRedDotModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  siteSettings,
  onExploreClick,
  onResumeClick,
  onOpenRedDotModal,
}) => {
  return (
    <section className="bg-white border-b border-[#F4F4F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column - Headline & Core Info */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:border-r lg:border-[#F4F4F5] lg:pr-12">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-block px-3 py-1 bg-[#CCFF00] text-[10px] font-bold uppercase tracking-widest text-[#18181B]">
                Senior Industrial Designer
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tighter uppercase font-display text-[#18181B]">
              Beautifully <br />
              <span className="text-[#18181B]">Functional.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-xl">
              {siteSettings.taglineBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#18181B] border border-[#E4E4E7] text-xs font-bold uppercase tracking-widest hover:bg-[#F4F4F5] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#18181B]" />
                <span>Resume & Experience</span>
              </button>
            </div>
          </div>

          {/* Software Toolkit & Expertise */}
          <div className="pt-8 border-t border-[#F4F4F5]">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] mb-4">
                Core Expertise
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#18181B]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#CCFF00]"></div>
                  <span>CAD Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#CCFF00]"></div>
                  <span>CMF Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#CCFF00]"></div>
                  <span>Rapid Prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#CCFF00]"></div>
                  <span>Design Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Selected Works Spotlight Card / Preview */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAFAFA] p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA]">
              Flagship Awarded Concept / 2025
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#18181B] bg-[#CCFF00] px-2 py-0.5">
              RED DOT WINNER
            </span>
          </div>

          {/* Hero Spotlight Image */}
          <div
            onClick={onExploreClick}
            className="group cursor-pointer bg-white border border-[#F4F4F5] p-4 hover:border-[#CCFF00] transition-colors"
          >
            <div className="relative w-full aspect-[4/3] bg-[#F1F1F1] overflow-hidden flex items-center justify-center">
              <img
                src="/images/spunch.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80";
                }}
                alt="Spunch Paper Crimper & Punch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#18181B] font-display">
                Spunch - A Minimalist Paper Crimper And Punch
              </h3>
              <p className="text-xs text-[#71717A]">
                Minimalist staple-free desktop hardware in anodized aluminum.
              </p>
              <div className="pt-3 flex items-center gap-2 text-[#18181B] group-hover:text-[#CCFF00] transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Explore Case Study
                </span>
                <div className="w-8 h-[2px] bg-current"></div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E4E4E7] text-center">
            <div>
              <div className="font-display font-bold text-xl text-[#18181B]">5.5+</div>
              <div className="text-[10px] uppercase font-bold text-[#A1A1AA] tracking-wider">Years Exp</div>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-[#18181B]">IIT-B</div>
              <div className="text-[10px] uppercase font-bold text-[#A1A1AA] tracking-wider">M.Des Alumni</div>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-[#18181B]">6+</div>
              <div className="text-[10px] uppercase font-bold text-[#A1A1AA] tracking-wider">Products</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

