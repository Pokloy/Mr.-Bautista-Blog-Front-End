'use client';

import { motion } from 'framer-motion';
import { SpeechBubble } from '@/components/scrapbook/SpeechBubble';
import { MessageCircle, Star } from 'lucide-react';

// 1. Define the Interface
interface Testimonial {
  id: string;
  author_name: string;
  role: string;
  quote: string;
  avatar_color: string;
  display_order: number;
}

// 2. Encode your data here manually
const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author_name: 'Juanito "Juan" Pineda dela Cruz',
    role: 'Parent',
    quote: 'Mr. Bautista has been an incredible teacher for my daughter. She truly cares about each student!',
    avatar_color: '#FEF9C3',
    display_order: 1,
  },
  {
    id: '2',
    author_name: 'Maria Clarisse Santos Recto',
    role: 'Student',
    quote: 'Best teacher ever! She makes learning fun and always believes in us.',
    avatar_color: '#E0F2FE',
    display_order: 2,
  },
  {
    id: '3',
    author_name: 'Nathaniel "Nate" Gatchalian Alcasid',
    role: 'Colleague',
    quote: 'A dedicated educator who goes above and beyond for her students every single day.',
    avatar_color: '#D1FAE5',
    display_order: 3,
  },
];

export default function TestimonialsPage() {
  // No more useEffect or loading state needed!

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-16 h-16 text-gray-800" />
          </div>
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Kind Words
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            Hear what parents, students, and colleagues have to say about our classroom community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FEF9C3] rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-4 border-dashed border-gray-800"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="font-hand text-2xl text-gray-800 text-center">
            Your feedback and support mean the world to us! Thank you for being part of our learning journey.
          </p>
        </motion.div>

        <div className="space-y-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <SpeechBubble
                author={testimonial.author_name}
                role={testimonial.role}
                color={testimonial.avatar_color}
              >
                "{testimonial.quote}"
              </SpeechBubble>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-dashed border-gray-800 text-center"
        >
          <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-4">
            Want to Share Your Experience?
          </h2>
          <p className="font-hand text-xl text-gray-700 mb-6">
            We'd love to hear from you! Your feedback helps us continue to grow and improve.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D1FAE5] text-gray-800 font-hand text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}