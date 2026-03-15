import React, { useEffect, useRef } from 'react';

/* 
  WorkNest logo colors:
  Dark teal, emerald, mint.
*/
const PALETTE = [
  '#064e3b', // very dark emerald/green
  '#0f766e', // teal
  '#10b981', // emerald
  '#34d399', // light emerald
  '#94a3b8', // slate/gray matching dark parts
  '#1e293b', // dark navy
];

const ParticleCanvas = ({ count = 200 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Create highly scattered, randomized particle population */
    const make = () => {
      const W = canvas.width;
      const H = canvas.height;
      return Array.from({ length: count }, () => {
        const len = Math.random() * 8 + 4; // dash length 4px to 12px
        const thick = Math.random() * 1.5 + 0.5; // dash thickness
        return {
          id: Math.random(),
          x:       Math.random() * W,
          y:       Math.random() * H,
          len,
          thick,
          color:   PALETTE[Math.floor(Math.random() * PALETTE.length)],
          alpha:   Math.random() * 0.4 + 0.15,   // soft opacity
          
          vx: (Math.random() - 0.5) * 1.5, // much more random initial horizontal velocity
          vy: (Math.random() - 0.5) * 1.5, // much more random initial vertical velocity
          baseAngle: Math.random() * Math.PI * 2, // offset for the flow math so they aren't all in straight lines
          speedFactor: Math.random() * 0.8 + 0.2, // much higher variance in how fast they go
          wobbleFactor: Math.random() * 0.005 + 0.001 // random wobble frequency per particle
        };
      });
    };

    let particles = make();
    let time = 0;

    const draw = () => {
      time += 0.0015; // Slow down time for a more relaxed look
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // Complex noise simulation:
        // Use individual p.baseAngle + p.wobbleFactor * time to break them out of linear patterns
        const scale = 0.002; 
        
        // Flow angle is wildly varied by particle's base offset + position
        const fieldAngle = Math.sin(p.x * scale + time) * Math.cos(p.y * scale + p.baseAngle) * Math.PI * 2;
        
        // Target velocity based on the field with individual speed variance
        const targetVx = Math.cos(fieldAngle) * p.speedFactor;
        const targetVy = Math.sin(fieldAngle) * p.speedFactor - 0.15; // gentle upward draft

        // Smoothly interpolate current velocity to target (fluidity)
        p.vx += (targetVx - p.vx) * 0.03;
        p.vy += (targetVy - p.vy) * 0.03;

        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges smoothly
        if (p.x < -20) p.x = W + 20;
        else if (p.x > W + 20) p.x = -20;
        
        if (p.y < -20) p.y = H + 20;
        else if (p.y > H + 20) p.y = -20;

        // Calculate rotation angle to align the dash with its velocity vector nicely
        const angle = Math.atan2(p.vy, p.vx);

        // Draw flowing dash (Antigravity style but highly chaotic/confetti like)
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(angle);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.thick;
        ctx.lineCap = 'round';
        ctx.beginPath();
        // Draw centered line segment
        ctx.moveTo(-p.len / 2, 0);
        ctx.lineTo(p.len / 2, 0);
        ctx.stroke();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleCanvas;
