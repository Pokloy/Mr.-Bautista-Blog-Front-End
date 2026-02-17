'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { Camera, Heart } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  caption: string;
  rotation: string;
  display_order: number;
}

export default function GalleryPage() {
  // const [images, setImages] = useState<GalleryImage[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchImages() {
  //     const { data, error } = await supabase
  //       .from('gallery_images')
  //       .select('*')
  //       .order('display_order', { ascending: true });

  //     if (data && !error) {
  //       setImages(data);
  //     }
  //     setLoading(false);
  //   }

  //   fetchImages();
  // }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Camera className="w-16 h-16 text-gray-800" />
          </div>
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Our Memories
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            Capturing the special moments, celebrations, and everyday magic in our classroom
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#D1FAE5] via-[#E0F2FE] to-[#FEF9C3] rounded-3xl shadow-xl p-8 mb-12 border-4 border-dashed border-gray-800"
        >
          <p className="font-hand text-xl text-gray-800 text-center flex items-center justify-center gap-2">
            Every picture tells a story of learning, laughter, and friendship
            <Heart className="w-6 h-6 text-red-400 fill-red-400" />
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center font-hand text-2xl text-gray-600">
            Loading gallery...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${image.rotation} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="bg-white p-4 pb-16 shadow-2xl hover:shadow-3xl transition-shadow relative group">
                  <div className="relative w-full aspect-square bg-gray-100">
                    <Image
                      src={image.image_url}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="font-hand text-lg font-semibold text-gray-800">
                      {image.title}
                    </p>
                    {image.caption && (
                      <p className="font-hand text-sm text-gray-600 mt-1">
                        {image.caption}
                      </p>
                    )}
                  </div>

                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FEF9C3] opacity-60 rounded-sm shadow" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-[#E0F2FE] rounded-3xl shadow-xl p-8 md:p-12 border-4 border-dashed border-gray-800"
        >
          <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-6 text-center">
            Photo Day Tips!
          </h2>
          <div className="grid md:grid-cols-2 gap-6 font-hand text-lg text-gray-700">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl mb-2">📸</div>
              <p className="font-bold text-gray-800 mb-2">Picture Day</p>
              <p>Class photos are taken on the first Friday of each month. Wear your favorite outfit!</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-bold text-gray-800 mb-2">Project Photos</p>
              <p>We document all our amazing projects and artwork to share with families.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl mb-2">🎉</div>
              <p className="font-bold text-gray-800 mb-2">Special Events</p>
              <p>Field trips, parties, and celebrations are always captured to preserve the memories.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-bold text-gray-800 mb-2">Sharing</p>
              <p>All photos are shared securely with families through our class portal.</p>
            </div>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}
