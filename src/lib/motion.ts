export const ease = [0.25, 1, 0.5, 1] as [number, number, number, number];

/* Shared scroll-in for cards and headings. `once` so nothing re-hides on
   scroll back. Spread onto any motion element: <motion.div {...rise(i)}>. */
export const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay: i * 0.06, duration: 0.6, ease },
});
