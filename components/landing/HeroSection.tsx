import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "1026px" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,24,0.92)_0%,rgba(2,6,24,0.55)_45%,rgba(2,6,24,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,24,0.10)_0%,rgba(2,6,24,0.60)_100%)]" />
      </div>

      <div
        className="relative z-10 mx-auto flex h-full w-full flex-col"
        style={{ maxWidth: "1440px" }}
      >
        <Navbar />

        <div className="relative flex flex-1">
          <div className="flex flex-col justify-center" style={{ paddingLeft: "78px", paddingTop: "0px" }}>
            <h1
              className="font-medium text-white"
              style={{
                width: "790px",
                fontSize: "64px",
                lineHeight: "94px",
                letterSpacing: "1.2px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              Avoid FTA penalties &
              <br />
              stay 100% compliant in
              <br />
              UAE corporate tax
            </h1>

            <p
              className="font-medium"
              style={{
                width: "550px",
                marginTop: "21px",
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "1.2px",
                color: "rgba(255, 255, 255, 0.70)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              Trusted UAE tax advisors / FTA registered
              <br />
              15+ years experience
            </p>

            <div className="flex items-center" style={{ marginTop: "80px", gap: "40px" }}>
              <a
                href="#cta"
                className="inline-flex items-center justify-center font-medium transition hover:brightness-110"
                style={{
                  width: "302px",
                  height: "79px",
                  borderRadius: "12px",
                  background: "#C5A059",
                  fontSize: "18px",
                  letterSpacing: "0.015em",
                  color: "#120f0a",
                  boxShadow: "0 10px 28px rgba(197, 160, 89, 0.18)",
                }}
              >
                Book free consultation
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center font-medium text-white/[0.92] transition hover:bg-white/[0.06]"
                style={{
                  width: "242px",
                  height: "79px",
                  borderRadius: "12px",
                  border: "1px solid #C5A059",
                  fontSize: "18px",
                  letterSpacing: "0.015em",
                }}
              >
                Our services
              </a>
            </div>
          </div>

          <div
            className="absolute"
            style={{
              left: "900px",
              top: "40px",
              width: "601px",
              height: "727px",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "480px",
                height: "480px",
                background: "radial-gradient(circle, rgba(197,160,89,0.25) 0%, rgba(197,160,89,0.06) 50%, transparent 72%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative" style={{ width: "601px", height: "727px" }}>
              <div
                className="absolute"
                style={{
                  inset: 0,
                  zIndex: 1,
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/Group 1 .png"
                    alt="Hero graphic"
                    fill
                    priority
                    className="object-contain object-center"
                    style={{
                      transform: "scale(1.12)",
                    }}
                  />
                </div>
              </div>

              <div
                className="absolute flex flex-col items-center"
                style={{
                  left: "53%",
                  bottom: "-125px",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                  width: "220px",
                }}
              >
                <div
                  style={{
                    fontSize: "60px",
                    lineHeight: "105px",
                    letterSpacing: "0.264px",
                    textAlign: "center",
                    background: "linear-gradient(270deg, #C5A059 0%, #E8C88A 50%, #C5A059 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  +15
                </div>

                <span
                  style={{
                    marginTop: "4px",
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "0.2px",
                    color: "#90A1B9",
                    textAlign: "center",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Years Of Excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "20px" }}>
          <div
            className="flex items-start justify-center"
            style={{
              width: "28px",
              height: "48px",
              borderRadius: "999px",
              border: "2px solid rgba(197, 160, 89, 0.65)",
              padding: "8px 9px 0 9px",
              opacity: 0.85,
            }}
          >
            <div
              style={{
                width: "6px",
                height: "14px",
                borderRadius: "999px",
                background: "#C5A059",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
