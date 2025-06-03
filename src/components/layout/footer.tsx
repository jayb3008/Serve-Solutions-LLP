import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate footer sections
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
        },
      }
    );

    // Animate bottom section
    gsap.fromTo(
      ".footer-bottom",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-bottom",
          start: "top 90%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 footer-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="footer-section">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                Serve
                <span className="text-brand-darkBlue dark:text-white">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
              Technology services for your business growth—IT consulting,
              digital solutions, and software development.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-500 hover:text-brand-blue transition-colors"
                  aria-label={`Visit our ${Icon.name} page`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/about", text: "About Us" },
                { to: "/services", text: "Services" },
                { to: "/portfolio", text: "Portfolio" },
                { to: "/blog", text: "Blog" },
                { to: "/contact", text: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition-colors text-sm sm:text-base flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  b-2, gokuldham greens, Bhavanipura, Petlad, Anand
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <a
                  href="tel:9904055986"
                  className="text-gray-600 dark:text-gray-300 text-sm sm:text-base hover:text-brand-blue transition-colors"
                >
                  99040 55986
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0" />
                <a
                  href="mailto:jaydev3008@gmail.com"
                  className="text-gray-600 dark:text-gray-300 text-sm sm:text-base hover:text-brand-blue transition-colors"
                >
                  jaydev3008@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white dark:bg-gray-800 text-sm sm:text-base"
                aria-label="Email for newsletter"
              />
              <Button size="sm" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 footer-bottom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              © {currentYear} Serve Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { href: "#", text: "Privacy Policy" },
                { href: "#", text: "Terms of Service" },
                { href: "#", text: "Cookie Policy" },
              ].map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-blue text-xs sm:text-sm transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
