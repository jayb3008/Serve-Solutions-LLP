import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin accent bar at the top of the viewport that tracks scroll progress.
 * Decorative only (aria-hidden); SSR-safe via framer-motion's useScroll.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'var(--accent)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9998,
      }}
    />
  );
}
