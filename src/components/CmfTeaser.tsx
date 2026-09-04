import React, { useState } from 'react';
import { Sparkles, Layers, Eye, ShieldCheck, Cpu } from 'lucide-react';

interface MaterialSpec {
  name: string;
  category: string;
  texture: string;
  durability: string;
  hex: string;
  bgGradient: string;
  description: string;
  applications: string[];
}

export const CmfTeaser: React.FC = () => {
  const materials: MaterialSpec[] = [
    {
      name: '6061-T6 Satin Anodized Aluminum',
      category: 'Metals & Hardware',
      texture: 'Bead-Blasted (120 Grit)',
      durability: 'Class 2 Anodized Oxide',
      hex: '#E2E8F0',
      bgGradient: 'from-slate-200 via-slate-100 to-slate-300',
      description: 'Cool-touch matte surface crafted for desktop tools and watch cases. Resists fingerprint Oils and scratch accumulation.',
      applications: ['Spunch Paper Crimper', 'Watch Bezels', 'EV Charging Brackets']
    },
    {
      name: 'Bayer Makrolon Polycarbonate',
      category: 'High-Impact Polymers',
      texture: 'Pyramid Micro-Grain',
      durability: 'High-Impact Flexural Strength',
      hex: '#334155',
      bgGradient: 'from-slate-700 via-slate-800 to-slate-900',
      description: 'Ultra-lightweight thermoformed luggage shell material. Structural rib geometry multiplies impact dispersion by 3x.',
      applications: ['VIP Aerolite Suitcases', 'EV Charger Fascia', 'Device Enclosures']
    },
    {
      name: 'Ion-Plated Rose Gold (IPG)',
      category: 'Timepiece Finishes',
      texture: 'Radial Sunray Brushed',
      durability: 'Physical Vapor Deposition (PVD)',
      hex: '#D4AF37',
      bgGradient: 'from-amber-200 via-amber-300 to-amber-500',
      description: 'Refined metallic CMF developed for regional Sheen & G-Shock Collab wristwatches with 5-year anti-tarnish guarantee.',
      applications: ['Casio Wristwatch Dials', 'Indices & Sub-Rings', 'Clasp Details']
    },
    {
      name: 'Handblown Smoked Borosilicate Glass',
      category: 'Bespoke Artisanal',
      texture: 'Optical Gradient Polish',
      durability: 'Thermal Shock Resistant',
      hex: '#78350F',
      bgGradient: 'from-amber-900 via-amber-950 to-stone-900',
      description: 'Hand-crafted blown glass with gradient tinted oxides designed for luxury architectural lighting and India Design 2020.',
      applications: ['Lumina Chandelier Drop', 'Custom Lighting Suspensions']
    }
  ];

  const [activeMaterialIndex, setActiveMaterialIndex] = useState(0);
  const currentMaterial = materials[activeMaterialIndex];

  return (
    <section className="py-16 bg-[#18181B] text-white border-y border-[#27272A] mx-0 max-w-7xl my-12 p-6 sm:p-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#27272A] pb-8">
          <div className="space-y-1">
            <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#CCFF00] text-[#18181B]">
              Core Capability / CMF
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase mt-2">
              CMF Strategy & Material Craft
            </h2>
            <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl">
              Color, Material, and Finish define tactile perception, emotional connection, and production viability.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">
              Interactive Swatch Explorer
            </span>
          </div>
        </div>

        {/* Interactive Material Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Swatch Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">
              Select Material Specification
            </p>

            <div className="space-y-2">
              {materials.map((mat, idx) => {
                const isActive = activeMaterialIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMaterialIndex(idx)}
                    className={`w-full text-left p-4 border transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#27272A] border-[#CCFF00] text-white'
                        : 'bg-[#18181B] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 border border-white/20"
                        style={{ backgroundColor: mat.hex }}
                      />
                      <div>
                        <div className="font-display font-bold text-xs uppercase tracking-wider text-white">{mat.name}</div>
                        <div className="text-[10px] text-[#A1A1AA] uppercase">{mat.category}</div>
                      </div>
                    </div>

                    {isActive && (
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-[#CCFF00] text-[#18181B] uppercase tracking-widest">
                        SELECTED
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Tactile Preview Screen */}
          <div className="lg:col-span-7 bg-[#09090B] border border-[#27272A] p-6 sm:p-8 space-y-6 relative overflow-hidden">
            {/* Visual Swatch Sphere / Texture Surface */}
            <div className={`w-full h-44 sm:h-52 bg-gradient-to-br ${currentMaterial.bgGradient} flex items-center justify-center p-6 border border-[#27272A] relative`}>
              <div className="relative z-10 text-center space-y-2">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] border border-[#CCFF00]/40">
                  {currentMaterial.texture}
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                  {currentMaterial.durability}
                </p>
              </div>
            </div>

            {/* Spec Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                  {currentMaterial.name}
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed font-sans">
                  {currentMaterial.description}
                </p>
              </div>

              {/* Technical Badges */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#27272A]">
                <div>
                  <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                    Surface Finish
                  </span>
                  <span className="text-xs text-white font-mono mt-0.5 block">
                    {currentMaterial.texture}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                    Manufacturing Process
                  </span>
                  <span className="text-xs text-white font-mono mt-0.5 block">
                    {currentMaterial.durability}
                  </span>
                </div>
              </div>

              {/* Projects deployed */}
              <div>
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block mb-2">
                  Applied In Products
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentMaterial.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#18181B] border border-[#27272A] text-[10px] font-bold uppercase tracking-wider text-white"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
