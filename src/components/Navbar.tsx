import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/' },
    { name: 'Services', path: '/services/' },
    { name: 'Portfolio', path: '/portfolio/' },
    { name: 'Blog', path: '/blog/' },
    { name: 'Contact', path: '/contact/' }, // Added Contact to nav items
  ];

  // Navbar styles based on state
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 border-b ${isScrolled
    ? 'bg-[#F3F3F3]/90 backdrop-blur-md border-zinc-200'
    : isHomePage
      ? 'bg-transparent border-transparent'
      : 'bg-[#F3F3F3] border-zinc-200'
    }`;

  const linkBaseClasses = "text-sm font-medium tracking-wide transition-colors duration-200 uppercase";
  const linkColorClasses = (path: string) => {
    if (location.pathname === path) return "text-black";
    return isScrolled || !isHomePage ? "text-zinc-600 hover:text-black" : "text-zinc-800 hover:text-black";
  };

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-black p-1.5 transition-transform group-hover:scale-105">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled || !isHomePage ? 'text-black' : 'text-black'
              }`}>
              SARVESOLUTIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.filter(item => item.name !== 'Contact').map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${linkBaseClasses} ${linkColorClasses(item.path)}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors duration-200 uppercase tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled || !isHomePage ? 'text-black' : 'text-black'
              }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#F3F3F3] border-t border-zinc-200 absolute w-full left-0 top-20 h-screen">
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium border-l-2 transition-all duration-300 ${location.pathname === item.path
                    ? 'border-black text-black bg-white'
                    : 'border-transparent text-zinc-600 hover:text-black hover:bg-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-8 bg-black text-white px-6 py-4 text-center font-medium uppercase tracking-wide hover:bg-zinc-800"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;