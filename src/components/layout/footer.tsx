
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">Serve<span className="text-brand-darkBlue dark:text-white">Solutions</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Technology services for your business growth—IT consulting, digital solutions, and software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">b-2, gokuldham greens, Bhavanipura, Petlad, Anand</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">99040 55986</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">jaydev3008@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Subscribe to Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white dark:bg-gray-800"
              />
              <Button size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Serve Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
