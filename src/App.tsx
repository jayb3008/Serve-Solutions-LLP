import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import ProjectDetail from './pages/ProjectDetail';
import ServiceDetail from './pages/ServiceDetail';
import AiMl from './pages/AiMl';
import ProductDesign from './pages/ProductDesign';
import WebEngineering from './pages/WebEngineering';
import MobileApps from './pages/MobileApps';
import Brand from './pages/Brand';

/* ── Custom cursor ── */
function CursorTracker() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer:coarse)').matches) return;

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let cx = x, cy = y;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onEnter = (e: Event) => {
      if ((e.target as Element).closest('[data-hover], a, button'))
        cursorRef.current?.classList.add('hovering');
    };
    const onLeave = (e: Event) => {
      if ((e.target as Element).closest('[data-hover], a, button'))
        cursorRef.current?.classList.remove('hovering');
    };
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

/* ── Page loader ── */
function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.max(1, Math.round((100 - n) / 10));
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => {
          if (doneRef.current) return;
          doneRef.current = true;
          setIsDone(true);
          document.body.classList.add('ready');
          setTimeout(onDone, 1100);
        }, 250);
      }
      setCount(n);
    }, 40);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`loader${isDone ? ' is-done' : ''}`} aria-hidden="true">
      <span>
        <span style={{ fontVariantNumeric: 'tabular-nums', display: 'inline-block', minWidth: '3.5ch', textAlign: 'right' }}>
          {count}
        </span>
        <span className="loader__pct">%</span>
      </span>
    </div>
  );
}

/* ── Scroll-reveal observer (re-runs on route change) ── */
function RevealObserver() {
  const location = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }, 80);

    return () => { clearTimeout(timer); io.disconnect(); };
  }, [location.pathname]);

  return null;
}

/* ── App shell (router-agnostic: BrowserRouter on the client, StaticRouter on the server) ── */
export function AppShell() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      <CursorTracker />
      {showLoader && <Loader onDone={() => setShowLoader(false)} />}
      <ScrollToTop />
      <RevealObserver />
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/product-design" element={<ProductDesign />} />
            <Route path="/services/web-engineering" element={<WebEngineering />} />
            <Route path="/services/mobile" element={<MobileApps />} />
            <Route path="/services/ai-ml" element={<AiMl />} />
            <Route path="/services/brand" element={<Brand />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
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
