import LandingPage from "@/components/landing/LandingPage";
import { getLandingContent } from "@/lib/api";
import type { Locale } from "@/lib/api/types";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function isSupportedLocale(locale: string): locale is Locale {
  return locale === "en" || locale === "ar";
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = await getLandingContent(locale);

  return <LandingPage content={content} />;
}
