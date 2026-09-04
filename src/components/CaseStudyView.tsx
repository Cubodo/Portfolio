import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Wrench,
  CheckCircle2,
  Maximize2,
  X,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Share2,
  Copy,
  Check
} from 'lucide-react';

interface CaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onOpenRedDotModal: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  allProjects,
  onBack,
  onSelectProject,
  onOpenRedDotModal,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'sketches' | 'cad' | 'cmf'>('all');

  // Scroll to top on project mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find prev & next project
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="min-h-screen bg-white text-[#18181B] pb-24">
      {/* Top Floating Sticky Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] px-4 sm:px-8 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] hover:bg-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Back to All Works</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
          <span>{project.category}</span>
          <span>/</span>
          <span className="text-[#18181B]">{project.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="p-2 bg-[#FAFAFA] border border-[#F4F4F5] hover:border-[#18181B] text-[#18181B] transition-colors"
            title="Share case study link"
          >
            {copiedLink ? <Check className="w-4 h-4 text-[#18181B]" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Section 1: Hero Banner */}
        <header className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                {project.category}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 flex-1">
                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] uppercase">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              {project.awards && project.awards.length > 0 && (
                <button
                  onClick={onOpenRedDotModal}
                  className="shrink-0 p-0 bg-transparent border-0 outline-none self-start md:self-center"
                  title="View Red Dot Award details"
                >
                  <img
                    src="/images/reddot_badge.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=400&q=80";
                    }}
                    alt="Red Dot Award: Design Concept"
                    className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Project Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white border border-[#F4F4F5]">
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Institution / Client</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">{project.university || project.client}</span>
              {(project.faculty_advisor || project.project_guide) && (
                <span className="text-[10px] text-[#71717A] font-medium tracking-normal block normal-case mt-0.5">
                  (Faculty Advisor: {project.faculty_advisor || project.project_guide})
                </span>
              )}
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Design Team</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">{project.designers || project.role}</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Category</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">{project.category}</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Year</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">{project.year}</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Tools</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">{project.tools.slice(0, 3).join(', ')}</span>
            </div>
          </div>

          {/* Hero Image Viewport */}
          <div className="relative aspect-[16/9] border border-[#E4E4E7] bg-[#18181B] group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <button
              onClick={() => setSelectedImage(project.heroImage)}
              className="absolute bottom-4 right-4 p-2.5 bg-[#18181B] text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
              title="Expand full screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </header>



        {/* Section: Pollution & Public Health Context (If Available) */}
        {project.pollutionContext && (
          <section className="bg-[#18181B] text-white p-6 sm:p-8 space-y-6 border border-[#18181B]">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] font-display">
                01-B. Environmental Context
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                India Air Pollution & Health Statistics
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-3xl leading-relaxed">
                {project.pollutionContext.summary}
              </p>
            </div>

            <div className="p-4 bg-[#27272A] border border-[#3F3F46] inline-block">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#CCFF00] block">
                Standard Comparison
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider mt-0.5 block">
                {project.pollutionContext.indiaVsWhoStandard}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* PM2.5 Stats Bar Charts */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#CCFF00]">
                  Global PM2.5 Concentration (µg/m³)
                </h3>
                <div className="space-y-2">
                  {project.pollutionContext.pm25Stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA]">
                        <span className="text-white font-bold">{stat.country}</span>
                        <span>{stat.value} µg/m³</span>
                      </div>
                      <div className="w-full h-2 bg-[#27272A] overflow-hidden">
                        <div
                          className="h-full bg-[#CCFF00]"
                          style={{ width: `${Math.min(100, (stat.value / 90) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Air Pollution Deaths */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#CCFF00]">
                  Attributable Annual Deaths (2019)
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {project.pollutionContext.deathStats.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-[#27272A] border border-[#3F3F46]">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{item.country}</span>
                      <span className="font-mono text-sm font-bold text-[#CCFF00]">{item.deaths} deaths</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section: Market Context & Economic Pyramid */}
        {project.marketContext && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                01-C. Market Intelligence
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Indian Market Context & Target Audience
              </h2>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">CAGR (Revenue)</span>
                <span className="text-xs font-bold text-[#18181B] mt-1 block">{project.marketContext.cagrRevenue}</span>
              </div>
              <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">CAGR (Volume)</span>
                <span className="text-xs font-bold text-[#18181B] mt-1 block">{project.marketContext.cagrUnits}</span>
              </div>
              <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Market Stage</span>
                <span className="text-xs font-bold text-[#18181B] mt-1 block">{project.marketContext.marketStage}</span>
              </div>
              <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Average Spend</span>
                <span className="text-xs font-bold text-[#18181B] mt-1 block">{project.marketContext.averageSpend}</span>
              </div>
            </div>

            {/* Competitor Brand Logos / Names & Basis of Competition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] block">
                  Key Market Players Analyzed
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.marketContext.competitorBrands.map((brand, i) => (
                    <span key={i} className="px-3 py-1 bg-[#18181B] text-white text-xs font-bold uppercase tracking-wider">
                      {brand}
                    </span>
                  ))}
                </div>
                <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs text-[#52525B]">
                  <strong className="text-[#18181B]">Basis of Competition:</strong> {project.marketContext.basisOfCompetition}
                </div>
              </div>

              {/* Income Pyramid Table */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] block">
                  Indian Household Income Pyramid
                </span>
                <div className="border border-[#F4F4F5] overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#18181B] text-white text-[10px] uppercase font-bold tracking-widest">
                      <tr>
                        <th className="p-2">Segment</th>
                        <th className="p-2">Households</th>
                        <th className="p-2">Population</th>
                        <th className="p-2">Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F4F4F5]">
                      {project.marketContext.incomePyramid.map((row, i) => (
                        <tr key={i} className={row.segment === 'Middle Class' ? 'bg-[#CCFF00]/15 font-bold' : ''}>
                          <td className="p-2">{row.segment}</td>
                          <td className="p-2">{row.households}</td>
                          <td className="p-2">{row.population}</td>
                          <td className="p-2">{row.income}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section: 14-Model Competitor Matrix */}
        {project.competitorMatrix && project.competitorMatrix.length > 0 && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                01-D. Benchmarking Matrix
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                14-Model Competitor Hardware Benchmarking
              </h2>
              <p className="text-xs text-[#52525B]">
                Detailed teardown and technical comparison of purifiers across price point ₹9,970 – ₹24,999.
              </p>
            </div>

            <div className="overflow-x-auto border border-[#F4F4F5]">
              <table className="w-full text-left text-xs min-w-[700px]">
                <thead className="bg-[#18181B] text-[#CCFF00] text-[9px] uppercase font-bold tracking-widest">
                  <tr>
                    <th className="p-2.5">Brand & Model</th>
                    <th className="p-2.5">Coverage</th>
                    <th className="p-2.5">Power</th>
                    <th className="p-2.5">Filters</th>
                    <th className="p-2.5">Dimensions</th>
                    <th className="p-2.5">Weight</th>
                    <th className="p-2.5 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F4F5] text-[#3F3F46]">
                  {project.competitorMatrix.map((item, i) => (
                    <tr key={i} className="hover:bg-[#FAFAFA] transition-colors">
                      <td className="p-2.5 font-bold text-[#18181B]">
                        {item.brand} <span className="text-[#71717A] font-normal">{item.model}</span>
                      </td>
                      <td className="p-2.5">{item.area}</td>
                      <td className="p-2.5">{item.power}</td>
                      <td className="p-2.5">{item.filters}</td>
                      <td className="p-2.5 font-mono text-[10px]">{item.dimensions}</td>
                      <td className="p-2.5 font-bold">{item.weight}</td>
                      <td className="p-2.5 text-right font-bold text-[#18181B]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Section: Contextual Inquiry & User Research Profiles */}
        {project.userResearchProfiles && project.userResearchProfiles.length > 0 && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                03-A. Contextual Inquiry
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Home Context Studies & User Profiles
              </h2>
              <p className="text-xs text-[#52525B]">
                In-depth field interviews and task observation in Delhi-NCR households.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.userResearchProfiles.map((user, i) => (
                <div key={i} className="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                  <div className="flex justify-between items-start border-b border-[#E4E4E7] pb-2">
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wide">
                        {user.name} ({user.age}, {user.gender})
                      </h4>
                      <span className="text-[10px] text-[#71717A] uppercase block">{user.occupation} • {user.location}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#18181B] text-[#CCFF00] text-[9px] font-bold uppercase tracking-wider">
                      {user.productUsed}
                    </span>
                  </div>

                  <div className="text-xs text-[#3F3F46] space-y-1.5 font-sans">
                    <p><strong>Feedback:</strong> "{user.feedback}"</p>
                    <p><strong>Usage Pattern:</strong> {user.usagePattern}</p>
                    <p className="text-[#DC2626] font-medium"><strong>Usability Issues:</strong> {user.issues}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Task Analysis Friction Points */}
            {project.taskAnalysisObservations && (
              <div className="p-5 bg-[#18181B] text-white space-y-3">
                <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-widest block">
                  Observed Task Analysis Friction Points
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#D4D4D8]">
                  {project.taskAnalysisObservations.map((obs, idx) => (
                    <div key={idx} className="p-2.5 bg-[#27272A] border border-[#3F3F46] flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#CCFF00] mt-1.5 shrink-0"></div>
                      <span>{obs}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Section: Personas */}
        {project.personas && project.personas.length > 0 && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                03-B. User Personas
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Target User Profiles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.personas.map((persona, i) => (
                <div key={i} className="p-6 bg-white border border-[#18181B] space-y-4">
                  <div className="flex justify-between items-start border-b border-[#F4F4F5] pb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
                        {persona.name}, {persona.age}
                      </h3>
                      <span className="text-xs font-bold text-[#71717A] uppercase">{persona.role} • {persona.location}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold bg-[#18181B] text-[#CCFF00] px-2 py-1 uppercase tracking-wider block">
                        {persona.incomeGroup}
                      </span>
                      <span className="text-[10px] text-[#71717A] mt-0.5 block">{persona.salary}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#52525B] leading-relaxed italic">
                    "{persona.about}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5]">
                      <strong className="text-[#18181B] block uppercase text-[10px] mb-1">Goals</strong>
                      <ul className="space-y-1 text-[#3F3F46]">
                        {persona.goals.map((g, idx) => <li key={idx}>• {g}</li>)}
                      </ul>
                    </div>
                    <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5]">
                      <strong className="text-[#18181B] block uppercase text-[10px] mb-1">Frustrations</strong>
                      <ul className="space-y-1 text-[#3F3F46]">
                        {persona.frustrations.map((f, idx) => <li key={idx}>• {f}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section: Visual Controls & Ergonomics Study */}
        {project.visualControlsStudy && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                04. Controls & Ergonomics Study
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Visual Controls & Physical Interface Study
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs">
                <strong className="text-[#18181B] uppercase text-[10px] block mb-1">Knobs Reference</strong>
                <p className="text-[#52525B]">{project.visualControlsStudy.knobsRef.join(', ')}</p>
              </div>
              <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs">
                <strong className="text-[#18181B] uppercase text-[10px] block mb-1">Buttons Reference</strong>
                <p className="text-[#52525B]">{project.visualControlsStudy.buttonsRef.join(', ')}</p>
              </div>
              <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs">
                <strong className="text-[#18181B] uppercase text-[10px] block mb-1">Indicators Reference</strong>
                <p className="text-[#52525B]">{project.visualControlsStudy.indicatorsRef.join(', ')}</p>
              </div>
              <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs">
                <strong className="text-[#18181B] uppercase text-[10px] block mb-1">Grilles Reference</strong>
                <p className="text-[#52525B]">{project.visualControlsStudy.grillRef.join(', ')}</p>
              </div>
              <div className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs">
                <strong className="text-[#18181B] uppercase text-[10px] block mb-1">Handles Reference</strong>
                <p className="text-[#52525B]">{project.visualControlsStudy.handleRef.join(', ')}</p>
              </div>
            </div>

            {/* Physical Controls Rationale Callout */}
            {project.physicalControlsRationale && (
              <div className="p-6 bg-[#18181B] text-white space-y-3">
                <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-widest block">
                  Ergonomic Rationale for Physical Controls
                </span>
                <blockquote className="text-xs sm:text-sm text-[#E4E4E7] italic border-l-2 border-[#CCFF00] pl-4 py-1 font-serif">
                  "{project.physicalControlsRationale.quote}"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  {project.physicalControlsRationale.points.map((pt, i) => (
                    <div key={i} className="p-3 bg-[#27272A] border border-[#3F3F46] text-[#D4D4D8]">
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Section: Design Directions & Concept Evaluation Scores */}
        {project.designDirections && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                05. Concept Evaluation
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Design Directions & Jury Evaluation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.designDirections.map((dir, i) => (
                <div key={i} className={`p-4 border text-xs space-y-1.5 ${dir.status.includes('Selected') ? 'border-[#18181B] bg-[#CCFF00]/10' : 'border-[#F4F4F5] bg-[#FAFAFA]'}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#18181B] text-white inline-block">
                    {dir.status}
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#18181B] uppercase pt-1">{dir.direction}</h4>
                  <p className="text-[#52525B] leading-relaxed">{dir.detail}</p>
                </div>
              ))}
            </div>

            {/* Concept Scores Breakdown */}
            {project.conceptEvaluationScores && (
              <div className="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] block">
                  33 Concept Jury Evaluation Highlights (8 Reviewers)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {project.conceptEvaluationScores.map((c, i) => (
                    <div key={i} className={`p-2.5 border text-center ${c.status === 'top' ? 'bg-[#18181B] text-[#CCFF00] border-[#18181B]' : 'bg-white text-[#71717A] border-[#E4E4E7]'}`}>
                      <div className="text-[9px] font-bold uppercase">Design #{c.designNumber}</div>
                      <div className="text-base font-bold font-mono">{c.score} pts</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Section: Academic Timeline & Jury Stages */}
        {project.programTimeline && (
          <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                06. Academic Execution & Defense
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Program Timeline & Jury Stages
              </h2>
            </div>

            {/* Timeline Breakdown */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] block">
                12-Week Thesis Milestone Schedule
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {project.programTimeline.map((item, i) => (
                  <div key={i} className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] text-xs space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-bold text-[#71717A]">
                      <span>{item.weeks}</span>
                      <span className="text-[#18181B] font-mono">{item.dates}</span>
                    </div>
                    <p className="font-medium text-[#18181B] leading-tight pt-1">{item.work}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Jury Details */}
            {project.stageJuryDetails && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <div className="p-4 bg-[#18181B] text-white text-xs space-y-1">
                  <span className="text-[9px] font-bold text-[#CCFF00] uppercase block">STAGE 1</span>
                  <p className="text-[#D4D4D8] leading-relaxed">{project.stageJuryDetails.stage1}</p>
                </div>
                <div className="p-4 bg-[#18181B] text-white text-xs space-y-1">
                  <span className="text-[9px] font-bold text-[#CCFF00] uppercase block">STAGE 2</span>
                  <p className="text-[#D4D4D8] leading-relaxed">{project.stageJuryDetails.stage2}</p>
                </div>
                <div className="p-4 bg-[#18181B] text-white text-xs space-y-1">
                  <span className="text-[9px] font-bold text-[#CCFF00] uppercase block">PRE-JURY</span>
                  <p className="text-[#D4D4D8] leading-relaxed">{project.stageJuryDetails.preJury}</p>
                </div>
                <div className="p-4 bg-[#18181B] text-white text-xs space-y-1">
                  <span className="text-[9px] font-bold text-[#CCFF00] uppercase block">FINAL JURY</span>
                  <p className="text-[#D4D4D8] leading-relaxed">{project.stageJuryDetails.jury}</p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Section 3: Design Challenge */}
        <section className="p-6 sm:p-8 bg-[#18181B] text-white space-y-3 border border-[#18181B]">
          <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] font-display">
            02. Problem Definition
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
            The Design Challenge
          </h2>
          <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm font-sans max-w-4xl">
            {project.challenge}
          </p>
        </section>

        {/* Section 4 & 5: Research & Key Insights */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-3">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              03. Market Research
            </span>
            <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
              Field Studies & Observations
            </h3>
            <p className="text-[#52525B] text-xs leading-relaxed font-sans">
              {project.research}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-3">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              04. User Insights
            </span>
            <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
              Key Insights & Strategic Opportunities
            </h3>
            <ul className="space-y-2.5">
              {project.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#18181B] font-medium">
                  <div className="w-1.5 h-1.5 bg-[#CCFF00] mt-1.5 shrink-0"></div>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 & 7: Ideation & Sketch Development */}
        <section className="space-y-6">
          <div className="border-b border-[#F4F4F5] pb-4 space-y-1">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              05 & 06. Form Exploration
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Ideation & Sketch Development
            </h2>
            <p className="text-[#52525B] text-xs max-w-3xl font-sans">
              {project.ideation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.sketchDevelopment.map((sketch, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#F4F4F5] overflow-hidden group"
              >
                <div className="relative aspect-[16/10] bg-[#FAFAFA] overflow-hidden border-b border-[#F4F4F5]">
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => setSelectedImage(sketch.image)}
                    className="absolute bottom-3 right-3 p-2 bg-[#18181B] text-[#CCFF00]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider">{sketch.title}</h4>
                  <p className="text-xs text-[#52525B] leading-relaxed font-sans">{sketch.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: CAD Development */}
        <section className="space-y-6">
          <div className="border-b border-[#F4F4F5] pb-4 space-y-1">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              07. Engineering Geometry
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              3D CAD Surface Modeling & Assembly
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.cadDevelopment.map((cad, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#F4F4F5] overflow-hidden group"
              >
                <div className="relative aspect-[16/10] bg-[#FAFAFA] overflow-hidden border-b border-[#F4F4F5]">
                  <img
                    src={cad.image}
                    alt={cad.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => setSelectedImage(cad.image)}
                    className="absolute bottom-3 right-3 p-2 bg-[#18181B] text-[#CCFF00]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider">{cad.title}</h4>
                  <p className="text-xs text-[#52525B] leading-relaxed font-sans">{cad.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Prototyping */}
        <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              08. Rapid Testing
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Prototyping & Ergonomic Validation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.prototyping.map((proto, idx) => (
              <div key={idx} className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                <div className="relative aspect-[16/10] bg-[#E4E4E7] overflow-hidden">
                  <img src={proto.image} alt={proto.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#18181B]">{proto.title}</h4>
                  <p className="text-xs text-[#52525B] mt-1 font-sans">{proto.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: CMF Exploration */}
        <section className="bg-[#18181B] text-white p-6 sm:p-8 space-y-6 border border-[#18181B]">
          <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] font-display">
            09. Material Specs
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
            {project.cmfExploration.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans">
                {project.cmfExploration.text}
              </p>

              {/* Swatch List */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase text-[#A1A1AA] tracking-widest block">
                  Material Swatch System
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {project.cmfExploration.swatches.map((swatch, i) => (
                    <div key={i} className="p-3 bg-[#27272A] border border-[#3F3F46] space-y-1">
                      <div className="w-full h-5 border border-white/20" style={{ backgroundColor: swatch.hex }} />
                      <div className="font-display font-bold text-xs text-white uppercase tracking-wider truncate">{swatch.name}</div>
                      <div className="text-[9px] text-[#A1A1AA] uppercase">{swatch.finish}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] border border-[#27272A] bg-black">
              <img src={project.cmfExploration.image} alt="CMF Spec" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Section 11 & 12: Manufacturing & Final Outcome */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-2">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              10. Production Considerations
            </span>
            <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
              Tooling & Manufacturing Strategy
            </h3>
            <p className="text-xs text-[#52525B] leading-relaxed font-sans">
              {project.manufacturing}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-2">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              11. Outcome & Impact
            </span>
            <h3 className="font-display font-bold text-lg text-[#18181B] uppercase tracking-tight">
              Final Deliverables & Recognition
            </h3>
            <p className="text-xs text-[#52525B] leading-relaxed font-sans">
              {project.finalOutcome}
            </p>
          </div>
        </section>

        {/* Section 13: Image Gallery */}
        <section className="space-y-6">
          <div className="border-b border-[#F4F4F5] pb-4 space-y-1">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              12. High-Res Visuals
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Product Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer relative aspect-[4/3] bg-[#FAFAFA] border border-[#F4F4F5] group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-[#CCFF00]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 14: Key Learnings */}
        <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-4">
          <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
            13. Retrospective
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
            Key Learnings & Retrospective
          </h2>
          <ul className="space-y-2.5">
            {project.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#18181B] font-medium">
                <div className="w-1.5 h-1.5 bg-[#CCFF00] mt-1.5 shrink-0"></div>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 15: Previous / Next Navigation */}
        <nav className="pt-12 border-t border-[#F4F4F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="w-full sm:w-auto p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors text-left flex items-center gap-4 group"
          >
            <div className="w-10 h-10 bg-[#18181B] text-[#CCFF00] flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                Previous Project
              </span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#18181B]">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="w-full sm:w-auto p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors text-right flex items-center justify-end gap-4 group"
          >
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                Next Project
              </span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#18181B]">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 bg-[#18181B] text-[#CCFF00] flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </nav>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-2 bg-[#18181B] border border-[#27272A]"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain border border-[#27272A]"
          />
        </div>
      )}
    </article>
  );
};
