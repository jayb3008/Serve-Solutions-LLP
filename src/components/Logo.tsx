import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  /** "light" = white lettering for dark backgrounds (footer). */
  variant?: 'dark' | 'light';
}

/* The official Satvix wordmark, cut out of the brand artwork with its
   background removed (public/brand/). Two renders of the same file: dark
   ink for light surfaces, white ink for dark ones — the red marks are
   identical in both. width/height are the intrinsic 640×147 so the browser
   reserves the right box before the image loads (no layout shift); CSS sets
   the rendered height and width follows. */
export default function Logo({ className, style, variant = 'dark' }: LogoProps) {
  return (
    <img
      src={variant === 'light' ? '/brand/satvix-logo-light.png' : '/brand/satvix-logo.png'}
      alt="Satvix Tech Solutions"
      width={640}
      height={147}
      className={className}
      decoding="async"
      style={{ width: 'auto', height: '100%', display: 'block', ...style }}
    />
  );
}
