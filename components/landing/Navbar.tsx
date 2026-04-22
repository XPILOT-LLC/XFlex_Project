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
    <header
      className="mx-auto mt-[12px] flex items-center"
      style={{
        width: "1288px",
        height: "90px",
        paddingLeft: "49px",
        paddingRight: "38px",
        borderRadius: "999px",
        border: "1px solid rgba(255, 255, 255, 0.22)",
        background: "linear-gradient(90deg, rgba(45,56,83,0.82) 0%, rgba(41,41,49,0.58) 52%, rgba(64,47,34,0.46) 100%)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.16)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <a
        href="#home"
        className="relative flex shrink-0 items-center"
        style={{ width: "86px", height: "58px" }}
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
        className="hidden items-center md:flex"
        style={{
          gap: "41px",
          marginLeft: "220px",
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-medium text-white/80 transition hover:text-white"
            style={{
              fontSize: "12px",
              lineHeight: "1",
              letterSpacing: "0.14em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#cta"
        className="ml-auto inline-flex items-center justify-center font-medium text-[#120f0a] transition hover:brightness-110"
        style={{
          minWidth: "192px",
          height: "48px",
          padding: "0 28px",
          borderRadius: "12px",
          background: "#C5A059",
          fontSize: "15px",
          letterSpacing: "0.02em",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
        }}
      >
        Get consultation
      </a>
    </header>
  );
}
