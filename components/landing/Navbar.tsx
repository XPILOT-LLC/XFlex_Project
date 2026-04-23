import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 px-4 pt-2 md:px-8 md:pt-[18px]">
      <header
        className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[auto_1fr_auto] items-center rounded-full border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-[12px]"
        style={{
          height: "clamp(60px, 5vw, 76px)",
          paddingInline: "clamp(18px, 2.7vw, 34px)",
          background:
            "linear-gradient(90deg, rgba(41,55,84,0.90) 0%, rgba(40,40,49,0.70) 54%, rgba(71,52,37,0.56) 100%)",
        }}
      >
        <a
          href="#home"
          className="relative flex shrink-0 items-center"
          style={{ width: "112px", height: "54px" }}
        >
          <Image
            src="/logo.png"
            alt="XFLEX"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <nav
          className="hidden items-center justify-center lg:flex"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            gap: "clamp(22px, 2vw, 42px)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-white/80 transition hover:text-white"
              style={{
                fontSize: "11px",
                lineHeight: "14px",
                letterSpacing: "0.14em",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="ml-auto inline-flex items-center justify-center rounded-[14px] bg-[#C5A059] font-medium text-[#120f0a] transition hover:brightness-110"
          style={{
            width: "clamp(150px, 12.2vw, 184px)",
            height: "clamp(38px, 3vw, 46px)",
            fontSize: "clamp(12px, 0.9vw, 14px)",
            letterSpacing: "0.02em",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Get consultation
        </a>
      </header>
    </div>
  );
}
