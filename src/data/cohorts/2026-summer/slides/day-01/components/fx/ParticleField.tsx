'use client';

import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface ParticleFieldProps {
  count?: number;
}

/** 漂浮粒子：transform/opacity 无限动画，数量 ≤20 保证性能 */
export const ParticleField: React.FC<ParticleFieldProps> = ({ count = 14 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: Math.min(count, 20) }, (_, i) => ({
        left: `${(i * 7.3 + 4) % 96}%`,
        top: `${(i * 13.7 + 8) % 92}%`,
        size: 2 + (i % 3) * 2,
        dur: 5 + (i % 5) * 1.6,
        delay: (i % 7) * 0.7,
        color: ['#22D3EE', '#E879F9', '#6366F1', '#FBBF24', '#34D399'][i % 5],
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{ y: [0, -26, 0], opacity: [0.25, 0.85, 0.25], scale: [1, 1.25, 1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};
