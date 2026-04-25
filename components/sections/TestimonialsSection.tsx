"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import TestimonialCard, { type TestimonialItem } from "../ui/TestimonialCard";

// Using exact data provided in the prompt
const testimonials: TestimonialItem[] = [
  {
    name: "Mohammed Al Nuaimi",
    role: "Managing Director - SME (Dubai)",
    text: "We received a penalty from the FTA and didn’t know how to proceed. XFLEX handled the case professionally and managed all communication with the authority. Their structured approach and expertise made a stressful situation much easier to handle.",
    image: "/avatars/avatar1.jpg",
  },
  {
    name: "Fatima Al Suwaidi",
    role: "Finance Manager - Retail Group (UAE)",
    text: "We were struggling with related party transactions and documentation. XFLEX guided us step by step and prepared everything professionally. Their work gave us confidence during review. Highly recommended for companies dealing with complex structures.",
    image: "/avatars/avatar2.jpg",
  },
];

function mod(index: number, total: number) {
  return (index + total) % total;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 5 seconds, looping infinitely
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => mod(current + 1, testimonials.length));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleCards = useMemo(
    () => ({
      left: testimonials[mod(activeIndex - 1, testimonials.length)],
      center: testimonials[activeIndex],
      right: testimonials[mod(activeIndex + 1, testimonials.length)],
    }),
    [activeIndex]
  );

  return (
    <section className="relative overflow-hidden bg-[#04060A] py-24 md:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Core Intense Gold Glow matching the photo exactly */}
        <div className="absolute left-[-10%] top-[0%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.22)_0%,rgba(201,169,110,0)_70%)] blur-[60px]" />
        
        {/* Ambient Broad Gold Glow */}
        <div className="absolute left-[-20%] top-[-10%] h-[1200px] w-[1200px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,rgba(201,169,110,0.03)_50%,rgba(0,0,0,0)_80%)] blur-[90px]" />

        {/* Massive Dashed Concentric Circles with fading mask */}
        <svg 
          className="absolute left-0 top-0 h-full w-[100vw] opacity-75" 
          viewBox="0 0 1200 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <radialGradient id="circleFade" cx="150" cy="150" r="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="1" />
              <stop offset="0.4" stopColor="white" stopOpacity="0.6" />
              <stop offset="0.7" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#circleFade)" />
            </mask>
          </defs>
          <g mask="url(#fadeMask)">
            {/* The concentric dashed circles mimicking the sweeping pattern in the image */}
            <circle cx="150" cy="150" r="220" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="10 14" opacity="0.8" />
            <circle cx="150" cy="150" r="400" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="10 14" opacity="0.6" />
            <circle cx="150" cy="150" r="580" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="10 14" opacity="0.4" />
            <circle cx="150" cy="150" r="760" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="10 14" opacity="0.25" />
            <circle cx="150" cy="150" r="940" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="10 14" opacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header (centered) */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-medium tracking-[0.45em] text-[#C9A96E] ml-[0.45em]">
            TESTIMONIALS.....
          </p>
          <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-tight text-white md:text-[48px]">
            What our clients say
          </h2>
          <p className="mt-4 text-[15px] text-[#8B949E]">
            Trusted by businesses across the UAE.
          </p>
        </div>

        {/* Testimonials Layout - Horizontal Carousel */}
        <div className="mt-20 flex w-full justify-center">
          {/* Height increased slightly to accommodate taller centered card */}
          <div className="relative h-[500px] w-full max-w-[1200px]">
            <AnimatePresence initial={false} mode="popLayout">
              <TestimonialCard
                key={`left-${activeIndex}-${visibleCards.left.name}`}
                testimonial={visibleCards.left}
                isActive={false}
                position="left"
              />
              <TestimonialCard
                key={`center-${activeIndex}-${visibleCards.center.name}`}
                testimonial={visibleCards.center}
                isActive={true}
                position="center"
              />
              <TestimonialCard
                key={`right-${activeIndex}-${visibleCards.right.name}`}
                testimonial={visibleCards.right}
                isActive={false}
                position="right"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls - Spaced nicely below the massive center card */}
        <div className="mt-4 flex justify-center gap-5">
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current - 1, testimonials.length))}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#181f29] text-[#C9A96E] transition-all duration-300 hover:bg-[#202936] hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current + 1, testimonials.length))}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#181f29] text-[#C9A96E] transition-all duration-300 hover:bg-[#202936] hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
