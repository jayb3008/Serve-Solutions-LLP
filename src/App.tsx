import { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import ProjectDetail from "./pages/ProjectDetail";
import ServiceDetail from "./pages/ServiceDetail";
import AiMl from "./pages/AiMl";
import ProductDesign from "./pages/ProductDesign";
import WebEngineering from "./pages/WebEngineering";
import MobileApps from "./pages/MobileApps";
import Brand from "./pages/Brand";
import GraphicDesign from "./pages/GraphicDesign";
import Hire from "./pages/Hire";
import Careers from "./pages/Careers";
import LocationLanding from "./pages/LocationLanding";
import FloatingActions from "./components/FloatingActions";

/* ── Animated routes (fade transition between pages) ──
   `initial={false}` keeps the first paint (and the prerendered HTML) at full
   opacity, so content is never hidden for crawlers; transitions only play on
   subsequent client-side navigations. */
function AnimatedRoutes() {
  const location = useLocation();
  // First paint (server + initial hydration) renders fully visible so content
  // is never hidden for crawlers; the fade-in only plays on later navigations.
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={firstRender.current ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.7, 0, 0.2, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/product-design" element={<ProductDesign />} />
          <Route
            path="/services/web-engineering"
            element={<WebEngineering />}
          />
          <Route path="/services/mobile" element={<MobileApps />} />
          <Route path="/services/ai-ml" element={<AiMl />} />
          <Route path="/services/brand" element={<Brand />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/:id" element={<ServiceDetail />} />

          {/* SEO Direct Service Paths */}
          <Route path="/web-development" element={<WebEngineering />} />
          <Route path="/mobile-app-development" element={<MobileApps />} />
          <Route path="/ai-development" element={<AiMl />} />
          <Route path="/ui-ux-design" element={<ProductDesign />} />
          <Route path="/devops-services" element={<ServiceDetail serviceId="devops" />} />
          <Route path="/cybersecurity-services" element={<ServiceDetail serviceId="cybersecurity" />} />
          <Route path="/data-engineering" element={<ServiceDetail serviceId="data-engineering" />} />
          <Route path="/ecommerce-development" element={<ServiceDetail serviceId="ecommerce" />} />
          <Route path="/iot-development" element={<ServiceDetail serviceId="iot" />} />
          <Route path="/qa-testing" element={<ServiceDetail serviceId="qa" />} />
          <Route path="/marketing-services" element={<ServiceDetail serviceId="marketing" />} />
          <Route path="/blockchain-development" element={<ServiceDetail serviceId="blockchain" />} />
          <Route path="/graphic-design-branding" element={<GraphicDesign />} />

          {/* Local / City SEO Pages */}
          <Route path="/software-development-company-anand" element={<LocationLanding slug="software-development-company-anand" />} />
          <Route path="/it-company-anand" element={<LocationLanding slug="it-company-anand" />} />
          <Route path="/mobile-app-development-gujarat" element={<LocationLanding slug="mobile-app-development-gujarat" />} />
          <Route path="/ai-development-services-india" element={<LocationLanding slug="ai-development-services-india" />} />

          {/* SEO Direct Industry Paths */}
          <Route path="/healthcare-software-development" element={<IndustryDetail industryId="healthcare" />} />
          <Route path="/fintech-software-development" element={<IndustryDetail industryId="finance" />} />
          <Route path="/education-software-development" element={<IndustryDetail industryId="education" />} />
          <Route path="/logistics-software-development" element={<IndustryDetail industryId="logistics" />} />
          <Route path="/restaurant-pos-development" element={<IndustryDetail industryId="on-demand" />} />
          <Route path="/jewelry-ecommerce-development" element={<IndustryDetail industryId="retail" />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── App shell (router-agnostic: BrowserRouter on the client, StaticRouter on the server) ── */
export function AppShell() {
  return (
    // reducedMotion="user": every framer animation on the site (reveals,
    // stacking cards, parallax) honours the OS reduce-motion setting.
    <MotionConfig reducedMotion="user">
      <div className="noise-overlay" />
      <ScrollProgress />
      <ScrollToTop />
      <FloatingActions />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
