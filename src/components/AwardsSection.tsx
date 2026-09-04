import React from 'react';
import { AwardItem } from '../types';
import { Award, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

interface AwardsSectionProps {
  awards: AwardItem[];
  onOpenRedDotModal: () => void;
  onSelectProjectById: (id: string) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({
  awards,
  onOpenRedDotModal,
  onSelectProjectById,
}) => {
  return (
    <section id="awards" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-[#F4F4F5] pb-6 space-y-1">
        <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#18181B]" />
          <span>Honors & Global Recognition</span>
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
          Awards & Exhibition Features
        </h2>
      </div>

      {/* Awards Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award) => {
          const isRedDot = award.title.includes('Red Dot');

          return (
            <div
              key={award.id}
              className={`p-6 sm:p-8 border transition-colors flex flex-col justify-between space-y-6 ${
                isRedDot
                  ? 'bg-white border-[#18181B] hover:border-[#CCFF00]'
                  : 'bg-white border-[#F4F4F5] hover:border-[#18181B]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                      isRedDot ? 'bg-[#18181B] text-[#CCFF00]' : 'bg-[#F4F4F5] text-[#18181B]'
                    }`}
                  >
                    {award.badgeText}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">{award.year}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
                    {award.title}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">{award.organization}</p>
                </div>

                <p className="text-[#52525B] text-xs leading-relaxed font-sans">
                  {award.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4F4F5] flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">
                  {award.project}
                </span>

                {isRedDot ? (
                  <button
                    onClick={onOpenRedDotModal}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    <span>View Certificate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : award.id === 'award-2' ? (
                  <button
                    onClick={() => (window as any).app?.openIndiaDesignModal ? (window as any).app.openIndiaDesignModal() : onSelectProjectById('lumina-lighting')}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : award.id === 'award-3' ? (
                  <button
                    onClick={() => (window as any).app?.openKloveModal ? (window as any).app.openKloveModal() : onSelectProjectById('lumina-lighting')}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectProjectById('lumina-lighting')}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
