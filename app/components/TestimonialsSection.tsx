"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fatima Al Suwaidi",
    role: "Finance Manager - Retail Group (UAE)",
    image: "/person.png",
    text: "We were struggling with related party transactions and documentation. XFLEX guided us step by step and prepared everything professionally. Their work gave us confidence during review. Highly recommended for companies dealing with complex structures.",
  },
  {
    name: "Mohammed Al Nuaimi",
    role: "Managing Director - SME (Dubai)",
    image: "/person.png",
    text: "We received a penalty from the FTA and didn't know how to proceed. XFLEX handled the case professionally and managed all communication with the authority. Their structured approach and expertise made a stressful situation much easier to handle.",
  },
  {
    name: "Mohammed Al Nuaimi",
    role: "Managing Director - SME (Dubai)",
    image: "/person.png",
    text: "Working with XFLEX was a turning point for our business. We had concerns about Corporate Tax compliance and potential penalties, and their team handled everything professionally from start to finish. They explained complex tax matters in a clear way and represented us confidently before the FTA. I highly recommend XFLEX to businesses that want peace of mind.",
  },
];

function mod(index: number, total: number) {
  return (index + total) % total;
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[#D6A94E]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[18px] leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => mod(current + 1, testimonials.length));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const ordered = useMemo(
    () => [
      testimonials[mod(activeIndex - 1, testimonials.length)],
      testimonials[activeIndex],
      testimonials[mod(activeIndex + 1, testimonials.length)],
    ],
    [activeIndex]
  );

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-34px] h-[360px] w-[360px] rounded-full border border-[#6D5423]/45" />
        <div className="absolute left-[-54px] top-[12px] h-[220px] w-[220px] rounded-full border border-dashed border-[#8E6D31]/50" />
        <div className="absolute left-[-110px] top-[10px] h-[330px] w-[330px] rounded-full bg-[radial-gradient(circle,rgba(201,166,70,0.20)_0%,rgba(201,166,70,0.09)_40%,transparent_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#C9A646]/55" />
          <p
            className="text-center text-[10px] font-medium uppercase tracking-[0.38em] text-[#C9A646]"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
          >
            TESTIMONIALS....
          </p>
        </div>

        <h2
          className="mt-10 text-center font-semibold text-white"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(2rem, 2.9vw, 3.125rem)",
            lineHeight: "1.08",
            letterSpacing: "-0.04em",
          }}
        >
          What our clients say
        </h2>

        <p
          className="mt-4 text-center text-[#9CA3AF]"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "14px",
            lineHeight: "1.45",
            letterSpacing: "0.04em",
          }}
        >
          Trusted by businesses across the UAE.
        </p>

        <div className="mt-14 flex w-full items-end justify-center overflow-hidden">
          <div className="relative flex h-[315px] w-full max-w-[1140px] items-end justify-center md:h-[342px]">
            {ordered.map((testimonial, index) => {
              const isCenter = index === 1;
              const isLeft = index === 0;

              return (
                <article
                  key={`${testimonial.name}-${index}-${activeIndex}`}
                  className={`absolute rounded-[32px] bg-[linear-gradient(180deg,#1C222B_0%,#20262F_100%)] p-8 text-center shadow-[0_0_42px_rgba(201,166,70,0.06)] ring-1 ring-[#39424D] transition-all duration-500 ease-in-out ${
                    isCenter
                      ? "bottom-8 z-20 w-[92%] max-w-[710px] scale-100 opacity-100"
                      : "bottom-1 z-10 w-[72%] max-w-[340px] scale-90 opacity-40 md:w-[31%]"
                  } ${
                    isCenter
                      ? "translate-x-0"
                      : isLeft
                        ? "-translate-x-[96%] md:-translate-x-[121%]"
                        : "translate-x-[96%] md:translate-x-[121%]"
                  }`}
                >
                  <div
                    className={`absolute left-1/2 overflow-hidden rounded-full ring-2 ring-white/10 shadow-[0_14px_30px_rgba(0,0,0,0.28)] ${
                      isCenter
                        ? "top-[-43px] h-[70px] w-[70px] -translate-x-1/2"
                        : "top-[-28px] h-[56px] w-[56px] -translate-x-1/2"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`flex ${isCenter ? "justify-end pr-7" : "justify-end pr-1"} pt-0`}>
                    <Stars />
                  </div>

                  <p
                    className={`mx-auto text-[#E5E7EB] ${
                      isCenter ? "mt-3 max-w-[520px]" : "mt-2 max-w-[248px]"
                    }`}
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: isCenter ? "11px" : "9px",
                      lineHeight: isCenter ? "1.82" : "1.72",
                    }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className={`${isCenter ? "mt-8" : "mt-4"}`}>
                    <p
                      className="font-semibold text-[#E1B24D]"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: isCenter ? "18px" : "12px",
                        lineHeight: "1.2",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="mt-2 text-[#8F98A6]"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: isCenter ? "13px" : "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current - 1, testimonials.length))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18304A] text-[#D0A64C] transition-all duration-300 hover:bg-[#22405F] hover:shadow-[0_0_18px_rgba(201,166,70,0.18)]"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((current) => mod(current + 1, testimonials.length))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18304A] text-[#D0A64C] transition-all duration-300 hover:bg-[#22405F] hover:shadow-[0_0_18px_rgba(201,166,70,0.18)]"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
