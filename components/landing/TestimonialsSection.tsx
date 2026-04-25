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
    image: "/avatar/4.png",
  },
  {
    name: "Fatima Al Suwaidi",
    role: "Finance Manager - Retail Group (UAE)",
    text: "We were struggling with related party transactions and documentation. XFLEX guided us step by step and prepared everything professionally. Their work gave us confidence during review. Highly recommended for companies dealing with complex structures.",
    image: "/avatar/1.jpg",
  },
  {
    name: "Ahmed Al Kaabi",
    role: "Managing Director - SME (Dhabi)",
    text: "Working with XFLEX was a turning point for our business. We had concerns regarding Corporate Tax compliance and potential penalties, and their team handled everything professionally from start to finish. They explained complex tax matters in a very clear way and represented us confidently before the FTA. I highly recommend XFLEX to any company that wants peace of mind when dealing with tax authorities.",
    image: "/avatar/3.png",
  },
  {
    name: "Sara Al Mansoori",
    role: "Founder – Startup (UAE)",
    text: "XFLEX provided exceptional support during a critical time for our company. We received an FTA inquiry and were unsure how to respond, but their team stepped in immediately and managed the entire process. Their knowledge, responsiveness, and structured approach made a huge difference. Thanks to them, we resolved the issue smoothly and avoided unnecessary complications.",
    image: "/avatar/2.webp",
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
        <div className="absolute -left-[170px] -top-[96px] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle_at_48%_48%,rgba(201,169,110,0.30)_0%,rgba(132,103,48,0.16)_34%,rgba(201,169,110,0)_70%)] blur-[36px] md:-left-[158px] md:-top-[84px]" />

        <svg
          className="absolute -left-[176px] -top-[176px] h-[440px] w-[440px] opacity-95 md:-left-[166px] md:-top-[166px] md:h-[485px] md:w-[485px]"
          viewBox="0 0 485 485"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <mask id="testimonialCircleFade">
              <linearGradient id="testimonialCircleMask" x1="0" y1="84" x2="394" y2="274" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="0.64" stopColor="white" stopOpacity="0.95" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <rect width="485" height="485" fill="black" />
              <rect width="485" height="485" fill="url(#testimonialCircleMask)" />
            </mask>
          </defs>
          <g mask="url(#testimonialCircleFade)">
            <circle cx="214" cy="236" r="114" stroke="#C9A96E" strokeWidth="1.45" strokeDasharray="3.5 6.5" opacity="0.72" />
            <circle cx="214" cy="236" r="146" stroke="#C9A96E" strokeWidth="1.45" strokeDasharray="7 8" opacity="0.62" />
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
