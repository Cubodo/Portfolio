import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Lock, Key, ArrowRight, X } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  projectOrder: string[];
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  projectOrder,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lockedProject, setLockedProject] = useState<Project | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const categories: ProjectCategory[] = [
    'All',
    'Consumer Hardware',
    'Watches & Accessories',
    'Mobility & EV',
    'Bespoke Lighting & CMF',
  ];

  // Order projects based on custom order
  const orderedProjects = [...projects].sort((a, b) => {
    const indexA = projectOrder.findIndex((id) => id.toLowerCase() === a.id.toLowerCase());
    const indexB = projectOrder.findIndex((id) => id.toLowerCase() === b.id.toLowerCase());
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  // Filter projects
  const filteredProjects = orderedProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (project: Project) => {
    if (project.passwordProtected) {
      setLockedProject(project);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      onSelectProject(project);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockedProject && passwordInput === (lockedProject.password || 'CASIO2026')) {
      const proj = lockedProject;
      setLockedProject(null);
      onSelectProject(proj);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F4F4F5] pb-8">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
            Selected Works / 2024–2026
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
            Featured Case Studies
          </h2>
          <p className="text-[#52525B] text-xs sm:text-sm max-w-xl">
            Detailed explorations spanning wristwatches, mobility hardware, travel gear, and CMF engineering.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px] sm:min-w-[300px]">
          <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search CAD, CMF, projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#E4E4E7] text-xs font-bold uppercase tracking-wider text-[#18181B] placeholder-[#A1A1AA] focus:outline-none focus:border-[#18181B]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-[#18181B]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#18181B] text-[#CCFF00]'
                  : 'bg-[#FAFAFA] text-[#71717A] border border-[#F4F4F5] hover:bg-[#F4F4F5] hover:text-[#18181B]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={handleCardClick}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-2xl border border-neutral-200 p-8 space-y-3">
          <p className="text-neutral-500 text-sm">No projects matched your search criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs font-semibold text-[#10B981] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Password Modal */}
      {lockedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 max-w-md w-full space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setLockedProject(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-neutral-900">
                  Protected Case Study
                </h3>
                <p className="text-xs text-neutral-500">{lockedProject.title}</p>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              This case study contains confidential NDA material. Please enter the passcode to access full details.
              <span className="block font-mono text-[11px] text-neutral-400 mt-1">(Demo Passcode: CASIO2026)</span>
            </p>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter Passcode..."
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#10B981]"
                  autoFocus
                />
                {passwordError && (
                  <p className="text-xs text-red-600 font-medium mt-1">
                    Incorrect passcode. Try CASIO2026.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    // Quick unlock demo button
                    setPasswordInput('CASIO2026');
                  }}
                  className="px-3 py-1.5 text-xs text-neutral-500 hover:text-neutral-900"
                >
                  Fill Demo Key
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-[#10B981] hover:text-black transition-colors"
                >
                  Unlock & View
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
