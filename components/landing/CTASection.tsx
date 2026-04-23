import Image from "next/image";

export default function CTASection() {
  return (
    <section id="cta" className="bg-[#0b0d13]">
      <div id="contact-form" className="px-6 pb-16 pt-12 md:px-12 md:pb-20">
        <div className="mx-auto max-w-[560px]">
          <h2
            className="text-center text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(42px, 4.9vw, 64px)",
              lineHeight: "1.04",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            Get in <span className="text-[#F2A100]">Touch</span>
          </h2>

          <p
            className="mt-4 text-center text-[#6E7785]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            Let&apos;s discuss how we can help your business thrive
          </p>

          <form className="mx-auto mt-10 max-w-[326px] space-y-3">
            <input
              className="h-[40px] w-full rounded-[6px] border border-[#2b3038] bg-[#1b1d23] px-4 text-[12px] text-white outline-none placeholder:text-[#536178]"
              placeholder="Full Name"
            />
            <input
              className="h-[40px] w-full rounded-[6px] border border-[#2b3038] bg-[#1b1d23] px-4 text-[12px] text-white outline-none placeholder:text-[#536178]"
              placeholder="Email Address"
            />
            <input
              className="h-[40px] w-full rounded-[6px] border border-[#2b3038] bg-[#1b1d23] px-4 text-[12px] text-white outline-none placeholder:text-[#536178]"
              placeholder="Phone Number"
            />
            <textarea
              className="h-[102px] w-full resize-none rounded-[6px] border border-[#2b3038] bg-[#1b1d23] px-4 py-3 text-[12px] text-white outline-none placeholder:text-[#536178]"
              placeholder="How can we help you?"
            />
            <button
              type="button"
              className="h-[40px] w-full rounded-[6px] bg-[linear-gradient(180deg,#F6A106_0%,#ED8600_100%)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17120a] transition hover:brightness-110"
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
