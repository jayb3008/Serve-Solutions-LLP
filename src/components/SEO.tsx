
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
    title = "Serve Solutions - Engineering Digital Excellence",
    description = "Transforming ideas into scalable digital realities. Expert Web Development, Mobile Apps, AI/ML, and DevOps solutions.",
    keywords = "web development, mobile apps, software engineering, AI, ML, DevOps, digital transformation, Serve Solutions, IT consultancy India, healthcare tech, legal tech, logistics software, fintech, edtech, social media development, OTT platforms, insurtech, travel tech, manufacturing IoT, retail eCommerce, telecom solutions, construction tech, beauty lifestyle apps, sports analytics, on-demand services, marketplace platforms, QA, IoT engineering, technical growth marketing",
    image = "https://sarvesolutions.in/og-image.jpg",
    url = "https://sarvesolutions.in",
    type = "website",
    schemaType = "ProfessionalService",
    breadcrumb
}: SEOProps) => {
    const siteTitle = title.includes("Serve Solutions") ? title : `${title} | Serve Solutions`;

    // Base Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": schemaType,
        "name": "Serve Solutions",
        "alternateName": "Sarve Solutions",
        "url": "https://sarvesolutions.in",
        "logo": "https://sarvesolutions.in/logo.png",
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
            <meta name="author" content="Serve Solutions" />
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
            <meta property="og:site_name" content="Serve Solutions" />

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
