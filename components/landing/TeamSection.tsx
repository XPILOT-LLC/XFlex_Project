"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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
    image: "/person.png",
  },
  {
    name: "Sarah Al Mansoori",
    role: "TAX DIRECTOR",
    description:
      "Helping UAE businesses stay compliant with practical tax structuring, reporting, and advisory support.",
    bullets: [
      "Corporate Tax Advisory Lead",
      "FTA Compliance Specialist",
      "Cross-Border Tax Planning",
      "Audit-Ready Documentation",
    ],
    image: "/person.png",
  },
  {
    name: "Omar Al Kaabi",
    role: "SENIOR CONSULTANT",
    description:
      "Focused on clear tax execution, risk reduction, and operational support for growing companies in the UAE.",
    bullets: [
      "VAT & ESR Compliance",
      "Tax Health Check Reviews",
      "SME Structuring Support",
      "Ongoing Filing Oversight",
    ],
    image: "/person.png",
  },
];

function mod(index: number, total: number) {
  return (index + total) % total;
}

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => mod(current + 1, teamMembers.length));
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleCards = useMemo(
    () => [
      teamMembers[mod(activeIndex - 1, teamMembers.length)],
      teamMembers[activeIndex],
      teamMembers[mod(activeIndex + 1, teamMembers.length)],
    ],
    [activeIndex]
  );

  const activeMember = teamMembers[activeIndex];

  const handleSwipeEnd = (touchEndX: number) => {
    if (touchStartX === null) {
      return;
    }

    const delta = touchStartX - touchEndX;

    if (Math.abs(delta) < 40) {
      setTouchStartX(null);
      return;
    }

    setActiveIndex((current) =>
      mod(current + (delta > 0 ? 1 : -1), teamMembers.length)
    );
    setTouchStartX(null);
  };

  return (
    <section className="relative overflow-hidden bg-[#05080F] px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(201,166,70,0.12)_0%,transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute left-[8%] top-0 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(201,166,70,0.12)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute left-[36%] top-[-12%] h-[160%] w-[34%] -rotate-[18deg] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.05)_18%,transparent_35%,transparent_100%)] opacity-40" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1180px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,430px)] lg:items-center lg:gap-10">
        <div className="max-w-[560px]">
          <h2
            className="text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.04] tracking-[-0.05em] text-white"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
          >
            Meet Our <span className="text-[#D5A746]">Team</span>
          </h2>

          <p
            className="mt-5 max-w-[420px] text-[14px] leading-[1.8] text-[#B9C2CF] sm:text-[15px]"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
          >
            {activeMember.description}
          </p>

          <ul className="mt-8 space-y-4 text-[#CFD7E2]">
            {activeMember.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-[13px] leading-[1.7] sm:text-[14px]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              >
                <span className="mt-[10px] block h-[4px] w-[4px] rounded-full bg-[#D5A746]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact-form"
            className="mt-10 inline-flex min-h-[54px] items-center justify-center rounded-[10px] bg-[#D5AF5A] px-8 text-[13px] font-medium text-[#11151F] shadow-[0_10px_32px_rgba(213,175,90,0.18)] transition duration-300 hover:brightness-105"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
          >
            Book free consultation
          </a>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div
            className="relative flex h-[372px] w-full max-w-[430px] items-center justify-center overflow-hidden sm:h-[408px]"
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => handleSwipeEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            {visibleCards.map((member, index) => {
              const isCenter = index === 1;
              const isLeft = index === 0;

              return (
                <button
                  key={`${member.name}-${index}-${activeIndex}`}
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      isCenter
                        ? activeIndex
                        : mod(activeIndex + (isLeft ? -1 : 1), teamMembers.length)
                    )
                  }
                  className={`absolute flex w-[178px] flex-col rounded-[6px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-[10px] text-left shadow-[0_20px_50px_rgba(0,0,0,0.26)] backdrop-blur-[2px] transition-all duration-500 ease-in-out sm:w-[188px] ${
                    isCenter
                      ? "z-20 scale-100 opacity-100"
                      : "z-10 scale-90 opacity-55 hover:opacity-80"
                  } ${
                    isCenter
                      ? "translate-x-0"
                      : isLeft
                        ? "-translate-x-[88px] sm:-translate-x-[118px]"
                        : "translate-x-[88px] sm:translate-x-[118px]"
                  }`}
                  aria-label={`Show ${member.name}`}
                >
                  <div className="relative aspect-[0.88] w-full overflow-hidden rounded-[4px] bg-[#222833]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.04)_0%,rgba(7,10,16,0.22)_72%,rgba(7,10,16,0.55)_100%)]" />
                  </div>

                  <div className="rounded-b-[4px] bg-[linear-gradient(180deg,#343A45_0%,#2A313C_100%)] px-3 py-3 text-center">
                    <p
                      className="text-[11px] font-medium uppercase tracking-[0.02em] text-white"
                      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                    >
                      {member.name}
                    </p>
                    <p
                      className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D5A746]"
                      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => mod(current - 1, teamMembers.length))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16304A] text-[#D5A746] transition-all duration-300 hover:bg-[#224463] hover:shadow-[0_0_18px_rgba(201,166,70,0.18)]"
              aria-label="Previous team member"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => mod(current + 1, teamMembers.length))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16304A] text-[#D5A746] transition-all duration-300 hover:bg-[#224463] hover:shadow-[0_0_18px_rgba(201,166,70,0.18)]"
              aria-label="Next team member"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
