export default function FooterSection() {
  return (
    <footer className="bg-bg px-6 pb-14 pt-20 md:px-12">
      <div className="mx-auto grid max-w-[80rem] gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-[2rem] font-semibold tracking-[0.15rem] text-cta">XFLEX</p>
          <p className="mt-3 text-[1.25rem] font-bold">Professional Tax Firm in Dubai,UAE</p>
          <div className="mt-10 space-y-8">
            <p className="text-[1.125rem]"><span className="mr-3 text-[#62748E] uppercase">Email</span> x@xflex.ae</p>
            <p className="text-[1.125rem]"><span className="mr-3 text-[#62748E] uppercase">Phone</span> 00971504772299</p>
            <p className="max-w-[22rem] text-[1.125rem]"><span className="mr-3 text-[#62748E] uppercase">Location</span> Al Khabeesi Building - Office:(1-01) 4th St - Al Khabaisi -Deira -DubaiUAE</p>
          </div>
        </div>
        <div>
          <p className="text-base font-medium text-[#FFB900]">Quick links</p>
          <ul className="mt-6 space-y-[1.875rem] text-sm tracking-[0.075rem] text-textPrimary/70">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">About</a></li>
            <li><a href="#services">Pricing</a></li>
            <li><a href="#cta">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-base font-medium text-[#FFB900]">Newz</p>
          <p className="mt-6 text-[1.125rem]">FAQ</p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[80rem] flex-wrap items-center justify-between gap-4">
        <p className="text-sm">© 2020 Lift Media.All right reserved</p>
        <div className="flex gap-8 text-2xl underline">
          <a href="#">Term of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
