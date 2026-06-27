import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface HoverMember {
  name: string;
  role: string;
  image: string;
  href?: string;
}

interface Props {
  members: HoverMember[];
  defaultText?: string;
  globalHref?: string;
}

const ease = [0.7, 0, 0.2, 1] as [number, number, number, number];

export default function HoverMembers({
  members,
  defaultText = "OUR STUDIO",
  globalHref = "/about",
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = members.find((m) => m.name === hovered) ?? null;

  return (
    <div>
      {/* ── Avatar row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 4,
          flexWrap: "wrap",
          paddingBottom: 44, // room for the CTA button below expanded image
        }}
      >
        {members.map((m) => {
          const on = hovered === m.name;
          return (
            <div
              key={m.name}
              style={{ position: "relative", flexShrink: 0 }}
              onMouseEnter={() => setHovered(m.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Avatar image – grows on hover */}
              <motion.div
                animate={{
                  width: on ? 156 : 56,
                  height: on ? 156 : 56,
                  borderRadius: on ? 18 : 12,
                }}
                transition={{ duration: 0.42, ease }}
                style={{ overflow: "hidden", cursor: "pointer", willChange: "width, height" }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </motion.div>

              {/* Red circular CTA – appears below the expanded card */}
              <AnimatePresence>
                {on && (
                  <motion.a
                    href={m.href ?? globalHref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.26, ease }}
                    data-hover
                    style={{
                      position: "absolute",
                      bottom: -30,
                      left: "calc(50% - 26px)",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </motion.a>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ── Large sliding name / default text ── */}
      <div style={{ overflow: "hidden", marginTop: 32 }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={hovered ?? "__default"}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.38, ease }}
            style={{
              margin: 0,
              fontFamily: "var(--display)",
              fontSize: "clamp(60px, 12vw, 190px)",
              fontWeight: 500,
              letterSpacing: "-0.045em",
              lineHeight: 0.88,
              fontStyle: "italic",
              color: hovered ? "var(--accent)" : "transparent",
              WebkitTextStroke: hovered
                ? "none"
                : "1px rgba(255,255,255,0.14)",
            }}
          >
            {hovered ? hovered : defaultText}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Role label – slides in under the name ── */}
      <div style={{ minHeight: 32, marginTop: 16 }}>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.24, ease, delay: 0.1 }}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".14em",
                color: "rgba(255,255,255,.5)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 1,
                  background: "rgba(255,255,255,.3)",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {active.role}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
