import React from 'react';

const TeamIllustration = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full"
      >
        {/* Background */}
        <rect width="800" height="600" rx="20" fill="url(#teamGradient)" opacity="0.1" />
        
        {/* Grid pattern */}
        <g opacity="0.2">
          <path d="M0 150 H800" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M0 300 H800" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M0 450 H800" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M200 0 V600" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M400 0 V600" stroke="#8B5CF6" strokeWidth="1" />
          <path d="M600 0 V600" stroke="#8B5CF6" strokeWidth="1" />
        </g>
        
        {/* Team members */}
        <g>
          {/* Person 1 */}
          <circle cx="200" cy="200" r="60" fill="url(#personGradient1)" opacity="0.8" />
          <circle cx="200" cy="160" r="25" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="170" y="200" width="60" height="80" rx="20" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          
          {/* Person 2 */}
          <circle cx="400" cy="200" r="70" fill="url(#personGradient2)" opacity="0.8" />
          <circle cx="400" cy="155" r="30" fill="#1F2937" stroke="#3B82F6" strokeWidth="2" />
          <rect x="365" y="200" width="70" height="90" rx="20" fill="#1F2937" stroke="#3B82F6" strokeWidth="2" />
          
          {/* Person 3 */}
          <circle cx="600" cy="200" r="60" fill="url(#personGradient3)" opacity="0.8" />
          <circle cx="600" cy="160" r="25" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="570" y="200" width="60" height="80" rx="20" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
        </g>
        
        {/* Connecting lines */}
        <path d="M260 200 H340" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M470 200 H540" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="5 5" />
        
        {/* Devices and tech elements */}
        <g>
          {/* Laptop */}
          <rect x="150" y="350" width="100" height="70" rx="5" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="150" y="420" width="100" height="10" rx="5" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="155" y="355" width="90" height="60" rx="2" fill="#111827" />
          <rect x="170" y="365" width="60" height="5" rx="2" fill="#8B5CF6" opacity="0.7" />
          <rect x="170" y="375" width="40" height="5" rx="2" fill="#8B5CF6" opacity="0.5" />
          <rect x="170" y="385" width="50" height="5" rx="2" fill="#8B5CF6" opacity="0.6" />
          
          {/* Tablet */}
          <rect x="350" y="350" width="100" height="120" rx="10" fill="#1F2937" stroke="#3B82F6" strokeWidth="2" />
          <rect x="355" y="360" width="90" height="100" rx="5" fill="#111827" />
          <circle cx="400" cy="480" r="5" fill="#3B82F6" />
          <rect x="370" y="370" width="60" height="5" rx="2" fill="#3B82F6" opacity="0.7" />
          <rect x="370" y="380" width="40" height="5" rx="2" fill="#3B82F6" opacity="0.5" />
          <rect x="370" y="390" width="50" height="5" rx="2" fill="#3B82F6" opacity="0.6" />
          
          {/* Desktop */}
          <rect x="550" y="380" width="100" height="80" rx="5" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="555" y="385" width="90" height="70" rx="2" fill="#111827" />
          <rect x="580" y="460" width="40" height="30" rx="2" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="570" y="490" width="60" height="5" rx="2" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="570" y="395" width="60" height="5" rx="2" fill="#8B5CF6" opacity="0.7" />
          <rect x="570" y="405" width="40" height="5" rx="2" fill="#8B5CF6" opacity="0.5" />
          <rect x="570" y="415" width="50" height="5" rx="2" fill="#8B5CF6" opacity="0.6" />
        </g>
        
        {/* Floating elements */}
        <circle cx="150" cy="500" r="15" fill="url(#floatGradient1)" opacity="0.7">
          <animate attributeName="cy" values="500;490;500" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="650" cy="100" r="15" fill="url(#floatGradient2)" opacity="0.7">
          <animate attributeName="cy" values="100;110;100" dur="4s" repeatCount="indefinite" />
        </circle>
        <path d="M700 350 L730 350 L715 380 Z" fill="#8B5CF6" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M70 250 L100 250 L85 280 Z" fill="#3B82F6" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <radialGradient id="personGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="personGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="personGradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="floatGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="floatGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TeamIllustration;
