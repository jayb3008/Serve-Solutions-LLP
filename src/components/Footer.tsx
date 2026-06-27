import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <Link to="/" className="foot-logo" style={{ marginBottom: '20px', display: 'block' }} aria-label="Satvix Tech Solutions Home">
              <Logo style={{ height: '48px' }} />
            </Link>
            <p>A small, independent digital studio in Anand, Gujarat. We design, build, and ship software with founders and operators who care about the work.</p>
          </div>

          {/* Studio */}
          <div>
            <h5>Studio</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">What we do</Link></li>
              <li><Link to="/ai-development">AI &amp; ML</Link></li>
              <li><Link to="/graphic-design-branding">Graphic Design</Link></li>
              <li><Link to="/services/brand">Brand &amp; Strategy</Link></li>
              <li><Link to="/hire">Hire developers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:satvixtechsolutions@gmail.com">satvixtechsolutions@gmail.com</a></li>
              <li><a href="tel:+919904055986">+91-9904055986</a></li>
              <li><span style={{ color: 'rgba(255,255,255,.6)' }}>Anand, Gujarat · India</span></li>
            </ul>
          </div>
        </div>

        <div className="foot-mark">Satvix<em>·</em>Tech Solutions<em>·</em>{year}</div>

        <div className="foot-bottom">
          <div>© {year} Satvix Tech Solutions · All rights reserved</div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '12px 4px', display: 'inline-block' }}>Privacy</a>
            <a href="#" style={{ padding: '12px 4px', display: 'inline-block' }}>Terms</a>
            <a href="#" style={{ padding: '12px 4px', display: 'inline-block' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
