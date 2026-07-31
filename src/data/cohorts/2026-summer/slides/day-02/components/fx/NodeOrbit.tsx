'use client';

import React from 'react';
import { motion } from 'motion/react';

interface NodeOrbitProps {
  count?: number;
  radius?: number;
  color?: string;
  className?: string;
}

/** 环绕节点光点：多个光点沿圆周公转（无限循环，网络感氛围） */
export const NodeOrbit: React.FC<NodeOrbitProps> = ({
  count = 6,
  radius = 110,
  color = 'rgba(45,212,191,0.8)',
  className = '',
}) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}>
    {Array.from({ length: count }).map((_, i) => {
      const a0 = (i / count) * Math.PI * 2;
      const a1 = a0 + Math.PI * 2;
      return (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
          animate={{
            x: [Math.cos(a0) * radius, Math.cos(a1) * radius],
            y: [Math.sin(a0) * radius, Math.sin(a1) * radius],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      );
    })}
  </div>
);
