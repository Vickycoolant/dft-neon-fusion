
-- Add toggle for stats bar visibility per slide
ALTER TABLE public.hero_slides ADD COLUMN show_stats boolean NOT NULL DEFAULT true;

-- Add toggle for default buttons (Schedule Consultation, etc.) visibility per slide
ALTER TABLE public.hero_slides ADD COLUMN show_default_buttons boolean NOT NULL DEFAULT true;

-- Add JSONB array for multiple link buttons per slide
-- Each element: { "text": "Learn More", "url": "/services", "description": "Explore our solutions", "position": "bottom-left", "button_color": "#10B981", "description_color": "#FFFFFF" }
ALTER TABLE public.hero_slides ADD COLUMN link_buttons jsonb NOT NULL DEFAULT '[]'::jsonb;
