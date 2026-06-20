import { useRef, type ReactNode, type CSSProperties } from 'react';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps content and makes it subtly follow the cursor on hover (a common
 * premium-agency interaction). SSR-safe: all geometry reads happen inside
 * pointer handlers, never at render time.
 */
export default function Magnetic({ children, strength = 0.3, className, style }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer:coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ display: 'inline-block', transition: 'transform .4s cubic-bezier(.7,0,.2,1)', ...style }}
    >
      {children}
    </span>
  );
}
