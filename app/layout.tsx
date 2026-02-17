import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Mr. Bautista Blog",
  description: 'A whimsical digital scrapbook of teaching adventures, classroom stories, and educational inspiration',
  openGraph: {
    images: [
      {
        url: '/img1.jpg',
      },
    ],
  },
  // twitter: {
  //   card: 'Mrs. Ryan Bautista',
  //   images: [
  //     {
  //       url: 'https://bolt.new/static/og_default.png',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-28 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
