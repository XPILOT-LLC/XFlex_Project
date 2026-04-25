"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Star Component
const GlowingStar = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center ${className}`}>
    <div className="absolute h-4 w-4 animate-pulse rounded-full bg-white/40 blur-[4px]" />
    <div className="absolute h-8 w-8 animate-pulse rounded-full bg-white/10 blur-[8px]" />
    <svg
      className="relative z-10 text-white/90"
      width="12" height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L13.5 9.5H21L15 14L16.5 21.5L12 17L7.5 21.5L9 14L3 9.5H10.5L12 2Z" />
    </svg>
  </div>
);

type TeamMember = {
  name: string;
  role: string;
  description: string;
  bullets: string[];
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ebrahim Ali",
    role: "FOUNDER",
    description:
      "Best Corporate Tax Consultant in UAE with 20+ years of experience as international tax consultants.",
    bullets: [
      "UAE Tax Consultant",
      "Registered Tax Agent - UAE FTA",
      "15+ Years Experience",
      "Specialist in Corporate Tax & VAT",
    ],
    image: "/team member/PICTURE.jpeg",
  },
  {
    name: "Falak Yussouf",
    role: "International Financial Expert",
    description:
      "Helping UAE businesses stay compliant with practical tax structuring, reporting, and advisory support.",
    bullets: [
      "International & UAE Tax Expert",
      "FCA (UK)",
      "30+ Years Experience",
      "Cross-border Tax Specialist",
    ],
    image: "/team member/WhatsApp-Image-2026-03-02-at-12.29.14-AM.jpeg",
  },
  {
    name: "Kader Khan",
    role: "Tax Expert",
    description:
      "Focused on clear tax execution, risk reduction, and operational support for growing companies in the UAE.",
    bullets: [
      "Senior Tax Consultant",
      "Chartered Accountant",
      "20+ Years Experience",
      "VAT & Corporate Tax Expert",
    ],
    image: "/team member/WhatsApp-Image-2026-03-03-at-12.00.50-AM.jpeg",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleSwipeEnd = (touchEndX: number) => {
    if (touchStartX === null) return;
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) < 40) {
      setTouchStartX(null);
      return;
    }
    if (delta > 0) handleNext();
    else handlePrev();
    setTouchStartX(null);
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0D14] py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#0b0e14_0%,#121824_100%)] pointer-events-none" />

      {/* Sweeping Light Streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] h-[350px] w-[120%] -rotate-[35deg] bg-gradient-to-l from-transparent via-white/[0.06] to-transparent blur-[90px]" />
        <div className="absolute top-[15%] left-[-20%] h-[250px] w-[150%] -rotate-[35deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent blur-[80px]" />
      </div>

      {/* Stars */}
      <GlowingStar className="left-[27%] top-[12%]" />
      <GlowingStar className="left-[4%] top-[26%]" />
      <GlowingStar className="bottom-[14%] left-[8%]" />
      <GlowingStar className="bottom-[22%] left-[50%]" />
      <GlowingStar className="right-[16%] bottom-[28%]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between gap-16 lg:gap-8">

          {/* LEFT COLUMN */}
          <div className="flex w-full flex-col items-start lg:w-1/2 lg:justify-between">
            <div className="w-full">
              <h2 className="text-[44px] font-bold leading-tight text-white md:text-[56px] lg:text-[64px]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                Meet Our <span className="text-[#C9A96E]">Team</span>
              </h2>

              <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-[#A0AABF] md:text-[16px]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                Best Corporate Tax Consultant in UAE with 20+ years of experience as international tax consultants.
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <ul className="mt-12 flex w-full max-w-[460px] flex-col items-center gap-3.5 pl-4 text-center text-[15px] text-[#9eb0d0] md:pl-24 md:text-[16px]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                    {activeMember.bullets.map((bullet, idx) => (
                      <li key={idx}>• {bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Button */}
            <div className="mt-14 w-full">
              <button className="rounded-[10px] bg-[#C9A96E] px-8 py-3.5 text-[15px] font-semibold text-[#111111] shadow-[0_10px_20px_rgba(201,169,110,0.2)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                Book free consultation
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex w-full flex-col items-center lg:w-1/2 pt-10 lg:pt-0">
            <div
              className="relative"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
            >
              {/* Offset Stacked Shadow Card */}
              <div className="absolute -bottom-6 -left-8 right-8 top-6 rounded-[24px] bg-[#1a1e28] shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />

              {/* Main Image Card with Slide Animation */}
              <div className="relative h-[440px] w-[320px] overflow-hidden rounded-[24px] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:h-[500px] md:w-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`card-${activeIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col justify-end"
                  >
                    <Image
                      src={activeMember.image}
                      alt={activeMember.name}
                      fill
                      className="object-cover"
                    />

                    {/* Bottom Frosted Overlay */}
                    <div className="relative z-10 flex h-[110px] w-full flex-col items-center justify-center border-t border-white/20 bg-gradient-to-b from-[#404652]/80 to-[#2c313a]/95 backdrop-blur-md md:h-[120px]">
                      <h3 className="text-[19px] font-bold tracking-wide text-white md:text-[20px] uppercase" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                        {activeMember.name}
                      </h3>
                      <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] md:text-[13px]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                        {activeMember.role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="relative z-20 mt-10 flex gap-4 md:mt-14">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1e2532] text-[#C9A96E] transition-all duration-300 hover:bg-[#273040] hover:shadow-[0_0_15px_rgba(201,169,110,0.15)]"
                aria-label="Previous team member"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1e2532] text-[#C9A96E] transition-all duration-300 hover:bg-[#273040] hover:shadow-[0_0_15px_rgba(201,169,110,0.15)]"
                aria-label="Next team member"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
