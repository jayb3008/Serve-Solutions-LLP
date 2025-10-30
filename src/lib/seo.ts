export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO = {
  title: "SarveSolutions - Digital Agency Website",
  description:
    "Professional web development, mobile apps, CMS solutions, UI/UX design, and SEO services to help your business grow online.",
  keywords:
    "Web Development, Mobile App Development, CMS Development, UI/UX Design, SEO Services, Digital Solutions, React Development, Node.js, MongoDB, AWS",
  image: "https://sarvesolutions.in/og-image.png",
  url: "https://sarvesolutions.in",
  type: "website",
};

export const generateStructuredData = (data: {
  name: string;
  url: string;
  description: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    description: data.description,
    logo: `${data.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9904055986",
      contactType: "Customer Service",
      email: "contact@sarvesolutions.in",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };
};

// Centralized per-route SEO overrides
export const routeSEO: Record<string, SEOProps> = {
  "/": {
    title: "SarveSolutions | Transforming Ideas Into Digital Excellence",
    description:
      "Full-stack web and mobile apps, UI/UX, cloud & DevOps, and digital transformation that drives growth.",
  },
  "/about": {
    title: "About SarveSolutions | Mission, Vision & Team",
    description:
      "Learn about our mission, vision, values, and the expert team behind SarveSolutions.",
  },
  "/services": {
    title: "Services | Web, Mobile, UI/UX, Cloud & Marketing",
    description:
      "End-to-end digital services: web development, mobile apps, UI/UX, cloud & DevOps, and digital marketing.",
  },
  "/industries": {
    title: "Solutions by Industry | Healthcare, FinTech, E‑commerce & More",
    description:
      "Tailored solutions across healthcare, fintech, e‑commerce, edtech, manufacturing, and non‑profit.",
  },
  "/portfolio": {
    title: "Portfolio | Case Studies and Delivered Projects",
    description:
      "Explore our case studies and success stories across industries and technologies.",
  },
  "/process": {
    title: "Our Process | Discovery to Launch & Support",
    description:
      "A transparent, proven process: discovery, strategy, development, launch, and ongoing support.",
  },
  "/blog": {
    title: "Blog | Insights on Tech, Design, and Growth",
    description:
      "Articles and insights on modern web, mobile, cloud, UI/UX, and digital growth.",
  },
  "/careers": {
    title: "Careers | Join SarveSolutions",
    description:
      "Grow your career with a team building impactful digital products and platforms.",
  },
  "/contact": {
    title: "Contact | Start Your Project with SarveSolutions",
    description:
      "Get in touch for quotes, consultations, or collaboration opportunities.",
  },
  "/faq": {
    title: "FAQ | Frequently Asked Questions",
    description:
      "Answers to common questions about our services, process, timelines, and pricing.",
  },
  "/privacy": {
    title: "Privacy Policy | SarveSolutions",
    description:
      "How we collect, use, and protect your data across our products and services.",
  },
  "/testimonials": {
    title: "Testimonials | What Our Clients Say",
    description:
      "See how we help clients achieve measurable results with technology.",
  },
  "/404": {
    title: "Page Not Found | SarveSolutions",
    description: "The page you are looking for does not exist.",
  },
};

export function mergeSEO(
  base: SEOProps,
  override?: SEOProps
): Required<SEOProps> {
  const merged: Required<SEOProps> = {
    title: override?.title || base.title || defaultSEO.title,
    description:
      override?.description || base.description || defaultSEO.description,
    keywords: override?.keywords || base.keywords || defaultSEO.keywords,
    image: override?.image || base.image || defaultSEO.image,
    url: override?.url || base.url || defaultSEO.url,
    type: override?.type || base.type || (defaultSEO.type as string),
  } as Required<SEOProps>;
  return merged;
}
