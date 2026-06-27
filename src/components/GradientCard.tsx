import { useRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  glowColor?: string;
};

export default function GradientCard({
  children,
  style,
  className,
  glowColor = "rgba(227,30,36,0.13)",
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer:coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--gx", `${x}%`);
    el.style.setProperty("--gy", `${y}%`);
    el.style.setProperty("--gvis", "1");
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.setProperty("--gvis", "0");
  };

  return (
    <div
      ref={ref}
      {...rest}
      className={`gradient-card-root ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--gx": "50%",
          "--gy": "50%",
          "--gvis": "0",
          "--gcolor": glowColor,
          position: "relative",
          ...style,
        } as React.CSSProperties
      }
    >
      <div className="gradient-card-glow" aria-hidden="true" />
      {children}
    </div>
  );
}
