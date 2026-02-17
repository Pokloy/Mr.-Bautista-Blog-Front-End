'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface StickyNoteProps {
  children: React.ReactNode;
  color?: 'mint' | 'sky' | 'yellow' | 'coral';
  rotation?: number;
  className?: string;
}

const colorClasses = {
  mint: 'bg-[#D1FAE5]',
  sky: 'bg-[#E0F2FE]',
  yellow: 'bg-[#FEF9C3]',
  coral: 'bg-[#FCA5A5]',
};

export function StickyNote({
  children,
  color = 'yellow',
  rotation = 0,
  className
}: StickyNoteProps) {
  return (
    <div
      className={cn(
        'p-6 shadow-lg relative',
        colorClasses[color],
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-white/30 rounded-sm" />
      <div className="font-hand text-gray-800">
        {children}
      </div>
    </div>
  );
}
