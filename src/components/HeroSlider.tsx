import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedStats from "@/components/AnimatedStats";

// Default fallback images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

interface LinkButton {
  text: string;
  url: string;
  description: string;
  position: string;
  button_color: string;
  description_color: string;
}

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string | null;
  highlight_words: string | null;
  image_url: string;
  text_position: string;
  text_color: string;
  highlight_color: string;
  link_url: string | null;
  link_text: string | null;
  link_buttons: LinkButton[];
  show_stats: boolean;
  show_default_buttons: boolean;
  sort_order: number;
}

const defaultSlides: HeroSlide[] = [
  {
    id: "default-1",
    title: "AI-Powered Fintech Solutions",
    subtitle: "Transforming Financial Technology with Advanced AI. Over 15 years of cutting-edge fintech innovations.",
    highlight_words: "AI-Powered,Advanced AI",
    image_url: heroSlide1,
    text_position: "center-left",
    text_color: "#FFFFFF",
    highlight_color: "#FFD700",
    link_url: null,
    link_text: null,
    link_buttons: [{ text: "Explore Solutions", url: "/services", description: "Discover our AI-powered services", position: "bottom-left", button_color: "#10B981", description_color: "#FFFFFF" }],
    show_stats: true,
    show_default_buttons: true,
    sort_order: 0,
  },
  {
    id: "default-2",
    title: "Expert Team, Global Impact",
    subtitle: "Collaborative innovation driving real results for banking, finance, and insurance sectors across East Africa.",
    highlight_words: "Global Impact,East Africa",
    image_url: heroSlide2,
    text_position: "center-left",
    text_color: "#FFFFFF",
    highlight_color: "#00E5FF",
    link_url: null,
    link_text: null,
    link_buttons: [{ text: "Meet Our Team", url: "/about", description: "Learn about our experts", position: "bottom-left", button_color: "#3B82F6", description_color: "#FFFFFF" }],
    show_stats: true,
    show_default_buttons: true,
    sort_order: 1,
  },
  {
    id: "default-3",
    title: "Intelligent Data Analytics",
    subtitle: "Harness AI to transform raw data into actionable business intelligence and strategic insights.",
    highlight_words: "Intelligent,actionable",
    image_url: heroSlide3,
    text_position: "center-right",
    text_color: "#FFFFFF",
    highlight_color: "#64FFDA",
    link_url: null,
    link_text: null,
    link_buttons: [{ text: "View Analytics", url: "/services", description: "See data in action", position: "bottom-right", button_color: "#8B5CF6", description_color: "#FFFFFF" }],
    show_stats: true,
    show_default_buttons: true,
    sort_order: 2,
  },
  {
    id: "default-4",
    title: "Security & Risk Management",
    subtitle: "Comprehensive digital forensics and cybersecurity protecting your most critical financial assets.",
    highlight_words: "Security,Risk Management",
    image_url: heroSlide4,
    text_position: "center-center",
    text_color: "#FFFFFF",
    highlight_color: "#76FF03",
    link_url: null,
    link_text: null,
    link_buttons: [{ text: "Learn More", url: "/industry", description: "Protect your assets", position: "bottom-center", button_color: "#EF4444", description_color: "#FFFFFF" }],
    show_stats: true,
    show_default_buttons: true,
    sort_order: 3,
  },
  {
    id: "default-5",
    title: "Connecting East Africa's Financial Future",
    subtitle: "Bridging global innovation with local impact through localized, AI-ready technology solutions.",
    highlight_words: "East Africa's,Financial Future",
    image_url: heroSlide5,
    text_position: "bottom-left",
    text_color: "#FFFFFF",
    highlight_color: "#FFD700",
    link_url: null,
    link_text: null,
    link_buttons: [{ text: "Our Partners", url: "/partners", description: "See who we work with", position: "bottom-left", button_color: "#F59E0B", description_color: "#FFFFFF" }],
    show_stats: true,
    show_default_buttons: true,
    sort_order: 4,
  },
];

const SLIDE_DURATION = 6000;

const textPositionClasses: Record<string, string> = {
  "top-left": "items-start justify-start pt-32 pl-8 md:pl-16 text-left",
  "top-center": "items-start justify-center pt-32 text-center",
  "top-right": "items-start justify-end pt-32 pr-8 md:pr-16 text-right",
  "center-left": "items-center justify-start pl-8 md:pl-16 text-left",
  "center-center": "items-center justify-center text-center",
  "center-right": "items-center justify-end pr-8 md:pr-16 text-right",
  "bottom-left": "items-end justify-start pb-48 pl-8 md:pl-16 text-left",
  "bottom-center": "items-end justify-center pb-48 text-center",
  "bottom-right": "items-end justify-end pb-48 pr-8 md:pr-16 text-right",
};

