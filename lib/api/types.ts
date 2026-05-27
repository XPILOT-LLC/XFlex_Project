export type Locale = "en" | "ar";

export type GraphQLLanguage = "EN" | "AR";

export type ServiceCard = {
  title: string;
  front: string;
  back: string[];
};

export type PricingPlan = {
  title: string;
  price: string;
  items: string[];
  highlighted: boolean;
};

export type TestimonialItem = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

export type LandingContent = {
  services: ServiceCard[];
  pricingPlans: PricingPlan[];
  testimonials: TestimonialItem[];
};

export type ServicesQueryResponse = {
  services?: {
    nodes?: WordPressServiceNode[] | null;
  } | null;
};

export type PricingQueryResponse = {
  pricingPlans?: {
    nodes?: WordPressPricingNode[] | null;
  } | null;
};

export type TestimonialsQueryResponse = {
  testimonials?: {
    nodes?: WordPressTestimonialNode[] | null;
  } | null;
};

export type WordPressServiceNode = {
  title?: string | null;
  slug?: string | null;
  serviceFields?: {
    shortDescription?: string | null;
    features?: Array<string | null> | string | null;
  } | null;
};

export type WordPressPricingNode = {
  title?: string | null;
  pricingFields?: {
    price?: string | null;
    features?: Array<string | null> | string | null;
    highlighted?: boolean | null;
  } | null;
};

export type WordPressTestimonialNode = {
  title?: string | null;
  testimonialFields?: {
    review?: string | null;
    clientPosition?: string | null;
    company?: string | null;
    rating?: number | null;
  } | null;
};
