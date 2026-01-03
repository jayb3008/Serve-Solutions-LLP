
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-b border-zinc-800">

          {/* Brand Column */}
          <div className="p-12 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-6 w-6 text-white" />
              <span className="text-xl font-bold tracking-tight">SERVE SOLUTIONS</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Engineering digital excellence through precision, innovation, and scalable architecture.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/serve-solutions" },
                { Icon: Twitter, href: "https://twitter.com/serve_solutions" },
                { Icon: Instagram, href: "https://www.instagram.com/serve.solutions" },
                { Icon: Facebook, href: "https://facebook.com/serve.solutions" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <item.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Industries', path: '/industries' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="p-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Capabilities</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'AI / ML', 'UI/UX Consultancy', 'DevOps & QA'].map((service) => (
                <li key={service} className="text-sm text-zinc-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="p-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-zinc-400 mr-3 mt-0.5" />
                <span className="text-sm text-zinc-300">contact@sarvesolutions.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-zinc-400 mr-3 mt-0.5" />
                <span className="text-sm text-zinc-300">+91-9904055986</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-zinc-400 mr-3 mt-0.5" />
                <span className="text-sm text-zinc-300">Anand, Gujarat<br />India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 px-12 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} SERVE SOLUTIONS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;