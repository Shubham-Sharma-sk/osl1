import React from 'react';

const StrategyIllustration = () => {
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
        <rect width="800" height="600" rx="20" fill="url(#strategyGradient)" opacity="0.05" />
        
        {/* Grid lines */}
        <g opacity="0.1">
          <path d="M100 100 H700" stroke="#000000" strokeWidth="1" />
          <path d="M100 200 H700" stroke="#000000" strokeWidth="1" />
          <path d="M100 300 H700" stroke="#000000" strokeWidth="1" />
          <path d="M100 400 H700" stroke="#000000" strokeWidth="1" />
          <path d="M100 500 H700" stroke="#000000" strokeWidth="1" />
          
          <path d="M100 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M200 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M300 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M400 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M500 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M600 100 V500" stroke="#000000" strokeWidth="1" />
          <path d="M700 100 V500" stroke="#000000" strokeWidth="1" />
        </g>
        
        {/* Chart elements */}
        <g transform="translate(150, 150)">
          {/* Bar chart */}
          <rect x="0" y="0" width="200" height="200" rx="10" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          
          <rect x="30" y="50" width="20" height="100" rx="5" fill="#8B5CF6" opacity="0.8" />
          <rect x="70" y="80" width="20" height="70" rx="5" fill="#8B5CF6" opacity="0.6" />
          <rect x="110" y="30" width="20" height="120" rx="5" fill="#8B5CF6" opacity="0.9" />
          <rect x="150" y="60" width="20" height="90" rx="5" fill="#8B5CF6" opacity="0.7" />
          
          <path d="M0 150 H200" stroke="#111827" strokeWidth="1" opacity="0.5" />
          
          <text x="40" y="170" fill="#6B7280" fontSize="10" textAnchor="middle">Q1</text>
          <text x="80" y="170" fill="#6B7280" fontSize="10" textAnchor="middle">Q2</text>
          <text x="120" y="170" fill="#6B7280" fontSize="10" textAnchor="middle">Q3</text>
          <text x="160" y="170" fill="#6B7280" fontSize="10" textAnchor="middle">Q4</text>
        </g>
        
        <g transform="translate(450, 150)">
          {/* Pie chart */}
          <rect x="0" y="0" width="200" height="200" rx="10" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
          
          <path d="M100 100 L100 40 A60 60 0 0 1 154 130 Z" fill="#8B5CF6" opacity="0.8" />
          <path d="M100 100 L154 130 A60 60 0 0 1 100 160 Z" fill="#3B82F6" opacity="0.8" />
          <path d="M100 100 L100 160 A60 60 0 0 1 46 130 Z" fill="#10B981" opacity="0.8" />
          <path d="M100 100 L46 130 A60 60 0 0 1 70 70 Z" fill="#F59E0B" opacity="0.8" />
          <path d="M100 100 L70 70 A60 60 0 0 1 100 40 Z" fill="#EF4444" opacity="0.8" />
          
          <circle cx="100" cy="100" r="20" fill="#FFFFFF" />
        </g>
        
        <g transform="translate(150, 400)">
          {/* Line chart */}
          <rect x="0" y="0" width="200" height="150" rx="10" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          
          <path d="M20 110 L60 80 L100 90 L140 50 L180 30" stroke="#10B981" strokeWidth="3" fill="none" />
          <circle cx="20" cy="110" r="5" fill="#10B981" />
          <circle cx="60" cy="80" r="5" fill="#10B981" />
          <circle cx="100" cy="90" r="5" fill="#10B981" />
          <circle cx="140" cy="50" r="5" fill="#10B981" />
          <circle cx="180" cy="30" r="5" fill="#10B981" />
          
          <path d="M20 110 L180 110" stroke="#111827" strokeWidth="1" opacity="0.5" />
          
          <text x="20" y="130" fill="#6B7280" fontSize="10" textAnchor="middle">Jan</text>
          <text x="60" y="130" fill="#6B7280" fontSize="10" textAnchor="middle">Feb</text>
          <text x="100" y="130" fill="#6B7280" fontSize="10" textAnchor="middle">Mar</text>
          <text x="140" y="130" fill="#6B7280" fontSize="10" textAnchor="middle">Apr</text>
          <text x="180" y="130" fill="#6B7280" fontSize="10" textAnchor="middle">May</text>
        </g>
        
        <g transform="translate(450, 400)">
          {/* KPI dashboard */}
          <rect x="0" y="0" width="200" height="150" rx="10" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
          
          <rect x="20" y="20" width="70" height="50" rx="5" fill="#F3F4F6" />
          <text x="55" y="45" fill="#111827" fontSize="18" fontWeight="bold" textAnchor="middle">89%</text>
          <text x="55" y="65" fill="#6B7280" fontSize="10" textAnchor="middle">Conversion</text>
          
          <rect x="110" y="20" width="70" height="50" rx="5" fill="#F3F4F6" />
          <text x="145" y="45" fill="#111827" fontSize="18" fontWeight="bold" textAnchor="middle">$12k</text>
          <text x="145" y="65" fill="#6B7280" fontSize="10" textAnchor="middle">Revenue</text>
          
          <rect x="20" y="80" width="70" height="50" rx="5" fill="#F3F4F6" />
          <text x="55" y="105" fill="#111827" fontSize="18" fontWeight="bold" textAnchor="middle">2.4k</text>
          <text x="55" y="125" fill="#6B7280" fontSize="10" textAnchor="middle">Users</text>
          
          <rect x="110" y="80" width="70" height="50" rx="5" fill="#F3F4F6" />
          <text x="145" y="105" fill="#111827" fontSize="18" fontWeight="bold" textAnchor="middle">4.8</text>
          <text x="145" y="125" fill="#6B7280" fontSize="10" textAnchor="middle">Rating</text>
        </g>
        
        {/* Strategy elements */}
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="30" fill="#8B5CF6" opacity="0.2" />
          <circle cx="0" cy="0" r="20" fill="#8B5CF6" opacity="0.4" />
          <circle cx="0" cy="0" r="10" fill="#8B5CF6" opacity="0.8" />
          
          <path d="M0 0 L50 -50" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M0 0 L-50 -50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M0 0 L-50 50" stroke="#10B981" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M0 0 L50 50" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 5" />
          
          <circle cx="50" cy="-50" r="15" fill="#8B5CF6" opacity="0.7" />
          <circle cx="-50" cy="-50" r="15" fill="#3B82F6" opacity="0.7" />
          <circle cx="-50" cy="50" r="15" fill="#10B981" opacity="0.7" />
          <circle cx="50" cy="50" r="15" fill="#F59E0B" opacity="0.7" />
        </g>
        
        {/* Floating elements */}
        <circle cx="100" cy="100" r="15" fill="url(#strategyCircleGradient1)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="700" cy="500" r="15" fill="url(#strategyCircleGradient2)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <path d="M700 100 L730 100 L715 130 Z" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </path>
        
        <path d="M70 500 L100 500 L85 470 Z" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
        </path>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="strategyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <radialGradient id="strategyCircleGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="strategyCircleGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default StrategyIllustration;
