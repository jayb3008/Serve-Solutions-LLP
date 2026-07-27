import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { clampDescription } from "../lib/meta";

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

const BASE_URL = "https://www.satvixtech.com";
/* Social preview default. 1200x630 is the ratio Facebook, LinkedIn, X and
   WhatsApp all crop to; the 1024x512 logo was letterboxed by most of them.
   JPEG rather than WebP because link-preview crawlers remain inconsistent
   about WebP support. */
const DEFAULT_IMAGE = `${BASE_URL}/images/satvix-og-default.jpg`;
const OG_IMAGE_WIDTH = "1200";
const OG_IMAGE_HEIGHT = "630";
const COMPANY_NAME = "Satvix Tech Solutions";
const COMPANY_LEGAL = "Satvix Tech Solutions LLP";
const TODAY = new Date().toISOString().slice(0, 10);

const SEO = ({
  title = "Satvix Tech Solutions — Premium Software Engineering & Digital Product Agency",
  description = "Satvix Tech Solutions is a premium digital product and software engineering agency in Anand, Gujarat. We build robust web platforms, mobile apps, and custom AI systems with dedicated product teams.",
  keywords = "Satvix Tech Solutions, satvixtech, software engineering agency, digital product agency India, senior React Native Next.js developers, custom software development company, offshore engineering services US UK startups",
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  breadcrumb,
  datePublished = TODAY,
  dateModified = TODAY,
  faq,
  service,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = url || `${BASE_URL}${location.pathname === "/" ? "/" : location.pathname}`;
  /* Open Graph requires absolute URLs. Pages that pass a root-relative path
     (e.g. "/images/foo.jpg") previously emitted it verbatim, which every
     link-preview crawler failed to resolve. */
  const imageUrl = /^https?:\/\//.test(image) ? image : `${BASE_URL}${image}`;
  /* Single clamp point so no page can ship a description Google will cut
     mid-word. Long copy is trimmed on a sentence or word boundary here rather
     than being hand-trimmed in 20 page components. */
  const metaDescription = clampDescription(description);
  /**
   * SERP title format: "Page title — Satvix Tech Solutions".
   * Page-specific copy leads (it is what wins the click); brand sits at the
   * tail so the brand keyword still surfaces and brand search resolves.
   * If the title already carries the brand in any form — the full name, or the
   * short "Satvix Tech" that several landing-page titles use — we leave it
   * alone. Matching only the full name double-branded those titles.
   */
  const siteTitle = /satvix/i.test(title) ? title : `${title} — ${COMPANY_NAME}`;

  /* ── Organisation ── */
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY_NAME,
    legalName: COMPANY_LEGAL,
    alternateName: ["Satvix", "SatvixTech", "Satvix Tech"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 1024,
      height: 512,
    },
    description,
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 10,
    },
    founders: [{ "@type": "Person", name: "Founder" }],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
      "Machine Learning",
      "UI/UX Design",
      "DevOps",
      "Cloud Architecture",
      "React",
      "Next.js",
      "Node.js",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anand",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      postalCode: "388001",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7016427729",
        email: "hello@satvixtech.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7016427729",
        email: "hello@satvixtech.com",
        contactType: "sales",
        areaServed: ["IN", "US", "GB"],
        availableLanguage: "en",
      },
    ],
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
    image: imageUrl,
    url: BASE_URL,
    telephone: "+91-7016427729",
    email: "hello@satvixtech.com",
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
    "@id": `${currentUrl}#webpage`,
    url: currentUrl,
    name: siteTitle,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    datePublished,
    dateModified,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "ReadAction",
      target: [currentUrl],
    },
  };

  /* ── WebSite (home only) ── */
  /* Compare with the trailing slash normalised away — the home page's
     canonical is `${BASE_URL}/` while BASE_URL itself has no trailing slash,
     and a strict equality check silently dropped WebSite from every page. */
  const isHomePage = currentUrl.replace(/\/$/, "") === BASE_URL.replace(/\/$/, "");
  const webSiteSchema =
    type === "website" && isHomePage
      ? {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          url: BASE_URL,
          name: COMPANY_NAME,
          description,
          publisher: { "@id": `${BASE_URL}/#organization` },
          /* No SearchAction: the site has no /search route, and robots.txt
             disallows /*?* so the URL pattern could not be crawled anyway.
             Declaring a Sitelinks Searchbox the site cannot service is a
             validation error against ourselves. */
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
        url: currentUrl,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: currentUrl,
          servicePhone: "+91-7016427729",
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
          image: [imageUrl],
          url: currentUrl,
          datePublished,
          dateModified,
          author: { "@id": `${BASE_URL}/#organization` },
          publisher: { "@id": `${BASE_URL}/#organization` },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${currentUrl}#webpage` },
        }
      : null;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={metaDescription} />
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
      <link rel="canonical" href={currentUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@satvixtech" />
      <meta name="twitter:creator" content="@satvixtech" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={siteTitle} />

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
