import React from 'react';
import { X, Award, ExternalLink, CheckCircle2 } from 'lucide-react';

interface RedDotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RedDotModal: React.FC<RedDotModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-neutral-200 max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block font-display">
              Official Award Recognition
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-neutral-900">
              Red Dot Award: Design Concept Winner 2025
            </h2>
          </div>
        </div>

        {/* Certificate Display & Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Amit holding Red Dot Certificate */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-50 relative group">
            <img
              src="/images/amit_kumar.jpg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
              }}
              alt="Amit Kumar holding Red Dot Winner 2025 Certificate"
              className="w-full aspect-[4/3] object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-neutral-900 text-white text-[11px] font-medium text-center">
              Amit Kumar presenting the Red Dot Award 2025 Certificate
            </div>
          </div>

          {/* Award Details */}
          <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/60 space-y-2">
              <div className="font-display font-bold text-red-900 text-base">
                Winner Project: Spunch - A Minimalist Paper Crimper And Punch
              </div>
              <p className="text-red-800 text-xs leading-relaxed">
                "Spunch - A Minimalist Paper Crimper And Punch" was selected by the international jury for extraordinary design quality, mechanical innovation, and desktop aesthetic purity.
              </p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span><strong>Category:</strong> Office Supplies and Stationery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>
                  <strong>University:</strong> IDC, IIT Bombay, India{' '}
                  <span className="text-xs text-neutral-500 font-normal ml-1">(Faculty Advisor: Prof. Purba Joshi)</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span><strong>Design:</strong> Amit Kumar, Aatman Shah</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span><strong>Award Body:</strong> Red Dot Design Award (2025)</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                Close Certificate
              </button>
              <a
                href="https://www.red-dot.org/project/spunch-minimalist-paper-crimper-and-punch-83324"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors"
              >
                <span>View on Red Dot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
