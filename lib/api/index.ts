import { executeWordPressQuery } from "@/lib/apollo";
import {
  getFallbackPricingPlans,
  getFallbackServices,
  getFallbackTestimonials,
} from "@/lib/api/fallbacks";
import { sortPricingPlans, transformPricingPlan, transformService, transformTestimonial } from "@/lib/api/transformers";
import type {
  GraphQLLanguage,
  LandingContent,
  Locale,
  PricingQueryResponse,
  PricingPlan,
  ServiceCard,
  ServicesQueryResponse,
  TestimonialItem,
  TestimonialsQueryResponse,
} from "@/lib/api/types";
import { GET_PRICING_QUERY, GET_SERVICES_QUERY, GET_TESTIMONIALS_QUERY } from "@/lib/queries";

const localeToGraphQLLanguage: Record<Locale, GraphQLLanguage> = {
  en: "EN",
  ar: "AR",
};

function isCompleteService(card: ServiceCard): boolean {
  return Boolean(card.title && card.front && card.back.length);
}

function isCompletePricingPlan(plan: PricingPlan): boolean {
  return Boolean(plan.title && plan.price && plan.items.length);
}

function isCompleteTestimonial(item: TestimonialItem): boolean {
  return Boolean(item.name && item.text && item.image);
}

async function getServices(locale: Locale): Promise<ServiceCard[]> {
  try {
    const data = await executeWordPressQuery<ServicesQueryResponse, { language: GraphQLLanguage }>(
      GET_SERVICES_QUERY,
      { language: localeToGraphQLLanguage[locale] },
      { tags: [`services:${locale}`] }
    );

    const services = (data.services?.nodes ?? []).map(transformService).filter(isCompleteService);
    return services.length ? services : getFallbackServices(locale);
  } catch (error) {
    console.error("Failed to fetch services from WordPress:", error);
    return getFallbackServices(locale);
  }
}

async function getPricingPlans(locale: Locale): Promise<PricingPlan[]> {
  try {
    const data = await executeWordPressQuery<PricingQueryResponse, { language: GraphQLLanguage }>(
      GET_PRICING_QUERY,
      { language: localeToGraphQLLanguage[locale] },
      { tags: [`pricing:${locale}`] }
    );

    const pricingPlans = sortPricingPlans(
      (data.pricingPlans?.nodes ?? []).map(transformPricingPlan).filter(isCompletePricingPlan)
    );

    return pricingPlans.length ? pricingPlans : getFallbackPricingPlans(locale);
  } catch (error) {
    console.error("Failed to fetch pricing plans from WordPress:", error);
    return getFallbackPricingPlans(locale);
  }
}

async function getTestimonials(locale: Locale): Promise<TestimonialItem[]> {
  try {
    const data = await executeWordPressQuery<TestimonialsQueryResponse, { language: GraphQLLanguage }>(
      GET_TESTIMONIALS_QUERY,
      { language: localeToGraphQLLanguage[locale] },
      { tags: [`testimonials:${locale}`] }
    );

    const testimonials = (data.testimonials?.nodes ?? [])
      .map((node, index) => transformTestimonial(node, index))
      .filter(isCompleteTestimonial);

    return testimonials.length ? testimonials : getFallbackTestimonials(locale);
  } catch (error) {
    console.error("Failed to fetch testimonials from WordPress:", error);
    return getFallbackTestimonials(locale);
  }
}

export async function getLandingContent(locale: Locale): Promise<LandingContent> {
  const [services, pricingPlans, testimonials] = await Promise.all([
    getServices(locale),
    getPricingPlans(locale),
    getTestimonials(locale),
  ]);

  return {
    services,
    pricingPlans,
    testimonials,
  };
}
