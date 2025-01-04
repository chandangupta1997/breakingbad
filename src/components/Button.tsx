import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'solid' | 'outline';
}

export function Button({ children, href, variant = 'solid' }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105";
  const styles = variant === 'solid'
    ? `${baseStyles} bg-blue-500 text-black hover:bg-blue-400`
    : `${baseStyles} border-2 border-blue-500 text-blue-500 hover:border-blue-400 hover:text-blue-400`;

  return (
    <a href={href} className={styles}>
      {children}
    </a>
  );
}