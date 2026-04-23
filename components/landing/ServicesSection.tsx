"use client";

import { useRef, useState } from "react";

const serviceCards = [
  {
    title: "Taxation Services",
    front: "Expert guidance on complex tax regulations and strategic planning",
    back: "Corporate tax structuring, filings, advisory reviews, and planning support tailored to UAE business requirements.",
    icon: "document",
  },
  {
    title: "Auditing Services",
    front: "Comprehensive financial audits and assurance services",
    back: "Independent audit execution, reporting support, and process reviews that build confidence in your financial controls.",
    icon: "clipboard",
  },
  {
    title: "ESR & UBO Compliance",
    front: "Simplify your business operations with complete corporate support solutions.",
    back: "End-to-end ESR and UBO compliance preparation, filing guidance, and documentation checks for regulatory peace of mind.",
    icon: "bars",
  },
  {
    title: "VAT Advisory",
    front: "Stay compliant with VAT planning, filing workflows, and reporting clarity.",
    back: "Registration support, return reviews, transaction treatment advice, and VAT risk monitoring for growing businesses.",
    icon: "wallet",
  },
  {
    title: "Corporate Structuring",
    front: "Build the right tax and legal structure for sustainable growth.",
    back: "Business model reviews, restructuring guidance, and expansion planning aligned with tax efficiency and compliance.",
    icon: "layers",
  },
  {
    title: "Risk Monitoring",
    front: "Identify issues early with proactive compliance and reporting oversight.",
    back: "Ongoing deadline tracking, penalty-risk checks, documentation reviews, and strategic issue escalation support.",
    icon: "shield",
  },
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
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#05080d] px-0 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(197,160,89,0.12),transparent_22%),radial-gradient(circle_at_20%_72%,rgba(197,160,89,0.08),transparent_18%)]" />
      <div className="absolute left-1/2 top-[110px] hidden h-[390px] w-[390px] -translate-x-1/2 rounded-full border border-[#4b3918]/40 lg:block" />
      <div className="absolute left-1/2 top-[72px] hidden h-[520px] w-[520px] -translate-x-1/2 [clip-path:polygon(50%_0%,89%_22%,89%_78%,50%_100%,11%_78%,11%_22%)] border border-[#4b3918]/30 lg:block" />

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-9 bg-[#9c7738]" />
            <p
              className="text-[10px] uppercase tracking-[0.32em] text-[#a88342]"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Our Services......
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex justify-center">
          <div className="max-w-[420px] text-center">
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(32px,3.2vw,47px)",
                lineHeight: "1.04",
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              Comprehensive solutions for
              <br />
              your business
            </h2>
            <p
              className="mx-auto mt-5 max-w-[320px] text-white/58"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "13px",
                lineHeight: "1.45",
              }}
            >
              From compliance to growth, we cover every step of your financial journey.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 overflow-hidden px-0">
          <div
            ref={trackRef}
            className="services-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-[6vw] pr-[6vw] lg:pl-[3vw] lg:pr-[3vw]"
          >
          {serviceCards.map((card, index) => {
            const isFlipped = activeCard === index;

            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveCard(isFlipped ? null : index)}
                className="group/service relative h-[292px] w-[86vw] shrink-0 snap-center rounded-[12px] text-left [perspective:1200px] sm:w-[44vw] lg:h-[356px] lg:w-[calc((100%-2rem-6vw)/3)] lg:max-w-[calc((100%-2rem-6vw)/3)]"
              >
                <div
                  className={`relative h-full w-full rounded-[12px] transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  } group-hover/service:[transform:rotateY(180deg)]`}
                >
                  <div className="absolute inset-0 rounded-[12px] border border-[#49505c] bg-[linear-gradient(180deg,#1e242d_0%,#1b2129_100%)] px-12 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.18)] [backface-visibility:hidden]">
                    <div className="ml-auto flex h-11 w-11 items-center justify-center rounded-[11px] bg-[linear-gradient(180deg,#6d5221_0%,#4a3917_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <ServiceIcon type={card.icon} />
                    </div>

                    <h3
                      className="mt-14 text-white"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.35",
                        fontWeight: 500,
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      className="mt-8 max-w-[190px] text-white/55"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: "11px",
                        lineHeight: "1.72",
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

                    <p
                      className="mt-5 text-[#d5c39d]"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: "12px",
                        lineHeight: "1.8",
                      }}
                    >
                      {card.back}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollByAmount(-280)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e3048] text-[#d4a64d] transition hover:brightness-110"
            aria-label="Scroll services left"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(280)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e3048] text-[#d4a64d] transition hover:brightness-110"
            aria-label="Scroll services right"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
