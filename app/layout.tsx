import type { Metadata } from "next";
import { Poppins, Inter, Cairo, Cinzel } from "next/font/google";
import "./globals.css";
import FloatingButtons from "../components/ui/FloatingButtons";
import { I18nProvider } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XFLEX — UAE Tax & Auditing Experts",
  description:
    "Professional tax and auditing solutions tailored for businesses in the UAE.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${poppins.variable} ${cinzel.variable} ${inter.variable} ${cairo.variable} relative overflow-x-hidden w-full`}
      >
        <I18nProvider>
          {children}
          <FloatingButtons />
        </I18nProvider>
      </body>
    </html>
  );
}
