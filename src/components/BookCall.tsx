import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, X } from "lucide-react";
import { social } from "../data/social";

/* "Book a call" — opens the scheduler in a modal so the visitor never leaves
   the page. Renders nothing until `social.calendly` is set in
   src/data/social.ts; paste the link there and every BookCall on the site
   lights up.

   The scheduler is an iframe created only when the modal opens: no Calendly
   script, cookies or network requests for visitors who never click. */
export default function BookCall({
  className = "btn-outline",
  label = "Book a 30-min call",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  // Widened from the `as const` literal so this still type-checks while the
  // link is empty.
  const calendly: string = social.calendly;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!calendly) return null;

  const src = `${calendly}${calendly.includes("?") ? "&" : "?"}hide_gdpr_banner=1&primary_color=e31e24`;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} data-hover>
        <Calendar size={16} /> {label}
      </button>
      {open &&
        createPortal(
          <div
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Book a call with Satvix"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div className="book-modal__panel">
              <button
                type="button"
                className="book-modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
                autoFocus
              >
                <X size={18} />
              </button>
              <iframe src={src} title="Book a call with Satvix" loading="lazy" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
