import React from 'react';
import { GlitchText } from './GlitchText';
import { Navigation } from './Navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-blue-500 font-['Press_Start_2P']">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}