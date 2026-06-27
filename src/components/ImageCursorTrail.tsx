import { useRef, useEffect } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=300",
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
