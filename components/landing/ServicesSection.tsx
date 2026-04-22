const serviceCards = [
  { title: "Taxation Services", text: "Expert guidance on complex tax regulations and strategic planning." },
  { title: "Auditing Services", text: "Comprehensive financial audits and assurance services." },
  { title: "ESR & UBO Compliance", text: "Simplify your operations with complete corporate support solutions." },
];

const plans = [
  { title: "Essential Compliance", price: "From AED 3,500" },
  { title: "Growth & Monitoring", price: "From AED 7,500" },
  { title: "Tax Protection & Advisory", price: "Custom Pricing" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[85rem]">
        <p className="text-center font-cairo text-sm font-semibold uppercase tracking-[0.2625rem] text-cta">Our Services.....</p>
        <h2 className="mx-auto mt-6 max-w-[33.3125rem] text-center text-[2.25rem] font-medium leading-[2.8125rem]">
          Comprehensive solutions for your business
        </h2>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article key={card.title} className="glass-card min-h-[33.125rem] rounded-2xl p-10">
              <h3 className="mt-14 text-[1.5rem] font-medium leading-8">{card.title}</h3>
              <p className="mt-11 text-base leading-[1.625rem] text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
        <h3 className="mx-auto mt-24 max-w-[33.3125rem] text-center text-[2.25rem] font-medium leading-[2.8125rem]">
          Choose the Right Tax Structure for Your Business
        </h3>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <article key={plan.title} className={`rounded-2xl border border-white/20 bg-[#1B1B1C] p-8 ${i === 1 ? "md:-mt-8 md:min-h-[35rem]" : "md:min-h-[30.1875rem]"}`}>
              <h4 className="text-[2rem] font-bold leading-6">{plan.title}</h4>
              <p className="mt-8 text-[2rem] font-medium text-cta">{plan.price}</p>
              <a href="#cta" className="mt-12 inline-flex rounded-lg border border-white bg-[#FFB900]/50 px-8 py-3 text-lg">Subscribe</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
