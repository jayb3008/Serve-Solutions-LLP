import { useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

interface ScrollVelocityMarqueeProps {
  text: string;
  baseSpeed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollVelocityMarquee({
  text,
  baseSpeed = 1.5,
  className,
  style,
}: ScrollVelocityMarqueeProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const x = useMotionValue(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const vel = smoothVelocity.get();
    const clampedExtra = Math.min(Math.abs(vel) * 0.004, 6);
    const speed = baseSpeed + clampedExtra;

    // Move x by speed per frame (normalized to 60fps)
    const move = speed * (delta / 16.67);
    let newX = x.get() - move;

    // Get content width to loop at -50% of total (half = one repetition)
    const el = contentRef.current;
    if (el) {
      const contentWidth = el.scrollWidth / 4; // 4 repetitions
      if (Math.abs(newX) >= contentWidth) {
        newX = 0;
      }
    }

    x.set(newX);
  });

  const repeated = `${text}  `;

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        userSelect: "none",
        ...style,
      }}
      aria-hidden="true"
    >
      <motion.div
        ref={contentRef}
        style={{
          display: "inline-flex",
          x,
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              fontSize: "clamp(60px, 8vw, 120px)",
              fontFamily: "var(--display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: `rgba(18, 21, 24, 0.08)`,
              lineHeight: 1,
              padding: "0.2em 0.5em",
              flexShrink: 0,
            }}
          >
            {repeated}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
