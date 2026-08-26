import React, { useRef, useState } from 'react';

interface SpatialHoloStageProps {
  image: string;
  alt: string;
  accentColor?: 'red' | 'cyan' | 'amber' | 'green';
  statusBadge?: {
    title: string;
    value: string;
    icon?: React.ReactNode;
  };
  domainBadge?: {
    title: string;
    value: string;
    icon?: React.ReactNode;
  };
  telemetryId?: string;
  heightClass?: string;
  imageClassName?: string;
}

export const SpatialHoloStage: React.FC<SpatialHoloStageProps> = ({
  image,
  alt,
  accentColor = 'red',
  statusBadge,
  domainBadge,
  telemetryId = '0x7F // SPATIAL_NODE',
  heightClass = 'h-[420px] sm:h-[480px] lg:h-[500px]',
  imageClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    red: {
      border: 'border-red-500/40',
      text: 'text-red-400',
      bgGlow: 'rgba(239, 68, 68, 0.2)',
      ring: '#ef4444',
      accentBg: 'bg-red-950/80',
    },
    cyan: {
      border: 'border-cyan-500/40',
      text: 'text-cyan-400',
      bgGlow: 'rgba(6, 182, 212, 0.2)',
      ring: '#06b6d4',
      accentBg: 'bg-cyan-950/80',
    },
    amber: {
      border: 'border-amber-500/40',
      text: 'text-amber-400',
      bgGlow: 'rgba(245, 158, 11, 0.2)',
      ring: '#f59e0b',
      accentBg: 'bg-amber-950/80',
    },
    green: {
      border: 'border-green-500/40',
      text: 'text-green-400',
      bgGlow: 'rgba(34, 197, 94, 0.2)',
      ring: '#22c55e',
      accentBg: 'bg-green-950/80',
    },
  }[accentColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${heightClass} flex items-end justify-center perspective-[1200px] select-none cursor-pointer group`}
    >
      {/* 3D Tilting Stage Container */}
      <div
        className="relative w-full h-full flex items-end justify-center transition-transform duration-300 ease-out preserve-3d"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 0: Background Holographic Radar Ring (Centered on Avatar Head/Torso) */}
        <div
          className="absolute inset-x-0 top-6 bottom-16 flex items-center justify-center pointer-events-none"
          style={{ transform: 'translateZ(-30px)' }}
        >
          <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-white/5 flex items-center justify-center relative">
            {/* Outer dashed slow rotating ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin"
              style={{ animationDuration: '40s' }}
            />
            {/* Inner colored accent ring */}
            <div
              className={`absolute inset-5 rounded-full border border-dashed ${colors.border} opacity-50 animate-spin`}
              style={{ animationDuration: '24s', animationDirection: 'reverse' }}
            />

            {/* Coordinate Cardinal Markers */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-gray-500">▲ 90°</div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-gray-500">▼ 270°</div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] font-mono text-gray-500">◀ 180°</div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] font-mono text-gray-500">▶ 000°</div>
          </div>
        </div>

        {/* Layer 1: Holographic Base Pedestal (Positioned Under Avatar Base) */}
        <div
          className="absolute bottom-2 w-[260px] sm:w-[340px] h-[70px] pointer-events-none flex items-center justify-center"
          style={{ transform: 'rotateX(72deg) translateZ(5px)' }}
        >
          {/* Outer Dashed Pedestal Ring */}
          <div
            className={`w-full h-full rounded-full border-2 border-dashed ${colors.border} animate-spin`}
            style={{ animationDuration: '18s' }}
          />
          {/* Inner Glowing Core */}
          <div
            className="absolute inset-2 rounded-full border border-white/25 animate-pulse"
            style={{
              boxShadow: `0 0 25px ${colors.ring}, inset 0 0 15px ${colors.ring}`,
            }}
          />
          <div className="absolute inset-6 rounded-full border border-white/30" />
        </div>

        {/* Layer 2: 3D Avatar Image (Perfect Bottom Anchoring with Subtle Base Mask) */}
        <div
          className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none pb-4"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="relative max-h-full flex items-end justify-center [mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]">
            <img
              src={image}
              alt={alt}
              className={`max-h-[380px] sm:max-h-[440px] w-auto object-contain object-bottom transition-transform duration-500 ${
                isHovered ? 'scale-[1.04]' : 'scale-100'
              } ${imageClassName}`}
            />
          </div>
        </div>

        {/* Layer 3: Floating Foreground 3D Glass Badges & HUD Elements */}
        <div
          className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 sm:p-4"
          style={{ transform: 'translateZ(65px)' }}
        >
          {/* Top Row Telemetry */}
          <div className="flex items-center justify-between w-full">
            {statusBadge ? (
              <div className="glass-panel px-3.5 py-2 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
                {statusBadge.icon || <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />}
                <div>
                  <div className="text-[8px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                    {statusBadge.title}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {statusBadge.value}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-[9px] font-mono text-gray-400 bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
                {telemetryId}
              </div>
            )}

            <div className="text-[9px] font-mono px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-gray-300 backdrop-blur-md">
              [ 3D SPATIAL // 60 FPS ]
            </div>
          </div>

          {/* Bottom Row Domain Badge */}
          {domainBadge && (
            <div className="flex items-center justify-end w-full pb-2">
              <div
                className={`glass-panel px-4 py-2.5 rounded-2xl border ${colors.border} shadow-2xl backdrop-blur-xl flex items-center gap-2.5`}
              >
                {domainBadge.icon}
                <div>
                  <div className={`text-[8px] font-mono ${colors.text} uppercase font-bold tracking-wider`}>
                    {domainBadge.title}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {domainBadge.value}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
