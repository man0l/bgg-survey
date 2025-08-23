'use client';

import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
const map: Record<Variant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
};

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`${base} ${map[variant]} ${className}`} {...props} />;
}


