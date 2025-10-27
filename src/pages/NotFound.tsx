import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-white/90 shadow-lg transition-colors"
            >
              <Home className="mr-2" size={20} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </button>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you're looking for something specific, try these popular pages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/services/"
              className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio/"
              className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            >
              Our Portfolio
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
