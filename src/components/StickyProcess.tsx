import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

interface Props {
  steps: ProcessStep[];
}

function StepCard({ step, progress, index, total }: {
  step: ProcessStep;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const segStart = index / total;
  const segEnd = (index + 1) / total;

  const opacity = useTransform(progress, [
    Math.max(0, segStart - 0.05),
    segStart + 0.05,
    segEnd - 0.05,
    segEnd,
  ], [0.3, 1, 1, 0.3]);

  const scale = useTransform(progress, [
    Math.max(0, segStart - 0.05),
    segStart + 0.05,
  ], [0.97, 1]);

  const accentW = useTransform(progress, [segStart, segEnd], ["0%", "100%"]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="sp-card"
    >
      <div className="sp-num">{step.n}</div>
      <div className="sp-content">
        <div className="sp-title">{step.title}</div>
        <div className="sp-desc">{step.desc}</div>
        <motion.div className="sp-bar" style={{ width: accentW }} />
      </div>
    </motion.div>
  );
}

export default function StickyProcess({ steps }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="sp-wrap">
      <div className="sp-sticky">
        {steps.map((step, i) => (
          <StepCard
            key={step.n}
            step={step}
            progress={scrollYProgress}
            index={i}
            total={steps.length}
          />
        ))}
      </div>
    </div>
  );
}
