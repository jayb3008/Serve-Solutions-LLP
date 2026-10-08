import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { rise } from "@/lib/motion";
import RevealText from "./reveal-text";

/* Section heading used across the redesign: pill eyebrow, title, and an
   optional side note (or action) that drops under the title on narrow
   screens. On dark bands it picks up the `.dark` overrides in index.css. */
export default function SectionHead({
  eyebrow,
  title,
  note,
  action,
  center,
  as: H = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  note?: ReactNode;
  action?: ReactNode;
  center?: boolean;
  as?: "h2" | "h3";
}) {
  if (center) {
    return (
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <motion.div {...rise()} className="eyebrow">
          {eyebrow}
        </motion.div>
        <H className="s-title mx-auto">
          <RevealText>{title}</RevealText>
        </H>
        {note && (
          <motion.p {...rise(2)} className="h-note mx-auto mt-5">
            {note}
          </motion.p>
        )}
      </div>
    );
  }
  return (
    <div className="s-head">
      <div>
        <motion.div {...rise()} className="eyebrow">
          {eyebrow}
        </motion.div>
        <H className="s-title">
          <RevealText>{title}</RevealText>
        </H>
      </div>
      {note && (
        <motion.p {...rise(1)} className="h-note">
          {note}
        </motion.p>
      )}
      {action}
    </div>
  );
}
