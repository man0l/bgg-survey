import React, { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-gray-200 ${className}`}
      {...props}
    />
  );
}


