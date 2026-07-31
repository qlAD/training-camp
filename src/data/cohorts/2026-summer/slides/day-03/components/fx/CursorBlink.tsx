'use client';

import React from 'react';
import { motion } from 'motion/react';

/** 闪烁光标：编辑器式块状光标，无限呼吸闪烁 */
export const CursorBlink: React.FC<{ color?: string; className?: string }> = ({
  color = 'rgba(249,115,22,0.8)',
  className = '',
}) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
    <motion.span
      className="absolute left-1/2 top-1/2 h-6 w-3 rounded-[2px]"
      style={{ backgroundColor: color, x: '-50%', y: '-50%', boxShadow: `0 0 12px ${color}` }}
      animate={{ opacity: [1, 0.15, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);
