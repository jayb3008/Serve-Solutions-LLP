import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About',       path: '/about' },
  { label: 'What we do', path: '/services' },
  { label: 'Industries',  path: '/industries' },
  { label: 'AI / ML',    path: '/services/ai-ml' },
  { label: 'Portfolio',   path: '/portfolio' },
  { label: 'Blog',        path: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <style>{`
        @media (max-width: 980px) {
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger    { display: flex !important; }
        }
      `}</style>

      <header id="nav" className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="logo" data-hover>
          <span className="logo__mark"><span>S</span></span>
          Satvix Tech Solution
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={location.pathname === path ? 'active' : ''}
              data-hover
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="cta-btn nav-desktop-cta" data-hover>
          Start a project <span className="dot" />
        </Link>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, color: 'var(--ink)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--ink)', color: 'var(--bg)',
          zIndex: 49, display: 'flex', flexDirection: 'column',
          padding: '100px 28px 40px',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  fontFamily: 'var(--display)', fontWeight: 500,
                  fontSize: 'clamp(28px,8vw,56px)', letterSpacing: '-.02em',
                  lineHeight: 1.1, padding: '12px 0',
                  borderBottom: '1px solid rgba(244,239,230,.08)',
                  color: location.pathname === path ? 'var(--accent)' : 'var(--bg)',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="cta-btn"
            style={{ marginTop: 40, alignSelf: 'flex-start', background: 'var(--accent)', color: 'var(--ink)' }}
          >
            Start a project <span className="dot" style={{ background: 'var(--ink)' }} />
          </Link>
        </div>
      )}
    </>
  );
}
