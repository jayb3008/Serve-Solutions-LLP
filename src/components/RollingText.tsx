import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  words: string[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ease = [0.7, 0, 0.2, 1] as const;

export default function RollingText({ words, interval = 3000, className, style }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const maxLen = Math.max(...words.map((w) => w.length));

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "middle",
        minWidth: `${maxLen * 0.55}em`,
        lineHeight: 1.3,
        ...style,
      }}
    >
      {/* Stable placeholder keeps the container height from collapsing */}
      <span style={{ visibility: "hidden", display: "block", lineHeight: "inherit" }} aria-hidden>
        {words[0]}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[idx]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-30%", opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          style={{
            display: "block",
            position: "absolute",
            inset: 0,
            lineHeight: "inherit",
          }}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
