
-- Create hero_slides table
CREATE TABLE public.hero_slides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  highlight_words TEXT, -- comma-separated words to highlight
  image_url TEXT NOT NULL,
  text_position TEXT NOT NULL DEFAULT 'center-left', -- top-left, top-center, top-right, center-left, center-center, center-right, bottom-left, bottom-center, bottom-right
  text_color TEXT NOT NULL DEFAULT '#FFFFFF',
  highlight_color TEXT NOT NULL DEFAULT '#FFD700',
  link_url TEXT,
  link_text TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;

-- Anyone can view active slides
CREATE POLICY "Anyone can view active hero slides"
ON public.hero_slides
FOR SELECT
USING (is_active = true);

-- Admins can manage slides
CREATE POLICY "Admins can insert hero slides"
ON public.hero_slides
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update hero slides"
ON public.hero_slides
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete hero slides"
ON public.hero_slides
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can view all slides (including inactive)
CREATE POLICY "Admins can view all hero slides"
ON public.hero_slides
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Update trigger
CREATE TRIGGER update_hero_slides_updated_at
BEFORE UPDATE ON public.hero_slides
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
