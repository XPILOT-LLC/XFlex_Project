"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "contact", href: "#cta" },
] as const;

type ContactIconType = "email" | "phone" | "location";

function ContactIcon({ type }: { type: ContactIconType }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
        <rect x="5" y="6" width="14" height="12" rx="2" stroke="#C79E43" strokeWidth="1.5" />
        <path d="m6.5 8 5.5 4 5.5-4" stroke="#C79E43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
        <path d="M8.2 4.8c.4-.4 1-.5 1.5-.2l2 1c.6.3.9 1 .7 1.7l-.5 1.8a1 1 0 0 0 .2.9l1.5 1.5a1 1 0 0 0 .9.2l1.8-.5c.7-.2 1.4.1 1.7.7l1 2c.3.5.2 1.1-.2 1.5l-1 1c-.9.9-2.2 1.3-3.4 1-2.2-.6-4.4-1.9-6.3-3.8S5.4 10.1 4.8 7.9c-.3-1.2.1-2.5 1-3.4l1-1Z" stroke="#C79E43" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
      <path d="M12 20s5-5.2 5-9a5 5 0 1 0-10 0c0 3.8 5 9 5 9Z" stroke="#C79E43" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.8" fill="#C79E43" />
    </svg>
  );
}

function ContactRow({ type, label, value }: { type: ContactIconType; label: string; value: string }) {
  const { isRTL } = useI18n();
  const siteFont = isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif";
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#3F3218_0%,#2E2412_100%)]">
        <ContactIcon type={type} />
      </div>
      <div>
        <div className="uppercase text-[#6E7682]" style={{ fontFamily: siteFont, fontSize: "7px", lineHeight: "1.2", letterSpacing: "0.18em" }}>
          {label}
        </div>
        <div className="mt-1 text-[#D2D7DF]" style={{ fontFamily: siteFont, fontSize: "11px", lineHeight: "1.5" }}>
          {value}
        </div>
      </div>
    </div>
  );
}

const socialLinks = [
  {
    key: "followX",
    href: "https://x.com/xflex11111?s=11&t=T3nuyUnvicusWVWib4Qfbw",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
      </svg>
    ),
  },
  {
    key: "followInstagram",
    href: "https://www.instagram.com/xflex11111?igsh=Zmhxc2pwa2lhMWQ5&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    key: "followLinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
] as const;

export default function FooterSection() {
  const { t, isRTL } = useI18n();
  const logoFont = "var(--font-cinzel), serif";
  const siteFont = isRTL ? "var(--font-cairo), Cairo, sans-serif" : "var(--font-poppins), Poppins, sans-serif";

  return (
    <footer className="border-t border-white/6 bg-[#0B0F15] px-6 py-10 md:px-12">
      <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[1.8fr_0.7fr_0.6fr]">

        {/* Column 1 — Brand + Contact */}
        <div>
          <div className="flex items-start gap-4">
            <div className="relative h-[72px] w-[96px]">
              <Image src="/logo.png" alt="Xflex" fill className={`object-contain ${isRTL ? "object-right" : "object-left"}`} priority />
            </div>

            <div>
              <div 
                className="text-2xl font-bold tracking-widest uppercase" 
                style={{ 
                  background: "linear-gradient(135deg, #FEE685 0%, #D6A84E 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: logoFont, 
                  lineHeight: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                }}
              >
                XFLEX
              </div>

              <p className="mt-2 text-white" style={{ fontFamily: siteFont, fontSize: "12px", lineHeight: "1.35", fontWeight: 600 }}>
                {t("footer.tagline")}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <ContactRow type="email" label={t("footer.emailLabel")} value="x@xflex.ae" />
            <ContactRow type="phone" label={t("footer.phoneLabel")} value="00971504772299" />
            <ContactRow type="location" label={t("footer.locationLabel")} value={t("footer.locationValue")} />
          </div>

          {/* Social icons */}
          <div className="mt-8 flex gap-3.5">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 md:h-8 md:w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#3F3218_0%,#2E2412_100%)] text-[#C79E43] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(199,158,67,0.3)] hover:text-[#f4d18c]"
                aria-label={t(`footer.${social.key}`)}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-[#D1A54B]" style={{ fontFamily: siteFont, fontSize: "10px", lineHeight: "1.2", fontWeight: 500 }}>
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a href={link.href} className="block py-2 md:inline md:py-0 text-[#D6D9DE] transition hover:text-white uppercase" style={{ fontFamily: siteFont, fontSize: "10px", lineHeight: "1.4", letterSpacing: "0.05em" }}>
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — News/FAQ */}
        <div>
          <h3 className="text-[#D1A54B]" style={{ fontFamily: siteFont, fontSize: "10px", lineHeight: "1.2", fontWeight: 500 }}>
            {t("footer.news")}
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="/faq" className="block py-2 md:inline md:py-0 text-[#D6D9DE] transition hover:text-white uppercase" style={{ fontFamily: siteFont, fontSize: "10px", lineHeight: "1.4", letterSpacing: "0.05em" }}>
                {t("footer.faq")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-8 flex max-w-[1100px] flex-col gap-3 border-t border-white/6 pt-5 text-[#B1B7C1] md:flex-row md:items-center md:justify-between">
        <p style={{ fontFamily: siteFont, fontSize: "8px", lineHeight: "1.4" }}>
          {t("footer.copyright")}
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {(["termOfUse", "privacyPolicy", "cookiePolicy"] as const).map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 md:inline md:py-0 underline underline-offset-2 transition hover:text-white"
              style={{ fontFamily: siteFont, fontSize: "8px", lineHeight: "1.4" }}
            >
              {t(`footer.${item}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
