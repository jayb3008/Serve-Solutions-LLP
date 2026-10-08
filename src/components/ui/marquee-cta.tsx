import type { ReactNode } from "react";

/* Closing call-to-action after the 21st.dev "Worth Keeping CTA"
   (ziegfiroyt/cta69): a giant, faint word marquee scrolls behind a centred
   heading, note and pill button. The marquee is decorative CSS animation,
   duplicated once so the -50% loop is seamless. */
export default function MarqueeCta({
  label,
  title,
  note,
  words,
  children,
}: {
  label: string;
  title: ReactNode;
  note?: ReactNode;
  words: string;
  children: ReactNode;
}) {
  return (
    <section className="mcta">
      <div className="mcta__marquee" aria-hidden="true">
        <div className="mcta__track">
          <span>{words}</span>
          <span>{words}</span>
        </div>
      </div>
      <div className="wrap mcta__body">
        <div className="mcta__label">({label})</div>
        <h2 className="mcta__title">{title}</h2>
        {note ? <p className="mcta__note">{note}</p> : <div className="mcta__gap" />}
        {children}
      </div>
    </section>
  );
}
