'use client';

import { motion } from 'framer-motion';
import { IndexCard } from '@/components/scrapbook/IndexCard';
import { BookOpen, Calculator, Beaker, Globe, Palette, Music, Users, Sparkles } from 'lucide-react';

const subjects = [
  {
    title: 'Language Arts',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Reading, writing, grammar, and creative storytelling. We explore wonderful books and develop strong communication skills.',
    activities: ['Daily reading time', 'Creative writing projects', 'Book clubs', 'Poetry workshops'],
  },
  {
    title: 'Mathematics',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Numbers, patterns, problem-solving, and logical thinking. Math is everywhere, and we make it fun!',
    activities: ['Hands-on math games', 'Real-world applications', 'Problem-solving challenges', 'Math journals'],
  },
  {
    title: 'Science',
    icon: <Beaker className="w-6 h-6" />,
    description: 'Experiments, observations, and discoveries. We explore the natural world through hands-on investigations.',
    activities: ['Weekly experiments', 'Nature walks', 'Science fair projects', 'STEM challenges'],
  },
  {
    title: 'Social Studies',
    icon: <Globe className="w-6 h-6" />,
    description: 'History, geography, cultures, and community. We learn about our world and our place in it.',
    activities: ['Cultural celebrations', 'Map activities', 'Historical timelines', 'Community projects'],
  },
  {
    title: 'Art',
    icon: <Palette className="w-6 h-6" />,
    description: 'Creativity, self-expression, and artistic techniques. Every child is an artist in our classroom!',
    activities: ['Weekly art projects', 'Artist studies', 'Mixed media creations', 'Art exhibitions'],
  },
  {
    title: 'Music',
    icon: <Music className="w-6 h-6" />,
    description: 'Rhythm, melody, and musical appreciation. We sing, dance, and explore the joy of music together.',
    activities: ['Singing sessions', 'Instrument exploration', 'Movement activities', 'Music appreciation'],
  },
  {
    title: 'Physical Education',
    icon: <Users className="w-6 h-6" />,
    description: 'Movement, teamwork, and healthy habits. We stay active and learn the importance of physical wellness.',
    activities: ['Team sports', 'Fitness activities', 'Cooperative games', 'Yoga and mindfulness'],
  },
  {
    title: 'Character Development',
    icon: <Sparkles className="w-6 h-6" />,
    description: 'Kindness, respect, responsibility, and empathy. We focus on growing as good citizens and caring individuals.',
    activities: ['Daily character lessons', 'Peer mentoring', 'Community service', 'Conflict resolution'],
  },
];

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            What We Learn
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            Our curriculum is designed to inspire curiosity, creativity, and a love for learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IndexCard
                title={subject.title}
                icon={subject.icon}
                className="h-full hover:shadow-2xl transition-shadow"
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {subject.description}
                </p>
                <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                  <p className="font-bold text-gray-800 mb-2">Key Activities:</p>
                  <ul className="space-y-1">
                    {subject.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#10B981] mt-1">✓</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </IndexCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#D1FAE5] to-[#E0F2FE] rounded-3xl shadow-xl p-8 md:p-12 border-4 border-dashed border-gray-800"
        >
          <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-6 text-center">
            Our Learning Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6 font-hand text-lg text-gray-700">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 text-center">Goal-Oriented</h3>
              <p className="text-center">We set clear, achievable goals and celebrate progress along the way.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3 text-center">🤝</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 text-center">Collaborative</h3>
              <p className="text-center">Students learn from each other through teamwork and peer support.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-3 text-center">🌈</div>
              <h3 className="font-bold text-xl text-gray-800 mb-2 text-center">Inclusive</h3>
              <p className="text-center">Every learner's unique strengths and needs are valued and supported.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
