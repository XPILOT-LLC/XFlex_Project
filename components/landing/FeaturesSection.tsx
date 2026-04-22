export default function FeaturesSection() {
  return (
    <section id="features" className="bg-bg px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[80rem]">
        <p className="font-cairo text-sm font-semibold uppercase tracking-[0.2625rem] text-cta">Why choose XFLEX</p>
        <h2 className="mt-5 text-[2.25rem] font-medium leading-[3.8125rem]">We Don&apos;t Just Manage Taxes</h2>
        <h3 className="max-w-[63.1875rem] bg-gradient-to-r from-[#C5A059] via-[#E8C88A] to-[#C5A059] bg-clip-text text-[3rem] font-bold leading-[4.375rem] tracking-[-0.09rem] text-transparent md:text-[4rem]">
          We Secure Your Business Future.
        </h3>
        <p className="mt-4 max-w-[28.9375rem] text-sm tracking-[0.075rem] text-white/80">
          Smart tax solutions that keep your business compliant, protected, and ready to grow.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            "Instant Tax Intelligence",
            "Proactive Risk Protection",
            "Strategic Growth Partner",
            "Our Vision and Values",
          ].map((title) => (
            <div key={title} className="glass-card rounded-2xl p-8">
              <h4 className="text-xl font-bold">{title}</h4>
              <p className="mt-2 text-base leading-[1.625rem] text-white/60">
                AI-driven insights and senior advisors aligned with your growth strategy and UAE compliance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
