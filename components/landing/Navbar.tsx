"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

const navKeys = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "contact", href: "#cta" },
] as const;

export default function Navbar() {
  const { t, locale, setLocale, isRTL } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navKeys[0].href);

  useEffect(() => {
    const sections = navKeys
      .map((link) => ({
        href: link.href,
        section: document.querySelector(link.href),
      }))
      .filter((item): item is typeof item & { section: Element } => item.section !== null);

    if (!sections.length) return;

    let frameId = 0;

    const syncActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const isAtPageBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

        if (isAtPageBottom) {
          setActiveHref(navKeys[navKeys.length - 1].href);
          return;
        }

        const activeLine = window.scrollY + window.innerHeight * 0.34;
        let currentHref: string = navKeys[0].href;

        for (const { href, section } of sections) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (activeLine >= top) {
            currentHref = href;
          }
        }

        setActiveHref(currentHref);
      });
    };

    syncActiveSection();
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
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
          onClick={() => setActiveHref("#home")}
          className="relative flex shrink-0 items-center"
          style={{ width: "112px", height: "54px" }}
        >
          <Image
            src="/logo.png"
            alt="XFLEX"
            fill
            priority
            className={`object-contain ${isRTL ? "object-right" : "object-left"}`}
          />
        </a>

        <nav
          className="hidden items-center justify-center lg:flex"
          style={{
            fontFamily: isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif",
            gap: "clamp(22px, 2vw, 42px)",
          }}
        >
          {navKeys.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setActiveHref(link.href)}
              className={`group relative px-1 pb-1 font-medium transition duration-300 ${
                activeHref === link.href
                  ? "text-white drop-shadow-[0_0_10px_rgba(214,168,78,0.55)]"
                  : "text-white/80 hover:text-white hover:drop-shadow-[0_0_10px_rgba(214,168,78,0.55)]"
              }`}
              style={{ fontSize: "11px", lineHeight: "14px", letterSpacing: "0.14em" }}
            >
              {t(`nav.${link.key}`)}
              <span
                className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 rounded-full bg-[#D6A84E] shadow-[0_0_12px_rgba(214,168,78,0.9)] transition-all duration-300 ${
                  activeHref === link.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="col-start-3 justify-self-end hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="flex h-8 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[11px] font-semibold text-white/80 backdrop-blur-sm transition hover:border-[#C5A059]/60 hover:text-[#C5A059]"
            aria-label="Switch language"
          >
            {t("nav.langSwitch")}
          </button>

          <a
            href="https://wa.me/971504772299"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveHref("#cta")}
            className="hidden items-center justify-center rounded-[14px] bg-[#C5A059] font-medium text-[#120f0a] transition hover:brightness-110 lg:inline-flex"
            style={{
              width: "clamp(150px, 12.2vw, 184px)",
              height: "clamp(38px, 3vw, 46px)",
              fontSize: "clamp(12px, 0.9vw, 14px)",
              letterSpacing: "0.02em",
              fontFamily: isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            {t("nav.cta")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="col-start-3 justify-self-end flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-lg leading-none">{isOpen ? "x" : "="}</span>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-full max-w-[1380px] rounded-[24px] border border-white/15 bg-[linear-gradient(180deg,rgba(19,24,35,0.96)_0%,rgba(14,18,28,0.98)_100%)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:hidden"
          >
          <nav className="flex flex-col gap-3">
            {navKeys.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setIsOpen(false);
                }}
                className={`group relative rounded-xl px-4 py-3 transition duration-300 ${
                  activeHref === link.href
                    ? "bg-white/6 text-white shadow-[0_0_18px_rgba(214,168,78,0.16)]"
                    : "text-white/85 hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_rgba(214,168,78,0.14)]"
                }`}
                style={{
                  fontFamily: isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  letterSpacing: "0.08em",
                }}
              >
                {t(`nav.${link.key}`)}
                <span
                  className={`absolute bottom-2 start-4 h-px rounded-full bg-[#D6A84E] shadow-[0_0_12px_rgba(214,168,78,0.9)] transition-all duration-300 ${
                    activeHref === link.href ? "w-10 opacity-100" : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="flex h-11 w-16 items-center justify-center rounded-[14px] border border-white/20 bg-white/5 text-[12px] font-semibold text-white/80 transition hover:border-[#C5A059]/60 hover:text-[#C5A059]"
            >
              {t("nav.langSwitch")}
            </button>
            <a
              href="https://wa.me/971504772299"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setActiveHref("#cta");
                setIsOpen(false);
              }}
              className="inline-flex h-11 flex-1 items-center justify-center rounded-[14px] bg-[#C5A059] font-medium text-[#120f0a] transition hover:brightness-110"
              style={{
                fontFamily: isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.02em",
              }}
            >
              {t("nav.cta")}
            </a>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
