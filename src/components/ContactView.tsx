import React, { useState } from 'react';
import { SiteSettings } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Linkedin, ExternalLink } from 'lucide-react';

interface ContactViewProps {
  siteSettings: SiteSettings;
}

export const ContactView: React.FC<ContactViewProps> = ({ siteSettings }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Project / Hiring Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div id="contact" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-[#F4F4F5] pb-6 space-y-1">
        <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
          Let's Collaborate
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#18181B] tracking-tight uppercase">
          Get in Touch
        </h1>
        <p className="text-[#52525B] text-xs sm:text-sm max-w-xl">
          I am available for industrial design projects, CMF consultancy, hardware prototyping, and full-time senior design roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#18181B]">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#18181B] text-[#CCFF00] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="font-display font-bold text-xs sm:text-sm text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(siteSettings.email, 'email')}
                className="p-2 bg-white border border-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#18181B]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#18181B] text-[#CCFF00] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                    className="font-display font-bold text-xs sm:text-sm text-[#18181B] hover:text-[#CCFF00] transition-colors"
                  >
                    {siteSettings.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(siteSettings.phone, 'phone')}
                className="p-2 bg-white border border-[#18181B] hover:bg-[#18181B] hover:text-white transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#18181B]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center gap-3">
              <div className="w-8 h-8 bg-[#18181B] text-[#CCFF00] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                  Primary Location
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[#18181B]">
                  {siteSettings.location}
                </span>
              </div>
            </div>

            {/* LinkedIn Card */}
            {siteSettings.linkedin && (
              <div className="p-4 bg-[#FAFAFA] border border-[#F4F4F5] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">
                      LinkedIn Profile
                    </span>
                    <a
                      href={siteSettings.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-xs sm:text-sm text-[#18181B] hover:text-[#0A66C2] transition-colors flex items-center gap-1"
                    >
                      <span>Amit Kumar on LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-[#71717A]" />
                    </a>
                  </div>
                </div>

                <a
                  href={siteSettings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#18181B] text-[#CCFF00] hover:bg-[#0A66C2] hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#F4F4F5]">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 bg-[#CCFF00] text-[#18181B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#18181B] uppercase tracking-tight">
                Message Received!
              </h3>
              <p className="text-xs text-[#52525B] max-w-md mx-auto leading-relaxed font-sans">
                Thank you for reaching out. I've received your note and will get back to you shortly at {formData.email || 'your email'}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'New Project / Hiring Inquiry', message: '' });
                }}
                className="px-6 py-2.5 bg-[#18181B] text-[#CCFF00] text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-[#18181B] uppercase tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#71717A]">
                  Fill out the form below or email me directly at {siteSettings.email}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#18181B] uppercase tracking-widest">Project Details or Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your product concept, timelines, or role opportunities..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAFAFA] border border-[#E4E4E7] text-xs text-[#18181B] focus:outline-none focus:border-[#18181B] resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#18181B] text-[#CCFF00] font-bold text-[10px] uppercase tracking-widest hover:bg-black transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
