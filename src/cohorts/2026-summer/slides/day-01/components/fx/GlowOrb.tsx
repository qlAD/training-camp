'use client';

import React from 'react';
import { motion } from 'motion/react';

interface GlowOrbProps {
  className?: string;
  /** 径向渐变颜色（带透明度） */
  color?: string;
}

/** 辉光光球：径向渐变 + blur，呼吸明暗 */
export const GlowOrb: React.FC<GlowOrbProps> = ({
  className = '',
  color = 'rgba(99,102,241,0.3)',
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
      filter: 'blur(30px)',
    }}
    animate={{ opacity: [0.7, 1, 0.75] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    aria-hidden
  />
);