const linkButtonPositionClasses: Record<string, string> = {
  "top-left": "top-28 left-8 md:left-16",
  "top-center": "top-28 left-1/2 -translate-x-1/2",
  "top-right": "top-28 right-8 md:right-16",
  "center-left": "top-1/2 -translate-y-1/2 left-8 md:left-16",
  "center-center": "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
  "center-right": "top-1/2 -translate-y-1/2 right-8 md:right-16",
  "bottom-left": "bottom-44 left-8 md:left-16",
  "bottom-center": "bottom-44 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-44 right-8 md:right-16",
};

const highlightText = (text: string, words: string | null, highlightColor: string) => {
  if (!words) return text;
  const wordList = words.split(",").map((w) => w.trim()).filter(Boolean);
  let result = text;
  wordList.forEach((word) => {
    const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
    result = result.replace(regex, `<span style="color:${highlightColor}">$1</span>`);
  });
  return result;
};

const HeroSlider = () => {
  const [slides, setSlides] = useState<HeroSlide[]>(defaultSlides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const statsData = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 99, label: "Accuracy Rate", suffix: "%" },
    { value: 6, label: "Countries Reached", suffix: "+" },
    { value: 100, label: "Reliability", suffix: "%" },
  ];

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from("hero_slides")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setSlides(
          data.map((d: any) => ({
            ...d,
            link_buttons: Array.isArray(d.link_buttons) ? d.link_buttons : [],
            show_stats: d.show_stats ?? true,
            show_default_buttons: d.show_default_buttons ?? true,
          }))
        );
      }
    };
    fetchSlides();
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTextVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
          setTextVisible(true);
        }, 300);
      }, 500);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentIndex + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentIndex, slides.length, goToSlide]);

  const prevSlide = () => goToSlide((currentIndex - 1 + slides.length) % slides.length);
  const nextSlide = () => goToSlide((currentIndex + 1) % slides.length);

  const slide = slides[currentIndex];
  const posClass = textPositionClasses[slide.text_position] || textPositionClasses["center-left"];

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images with zoom-out effect */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === currentIndex ? 1 : 0, zIndex: i === currentIndex ? 1 : 0 }}
        >
          <img
            src={s.image_url}
            alt={s.title}
            className="w-full h-full object-cover"
            style={{
              animation: i === currentIndex ? "heroZoomOut 7s ease-out forwards" : "none",
              transform: i === currentIndex ? undefined : "scale(1.2)",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Text content overlay (title + subtitle only) */}
      <div className={`absolute inset-0 z-10 flex flex-col ${posClass} px-4 md:px-8`}>
        <div
          className={`max-w-3xl transition-all duration-700 ease-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg"
            style={{ color: slide.text_color }}
            dangerouslySetInnerHTML={{
              __html: highlightText(slide.title, slide.highlight_words, slide.highlight_color),
            }}
          />
          {slide.subtitle && (
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed drop-shadow-md max-w-2xl"
              style={{ color: slide.text_color, opacity: 0.9 }}
              dangerouslySetInnerHTML={{
                __html: highlightText(slide.subtitle, slide.highlight_words, slide.highlight_color),
              }}
            />
          )}
        </div>
      </div>

      {/* Link buttons - positioned independently */}
      {slide.link_buttons && slide.link_buttons.length > 0 && (
        <>
          {slide.link_buttons.map((btn, idx) => {
            const btnPosClass = linkButtonPositionClasses[btn.position] || linkButtonPositionClasses["bottom-left"];
            return (
              <div
                key={idx}
                className={`absolute z-10 flex flex-col items-start gap-1 transition-all duration-700 ease-out ${btnPosClass} ${
                  textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              >
                {btn.description && (
                  <p className="text-sm md:text-base drop-shadow-md mb-1" style={{ color: btn.description_color }}>
                    {btn.description}
                  </p>
                )}
                <Link to={btn.url}>
                  <Button
                    size="lg"
                    className="group shadow-lg"
                    style={{ backgroundColor: btn.button_color, color: "#FFFFFF", borderColor: btn.button_color }}
                  >
                    {btn.text}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </>
      )}

      {/* Static bottom bar: stats + default buttons */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-4 transition-all duration-700 ease-out ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {slide.show_stats && (
          <div className="mb-4">
            <AnimatedStats stats={statsData} />
          </div>
        )}
        {slide.show_default_buttons && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services">
              <Button variant="success" size="lg" className="group">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="warning" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroZoomOut {
          0% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
