import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUp, X } from "lucide-react";
import { whatsappLink } from "../lib/leads";

/* WhatsApp's own glyph (Simple Icons, CC0). lucide has no brand icons, and a
   generic chat bubble does not read as "WhatsApp" at a glance. */
function WhatsAppGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const RING = 2 * Math.PI * 20; // circumference of the r=20 progress ring

/* Bottom-right action stack: back-to-top on top, WhatsApp anchored in the
   corner. WhatsApp never moves — back-to-top appears above it once the
   visitor has scrolled, so nothing jumps under a thumb that is reaching for
   the chat button.

   The greeting bubble appears once per visit after a few seconds and is
   client-only (starts hidden), so the prerendered HTML carries just the two
   plain controls. */
export default function FloatingActions() {
  const { pathname } = useLocation();
  const [bubble, setBubble] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  useEffect(() => scrollYProgress.on("change", setProgress), [scrollYProgress]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem("wa-bubble") === "closed";
    } catch {
      /* storage blocked — just show it */
    }
    if (dismissed) return;
    const t = setTimeout(() => setBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const closeBubble = () => {
    setBubble(false);
    try {
      sessionStorage.setItem("wa-bubble", "closed");
    } catch {
      /* ignore */
    }
  };

  const page = pathname === "/" ? "your homepage" : `satvixtech.com${pathname}`;
  const href = whatsappLink(
    `Hi Satvix! I was looking at ${page} and would like to talk about a project.`,
  );

  return (
    <div className="fab-stack">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            type="button"
            className="fab-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <svg className="fab-top__ring" viewBox="0 0 44 44" aria-hidden="true">
              <circle cx="22" cy="22" r="20" />
              <circle
                cx="22"
                cy="22"
                r="20"
                className="fab-top__fill"
                strokeDasharray={RING}
                strokeDashoffset={RING * (1 - progress)}
              />
            </svg>
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fab-wa">
        {bubble && (
          <div className="wa-bubble" role="status">
            <button type="button" className="wa-bubble__close" onClick={closeBubble} aria-label="Dismiss">
              <X size={14} />
            </button>
            <strong>Questions? Chat with us.</strong>
            <span>Message the team directly on WhatsApp — a real person reads it.</span>
          </div>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Chat with Satvix on WhatsApp"
          onClick={closeBubble}
          data-hover
        >
          <WhatsAppGlyph />
          <span className="wa-btn__ping" aria-hidden="true" />
          <span className="wa-btn__label" aria-hidden="true">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
