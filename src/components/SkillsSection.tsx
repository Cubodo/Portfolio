import React, { useState } from 'react';
import { SkillItem } from '../types';
import { SoftwareLogo } from './SoftwareLogos';
import { Cpu, PenTool, Layers, Box, Sparkles, CheckCircle } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', '3D & CAD', 'Rendering & Visuals', 'Adobe Suite', 'Design & Strategy'];

  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F4F4F5] pb-8">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
            Technical Stack & Capabilities
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
            Software & Core Design Stack
          </h2>
          <p className="text-[#52525B] text-xs sm:text-sm max-w-xl">
            Proficient across CAD, photorealistic rendering engines, vector graphics, physical rapid prototyping, and CMF specification.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? 'bg-[#18181B] text-[#CCFF00]'
                  : 'bg-[#FAFAFA] text-[#71717A] border border-[#F4F4F5] hover:bg-[#F4F4F5] hover:text-[#18181B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors group flex items-center gap-4"
          >
            <div className="p-2 border border-[#E4E4E7] bg-[#FAFAFA] shrink-0">
              <SoftwareLogo logoType={skill.logoType} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider">
                {skill.name}
              </h3>
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
