"use client"
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../public/banner-1.jpg";
import banner2 from "../public/banner-2.jpg";
import banner3 from "../public/banner-3.jpg";
import Image from "next/image";

const slides = [
  { image: banner1, title: "Premium Copper Wires & Cables", subtitle: "Engineered for safety, built for performance" },
  { image: banner2, title: "Industrial Switchgear Solutions", subtitle: "Reliable power distribution for every scale" },
  { image: banner3, title: "State-of-the-Art Manufacturing", subtitle: "Made in India with world-class precision" },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-70 sm:h-90 md:h-105 overflow-hidden pt-20">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, transform: i === current ? "scale(1)" : "scale(1.05)" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={512}
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-white/80 drop-shadow">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white w-7" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;