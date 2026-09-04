import React from 'react';

interface SoftwareLogoProps {
  logoType: string;
  className?: string;
}

export const SoftwareLogo: React.FC<SoftwareLogoProps> = ({ logoType, className = "w-6 h-6" }) => {
  switch (logoType.toLowerCase()) {
    case 'fusion360':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#334155" />
          <path d="M5 14C5 11 8 8 13 8C17 8 19 10 19 13C19 16.5 15 17 12 17C9 17 5 16 5 14Z" stroke="#10B981" strokeWidth="2" />
          <circle cx="16" cy="11" r="1" fill="#10B981" />
          <path d="M8 17L6 20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'rhino3d':
      return (
        <img
          src="/images/fusion360_logo.png"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80";
          }}
          alt="Rhino 3D"
          className={`${className} object-contain rounded`}
          referrerPolicy="no-referrer"
        />
      );
    case 'keyshot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#0F172A" />
          <circle cx="12" cy="12" r="7" stroke="#10B981" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#10B981" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'photoshop':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#001E36" />
          <text x="5" y="17" fill="#31A8FF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ps</text>
        </svg>
      );
    case 'illustrator':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#330000" />
          <text x="6" y="17" fill="#FF9A00" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ai</text>
        </svg>
      );
    case 'indesign':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#2D001E" />
          <text x="7" y="17" fill="#FF3366" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Id</text>
        </svg>
      );
    case 'autocad':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#C62828" />
          <path d="M6 18L12 6L18 18M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case '3dsmax':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#1A237E" />
          <path d="M7 17V7L12 12L17 7V17" stroke="#80D8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'coreldraw':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#2E7D32" />
          <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
          <path d="M12 6C9 6 7 8 7 12C7 16 9 18 12 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'prototyping':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#18181B" />
          <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" stroke="#CCFF00" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="#CCFF00" strokeWidth="1.5" />
        </svg>
      );
    case 'sketching':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#18181B" />
          <path d="M16 3L21 8L8 21H3V16L16 3Z" stroke="#CCFF00" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 6L18 11" stroke="#CCFF00" strokeWidth="1.5" />
        </svg>
      );
    case 'cmf':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#18181B" />
          <circle cx="9" cy="9" r="4" fill="#CCFF00" opacity="0.9" />
          <circle cx="15" cy="9" r="4" fill="#38BDF8" opacity="0.9" />
          <circle cx="12" cy="15" r="4" fill="#F43F5E" opacity="0.9" />
        </svg>
      );
    case 'manufacturing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#18181B" />
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'genai':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#18181B" />
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" fill="#CCFF00" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#F1F5F9" />
          <circle cx="12" cy="12" r="5" stroke="#10B981" strokeWidth="2" />
        </svg>
      );
  }
};
