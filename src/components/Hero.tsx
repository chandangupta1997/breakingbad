import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469536526925-9b5547cd5d68?auto=format&fit=crop&q=80")'
        }}
      />
      <div className="relative z-10">
        <GlitchText className="text-4xl md:text-6xl font-bold mb-6">
          Yo, B**ch!
        </GlitchText>
        <p className="text-xl md:text-2xl text-blue-400 mb-12">
          Welcome to my digital empire
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button href="#cook">Check Out My Cook</Button>
          <Button href="#contact" variant="outline">Say My Name</Button>
        </div>
      </div>
      <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-blue-400" />
    </div>
  );
}