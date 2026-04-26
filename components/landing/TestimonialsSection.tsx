"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import TestimonialCard, { type TestimonialItem } from "../ui/TestimonialCard";
import { useI18n } from "@/lib/i18n";

function mod(index: number, total: number) {
  return (index + total) % total;
}

export default function TestimonialsSection() {
  const { t, tRaw, isRTL } = useI18n();
  const fontFamily = isRTL
    ? "var(--font-cairo), Cairo, sans-serif"
    : "var(--font-poppins), Poppins, sans-serif";

  const testimonials = (tRaw("testimonials.items") as TestimonialItem[]) ?? [];

  // Keep avatar images (not in translation) mapped by index
  const avatars = ["/avatar/4.png", "/avatar/1.jpg", "/avatar/3.png", "/avatar/2.webp"];
  const testimonialsFull: TestimonialItem[] = testimonials.map((item, i) => ({
    ...item,
    image: avatars[i] ?? "/avatar/4.png",
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!testimonialsFull.length) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => mod(current + 1, testimonialsFull.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [testimonialsFull.length]);

  const visibleCards = useMemo(
    () =>
      testimonialsFull.length
        ? {
            left: testimonialsFull[mod(activeIndex - 1, testimonialsFull.length)],
            center: testimonialsFull[activeIndex],
            right: testimonialsFull[mod(activeIndex + 1, testimonialsFull.length)],
          }
        : null,
    [activeIndex, testimonialsFull]
  );

  if (!visibleCards) return null;

  return (
    <section className="relative overflow-hidden bg-[#04060A] py-24 md:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[170px] -top-[96px] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle_at_48%_48%,rgba(201,169,110,0.30)_0%,rgba(132,103,48,0.16)_34%,rgba(201,169,110,0)_70%)] blur-[36px] md:-left-[158px] md:-top-[84px]" />
        <svg className="absolute -left-[176px] -top-[176px] h-[440px] w-[440px] opacity-95 md:-left-[166px] md:-top-[166px] md:h-[485px] md:w-[485px]" viewBox="0 0 485 485" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-medium tracking-[0.45em] text-[#C9A96E] ml-[0.45em]" style={{ fontFamily }}>
            {t("testimonials.sectionLabel")}
          </p>
          <h2 className="mt-5 text-[36px] font-bold leading-tight tracking-tight text-white md:text-[48px]" style={{ fontFamily }}>
            {t("testimonials.heading")}
          </h2>
          <p className="mt-4 text-[15px] text-[#8B949E]" style={{ fontFamily }}>
            {t("testimonials.description")}
          </p>
        </div>

        {/* Carousel */}
        <div 
          className="mt-12 md:mt-20 flex w-full justify-center"
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const touchEndX = e.changedTouches[0].clientX;
            const delta = touchStartX - touchEndX;
            if (Math.abs(delta) < 40) { setTouchStartX(null); return; }
            if (isRTL) {
              if (delta > 0) setActiveIndex((current) => mod(current - 1, testimonialsFull.length));
              else setActiveIndex((current) => mod(current + 1, testimonialsFull.length));
            } else {
              if (delta > 0) setActiveIndex((current) => mod(current + 1, testimonialsFull.length));
              else setActiveIndex((current) => mod(current - 1, testimonialsFull.length));
            }
            setTouchStartX(null);
          }}
        >
          <div className="relative h-auto w-full max-w-[1200px]">
            {/* 
              GHOST CARD: This is a invisible, relative version of the active card.
              It exists purely to push the container's height on mobile, while the 
              real cards animate absolutely on top of it.
            */}
            <motion.div layout className="pointer-events-none invisible relative mt-10 px-8 pb-12 pt-[100px] w-[90vw] max-w-[340px] md:max-w-[540px] lg:max-w-[760px] md:px-12 md:pb-16 mx-auto">
              <div className="flex flex-col items-center text-center">
                <p className="text-[14.5px] leading-[1.8] text-[#D1D5DB] md:text-[16px]">"{visibleCards.center.text}"</p>
                <div className="mt-10">
                  <h4 className="text-[17px] font-bold text-[#C9A96E] md:text-[18px]">{visibleCards.center.name}</h4>
                  <p className="mt-1.5 text-[14px] text-[#8B949E] md:text-[15px]">{visibleCards.center.role}</p>
                </div>
              </div>
            </motion.div>

            <AnimatePresence initial={false} mode="popLayout">
              <TestimonialCard key={`left-${activeIndex}`} testimonial={visibleCards.left} isActive={false} position="left" />
              <TestimonialCard key={`center-${activeIndex}`} testimonial={visibleCards.center} isActive={true} position="center" />
              <TestimonialCard key={`right-${activeIndex}`} testimonial={visibleCards.right} isActive={false} position="right" />
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 md:mt-8 flex justify-center gap-5">
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current - 1, testimonialsFull.length))}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#181f29] text-[#C9A96E] transition-all duration-300 hover:bg-[#202936] hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            aria-label={t("testimonials.prevBtn")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isRTL ? "-scale-x-100 transform" : ""}>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current + 1, testimonialsFull.length))}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#181f29] text-[#C9A96E] transition-all duration-300 hover:bg-[#202936] hover:shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            aria-label={t("testimonials.nextBtn")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isRTL ? "-scale-x-100 transform" : ""}>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
