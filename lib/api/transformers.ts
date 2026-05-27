import type {
  PricingPlan,
  ServiceCard,
  TestimonialItem,
  WordPressPricingNode,
  WordPressServiceNode,
  WordPressTestimonialNode,
} from "@/lib/api/types";

const testimonialAvatars = ["/avatar/4.png", "/avatar/1.jpg", "/avatar/3.png", "/avatar/2.webp"];

function normalizeText(value: string | null | undefined): string {
  return value?.replace(/\r\n/g, "\n").trim() ?? "";
}

function cleanStringArray(values: Array<string | null> | string | null | undefined): string[] {
  if (typeof values === "string") {
    return values
      .split(/\r?\n|[•·]/)
      .map((value) => value.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean);
  }

  return (values ?? [])
    .filter((value): value is string => Boolean(value?.trim()))
    .map((value) => value.trim());
}

export function transformService(node: WordPressServiceNode): ServiceCard {
  return {
    title: normalizeText(node.title),
    front: normalizeText(node.serviceFields?.shortDescription),
    back: cleanStringArray(node.serviceFields?.features),
  };
}

export function transformPricingPlan(node: WordPressPricingNode): PricingPlan {
  return {
    title: normalizeText(node.title),
    price: normalizeText(node.pricingFields?.price),
    items: cleanStringArray(node.pricingFields?.features),
    highlighted: Boolean(node.pricingFields?.highlighted),
  };
}

export function transformTestimonial(node: WordPressTestimonialNode, index: number): TestimonialItem {
  const position = normalizeText(node.testimonialFields?.clientPosition);
  const company = normalizeText(node.testimonialFields?.company);
  const role = [position, company].filter(Boolean).join(" - ");

  return {
    name: normalizeText(node.title),
    role,
    text: normalizeText(node.testimonialFields?.review),
    image: testimonialAvatars[index] ?? testimonialAvatars[0],
    rating: Math.max(1, Math.min(5, Math.round(node.testimonialFields?.rating ?? 5))),
  };
}

export function sortPricingPlans(plans: PricingPlan[]): PricingPlan[] {
  const highlightedIndex = plans.findIndex((plan) => plan.highlighted);

  if (highlightedIndex <= 0 || plans.length < 3) {
    return plans;
  }

  const nextPlans = [...plans];
  const [highlightedPlan] = nextPlans.splice(highlightedIndex, 1);
  nextPlans.splice(1, 0, highlightedPlan);
  return nextPlans;
}
