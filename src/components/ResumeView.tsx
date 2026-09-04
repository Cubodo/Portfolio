import React from 'react';
import { SiteSettings, ExperienceItem, EducationItem, SkillItem } from '../types';
import { Download, Mail, Phone, MapPin, Printer, Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SoftwareLogo } from './SoftwareLogos';

interface ResumeViewProps {
  siteSettings: SiteSettings;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  onOpenRedDotModal: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({
  siteSettings,
  experience,
  education,
  skills,
  onOpenRedDotModal,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F4F4F5] pb-6">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
            Curriculum Vitae
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#18181B] tracking-tight uppercase">
            Résumé & Professional Profile
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-white text-[#18181B] border border-[#18181B] hover:bg-[#FAFAFA] transition-colors"
          >
            <Printer className="w-4 h-4 text-[#18181B]" />
            <span>Print / Save PDF</span>
          </button>

          <a
            href={`mailto:${siteSettings.email}?subject=Job%20Inquiry%20-%20Amit%20Kumar%20Portfolio`}
            className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] hover:bg-black transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="bg-white border border-[#18181B] p-8 sm:p-12 space-y-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-[#F4F4F5]">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight">
                {siteSettings.designerName}
              </h2>
            </div>

            <p className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider">
              Industrial Designer (5.5 Years Industry Experience)
            </p>

            <p className="text-xs text-[#52525B] leading-relaxed font-sans">
              As an Industrial Designer, I bring a thoughtful balance of creativity, technical know-how, and a strong appreciation for well-crafted products. With roots in accessory design and bespoke craftsmanship, my journey has been shaped by a genuine passion for creating designs that are both beautiful and practical.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-5 border border-[#F4F4F5] space-y-2.5 min-w-[240px] text-xs font-medium text-[#18181B]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#18181B]" />
              <a href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`} className="hover:underline font-mono text-[11px]">{siteSettings.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#18181B]" />
              <a href={`mailto:${siteSettings.email}`} className="hover:underline font-mono text-[11px]">{siteSettings.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#18181B]" />
              <span className="text-[11px] uppercase font-bold text-[#71717A]">{siteSettings.location}</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-[#18181B] border-b border-[#F4F4F5] pb-2 uppercase tracking-tight flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#18181B]" />
            <span>Work Experience</span>
          </h3>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider">
                      {exp.role} — <span className="text-[#71717A] font-medium">{exp.company}</span>
                    </h4>
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest block">{exp.location}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#FAFAFA] border border-[#F4F4F5] text-[#18181B] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-[#52525B] leading-relaxed font-sans">
                  {exp.description}
                </p>

                {exp.deliverables && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs text-[#18181B]">
                    {exp.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#CCFF00] mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-[#18181B] border-b border-[#F4F4F5] pb-2 uppercase tracking-tight flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#18181B]" />
            <span>Education</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#18181B]">
                    {edu.institution}
                  </h4>
                  <span className="text-[10px] font-bold text-[#A1A1AA] uppercase">{edu.period}</span>
                </div>
                <div className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
                  {edu.degree}
                </div>
                {edu.highlights && (
                  <p className="text-xs text-[#71717A] pt-1 leading-relaxed font-sans">
                    {edu.highlights}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          <h3 className="font-display font-bold text-lg text-[#18181B] border-b border-[#F4F4F5] pb-2 uppercase tracking-tight flex items-center gap-2">
            <Award className="w-4 h-4 text-[#18181B]" />
            <span>Skills & Software Toolkit</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center gap-2.5">
                <SoftwareLogo logoType={skill.logoType} className="w-5 h-5 shrink-0" />
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#18181B] truncate">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
