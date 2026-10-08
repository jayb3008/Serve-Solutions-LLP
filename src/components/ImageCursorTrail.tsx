import { useRef, useEffect } from "react";

/* Our own screens, not stock photography. This trail runs over the selected
   work section on a page that argues, in its own FAQ, "real case studies, not
   stock work" — six pexels.com office photos undercut that, and pulled six
   third-party requests on top of it. Everything here ships from /public. */
const IMAGES = [
  "/images/satvix_fintech_showcase.webp",
  "/images/glamour-jewelry.webp",
  "/images/charotar-soap.webp",
  "/images/hrms/hrms-owner-dashboard.webp",
  "/images/hrms/hrms-daybook.webp",
  "/images/hrms/hrms-employee-salary.webp",
];

const TRAIL_DELAY = 80;

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageCursorTrail({ children, className, style }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const indexRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastRef.current < TRAIL_DELAY) return;
      lastRef.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const img = imgRefs.current[indexRef.current];
      if (!img) return;

      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.setAttribute("data-status", "active");

      const current = img;
      setTimeout(() => current.setAttribute("data-status", "inactive"), 600);

      indexRef.current = (indexRef.current + 1) % IMAGES.length;
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {IMAGES.map((src, i) => (
        <img
          key={i}
          ref={(el) => {
            if (el) imgRefs.current[i] = el;
          }}
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          draggable={false}
          data-status="inactive"
          className="cursor-trail-img"
          style={{ left: 0, top: 0 }}
        />
      ))}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
