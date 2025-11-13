-- Add rich text content field and multiple images support to posts table
ALTER TABLE public.posts 
ADD COLUMN content TEXT,
ADD COLUMN images TEXT[] DEFAULT '{}';

-- Add comment to clarify the columns
COMMENT ON COLUMN public.posts.content IS 'Rich text HTML content for the full article';
COMMENT ON COLUMN public.posts.images IS 'Array of image URLs for the post';
COMMENT ON COLUMN public.posts.description IS 'Short preview text for the post card';
COMMENT ON COLUMN public.posts.image_url IS 'Main thumbnail image for the post card';