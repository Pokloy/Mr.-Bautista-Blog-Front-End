'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  created_at: string;
  published: boolean;
}

export default function BlogPage() {
  // const [posts, setPosts] = useState<BlogPost[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const { data, error } = await supabase
  //       .from('blog_posts')
  //       .select('id, title, slug, excerpt, created_at, published')
  //       .eq('published', true)
  //       .order('created_at', { ascending: false });

  //     if (data && !error) {
  //       setPosts(data);
  //     }
  //     setLoading(false);
  //   }

  //   fetchPosts();
  // }, []);

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   });
  // };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-gray-800" />
          </div>
          <h1 className="font-handwriting text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Classroom Chronicles
          </h1>
          <p className="font-hand text-2xl text-gray-700 max-w-2xl mx-auto">
            Stories, lessons, and reflections from our teaching journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12 border-l-8 border-[#E0F2FE]"
        >
          <div className="notebook-lines min-h-[200px] p-6">
            <p className="font-hand text-xl text-gray-800 leading-relaxed">
              Welcome to my teaching blog! Here I share insights, stories, and lessons learned from the classroom. Each post is a glimpse into the wonderful world of teaching and the amazing students who inspire me every day.
            </p>
          </div>
        </motion.div>

        {loading ? (
          <div className="text-center font-hand text-2xl text-gray-600">
            Loading blog posts...
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-l-8 border-[#D1FAE5] hover:-translate-y-1 group">
                    <div className="notebook-lines min-h-[150px] p-6">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Calendar className="w-5 h-5" />
                        <span className="font-hand text-sm">
                          {formatDate(post.created_at)}
                        </span>
                      </div>

                      <h2 className="font-handwriting text-4xl font-bold text-gray-800 mb-4 group-hover:text-[#10B981] transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-hand text-lg text-gray-700 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-[#10B981] font-hand font-bold group-hover:gap-4 transition-all">
                        <span>Read more</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#FEF9C3] rounded-3xl shadow-xl p-12 text-center border-4 border-dashed border-gray-800"
          >
            <p className="font-hand text-2xl text-gray-700">
              No blog posts yet. Check back soon for new stories and updates!
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#E0F2FE] to-[#D1FAE5] rounded-3xl shadow-xl p-8 border-4 border-dashed border-gray-800"
        >
          <h2 className="font-handwriting text-3xl font-bold text-gray-800 mb-4 text-center">
            Subscribe to Updates
          </h2>
          <p className="font-hand text-lg text-gray-700 text-center mb-6">
            Want to stay connected? Reach out through our contact page to receive updates about new blog posts and classroom news!
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-800 font-hand text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}
