import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceInfo {
  name: string;
  description: string;
  serviceType?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile" | "product";
  breadcrumb?: { name: string; item: string }[];
  datePublished?: string;
  dateModified?: string;
  faq?: FAQItem[];
  service?: ServiceInfo;
}

const BASE_URL = "https://satvixtech.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;
const COMPANY_NAME = "SATVIX TECH SOLUTIONS";
const TODAY = "2026-06-20";

const SEO = ({
  title = "A studio for founders who ship software that lasts",
  description = "Satvix Tech Solutions is a small digital studio in Anand, Gujarat. We design, build and ship web, mobile and AI products with founders and operators who care about the work.",
  keywords = "Satvix Tech Solutions, IT consultancy India, software engineering Anand Gujarat, web development india, mobile app development, AI ML solutions India, custom software development India, digital product studio Gujarat",
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
  breadcrumb,
  datePublished = TODAY,
  dateModified = TODAY,
  faq,
  service,
}: SEOProps) => {
  const siteTitle =
    title === COMPANY_NAME || title.includes(COMPANY_NAME)
      ? title
      : `${COMPANY_NAME} | ${title}`;

  /* ── Organisation ── */
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY_NAME,
    alternateName: "Satvix Tech Solutions",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description,
    foundingDate: "2020",
    founders: [{ "@type": "Person", name: "Batukbhai Sarvaiya" }],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anand",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      postalCode: "388001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9904055986",
      email: "info@satvixtech.com",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://www.linkedin.com/company/satvix-tech-solution",
      "https://twitter.com/satvixtech",
      "https://www.instagram.com/satvixtech",
    ],
  };

  /* ── Local business ── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    image,
    url: BASE_URL,
    telephone: "+91-9904055986",
    email: "info@satvixtech.com",
    priceRange: "₹₹₹",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Bank Transfer, UPI, PayPal",
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anand",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      postalCode: "388001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5645,
      longitude: 72.9289,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Web Development" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mobile App Development" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI & ML Solutions" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Product Design" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Brand Strategy" },
        },
      ],
    },
  };

  /* ── WebPage ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: siteTitle,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    datePublished,
    dateModified,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "ReadAction",
      target: [url],
    },
  };

  /* ── WebSite (home only) ── */
  const webSiteSchema =
    type === "website" && url === BASE_URL
      ? {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          url: BASE_URL,
          name: COMPANY_NAME,
          description,
          publisher: { "@id": `${BASE_URL}/#organization` },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          inLanguage: "en-IN",
        }
      : null;

  /* ── BreadcrumbList ── */
  const breadcrumbSchema = breadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      }
    : null;

  /* ── FAQPage ── */
  const faqSchema =
    faq && faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : null;

  /* ── Service (service detail pages) ── */
  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        serviceType: service.serviceType || service.name,
        description: service.description,
        url,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: url,
          servicePhone: "+91-9904055986",
        },
      }
    : null;

  /* ── Article (portfolio case studies) ── */
  const articleSchema =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: siteTitle,
          description,
          image: [image],
          url,
          datePublished,
          dateModified,
          author: { "@id": `${BASE_URL}/#organization` },
          publisher: { "@id": `${BASE_URL}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
        }
      : null;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={COMPANY_NAME} />
      <meta name="theme-color" content="#121518" />
      <meta name="color-scheme" content="light" />
      <meta name="format-detection" content="telephone=no" />

      {/* ── Robots ── */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="bingbot" content="index, follow" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={url} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content={`${COMPANY_NAME} — ${title}`} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@satvixtech" />
      <meta name="twitter:creator" content="@satvixtech" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${COMPANY_NAME} — ${title}`} />

      {/* ── Structured data ── */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {webSiteSchema && (
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
