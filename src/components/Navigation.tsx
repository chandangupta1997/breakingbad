import React from 'react';
import { Skull, TestTubes, MessageSquare, User } from 'lucide-react';
import { NavLink } from './NavLink';

export function Navigation() {
  return (
    <nav className="bg-zinc-800/50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Skull className="w-8 h-8 text-blue-400" />
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about" icon={<User />}>About</NavLink>
              <NavLink href="#cook" icon={<TestTubes />}>The Cook</NavLink>
              <NavLink href="#contact" icon={<MessageSquare />}>Say My Name</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}