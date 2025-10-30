import type { AppProps } from "next/app";
import "../src/index.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SarveSolutions</title>
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
