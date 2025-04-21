import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

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
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                Serve<span className="text-brand-darkBlue">Solutions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex items-center text-gray-700 dark:text-gray-200 hover:text-brand-blue transition-colors ${
                      location.pathname === item.href
                        ? "text-brand-blue font-medium"
                        : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 dark:text-gray-200 hover:text-brand-blue transition-colors ${
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
                    className={`absolute left-0 mt-2 w-48 origin-top-left bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all z-50 ${
                      openSubmenu === item.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    } md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto`}
                  >
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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

          <div className="hidden md:flex">
            <Button asChild variant="ghost" className="mr-2">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-brand-blue"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 mt-4 bg-white/90"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-brand-blue py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-2 transition-all duration-300 ${
                        openSubmenu === item.name
                          ? "max-h-screen opacity-100 mt-2"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block text-sm text-gray-600 dark:text-gray-300 hover:text-brand-blue py-2"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-gray-700 dark:text-gray-200 hover:text-brand-blue py-2 ${
                      location.pathname === item.href
                        ? "text-brand-blue font-medium"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
