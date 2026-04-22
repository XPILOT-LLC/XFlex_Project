import Image from "next/image";

const reviewer = "https://www.figma.com/api/mcp/asset/c394a903-38df-4507-a671-ac3dc0d18d8d";

export default function TestimonialsSection() {
  return (
    <section className="bg-bg px-6 py-20 md:px-12">
      <div className="mx-auto max-w-[90rem]">
        <p className="text-center font-cairo text-sm font-semibold uppercase tracking-[0.2625rem] text-cta">Testimonials.....</p>
        <h2 className="mt-6 text-center text-[2.25rem] font-medium leading-[2.8125rem]">What our clients say</h2>
        <p className="mt-4 text-center text-base tracking-[0.075rem] text-white/70">Trusted by businesses across the UAE.</p>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className={`relative rounded-[3.4375rem] bg-card px-7 pb-12 pt-14 ${item === 2 ? "md:scale-105" : ""}`}>
              <div className="absolute -top-11 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border border-cta/40">
                <Image src={reviewer} alt="Reviewer" fill unoptimized className="object-cover" />
              </div>
              <p className="text-center text-sm leading-[1.4375rem] text-white/90">
                We received a penalty from the FTA and didn&apos;t know how to proceed. XFLEX handled everything professionally.
              </p>
              <p className="mt-8 text-center text-[1.375rem] font-bold text-[#FFDA71]">Mohammed Al Nuaimi</p>
              <p className="text-center text-[0.9375rem] text-white/60">Managing Director - SME (Dubai)</p>
            </article>
          ))}
        </div>
        <div className="mt-20 grid gap-6 rounded-2xl bg-[#0f1623] p-10 md:grid-cols-2">
          <div>
            <h3 className="text-[3.75rem] leading-[3.75rem]">Meet Our <span className="text-[#FFB900]">Team</span></h3>
            <p className="mt-6 max-w-[27.9375rem] text-[1.125rem] leading-7 text-white/70">
              Best Corporate Tax Consultants in UAE with 20+ years of experience as international tax consultants.
            </p>
            <a href="#cta" className="mt-16 inline-block rounded-xl bg-cta px-9 py-7 text-base font-medium tracking-[0.075rem] text-bg">Book free consultation</a>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-center text-[1.75rem] font-medium">Dr. EBRAHIM ALI</p>
            <p className="mt-2 text-center text-xs uppercase tracking-[0.0375rem] text-[#FFB900]">Founder</p>
            <ul className="mt-8 list-disc space-y-4 pl-6 text-[1.25rem] tracking-[-0.0773rem]">
              <li>UAE Tax Consultant</li>
              <li>Registered Tax Agent - UAE FTA</li>
              <li>15+ Years Experience</li>
              <li>Specialist in Corporate Tax & VAT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
