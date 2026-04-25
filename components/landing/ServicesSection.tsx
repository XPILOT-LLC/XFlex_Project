"use client";

import { useEffect, useRef, useState, type TransitionEvent } from "react";

const serviceCards = [
  {
    title: "Taxation Services",
    front: "Expert guidance on complex tax regulations and strategic planning",
    back: [
      "VAT registration and deregistration",
      "VAT return preparation and filing",
      "Corporate tax advisory and compliance",
      "Tax residency certificate assistance",
      "Tax planning and structuring",
      "Representation before UAE Federal Tax Authority (FTA)",
    ],
    icon: "document",
  },
  {
    title: "Auditing Services",
    front: "Comprehensive financial audits and assurance services",
    back: [
      "External and statutory audits",
      "Internal audits and risk assessments",
      "Compliance audits",
      "Forensic audits and fraud investigation",
      "Financial statement review and certification",
      "Audit readiness and pre-audit support",
    ],
    icon: "clipboard",
  },
  {
    title: "ESR & UBO Compliance",
    front: "Simplify your business operations with complete corporate support solutions.",
    back: [
      "ESR assessment and notifications",
      "ESR reporting and filing",
      "Ultimate Beneficial Ownership (UBO) compliance setup",
      "Ongoing regulatory advisory",
    ],
    icon: "bars",
  },
  {
    title: "Administrative and Business Consultancy",
    front: "streamline operation and grow faster with strategic business advice.",
    back: [
      "Business setup and licensing in UAE (Mainland, Free Zone, Offshore)",
      "PRO services and document clearance",
      "Trade license renewal and compliance follow-up",
      "Corporate governance advisory",
      "Company liquidation and closure assistance",
      "Restructuring and operational efficiency consulting",
    ],
    icon: "wallet",
  },
  {
    title: "Corporate Support Services",
    front: "Simplify your business operations with complete corporate support solutions.",
    back: [
      "Drafting of contracts and MOAs",
      "Preparation of board resolutions and legal documents",
      "Translation and attestation services",
      "Document control and compliance systems",
      "Administrative outsourcing support",
    ],
    icon: "layers",
  },
  {
    title: " Accounting & Bookkeeping",
    front: "stay in control with precise bookkeeping and real-time financial insights.",
    back: [
      "Monthly, quarterly, and annual bookkeeping",
      "Preparation of financial statements (IFRS-compliant)",
      "Chart of accounts setup and customization",
      "Payroll processing and WPS compliance",
      "Accounts payable/receivable management",
      "Bank reconciliation and cash flow analysis",
    ],
    icon: "shield",
  },
];

const clonedCardsPerSide = 3;

const loopedCards = [
  ...serviceCards.slice(-clonedCardsPerSide),
  ...serviceCards,
  ...serviceCards.slice(0, clonedCardsPerSide),
];

