import { useRef, useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CoreValuesCarouselProps {
  coreValues: CoreValue[];
}

const accentStyles = [
  { bg: "from-primary/20 to-primary/10", text: "text-primary", border: "border-primary/20", iconBg: "from-primary to-primary/70" },
  { bg: "from-success/20 to-success/10", text: "text-success", border: "border-success/20", iconBg: "from-success to-success/70" },
  { bg: "from-warning/20 to-warning/10", text: "text-warning", border: "border-warning/20", iconBg: "from-warning to-warning/70" },
];

const CoreValuesCarousel = ({ coreValues }: CoreValuesCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  const allValues = [...coreValues, ...coreValues, ...coreValues, ...coreValues];

  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused || isDragging) return;
    scrollPosRef.current += 0.5;
    const halfWidth = scrollRef.current.scrollWidth / 2;
    if (scrollPosRef.current >= halfWidth) {
      scrollPosRef.current = 0;
    }
    scrollRef.current.scrollLeft = scrollPosRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollPosRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.clientX - startX;
    const newScrollLeft = scrollLeft - dx;
    scrollRef.current.scrollLeft = newScrollLeft;
    scrollPosRef.current = newScrollLeft;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <div
      className="relative overflow-hidden w-full py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide select-none touch-pan-y"
        style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {allValues.map((value, index) => {
          const style = accentStyles[index % accentStyles.length];
          const IconComponent = value.icon;
          return (
            <Card
              key={`${value.title}-${index}`}
              className={`w-72 h-64 mx-4 group hover:shadow-xl transition-all duration-300 flex-shrink-0 border ${style.border} bg-card hover:-translate-y-1`}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center pointer-events-none">
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default CoreValuesCarousel;
