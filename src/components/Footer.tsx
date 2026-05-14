import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <div className="foot-logo">Sarve<em> Solutions</em></div>
            <p>An independent digital product studio. We build software, brands, and experiences with founders and forward-thinking teams.</p>
          </div>

          {/* Studio */}
          <div>
            <h5>Studio</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">What we do</Link></li>
              <li><Link to="/services/ai-ml">AI &amp; ML</Link></li>
              <li><Link to="/industries">Industries</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@sarvesolutions.in">info@sarvesolutions.in</a></li>
              <li><a href="tel:+919904055986">+91-9904055986</a></li>
              <li><span style={{ color: 'rgba(244,239,230,.6)' }}>Anand, Gujarat · India</span></li>
            </ul>
          </div>
        </div>

        <div className="foot-mark">Sarve<em>·</em>Solutions<em>·</em>{year}</div>

        <div className="foot-bottom">
          <div>© {year} Sarve Solutions · All rights reserved</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
