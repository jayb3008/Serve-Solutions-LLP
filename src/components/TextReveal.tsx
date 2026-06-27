import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function WordReveal({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, Math.min(end, 1)], [0.1, 1]);

  return (
    <motion.span
      style={{ opacity, display: "inline-block" }}
    >
      {word}
    </motion.span>
  );
}

export default function TextReveal({ text, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ position: "relative", ...style }}>
      <p
        style={{
          fontFamily: "var(--display)",
          fontSize: "clamp(26px, 3.8vw, 56px)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          lineHeight: 1.18,
          display: "flex",
          flexWrap: "wrap",
          gap: "0 0.3em",
          rowGap: "0.1em",
          margin: 0,
        }}
      >
        {words.map((word, i) => {
          const segSize = 1 / words.length;
          const start = i * segSize;
          const end = (i + 1.5) * segSize;
          return (
            <WordReveal
              key={`${word}-${i}`}
              word={word}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}
      </p>
    </div>
  );
}
