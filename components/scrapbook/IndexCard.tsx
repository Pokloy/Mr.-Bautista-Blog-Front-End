'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface IndexCardProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function IndexCard({
  children,
  title,
  icon,
  className
}: IndexCardProps) {
  return (
    <div
      className={cn(
        'bg-white p-6 shadow-md border-l-4 border-[#E0F2FE] relative',
        'before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300',
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-dashed border-gray-300">
          {icon && <div className="text-2xl">{icon}</div>}
          <h3 className="font-hand text-xl text-gray-800">{title}</h3>
        </div>
      )}
      <div className="font-hand text-gray-700">
        {children}
      </div>
    </div>
  );
}
