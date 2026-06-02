"use client";

import { useCallback, useEffect, useRef, useState, type TransitionEvent } from "react";
import { useI18n } from "@/lib/i18n";
import type { ServiceCard } from "@/lib/api/types";

const clonedCardsPerSide = 4;

function ServiceIcon({ type }: { type: string }) {
  const cls = "h-[18px] w-[18px]";
  if (type === "document") return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7.5 3.5Z" stroke="#E3B03D" strokeWidth="1.7" />
      <path d="M14 3.8V8h4" stroke="#E3B03D" strokeWidth="1.7" />
      <path d="M9 11.5h6M9 15h6" stroke="#E3B03D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  if (type === "clipboard") return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <rect x="6.5" y="5" width="11" height="15" rx="2" stroke="#E3B03D" strokeWidth="1.7" />
      <path d="M9 5.5h6M9.5 10.5h5M9.5 14h5" stroke="#E3B03D" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="9" y="3.5" width="6" height="3" rx="1.2" stroke="#E3B03D" strokeWidth="1.5" />
    </svg>
  );
  if (type === "bars") return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="M5 18.5V12M10 18.5V8.5M15 18.5V10M20 18.5V6.5" stroke="#E3B03D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  if (type === "wallet") return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="M4.5 8.5A2.5 2.5 0 0 1 7 6h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 18H7a2.5 2.5 0 0 1-2.5-2.5v-7Z" stroke="#E3B03D" strokeWidth="1.7" />
      <path d="M15.5 12h4" stroke="#E3B03D" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="15.5" cy="12" r="1" fill="#E3B03D" />
    </svg>
  );
  if (type === "layers") return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" stroke="#E3B03D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="M12 3.5c2.1 1.5 4.5 2.3 7 2.5v4.9c0 4.2-2.7 8-7 9.6-4.3-1.6-7-5.4-7-9.6V6c2.5-.2 4.9-1 7-2.5Z" stroke="#E3B03D" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

const iconTypes = ["document", "clipboard", "bars", "wallet", "layers", "shield"];

type ServicesSectionProps = {
  cards: ServiceCard[];
};

