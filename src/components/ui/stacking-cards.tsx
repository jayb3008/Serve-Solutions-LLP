import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* Scroll-driven card stack after the 21st.dev "Stacking Cards"
   (danielpetho/stacking-cards): each card pins a little lower than the one
   before it, and as the next card slides over, the ones underneath scale
   back so the pile reads as depth. Pinning is plain `position: sticky`
   (see `.stack-cards` in index.css), so with JS off — or on phones, where
   the cards are taller than the screen and the CSS turns pinning off — the
   cards simply sit in a column. Only the scale is driven by scroll. */

function StackItem({
  index,
  total,
  progress,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  // Cards further down the stack shrink less; the last one never shrinks.
  const target = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(progress, [index / total, 1], [1, target]);
  return (
    <div className="stack-cards__item" style={{ ["--i" as string]: index }}>
      <motion.div style={{ scale }} className="stack-cards__card">
        {children}
      </motion.div>
    </div>
  );
}

export default function StackingCards({ items }: { items: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="stack-cards">
      {items.map((item, i) => (
        <StackItem key={i} index={i} total={items.length} progress={scrollYProgress}>
          {item}
        </StackItem>
      ))}
    </div>
  );
}
