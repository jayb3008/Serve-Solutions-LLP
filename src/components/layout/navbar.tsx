import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Solutions",
    href: "#",
    submenu: [
      { name: "Web Development", href: "/services#web-development" },
      { name: "Mobile Apps", href: "/services#mobile-apps" },
      { name: "Custom Software", href: "/services#custom-software" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".mobile-menu", {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/95 dark:bg-gray-900/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
                Sarve<span className="text-brand-darkBlue">Solutions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex items-center text-sm xl:text-base text-gray-700 dark:text-gray-200 hover:text-brand-blue transition-colors px-2 py-1 ${
                      location.pathname === item.href
                        ? "text-brand-blue font-medium"
                        : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm xl:text-base text-gray-700 dark:text-gray-200 hover:text-brand-blue transition-colors px-2 py-1 ${
                      location.pathname === item.href
                        ? "text-brand-blue font-medium"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 transform ${
                      openSubmenu === item.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    } lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:pointer-events-auto`}
                  >
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-sm xl:text-base"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="text-sm xl:text-base">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 dark:text-gray-200 hover:text-brand-blue p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="lg:hidden mobile-menu overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-col space-y-2 pt-4 pb-6 border-t border-gray-200 dark:border-gray-700">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-brand-blue text-base font-medium py-2 px-3"
                      aria-expanded={openSubmenu === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-6 space-y-1 transition-all duration-300 ${
                        openSubmenu === item.name
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block text-sm text-gray-600 dark:text-gray-300 hover:text-brand-blue py-2 px-3"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenSubmenu(null);
                          }}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-blue py-2 px-3 ${
                      location.pathname === item.href ? "text-brand-blue" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 px-3">
              <Button
                variant="outline"
                asChild
                className="w-full text-base"
                size="lg"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button asChild className="w-full text-base" size="lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
