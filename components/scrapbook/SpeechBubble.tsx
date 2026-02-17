'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SpeechBubbleProps {
  children: React.ReactNode;
  author: string;
  role?: string;
  color?: string;
  className?: string;
}

export function SpeechBubble({
  children,
  author,
  role,
  color = '#FEF9C3',
  className
}: SpeechBubbleProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        className="rounded-3xl p-6 shadow-lg relative border-2 border-gray-800"
        style={{ backgroundColor: color }}
      >
        <div className="font-hand text-gray-800 text-lg leading-relaxed">
          {children}
        </div>

        <div
          className="absolute bottom-0 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-gray-800"
          style={{
            transform: 'translateY(100%)',
          }}
        />

        <div
          className="absolute bottom-0 left-8 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px]"
          style={{
            borderTopColor: color,
            transform: 'translateY(calc(100% - 2px))',
          }}
        />
      </div>

      <div className="mt-8 ml-4 flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700 border-2 border-gray-800"
          style={{ backgroundColor: color }}
        >
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-hand text-lg font-semibold text-gray-800">{author}</p>
          {role && <p className="font-hand text-sm text-gray-600">{role}</p>}
        </div>
      </div>
    </div>
  );
}
