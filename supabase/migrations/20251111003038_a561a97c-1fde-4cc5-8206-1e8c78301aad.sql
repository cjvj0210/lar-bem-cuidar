-- Add slug and category columns to blog_posts
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS slug text UNIQUE,
ADD COLUMN IF NOT EXISTS category text NOT NULL DEFAULT 'Dicas de Saúde',
ADD COLUMN IF NOT EXISTS read_time integer DEFAULT 5,
ADD COLUMN IF NOT EXISTS views integer DEFAULT 0;

-- Create index for slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);

-- Update existing posts to have slugs (if they don't already)
UPDATE public.blog_posts 
SET slug = LOWER(REGEXP_REPLACE(
  REGEXP_REPLACE(
    REGEXP_REPLACE(title, '[áàâãä]', 'a', 'g'),
    '[éèêë]', 'e', 'g'
  ) || '-' || SUBSTRING(id::text, 1, 8), 
  '[^a-z0-9]+', '-', 'g'
))
WHERE slug IS NULL;

-- Make slug NOT NULL after populating
ALTER TABLE public.blog_posts ALTER COLUMN slug SET NOT NULL;