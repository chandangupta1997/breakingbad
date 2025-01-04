import React from 'react';

export function GlitchText({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative inline-block">
        <span className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] text-red-500 opacity-70 animate-glitch">
          {children}
        </span>
        <span className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] text-blue-500 opacity-70 animate-glitch-2">
          {children}
        </span>
        <span className="relative">{children}</span>
      </span>
    </div>
  );
}