import React from 'react';

interface CharacterProfileProps {
  name: string;
  image: string;
  role: string;
  description: string;
}

export function CharacterProfile({ name, image, role, description }: CharacterProfileProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative h-96">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{name}</h3>
        <p className="text-blue-300 mb-4">{role}</p>
        <p className="text-blue-400/80">{description}</p>
      </div>
    </div>
  );
}