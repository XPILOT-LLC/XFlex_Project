import Image from "next/image";

export default function CTASection() {
  return (
    <section id="cta" className="bg-[#0b0d13]">
      <div id="contact-form" className="px-6 pb-20 pt-16 md:px-12">
        <div className="mx-auto max-w-[30.5rem]">
          <h3 className="text-center text-[3.75rem] leading-[3.75rem]">
            Get in <span className="text-[#FE9A00]">Touch</span>
          </h3>
          <p className="mt-4 text-center text-[1.125rem] leading-7 tracking-[-0.0275rem] text-[#62748E]">
            Let&apos;s discuss how we can help your business thrive
          </p>
          <form className="mt-12 space-y-4">
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder="Full Name"
            />
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder="Email Address"
            />
            <input
              className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none"
              placeholder="Phone Number"
            />
            <textarea
              className="h-[9.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none"
              placeholder="How can we help you?"
            />
            <button
              type="button"
              className="h-[3.75rem] w-full rounded-[0.625rem] bg-gradient-to-r from-[#FE9A00] to-[#E17100] text-sm font-medium uppercase tracking-[0.0781rem] text-[#0A0A0F]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="relative min-h-[220px] overflow-hidden px-6 py-16 md:min-h-[290px] md:px-12">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0.50)_0%,rgba(6,10,18,0.62)_45%,rgba(6,10,18,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,18,30,0.08)_0%,rgba(6,10,18,0.56)_100%)]" />

        <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
          <h3
            className="max-w-[620px] text-[#F0C45F]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(24px, 3vw, 42px)",
              lineHeight: "1.15",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            Facing UAE Tax Risks? We Handle It For You.
          </h3>

          <p
            className="mt-4 max-w-[520px] text-[#D0D6DE]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "14px",
              lineHeight: "1.65",
            }}
          >
            Work with certified tax professionals to stay compliant, avoid penalties,
            and protect your business.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#D8B057] px-8 text-[11px] font-medium text-[#17120a] transition hover:brightness-110"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Book free consultation
          </a>
        </div>
      </div>
    </section>
  );
}
