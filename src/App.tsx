import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, useState, useEffect } from "react";
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
} from "./components/ui/resizable-navbar";
import Footer from "./components/Footer";
import useScrollToTop from "./hook/useEffect";
import { AnimatedThemeToggler } from "./components/ui/animated-theme-toggler";

// Lazy load components for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Process = lazy(() => import("./pages/Process"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppContent() {
  useScrollToTop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Prefetch common routes when the app is idle
  useEffect(() => {
    const prefetch = () => {
      import("./pages/Services");
      import("./pages/Portfolio");
      import("./pages/Contact");
      import("./pages/About");
      import("./pages/Industries");
    };
    // Use requestIdleCallback if available to avoid competing with critical work
    const ric =
      (window as Window & typeof globalThis).requestIdleCallback ||
      ((cb: IdleRequestCallback) => setTimeout(cb, 1500));
    const id = ric(prefetch);
    return () => {
      const cic =
        (window as Window & typeof globalThis).cancelIdleCallback ||
        clearTimeout;
      cic(id);
    };
  }, []);

  const prefetchByPath: Record<string, () => Promise<void>> = {
    "/": () => import("./pages/Home").then(() => {}),
    "/about/": () => import("./pages/About").then(() => {}),
    "/services/": () => import("./pages/Services").then(() => {}),
    "/industries/": () => import("./pages/Industries").then(() => {}),
    "/portfolio/": () => import("./pages/Portfolio").then(() => {}),
    "/process/": () => import("./pages/Process").then(() => {}),
    "/blog/": () => import("./pages/Blog").then(() => {}),
    "/careers/": () => import("./pages/Careers").then(() => {}),
    "/testimonials/": () => import("./pages/Testimonials").then(() => {}),
    "/faq/": () => import("./pages/FAQ").then(() => {}),
    "/contact/": () => import("./pages/Contact").then(() => {}),
    "/privacy/": () => import("./pages/Privacy").then(() => {}),
  };

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
                to={item.link}
                className="w-full px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={() => {
                  const prefetch = prefetchByPath[item.link];
                  if (prefetch) void prefetch();
                }}
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/industries/" element={<Industries />} />
          <Route path="/portfolio/" element={<Portfolio />} />
          <Route path="/process/" element={<Process />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/careers/" element={<Careers />} />
          <Route path="/testimonials/" element={<Testimonials />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
