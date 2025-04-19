import React from 'react';

const WebDevIllustration = () => {
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
        <rect width="800" height="600" rx="20" fill="url(#webDevGradient)" opacity="0.05" />
        
        {/* Code editor window */}
        <rect x="100" y="100" width="600" height="400" rx="10" fill="#1E1E1E" stroke="#8B5CF6" strokeWidth="2" />
        
        {/* Window controls */}
        <circle cx="130" cy="130" r="10" fill="#FF5F56" />
        <circle cx="160" cy="130" r="10" fill="#FFBD2E" />
        <circle cx="190" cy="130" r="10" fill="#27C93F" />
        
        {/* File tabs */}
        <rect x="100" y="150" width="600" height="1" fill="#444444" />
        <rect x="120" y="150" width="100" height="30" rx="5" fill="#2D2D2D" />
        <text x="140" y="170" fill="#8B5CF6" fontSize="12" fontFamily="monospace">index.tsx</text>
        <rect x="230" y="150" width="100" height="30" rx="5" fill="#252525" />
        <text x="250" y="170" fill="#999999" fontSize="12" fontFamily="monospace">styles.css</text>
        
        {/* Code content */}
        <g transform="translate(120, 200)">
          {/* Line numbers */}
          <text x="0" y="20" fill="#6A7280" fontSize="14" fontFamily="monospace">1</text>
          <text x="0" y="45" fill="#6A7280" fontSize="14" fontFamily="monospace">2</text>
          <text x="0" y="70" fill="#6A7280" fontSize="14" fontFamily="monospace">3</text>
          <text x="0" y="95" fill="#6A7280" fontSize="14" fontFamily="monospace">4</text>
          <text x="0" y="120" fill="#6A7280" fontSize="14" fontFamily="monospace">5</text>
          <text x="0" y="145" fill="#6A7280" fontSize="14" fontFamily="monospace">6</text>
          <text x="0" y="170" fill="#6A7280" fontSize="14" fontFamily="monospace">7</text>
          <text x="0" y="195" fill="#6A7280" fontSize="14" fontFamily="monospace">8</text>
          <text x="0" y="220" fill="#6A7280" fontSize="14" fontFamily="monospace">9</text>
          <text x="0" y="245" fill="#6A7280" fontSize="14" fontFamily="monospace">10</text>
          
          {/* Code */}
          <text x="30" y="20" fill="#C586C0" fontSize="14" fontFamily="monospace">import</text>
          <text x="80" y="20" fill="#FFFFFF" fontSize="14" fontFamily="monospace">React from &#39;react&#39;;</text>
          
          <text x="30" y="45" fill="#C586C0" fontSize="14" fontFamily="monospace">import</text>
          <text x="80" y="45" fill="#FFFFFF" fontSize="14" fontFamily="monospace">&#123; motion &#125; from &#39;framer-motion&#39;;</text>
          
          <text x="30" y="70" fill="#FFFFFF" fontSize="14" fontFamily="monospace"></text>
          
          <text x="30" y="95" fill="#C586C0" fontSize="14" fontFamily="monospace">const</text>
          <text x="70" y="95" fill="#4EC9B0" fontSize="14" fontFamily="monospace">App</text>
          <text x="100" y="95" fill="#FFFFFF" fontSize="14" fontFamily="monospace">= () =&gt; &#123;</text>
          
          <text x="50" y="120" fill="#C586C0" fontSize="14" fontFamily="monospace">return</text>
          <text x="95" y="120" fill="#FFFFFF" fontSize="14" fontFamily="monospace">(</text>
          
          <text x="70" y="145" fill="#9CDCFE" fontSize="14" fontFamily="monospace">&lt;div</text>
          <text x="100" y="145" fill="#CE9178" fontSize="14" fontFamily="monospace">className=&quot;container&quot;</text>
          <text x="240" y="145" fill="#9CDCFE" fontSize="14" fontFamily="monospace">&gt;</text>
          
          <text x="90" y="170" fill="#9CDCFE" fontSize="14" fontFamily="monospace">&lt;h1&gt;</text>
          <text x="120" y="170" fill="#FFFFFF" fontSize="14" fontFamily="monospace">Hello World</text>
          <text x="200" y="170" fill="#9CDCFE" fontSize="14" fontFamily="monospace">&lt;/h1&gt;</text>
          
          <text x="70" y="195" fill="#9CDCFE" fontSize="14" fontFamily="monospace">&lt;/div&gt;</text>
          
          <text x="50" y="220" fill="#FFFFFF" fontSize="14" fontFamily="monospace">);</text>
          
          <text x="30" y="245" fill="#FFFFFF" fontSize="14" fontFamily="monospace">&#125;;</text>
          
          {/* Cursor */}
          <rect x="245" y="165" width="2" height="14" fill="#FFFFFF">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
        
        {/* Browser window */}
        <rect x="450" y="200" width="200" height="150" rx="5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
        <rect x="450" y="200" width="200" height="25" rx="5 5 0 0" fill="#F3F4F6" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="465" cy="212" r="5" fill="#EF4444" />
        <circle cx="485" cy="212" r="5" fill="#F59E0B" />
        <circle cx="505" cy="212" r="5" fill="#10B981" />
        <rect x="525" y="207" width="100" height="10" rx="5" fill="#E5E7EB" />
        
        {/* Browser content */}
        <text x="500" y="250" fill="#111827" fontSize="16" fontWeight="bold" textAnchor="middle">Hello World</text>
        <rect x="475" y="270" width="150" height="10" rx="5" fill="#E5E7EB" />
        <rect x="475" y="290" width="100" height="10" rx="5" fill="#E5E7EB" />
        <rect x="475" y="310" width="125" height="10" rx="5" fill="#E5E7EB" />
        
        {/* Floating elements */}
        <g className="animate-float">
          <path d="M50 300 L80 300 L65 330 Z" fill="#8B5CF6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
          </path>
        </g>
        
        <g className="animate-float-delay">
          <path d="M720 400 L750 400 L735 370 Z" fill="#3B82F6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
        
        <circle cx="100" cy="450" r="15" fill="url(#circleGradient1)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="700" cy="150" r="15" fill="url(#circleGradient2)" opacity="0.7">
          <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite" />
        </circle>
        
        {/* Connection lines */}
        <path d="M300 350 C350 350, 350 250, 450 250" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5 5" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="webDevGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
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

export default WebDevIllustration;
