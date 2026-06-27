import { useRef, useEffect } from "react";

interface Props {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  separator?: string;
}

export default function InfiniteMarquee({
  items,
  direction = "left",
  speed = 38,
  pauseOnHover = true,
  className,
  style,
  separator = "✦",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.animationDuration = `${speed}s`;
    track.style.animationDirection = direction === "right" ? "reverse" : "normal";
  }, [speed, direction]);

  const repeated = [...items, ...items];

  return (
    <div
      className={`im-root ${className ?? ""}`}
      style={style}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className={`im-track ${pauseOnHover ? "im-pause-hover" : ""}`}
      >
        {repeated.map((item, i) => (
          <span key={i} className="im-item">
            {item}
            <span className="im-sep">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
