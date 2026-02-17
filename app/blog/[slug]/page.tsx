'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
}

export default function BlogPostPage() {
  // const params = useParams();
  // const [post, setPost] = useState<BlogPost | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchPost() {
  //     const { data, error } = await supabase
  //       .from('blog_posts')
  //       .select('*')
  //       .eq('slug', params.slug)
  //       .eq('published', true)
  //       .maybeSingle();

  //     if (data && !error) {
  //       setPost(data);
  //     }
  //     setLoading(false);
  //   }

  //   fetchPost();
  // }, [params.slug]);

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   });
  // };

  // if (loading) {
  //   return (
  //     <div className="container mx-auto px-4 py-12">
  //       <div className="max-w-4xl mx-auto text-center">
  //         <p className="font-hand text-2xl text-gray-600">Loading post...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!post) {
  //   return (
  //     <div className="container mx-auto px-4 py-12">
  //       <div className="max-w-4xl mx-auto text-center">
  //         <h1 className="font-handwriting text-6xl font-bold text-gray-800 mb-6">
  //           Post Not Found
  //         </h1>
  //         <Link
  //           href="/blog"
  //           className="inline-flex items-center gap-2 font-hand text-xl text-[#10B981] hover:underline"
  //         >
  //           <ArrowLeft className="w-5 h-5" />
  //           Back to Blog
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-hand text-lg text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all posts
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-[#D1FAE5]">
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-hand text-lg">
                {formatDate(post.created_at)}
              </span>
            </div>

            <h1 className="font-handwriting text-5xl md:text-7xl font-bold text-gray-800 mb-8">
              {post.title}
            </h1>

            <div className="notebook-lines p-6">
              <div className="font-hand text-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[#FEF9C3] rounded-3xl shadow-xl p-8 border-4 border-dashed border-gray-800"
        >
          <h3 className="font-handwriting text-3xl font-bold text-gray-800 mb-4 text-center">
            Thanks for Reading!
          </h3>
          <p className="font-hand text-lg text-gray-700 text-center mb-6">
            I hope you enjoyed this post. Feel free to reach out if you have any questions or want to share your own experiences!
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-800 font-hand text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-800"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}
