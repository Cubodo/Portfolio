import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { CmfTeaser } from './components/CmfTeaser';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { AwardsSection } from './components/AwardsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CaseStudyView } from './components/CaseStudyView';
import { EbikeDesignView } from './components/EbikeDesignView';
import { ResumeView } from './components/ResumeView';
import { ContactView } from './components/ContactView';
import { RedDotModal } from './components/RedDotModal';
import { VisualCustomizerDrawer } from './components/VisualCustomizerDrawer';

import {
  INITIAL_SITE_SETTINGS,
  PROJECTS_DATA,
  WORK_EXPERIENCE_DATA,
  EDUCATION_DATA,
  SKILLS_DATA,
  AWARDS_DATA,
} from './data/portfolioData';

import { Project, SiteSettings } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [redDotModalOpen, setRedDotModalOpen] = useState<boolean>(false);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  // Site Settings initialized from localStorage if present
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem('portfolio_site_settings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading saved site settings', e);
    }
    return INITIAL_SITE_SETTINGS;
  });

  // Handle selecting a project case study
  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentTab('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectById = (id: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === id);
    if (proj) {
      handleSelectProject(proj);
    }
  };

  const handleResetDefaults = () => {
    setSiteSettings(INITIAL_SITE_SETTINGS);
    try {
      localStorage.removeItem('portfolio_site_settings');
    } catch (e) {}
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-[#10B981] selection:text-black">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setSelectedProject(null);
          setCurrentTab(tab);
        }}
        siteSettings={siteSettings}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onOpenRedDotModal={() => setRedDotModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'ebike-design' || (currentTab === 'case-study' && selectedProject?.id === 'ebike-design') ? (
          <EbikeDesignView
            onBack={() => setCurrentTab('home')}
            onSelectProject={handleSelectProject}
            allProjects={PROJECTS_DATA}
          />
        ) : currentTab === 'case-study' && selectedProject ? (
          <CaseStudyView
            project={selectedProject}
            allProjects={PROJECTS_DATA}
            onBack={() => setCurrentTab('home')}
            onSelectProject={handleSelectProject}
            onOpenRedDotModal={() => setRedDotModalOpen(true)}
          />
        ) : currentTab === 'about' ? (
          <AboutSection
            siteSettings={siteSettings}
            education={EDUCATION_DATA}
            onOpenRedDotModal={() => setRedDotModalOpen(true)}
            onContactClick={() => setCurrentTab('contact')}
          />
        ) : currentTab === 'skills' ? (
          <SkillsSection skills={SKILLS_DATA} />
        ) : currentTab === 'resume' ? (
          <ResumeView
            siteSettings={siteSettings}
            experience={WORK_EXPERIENCE_DATA}
            education={EDUCATION_DATA}
            skills={SKILLS_DATA}
            onOpenRedDotModal={() => setRedDotModalOpen(true)}
          />
        ) : currentTab === 'contact' ? (
          <ContactView siteSettings={siteSettings} />
        ) : (
          /* Default Home View */
          <div className="space-y-12 sm:space-y-16">
            {siteSettings.sectionVisibility.hero && (
              <Hero
                siteSettings={siteSettings}
                onExploreClick={() => {
                  const el = document.getElementById('work');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onResumeClick={() => setCurrentTab('resume')}
                onOpenRedDotModal={() => setRedDotModalOpen(true)}
              />
            )}

            {siteSettings.sectionVisibility.featured && (
              <ProjectGrid
                projects={PROJECTS_DATA}
                projectOrder={siteSettings.projectOrder}
                onSelectProject={handleSelectProject}
              />
            )}

            {siteSettings.sectionVisibility.awards && (
              <AwardsSection
                awards={AWARDS_DATA}
                onOpenRedDotModal={() => setRedDotModalOpen(true)}
                onSelectProjectById={handleSelectProjectById}
              />
            )}

            {siteSettings.sectionVisibility.about && (
              <AboutSection
                siteSettings={siteSettings}
                education={EDUCATION_DATA}
                onOpenRedDotModal={() => setRedDotModalOpen(true)}
                onContactClick={() => setCurrentTab('contact')}
              />
            )}

            {siteSettings.sectionVisibility.skills && (
              <SkillsSection skills={SKILLS_DATA} />
            )}

            {siteSettings.sectionVisibility.contact && (
              <ContactView siteSettings={siteSettings} />
            )}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        siteSettings={siteSettings}
        setCurrentTab={(tab) => {
          setSelectedProject(null);
          setCurrentTab(tab);
        }}
        onOpenRedDotModal={() => setRedDotModalOpen(true)}
      />

      {/* Red Dot Winner Modal */}
      <RedDotModal
        isOpen={redDotModalOpen}
        onClose={() => setRedDotModalOpen(false)}
      />

      {/* Visual Customizer Drawer */}
      <VisualCustomizerDrawer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        siteSettings={siteSettings}
        setSiteSettings={setSiteSettings}
        projects={PROJECTS_DATA}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
