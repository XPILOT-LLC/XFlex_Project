import arMessages from "@/messages/ar.json";
import enMessages from "@/messages/en.json";
import type { LandingContent, Locale, PricingPlan, ServiceCard, TestimonialItem } from "@/lib/api/types";

type MessagesShape = typeof enMessages;

const messagesByLocale: Record<Locale, MessagesShape> = {
  en: enMessages,
  ar: arMessages as MessagesShape,
};

export function getFallbackServices(locale: Locale): ServiceCard[] {
  return (messagesByLocale[locale].services.cards as ServiceCard[]) ?? [];
}

export function getFallbackPricingPlans(locale: Locale): PricingPlan[] {
  return ((messagesByLocale[locale].pricing.plans as Array<Omit<PricingPlan, "highlighted">>) ?? []).map(
    (plan, index) => ({
      ...plan,
      highlighted: index === 1,
    })
  );
}

export function getFallbackTestimonials(locale: Locale): TestimonialItem[] {
  const avatars = ["/avatar/4.png", "/avatar/1.jpg", "/avatar/3.png", "/avatar/2.webp"];
  return ((messagesByLocale[locale].testimonials.items as Array<Omit<TestimonialItem, "image" | "rating">>) ?? []).map(
    (item, index) => ({
      ...item,
      image: avatars[index] ?? avatars[0],
      rating: 5,
    })
  );
}

export function getFallbackLandingContent(locale: Locale): LandingContent {
  return {
    services: getFallbackServices(locale),
    pricingPlans: getFallbackPricingPlans(locale),
    testimonials: getFallbackTestimonials(locale),
  };
}
