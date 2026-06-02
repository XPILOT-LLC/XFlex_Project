"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useI18n } from "@/lib/i18n";

const CONTACT_FORM_ID = "85";
const CONTACT_FORM_ENDPOINT = `https://cms.xflex.ae/wp-json/contact-form-7/v1/contact-forms/${CONTACT_FORM_ID}/feedback`;
const CONTACT_FORM_UNIT_TAG = `wpcf7-f${CONTACT_FORM_ID}-o1`;

const headingEnter = {
  hidden: { opacity: 0, x: 110 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, type: "spring" as const, stiffness: 105, damping: 20 } },
};

const descriptionEnter = {
  hidden: { opacity: 0, x: 90 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.18, duration: 0.7, type: "spring" as const, stiffness: 100, damping: 20 } },
};

const buttonEnter = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.38, duration: 0.52, type: "spring" as const, stiffness: 120, damping: 16 } },
};

const bannerVisual = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.95, type: "spring" as const, stiffness: 82, damping: 18 } },
};

export default function CTASection() {
  const { t, isRTL } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const fontFamily = isRTL
    ? "var(--font-cairo), Cairo, sans-serif"
    : "var(--font-poppins), Poppins, sans-serif";
  const statusMessages = {
    loading: isRTL ? "جاري إرسال رسالتك..." : "Sending your message...",
    success: isRTL ? "تم إرسال رسالتك بنجاح." : "Thank you for your message. It has been sent.",
    error: isRTL ? "تعذر إرسال رسالتك. حاول مرة أخرى." : "We couldn't send your message. Please try again.",
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

    const payload = new FormData();
    payload.append("_wpcf7", CONTACT_FORM_ID);
    payload.append("_wpcf7_version", "6.1.3");
    payload.append("_wpcf7_locale", isRTL ? "ar" : "en_US");
    payload.append("_wpcf7_unit_tag", CONTACT_FORM_UNIT_TAG);
    payload.append("_wpcf7_container_post", "0");
    payload.append("_wpcf7_posted_data_hash", "");
    payload.append("your-name", formData.name);
    payload.append("your-email", formData.email);
    payload.append("your-tel", formData.phone);
    payload.append("your-message", formData.message);

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const result = await response.json();

      if (!response.ok || result.status !== "mail_sent") {
        setSubmissionStatus({
          type: "error",
          message: result.message || statusMessages.error,
        });
        return;
      }

      setSubmissionStatus({
        type: "success",
        message: result.message || statusMessages.success,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setSubmissionStatus({ type: "error", message: statusMessages.error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cta" className="bg-[#0b0d13]">
      <div id="contact-form" className="px-6 pb-20 pt-16 md:px-12">
        <div className="mx-auto max-w-[30.5rem]">
          <h3 className="text-center" style={{ fontFamily, fontSize: "clamp(32px, 8vw, 60px)", lineHeight: "1.1" }}>
            {t("cta.formHeading").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#FE9A00]">{t("cta.formHeading").split(" ").slice(-1)}</span>
          </h3>
          <p className="mt-4 text-center text-[1.125rem] leading-7 tracking-[-0.0275rem] text-[#62748E]" style={{ fontFamily }}>
            {t("cta.formSubheading")}
          </p>
          <form className="mt-12 space-y-4" onSubmit={handleSubmit}>
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder={t("cta.namePlaceholder")}
              style={{ fontFamily }}
              name="your-name"
              value={formData.name}
              onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            />
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder={t("cta.emailPlaceholder")}
              style={{ fontFamily }}
              name="your-email"
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            />
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder={t("cta.phonePlaceholder")}
              style={{ fontFamily }}
              name="your-tel"
              type="tel"
              value={formData.phone}
              onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
            />
            <textarea
              className="h-[9.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none"
              placeholder={t("cta.messagePlaceholder")}
              style={{ fontFamily }}
              name="your-message"
              value={formData.message}
              onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            />
            <button
              type="submit"
              className="h-[3.75rem] w-full rounded-[0.625rem] bg-gradient-to-r from-[#FE9A00] to-[#E17100] text-sm font-medium uppercase tracking-[0.0781rem] text-[#0A0A0F]"
              style={{ fontFamily }}
              disabled={isLoading}
            >
              {isLoading ? statusMessages.loading : t("cta.sendBtn")}
            </button>
            {submissionStatus ? (
              <p
                className={submissionStatus.type === "success" ? "text-[#4ADE80]" : "text-[#F87171]"}
                style={{ fontFamily }}
              >
                {submissionStatus.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      <motion.div
        className="relative min-h-[420px] overflow-hidden border-t border-white/10 px-6 py-16 md:min-h-[560px] md:px-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={bannerVisual} className="absolute inset-0">
          <Image src="/cta.png" alt="XFLEX call to action" fill priority={false} className="object-cover object-center" />
        </motion.div>

        <div className="relative mx-auto flex max-w-[820px] flex-col items-center text-center pt-10 md:pt-16">
          <motion.h3
            variants={headingEnter}
            className="max-w-[760px] text-[#F0C45F]"
            style={{ fontFamily, fontSize: "clamp(24px, 3.3vw, 48px)", lineHeight: "1.14", fontWeight: 600, letterSpacing: "-0.04em" }}
          >
            {t("cta.bannerHeading")}
          </motion.h3>

          <motion.p
            variants={descriptionEnter}
            className="mt-6 max-w-[700px] text-[#E0E6EF]"
            style={{ fontFamily, fontSize: "clamp(14px, 1.35vw, 17px)", lineHeight: "1.35", fontWeight: 400 }}
          >
            {t("cta.bannerDescription")}
          </motion.p>

          <motion.a
            variants={buttonEnter}
            href="#cta"
            className="mt-10 inline-flex h-[54px] min-w-[204px] items-center justify-center rounded-[8px] bg-[#D8B057] px-10 text-[12px] font-medium text-[#17120a] shadow-[0_18px_38px_rgba(216,176,87,0.22)] transition hover:-translate-y-1 hover:brightness-110"
            style={{ fontFamily, letterSpacing: "0.015em" }}
          >
            {t("cta.bookBtn")}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
