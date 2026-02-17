'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface WashiTapeProps {
  color?: 'mint' | 'sky' | 'yellow' | 'coral';
  rotation?: number;
  className?: string;
  width?: string;
}

const colorClasses = {
  mint: 'bg-[#D1FAE5]',
  sky: 'bg-[#E0F2FE]',
  yellow: 'bg-[#FEF9C3]',
  coral: 'bg-[#FCA5A5]',
};

export function WashiTape({
  color = 'mint',
  rotation = 0,
  className,
  width = 'w-full'
}: WashiTapeProps) {
  return (
    <div
      className={cn(
        'h-8 opacity-60',
        colorClasses[color],
        width,
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
}