export default function ServicesSection({ cards }: ServicesSectionProps) {
  const { t, isRTL } = useI18n();
  const fontFamily = isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif";
  const rawCards = cards;

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(clonedCardsPerSide);
  const [cardStep, setCardStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [peekOffset, setPeekOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const skipAnimationRef = useRef(false);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    setActiveCard(null);
    setCurrentIndex(clonedCardsPerSide);
  }, [cards]);

  const loopedCards = rawCards.length
    ? [
        ...rawCards.slice(-clonedCardsPerSide),
        ...rawCards,
        ...rawCards.slice(0, clonedCardsPerSide),
      ]
    : [];

  const measureTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return { step: 0, offset: 0 };
    const firstCard = track.children[0] as HTMLElement | undefined;
    if (!firstCard) return { step: 0, offset: 0 };
    const styles = window.getComputedStyle(track);
    const gapValue = styles.columnGap || styles.gap || "16";
    const gap = Number.parseFloat(gapValue) || 16;
    const cardWidth = firstCard.offsetWidth;
    const paddingStart = Number.parseFloat(isRTL ? styles.paddingRight : styles.paddingLeft) || 16;
    const offset = (document.documentElement.clientWidth - cardWidth) / 2 - paddingStart;
    return { step: cardWidth + gap, offset };
  }, [isRTL]);

  useEffect(() => {
    const syncStep = () => {
      const nextTrack = measureTrack();
      if (nextTrack.step) { setCardStep(nextTrack.step); setPeekOffset(nextTrack.offset); }
    };
    syncStep();
    window.addEventListener("resize", syncStep);
    return () => window.removeEventListener("resize", syncStep);
  }, [measureTrack]);

  useEffect(() => {
    if (!cardStep) return;
    if (skipAnimationRef.current) { skipAnimationRef.current = false; return; }
    if (currentIndex === clonedCardsPerSide && !isAnimating) return;
    setIsTransitionEnabled(true);
    setIsAnimating(true);
  }, [currentIndex, cardStep, isAnimating]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (currentIndex >= clonedCardsPerSide && currentIndex < clonedCardsPerSide + rawCards.length) {
      setIsAnimating(false); isAnimatingRef.current = false; return;
    }
    setIsTransitionEnabled(false);
    skipAnimationRef.current = true;
    setCurrentIndex(currentIndex < clonedCardsPerSide ? rawCards.length + currentIndex : currentIndex - rawCards.length);
    setIsAnimating(false); isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsTransitionEnabled(true));
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [isTransitionEnabled]);

  const scrollByCard = (direction: number) => {
    if (isAnimatingRef.current || isAnimating || !cardStep) return;
    const firstVisibleIndex = 1;
    const lastVisibleIndex = loopedCards.length - 4;
    const nextIndex = Math.min(Math.max(currentIndex + direction, firstVisibleIndex), lastVisibleIndex);
    if (nextIndex === currentIndex) return;
    isAnimatingRef.current = true; setIsAnimating(true); setCurrentIndex(nextIndex);
  };

  if (!rawCards.length) return null;

  return (
    <section id="services" className="relative overflow-hidden bg-[#020507] px-0 py-20 lg:py-[78px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(197,160,89,0.09),transparent_18%),radial-gradient(circle_at_50%_62%,rgba(197,160,89,0.05),transparent_28%)]" />
      <div className="absolute left-1/2 top-[88px] hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#4f3a18]/20 lg:block" />
      <div className="absolute left-1/2 top-[36px] hidden h-[540px] w-[540px] -translate-x-1/2 [clip-path:polygon(50%_0%,86%_18%,86%_82%,50%_100%,14%_82%,14%_18%)] border border-[#4f3a18]/25 lg:block" />
      <div className="absolute left-1/2 top-[94px] hidden h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-dashed border-[#4f3a18]/15 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 lg:px-0">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-7 bg-[#9c7738]" />
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#a88342]" style={{ fontFamily }}>
              {t("services.sectionLabel")}
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex justify-center lg:mt-[30px] lg:justify-start lg:px-[52px]">
          <div className="max-w-[430px] text-center lg:text-start">
            <h2 className="text-white" style={{ fontFamily, fontSize: "clamp(31px,3.35vw,50px)", lineHeight: "1.01", fontWeight: 500, letterSpacing: "-0.045em" }}>
              {t("services.heading")}
            </h2>
            <p className="mx-auto mt-5 max-w-[334px] text-white/58 lg:mx-0" style={{ fontFamily, fontSize: "12.5px", lineHeight: "1.48" }}>
              {t("services.description")}
            </p>
          </div>
        </div>
      </div>

      <div 
        className="relative z-10 mt-12 w-full overflow-hidden px-0 lg:mt-[48px]"
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const touchEndX = e.changedTouches[0].clientX;
            const delta = touchStartX - touchEndX;
            if (Math.abs(delta) < 40) { setTouchStartX(null); return; }
            if (isRTL) {
              if (delta > 0) scrollByCard(-1);
              else scrollByCard(1);
            } else {
              if (delta > 0) scrollByCard(1);
              else scrollByCard(-1);
            }
            setTouchStartX(null);
          }}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`services-track flex w-max gap-4 px-4 py-8 sm:px-8 lg:gap-[18px] lg:px-0 ${isTransitionEnabled ? "transition-transform duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
            style={{ transform: cardStep ? (isRTL ? `translate3d(${currentIndex * cardStep - peekOffset}px, 0, 0)` : `translate3d(${peekOffset - currentIndex * cardStep}px, 0, 0)`) : "translate3d(0, 0, 0)", willChange: "transform" }}
          >
            {loopedCards.map((card, index) => {
              const originalIndex = ((index - clonedCardsPerSide) % rawCards.length + rawCards.length) % rawCards.length;
              const isFlipped = activeCard === originalIndex;
              return (
                <button
                  key={`${card.title}-${index}`}
                  type="button"
                  onClick={() => setActiveCard(isFlipped ? null : originalIndex)}
                  className="group/service relative h-[450px] w-[62vw] shrink-0 rounded-[12px] text-start [perspective:1200px] sm:h-[430px] sm:w-[44vw] lg:h-[430px] lg:w-[calc(25vw-18px)]"
                >
                  <div className={`relative h-full w-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""} group-hover/service:[transform:rotateY(180deg)]`}>
                    {/* Front */}
                    <div className="absolute inset-0 overflow-hidden rounded-[12px] border border-[#43505f] bg-[linear-gradient(180deg,#212831_0%,#1f252d_100%)] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_36px_rgba(0,0,0,0.18)] transition duration-300 group-hover/service:border-[#e2b13f]/45 group-hover/service:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_18px_rgba(219,168,51,0.14),0_22px_50px_rgba(0,0,0,0.34)] [backface-visibility:hidden] lg:px-[42px] lg:py-[36px]">
                      <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_50%_0%,rgba(226,177,63,0.10),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover/service:opacity-100" />
                      <div className="relative ms-auto flex h-[44px] w-[44px] items-center justify-center rounded-[11px] border border-[#7c5a23] bg-[linear-gradient(180deg,rgba(118,87,37,0.45)_0%,rgba(74,56,23,0.56)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-shadow duration-300 group-hover/service:shadow-[0_0_18px_rgba(219,168,51,0.20),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <ServiceIcon type={iconTypes[originalIndex] ?? "shield"} />
                      </div>
                      <h3 className="relative mt-[110px] lg:mt-[96px] text-white" style={{ fontFamily, fontSize: "16px", lineHeight: "1.34", fontWeight: 500, letterSpacing: "-0.02em" }}>
                        {card.title}
                      </h3>
                      <p className="relative mt-11 max-w-[214px] text-white/50" style={{ fontFamily, fontSize: "11.5px", lineHeight: "1.62" }}>
                        {card.front}
                      </p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden rounded-[12px] border border-[#43505f] bg-[linear-gradient(180deg,#212831_0%,#1f252d_100%)] px-6 py-6 lg:px-9 lg:py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_36px_rgba(0,0,0,0.18)] transition duration-300 group-hover/service:border-[#e2b13f]/45 group-hover/service:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_18px_rgba(219,168,51,0.14),0_22px_50px_rgba(0,0,0,0.34)] [backface-visibility:hidden] [transform:rotateY(180deg)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_50%_0%,rgba(226,177,63,0.10),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover/service:opacity-100" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#43505f] bg-[#202730]">
                        <ServiceIcon type={iconTypes[originalIndex] ?? "shield"} />
                      </div>
                      <h3 className="relative mt-5 lg:mt-7 text-[#f3dfaf]" style={{ fontFamily, fontSize: "16px", lineHeight: "1.3", fontWeight: 600 }}>
                        {card.title}
                      </h3>
                      <ul className="relative mt-4 lg:mt-5 space-y-1.5 lg:space-y-2 text-[#d5c39d]" style={{ fontFamily, fontSize: "12px", lineHeight: "1.55" }}>
                        {card.back.map((detail, di) => (
                          <li key={di} className="list-inside list-disc">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 lg:px-0">
        <div className="mt-6 flex justify-center gap-4 lg:mt-[28px]">
          <button type="button" onClick={() => scrollByCard(-1)} className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#18304a] text-[#d4a64d] transition hover:brightness-110" aria-label={t("services.scrollLeft")}>{"<"}</button>
          <button type="button" onClick={() => scrollByCard(1)} className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#18304a] text-[#d4a64d] transition hover:brightness-110" aria-label={t("services.scrollRight")}>{">"}</button>
        </div>
      </div>
    </section>
  );
}
