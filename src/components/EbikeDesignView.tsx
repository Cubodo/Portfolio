import React from 'react';
import { ArrowLeft, ArrowUpRight, Tag, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { Project } from '../types';

interface EbikeDesignViewProps {
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export const EbikeDesignView: React.FC<EbikeDesignViewProps> = ({
  onBack,
  onSelectProject,
  allProjects = [],
}) => {
  const nextProject = allProjects.length > 0 ? allProjects[1] || allProjects[0] : null;

  return (
    <article className="min-h-screen bg-white text-[#18181B] font-sans pb-24">
      {/* Sticky top bar */}
      <div className="sticky top-18 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] px-4 sm:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] hover:bg-[#18181B] px-3 py-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
            <span>EV & Mobility</span>
            <span>/</span>
            <span className="text-[#18181B]">E-BIKE DESIGN</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Header Section */}
        <header className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                EV & MOBILITY
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] uppercase">
                E-BIKE DESIGN
              </h1>
              <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-3xl">
                Due to the increase in pollution, many companies are getting in E-Mobility. This E-bike was Designed as an Work project for a Company based in Ahmedabad, Gujarat. Which had the dream of making affordable, good E-bikes for the Indian Market. Currently the Bikes are in Production and ready to hit the Market.
              </p>
            </div>
          </div>

          {/* Project Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white border border-[#F4F4F5]">
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Client / Location</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Monarch Innovation, Ahmedabad, Gujarat</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Design Team</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Amit Kumar</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Target Group</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">General Age (14+) Daily Use</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Status</span>
              <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider mt-0.5 block">In Production</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Scope</span>
              <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Industrial & Ergonomic Design</span>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] border border-[#E4E4E7] bg-[#18181B] overflow-hidden">
            <img
              src="/images/ev_charger.jpg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558441719-670b357021bc?auto=format&fit=crop&w=1200&q=80";
              }}
              alt="E-Bike Design"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </header>

        {/* Brief Section (Dark Callout matching Case Study style) */}
        <section className="bg-[#18181B] text-white p-8 sm:p-12 space-y-6 border border-[#18181B] relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-3xl mx-auto text-center">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#CCFF00] text-[#18181B] inline-block">
              Project Brief
            </span>
            <h3 className="font-display font-medium text-2xl sm:text-4xl text-white leading-tight tracking-tight mt-4">
              To Design an <span className="text-[#CCFF00] font-bold">EV bicycle</span><br className="hidden sm:inline" /> for general age (14+) group for daily use in and around the city.
            </h3>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              02. Process & Roadmap
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight flex items-baseline gap-2">
              <span>E-Bicycle Timeline</span>
              <span className="text-xs font-normal text-[#71717A] lowercase">(Rough)</span>
            </h2>
          </div>

          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 01</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Project Brief</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Defining 4 W's</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 02</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Primary Research</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Problem</li>
                <li>Evolution of cycle</li>
                <li>How a cycle works</li>
                <li>Types of cycles</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 03</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Secondary Research</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Market study in stores</li>
                <li>User Reviews</li>
                <li>User Testing</li>
                <li>Ergonomics</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 04</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Concept Generation</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Boards</li>
                <li>Sketching</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 05</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Product POC</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Modeling</li>
                <li>Prototyping</li>
                <li>Rendering</li>
              </ul>
            </div>
          </div>

          {/* Timeline Bar Chart */}
          <div className="p-6 bg-[#18181B] text-white border border-[#18181B] space-y-6">
            <div className="flex justify-between items-center text-xs text-[#A1A1AA] font-mono border-b border-neutral-800 pb-3">
              <span>PROJECT SCHEDULE VISUALIZATION</span>
              <span className="text-[#CCFF00]">WEEK 1 - WEEK 9</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Project Brief</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-[#CCFF00] rounded-xs" style={{ width: '12%', marginLeft: '0%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Primary Research</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-xs" style={{ width: '25%', marginLeft: '10%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Secondary Research</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-xs" style={{ width: '20%', marginLeft: '30%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Concept Gen.</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs" style={{ width: '35%', marginLeft: '35%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Product POC</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-xs" style={{ width: '30%', marginLeft: '70%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
              <span className="w-28 shrink-0"></span>
              <div className="flex-1 flex justify-between text-[9px] font-mono text-[#A1A1AA] uppercase">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
                <span>Week 7</span>
                <span>Week 8</span>
                <span>Week 9</span>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Research (Cause) Case Study Section */}
        <section className="space-y-12 bg-white p-6 sm:p-10 border border-[#F4F4F5]">
          {/* Section Header & AQI Bento Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context / Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-mono block">
                  CASE STUDY / 01 — PRIMARY RESEARCH
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#18181B] tracking-tight uppercase">
                  Primary Research <br />
                  <span className="text-[#71717A] text-xl sm:text-2xl font-normal lowercase">(cause)</span>
                </h2>
              </div>

              <div className="text-sm text-[#52525B] leading-relaxed space-y-4">
                <p>
                  Air pollution can shorten lives by almost 10 years in the Indian capital, Delhi, the world&apos;s most polluted city, says a report by a US research group.
                </p>
                <p>
                  The study adds that the average Indian life expectancy is shortened by five years at current air quality levels. India&apos;s 1.3 billion people live in areas where the &quot;annual average particulate pollution level&quot; exceeds the WHO safe limit of 5μg/m³, it says.
                </p>
                <p>
                  Bad air kills millions in India every year. The smog-filled air, which usually covers Indian cities during the winter months, contains dangerously high levels of fine particulate matter called PM2.5 - tiny particles that can clog lungs and cause a host of diseases.
                </p>
              </div>
            </div>

            {/* Right Column: Air Quality Index Technical Card */}
            <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#E4E4E7] p-6 space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-[#E4E4E7] pb-4">
                <h3 className="font-display font-bold text-base uppercase text-[#18181B] tracking-wide">
                  AIR QUALITY INDEX (AQI)
                </h3>
                <span className="text-[10px] font-mono font-bold bg-[#18181B] text-[#CCFF00] px-2.5 py-1 uppercase tracking-wider">
                  LIVE DATA: 8:00 AM
                </span>
              </div>

              <div className="relative aspect-[16/9] sm:aspect-[2/1] bg-[#18181B] border border-[#E4E4E7] overflow-hidden">
                <img
                  src="/images/india_design_1.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80";
                  }}
                  alt="Technical Monochromatic India Air Quality Map"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />

                {/* Data Callout Overlay Points */}
                <div className="absolute top-8 left-[22%] group">
                  <div className="bg-[#18181B] text-white px-2 py-1 text-[9px] font-mono font-bold shadow-sm border border-white/20">
                    CHANDIGARH: 88
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#00E5FF] rounded-full animate-ping mt-1 ml-2"></div>
                </div>

                <div className="absolute top-[28%] left-[32%] group">
                  <div className="bg-[#EF4444] text-white px-2 py-1 text-[9px] font-mono font-bold shadow-sm">
                    DELHI: 331
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#EF4444] rounded-full animate-ping mt-1 ml-2"></div>
                </div>

                <div className="absolute bottom-[28%] left-[24%] group">
                  <div className="bg-[#3F3F46] text-white px-2 py-1 text-[9px] font-mono font-bold shadow-sm border border-white/20">
                    MUMBAI: 207
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#A1A1AA] rounded-full animate-ping mt-1 ml-2"></div>
                </div>
              </div>

              {/* AQI Scale Legend */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="border-l-2 border-[#00E5FF] pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono font-bold text-[#71717A] uppercase">GOOD</div>
                  <div className="font-display font-bold text-sm text-[#18181B]">0-50</div>
                </div>
                <div className="border-l-2 border-[#18181B] pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono font-bold text-[#71717A] uppercase">MODERATE</div>
                  <div className="font-display font-bold text-sm text-[#18181B]">101-200</div>
                </div>
                <div className="border-l-2 border-[#71717A] pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono font-bold text-[#71717A] uppercase">POOR</div>
                  <div className="font-display font-bold text-sm text-[#18181B]">201-300</div>
                </div>
                <div className="border-l-2 border-[#EF4444] pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono font-bold text-[#71717A] uppercase">SEVERE</div>
                  <div className="font-display font-bold text-sm text-[#EF4444]">&gt;401</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Evidence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F4F4F5]">
            <div className="space-y-3 group">
              <div className="overflow-hidden border border-[#E4E4E7] aspect-[16/9] bg-[#18181B]">
                <img
                  src="/images/india_design_2.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80";
                  }}
                  alt="Urban Traffic Congestion"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold text-[#18181B] uppercase font-display">Congestion / Traffic</h4>
                <span className="font-mono text-[10px] text-[#71717A] uppercase">PLATEAU EFFECT / 2021</span>
              </div>
            </div>

            <div className="space-y-3 group">
              <div className="overflow-hidden border border-[#E4E4E7] aspect-[16/9] bg-[#18181B]">
                <img
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                  }}
                  alt="Industrial Air Pollution"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center text-xs">
                <h4 className="font-bold text-[#18181B] uppercase font-display">Pollution</h4>
                <span className="font-mono text-[10px] text-[#71717A] uppercase">PARTICULATE DENSITY / PM2.5</span>
              </div>
            </div>
          </div>

          {/* Growth of Private-Vehicle Ownership & Power Trip Data */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#F4F4F5]">
            <div className="lg:col-span-4 space-y-6">
              <div className="border-t-2 border-[#18181B] pt-4 space-y-3">
                <h3 className="font-display font-bold text-lg text-[#18181B] uppercase">
                  Growth of Private-vehicle Ownership
                </h3>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  The growth of vehicles has been much faster than that of the population. The number of registered vehicles increased from 55 million in 2001 to 142 million by 2011, with a currently estimated 195.5 million in 2016. Seventy-five per cent of these registered vehicles (147 million) are motorcycles.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="bg-[#FAFAFA] border border-[#F4F4F5] p-3.5 flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase">
                    URBAN ROAD LENGTH INCREASE
                  </span>
                  <span className="font-display font-bold text-base text-[#18181B]">124%</span>
                </div>
                <div className="bg-[#FAFAFA] border border-[#F4F4F5] p-3.5 flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase">
                    VEHICLE REGISTRATION INCREASE
                  </span>
                  <span className="font-display font-bold text-base text-[#18181B]">215%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* Registered Vehicles Bar Chart Card */}
              <div className="bg-white border border-[#E4E4E7] p-6 space-y-6">
                <h4 className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-wider underline">
                  REGISTERED VEHICLES (IN MILLIONS)
                </h4>

                <div className="h-48 flex items-end gap-3 sm:gap-6 px-2 sm:px-4 border-b border-[#E4E4E7] pb-2">
                  <div className="flex-1 bg-[#F4F4F5] h-[15%] relative group hover:bg-[#18181B] transition-colors">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#71717A] group-hover:text-[#18181B]">0.03</span>
                  </div>
                  <div className="flex-1 bg-[#F4F4F5] h-[22%] relative group hover:bg-[#18181B] transition-colors">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#71717A] group-hover:text-[#18181B]">0.31</span>
                  </div>
                  <div className="flex-1 bg-[#F4F4F5] h-[45%] relative group hover:bg-[#18181B] transition-colors">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#71717A] group-hover:text-[#18181B]">34.2</span>
                  </div>
                  <div className="flex-1 bg-[#F4F4F5] h-[70%] relative group hover:bg-[#18181B] transition-colors">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#71717A] group-hover:text-[#18181B]">101.9</span>
                  </div>
                  <div className="flex-1 bg-[#18181B] h-[95%] relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] font-bold text-[#18181B]">168.9</span>
                  </div>
                </div>

                <div className="flex justify-between font-mono text-[10px] text-[#71717A] px-2 sm:px-4">
                  <span>1951</span>
                  <span>1961</span>
                  <span>1991</span>
                  <span>2011</span>
                  <span className="text-[#18181B] font-bold">2016</span>
                </div>
              </div>

              {/* Power Trip Dark Metric Card */}
              <div className="bg-[#18181B] text-white p-6 sm:p-8 space-y-6 border border-[#18181B]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#CCFF00] font-bold text-lg">⚡</span>
                    <h4 className="font-display font-bold text-xl uppercase tracking-tight text-white">Power Trip</h4>
                  </div>
                  <p className="text-xs text-[#A1A1AA] font-mono">
                    Cars&apos; share of energy use is set to double by 2040
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono text-[#A1A1AA] uppercase">CARS</div>
                    <div className="text-2xl font-bold font-display text-[#CCFF00]">27%</div>
                    <div className="h-1 bg-neutral-800 w-full rounded-xs">
                      <div className="h-1 bg-[#CCFF00] w-[27%] rounded-xs"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono text-[#A1A1AA] uppercase">BUSES</div>
                    <div className="text-2xl font-bold font-display text-white">12%</div>
                    <div className="h-1 bg-neutral-800 w-full rounded-xs">
                      <div className="h-1 bg-white w-[12%] rounded-xs"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono text-[#A1A1AA] uppercase">2 &amp; 3 WHEELERS</div>
                    <div className="text-2xl font-bold font-display text-white">11%</div>
                    <div className="h-1 bg-neutral-800 w-full rounded-xs">
                      <div className="h-1 bg-white w-[11%] rounded-xs"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono text-[#A1A1AA] uppercase">HEAVY FREIGHT</div>
                    <div className="text-2xl font-bold font-display text-white">34%</div>
                    <div className="h-1 bg-neutral-800 w-full rounded-xs">
                      <div className="h-1 bg-white w-[34%] rounded-xs"></div>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-[#71717A] uppercase tracking-wider pt-3 border-t border-neutral-800">
                  Source: International Energy Agency, Centre for Science and Environment
                </div>
              </div>
            </div>
          </div>

          {/* Evolution of Bicycle Historiography */}
          <div className="pt-8 border-t border-[#F4F4F5] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#18181B] uppercase tracking-tight">
                Evolution of Bicycle
              </h3>
              <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest">
                STRUCTURAL HISTORIOGRAPHY
              </span>
            </div>

            <div className="overflow-x-auto pb-4">
              <div className="min-w-[760px] grid grid-cols-5 gap-4 pt-4">
                <div className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-full aspect-[4/3] bg-[#FAFAFA] border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                      }}
                      alt="1817 Draisienne"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#18181B]">1817</div>
                    <div className="font-mono text-[10px] font-bold text-[#52525B] uppercase">DRAISIENNE</div>
                    <div className="font-mono text-[9px] text-[#A1A1AA] uppercase">Germany</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-full aspect-[4/3] bg-[#FAFAFA] border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                      }}
                      alt="1839 Pédales"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#18181B]">1839</div>
                    <div className="font-mono text-[10px] font-bold text-[#52525B] uppercase">PÉDALES</div>
                    <div className="font-mono text-[9px] text-[#A1A1AA] uppercase">Scotland</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-full aspect-[4/3] bg-[#FAFAFA] border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                      }}
                      alt="1861 Penny-farthing"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#18181B]">1861</div>
                    <div className="font-mono text-[10px] font-bold text-[#52525B] uppercase">PENNY-FARTHING</div>
                    <div className="font-mono text-[9px] text-[#A1A1AA] uppercase">France</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-full aspect-[4/3] bg-[#FAFAFA] border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                      }}
                      alt="1871 Starley Bike"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#18181B]">1871</div>
                    <div className="font-mono text-[10px] font-bold text-[#52525B] uppercase">STARLEY BIKE</div>
                    <div className="font-mono text-[9px] text-[#A1A1AA] uppercase">England</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-full aspect-[4/3] bg-[#FAFAFA] border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/ev_charger.jpg";
                      }}
                      alt="1879 Bicyclette"
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-display font-bold text-sm text-[#18181B]">1879</div>
                    <div className="font-mono text-[10px] font-bold text-[#52525B] uppercase">BICYCLETTE</div>
                    <div className="font-mono text-[9px] text-[#A1A1AA] uppercase">England</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brief Section (Dark Callout matching Case Study style) */}
        <section className="bg-[#18181B] text-white p-8 sm:p-12 space-y-6 border border-[#18181B] relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-3xl mx-auto text-center">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#CCFF00] text-[#18181B] inline-block">
              Project Brief
            </span>
            <h3 className="font-display font-medium text-2xl sm:text-4xl text-white leading-tight tracking-tight mt-4">
              To Design an <span className="text-[#CCFF00] font-bold">EV bicycle</span><br className="hidden sm:inline" /> for general age (14+) group for daily use in and around the city.
            </h3>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              02. Process & Roadmap
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight flex items-baseline gap-2">
              <span>E-Bicycle Timeline</span>
              <span className="text-xs font-normal text-[#71717A] lowercase">(Rough)</span>
            </h2>
          </div>

          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 01</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Project Brief</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Defining 4 W's</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 02</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Primary Research</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Problem</li>
                <li>Evolution of cycle</li>
                <li>How a cycle works</li>
                <li>Types of cycles</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 03</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Secondary Research</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Market study in stores</li>
                <li>User Reviews</li>
                <li>User Testing</li>
                <li>Ergonomics</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 04</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Concept Generation</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Boards</li>
                <li>Sketching</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#71717A]">Stage 05</span>
              <h4 className="font-bold text-xs uppercase text-[#18181B]">Product POC</h4>
              <ul className="text-[11px] text-[#52525B] space-y-1 list-disc list-inside">
                <li>Modeling</li>
                <li>Prototyping</li>
                <li>Rendering</li>
              </ul>
            </div>
          </div>

          {/* Timeline Bar Chart */}
          <div className="p-6 bg-[#18181B] text-white border border-[#18181B] space-y-6">
            <div className="flex justify-between items-center text-xs text-[#A1A1AA] font-mono border-b border-neutral-800 pb-3">
              <span>PROJECT SCHEDULE VISUALIZATION</span>
              <span className="text-[#CCFF00]">WEEK 1 - WEEK 9</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Project Brief</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-[#CCFF00] rounded-xs" style={{ width: '12%', marginLeft: '0%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Primary Research</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-xs" style={{ width: '25%', marginLeft: '10%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Secondary Research</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-xs" style={{ width: '20%', marginLeft: '30%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Concept Gen.</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-xs" style={{ width: '35%', marginLeft: '35%' }}></div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-28 text-[10px] font-bold uppercase text-[#A1A1AA] shrink-0">Product POC</span>
                <div className="flex-1 bg-neutral-900 rounded-xs h-3 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-xs" style={{ width: '30%', marginLeft: '70%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
              <span className="w-28 shrink-0"></span>
              <div className="flex-1 flex justify-between text-[9px] font-mono text-[#A1A1AA] uppercase">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
                <span>Week 7</span>
                <span>Week 8</span>
                <span>Week 9</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#F4F4F5]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 bg-[#18181B] text-white hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          {nextProject && onSelectProject && (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 border border-[#18181B] text-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
