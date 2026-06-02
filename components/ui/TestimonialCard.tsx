"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { TestimonialItem } from "@/lib/api/types";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
  isActive: boolean;
  position: "left" | "center" | "right";
};

export default function TestimonialCard({
  testimonial,
  isActive,
  position,
}: TestimonialCardProps) {
  const { isRTL } = useI18n();

  // Extreme scale difference to make the center card massive and prominent.
  const variants = {
    left: { x: isRTL ? "40%" : "-140%", scale: 0.65, opacity: 0.35, zIndex: 1 },
    center: { x: "-50%", scale: 1, opacity: 1, zIndex: 3 },
    right: { x: isRTL ? "-140%" : "40%", scale: 0.65, opacity: 0.35, zIndex: 1 },
  };

  // Hide side cards gracefully on smaller viewports
  let visibilityClass = "";
  if (position === "left" || position === "right") {
    visibilityClass = "hidden lg:block";
  }

  return (
    <motion.article
      layout
      initial={false}
      animate={variants[position]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: isActive ? -8 : 0 }}
      // CRITICAL SHAPE: Massive top-left and bottom-right radiuses ("leaf" shape).
      className={`absolute top-10 left-1/2 w-[90vw] max-w-[340px] md:max-w-[540px] lg:max-w-[760px] rounded-[24px] rounded-br-[80px] rounded-tl-[80px] border border-white/5 bg-[linear-gradient(180deg,#1c2128_0%,#121519_100%)] px-8 pb-12 pt-[100px] shadow-[0_24px_60px_rgba(0,0,0,0.6)] md:px-12 md:pb-16 ${visibilityClass}`}
      style={{ transformOrigin: "center center" }}
    >
      {/* Avatar perfectly centered */}
      <div className="absolute left-1/2 top-[-45px] h-[90px] w-[90px] -translate-x-1/2 overflow-hidden rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.7)] bg-[#1c2128]">
        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
      </div>

      {/* Stars fixed at Top Corner */}
      <div className={`absolute top-8 flex items-center gap-[4px] md:top-10 ${isRTL ? "left-8 md:left-10" : "right-8 md:right-10"}`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="#C9A96E" className="text-[#C9A96E]">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="text-[14.5px] leading-[1.8] text-[#D1D5DB] md:text-[16px]">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Name and Role */}
        <div className="mt-10">
          <h4 className="text-[17px] font-bold text-[#C9A96E] md:text-[18px]">{testimonial.name}</h4>
          <p className="mt-1.5 text-[14px] text-[#8B949E] md:text-[15px]">{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
