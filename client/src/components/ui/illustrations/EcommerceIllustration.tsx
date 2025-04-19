import React from 'react';

const EcommerceIllustration = () => {
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
        <rect width="800" height="600" rx="20" fill="url(#ecommerceGradient)" opacity="0.05" />
        
        {/* Shopping cart */}
        <g transform="translate(500, 200)">
          <circle cx="50" cy="150" r="20" fill="#E5E7EB" />
          <circle cx="50" cy="150" r="8" fill="#9CA3AF" />
          <circle cx="120" cy="150" r="20" fill="#E5E7EB" />
          <circle cx="120" cy="150" r="8" fill="#9CA3AF" />
          
          <path d="M30 50 H140 L130 120 H40 Z" fill="#3B82F6" opacity="0.8" />
          <path d="M30 50 H140 L130 120 H40 Z" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M60 50 V120" stroke="#2563EB" strokeWidth="2" opacity="0.5" />
          <path d="M90 50 V120" stroke="#2563EB" strokeWidth="2" opacity="0.5" />
          <path d="M120 50 V120" stroke="#2563EB" strokeWidth="2" opacity="0.5" />
          
          <path d="M40 120 L50 150" stroke="#4B5563" strokeWidth="2" />
          <path d="M130 120 L120 150" stroke="#4B5563" strokeWidth="2" />
          
          <path d="M70 80 L100 80" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M85 65 L85 95" stroke="#FFFFFF" strokeWidth="2" />
        </g>
        
        {/* Product cards */}
        <g transform="translate(100, 150)">
          {/* Product 1 */}
          <rect width="150" height="200" rx="10" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          <rect y="0" width="150" height="100" rx="10 10 0 0" fill="#F3F4F6" />
          <rect x="25" y="25" width="100" height="50" rx="5" fill="#8B5CF6" opacity="0.3" />
          <rect x="20" y="120" width="110" height="10" rx="5" fill="#111827" opacity="0.7" />
          <rect x="20" y="140" width="70" height="10" rx="5" fill="#111827" opacity="0.5" />
          <rect x="20" y="170" width="50" height="20" rx="10" fill="#8B5CF6" />
          <text x="45" y="185" fill="#FFFFFF" fontSize="12" textAnchor="middle">$99</text>
        </g>
        
        <g transform="translate(280, 150)">
          {/* Product 2 */}
          <rect width="150" height="200" rx="10" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
          <rect y="0" width="150" height="100" rx="10 10 0 0" fill="#F3F4F6" />
          <circle cx="75" cy="50" r="30" fill="#3B82F6" opacity="0.3" />
          <rect x="20" y="120" width="110" height="10" rx="5" fill="#111827" opacity="0.7" />
          <rect x="20" y="140" width="70" height="10" rx="5" fill="#111827" opacity="0.5" />
          <rect x="20" y="170" width="50" height="20" rx="10" fill="#3B82F6" />
          <text x="45" y="185" fill="#FFFFFF" fontSize="12" textAnchor="middle">$149</text>
        </g>
        
        {/* Mobile checkout */}
        <g transform="translate(150, 380)">
          <rect width="200" height="150" rx="10" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="20" y="20" width="160" height="20" rx="5" fill="#F3F4F6" />
          <rect x="20" y="50" width="160" height="20" rx="5" fill="#F3F4F6" />
          <rect x="20" y="80" width="160" height="20" rx="5" fill="#F3F4F6" />
          <rect x="50" y="110" width="100" height="30" rx="15" fill="#8B5CF6" />
          <text x="100" y="130" fill="#FFFFFF" fontSize="12" textAnchor="middle">CHECKOUT</text>
        </g>
        
        {/* Credit card */}
        <g transform="translate(400, 400)">
          <rect width="180" height="110" rx="10" fill="url(#cardGradient)" />
          <rect x="20" y="70" width="40" height="25" rx="5" fill="#FFFFFF" opacity="0.3" />
          <circle cx="150" cy="30" r="15" fill="#FFFFFF" opacity="0.2" />
          <circle cx="130" cy="30" r="15" fill="#FFFFFF" opacity="0.2" />
          <rect x="20" y="20" width="60" height="10" rx="5" fill="#FFFFFF" opacity="0.5" />
          <rect x="20" y="40" width="40" height="10" rx="5" fill="#FFFFFF" opacity="0.5" />
        </g>
        
        {/* Connection lines */}
        <path d="M250 250 C300 250, 350 220, 400 220" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M430 300 C450 350, 480 380, 500 380" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M250 450 C300 450, 350 450, 400 450" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5 5" />
        
        {/* Floating elements */}
        <circle cx="100" cy="100" r="15" fill="url(#circleGradient1)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="700" cy="500" r="15" fill="url(#circleGradient2)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <path d="M700 100 L730 100 L715 130 Z" fill="#8B5CF6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </path>
        
        <path d="M70 500 L100 500 L85 470 Z" fill="#3B82F6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
        </path>
        
        {/* Shopping bag icon */}
        <g transform="translate(650, 300)">
          <path d="M30 20 L50 20 L60 40 L20 40 Z" fill="#8B5CF6" />
          <rect x="20" y="40" width="40" height="50" rx="5" fill="#8B5CF6" />
          <path d="M30 20 C30 10, 50 10, 50 20" stroke="#8B5CF6" strokeWidth="3" fill="none" />
          <rect x="30" y="50" width="20" height="5" rx="2" fill="#FFFFFF" />
          <rect x="30" y="60" width="20" height="5" rx="2" fill="#FFFFFF" />
          <rect x="30" y="70" width="20" height="5" rx="2" fill="#FFFFFF" />
        </g>
        
        {/* Dollar sign */}
        <g transform="translate(100, 500)">
          <circle cx="25" cy="25" r="25" fill="#10B981" opacity="0.8" />
          <path d="M25 10 V40" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M15 15 C15 15, 25 5, 35 15" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          <path d="M15 35 C15 35, 25 45, 35 35" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="ecommerceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <radialGradient id="circleGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="circleGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default EcommerceIllustration;
