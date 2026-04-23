const plans = [
  {
    title: "Essential Compliance",
    price: "From AED 3,500",
    items: [
      "Corporate Tax Registration",
      "Initial Tax Position Review",
      "Basic Compliance Guidance",
      "VAT Registration (if applicable)",
    ],
  },
  {
    title: "Growth & Monitoring",
    price: "From AED 7,500",
    items: [
      "Corporate Tax Return Preparation & Filing",
      "VAT Return Filing",
      "Review of Key Transactions",
      "Compliance Monitoring",
      "Filing Deadline Tracking",
    ],
  },
  {
    title: "Tax Protection & Advisory",
    price: "Custom Pricing",
    items: [
      "Full Tax Risk Review",
      "Financial Statements Tax Assessment",
      "Ongoing Advisory Support",
      "FTA Communication Support (limited)",
      "Quarterly Strategy Meetings",
    ],
  },
];

function CheckIcon() {
  return (
    <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#cfcfcf] text-[9px] leading-none text-[#e5e5e5]">
      &#10003;
    </span>
  );
}

export default function TaxStructureSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#070b12] px-6 py-24 md:px-10 lg:px-14"
    >
      <div className="absolute inset-0" />
      <div className="tax-gold-orb pointer-events-none absolute left-[-8%] top-[-14%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(188,146,54,0.30)_0%,rgba(188,146,54,0.13)_36%,transparent_74%)] blur-3xl" />
      <div className="tax-gold-orb-delayed pointer-events-none absolute right-[-6%] bottom-[-12%] h-[410px] w-[410px] rounded-full bg-[radial-gradient(circle,rgba(188,146,54,0.24)_0%,rgba(188,146,54,0.10)_34%,transparent_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#9f7b38]" />
            <p
              className="text-[10px] uppercase tracking-[0.34em] text-[#a78342]"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Tax Structure......
            </p>
          </div>

          <h2
            className="mx-auto mt-8 max-w-[520px] text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(30px,3.25vw,46px)",
              lineHeight: "1.08",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            Choose the Right Tax
            <br />
            Structure for Your Business
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.title}
              className={`flex flex-col rounded-[12px] border border-[#3e424a] bg-[linear-gradient(180deg,rgba(34,34,34,0.95)_0%,rgba(29,29,29,0.96)_100%)] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.12)] ${
                index === 1 ? "lg:-mt-5" : "lg:mt-5"
              }`}
            >
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.3",
                  fontWeight: 600,
                }}
              >
                {plan.title}
              </h3>

              <div
                className="mt-4 text-[#d7aa48]"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.3",
                  fontWeight: 500,
                }}
              >
                {plan.price}
              </div>

              <div className="mt-6 h-px w-full bg-white/8" />

              <div
                className="mt-7 text-white/72"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "10px",
                  lineHeight: "1.4",
                }}
              >
                What&apos;s included
              </div>

              <ul className="mt-4 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-[1px] shrink-0">
                      <CheckIcon />
                    </div>
                    <span
                      className="text-white/76"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontSize: "11px",
                        lineHeight: "1.45",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-center">
                <a
                  href="#cta"
                  className="inline-flex h-[32px] min-w-[86px] items-center justify-center rounded-[6px] border border-[#e2b13f] bg-[linear-gradient(180deg,#cd9e2d_0%,#b9851f_100%)] px-4 text-white shadow-[0_0_24px_rgba(219,168,51,0.28)] transition hover:brightness-110"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  <span>Subscribe</span>
                  <span className="ml-3 text-[13px]">{">"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
