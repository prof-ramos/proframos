import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className = '', isDark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon portion */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-legal-900 via-legal-800 to-accent shadow-lg border border-legal-700/50 overflow-hidden group">
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        
        {/* SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 transform transition-transform group-hover:scale-105 duration-300 relative z-10"
        >
          {/* AI core logic/spark (background rays) */}
          <path
            d="M12 2v3m0 14v3m-10-10h3m14 0h3m-14.5-7.5l2.5 2.5m10 10l2.5 2.5M4.5 19.5l2.5-2.5m10-10l2.5-2.5"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-40"
          />
          
          {/* Law / Study Book motif (Left Page) */}
          <path
            d="M5 19C5 18.2 5.6 17.5 6.4 17.5H12M5 19C5 19.8 5.6 20.5 6.4 20.5H12M5 19V6.5C5 5.7 5.6 5 6.4 5H12V20.5"
            stroke="#eff6ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Law / Study Book motif (Right Page) */}
          <path
            d="M19 19C19 18.2 18.4 17.5 17.6 17.5H12M19 19C19 19.8 18.4 20.5 17.6 20.5H12M19 19V6.5C19 5.7 18.4 5 17.6 5H12V20.5"
            stroke="#eff6ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Neural link connecting book pages */}
          <circle cx="12" cy="11.5" r="2.5" fill="#2563eb" stroke="#eff6ff" strokeWidth="1" />
          
          {/* Micro digital nodes */}
          <circle cx="12" cy="7.5" r="0.5" fill="#eff6ff" />
          <circle cx="12" cy="15.5" r="0.5" fill="#eff6ff" />
        </svg>

        {/* Subtle top glare for 3D effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Text portion */}
      <div className="flex flex-col select-none">
        <span className={`font-serif text-[1.4rem] font-bold tracking-tight leading-none ${isDark ? 'text-white' : 'text-legal-900'}`}>
          ai<span className="text-accent">.wiki</span><span className="text-gold">.br</span>
        </span>
      </div>
    </div>
  );
}
