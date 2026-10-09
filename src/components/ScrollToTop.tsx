import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollToTop Component
 * 1. Handles instant scroll-to-top on route changes for better UX.
 * 2. Provides a sleek, animated scroll progress bar at the top of the page.
 * The back-to-top button lives in FloatingActions, stacked with WhatsApp.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

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

    return (
        /* Smooth Progress Bar at the Top */
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent)] origin-left z-[101]"
            style={{ scaleX }}
        />
    );
};

export default ScrollToTop;
