import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "@/lib/motion";

type Shot = { img: string; alt: string; href: string };

/* The hero's three fanned screenshots. Entrance and scroll parallax live on
   separate elements: one transform per element, so the entrance `y` can
   never overwrite the tilt (it used to — the side shots rendered flat).
   As the hero scrolls away the side shots drift outwards and tilt further,
   and the centre one rises, so the fan opens up. */
export default function ParallaxShots({ shots }: { shots: Shot[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const side = useTransform(scrollYProgress, [0.3, 1], [0, 80]);
  const sideNeg = useTransform(side, (v) => -v);
  const tiltL = useTransform(scrollYProgress, [0.3, 1], [-5, -10]);
  const tiltR = useTransform(scrollYProgress, [0.3, 1], [5, 10]);
  const lift = useTransform(scrollYProgress, [0.3, 1], [0, -60]);

  const motionFor = [
    { x: sideNeg, rotate: tiltL, y: 30 },
    { y: lift },
    { x: side, rotate: tiltR, y: 30 },
  ];

  return (
    <div ref={ref} className="hero-shots" aria-label="Recent work">
      {shots.map((s, i) => (
        <motion.div
          key={s.href}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + i * 0.1, duration: 0.9, ease }}
          className={`hero-shot hero-shot--${i}`}
        >
          <motion.div style={motionFor[i]} className="hero-shot__frame">
            <Link to={s.href} data-hover>
              <img
                src={s.img}
                alt={s.alt}
                width={960}
                height={600}
                loading={i === 1 ? "eager" : "lazy"}
              />
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
