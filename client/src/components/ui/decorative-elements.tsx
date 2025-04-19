import React from 'react';

export const CircleBlob = ({ className = '', color = 'from-purple-500/20 to-blue-500/20' }: { className?: string, color?: string }) => (
  <div className={`absolute rounded-full blur-3xl bg-gradient-to-r ${color} ${className}`}></div>
);

export const GridPattern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${className}`}>
    <svg width="100%" height="100%">
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export const WavyLine = ({ className = '', color = 'stroke-accent' }: { className?: string, color?: string }) => (
  <div className={`absolute ${className}`}>
    <svg width="100%" height="50" viewBox="0 0 1200 50" preserveAspectRatio="none">
      <path 
        d="M0,25 C300,5 600,45 900,25 C1200,5 1500,45 1800,25 L1800,50 L0,50 Z" 
        className={`fill-none ${color} stroke-2`} 
      />
    </svg>
  </div>
);

export const CircleGrid = ({ className = '' }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <svg width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <pattern id="circlePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" className="fill-white/20" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circlePattern)" />
    </svg>
  </div>
);

export const GlowingSphere = ({ className = '', size = 'w-20 h-20', color = 'bg-accent/30' }: { className?: string, size?: string, color?: string }) => (
  <div className={`relative ${className}`}>
    <div className={`${size} rounded-full ${color} blur-xl absolute inset-0`}></div>
    <div className={`${size} rounded-full ${color} blur-md absolute inset-0`}></div>
    <div className={`${size} rounded-full bg-gradient-to-br from-white/10 to-transparent absolute inset-0`}></div>
  </div>
);

export const FloatingShapes = ({ className = '' }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <div className="animate-float">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 0L60 30L30 60L0 30L30 0Z" className="fill-accent/20" />
      </svg>
    </div>
  </div>
);

export const FloatingCircles = ({ className = '' }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <div className="animate-float-delay">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="20" className="fill-accent/10" />
        <circle cx="40" cy="40" r="30" className="fill-none stroke-accent/20 stroke-[0.5]" />
        <circle cx="40" cy="40" r="40" className="fill-none stroke-accent/10 stroke-[0.5]" />
      </svg>
    </div>
  </div>
);

export const Sparkle = ({ className = '', size = 'w-6 h-6' }: { className?: string, size?: string }) => (
  <div className={`${className} ${size} animate-pulse`}>
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 3L13.5 9H19.5L14.5 13L16 19L12 15L8 19L9.5 13L4.5 9H10.5L12 3Z" className="fill-accent/50" />
    </svg>
  </div>
);
