import React, { useEffect, useRef, useState } from 'react';
import { HERO_ASSETS, HERO_STATS, PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onOpenConnect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealDivRef = useRef<HTMLDivElement>(null);
  const gridPatternRef = useRef<SVGPatternElement>(null);

  // Mouse & Animation State
  const mousePos = useRef({ x: -999, y: -999, targetX: -999, targetY: -999 });
  const gridOffset = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rafId = useRef<number | null>(null);

  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  // Concentric arc calculations
  const cx = -110;
  const cy = 300;

  const polarToCartesian = (radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + radius * Math.cos(angleInRadians),
      y: cy + radius * Math.sin(angleInRadians),
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mousePos.current.targetX = x;
      mousePos.current.targetY = y;

      if (!hasMouseMoved) {
        setHasMouseMoved(true);
        if (mousePos.current.x === -999) {
          mousePos.current.x = x;
          mousePos.current.y = y;
        }
      }

      // Parallax Grid
      const normX = e.clientX / window.innerWidth;
      const normY = e.clientY / window.innerHeight;
      gridOffset.current.targetX = (normX - 0.5) * 16;
      gridOffset.current.targetY = (normY - 0.5) * 16;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
      if (!hasMouseMoved) {
        setHasMouseMoved(true);
        mousePos.current.x = x;
        mousePos.current.y = y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Canvas & rAF animation loop
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      if (!containerRef.current || !canvas) return;
      canvas.width = containerRef.current.clientWidth || window.innerWidth;
      canvas.height = containerRef.current.clientHeight || window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const renderLoop = () => {
      // 1. Smooth cursor lerp at factor 0.1
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.1;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.1;

      // 2. Smooth grid parallax at factor 0.06
      gridOffset.current.x += (gridOffset.current.targetX - gridOffset.current.x) * 0.06;
      gridOffset.current.y += (gridOffset.current.targetY - gridOffset.current.y) * 0.06;

      if (gridPatternRef.current) {
        gridPatternRef.current.setAttribute('x', gridOffset.current.x.toFixed(2));
        gridPatternRef.current.setAttribute('y', gridOffset.current.y.toFixed(2));
      }

      // 3. Render Canvas Mask for Reveal Layer
      if (ctx && canvas && revealDivRef.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const curX = mousePos.current.x;
        const curY = mousePos.current.y;

        if (curX > -500 && curY > -500) {
          const radius = 260;
          const gradient = ctx.createRadialGradient(curX, curY, 0, curX, curY, radius);

          // stops: 0->1 opacity, 0.4->1, 0.6->0.75, 0.75->0.4, 0.88->0.12, 1->0
          gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.4, 'rgba(0, 0, 0, 1)');
          gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.75)');
          gradient.addColorStop(0.75, 'rgba(0, 0, 0, 0.4)');
          gradient.addColorStop(0.88, 'rgba(0, 0, 0, 0.12)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(curX, curY, radius, 0, Math.PI * 2);
          ctx.fill();

          const maskUrl = canvas.toDataURL();
          revealDivRef.current.style.maskImage = `url(${maskUrl})`;
          revealDivRef.current.style.webkitMaskImage = `url(${maskUrl})`;
          revealDivRef.current.style.maskSize = '100% 100%';
          revealDivRef.current.style.webkitMaskSize = '100% 100%';
        }
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [hasMouseMoved]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-black select-none"
      id="hero-module"
    >
      {/* Hidden full-window canvas for mask generation */}
      <canvas
        ref={canvasRef}
        className="hidden pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 1: Grid background (z-0) with parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              ref={gridPatternRef}
              id="cyber-grid-pattern"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#64748b"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-grid-pattern)" />
        </svg>
      </div>

      {/* Layer 2: Base image (z-10) with Ken Burns intro */}
      <div
        className="absolute inset-0 z-10 bg-center bg-cover animate-ken-burns transition-transform duration-700"
        style={{
          backgroundImage: `url(${HERO_ASSETS.BG_IMAGE_1})`,
        }}
        aria-label="Sunny Jadaun Portfolio Visual"
      />

      {/* Dark gradient overlay for crisp text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none" />

      {/* Layer 3: Cursor spotlight reveal layer (z-30) */}
      <div
        ref={revealDivRef}
        className="absolute inset-0 z-30 bg-center bg-cover pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage: `url(${HERO_ASSETS.BG_IMAGE_2})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
        aria-label="Sunny Jadaun Portfolio Spotlight Visual"
      />

      {/* Layer 4: Stats on a fading circular arc (z-50, hidden below sm) */}
      <div className="hidden sm:block absolute inset-y-0 right-0 z-50 pointer-events-none w-full md:w-3/4 max-w-[800px]">
        <svg
          viewBox="0 0 380 700"
          preserveAspectRatio="xMaxYMid meet"
          className="h-full w-auto ml-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {HERO_STATS.map((stat, idx) => {
              const pStart = polarToCartesian(stat.r, stat.startAngle);
              const pEnd = polarToCartesian(stat.r, stat.endAngle);
              return (
                <linearGradient
                  key={`grad-${idx}`}
                  id={`arcGradient-${idx}`}
                  gradientUnits="userSpaceOnUse"
                  x1={pStart.x}
                  y1={pStart.y}
                  x2={pEnd.x}
                  y2={pEnd.y}
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="22%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="85%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              );
            })}
          </defs>

          {HERO_STATS.map((stat, idx) => {
            const pStart = polarToCartesian(stat.r, stat.startAngle);
            const pEnd = polarToCartesian(stat.r, stat.endAngle);
            const pDot = polarToCartesian(stat.r, stat.dotAngle);

            const deltaRad = ((stat.endAngle - stat.startAngle) * Math.PI) / 180;
            const arcLength = Math.abs(stat.r * deltaRad);

            const lineDelay = 0.4 + idx * 0.22;
            const markDelay = lineDelay + 0.9;

            // Arc Path
            const pathD = `M ${pStart.x.toFixed(2)} ${pStart.y.toFixed(2)} A ${stat.r} ${stat.r} 0 0 1 ${pEnd.x.toFixed(2)} ${pEnd.y.toFixed(2)}`;

            return (
              <g key={`arc-group-${idx}`}>
                {/* Arc stroke line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={`url(#arcGradient-${idx})`}
                  strokeWidth="1.1"
                  className="arc-line"
                  style={
                    {
                      '--len': `${arcLength}px`,
                      animationDelay: `${lineDelay}s`,
                    } as React.CSSProperties
                  }
                />

                {/* Outer Ring with pulse */}
                <circle
                  cx={pDot.x}
                  cy={pDot.y}
                  r="7"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  className="arc-ring"
                  style={{
                    animationDelay: `${markDelay + 0.3}s`,
                  }}
                />

                {/* Center Filled Dot */}
                <circle
                  cx={pDot.x}
                  cy={pDot.y}
                  r="3.4"
                  fill="#ffffff"
                  className="arc-dot"
                  style={{
                    animationDelay: `${markDelay}s`,
                  }}
                />

                {/* Stat Number */}
                <text
                  x={pDot.x + 16}
                  y={pDot.y + 4}
                  fill="#ffffff"
                  fontSize="32"
                  fontWeight="700"
                  fontFamily="'JetBrains Mono', monospace"
                  className="arc-text font-helvetica-neue select-none"
                  style={{
                    animationDelay: `${markDelay + 0.15}s`,
                  }}
                >
                  {stat.value}
                  <tspan
                    fontSize="19"
                    dy="-10"
                    letterSpacing="-1px"
                    fontWeight="600"
                  >
                    {stat.suffix}
                  </tspan>
                </text>

                {/* Stat Label */}
                <text
                  x={pDot.x + 18}
                  y={pDot.y + 22}
                  fill="#ffffff"
                  fontSize="8.5"
                  fontWeight="600"
                  letterSpacing="2px"
                  opacity="0.8"
                  fontFamily="'JetBrains Mono', monospace"
                  className="arc-text font-helvetica-neue uppercase select-none"
                  style={{
                    animationDelay: `${markDelay + 0.3}s`,
                  }}
                >
                  {stat.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Layer 5: Hero text block (z-50) */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-5 sm:left-8 md:left-12 max-w-[340px] sm:max-w-md md:max-w-lg z-50 text-white">
        {/* Eyebrow */}
        <div
          className="hero-rise text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-white/90 mb-3 sm:mb-4 flex items-center gap-2"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>
            {PERSONAL_INFO.name} • <span className="italic font-bold">Full-Stack Lead & WebXR</span>
          </span>
        </div>

        {/* H1 Heading */}
        <h1
          className="hero-rise text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.08em] text-white mb-4 sm:mb-5 font-helvetica-neue"
          style={{ animationDelay: '0.3s' }}
        >
          Building Scalable <br />
          Enterprise Apps & <br />
          Spatial 3D Web
        </h1>

        {/* Paragraph */}
        <p
          className="hero-rise text-sm sm:text-base text-gray-200 leading-relaxed mb-7 sm:mb-8 font-light"
          style={{ animationDelay: '0.5s' }}
        >
          Full-Stack & Frontend Lead Developer with 4+ years of experience architecting high-performance React/Node.js platforms, WhatsApp automation microservices, and immersive Three.js WebXR experiences.
        </p>

        {/* Action Group */}
        <div
          className="hero-rise flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.7s' }}
        >
          {/* CTA Button */}
          <button
            onClick={onOpenConnect}
            className="group relative overflow-hidden px-7 sm:px-8 py-3 sm:py-3.5 bg-white text-gray-900 font-semibold text-sm rounded-full shadow-lg shadow-black/40 hover:scale-[1.04] active:scale-95 transition-all duration-200"
          >
            <span className="relative z-10 tracking-tight flex items-center gap-1.5">
              Get In Touch
              <span className="text-red-600 font-bold transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            {/* Shine sweep */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 pointer-events-none"
              aria-hidden="true"
            />
          </button>

          {/* Quick Portfolio Button */}
          <button
            onClick={onExplore}
            className="px-5 py-3 rounded-full text-xs font-semibold tracking-wider text-white/90 border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
          >
            VIEW PROJECTS [4+ YRS]
          </button>
        </div>

        {/* Professional Status Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-6 text-[10px] text-gray-400 tracking-widest uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            <span className="text-green-300 font-semibold">AVAILABLE FOR HIRE</span>
          </div>
          <div>REACT • NODE.JS • WEBXR</div>
        </div>
      </div>
    </section>
  );
};
