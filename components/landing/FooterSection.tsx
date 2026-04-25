import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#cta" },
];

function ContactIcon({ type }: { type: "email" | "phone" | "location" }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
        <rect x="5" y="6" width="14" height="12" rx="2" stroke="#C79E43" strokeWidth="1.5" />
        <path d="m6.5 8 5.5 4 5.5-4" stroke="#C79E43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
        <path d="M8.2 4.8c.4-.4 1-.5 1.5-.2l2 1c.6.3.9 1 .7 1.7l-.5 1.8a1 1 0 0 0 .2.9l1.5 1.5a1 1 0 0 0 .9.2l1.8-.5c.7-.2 1.4.1 1.7.7l1 2c.3.5.2 1.1-.2 1.5l-1 1c-.9.9-2.2 1.3-3.4 1-2.2-.6-4.4-1.9-6.3-3.8S5.4 10.1 4.8 7.9c-.3-1.2.1-2.5 1-3.4l1-1Z" stroke="#C79E43" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="none">
      <path d="M12 20s5-5.2 5-9a5 5 0 1 0-10 0c0 3.8 5 9 5 9Z" stroke="#C79E43" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.8" fill="#C79E43" />
    </svg>
  );
}

function ContactRow({
  type,
  label,
  value,
}: {
  type: "email" | "phone" | "location";
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#3F3218_0%,#2E2412_100%)]">
        <ContactIcon type={type} />
      </div>
      <div>
        <div
          className="uppercase text-[#6E7682]"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "7px",
            lineHeight: "1.2",
            letterSpacing: "0.18em",
          }}
        >
          {label}
        </div>
        <div
          className="mt-1 text-[#D2D7DF]"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "11px",
            lineHeight: "1.5",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <footer className="border-t border-white/6 bg-[#0B0F15] px-6 py-10 md:px-12">
      <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[1.8fr_0.7fr_0.6fr]">
        <div>
          <div className="relative h-[54px] w-[72px]">
            <Image src="/logo.png" alt="XFLEX" fill className="object-contain object-left" />
          </div>

          <p
            className="mt-2 text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "12px",
              lineHeight: "1.35",
              fontWeight: 600,
            }}
          >
            Professional Tax Firm in Dubai,UAE
          </p>

          <div className="mt-5 space-y-4">
            <ContactRow type="email" label="EMAIL" value="x@xflex.ae" />
            <ContactRow type="phone" label="PHONE" value="00971504772299" />
            <ContactRow
              type="location"
              label="LOCATION"
              value="Al Khabeesi Building - Office:(1-01) 4th St - Al Khabaisi -Deira -DubaiUAE"
            />
          </div>
        </div>

        <div>
          <h3
            className="text-[#D1A54B]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "10px",
              lineHeight: "1.2",
              fontWeight: 500,
            }}
          >
            Quick links
          </h3>

          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#D6D9DE] transition hover:text-white"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "10px",
                    lineHeight: "1.4",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-[#D1A54B]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "10px",
              lineHeight: "1.2",
              fontWeight: 500,
            }}
          >
            Newz
          </h3>

          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="#"
                className="text-[#D6D9DE] transition hover:text-white"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "10px",
                  lineHeight: "1.4",
                }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1100px] flex-col gap-3 border-t border-white/6 pt-5 text-[#B1B7C1] md:flex-row md:items-center md:justify-between">
        <p
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "8px",
            lineHeight: "1.4",
          }}
        >
          &copy; 2020 Lift Media. All right reserved
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {["Term of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
            <a
              key={item}
              href="#"
              className="underline underline-offset-2 transition hover:text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "8px",
                lineHeight: "1.4",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
