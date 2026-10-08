import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Mouse-following glow over a faded grid, after the 21st.dev "Marketing
   Hero Section" (uiable/block-hero). The glow position lives in two CSS
   custom properties so the pointer handler never re-renders React; the
   server renders it parked at the top centre, which is also where it stays
   on touch devices and under reduced motion. */
export default function Spotlight({
  children,
  className,
  style,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "section" | "div";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("spotlight", className)}
      style={style}
    >
      <div className="spotlight__grid" aria-hidden="true" />
      <div className="spotlight__glow" aria-hidden="true" />
      {children}
    </Tag>
  );
}
