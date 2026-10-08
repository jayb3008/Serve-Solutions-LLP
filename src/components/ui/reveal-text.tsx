import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

/* Scroll-triggered word reveal after the 21st.dev "Text Reveal (Mask)"
   (soralabs/text-reveal-mask): each word rises out of its own overflow
   mask, un-blurring as it goes, staggered left to right. Inline markup such
   as <em> is kept — its words animate inside it, so emphasis colour
   survives. Every word stays in the prerendered HTML; only its transform
   and opacity start hidden, exactly like the other scroll-ins on the site. */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word = {
  hidden: { y: "105%", opacity: 0, filter: "blur(6px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

function split(node: ReactNode, key = "w"): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) =>
      /^\s*$/.test(part) ? (
        part
      ) : (
        <span key={`${key}-${i}`} className="rt-mask">
          <motion.span variants={word} className="rt-word">
            {part}
          </motion.span>
        </span>
      ),
    );
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => split(child, `${key}-${i}`));
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(
      el,
      { key },
      split(Children.toArray(el.props.children), key),
    );
  }
  return node;
}

export default function RevealText({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="rt"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {split(children)}
    </motion.span>
  );
}
