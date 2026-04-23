
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile' | 'product';
    schemaType?: 'Organization' | 'ProfessionalService' | 'TechArticle';
    breadcrumb?: { name: string; item: string }[];
}

const SEO = ({
    title = "Engineering Digital Excellence",
    description = "SARVE SOLUTIONS - Transforming ideas into scalable digital realities. Expert Web Development, Mobile Apps, AI/ML, and DevOps solutions.",
    keywords = "SARVE SOLUTIONS, Sarve Solutions, IT consultancy India, software engineering Anand Gujarat, web development india, mobile app development, artificial intelligence solutions, machine learning, DevOps services, digital transformation, healthcare tech, legal tech, logistics software, fintech solutions, edtech platforms, OTT development, insurtech, travel tech, manufacturing IoT, retail eCommerce, telecom solutions, construction tech, beauty lifestyle apps, sports analytics, on-demand service apps, marketplace platforms, software QA, IoT engineering, technical growth marketing, custom software development india, best IT company in Anand, top software house Gujarat",
    image = "https://sarvesolutions.in/og-image.jpg",
    url = "https://sarvesolutions.in",
    type = "website",
    schemaType = "ProfessionalService",
    breadcrumb
}: SEOProps) => {
    // Brand comes first as requested
    const siteTitle = title === "SARVE SOLUTIONS" || title.includes("SARVE SOLUTIONS") 
        ? title 
        : `SARVE SOLUTIONS | ${title}`;

    // Base Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SARVE SOLUTIONS",
        "alternateName": "Sarve Solutions",
        "url": "https://sarvesolutions.in",
        "logo": "https://sarvesolutions.in/logo.png",
        "description": description,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9904055986",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "Hindi", "Gujarati"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/serve-solutions",
            "https://twitter.com/serve_solutions",
            "https://www.instagram.com/serve.solutions"
        ]
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SARVE SOLUTIONS",
        "image": image,
        "@id": "https://sarvesolutions.in",
        "url": "https://sarvesolutions.in",
        "telephone": "+91-9904055986",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Anand",
            "addressLocality": "Anand",
            "addressRegion": "Gujarat",
            "postalCode": "388001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.5645,
            "longitude": 72.9289
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumb ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((b, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": b.name,
            "item": b.item
        }))
    } : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="SARVE SOLUTIONS" />
            <meta name="theme-color" content="#000000" />

            {/* Robots Tags for Google */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />

            {/* Google Site Verification */}
            <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="SARVE SOLUTIONS" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta name="twitter:site" content="@serve_solutions" />

            {/* Canonical link */}
            <link rel="canonical" href={url} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(orgSchema)}
            </script>

            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>

            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* WebSite Search Schema */}
            {type === 'website' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://sarvesolutions.in",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://sarvesolutions.in/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
