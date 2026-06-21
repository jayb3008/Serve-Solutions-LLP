import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
import Hire from "./pages/Hire";
import Careers from "./pages/Careers";

/* ── Custom cursor ── */
function CursorTracker() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) return;

    let x = window.innerWidth / 2,
      y = window.innerHeight / 2;
    let cx = x,
      cy = y;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onEnter = (e: Event) => {
      if ((e.target as Element).closest("[data-hover], a, button"))
        cursorRef.current?.classList.add("hovering");
    };
    const onLeave = (e: Event) => {
      if ((e.target as Element).closest("[data-hover], a, button"))
        cursorRef.current?.classList.remove("hovering");
    };
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

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
          <Route path="/services/:id" element={<ServiceDetail />} />
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
    <>
      <div className="noise-overlay" />
      <CursorTracker />
      <ScrollProgress />
      <ScrollToTop />
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
