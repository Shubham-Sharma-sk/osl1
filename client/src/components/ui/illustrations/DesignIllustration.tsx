import React from 'react';

const DesignIllustration = () => {
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
        <rect width="800" height="600" rx="20" fill="url(#designGradient)" opacity="0.05" />
        
        {/* Design artboard */}
        <rect x="150" y="100" width="500" height="400" rx="10" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
        
        {/* Grid lines */}
        <g opacity="0.1">
          <path d="M200 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M250 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M300 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M350 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M400 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M450 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M500 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M550 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M600 100 V500" stroke="#000000" strokeWidth="1" />
          
          <path d="M150 150 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 200 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 250 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 300 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 350 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 400 H650" stroke="#000000" strokeWidth="1" />
          <path d="M150 450 H650" stroke="#000000" strokeWidth="1" />
        </g>
        
        {/* Design elements */}
        <rect x="200" y="150" width="300" height="50" rx="8" fill="#8B5CF6" opacity="0.8" />
        <rect x="200" y="220" width="200" height="10" rx="5" fill="#111827" opacity="0.7" />
        <rect x="200" y="240" width="250" height="10" rx="5" fill="#111827" opacity="0.5" />
        <rect x="200" y="260" width="180" height="10" rx="5" fill="#111827" opacity="0.3" />
        
        {/* UI Components */}
        <rect x="200" y="300" width="120" height="40" rx="20" fill="#3B82F6" />
        <text x="260" y="325" fill="#FFFFFF" fontSize="14" textAnchor="middle">Button</text>
        
        <rect x="340" y="300" width="160" height="40" rx="5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
        <text x="360" y="325" fill="#9CA3AF" fontSize="14">Input field</text>
        
        {/* Color palette */}
        <circle cx="550" y="180" r="20" fill="#8B5CF6" />
        <circle cx="550" y="230" r="20" fill="#3B82F6" />
        <circle cx="550" y="280" r="20" fill="#10B981" />
        <circle cx="550" y="330" r="20" fill="#F59E0B" />
        <circle cx="550" y="380" r="20" fill="#EF4444" />
        
        {/* Design tools */}
        <g transform="translate(80, 250)">
          <rect width="50" height="200" rx="5" fill="#1F2937" />
          <rect x="10" y="20" width="30" height="30" rx="5" fill="#8B5CF6" />
          <rect x="10" y="60" width="30" height="30" rx="5" fill="#3B82F6" />
          <rect x="10" y="100" width="30" height="30" rx="5" fill="#10B981" />
          <rect x="10" y="140" width="30" height="30" rx="5" fill="#F59E0B" />
        </g>
        
        {/* Rulers */}
        <rect x="150" y="80" width="500" height="20" fill="#F3F4F6" />
        <rect x="130" y="100" width="20" height="400" fill="#F3F4F6" />
        
        <g>
          <line x1="200" y1="80" x2="200" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="250" y1="80" x2="250" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="300" y1="80" x2="300" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="350" y1="80" x2="350" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="400" y1="80" x2="400" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="450" y1="80" x2="450" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="500" y1="80" x2="500" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="550" y1="80" x2="550" y2="100" stroke="#6B7280" strokeWidth="1" />
          <line x1="600" y1="80" x2="600" y2="100" stroke="#6B7280" strokeWidth="1" />
          
          <line x1="130" y1="150" x2="150" y2="150" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="200" x2="150" y2="200" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="250" x2="150" y2="250" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="300" x2="150" y2="300" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="350" x2="150" y2="350" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="400" x2="150" y2="400" stroke="#6B7280" strokeWidth="1" />
          <line x1="130" y1="450" x2="150" y2="450" stroke="#6B7280" strokeWidth="1" />
        </g>
        
        {/* Mobile device mockup */}
        <rect x="200" y="370" width="80" height="120" rx="10" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" />
        <rect x="205" y="375" width="70" height="100" rx="5" fill="#FFFFFF" />
        
        {/* Fixed: Replaced invalid rx="5 5 0 0" with a path for rounded top corners */}
        <path 
          d="M210,375 H270 C272.76,375 275,377.24 275,380 V390 H205 V380 C205,377.24 207.24,375 210,375 Z" 
          fill="#8B5CF6" 
        />
        
        <circle cx="240" cy="485" r="5" fill="#D1D5DB" />
        
        {/* Cursor */}
        <g className="animate-float">
          <circle cx="350" cy="320" r="5" fill="#000000" />
          <path d="M350 320 L360 330" stroke="#000000" strokeWidth="1" />
          <path d="M350 320 L340 330" stroke="#000000" strokeWidth="1" />
        </g>
        
        {/* Floating elements */}
        <circle cx="100" cy="150" r="15" fill="url(#designCircleGradient1)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="700" cy="450" r="15" fill="url(#designCircleGradient2)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <path d="M700 150 L730 150 L715 180 Z" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </path>
        
        <path d="M70 450 L100 450 L85 420 Z" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
        </path>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <radialGradient id="designCircleGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="designCircleGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DesignIllustration;