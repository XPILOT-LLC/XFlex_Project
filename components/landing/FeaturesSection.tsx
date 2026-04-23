const features = [
  {
    icon: "lightning",
    title: "Instant Tax Intelligence",
    description:
      "AI-driven insights that identify savings opportunities automatically",
  },
  {
    icon: "shield",
    title: "Proactive Risk Protection",
    description:
      "Real-time monitoring prevents costly penalties before they happen",
  },
  {
    icon: "target",
    title: "Strategic Growth Partner",
    description:
      "Tax planning aligned with your business expansion goals",
  },
];

const stars = [
  { top: "5%", left: "2%", size: 3, delay: "0s" },
  { top: "8%", left: "38%", size: 2, delay: "1.3s" },
  { top: "11%", left: "84%", size: 3, delay: "0.8s" },
  { top: "18%", left: "73%", size: 3, delay: "1.9s" },
  { top: "22%", left: "59%", size: 2, delay: "0.4s" },
  { top: "30%", left: "96%", size: 3, delay: "2.4s" },
  { top: "36%", left: "15%", size: 2, delay: "1.1s" },
  { top: "43%", left: "68%", size: 2, delay: "2.1s" },
  { top: "50%", left: "56%", size: 3, delay: "0.2s" },
  { top: "56%", left: "31%", size: 2, delay: "1.6s" },
  { top: "61%", left: "92%", size: 3, delay: "2.8s" },
  { top: "68%", left: "7%", size: 2, delay: "0.9s" },
  { top: "77%", left: "19%", size: 3, delay: "1.5s" },
  { top: "82%", left: "63%", size: 2, delay: "2.2s" },
  { top: "88%", left: "91%", size: 2, delay: "0.6s" },
  { top: "92%", left: "84%", size: 3, delay: "1.8s" },
  { top: "94%", left: "24%", size: 2, delay: "2.6s" },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "lightning") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M13.5 2.5 6.8 13h4.5l-.8 8.5L17.2 11h-4.4l.7-8.5Z"
          stroke="#F3BE45"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M12 3.5c2.1 1.5 4.5 2.3 7 2.5v4.9c0 4.2-2.7 8-7 9.6-4.3-1.6-7-5.4-7-9.6V6c2.5-.2 4.9-1 7-2.5Z"
          stroke="#F3BE45"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <circle cx="12" cy="12" r="7.5" stroke="#F3BE45" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.2" fill="#F3BE45" />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#0b1017] px-6 py-24 md:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(18,25,38,0.75),transparent_42%),radial-gradient(circle_at_78%_35%,rgba(197,160,89,0.08),transparent_28%)]" />
        {stars.map((star, index) => (
          <span
            key={index}
            className="feature-star absolute rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.55)]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]">
        <div className="max-w-[620px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#b18a44]" />
            <p
              className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#b18a44]"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Why Choose XFLEX
            </p>
          </div>

          <h2
            className="mt-9 text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(30px, 3vw, 44px)",
              lineHeight: "1.1",
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            We Don&apos;t Just Manage Taxes
          </h2>

          <h3
            className="mt-2 bg-gradient-to-r from-[#c39b53] via-[#e4c071] to-[#caa154] bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(38px, 4.5vw, 62px)",
              lineHeight: "0.98",
              fontWeight: 700,
              letterSpacing: "-0.05em",
            }}
          >
            We Secure Your Business
            <br />
            Future.
          </h3>

          <p
            className="mt-7 max-w-[360px] text-white/62"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "13px",
              lineHeight: "1.35",
              letterSpacing: "0.02em",
            }}
          >
            Smart tax solutions that keep your business compliant, protected, and
            ready to grow.
          </p>

          <div className="mt-10 space-y-7">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex max-w-[480px] items-start gap-4 ${
                  index === 1 ? "ml-0 md:ml-24" : ""
                } ${index === 2 ? "ml-0 md:ml-40" : ""}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#16273a] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_rgba(0,0,0,0.18)]">
                  <FeatureIcon type={feature.icon} />
                </div>
                <div>
                  <h4
                    className="text-white"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.3",
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="mt-1 max-w-[310px] text-white/52"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "12px",
                      lineHeight: "1.55",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="relative mx-auto w-full max-w-[490px]">
          <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_48%_44%,rgba(208,172,91,0.22),transparent_22%),radial-gradient(circle_at_60%_50%,rgba(208,172,91,0.12),transparent_42%)] blur-2xl" />

          <div
            className="relative rounded-[18px] border border-[#6d5930] bg-[linear-gradient(180deg,rgba(35,40,46,0.95)_0%,rgba(21,24,30,0.96)_100%)] p-4 shadow-[0_0_0_1px_rgba(255,218,144,0.03),0_0_60px_rgba(197,160,89,0.12)]"
            style={{ transform: "perspective(1400px) rotateY(-14deg)" }}
          >
            <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(135deg,rgba(232,200,138,0.12),transparent_18%,transparent_72%,rgba(232,200,138,0.06))]" />

            <div className="relative rounded-[14px] border border-[#2f3136] bg-[#171c23] p-4">
              <div
                className="text-[9px] uppercase tracking-[0.16em] text-[#d1a953]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              >
                Tax Allocation Analysis
              </div>

              <div className="relative mt-4 flex h-[176px] items-center justify-center overflow-hidden rounded-[12px] border border-[#2a2f37] bg-[linear-gradient(180deg,#1a2027_0%,#151a21_100%)]">
                <div className="absolute h-[118px] w-[118px] rounded-full border border-dashed border-[#8c7341] opacity-90" />
                <div className="absolute h-[84px] w-[84px] rounded-full border border-[#745f37] opacity-80" />
                <div className="absolute h-[52px] w-[52px] rounded-full border border-[#5e4c2d] bg-[radial-gradient(circle,rgba(238,201,123,0.28),rgba(78,66,43,0.08)_62%,transparent_72%)] shadow-[0_0_25px_rgba(197,160,89,0.24)]" />
                <span className="absolute left-[54%] top-[49%] -translate-x-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#a7905d]">
                  AED 1.2M
                </span>

                <div className="absolute left-[49%] top-[30px] h-[33px] w-px bg-[#8c7341]" />
                <div className="absolute left-[49%] top-[29px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#c8a55c]" />
                <div className="absolute left-[41%] top-[14px] text-[8px] text-[#f0d694]">
                  Echo
                </div>
                <div className="absolute left-[40%] top-[25px] text-[8px] text-[#c7a35b]">
                  23%
                </div>

                <div className="absolute right-[50px] top-[50%] h-px w-[32px] bg-[#8c7341]" />
                <div className="absolute right-[49px] top-[50%] h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#c8a55c]" />
                <div className="absolute right-[24px] top-[48%] text-[8px] text-[#f0d694]">
                  VAT
                </div>
                <div className="absolute right-[20px] top-[53%] text-[8px] text-[#c7a35b]">
                  42%
                </div>

                <div className="absolute bottom-[48px] left-[49%] h-[34px] w-px bg-[#8c7341]" />
                <div className="absolute bottom-[46px] left-[49%] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#c8a55c]" />
                <div className="absolute bottom-[28px] left-[43%] text-[8px] text-[#f0d694]">
                  Corporate
                </div>
                <div className="absolute bottom-[18px] left-[45%] text-[8px] text-[#c7a35b]">
                  35%
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[12px] border border-[#2a2f37] bg-[#151a21] p-4">
                  <div className="text-[8px] uppercase tracking-[0.14em] text-[#d1a953]">
                    Revenue Growth
                  </div>
                  <div className="mt-5 flex items-end gap-3">
                    {[42, 56, 48, 61].map((height, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div
                          className="w-[10px] rounded-t-[2px] bg-[linear-gradient(180deg,#d8ba73_0%,#8d6f35_100%)]"
                          style={{ height }}
                        />
                        <span className="text-[6px] text-white/45">
                          {["Q1", "Q2", "Q3", "Q4"][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-right text-[11px] font-semibold text-[#e6bc60]">
                    +24%
                  </div>
                  <div className="text-right text-[7px] text-white/35">YoY Growth</div>
                </div>

                <div className="rounded-[12px] border border-[#2a2f37] bg-[#151a21] p-4">
                  <div className="text-[8px] uppercase tracking-[0.14em] text-[#d1a953]">
                    Compliance Rate
                  </div>
                  <div className="mt-7 flex items-center justify-center">
                    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[6px] border-[#2d3640] border-t-[#d8b15e] border-r-[#d8b15e] text-[18px] font-semibold text-[#e0b963]">
                      98<span className="text-[10px]">%</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-[7px] text-white/35">
                    Industry Leading
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  ["524", "Active Clients"],
                  ["45M", "Tax Saved"],
                  ["99.8%", "Accuracy"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[10px] border border-[#2a2f37] bg-[#151a21] px-4 py-3"
                  >
                    <div className="text-[18px] font-semibold text-[#d4a956]">{value}</div>
                    <div className="mt-1 text-[7px] text-white/35">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#cta"
            className="inline-flex h-[52px] w-[202px] items-center justify-center rounded-[10px] bg-[#caa24f] text-[#17110a] transition hover:brightness-110"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
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
