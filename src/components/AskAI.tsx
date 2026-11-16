import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./ui/section-head";
import { rise } from "../lib/motion";
import { askAiLinks } from "../data/askAi";

/* Page-level "Ask AI" section: the footer carries a compact row of these
   links on every page; this is the prominent version for Home, About and
   Contact. The pitch only works because the answer is genuinely not ours —
   so this stays a set of plain prefilled-query links, nothing embedded. */
export default function AskAI() {
  return (
    <section className="s" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Don't take our word for it"
          title={
            <>
              Ask AI about <em>Satvix.</em>
            </>
          }
          note="An instant, independent rundown of who we are and what we ship — from the assistant you already use."
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {askAiLinks.map(({ label, href }, i) => (
            <motion.a
              key={label}
              {...rise(i)}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask ${label} about Satvix Tech Solutions (opens in a new tab)`}
              className="btn-outline"
              data-hover
            >
              {label} <ArrowUpRight size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
