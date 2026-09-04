import React, { useState } from 'react';
import { SiteSettings, Project } from '../types';
import {
  X,
  Sliders,
  RotateCcw,
  Save,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Palette,
  Type,
  ListOrdered,
  Check
} from 'lucide-react';

interface VisualCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  siteSettings: SiteSettings;
  setSiteSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  projects: Project[];
  onResetDefaults: () => void;
}

export const VisualCustomizerDrawer: React.FC<VisualCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  siteSettings,
  setSiteSettings,
  projects,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'order' | 'visibility'>('content');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleTextChange = (field: keyof SiteSettings, value: any) => {
    setSiteSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleSection = (sectionKey: keyof SiteSettings['sectionVisibility']) => {
    setSiteSettings((prev) => ({
      ...prev,
      sectionVisibility: {
        ...prev.sectionVisibility,
        [sectionKey]: !prev.sectionVisibility[sectionKey],
      },
    }));
  };

  const handleMoveProject = (id: string, direction: 'up' | 'down') => {
    const currentOrder = [...siteSettings.projectOrder];
    const index = currentOrder.indexOf(id);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= currentOrder.length) return;

    const temp = currentOrder[index];
    currentOrder[index] = currentOrder[newIndex];
    currentOrder[newIndex] = temp;

    setSiteSettings((prev) => ({
      ...prev,
      projectOrder: currentOrder,
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem('portfolio_site_settings', JSON.stringify(siteSettings));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to save settings to localStorage', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-[#18181B] animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#18181B] flex items-center justify-between bg-[#18181B] text-white">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-[#CCFF00]" />
            <div>
              <h2 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Visual Site Editor
              </h2>
              <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-sans">
                Customize content, layout & styling without code
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#27272A] text-white hover:bg-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#F4F4F5] bg-[#FAFAFA] p-1">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'content'
                ? 'bg-[#18181B] text-[#CCFF00]'
                : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Content</span>
          </button>

          <button
            onClick={() => setActiveTab('style')}
            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'style'
                ? 'bg-[#18181B] text-[#CCFF00]'
                : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Accent</span>
          </button>

          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'order'
                ? 'bg-[#18181B] text-[#CCFF00]'
                : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>

          <button
            onClick={() => setActiveTab('visibility')}
            className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'visibility'
                ? 'bg-[#18181B] text-[#CCFF00]'
                : 'text-[#71717A] hover:text-[#18181B]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Layout</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Content Editor */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Designer Name</label>
                <input
                  type="text"
                  value={siteSettings.designerName}
                  onChange={(e) => handleTextChange('designerName', e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Hero Main Title</label>
                <input
                  type="text"
                  value={siteSettings.headlineTitle}
                  onChange={(e) => handleTextChange('headlineTitle', e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Tagline / Personal Statement</label>
                <textarea
                  rows={4}
                  value={siteSettings.taglineBio}
                  onChange={(e) => handleTextChange('taglineBio', e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B] resize-none font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Email</label>
                  <input
                    type="text"
                    value={siteSettings.email}
                    onChange={(e) => handleTextChange('email', e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Phone</label>
                  <input
                    type="text"
                    value={siteSettings.phone}
                    onChange={(e) => handleTextChange('phone', e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Location</label>
                <input
                  type="text"
                  value={siteSettings.location}
                  onChange={(e) => handleTextChange('location', e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Style & Colors */}
          {activeTab === 'style' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest block">
                  Accent Highlight Color
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Neon Lime', hex: '#CCFF00' },
                    { name: 'Emerald Green', hex: '#10B981' },
                    { name: 'Electric Cyan', hex: '#00F0FF' },
                    { name: 'Pure White', hex: '#FFFFFF' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => handleTextChange('accentColorHex', color.hex)}
                      className={`p-3 border flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                        siteSettings.accentColorHex === color.hex
                          ? 'border-[#18181B] bg-[#18181B] text-white'
                          : 'border-[#F4F4F5] bg-[#FAFAFA] text-[#18181B] hover:border-[#18181B]'
                      }`}
                    >
                      <div
                        className="w-4 h-4 border border-black/20"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#18181B] text-white border border-[#18181B] space-y-1.5">
                <span className="text-[10px] font-bold text-[#CCFF00] uppercase tracking-widest block">Geometric Balance Rule</span>
                <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                  Strict #FFFFFF canvas, crisp grid structure, charcoal text (#18181B), and vivid high-contrast accent highlights.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Project Order */}
          {activeTab === 'order' && (
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest block">
                Reorder Featured Projects
              </span>

              <div className="space-y-2">
                {siteSettings.projectOrder.map((id, index) => {
                  const proj = projects.find((p) => p.id === id);
                  if (!proj) return null;

                  return (
                    <div
                      key={id}
                      className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-5 h-5 bg-[#18181B] text-[#CCFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider truncate">
                          {proj.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleMoveProject(id, 'up')}
                          disabled={index === 0}
                          className="p-1 bg-white border border-[#18181B] text-[#18181B] disabled:opacity-20 hover:bg-[#18181B] hover:text-white"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMoveProject(id, 'down')}
                          disabled={index === siteSettings.projectOrder.length - 1}
                          className="p-1 bg-white border border-[#18181B] text-[#18181B] disabled:opacity-20 hover:bg-[#18181B] hover:text-white"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: Section Visibility */}
          {activeTab === 'visibility' && (
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest block">
                Homepage Sections
              </span>

              <div className="space-y-2">
                {Object.entries(siteSettings.sectionVisibility).map(([key, visible]) => (
                  <div
                    key={key}
                    className="p-3 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider capitalize">
                      {key} Section
                    </span>

                    <button
                      onClick={() => handleToggleSection(key as any)}
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 ${
                        visible
                          ? 'bg-[#18181B] text-[#CCFF00]'
                          : 'bg-[#E4E4E7] text-[#71717A]'
                      }`}
                    >
                      {visible ? (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Visible</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hidden</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#F4F4F5] bg-[#FAFAFA] flex items-center justify-between gap-3">
          <button
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold uppercase tracking-widest bg-[#E4E4E7] text-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleSave}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#18181B] text-[#CCFF00] text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-[#CCFF00]" />
                <span>Saved Locally!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Edits</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
