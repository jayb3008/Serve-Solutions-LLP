import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';

const serviceItems = Object.entries(servicesData).map(([k, v]) => ({
  label: (v as { title: string }).title,
  desc: (v as { tagline: string }).tagline,
  path: `/services/${k}`,
}));

const industryItems = Object.entries(industriesData).map(([k, v]) => ({
  label: (v as { title: string }).title,
  path: `/industries/${k}`,
}));

const companyItems = [
  { label: 'About us', path: '/about', desc: 'Who we are & how we work' },
  { label: 'Portfolio', path: '/portfolio', desc: 'Selected case studies' },
  { label: 'Blog', path: '/blog', desc: 'Engineering & product writing' },
  { label: 'Careers', path: '/careers', desc: "We're hiring — join us" },
];

type MenuKey = 'services' | 'industries' | 'company' | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileExpand, setMobileExpand] = useState<MenuKey>(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close everything on navigation
  useEffect(() => {
    setMenuOpen(false);
    setOpen(null);
    setMobileExpand(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .meganav { position: relative; }
        .navdrop { position: relative; display: inline-flex; }
        .nav-item { position: relative; display: inline-flex; align-items: center; gap: 5px; padding: 8px 0; font-size: 14px; font-weight: 500; cursor: pointer; background: none; border: none; color: inherit; font-family: inherit; }
        .nav-item .chev { transition: transform .3s ease; }
        .nav-item.is-open .chev { transform: rotate(180deg); }
        .nav-item::after { content:""; position:absolute; left:0; right:0; bottom:2px; height:1px; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform .4s cubic-bezier(.7,0,.3,1); }
        .nav-item:hover::after, .nav-item.is-open::after, .nav-item.active::after { transform: scaleX(1); transform-origin: left; }
        .nav-item.active { color: var(--accent); }

        /* Panel: flush to the trigger (no dead gap), bridged by transparent top padding */
        .mega { position: absolute; top: 100%; left: 0; padding-top: 12px; width: min(720px, calc(100vw - 32px)); opacity: 0; visibility: hidden; transform: translateY(6px); transition: opacity .24s ease, transform .24s cubic-bezier(.7,0,.2,1); z-index: 60; }
        .mega.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .mega--right { left: auto; right: 0; }
        .mega--sm { width: 320px; }
        .mega__inner { background: var(--bg); border: 1px solid var(--line); border-radius: 18px; box-shadow: 0 24px 70px -24px rgba(18,21,24,.35); padding: 18px; }
        .mega__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2px; }
        .mega__grid--ind { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .mega__grid--one { grid-template-columns: minmax(0, 1fr); }
        .mega__link { display: block; min-width: 0; padding: 11px 13px; border-radius: 11px; transition: background .18s ease; }
        .mega__link:hover { background: var(--bg-2); }
        .mega__link .t { font-family: var(--display); font-size: 15px; font-weight: 500; letter-spacing: -.01em; display: block; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .mega__link .d { font-size: 12px; color: var(--muted); line-height: 1.4; margin-top: 2px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .mega__link--ind { padding: 10px 12px; font-family: var(--display); font-size: 14px; font-weight: 500; color: var(--ink); }
        .mega__foot { margin-top: 10px; padding-top: 14px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .mega__foot span { font-family: var(--mono); font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
        .mega__foot a { font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: .1em; color: var(--accent); font-weight: 500; white-space: nowrap; }

        @media (max-width: 1140px) { .nav-desktop { display: none !important; } .nav-hamburger { display: inline-flex !important; } }
        @media (min-width: 1141px) { .nav-hamburger { display: none !important; } }

        .m-acc { width: 100%; display:flex; align-items:center; justify-content:space-between; background:none; border:none; text-align:left; color: var(--bg); font-family: var(--display); font-weight: 500; font-size: clamp(26px,7vw,40px); letter-spacing:-.02em; padding: 13px 0; border-bottom: 1px solid rgba(255,255,255,.08); cursor: pointer; }
        .m-sub { display:flex; flex-direction:column; gap:2px; padding: 4px 0 14px; }
        .m-sub a { color: rgba(255,255,255,.7); font-size: 16px; padding: 7px 0; font-family: var(--sans); }
        .m-sub a:hover { color: var(--accent); }
      `}</style>

      <header id="nav" className={`site-nav meganav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="logo" data-hover style={{ display: 'flex', alignItems: 'center' }}>
          <Logo style={{ height: '42px' }} />
        </Link>

        <nav className="nav-links nav-desktop" aria-label="Main navigation" style={{ alignItems: 'center' }}>
          {/* Services */}
          <div className="navdrop" onMouseEnter={() => setOpen('services')} onMouseLeave={() => setOpen(null)}>
            <Link to="/services" className={`nav-item${open === 'services' ? ' is-open' : ''}`} aria-haspopup="true" aria-expanded={open === 'services'} data-hover>
              What we do <ChevronDown className="chev" size={14} />
            </Link>
            <div className={`mega${open === 'services' ? ' show' : ''}`}>
              <div className="mega__inner">
                <div className="mega__grid">
                  {serviceItems.map((s) => (
                    <Link key={s.path} to={s.path} className="mega__link" data-hover>
                      <span className="t">{s.label}</span>
                      <span className="d">{s.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="mega__foot">
                  <span>One team, end-to-end</span>
                  <Link to="/services" data-hover>All services →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="navdrop" onMouseEnter={() => setOpen('industries')} onMouseLeave={() => setOpen(null)}>
            <Link to="/industries" className={`nav-item${open === 'industries' ? ' is-open' : ''}`} aria-haspopup="true" aria-expanded={open === 'industries'} data-hover>
              Industries <ChevronDown className="chev" size={14} />
            </Link>
            <div className={`mega${open === 'industries' ? ' show' : ''}`}>
              <div className="mega__inner">
                <div className="mega__grid mega__grid--ind">
                  {industryItems.map((s) => (
                    <Link key={s.path} to={s.path} className="mega__link mega__link--ind" data-hover>
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="mega__foot">
                  <span>Deep domain expertise</span>
                  <Link to="/industries" data-hover>All industries →</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/hire" className={`nav-item${location.pathname === '/hire' ? ' active' : ''}`} data-hover onMouseEnter={() => setOpen(null)}>Hire</Link>
          <Link to="/portfolio" className={`nav-item${location.pathname.startsWith('/portfolio') ? ' active' : ''}`} data-hover onMouseEnter={() => setOpen(null)}>Work</Link>

          {/* Company */}
          <div className="navdrop" onMouseEnter={() => setOpen('company')} onMouseLeave={() => setOpen(null)}>
            <Link to="/about" className={`nav-item${open === 'company' ? ' is-open' : ''}`} aria-haspopup="true" aria-expanded={open === 'company'} data-hover>
              Company <ChevronDown className="chev" size={14} />
            </Link>
            <div className={`mega mega--right mega--sm${open === 'company' ? ' show' : ''}`}>
              <div className="mega__inner">
                <div className="mega__grid mega__grid--one">
                  {companyItems.map((s) => (
                    <Link key={s.path} to={s.path} className="mega__link" data-hover>
                      <span className="t">{s.label}</span>
                      <span className="d">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Link to="/contact" className="cta-btn nav-desktop" data-hover style={{ flexShrink: 0 }}>
          Start a project <span className="dot" />
        </Link>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{ display: 'none', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--ink)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'var(--ink)', color: 'var(--bg)', zIndex: 49, display: 'flex', flexDirection: 'column', padding: '92px 28px 40px', overflowY: 'auto' }}>
          <button className="m-acc" onClick={() => setMobileExpand((c) => (c === 'services' ? null : 'services'))}>
            What we do <ChevronDown size={22} style={{ transform: mobileExpand === 'services' ? 'rotate(180deg)' : 'none', transition: 'transform .3s ease' }} />
          </button>
          {mobileExpand === 'services' && (
            <div className="m-sub">
              {serviceItems.map((s) => <Link key={s.path} to={s.path}>{s.label}</Link>)}
              <Link to="/services" style={{ color: 'var(--accent)' }}>All services →</Link>
            </div>
          )}

          <button className="m-acc" onClick={() => setMobileExpand((c) => (c === 'industries' ? null : 'industries'))}>
            Industries <ChevronDown size={22} style={{ transform: mobileExpand === 'industries' ? 'rotate(180deg)' : 'none', transition: 'transform .3s ease' }} />
          </button>
          {mobileExpand === 'industries' && (
            <div className="m-sub">
              {industryItems.map((s) => <Link key={s.path} to={s.path}>{s.label}</Link>)}
              <Link to="/industries" style={{ color: 'var(--accent)' }}>All industries →</Link>
            </div>
          )}

          <Link to="/hire" className="m-acc">Hire</Link>
          <Link to="/portfolio" className="m-acc">Work</Link>
          <Link to="/about" className="m-acc">About</Link>
          <Link to="/blog" className="m-acc">Blog</Link>
          <Link to="/careers" className="m-acc">Careers</Link>

          <Link to="/contact" className="cta-btn" style={{ marginTop: 32, alignSelf: 'flex-start', background: 'var(--accent)', color: 'var(--ink)' }}>
            Start a project <span className="dot" style={{ background: 'var(--ink)' }} />
          </Link>
        </div>
      )}
    </>
  );
}
