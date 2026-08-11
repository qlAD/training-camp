'use client';

import React from 'react';
import { motion } from 'motion/react';

/* 数据脉冲：从中心向外的双层扩散圆环（无限循环，作为镜头氛围） */
export const DataRipple: React.FC<{ color?: string; className?: string }> = ({
  color = 'rgba(56,189,248,0.5)',
  className = '',
}) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: color }}
        animate={{ scale: [1, 3.4], opacity: [0.6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.1, ease: 'easeOut' }}
      />
    ))}
  </div>
);
