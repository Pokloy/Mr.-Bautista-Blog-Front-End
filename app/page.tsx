'use client';

import { motion } from 'framer-motion';
import { PolaroidPhoto } from '@/components/scrapbook/PolaroidPhoto';
import { StickyNote } from '@/components/scrapbook/StickyNote';
import { WashiTape } from '@/components/scrapbook/WashiTape';
import { Sparkles, Star, Heart, Pencil } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-4">
            Welcome to Our Classroom!
          </h1>
          <div className="flex justify-center gap-4 mt-6">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
            <Sparkles className="w-8 h-8 text-blue-400 fill-blue-400 animate-bounce" />
            <Heart className="w-8 h-8 text-red-400 fill-red-400 animate-pulse" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <WashiTape color="mint" rotation={-2} width="w-64" />
            </div>
            <PolaroidPhoto
              src="/img1.jpg"
              alt="Teacher at blackboard"
              caption="Mr. Bautista- Teaching since 2015"
              rotation={-3}
              className="mx-auto max-w-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <StickyNote color="yellow" rotation={2} className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Pencil className="w-6 h-6" />
                Hello, Wonderful Parents & Students!
              </h2>
              <p className="text-lg leading-relaxed mb-3">
                Welcome to our digital classroom scrapbook! Here you'll find updates about our learning adventures, classroom activities, and special moments we share together.
              </p>
              <p className="text-lg leading-relaxed">
                Every day is a new opportunity to learn, grow, and have fun!
              </p>
              <div className="mt-4 pt-4 border-t-2 border-dashed border-gray-400">
                <p className="text-xl font-bold">- Mr. Bautista ✨</p>
              </div>
            </StickyNote>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-6 left-8 rotate-12">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 5 L35 20 L50 22 L40 32 L43 47 L30 39 L17 47 L20 32 L10 22 L25 20 Z" fill="#FEF9C3" stroke="#F59E0B" strokeWidth="2"/>
            </svg>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-dashed border-gray-300">
            <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-8 text-center">
              Explore Our World
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog" className="group">
                <div className="bg-[#E0F2FE] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">Blog Posts</h3>
                  <p className="font-hand text-gray-600">Read about our daily adventures and learning moments</p>
                </div>
              </Link>

              <Link href="/gallery" className="group">
                <div className="bg-[#D1FAE5] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800">
                  <div className="text-4xl mb-3">📸</div>
                  <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">Photo Gallery</h3>
                  <p className="font-hand text-gray-600">Check out our classroom memories and special events</p>
                </div>
              </Link>

              <Link href="/testimonials" className="group">
                <div className="bg-[#FEF9C3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">Kind Words</h3>
                  <p className="font-hand text-gray-600">See what parents and students have to say</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="absolute -bottom-6 right-8 -rotate-12">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="25" fill="#FCA5A5" stroke="#EF4444" strokeWidth="2"/>
              <path d="M20 28 Q25 33 30 28 Q35 33 40 28" stroke="#EF4444" strokeWidth="2" fill="none"/>
              <circle cx="23" cy="23" r="2" fill="#EF4444"/>
              <circle cx="37" cy="23" r="2" fill="#EF4444"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
