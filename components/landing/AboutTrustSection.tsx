function AboutCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: "vision" | "values";
}) {
  return (
    <article className="min-h-[154px] rounded-[12px] border border-[#4a4d55] bg-[linear-gradient(135deg,rgba(40,43,49,0.96)_0%,rgba(30,32,38,0.95)_52%,rgba(34,34,34,0.95)_100%)] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_32px_rgba(0,0,0,0.18)] md:min-h-[154px] md:px-5 md:py-5">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(248,201,75,0.20)_0%,rgba(118,91,33,0.45)_100%)] shadow-[0_0_18px_rgba(198,156,44,0.08)]">
        {icon === "vision" ? (
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
            <circle cx="10" cy="10" r="5.5" stroke="#E0B13C" strokeWidth="1.7" />
            <path d="M14.4 14.4 20 20" stroke="#E0B13C" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="10" cy="10" r="1.8" fill="#E0B13C" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#E0B13C" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="4.2" stroke="#E0B13C" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="1.5" fill="#E0B13C" />
            <path d="M12 4v2.2M20 12h-2.2M12 20v-2.2M4 12h2.2" stroke="#E0B13C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>

      <h3
        className="mt-5 text-[#f4f4f4]"
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontSize: "15px",
          lineHeight: "1.25",
          fontWeight: 500,
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3 max-w-[330px] text-[#b6b6b8]"
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontSize: "11px",
          lineHeight: "1.7",
        }}
      >
        {description}
      </p>
    </article>
  );
}

export default function AboutTrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#080d14] px-6 py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(7,10,15,0.10),transparent_36%)]" />
      <div className="about-gold-orb pointer-events-none absolute -left-[10%] top-[34%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,156,62,0.28)_0%,rgba(201,156,62,0.12)_36%,transparent_72%)] blur-3xl" />
      <div className="about-gold-orb-delayed pointer-events-none absolute right-[-8%] top-[-4%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,156,62,0.24)_0%,rgba(201,156,62,0.10)_34%,transparent_72%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="ml-[clamp(8px,3vw,36px)] flex items-center gap-3">
          <span className="h-px w-5 bg-[#b08a46]" />
          <p
            className="text-[9px] font-medium uppercase tracking-[0.36em] text-[#b08a46]"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
          >
            Who We Are ???
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[500px] text-center">
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(24px, 2.9vw, 34px)",
              lineHeight: "1.15",
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            Expertise that Builds Trust, Precision
            <br />
            that Ensures Growth
          </h2>

          <p
            className="mx-auto mt-5 max-w-[430px] text-left text-white/52 sm:text-center"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "11px",
              lineHeight: "1.5",
              letterSpacing: "0.02em",
            }}
          >
            At XFLEX, we specialize in delivering smart taxation and auditing
            solutions, specially tailored to the evolving needs of businesses
            in the UAE market
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[804px] gap-4 md:mt-16 md:grid-cols-2 md:gap-[14px]">
          <div className="md:mr-[8px]">
            <AboutCard
              icon="vision"
              title="Our Vision"
              description="To become the most trusted tax partner in the UAE, helping businesses grow with confidence."
            />
          </div>

          <div className="md:ml-[8px] md:translate-y-[42px]">
            <AboutCard
              icon="values"
              title="Our Values"
              description="Integrity in every action, absolute data precision, and total compliance with tax and financial regulations."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
