import { useState } from "react";
import { Star, MessageSquare, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-[#2D2926]/5">
      {/* Visual Quote mark backdrops */}
      <div className="absolute top-10 left-10 text-[#8C7E6A]/5 transform -translate-x-12 -translate-y-12 select-none -z-10 font-serif leading-none text-[220px]">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[#8C7E6A]/5 transform translate-x-12 translate-y-12 select-none -z-10 font-serif leading-none text-[220px]">
        &rdquo;
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#8C7E6A] font-bold">Kundenstimmen</span>
          <h2 className="text-3xl font-serif font-medium text-[#2D2926] tracking-tight">
            Was Gäste über uns schreiben
          </h2>
          <div className="h-[1px] w-12 bg-[#2D2926]/20 mx-auto mt-3" />
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative bg-white border border-[#2D2926]/10 rounded-none px-6 sm:px-12 py-10 sm:py-14 shadow-none" id="testimonials-carousel">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* 5 Star rating indicators */}
            <div className="flex items-center gap-1">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#8C7E6A] text-[#8C7E6A]" />
              ))}
            </div>

            {/* Testimonial Quote text */}
            <blockquote className="text-sm sm:text-base md:text-lg font-serif italic text-[#2D2926] leading-relaxed max-w-3xl">
              "{TESTIMONIALS[activeIndex].text}"
            </blockquote>

            {/* Client Signature and date */}
            <div className="space-y-1.5">
              <span className="block font-serif text-[#2D2926] font-semibold text-base sm:text-lg">
                {TESTIMONIALS[activeIndex].name}
              </span>
              <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-[#2D2926]/60">
                <span className="font-light">{TESTIMONIALS[activeIndex].date}</span>
                <span>•</span>
                <span className="font-bold text-[#8C7E6A] bg-[#8C7E6A]/10 px-2.5 py-0.5 rounded-none uppercase tracking-widest text-[9px]">
                  {TESTIMONIALS[activeIndex].treatment}
                </span>
              </div>
            </div>

          </div>

          {/* Slider buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border border-[#2D2926]/10 hover:border-[#2D2926] text-[#2D2926] rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Vorherige Kundenbewertung"
              id="slider-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-6">
            <button
              onClick={handleNext}
              className="p-3 bg-white border border-[#2D2926]/10 hover:border-[#2D2926] text-[#2D2926] rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Nächste Kundenbewertung"
              id="slider-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators bottom */}
        <div className="flex justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === i ? "w-8 bg-[#2D2926]" : "w-2 bg-[#2D2926]/20 hover:bg-[#2D2926]"
              }`}
              aria-label={`Gehe zu Bewertung ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
