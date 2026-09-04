import React, { useState } from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-[#F4F4F5] pb-6 space-y-1">
        <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
          Career Journey (5.5 Years)
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
          Professional Work Experience
        </h2>
        <p className="text-[#52525B] text-xs sm:text-sm max-w-xl">
          A track record across global watch brands, travel gear leaders, AI design research labs, and bespoke lighting studios.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-[#E4E4E7] ml-2 sm:ml-4 space-y-6 pl-6 sm:pl-8">
        {experience.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isCurrent = exp.period.toLowerCase().includes('present');

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker Square */}
              <div
                className={`absolute -left-[29px] sm:-left-[37px] top-2 w-3 h-3 border transition-colors ${
                  isCurrent
                    ? 'bg-[#CCFF00] border-[#18181B]'
                    : 'bg-white border-[#E4E4E7] group-hover:border-[#18181B]'
                }`}
              />

              {/* Card Container */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className={`cursor-pointer p-5 sm:p-6 border transition-colors ${
                  isExpanded
                    ? 'bg-white border-[#18181B]'
                    : 'bg-white border-[#F4F4F5] hover:border-[#E4E4E7]'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#18181B] uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      {isCurrent && (
                        <span className="px-2 py-0.5 text-[9px] font-bold bg-[#CCFF00] text-[#18181B] uppercase tracking-widest">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-[#71717A] uppercase tracking-wider mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
                    <span className="flex items-center gap-1 bg-[#FAFAFA] border border-[#F4F4F5] px-2.5 py-1">
                      <Calendar className="w-3 h-3 text-[#18181B]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-[#FAFAFA] border border-[#F4F4F5] px-2.5 py-1 hidden sm:flex">
                      <MapPin className="w-3 h-3 text-[#18181B]" />
                      <span>{exp.location}</span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#18181B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#18181B]" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#52525B] leading-relaxed mt-3 font-sans">
                  {exp.description}
                </p>

                {/* Deliverables Collapsible */}
                {isExpanded && exp.deliverables && exp.deliverables.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#F4F4F5] space-y-2 animate-in fade-in duration-200">
                    <span className="text-[10px] font-bold uppercase text-[#A1A1AA] tracking-widest block">
                      Key Scope & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#18181B] font-medium">
                          <div className="w-1.5 h-1.5 bg-[#CCFF00] mt-1.5 shrink-0"></div>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
