import React from 'react';
import { SiteSettings, EducationItem } from '../types';
import { Award, GraduationCap, MapPin, Mail, Phone, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  siteSettings: SiteSettings;
  education: EducationItem[];
  onOpenRedDotModal: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  siteSettings,
  education,
  onOpenRedDotModal,
  onContactClick,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#F4F4F5] pb-6 space-y-1">
        <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
          About the Designer
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
          Crafting Hardware with Technical Rigor
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Photo */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative border border-[#E4E4E7] bg-white group">
            <img
              src="/images/amit_kumar.jpg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
              }}
              alt={siteSettings.designerName}
              className="w-full aspect-square object-cover object-top group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Biography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose prose-neutral max-w-none space-y-4 text-[#52525B] leading-relaxed text-sm sm:text-base font-sans">
            <p>
              As an Industrial Designer, I bring a thoughtful balance of creativity, technical know-how, and a strong appreciation for well-crafted products. With roots in accessory design and bespoke craftsmanship, my journey has been shaped by a genuine passion for creating designs that are both beautiful and practical.
            </p>
            <p>
              I enjoy working at the intersection of aesthetics and function, with a detail-oriented approach and a growing interest in how emerging technologies can enhance design. My experience allows me to blend traditional design principles with modern tools to develop solutions that are meaningful and user-focused.
            </p>
            <p>
              Whether it’s designing refined accessories or exploring broader industrial challenges, I strive to create designs that are honest, useful, and engaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
