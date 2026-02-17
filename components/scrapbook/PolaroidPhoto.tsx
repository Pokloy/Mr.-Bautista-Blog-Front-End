'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  className?: string;
}

export function PolaroidPhoto({
  src,
  alt,
  caption,
  rotation = 0,
  className
}: PolaroidPhotoProps) {
  return (
    <div
      className={cn(
        'bg-white p-3 pb-12 shadow-xl relative',
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-sm px-3">
          {caption}
        </p>
      )}
    </div>
  );
}
