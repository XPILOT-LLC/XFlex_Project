"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const yearSteps = [2, 5, 7, 10, 12, 15];

export default function HeroSection() {
  const { t, isRTL } = useI18n();
  const [yearsCount, setYearsCount] = useState(2);

  useEffect(() => {
    const timers = yearSteps.map((value, index) =>
      window.setTimeout(() => {
        setYearsCount(value);
      }, 1900 + index * 320)
    );
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const fontFamily = isRTL
    ? "var(--font-cairo), Cairo, sans-serif"
    : "var(--font-poppins), Poppins, sans-serif";

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-screen pb-12 lg:h-screen lg:min-h-[720px] lg:max-h-[980px] lg:pb-0"
    >
      <div className="absolute inset-0">
        <Image
          src="/Rectangle%202%20(1).png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,24,0.92)_0%,rgba(2,6,24,0.55)_45%,rgba(2,6,24,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,24,0.10)_0%,rgba(2,6,24,0.60)_100%)]" />
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-screen w-full flex-col lg:h-full"
        style={{ maxWidth: "1440px", paddingInline: "clamp(24px, 5.42vw, 78px)" }}
      >
        <div className="relative flex flex-1 flex-col lg:block">
          {/* ── Text column ── */}
          <div
            className="flex flex-col justify-start pt-0 text-center lg:justify-center lg:text-start"
            style={{
              paddingTop: "clamp(84px, 12vh, 210px)",
              maxWidth: "min(100%, 660px)",
            }}
          >
            <h1
              className="hero-step-1-left font-medium text-white"
              style={{
                width: "min(100%, 640px)",
                fontSize: "clamp(22px, 8vw, 60px)",
                lineHeight: "1.08",
                letterSpacing: "0.01em",
                fontFamily,
              }}
            >
              {t("hero.heading")}
            </h1>

            <p
              className="hero-step-1-left font-medium"
              style={{
                width: "min(100%, 500px)",
                marginTop: "clamp(14px, 2.2vh, 34px)",
                fontSize: "clamp(12px, 3.6vw, 19px)",
                lineHeight: "1.45",
                letterSpacing: "0.02em",
                color: "rgba(255, 255, 255, 0.70)",
                fontFamily,
              }}
            >
              {t("hero.subheading")}
              <br />
              {t("hero.subheading2")}
            </p>

            <div
              className="mx-auto flex w-full flex-col items-center justify-center sm:flex-row lg:mx-0 lg:justify-start"
              style={{
                marginTop: "clamp(22px, 5vh, 86px)",
                gap: "clamp(12px, 2.4vw, 40px)",
                flexWrap: "wrap",
                justifyContent: isRTL ? undefined : undefined,
              }}
            >
              <a
                href="https://wa.me/971504772299"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-step-2-left inline-flex items-center justify-center font-medium transition hover:brightness-110"
                style={{
                  width: "clamp(188px, 15.5vw, 242px)",
                  height: "clamp(50px, 4.8vh, 58px)",
                  borderRadius: "12px",
                  background: "#C5A059",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  letterSpacing: "0.02em",
                  color: "#120f0a",
                  boxShadow: "0 10px 28px rgba(197, 160, 89, 0.18)",
                  fontFamily,
                }}
              >
                {t("hero.bookBtn")}
              </a>

              <a
                href="#services"
                className="hero-step-3-right inline-flex items-center justify-center font-medium text-white/[0.92] transition hover:bg-white/[0.06]"
                style={{
                  width: "clamp(180px, 14.6vw, 210px)",
                  height: "clamp(50px, 4.8vh, 58px)",
                  borderRadius: "12px",
                  border: "1px solid rgba(197, 160, 89, 0.75)",
                  fontSize: "clamp(12px, 0.95vw, 14px)",
                  letterSpacing: "0.02em",
                  fontFamily,
                }}
              >
                {t("hero.servicesBtn")}
              </a>
            </div>
          </div>

          {/* ── Image (desktop) ── */}
          <div
            className="hero-step-1-right absolute hidden lg:block"
            style={{
              [isRTL ? "left" : "right"]: "clamp(-24px, -1.6vw, 8px)",
              top: "clamp(42px, 7.8vh, 98px)",
              width: "clamp(320px, 31vw, 590px)",
              aspectRatio: "601 / 686",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: "46%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(197,160,89,0.25) 0%, rgba(197,160,89,0.06) 50%, transparent 72%)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative h-full w-full">
              <div className="absolute" style={{ inset: 0, zIndex: 1 }}>
                <div className="relative h-full w-full">
                  <Image
                    src="/Group 2.png"
                    alt="Hero graphic"
                    fill
                    priority
                    className="object-contain object-center"
                    style={{ transform: "translateY(-10px) scale(1.08)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── +15 Badge ── */}
          <div
            className="hero-step-4-up absolute hidden lg:flex flex-col items-center"
            style={{
              [isRTL ? "right" : "left"]: "calc(100% - clamp(320px, 31vw, 590px) / 2 + clamp(-24px, -1.6vw, 8px))",
              bottom: "clamp(8px, 1.4vh, 24px)",
              transform: isRTL ? "translateX(50%)" : "translateX(-50%)",
              zIndex: 3,
              width: "160px",
            }}
          >
            <div
              style={{
                fontSize: "clamp(34px, 3.15vw, 58px)",
                lineHeight: "1",
                letterSpacing: "0.264px",
                textAlign: "center",
                background: "linear-gradient(270deg, #C5A059 0%, #E8C88A 50%, #C5A059 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily,
              }}
            >
              +{yearsCount}
            </div>
            <span
              style={{
                marginTop: "12px",
                fontSize: "11px",
                lineHeight: "16px",
                letterSpacing: "0.2px",
                color: "#90A1B9",
                textAlign: "center",
                fontFamily,
              }}
            >
              {t("hero.yearsLabel")}
            </span>
          </div>

          {/* ── Image (mobile) ── */}
          <div
            className="hero-step-1-right relative mx-auto mt-6 block w-[min(76vw,320px)] lg:hidden"
            style={{ aspectRatio: "601 / 727" }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/Group 2.png"
                alt="Hero graphic"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          style={{ bottom: "clamp(12px, 3vh, 44px)" }}
        >
          <div
            className="hero-scroll-indicator flex items-start justify-center"
            style={{
              width: "28px",
              height: "48px",
              borderRadius: "999px",
              border: "2px solid rgba(197, 160, 89, 0.40)",
              padding: "8px 9px 0 9px",
              opacity: 0.85,
            }}
          >
            <div
              className="hero-scroll-dot"
              style={{
                width: "6px",
                height: "14px",
                borderRadius: "999px",
                background: "rgba(197, 160, 89, 0.80)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
