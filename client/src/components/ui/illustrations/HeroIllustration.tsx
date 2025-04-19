import React from 'react';

interface HeroIllustrationProps {
  className?: string;
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className }) => {
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      {/* Main illustration container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full max-h-full"
        >
          {/* Background elements */}
          <circle cx="400" cy="300" r="250" fill="url(#heroGradient1)" opacity="0.2" />
          <circle cx="400" cy="300" r="200" fill="url(#heroGradient2)" opacity="0.3" />
          <circle cx="400" cy="300" r="150" fill="url(#heroGradient3)" opacity="0.4" />
          
          {/* Grid pattern */}
          <path d="M100 100 L700 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M100 200 L700 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M100 300 L700 300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M100 400 L700 400" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M100 500 L700 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          <path d="M100 100 L100 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M200 100 L200 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M300 100 L300 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M400 100 L400 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M500 100 L500 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M600 100 L600 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M700 100 L700 500" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          {/* Abstract shapes */}
          <rect x="250" y="150" width="300" height="300" rx="20" stroke="url(#heroGradient4)" strokeWidth="2" fill="none" />
          <circle cx="400" cy="300" r="100" stroke="url(#heroGradient5)" strokeWidth="2" fill="none" />
          <path d="M250 300 Q325 200 400 300 Q475 400 550 300" stroke="url(#heroGradient6)" strokeWidth="3" fill="none" />
          
          {/* Animated elements */}
          <circle cx="250" cy="150" r="8" fill="#8B5CF6" className="animate-pulse">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="550" cy="150" r="8" fill="#8B5CF6" className="animate-pulse">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="450" r="8" fill="#8B5CF6" className="animate-pulse">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="550" cy="450" r="8" fill="#8B5CF6" className="animate-pulse">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Digital elements */}
          <path d="M350 200 L450 200 L450 250 L400 280 L350 250 Z" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.8)" strokeWidth="1.5" />
          <path d="M350 400 L450 400 L450 350 L400 320 L350 350 Z" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1.5" />
          
          {/* Code-like elements */}
          <rect x="300" y="220" width="40" height="5" rx="2" fill="rgba(255,255,255,0.7)" />
          <rect x="300" y="230" width="60" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="300" y="240" width="50" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
          
          <rect x="440" y="360" width="40" height="5" rx="2" fill="rgba(255,255,255,0.7)" />
          <rect x="440" y="370" width="60" height="5" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="440" y="380" width="50" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
          
          {/* Connecting lines */}
          <path d="M400 200 L400 150" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M400 400 L400 450" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M300 300 L250 300" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M500 300 L550 300" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1.5" strokeDasharray="5 5" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroGradient5" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroGradient6" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 animate-float">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z" fill="#8B5CF6" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 animate-float-delay">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z" fill="#3B82F6" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

export default HeroIllustration;
