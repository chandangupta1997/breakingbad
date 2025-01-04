import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export function NavLink({ href, children, icon }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}