import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop Component
 * 1. Handles instant scroll-to-top on route changes for better UX.
 * 2. Provides a sleek, animated scroll progress bar at the top of the page.
 * 3. Shows a premium floating button for smooth manual scrolling back to top.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Framer Motion scroll progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Automatically scroll to top when the route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Monitor scroll position to show/hide the back-to-top button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Smooth Progress Bar at the Top */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-black origin-left z-[101]"
                style={{ scaleX }}
            />

            {/* Back to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="fixed bottom-10 right-10 z-[100] group flex items-center justify-center"
                        aria-label="Scroll to top"
                    >
                        {/* Magnetic Background Effect */}
                        <div className="absolute inset-0 bg-black rounded-none transition-all duration-300 group-hover:scale-110 shadow-[0_20px_60px_rgba(0,0,0,0.3)]" />

                        <div className="relative p-4 text-white overflow-hidden">
                            <div className="flex flex-col items-center">
                                <ArrowUp className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-12" />
                                <ArrowUp className="w-5 h-5 absolute translate-y-12 transition-transform duration-500 group-hover:translate-y-0" />
                            </div>
                        </div>

                        {/* Technical Accents */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-black/20 group-hover:border-black transition-colors" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-black/20 group-hover:border-black transition-colors" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
