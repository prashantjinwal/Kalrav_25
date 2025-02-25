import React, { useRef, useEffect, useState } from "react";

const CustomSlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, offsetWidth } = sliderRef.current;
        const newIndex = Math.round(scrollLeft / (offsetWidth / slides.length));
        setActiveIndex(newIndex);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="px-10 flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-5 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className={`w-[250px] h-[200px] shrink-0 snap-center bg-gray-300 flex items-center justify-center text-xl font-bold rounded-lg transition-transform duration-300 ${
              index === activeIndex ? "scale-110" : "scale-90 opacity-70"
            }`}
          >
            <SlideComponent />
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CustomSlider;