export interface HeroContent {
  tagline: string;
  title: string;
  description: string;
}

export interface DetailsOneContent {
  title: string;
  paragraph: string;
  /** Optional brand name for "Welcome to X" (e.g. "Sand & Vows" for Goa). Defaults to "Shaadifilms". */
  welcomeBrand?: string;
}

export type WhyShaadifilmsIconKey = "users" | "sparkles" | "video";

export interface WhyShaadifilmsItem {
  title: string;
  desc: string;
  iconKey: WhyShaadifilmsIconKey;
  img: string;
  alt: string;
}

export interface WhyShaadifilmsContent {
  title: string;
  subtitle: string;
  items: WhyShaadifilmsItem[];
}

export interface Venue {
  id: number;
  name: string;
  location: string;
  image: string;
}

export interface WeddingVenuesContent {
  title: string;
  subtitle: string;
  tabHotelsLabel: string;
  tabFarmhousesLabel: string;
  luxuryHotels: Venue[];
  farmhousesResorts: Venue[];
}

export interface PhotographyPhoto {
  id: number;
  src: string;
  alt: string;
}

export interface PhotographyPortfolioContent {
  title: string;
  subtitle: string;
  photos: PhotographyPhoto[];
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  image: string;
}

export interface ClientsSaysContent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionContent {
  title: string;
  subtitle: string;
  faqs: FaqItem[];
}

export interface StorySectionContent {
  title: string;
  description: string;
  ctaText: string;
}

export interface WeddingLocationContent {
  hero: HeroContent;
  detailsOne: DetailsOneContent;
  whyShaadifilms: WhyShaadifilmsContent;
  weddingVenues: WeddingVenuesContent;
  photographyPortfolio: PhotographyPortfolioContent;
  clientsSays: ClientsSaysContent;
  faqSection: FaqSectionContent;
  storySection: StorySectionContent;
}
