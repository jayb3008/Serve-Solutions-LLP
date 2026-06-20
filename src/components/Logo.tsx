import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ className, style }: LogoProps) {
  return (
    <svg
      viewBox="0 0 264 96"
      className={className}
      style={{
        width: 'auto',
        height: '100%',
        display: 'block',
        ...style
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SATVIX Lettermark */}
      <g fill="none" stroke="currentColor" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
        {/* S */}
        <path d="M 52,22 C 52,15 47,14 36,14 C 22,14 18,18 18,25 C 18,34 26,36 36,39 C 47,42 52,44 52,51 C 52,58 45,62 32,62 C 18,62 14,58 14,52" />
        
        {/* A (Red chevron) */}
        <path d="M 64,62 L 84,16 L 104,62" stroke="var(--accent)" />
        
        {/* T */}
        <path d="M 116,16 L 148,16 M 132,16 L 132,62" />
        
        {/* V */}
        <path d="M 158,16 L 176,62 L 194,16" />
        
        {/* I */}
        <path d="M 208,16 L 208,62" />
        
        {/* X - Black Stroke */}
        <path d="M 222,16 L 250,62" />
        
        {/* X - Red Stroke */}
        <path d="M 222,62 L 250,16" stroke="var(--accent)" />
      </g>

      {/* TECH SOLUTIONS Subtext & Accent Lines */}
      <g fill="currentColor">
        <text
          x="132"
          y="84"
          fontFamily="var(--sans)"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="0.4em"
          textAnchor="middle"
        >
          TECH SOLUTIONS
        </text>
      </g>
      
      {/* Left & Right Red Accent Lines */}
      <path
        d="M 14,80.5 L 52,80.5 M 212,80.5 L 250,80.5"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
