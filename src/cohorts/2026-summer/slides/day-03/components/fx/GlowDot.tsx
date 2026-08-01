'use client';

import React from 'react';
import { motion } from 'motion/react';

interface GlowDotProps {
  color?: string;
  count?: number;
  className?: string;
}

/** 语法辉光点：多颗小光点缓慢漂移（编辑器氛围） */
export const GlowDot: React.FC<GlowDotProps> = ({ color = 'rgba(56,189,248,0.5)', count = 5, className = '' }) => {
  const seeds = [22, 41, 63, 78, 35, 12, 55, 90];
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const sx = seeds[i * 2] % 100;
        const sy = seeds[(i * 2 + 1) % seeds.length] % 100;
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full"
            style={{ backgroundColor: color, left: `${sx}%`, top: `${sy}%` }}
            animate={{ x: [0, 14, -8, 0], y: [0, -10, 8, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 7 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
};