function ServiceIcon({ type }: { type: string }) {
  const cls = "h-[18px] w-[18px]";

  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none">
        <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7.5 3.5Z" stroke="#E3B03D" strokeWidth="1.7" />
        <path d="M14 3.8V8h4" stroke="#E3B03D" strokeWidth="1.7" />
        <path d="M9 11.5h6M9 15h6" stroke="#E3B03D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "clipboard") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none">
        <rect x="6.5" y="5" width="11" height="15" rx="2" stroke="#E3B03D" strokeWidth="1.7" />
        <path d="M9 5.5h6M9.5 10.5h5M9.5 14h5" stroke="#E3B03D" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="3.5" width="6" height="3" rx="1.2" stroke="#E3B03D" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "bars") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none">
        <path d="M5 18.5V12M10 18.5V8.5M15 18.5V10M20 18.5V6.5" stroke="#E3B03D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none">
        <path d="M4.5 8.5A2.5 2.5 0 0 1 7 6h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 18H7a2.5 2.5 0 0 1-2.5-2.5v-7Z" stroke="#E3B03D" strokeWidth="1.7" />
        <path d="M15.5 12h4" stroke="#E3B03D" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15.5" cy="12" r="1" fill="#E3B03D" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none">
        <path d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" stroke="#E3B03D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none">
      <path d="M12 3.5c2.1 1.5 4.5 2.3 7 2.5v4.9c0 4.2-2.7 8-7 9.6-4.3-1.6-7-5.4-7-9.6V6c2.5-.2 4.9-1 7-2.5Z" stroke="#E3B03D" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(clonedCardsPerSide);
  const [cardStep, setCardStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const skipAnimationRef = useRef(false);

  const measureStep = () => {
    const track = trackRef.current;

    if (!track) {
      return 0;
    }

    const firstCard = track.children[0] as HTMLElement | undefined;

    if (!firstCard) {
      return 0;
    }

    const styles = window.getComputedStyle(track);
    const gapValue = styles.columnGap || styles.gap || "16";
    const gap = Number.parseFloat(gapValue) || 16;

    return firstCard.offsetWidth + gap;
  };

  useEffect(() => {
    const syncStep = () => {
      const nextStep = measureStep();
      if (nextStep) {
        setCardStep(nextStep);
      }
    };

    syncStep();
    window.addEventListener("resize", syncStep);

    return () => {
      window.removeEventListener("resize", syncStep);
    };
  }, []);

  useEffect(() => {
    if (!cardStep) {
      return;
    }

    if (skipAnimationRef.current) {
      skipAnimationRef.current = false;
      return;
    }

    if (currentIndex === clonedCardsPerSide && !isAnimating) {
      return;
    }

    setIsTransitionEnabled(true);
    setIsAnimating(true);
  }, [currentIndex, cardStep]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (
      currentIndex >= clonedCardsPerSide &&
      currentIndex < clonedCardsPerSide + serviceCards.length
    ) {
      setIsAnimating(false);
      return;
    }

    setIsTransitionEnabled(false);
    skipAnimationRef.current = true;
    setCurrentIndex(
      currentIndex < clonedCardsPerSide
        ? serviceCards.length + currentIndex
        : currentIndex - serviceCards.length
    );
    setIsAnimating(false);
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }
  }, [isTransitionEnabled]);

  const scrollByCard = (direction: number) => {
    if (isAnimating || !cardStep) {
      return;
    }

    setCurrentIndex((prev) => {
      const nextIndex = prev + direction;

      if (nextIndex < 0) {
        return 0;
      }

      if (nextIndex > loopedCards.length - 1) {
        return loopedCards.length - 1;
      }

      return nextIndex;
    });
  };

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
            <p
              className="text-[10px] uppercase tracking-[0.34em] text-[#a88342]"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Our Services......
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex justify-center lg:mt-[30px] lg:justify-start lg:px-[52px]">
          <div className="max-w-[430px] text-center lg:text-left">
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(31px,3.35vw,50px)",
                lineHeight: "1.01",
                fontWeight: 500,
                letterSpacing: "-0.045em",
              }}
            >
              Comprehensive solutions for
              <br />
              your business
            </h2>
            <p
              className="mx-auto mt-5 max-w-[334px] text-white/58 lg:mx-0"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "12.5px",
                lineHeight: "1.48",
              }}
            >
              From compliance to growth, we cover every step of your financial journey.
            </p>
          </div>
        </div>

        <div className="relative left-1/2 z-10 mt-12 w-screen -translate-x-1/2 overflow-hidden px-0 lg:mt-[48px] lg:w-[calc(100vw-24px)] lg:max-w-none">
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`services-track flex gap-4 px-4 pb-4 sm:px-8 lg:gap-[18px] lg:px-0 ${isTransitionEnabled ? "transition-transform duration-[680ms] ease-[cubic-bezier(0.22,1,0.36,1)]" : ""
              }`}
            style={{
              transform: cardStep ? `translate3d(-${currentIndex * cardStep}px, 0, 0)` : "translate3d(0, 0, 0)",
              willChange: "transform",
            }}
          >
            {loopedCards.map((card, index) => {
              const originalIndex =
                ((index - clonedCardsPerSide) % serviceCards.length + serviceCards.length) %
                serviceCards.length;
              const isFlipped = activeCard === originalIndex;

              return (
                <button
                  key={`${card.title}-${index}`}
                  type="button"
                  onClick={() => setActiveCard(isFlipped ? null : originalIndex)}
                  className="group/service relative h-[292px] w-[86vw] shrink-0 rounded-[12px] text-left [perspective:1200px] sm:w-[44vw] lg:h-[430px] lg:w-[calc((100%-36px)/3)] lg:max-w-[calc((100%-36px)/3)]"
                >
                  <div
                    className={`relative h-full w-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                      } group-hover/service:[transform:rotateY(180deg)]`}
                  >
                    <div className="absolute inset-0 rounded-[12px] border border-[#43505f] bg-[linear-gradient(180deg,#212831_0%,#1f252d_100%)] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_36px_rgba(0,0,0,0.18)] [backface-visibility:hidden] lg:px-[42px] lg:py-[36px]">
                      <div className="ml-auto flex h-[44px] w-[44px] items-center justify-center rounded-[11px] border border-[#7c5a23] bg-[linear-gradient(180deg,rgba(118,87,37,0.45)_0%,rgba(74,56,23,0.56)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <ServiceIcon type={card.icon} />
                      </div>

                      <h3
                        className="mt-[96px] text-white"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.34",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        className="mt-11 max-w-[214px] text-white/50"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "11.5px",
                          lineHeight: "1.62",
                        }}
                      >
                        {card.front}
                      </p>
                    </div>

                    <div className="absolute inset-0 rounded-[12px] border border-[#7a5d2b] bg-[linear-gradient(180deg,#2a2114_0%,#1b1712_100%)] px-9 py-8 shadow-[0_22px_48px_rgba(0,0,0,0.22)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(227,176,61,0.28)_0%,rgba(87,63,20,0.65)_100%)]">
                        <ServiceIcon type={card.icon} />
                      </div>

                      <h3
                        className="mt-7 text-[#f3dfaf]"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.3",
                          fontWeight: 600,
                        }}
                      >
                        {card.title}
                      </h3>

                      <ul
                        className="mt-5 space-y-2 text-[#d5c39d]"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "12px",
                          lineHeight: "1.55",
                        }}
                      >
                        {card.back.map((detail) => (
                          <li key={detail} className="list-inside list-disc">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4 lg:mt-[28px]">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#18304a] text-[#d4a64d] transition hover:brightness-110"
            aria-label="Scroll services left"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#18304a] text-[#d4a64d] transition hover:brightness-110"
            aria-label="Scroll services right"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
