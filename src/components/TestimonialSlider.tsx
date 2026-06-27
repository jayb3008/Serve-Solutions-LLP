import { useRef, useState, useCallback, useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  org: string;
}

interface Props {
  items: TestimonialItem[];
}

export default function TestimonialSlider({ items }: Props) {
  const [active, setActive] = useState(0);
  const [cw, setCw] = useState(0);
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const gap = 32;

  useEffect(() => {
    if (!trackRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setCw(entry.contentRect.width);
    });
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      const w = cw || trackRef.current?.offsetWidth || 800;
      const clamped = Math.max(0, Math.min(items.length - 1, idx));
      setActive(clamped);
      animate(x, -(clamped * (w + gap)), {
        type: "spring",
        stiffness: 260,
        damping: 32,
      });
    },
    [items.length, x, cw],
  );

  const cardW = cw || 800;

  return (
    <div>
      {/* Track */}
      <div style={{ overflow: "hidden", borderRadius: "var(--radius)" }} ref={trackRef}>
        <motion.div
          drag="x"
          dragElastic={0.04}
          dragConstraints={{
            left: -((items.length - 1) * (cardW + gap)),
            right: 0,
          }}
          style={{ x, display: "flex", gap }}
          onDragEnd={(_, info) => {
            const step = cardW + gap;
            const target = Math.round(
              (-x.get() + (info.velocity.x < -300 ? step : info.velocity.x > 300 ? -step : 0)) / step,
            );
            goTo(target);
          }}
        >
          {items.map((t, i) => (
            <div
              key={i}
              style={{
                minWidth: `${cardW}px`,
                maxWidth: `${cardW}px`,
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                padding: "clamp(32px, 5vw, 64px)",
                userSelect: "none",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              {/* Index counter */}
              <div
                style={{
                  position: "absolute",
                  top: "clamp(24px, 4vw, 48px)",
                  right: "clamp(24px, 4vw, 48px)",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </div>

              {/* Accent corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 240,
                  height: 240,
                  background:
                    "radial-gradient(circle at top left, rgba(227,30,36,0.07), transparent 65%)",
                  pointerEvents: "none",
                }}
              />

              {/* Opening quote */}
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(64px, 9vw, 120px)",
                  lineHeight: 0.7,
                  color: "var(--accent)",
                  fontStyle: "italic",
                  marginBottom: "clamp(20px, 3vw, 36px)",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "clamp(20px, 2.4vw, 32px)",
                  fontWeight: 400,
                  lineHeight: 1.38,
                  letterSpacing: "-.02em",
                  color: "var(--ink)",
                  margin: 0,
                  maxWidth: "34ch",
                  marginBottom: "clamp(32px, 5vw, 52px)",
                }}
              >
                {t.quote}
              </p>

              {/* Footer row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 24,
                  borderTop: "1px solid var(--line)",
                  paddingTop: 24,
                  flexWrap: "wrap",
                }}
              >
                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "var(--ink)",
                      color: "var(--bg)",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--display)",
                      fontStyle: "italic",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {t.org.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        letterSpacing: "-.01em",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: ".09em",
                        marginTop: 3,
                      }}
                    >
                      {t.role} · {t.org}
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                  <button
                    onClick={() => goTo(active - 1)}
                    disabled={active === 0}
                    aria-label="Previous testimonial"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "1px solid var(--line)",
                      background: "none",
                      cursor: active === 0 ? "not-allowed" : "pointer",
                      display: "grid",
                      placeItems: "center",
                      opacity: active === 0 ? 0.28 : 1,
                      transition: "all 0.25s ease",
                      color: "var(--ink)",
                    }}
                    onMouseEnter={(e) => {
                      if (active !== 0) {
                        e.currentTarget.style.background = "var(--ink)";
                        e.currentTarget.style.color = "var(--bg)";
                        e.currentTarget.style.borderColor = "var(--ink)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.color = "var(--ink)";
                      e.currentTarget.style.borderColor = "var(--line)";
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 12H5m7-7-7 7 7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goTo(active + 1)}
                    disabled={active === items.length - 1}
                    aria-label="Next testimonial"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border:
                        active === items.length - 1
                          ? "1px solid var(--line)"
                          : "1px solid var(--ink)",
                      background:
                        active === items.length - 1 ? "none" : "var(--ink)",
                      cursor:
                        active === items.length - 1
                          ? "not-allowed"
                          : "pointer",
                      display: "grid",
                      placeItems: "center",
                      opacity: active === items.length - 1 ? 0.28 : 1,
                      transition: "all 0.25s ease",
                      color:
                        active === items.length - 1
                          ? "var(--ink)"
                          : "var(--bg)",
                    }}
                    onMouseEnter={(e) => {
                      if (active !== items.length - 1) {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.borderColor = "var(--accent)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (active !== items.length - 1) {
                        e.currentTarget.style.background = "var(--ink)";
                        e.currentTarget.style.borderColor = "var(--ink)";
                      }
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: i === active ? 32 : 8,
              height: 8,
              borderRadius: 999,
              background: i === active ? "var(--accent)" : "var(--line)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
