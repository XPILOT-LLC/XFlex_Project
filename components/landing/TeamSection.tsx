"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

// LinkedIn URLs are kept static — not translatable
const memberLinkedIn = [
  "https://www.linkedin.com/in/ebrahim-alali-xflex-tax/",
  "https://www.linkedin.com/in/falak-yussouf-1b4a4b1/",
  "https://www.linkedin.com/in/ca-khadar-khan-md-cams-326906205/",
];

// Photos are also static
const memberImages = [
  "/team member/PICTURE.jpeg",
  "/team member/WhatsApp-Image-2026-03-02-at-12.29.14-AM.jpeg",
  "/team member/WhatsApp-Image-2026-03-03-at-12.00.50-AM.jpeg",
];

type TeamMember = {
  name: string;
  role: string;
  bullets: string[];
};

const GlowingStar = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center ${className}`}>
    <div className="absolute h-4 w-4 animate-pulse rounded-full bg-white/40 blur-[4px]" />
    <div className="absolute h-8 w-8 animate-pulse rounded-full bg-white/10 blur-[8px]" />
    <svg className="relative z-10 text-white/90" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.5 9.5H21L15 14L16.5 21.5L12 17L7.5 21.5L9 14L3 9.5H10.5L12 2Z" />
    </svg>
  </div>
);

export default function TeamSection() {
  const { t, tRaw, isRTL } = useI18n();
  const fontFamily = isRTL
    ? "var(--font-cairo), Cairo, sans-serif"
    : "var(--font-poppins), Poppins, sans-serif";

  const rawMembers = tRaw("team.members");
  const members = Array.isArray(rawMembers) ? (rawMembers as TeamMember[]) : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Safety: Reset index if language switch results in fewer members
  useEffect(() => {
    if (members.length > 0 && activeIndex >= members.length) {
      setActiveIndex(0);
    }
  }, [members.length, activeIndex]);

  const handleNext = () => {
    if (members.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % members.length);
  };
  
  const handlePrev = () => {
    if (members.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleSwipeEnd = (touchEndX: number) => {
    if (touchStartX === null) return;
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) < 40) { setTouchStartX(null); return; }
    if (isRTL) {
      if (delta > 0) handlePrev(); else handleNext();
    } else {
      if (delta > 0) handleNext(); else handlePrev();
    }
    setTouchStartX(null);
  };

  // Even if members are missing, we show the section shell to avoid layout jumps
  const activeMember = members[activeIndex] || { name: "", role: "", bullets: [] };
  const activeImage = memberImages[activeIndex] ?? memberImages[0];
  const activeLinkedIn = memberLinkedIn[activeIndex];

  return (
    <section id="team" className="relative w-full overflow-hidden bg-[#0A0D14] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#0b0e14_0%,#121824_100%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] h-[350px] w-[120%] -rotate-[35deg] bg-gradient-to-l from-transparent via-white/[0.06] to-transparent blur-[90px]" />
        <div className="absolute top-[15%] left-[-20%] h-[250px] w-[150%] -rotate-[35deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent blur-[80px]" />
      </div>

      <GlowingStar className="left-[27%] top-[12%]" />
      <GlowingStar className="left-[4%] top-[26%]" />
      <GlowingStar className="bottom-[14%] left-[8%]" />
      <GlowingStar className="bottom-[22%] left-[50%]" />
      <GlowingStar className="right-[16%] bottom-[28%]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        {members.length > 0 ? (
          <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between gap-16 lg:gap-8">
            {/* LEFT COLUMN */}
            <div className="flex w-full flex-col items-start lg:w-1/2 lg:justify-between">
              <div className="w-full">
                <h2 className="text-[44px] font-bold leading-tight text-white md:text-[56px] lg:text-[64px]" style={{ fontFamily }}>
                  {isRTL ? (
                    <>{t("team.sectionLabel").replace("تعرّف على ", "")}&nbsp;<span className="text-[#C9A96E]">تعرّف على </span></>
                  ) : (
                    <>Meet Our&nbsp;<span className="text-[#C9A96E]">Team</span></>
                  )}
                </h2>

                <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-[#A0AABF] md:text-[16px]" style={{ fontFamily }}>
                  {t("team.description")}
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
                    <ul className="mt-12 flex w-full max-w-[460px] flex-col items-center gap-3.5 text-center text-[15px] text-[#9eb0d0] md:text-[16px]" style={{ fontFamily }}>
                      {(activeMember.bullets || []).map((bullet: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="shrink-0 text-[#C9A96E]">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Button */}
              <div className="mt-14 w-full">
                <a
                  href="https://wa.me/971504772299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-[10px] bg-[#C9A96E] px-8 py-3.5 text-[15px] font-semibold text-[#111111] shadow-[0_10px_20px_rgba(201,169,110,0.2)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                  style={{ fontFamily }}
                >
                  {t("team.bookBtn")}
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex w-full flex-col items-center lg:w-1/2 pt-10 lg:pt-0">
              <div
                className="relative"
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
              >
                <div className="absolute -bottom-6 -left-8 right-8 top-6 rounded-[24px] bg-[#1a1e28] shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />

                <div className="relative h-[440px] w-[320px] max-w-full overflow-hidden rounded-[24px] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:w-full sm:max-w-[320px] md:h-[500px] md:w-[380px] md:max-w-none">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`card-${activeIndex}`}
                      initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col justify-end"
                    >
                      <Image src={activeImage} alt={activeMember.name} fill className="object-cover" />

                      {/* Bottom Frosted Overlay */}
                      <div className="relative z-10 flex h-[110px] w-full flex-col items-center justify-center border-t border-white/20 bg-gradient-to-b from-[#404652]/80 to-[#2c313a]/95 backdrop-blur-md md:h-[120px]">
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-[19px] font-bold tracking-wide text-white md:text-[20px] uppercase" style={{ fontFamily }}>
                            {activeMember.name}
                          </h3>
                          {activeLinkedIn && (
                            <a
                              href={activeLinkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-[#0077B5] transition-colors duration-300"
                              aria-label={`${activeMember.name} ${t("team.linkedinLabel")}`}
                            >
                              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E] md:text-[13px]" style={{ fontFamily }}>
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
                  aria-label={t("team.prevBtn")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isRTL ? "-scale-x-100 transform" : ""}>
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#1e2532] text-[#C9A96E] transition-all duration-300 hover:bg-[#273040] hover:shadow-[0_0_15px_rgba(201,169,110,0.15)]"
                  aria-label={t("team.nextBtn")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isRTL ? "-scale-x-100 transform" : ""}>
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[400px] w-full items-center justify-center text-white/50">
            {/* Fallback if no members found */}
            No team data available
          </div>
        )}
      </div>
    </section>
  );
}
