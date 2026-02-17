/*
  # Teacher's Blog Schema
  
  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `slug` (text, unique, not null)
      - `excerpt` (text)
      - `content` (text, not null)
      - `cover_image` (text)
      - `published` (boolean, default false)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `author_name` (text, not null)
      - `role` (text) - e.g., "Parent", "Student", "Colleague"
      - `quote` (text, not null)
      - `avatar_color` (text, default '#D1FAE5')
      - `display_order` (integer, default 0)
      - `created_at` (timestamptz, default now())
    
    - `gallery_images`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `image_url` (text, not null)
      - `caption` (text)
      - `rotation` (text, default 'rotate-0') - for random rotation effect
      - `display_order` (integer, default 0)
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (blog is public)
    - Add policies for authenticated admin users to manage content
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  cover_image text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  role text,
  quote text NOT NULL,
  avatar_color text DEFAULT '#D1FAE5',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  caption text,
  rotation text DEFAULT 'rotate-0',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Policies for testimonials
CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- Policies for gallery_images
CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert gallery images"
  ON gallery_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery images"
  ON gallery_images FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery images"
  ON gallery_images FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO blog_posts (title, slug, excerpt, content, published) VALUES
  ('Welcome to My Teaching Journey', 'welcome-to-my-teaching-journey', 'Starting a new chapter in education', 'This is my first blog post where I share my experiences as a teacher...', true),
  ('Creative Learning Activities', 'creative-learning-activities', 'Fun ways to engage students', 'Here are some creative activities that have worked wonderfully in my classroom...', true),
  ('The Power of Encouragement', 'power-of-encouragement', 'How positive words change lives', 'Every student needs encouragement. Here''s how I make it a daily practice...', true);

INSERT INTO testimonials (author_name, role, quote, avatar_color, display_order) VALUES
  ('Sarah Johnson', 'Parent', 'Mrs. Bautista has been an incredible teacher for my daughter. She truly cares about each student!', '#FEF9C3', 1),
  ('Mike Chen', 'Student', 'Best teacher ever! She makes learning fun and always believes in us.', '#E0F2FE', 2),
  ('Emma Davis', 'Colleague', 'A dedicated educator who goes above and beyond for her students every single day.', '#D1FAE5', 3);

INSERT INTO gallery_images (title, image_url, caption, rotation, display_order) VALUES
  ('Science Fair 2024', 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg', 'Our amazing science fair projects!', 'rotate-2', 1),
  ('Reading Corner', 'https://images.pexels.com/photos/8423001/pexels-photo-8423001.jpeg', 'Our cozy classroom reading nook', '-rotate-1', 2),
  ('Art Day', 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg', 'Creative art projects by my students', 'rotate-1', 3),
  ('Field Trip', 'https://images.pexels.com/photos/8422087/pexels-photo-8422087.jpeg', 'Museum field trip adventures', '-rotate-2', 4),
  ('Class Photo', 'https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg', 'Our wonderful class of 2024', 'rotate-3', 5),
  ('Math Games', 'https://images.pexels.com/photos/8613332/pexels-photo-8613332.jpeg', 'Making math fun with games', '-rotate-1', 6);