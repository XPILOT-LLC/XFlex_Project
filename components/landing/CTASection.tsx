import Image from "next/image";

const ctaBg = "https://www.figma.com/api/mcp/asset/9e1c3756-6757-4e74-a0a9-e5b604048c0b";

export default function CTASection() {
  return (
    <section id="cta" className="bg-bg">
      <div id="contact-form" className="px-6 pb-20 pt-16 md:px-12">
        <div className="mx-auto max-w-[30.5rem]">
          <h3 className="text-center text-[3.75rem] leading-[3.75rem]">Get in <span className="text-[#FE9A00]">Touch</span></h3>
          <p className="mt-4 text-center text-[1.125rem] leading-7 tracking-[-0.0275rem] text-[#62748E]">Let&apos;s discuss how we can help your business thrive</p>
          <form className="mt-12 space-y-4">
            <input className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none" placeholder="Full Name" />
            <input className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none" placeholder="Email Address" />
            <input className="h-[3.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 text-base text-white outline-none" placeholder="Phone Number" />
            <textarea className="h-[9.625rem] w-full rounded-[0.625rem] border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none" placeholder="How can we help you?" />
            <button type="button" className="h-[3.75rem] w-full rounded-[0.625rem] bg-gradient-to-r from-[#FE9A00] to-[#E17100] text-sm font-medium uppercase tracking-[0.0781rem] text-[#0A0A0F]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="relative min-h-[41.875rem] px-6 py-20 md:px-12">
        <Image src={ctaBg} alt="" fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,6,24,0.6)] via-[rgba(2,6,24,0.4)] to-[#020618]" />
        <div className="relative mx-auto max-w-[78.75rem] text-center">
          <h2 className="gold-gradient-text text-[2.5rem] font-medium leading-[6rem] tracking-[-0.15rem] md:text-[3rem]">
            Facing UAE Tax Risks? We Handle It For You.
          </h2>
          <p className="mx-auto max-w-[59rem] text-[1.5rem] leading-8 tracking-[0.0419rem] text-[#CAD5E2]">
            Work with certified tax professionals to stay compliant, avoid penalties, and protect your business.
          </p>
          <a href="#contact-form" className="mt-12 inline-block rounded-xl bg-cta px-9 py-7 text-base font-medium tracking-[0.075rem] text-bg">Book free consultation</a>
        </div>
      </div>
    </section>
  );
}
