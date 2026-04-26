"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

function CheckIcon() {
  return (
    <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#cfcfcf] text-[9px] leading-none text-[#e5e5e5]">
      &#10003;
    </span>
  );
}

export default function TaxStructureSection() {
  const { t, tRaw, isRTL } = useI18n();
  const fontFamily = isRTL
    ? "var(--font-cairo), Cairo, sans-serif"
    : "var(--font-poppins), Poppins, sans-serif";

  const plans = (tRaw("pricing.plans") as {
    title: string;
    price: string;
    items: string[];
  }[]) ?? [];

  return (
    <motion.section
      id="pricing"
      className="relative overflow-hidden bg-[#070b12] px-6 py-24 md:px-10 lg:px-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.24 }}
    >
      <div className="absolute inset-0" />
      <div className="tax-gold-orb pointer-events-none absolute left-[-8%] top-[-14%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(188,146,54,0.16)_0%,rgba(188,146,54,0.06)_36%,transparent_74%)] blur-3xl" />
      <div className="tax-gold-orb-delayed pointer-events-none absolute right-[-6%] bottom-[-12%] h-[410px] w-[410px] rounded-full bg-[radial-gradient(circle,rgba(188,146,54,0.13)_0%,rgba(188,146,54,0.05)_34%,transparent_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 44, scale: 0.96, filter: "blur(10px)" },
            show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#9f7b38]" />
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#a78342]" style={{ fontFamily }}>
              {t("pricing.sectionLabel")}
            </p>
          </div>

          <h2
            className="mx-auto mt-8 max-w-[520px] text-white"
            style={{ fontFamily, fontSize: "clamp(30px,3.25vw,46px)", lineHeight: "1.08", fontWeight: 600, letterSpacing: "-0.04em" }}
          >
            {t("pricing.heading")}
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-[1120px] gap-5 lg:grid-cols-3"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.16, delayChildren: 0.16 } },
          }}
        >
          {plans.map((plan, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 92, scale: 0.86, rotateX: 12, filter: "blur(14px)" },
                show: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{
                y: index === 1 ? -34 : -10,
                scale: 1.035,
                borderColor: "rgba(226,177,63,0.46)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 18px rgba(219,168,51,0.16), 0 24px 58px rgba(0,0,0,0.42)",
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className={`group/tax-card relative flex flex-col rounded-[12px] border border-[#3e424a] bg-[linear-gradient(180deg,rgba(34,34,34,0.95)_0%,rgba(29,29,29,0.96)_100%)] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.12)] transition-colors duration-300 [transform-style:preserve-3d] ${index === 1 ? "lg:-mt-5" : "lg:mt-5"}`}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_50%_0%,rgba(226,177,63,0.10),transparent_44%)] opacity-0 transition-opacity duration-300 group-hover/tax-card:opacity-100" />
              <div className="pointer-events-none absolute -inset-px rounded-[12px] opacity-0 shadow-[0_0_24px_rgba(226,177,63,0.18)] transition-opacity duration-300 group-hover/tax-card:opacity-100" />

              <h3 className="relative text-white" style={{ fontFamily, fontSize: "16px", lineHeight: "1.3", fontWeight: 600 }}>
                {plan.title}
              </h3>

              <div className="relative mt-4 text-[#d7aa48]" style={{ fontFamily, fontSize: "15px", lineHeight: "1.3", fontWeight: 500 }}>
                {plan.price}
              </div>

              <div className="relative mt-6 h-px w-full bg-white/8 transition-colors duration-300 group-hover/tax-card:bg-[#d7aa48]/35" />

              <div className="relative mt-7 text-white/72" style={{ fontFamily, fontSize: "10px", lineHeight: "1.4" }}>
                {t("pricing.whatsIncluded")}
              </div>

              <ul className="relative mt-4 space-y-3">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-[1px] shrink-0"><CheckIcon /></div>
                    <span className="text-white/76" style={{ fontFamily, fontSize: "11px", lineHeight: "1.45" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex justify-center">
                <a
                  href="https://wa.me/971504772299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[32px] min-w-[86px] items-center justify-center rounded-[6px] border border-[#e2b13f] bg-[linear-gradient(180deg,#cd9e2d_0%,#b9851f_100%)] px-4 text-white shadow-[0_0_14px_rgba(219,168,51,0.18)] transition hover:brightness-110 group-hover/tax-card:shadow-[0_0_20px_rgba(219,168,51,0.26)]"
                  style={{ fontFamily, fontSize: "11px", fontWeight: 500, letterSpacing: "0.01em" }}
                >
                  <span>{t("pricing.subscribe")}</span>
                  <span className="ml-3 text-[13px]">{">"}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
