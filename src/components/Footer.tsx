import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Calendar } from 'lucide-react';
import Logo from './Logo';
import { social } from '../data/social';

export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { url: social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { url: social.instagram, Icon: Instagram, label: 'Instagram' },
    { url: social.github, Icon: Github, label: 'GitHub' },
    { url: social.calendly, Icon: Calendar, label: 'Book a call' },
  ].filter((s) => s.url);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <Link to="/" className="foot-logo" style={{ marginBottom: '20px', display: 'block' }} aria-label="Satvix Tech Solutions Home">
              <Logo style={{ height: '48px' }} />
            </Link>
            <p>Founder-led, AI-augmented engineering studio in Anand, Gujarat. Working with founders and agencies in the US, UK, EU and Australia. A real person replies within one business day.</p>
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
              <li><a href="mailto:hello@satvixtech.com">hello@satvixtech.com</a></li>
              <li><a href="tel:+917016427729">+91-7016427729</a></li>
              <li><span style={{ color: 'rgba(255,255,255,.6)' }}>Anand, Gujarat · India</span></li>
            </ul>
            {socialLinks.length > 0 && (
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {socialLinks.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      display: 'inline-grid',
                      placeItems: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,.14)',
                      color: 'rgba(255,255,255,.75)',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
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
