export interface Project {
  title: string;
  slug: string;
  category: string;
  industries: string[];
  shortDescription: string;
  tags: string[];
  hasFullCaseStudy?: boolean | null;
  hoverImage?: string | null;
  heroImage?: string | null;
  videoDesktop?: string | null;
  logoDark?: string | null;
  logoWhite?: string | null;
}

export interface CaseStudyData {
  title: string;
  slug: string;
  shortDescription: string;
  metaDescription: string;
  category: string;
  tags: string[];
  industries: string[];
  heroImage?: string | null;
  videoDesktop?: string | null;
  logoWhite?: string | null;
  logoDark?: string | null;
  clientStory?: string;
  stats?: { label: string; value: string }[];
  deliverables?: string[];
  challenge?: string;
  solution?: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  gallery?: {
    url: string;
    caption?: string;
  }[];
  nextSlug?: string;
  nextTitle?: string;
}

export interface JobPosting {
  title: string;
  department: string;
  location: string;
  url: string;
}

export interface CityItem {
  title: string;
  imageUrl?: string | null;
}
