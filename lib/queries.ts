export const GET_SERVICES_QUERY = /* GraphQL */ `
  query GetServices($language: LanguageCodeFilterEnum!) {
    services(where: { language: $language }) {
      nodes {
        title
        slug
        serviceFields {
          shortDescription
          features
        }
      }
    }
  }
`;

export const GET_PRICING_QUERY = /* GraphQL */ `
  query GetPricing($language: LanguageCodeFilterEnum!) {
    pricingPlans(where: { language: $language }) {
      nodes {
        title
        pricingFields {
          price
          features
          highlighted
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS_QUERY = /* GraphQL */ `
  query GetTestimonials($language: LanguageCodeFilterEnum!) {
    testimonials(where: { language: $language }) {
      nodes {
        title
        testimonialFields {
          review
          clientPosition
          company
          rating
        }
      }
    }
  }
`;
