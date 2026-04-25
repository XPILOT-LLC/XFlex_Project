"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(links[0].href);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-34% 0px -54% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-2 md:px-8 md:pt-[18px]">
      <header
        className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[auto_1fr_auto] items-center rounded-full border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-[12px]"
        style={{
          height: "clamp(60px, 5vw, 76px)",
          paddingInline: "clamp(18px, 2.7vw, 34px)",
          background:
            "linear-gradient(90deg, rgba(41,55,84,0.90) 0%, rgba(40,40,49,0.70) 54%, rgba(71,52,37,0.56) 100%)",
        }}
      >
        <a
          href="#home"
          className="relative flex shrink-0 items-center"
          style={{ width: "112px", height: "54px" }}
        >
          <Image
            src="/logo.png"
            alt="XFLEX"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <nav
          className="hidden items-center justify-center lg:flex"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            gap: "clamp(22px, 2vw, 42px)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative px-1 pb-1 font-medium transition duration-300 ${
                activeHref === link.href
                  ? "text-white drop-shadow-[0_0_10px_rgba(214,168,78,0.55)]"
                  : "text-white/80 hover:text-white hover:drop-shadow-[0_0_10px_rgba(214,168,78,0.55)]"
              }`}
              style={{
                fontSize: "11px",
                lineHeight: "14px",
                letterSpacing: "0.14em",
              }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 rounded-full bg-[#D6A84E] shadow-[0_0_12px_rgba(214,168,78,0.9)] transition-all duration-300 ${
                  activeHref === link.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-lg leading-none">{isOpen ? "x" : "="}</span>
        </button>

        <a
          href="#cta"
          className="ml-auto hidden items-center justify-center rounded-[14px] bg-[#C5A059] font-medium text-[#120f0a] transition hover:brightness-110 lg:inline-flex"
          style={{
            width: "clamp(150px, 12.2vw, 184px)",
            height: "clamp(38px, 3vw, 46px)",
            fontSize: "clamp(12px, 0.9vw, 14px)",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Get consultation
        </a>
      </header>

      {isOpen ? (
        <div className="mx-auto mt-3 w-full max-w-[1380px] rounded-[24px] border border-white/15 bg-[linear-gradient(180deg,rgba(19,24,35,0.96)_0%,rgba(14,18,28,0.98)_100%)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group relative rounded-xl px-4 py-3 transition duration-300 ${
                  activeHref === link.href
                    ? "bg-white/6 text-white shadow-[0_0_18px_rgba(214,168,78,0.16)]"
                    : "text-white/85 hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgba(214,168,78,0.14)]"
                }`}
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  letterSpacing: "0.08em",
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-2 left-4 h-px rounded-full bg-[#D6A84E] shadow-[0_0_12px_rgba(214,168,78,0.9)] transition-all duration-300 ${
                    activeHref === link.href ? "w-10 opacity-100" : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-[14px] bg-[#C5A059] font-medium text-[#120f0a] transition hover:brightness-110"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.02em",
            }}
          >
            Get consultation
          </a>
        </div>
      ) : null}
    </div>
  );
}
