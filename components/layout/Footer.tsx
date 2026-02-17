'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <svg
        className="w-full h-48"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
          fill="#D1FAE5"
          opacity="0.8"
        />

        <path
          d="M0,120 Q200,80 400,120 T800,120 T1200,120 L1200,200 L0,200 Z"
          fill="#E0F2FE"
          opacity="0.6"
        />

        <circle cx="150" cy="100" r="40" fill="#10B981" opacity="0.7" />
        <path
          d="M150,60 Q140,40 150,30 Q160,40 150,60"
          fill="#059669"
          opacity="0.8"
        />

        <circle cx="900" cy="90" r="50" fill="#10B981" opacity="0.7" />
        <path
          d="M900,40 Q885,15 900,5 Q915,15 900,40"
          fill="#059669"
          opacity="0.8"
        />

        <circle cx="500" cy="110" r="35" fill="#10B981" opacity="0.7" />
        <path
          d="M500,75 Q490,60 500,50 Q510,60 500,75"
          fill="#059669"
          opacity="0.8"
        />

        <circle cx="1050" cy="105" r="30" fill="#10B981" opacity="0.7" />
        <path
          d="M1050,75 Q1042,62 1050,55 Q1058,62 1050,75"
          fill="#059669"
          opacity="0.8"
        />

        <circle cx="250" cy="115" r="25" fill="#10B981" opacity="0.7" />
        <path
          d="M250,90 Q243,80 250,73 Q257,80 250,90"
          fill="#059669"
          opacity="0.8"
        />

        <path
          d="M700,120 L705,140 L695,140 Z"
          fill="#10B981"
          opacity="0.7"
        />
        <path
          d="M700,120 L710,135 L690,135 Z"
          fill="#059669"
          opacity="0.8"
        />
      </svg>

      <div className="bg-gradient-to-b from-[#E0F2FE] to-[#D1FAE5] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-hand text-lg text-gray-800 flex items-center justify-center gap-2">
            Made with <Heart className="w-5 h-5 text-red-500 fill-red-500" /> by Mr. Ryan Bautista, LPT
          </p>
          <p className="font-hand text-sm text-gray-600 mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
