import { useState, type ReactNode, type CSSProperties } from "react";
import RevealText from "./ui/reveal-text";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AnimateIn from "./AnimateIn";

export type FaqEntry = { question: string; answer: string };

function FaqItem({
  n,
  q,
  a,
  open,
  onToggle,
}: {
  n: string;
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        data-hover
        style={{
          width: "100%",
          padding: "28px 0",
          display: "grid",
          gridTemplateColumns: "44px 1fr 48px",
          alignItems: "center",
          gap: 20,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: 12,
            color: "var(--muted)",
            letterSpacing: ".14em",
          }}
        >
          {n}
        </span>
        <h3
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(19px, 1.9vw, 25px)",
            fontWeight: 500,
            letterSpacing: "-.015em",
            lineHeight: 1.3,
            color: "var(--ink)",
            margin: 0,
          }}
        >
          {q}
        </h3>
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            display: "inline-grid",
            placeItems: "center",
            border: "1px solid var(--line)",
            transition:
              "transform .35s cubic-bezier(0.25, 1, 0.5, 1), background .2s ease, color .2s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            background: open ? "var(--ink)" : "transparent",
            color: open ? "var(--bg)" : "var(--ink)",
            flexShrink: 0,
            justifySelf: "end",
          }}
        >
          <Plus size={18} strokeWidth={1.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 68px 32px 64px" }}>
              <p
                style={{
                  fontSize: "clamp(15px, 1.15vw, 17px)",
                  lineHeight: 1.65,
                  color: "var(--ink-2)",
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FaqProps {
  faqs: FaqEntry[];
  eyebrow?: string;
  title?: ReactNode;
  sub?: ReactNode;
  defaultOpenIdx?: number | null;
  sectionStyle?: CSSProperties;
  maxWidth?: number;
}

export default function Faq({
  faqs,
  eyebrow = "Common questions",
  title = (
    <>
      Things people <em>ask us.</em>
    </>
  ),
  sub,
  defaultOpenIdx = 0,
  sectionStyle,
  maxWidth = 960,
}: FaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpenIdx);
  return (
    <section
      className="s"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg)",
        ...sectionStyle,
      }}
    >
      <div className="wrap">
        <div className="s-head">
          <AnimateIn direction="up">
            <div>
              <div className="eyebrow reveal">{eyebrow}</div>
              <h2 className="s-title" data-d="1">
                <RevealText>{title}</RevealText>
              </h2>
            </div>
          </AnimateIn>
          {sub && (
            <p
              className="reveal"
              data-d="2"
              style={{
                maxWidth: "34ch",
                color: "var(--ink-2)",
                fontSize: 16,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {sub}
            </p>
          )}
        </div>

        <div
          style={{
            maxWidth,
            margin: "0 auto",
            borderTop: "1px solid var(--line)",
          }}
        >
          {faqs.map((f, i) => (
            <FaqItem
              key={i}
              n={String(i + 1).padStart(2, "0")}
              q={f.question}
              a={f.answer}
              open={openIdx === i}
              onToggle={() => setOpenIdx((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
