'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, BookOpen, Users, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    year: '2015',
    title: 'Started Teaching Journey',
    description: 'Began my career as an elementary school teacher with a passion for making learning fun and engaging.',
    icon: GraduationCap,
    color: '#D1FAE5',
  },
  {
    year: '2017',
    title: 'Innovative Teaching Award',
    description: 'Received recognition for implementing creative teaching methods and technology integration.',
    icon: Award,
    color: '#FEF9C3',
  },
  {
    year: '2019',
    title: 'Literacy Program Launch',
    description: 'Developed and launched a successful after-school reading program that helped 50+ students improve their reading skills.',
    icon: BookOpen,
    color: '#E0F2FE',
  },
  {
    year: '2021',
    title: 'Community Builder',
    description: 'Created a strong classroom community that celebrates diversity and encourages peer collaboration.',
    icon: Users,
    color: '#FCA5A5',
  },
  {
    year: '2023',
    title: 'Master Teacher Certification',
    description: 'Earned advanced certification and began mentoring new teachers in the district.',
    icon: Sparkles,
    color: '#D1FAE5',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            About Mr. Bautista
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            A passionate educator dedicated to inspiring young minds and creating memorable learning experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border-4 border-dashed border-gray-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <Heart className="w-12 h-12 text-red-400 fill-red-400 flex-shrink-0" />
            <div>
              <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-4">
                My Teaching Philosophy
              </h2>
              <p className="font-hand text-xl text-gray-700 leading-relaxed mb-4">
                I believe that every child is unique and has the potential to achieve greatness. My goal is to create a nurturing, inclusive, and exciting learning environment where students feel safe to explore, make mistakes, and grow.
              </p>
              <p className="font-hand text-xl text-gray-700 leading-relaxed">
                Learning should be joyful! I strive to make each lesson engaging and relevant to students' lives, fostering curiosity and a lifelong love of learning.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D1FAE5] via-[#E0F2FE] to-[#FEF9C3]" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
                <div
                  className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg"
                  style={{ backgroundColor: event.color }}
                >
                  <event.icon className="w-8 h-8 text-gray-800" />
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-800 hover:shadow-xl transition-shadow">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-handwriting text-3xl font-bold text-gray-800">
                      {event.year}
                    </span>
                    <h3 className="font-hand text-2xl font-bold text-gray-800">
                      {event.title}
                    </h3>
                  </div>
                  <p className="font-hand text-lg text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-[#FEF9C3] rounded-3xl shadow-xl p-8 md:p-12 border-4 border-dashed border-gray-800"
        >
          <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-6 text-center">
            Fun Facts About Me!
          </h2>
          <div className="grid md:grid-cols-2 gap-6 font-hand text-lg text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <p>I've read over 500 children's books (and counting!)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎨</span>
              <p>I love crafting and DIY classroom decorations</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <p>Our class has a garden where we grow vegetables</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎵</span>
              <p>I play the ukulele and write silly songs for lessons</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">☕</span>
              <p>Powered by coffee and the enthusiasm of my students!</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🐕</span>
              <p>My dog, Buddy, is our unofficial class mascot</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
