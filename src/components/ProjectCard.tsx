import React from 'react';
import { Project } from '../types';
import { ArrowRight, Award, Lock } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group cursor-pointer bg-white border border-[#F4F4F5] hover:border-[#CCFF00] transition-colors duration-300 flex flex-col h-full p-5 space-y-4"
    >
      {/* Image Container with Sharp Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F4F5] border border-[#E4E4E7]">
        <img
          src={project.heroImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/spunch.jpg";
          }}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-white">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.passwordProtected && (
              <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                <Lock className="w-3 h-3 text-[#CCFF00]" />
                <span>NDA</span>
              </span>
            )}
          </div>
        </div>

        {/* Client & Year tag */}
        <div className="absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-widest text-[#18181B] bg-white/90 backdrop-blur-md px-2 py-0.5 border border-[#E4E4E7]">
          {project.client} • {project.year}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {project.tagline && (
            <p className="text-[10px] font-bold text-[#18181B] bg-[#CCFF00] inline-block px-2 py-0.5 uppercase tracking-widest">
              {project.tagline}
            </p>
          )}
          <h3 className="font-display font-bold text-xl text-[#18181B] uppercase tracking-tight leading-snug group-hover:text-[#18181B] transition-colors pt-1">
            {project.title}
          </h3>
          <p className="text-[#52525B] text-xs leading-relaxed line-clamp-2 font-sans">
            {project.shortDescription}
          </p>
        </div>

        {/* Tools Tags & Button */}
        <div className="pt-3 border-t border-[#F4F4F5] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1 max-w-[65%]">
            {project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 border border-[#E4E4E7] bg-[#FAFAFA] text-[#18181B] text-[9px] font-bold uppercase tracking-wider"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#18181B] group-hover:text-[#18181B]">
            <span>Explore</span>
            <div className="w-4 h-[1px] bg-[#18181B] group-hover:w-6 group-hover:bg-[#CCFF00] transition-all"></div>
            <ArrowRight className="w-3 h-3 text-[#18181B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

