import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { Sparkles, Zap, Eye } from 'lucide-react';

interface InteractiveLabProps {
  onOpenConnect: () => void;
}

export const InteractiveLab: React.FC<InteractiveLabProps> = ({ onOpenConnect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [simulationMode, setSimulationMode] = useState<'hologram' | 'ar-card' | 'matrix'>('hologram');
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const angleRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = 420;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes for spatial computing simulation
    const nodeCount = 45;
    const nodes: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        z: (Math.random() - 0.5) * 300,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.8,
      });
    }

    // 3D Cube vertices
    const cubeVertices = [
      { x: -70, y: -70, z: -70 },
      { x: 70, y: -70, z: -70 },
      { x: 70, y: 70, z: -70 },
      { x: -70, y: 70, z: -70 },
      { x: -70, y: -70, z: 70 },
      { x: 70, y: -70, z: 70 },
      { x: 70, y: 70, z: 70 },
      { x: -70, y: 70, z: 70 },
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    // AR Card vertices
    const cardVertices = [
      { x: -110, y: -65, z: 0 },
      { x: 110, y: -65, z: 0 },
      { x: 110, y: 65, z: 0 },
      { x: -110, y: 65, z: 0 },
      // Floating avatar marker
      { x: 0, y: -30, z: 45 },
      { x: 30, y: 0, z: 45 },
      { x: 0, y: 30, z: 45 },
      { x: -30, y: 0, z: 45 },
    ];

    const cardEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    const render = () => {
      ctx.fillStyle = '#08080c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const fov = 350;

      if (isRotating) {
        angleRef.current.y += 0.015 * rotationSpeed;
        angleRef.current.x += 0.008 * rotationSpeed;
      }

      const rotX = angleRef.current.x;
      const rotY = angleRef.current.y;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Draw background grid lines inside 3D viewport
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Rotate point helper
      const project = (p: { x: number; y: number; z: number }) => {
        // Y rotation
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // X rotation
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX + 280;

        const scale = fov / Math.max(z2, 1);
        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          scale,
          z: z2,
        };
      };

      if (simulationMode === 'hologram' || simulationMode === 'matrix') {
        // Draw 3D Cube / Polyhedron Wireframe
        const projVertices = cubeVertices.map(project);

        // Draw connecting edges
        ctx.strokeStyle = simulationMode === 'hologram' ? '#ef4444' : '#06b6d4';
        ctx.lineWidth = 1.6;
        cubeEdges.forEach(([start, end]) => {
          const p1 = projVertices[start];
          const p2 = projVertices[end];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Draw vertices
        projVertices.forEach((p, idx) => {
          ctx.fillStyle = idx % 2 === 0 ? '#ffffff' : '#ef4444';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw inner floating sphere/particles
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;
          if (Math.abs(n.x) > 140) n.vx *= -1;
          if (Math.abs(n.y) > 140) n.vy *= -1;
          if (Math.abs(n.z) > 140) n.vz *= -1;

          const p = project(n);
          ctx.fillStyle = simulationMode === 'hologram' ? 'rgba(239, 68, 68, 0.7)' : 'rgba(6, 182, 212, 0.7)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1.5 * p.scale, 0.5), 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (simulationMode === 'ar-card') {
        // Draw AR Digital Business Card Simulation (Immarsify)
        const projCard = cardVertices.map(project);

        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.8;
        cardEdges.forEach(([start, end]) => {
          const p1 = projCard[start];
          const p2 = projCard[end];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Draw center text / hologram tag
        const centerCard = projCard[0];
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText('SUNNY JADAUN // IMMARSIFY AR CARD', centerCard.x + 10, centerCard.y + 20);
      }

      // Telemetry HUD overlay on canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText(`FPS: 60 // THREE.JS & WEBXR SIMULATOR // SPEED: ${rotationSpeed.toFixed(1)}x`, 16, 24);
      ctx.fillText(`ROTATION X: ${rotX.toFixed(2)} | ROTATION Y: ${rotY.toFixed(2)}`, 16, 40);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current.isDown) return;
      const dx = e.clientX - mouseRef.current.lastX;
      const dy = e.clientY - mouseRef.current.lastY;
      angleRef.current.y += dx * 0.01;
      angleRef.current.x += dy * 0.01;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [simulationMode, rotationSpeed, isRotating]);

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-white relative">
      {/* Telemetry Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-sm animate-pulse" />
        <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">
          [ 05 // INTERACTIVE 3D & WEBXR SHOWCASE ]
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-helvetica-neue text-white">
            Interactive 3D & <br className="hidden sm:block" />
            <span className="text-red-500">Spatial WebXR Lab</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl text-sm sm:text-base">
            Live interactive 3D spatial viewport prototype. Click and drag in the canvas to rotate the 3D models in real time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 p-1.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
          <button
            onClick={() => setSimulationMode('hologram')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
              simulationMode === 'hologram'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            3D Wireframe Cube
          </button>
          <button
            onClick={() => setSimulationMode('ar-card')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
              simulationMode === 'ar-card'
                ? 'bg-green-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Immarsify AR Card
          </button>
          <button
            onClick={() => setSimulationMode('matrix')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
              simulationMode === 'matrix'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Cyan Polyhedron
          </button>
        </div>
      </div>

      {/* Main Interactive Viewport & Spatial Vision Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Canvas Area */}
        <div className="lg:col-span-7 glass-panel rounded-3xl border border-white/15 p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-[#08080c] border border-white/10 cursor-grab active:cursor-grabbing">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Interactive Hint */}
            <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] font-mono text-gray-400 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span>CLICK & DRAG TO ROTATE 3D MESH</span>
            </div>
          </div>

          {/* Controls Console */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {/* Speed control */}
            <div className="space-y-2 bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="flex justify-between text-xs font-mono text-gray-300">
                <span>ROTATION SPEED</span>
                <span className="text-red-400 font-bold">{rotationSpeed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="0.2"
                value={rotationSpeed}
                onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                className="w-full accent-red-500 cursor-pointer"
              />
            </div>

            {/* Pause / Play Toggle */}
            <div className="flex items-center justify-between bg-black/40 p-3 rounded-2xl border border-white/5">
              <span className="text-xs font-mono text-gray-300">AUTO-ORBIT</span>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  isRotating ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}
              >
                {isRotating ? 'ACTIVE [ON]' : 'PAUSED [OFF]'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Spatial Vision Cutout Showcase Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-2 mb-5">
              <img
                src={PORTFOLIO_IMAGES.sunnyWebxrCutout}
                alt="WebXR Spatial Computing Avatar"
                className="w-full h-auto max-h-[300px] object-contain object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-black/80 text-[10px] font-mono text-cyan-300 border border-cyan-500/40 font-semibold flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cyan-400" />
                  THREE.JS & MINDAR
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold font-helvetica-neue text-white mb-2">
              Zero-Install WebXR Experiences
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              Rendering interactive 3D spatial models directly inside standard mobile web browsers at 60 FPS, eliminating app download barriers for enterprise products.
            </p>
          </div>

          <button
            onClick={onOpenConnect}
            className="w-full py-3 rounded-2xl bg-white text-gray-900 font-bold text-xs tracking-wider hover:bg-gray-200 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-red-600" />
            <span>COMMISSION 3D / WEBXR PROJECT</span>
          </button>
        </div>
      </div>
    </section>
  );
};
