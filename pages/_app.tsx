import type { AppProps } from "next/app";
import "../src/index.css";
import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  defaultSEO,
  generateStructuredData,
  mergeSEO,
  routeSEO,
} from "../src/lib/seo";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "../src/components/ui/resizable-navbar";
import Footer from "../src/components/Footer";
import { AnimatedThemeToggler } from "../src/components/ui/animated-theme-toggler";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = router.asPath?.split("?")[0] || "/";
  const routeKey =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  const seo = useMemo(() => {
    const override = routeSEO[routeKey] || routeSEO[pathname] || undefined;
    const merged = mergeSEO(defaultSEO, override);
    const canonical = `${defaultSEO.url}${routeKey === "/" ? "" : routeKey}`;
    return { ...merged, url: canonical };
  }, [routeKey, pathname]);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about/" },
    { name: "Services", link: "/services/" },
    { name: "Solutions", link: "/industries/" },
    { name: "Portfolio", link: "/portfolio/" },
    { name: "Process", link: "/process/" },
    { name: "Blog", link: "/blog/" },
    { name: "Careers", link: "/careers/" },
    { name: "Contact", link: "/contact/" },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content={seo.type} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Serve Solutions LLP" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:site" content="@servesolutions" />

        {/* Icons & PWA basics */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-32x32.png"
        />
        <meta name="theme-color" content="#0b1220" />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateStructuredData({
                name: "Serve Solutions LLP",
                url: defaultSEO.url,
                description: defaultSEO.description,
              })
            ),
          }}
        />
        {/* JSON-LD WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Serve Solutions LLP",
              url: defaultSEO.url,
              inLanguage: "en-IN",
              potentialAction: {
                "@type": "SearchAction",
                target: `${defaultSEO.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler
              className="h-9 w-9 grid place-items-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            />
            <NavbarButton href="/contact/" variant="gradient">
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-3">
              <AnimatedThemeToggler
                className="h-9 w-9 grid place-items-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              />
              <NavbarLogo />
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                className="w-full px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-full pt-2 border-t border-gray-200">
              <NavbarButton
                href="/contact/"
                variant="gradient"
                className="w-full justify-center"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
