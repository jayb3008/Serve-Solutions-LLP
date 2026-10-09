import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Calendar, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { social } from '../data/social';

/* Dark closing band after the 21st.dev "Light Beam Footer with Giant
   Wordmark": a slow diagonal light shaft behind the link columns and a
   giant brand wordmark cropped by the bottom edge. Both are pure CSS
   (see `.site-footer` in index.css), so the prerendered HTML is final. */
export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { url: social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { url: social.instagram, Icon: Instagram, label: 'Instagram' },
    { url: social.github, Icon: Github, label: 'GitHub' },
    { url: social.calendly, Icon: Calendar, label: 'Book a call' },
  ].filter((s) => s.url);

  return (
    <footer className="site-footer dark">
      <div className="foot-beam" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="foot-top">
          <div>
            <p className="foot-kicker">Have a product in mind?</p>
            <a href="mailto:hello@satvixtech.com" className="foot-mail" data-hover>
              hello@satvixtech.com <ArrowUpRight size={28} strokeWidth={1.75} />
            </a>
          </div>
          <Link to="/contact" className="cta-btn foot-cta" data-hover>
            Start a project <span className="dot" />
          </Link>
        </div>

        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <Link to="/" className="foot-logo" style={{ display: 'block' }} aria-label="Satvix Tech Solutions Home">
              <Logo variant="light" style={{ height: '40px' }} />
            </Link>
            <p>Premium digital product and software engineering agency in Anand, Gujarat. Partnering with startups, agencies, and enterprises in the US, UK, EU, and Australia.</p>
            {socialLinks.length > 0 && (
              <div className="foot-social">
                {socialLinks.map(({ url, Icon, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Agency */}
          <div>
            <h5>Agency</h5>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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

          {/* Where we work — these city/region landing pages had no inbound
              internal links at all, so they received no internal PageRank and
              were reachable only via the sitemap. Descriptive anchors. */}
          <div>
            <h5>Where we work</h5>
            <ul>
              <li><Link to="/software-development-company-anand">Software development in Anand</Link></li>
              <li><Link to="/it-company-anand">IT company in Anand</Link></li>
              <li><Link to="/mobile-app-development-gujarat">Mobile app development in Gujarat</Link></li>
              <li><Link to="/ai-development-services-india">AI development services in India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@satvixtech.com">hello@satvixtech.com</a></li>
              <li><a href="tel:+917016427729">+91-7016427729</a></li>
              <li><span className="foot-muted">Anand, Gujarat · India</span></li>
            </ul>
          </div>
        </div>

        {/* Privacy / Terms / Cookies used to sit here pointing at href="#".
            Three dead links on every page of the site read worse than none,
            so they are out until the pages behind them exist. */}
        <div className="foot-bottom">
          <div>© {year} Satvix Tech Solutions · All rights reserved</div>
          <div>Built in Anand, shipped worldwide</div>
        </div>
      </div>

      <div className="foot-mark" aria-hidden="true">Satvix</div>
    </footer>
  );
}
