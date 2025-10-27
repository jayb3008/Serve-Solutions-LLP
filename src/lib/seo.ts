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
