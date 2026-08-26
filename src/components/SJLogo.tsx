import React from 'react';

interface SJLogoProps {
  className?: string;
  size?: number | string;
}

export const SJLogo: React.FC<SJLogoProps> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle outer circular cyber bezel */}
      <circle
        cx="18"
        cy="18"
        r="17"
        className="fill-black/80 stroke-white/15"
        strokeWidth="1.2"
      />

      {/* Sleek White 'S' Flowing Stroke */}
      <path
        d="M 19 11 H 13 C 10.79 11 9 12.79 9 15 C 9 17.21 10.79 19 13 19 H 16 C 18.21 19 20 20.79 20 23 C 20 25.21 18.21 27 16 27 H 10"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sleek Crimson Red 'J' Descending Hook */}
      <path
        d="M 23 11 H 27 V 21 C 27 24.31 24.31 27 21 27 H 19"
        stroke="#ef4444"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cyber Red Top Accent Point */}
      <circle cx="27" cy="11" r="1.6" fill="#ef4444" />
    </svg>
  );
};
