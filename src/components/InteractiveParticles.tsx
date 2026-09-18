import React, { useEffect, useRef } from 'react';

export const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // High DPI scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse tracking relative to canvas
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 190,
    };

    // Star particle definition
    interface StarParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isAccent: boolean;
      twinkleSpeed: number;
      twinkleAngle: number;
      baseAlpha: number;
    }

    // High quantity of micro stars (240 - 520 stars)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 2800), 240), 520);
    const stars: StarParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isAccent = Math.random() < 0.25; // 25% crimson stardust, 75% white/silver stardust
      const radius = isAccent ? Math.random() * 0.7 + 0.7 : Math.random() * 0.6 + 0.4; // 0.4px - 1.4px tiny stars
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius,
        isAccent,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        twinkleAngle: Math.random() * Math.PI * 2,
        baseAlpha: isAccent ? Math.random() * 0.35 + 0.55 : Math.random() * 0.4 + 0.4,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.parentElement.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    const connectionDistance = 95; // Delicate connection radius for micro stars

    // Render loop
    const render = () => {
      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      ctx.clearRect(0, 0, width, height);

      // Update & Draw stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Move
        s.x += s.vx;
        s.y += s.vy;

        // Bounce gently off canvas boundaries
        if (s.x < 0) {
          s.x = 0;
          s.vx *= -1;
        } else if (s.x > width) {
          s.x = width;
          s.vx *= -1;
        }

        if (s.y < 0) {
          s.y = 0;
          s.vy *= -1;
        } else if (s.y > height) {
          s.y = height;
          s.vy *= -1;
        }

        // Natural star twinkle animation
        s.twinkleAngle += s.twinkleSpeed;
        const currentAlpha = Math.max(0.15, Math.min(1, s.baseAlpha + Math.sin(s.twinkleAngle) * 0.28));

        // Mouse interactive physics (gentle starlight dispersal)
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          s.x -= forceDirectionX * force * 4.2;
          s.y -= forceDirectionY * force * 4.2;
        }

        // Draw micro star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        if (s.isAccent) {
          ctx.fillStyle = `rgba(239, 68, 68, ${currentAlpha})`; // Crimson star
          ctx.shadowColor = 'rgba(239, 68, 68, 0.6)';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`; // White/silver star
          ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = 2;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw delicate constellation connections between neighboring micro stars
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const pDx = s.x - s2.x;
          const pDy = s.y - s2.y;
          const pDist = Math.sqrt(pDx * pDx + pDy * pDy);

          if (pDist < connectionDistance) {
            const lineAlpha = (1 - pDist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            if (s.isAccent || s2.isAccent) {
              ctx.strokeStyle = `rgba(239, 68, 68, ${lineAlpha * 1.3})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha * 0.8})`;
            }
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        }

        // Draw subtle filament from cursor to nearby micro stars
        if (dist < mouse.radius) {
          const mouseLineAlpha = (1 - dist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = `rgba(239, 68, 68, ${mouseLineAlpha})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
      aria-hidden="true"
    />
  );
};
