"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const { t, tRaw, isRTL } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = (tRaw("faq.items") || []) as FAQItem[];
  const fontFamily = isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif";
  const titleFont = isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-inter), Inter, sans-serif";

  return (
    <div className="min-h-screen flex flex-col bg-[#010411] selection:bg-[#C79E43]/30 selection:text-[#C79E43]">
      <Navbar />
      <main className="flex-grow relative overflow-hidden flex flex-col items-center pt-32 pb-20 px-6 md:px-12">
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-[650px] h-[650px] md:w-[900px] md:h-[900px] opacity-[0.35] transition-opacity duration-1000">
            <Image src="/shio.png" alt="Background Shield" fill className="object-contain" priority />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C79E43]/25 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
        </div>

        <div className="relative z-10 w-full max-w-[1100px]">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#C79E43]" />
              <span className="text-[#C79E43] uppercase tracking-[0.3em] font-medium" style={{ fontFamily, fontSize: "12px" }}>
                {t("faq.sectionLabel")}
              </span>
              <div className="w-1 h-1 rounded-full bg-[#C79E43]" />
              <div className="w-1 h-1 rounded-full bg-[#C79E43]" />
              <div className="w-1 h-1 rounded-full bg-[#C79E43]" />
            </div>
            <h1 className="text-white font-semibold tracking-tight" style={{ fontFamily: titleFont, fontSize: "clamp(32px, 5vw, 44px)" }}>
              {t("faq.heading")}
            </h1>
          </div>

          <div className="w-full">
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <div key={index} className="group cursor-pointer border-b border-white/5 py-4 last:border-0" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                  <div className="grid grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="flex items-center gap-4 transition-all duration-300">
                      <span
                        className={`transition-all duration-500 transform ${
                          activeIndex === index ? `text-[#C79E43] ${isRTL ? "-translate-x-2" : "translate-x-2"}` : "text-white/80 group-hover:text-white"
                        }`}
                        style={{ fontFamily, fontSize: "16px", fontWeight: 500 }}
                      >
                        {isRTL ? "" : "• "}{index + 1}. {item.question}
                      </span>
                    </div>

                    <div className="flex-shrink-0">
                      <div
                        className={`relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-500 ${
                          activeIndex === index ? "border-[#C79E43] bg-[#C79E43]/10 shadow-[0_0_20px_rgba(199,158,67,0.3)]" : "border-white/10 group-hover:border-white/30 bg-white/[0.02]"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`w-3.5 h-3.5 transition-all duration-500 ${
                            activeIndex === index ? "text-[#C79E43] scale-110" : "text-white/40 group-hover:text-white/70"
                          } ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        {activeIndex === index && <div className="absolute inset-0 rounded-full bg-[#C79E43]/20 blur-md -z-10 animate-pulse" />}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{
                          height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.4, delay: 0.1 },
                          y: { duration: 0.4, delay: 0.1 },
                        }}
                        className={`overflow-hidden ${isRTL ? "pl-16" : "pr-16"}`}
                      >
                        <p
                          className={`mt-4 pb-2 text-[#C79E43]/90 leading-relaxed border-[#C79E43]/30 ${
                            isRTL ? "border-r-2 pr-6 mr-2" : "border-l-2 pl-6 ml-2"
                          }`}
                          style={{ fontFamily, fontSize: "14px", fontWeight: 400 }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,#1e2a4a_0%,#020618_70%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,#3a2a4a_0%,transparent_50%)] opacity-30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#1a2a4a_0%,transparent_40%)] opacity-20" />

      <FooterSection />

      <style jsx global>{`
        .landing-shell {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}
