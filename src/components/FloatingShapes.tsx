import { motion } from "framer-motion";

const shapes = [
  {
    size: 100,
    top: "12%",
    left: "8%",
    shape: "circle",
    opacity: 0.14,
    yRange: 18,
    duration: 6.2,
    rotateRange: 15,
    delay: 0,
  },
  {
    size: 60,
    top: "55%",
    left: "5%",
    shape: "square",
    opacity: 0.12,
    yRange: 24,
    duration: 7.8,
    rotateRange: 30,
    delay: 1.1,
  },
  {
    size: 140,
    top: "20%",
    right: "6%",
    shape: "circle",
    opacity: 0.12,
    yRange: 14,
    duration: 8.5,
    rotateRange: 10,
    delay: 0.4,
  },
  {
    size: 40,
    top: "65%",
    right: "10%",
    shape: "square",
    opacity: 0.18,
    yRange: 28,
    duration: 5.4,
    rotateRange: 45,
    delay: 2.0,
  },
  {
    size: 80,
    top: "40%",
    left: "44%",
    shape: "circle",
    opacity: 0.08,
    yRange: 20,
    duration: 9.0,
    rotateRange: 20,
    delay: 0.7,
  },
];

export default function FloatingShapes() {
  return (
    <>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="floating-shape"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? (s as { right?: string }).right : undefined,
            borderRadius: s.shape === "circle" ? "50%" : "6px",
            border: `1.5px dashed var(--accent)`,
            opacity: s.opacity,
            zIndex: 1,
          }}
          animate={{
            y: [0, -s.yRange, 0, s.yRange, 0],
            rotate: [0, s.rotateRange, 0, -s.rotateRange, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
